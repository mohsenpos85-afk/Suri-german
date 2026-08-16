// Supabase Edge Function — permanently deletes the authenticated user's
// account and their server-side data. Required by App Store & Google Play.
//
// Deploy:  supabase functions deploy delete-account
// Secret:  supabase secrets set SUPABASE_SERVICE_ROLE_KEY=eyJ...   (service_role key)
//          (SUPABASE_URL and SUPABASE_ANON_KEY are provided automatically.)

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return json({ error: "Missing authorization" }, 401);

  // Identify the caller from their JWT (anon client scoped to their token)
  const userClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data: { user }, error: authError } = await userClient.auth.getUser();
  if (authError || !user) return json({ error: "Invalid session" }, 401);

  // Admin client (service role) — can delete data + the auth user
  const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

  // 1) Delete this user's rows from your data tables (best-effort).
  //    Add every table that stores user data, keyed by the user id.
  try {
    await admin.from("profiles").delete().eq("id", user.id);
    // await admin.from("progress").delete().eq("user_id", user.id);
    // await admin.from("favorites").delete().eq("user_id", user.id);
  } catch (_) { /* ignore missing tables */ }

  // 2) Delete the auth user itself (irreversible)
  const { error: delError } = await admin.auth.admin.deleteUser(user.id);
  if (delError) return json({ error: delError.message }, 500);

  return json({ ok: true });
});
