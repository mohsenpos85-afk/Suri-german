// Supabase Edge Function — proxies Claude API calls so the Anthropic key
// never reaches the browser. Requires a valid Supabase session (JWT).
//
// Deploy: supabase functions deploy claude-proxy
// Secrets:
//   supabase secrets set ANTHROPIC_API_KEY=sk-ant-...
//   supabase secrets set TRANSLATE_MODEL=<cheap model id>      (optional)
//   supabase secrets set ALLOWED_ORIGINS=https://your-app.example (optional, comma separated)
//
// Two request shapes are accepted:
//   1. { mode: "translate", kind: "line" | "word", text, target, context? }
//      → the server builds the prompt itself; the client cannot choose the
//        model, the system prompt or the token budget.
//   2. { model, max_tokens, system?, messages } (legacy chat / exam features)
//      → only whitelisted models, capped tokens and message size, and no other
//        Anthropic request fields (tools, streaming, …) are forwarded.
//
// Both are rate limited per user. The limiter lives in the function instance's
// memory, so it is best-effort (instances are recycled); for a hard guarantee
// add a Postgres counter table.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY");
const ALLOWED_ORIGINS = (Deno.env.get("ALLOWED_ORIGINS") ?? "")
  .split(",").map((s) => s.trim()).filter(Boolean);

const CHAT_MODELS = new Set(["claude-sonnet-4-20250514"]);
const TRANSLATE_MODEL = Deno.env.get("TRANSLATE_MODEL") ?? "claude-sonnet-4-20250514";

const LIMITS = {
  chat:      { perMinute: 10, perDay: 150, maxTokens: 4000, maxMessages: 40, maxChars: 40000 },
  translate: { perMinute: 40, perDay: 1500, maxTokens: 400,  maxChars: 700 },
};

const TARGETS: Record<string, string> = {
  tr: "Turkish",
  ku: "Central Kurdish (Sorani, Arabic script)",
  en: "English",
  ar: "Modern Standard Arabic",
  uk: "Ukrainian",
  fa: "Persian (Farsi)",
  es: "Spanish",
};

function corsFor(req: Request) {
  const origin = req.headers.get("Origin") ?? "";
  const allow = ALLOWED_ORIGINS.length === 0
    ? "*"
    : ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Vary": "Origin",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

// ── per-user sliding-window limiter (best effort, in memory) ───────────
const hits = new Map<string, number[]>();
function allow(userId: string, bucket: "chat" | "translate"): string | null {
  const now = Date.now();
  const key = `${bucket}:${userId}`;
  const list = (hits.get(key) ?? []).filter((t) => now - t < 86_400_000);
  const lim = LIMITS[bucket];
  const lastMinute = list.filter((t) => now - t < 60_000).length;
  if (lastMinute >= lim.perMinute) return "Too many requests, slow down.";
  if (list.length >= lim.perDay) return "Daily limit reached, try again tomorrow.";
  list.push(now);
  hits.set(key, list);
  if (hits.size > 5000) { // keep memory bounded
    for (const [k, v] of hits) if (v.every((t) => now - t > 86_400_000)) hits.delete(k);
  }
  return null;
}

function json(req: Request, status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsFor(req), "Content-Type": "application/json" },
  });
}

async function callAnthropic(payload: Record<string, unknown>) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY ?? "",
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return { status: res.status, data };
}

function textOf(data: any): string {
  return (data?.content ?? []).filter((b: any) => b.type === "text").map((b: any) => b.text).join("").trim();
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsFor(req) });
  if (req.method !== "POST") return json(req, 405, { error: "Method not allowed" });

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return json(req, 401, { error: "Missing authorization" });

  const supabase = createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) return json(req, 401, { error: "Invalid session" });

  let body: any;
  try { body = await req.json(); } catch { return json(req, 400, { error: "Invalid JSON body" }); }
  if (!body || typeof body !== "object") return json(req, 400, { error: "Invalid body" });

  try {
    // ── 1. Translation mode ──────────────────────────────────────────
    if (body.mode === "translate") {
      const { kind, text, target, context } = body;
      if (kind !== "line" && kind !== "word") return json(req, 400, { error: "Bad kind" });
      if (typeof text !== "string" || !text.trim() || text.length > LIMITS.translate.maxChars) {
        return json(req, 400, { error: "Bad text" });
      }
      const targetName = TARGETS[String(target)];
      if (!targetName) return json(req, 400, { error: "Bad target language" });
      const ctx = typeof context === "string" ? context.slice(0, LIMITS.translate.maxChars) : "";

      const limited = allow(user.id, "translate");
      if (limited) return json(req, 429, { error: limited });

      let system: string;
      let userMsg: string;
      if (kind === "line") {
        system =
          `You translate German lines from a language-learning story into ${targetName}. ` +
          `Keep the speaker's tone and register (formal Sie vs informal du). Keep proper names unchanged. ` +
          `Reply with the translation only: no quotes, no notes, no German.`;
        userMsg = text;
      } else {
        system =
          `You are a German dictionary for learners whose language is ${targetName}. ` +
          `Given one German word form taken from a sentence, answer with a single JSON object and nothing else: ` +
          `{"base":"dictionary form","article":"der|die|das or empty","type":"noun|verb|adj|adv|phrase","translation":"short meaning in ${targetName} that fits the sentence"}.`;
        userMsg = `Word: ${text}\nSentence: ${ctx || text}`;
      }

      const { status, data } = await callAnthropic({
        model: TRANSLATE_MODEL,
        max_tokens: LIMITS.translate.maxTokens,
        temperature: 0,
        system,
        messages: [{ role: "user", content: userMsg }],
      });
      if (status !== 200) return json(req, 502, { error: "Translation service error" });
      const out = textOf(data);
      if (!out) return json(req, 502, { error: "Empty translation" });

      if (kind === "word") {
        try {
          const m = out.match(/\{[\s\S]*\}/);
          const parsed = JSON.parse(m ? m[0] : out);
          return json(req, 200, {
            base: String(parsed.base ?? "").slice(0, 80),
            article: ["der", "die", "das"].includes(parsed.article) ? parsed.article : "",
            type: ["noun", "verb", "adj", "adv", "phrase"].includes(parsed.type) ? parsed.type : "phrase",
            translation: String(parsed.translation ?? "").slice(0, 160),
          });
        } catch {
          return json(req, 502, { error: "Bad dictionary answer" });
        }
      }
      return json(req, 200, { translation: out.slice(0, 1200) });
    }

    // ── 2. Legacy chat mode (whitelisted, capped, sanitised) ─────────
    const lim = LIMITS.chat;
    if (!CHAT_MODELS.has(body.model)) return json(req, 400, { error: "Model not allowed" });
    if (!Array.isArray(body.messages) || body.messages.length === 0 || body.messages.length > lim.maxMessages) {
      return json(req, 400, { error: "Bad messages" });
    }
    // Count text and media separately: the document scanner legitimately sends
    // a base64 photo, which must not count against the text budget.
    let textChars = typeof body.system === "string" ? body.system.length : 0;
    let mediaChars = 0;
    let mediaBlocks = 0;
    for (const m of body.messages) {
      if (!m || (m.role !== "user" && m.role !== "assistant")) return json(req, 400, { error: "Bad message" });
      if (typeof m.content === "string") { textChars += m.content.length; continue; }
      if (!Array.isArray(m.content)) return json(req, 400, { error: "Bad message content" });
      for (const b of m.content) {
        if (b?.type === "text") textChars += String(b.text ?? "").length;
        else if (b?.type === "image" || b?.type === "document") {
          mediaBlocks++;
          mediaChars += String(b?.source?.data ?? "").length;
        } else return json(req, 400, { error: "Block type not allowed" });
      }
    }
    if (textChars > lim.maxChars) return json(req, 413, { error: "Request too large" });
    if (mediaBlocks > 4 || mediaChars > 8_000_000) return json(req, 413, { error: "Attachment too large" });
    if (body.system !== undefined && typeof body.system !== "string") return json(req, 400, { error: "Bad system" });

    const limited = allow(user.id, "chat");
    if (limited) return json(req, 429, { error: limited });

    const payload: Record<string, unknown> = {
      model: body.model,
      max_tokens: Math.min(Math.max(Number(body.max_tokens) || 1000, 1), lim.maxTokens),
      messages: body.messages,
    };
    if (body.system) payload.system = body.system;
    if (typeof body.temperature === "number") payload.temperature = Math.min(Math.max(body.temperature, 0), 1);

    const { status, data } = await callAnthropic(payload);
    return json(req, status, data);
  } catch (e) {
    return json(req, 502, { error: e instanceof Error ? e.message : "Unknown error" });
  }
});
