// Long-press popup for a favourite word: example sentences, where/how it is used, prepositions.
// Shows the word's own data immediately, then fills in richer content (cached) from the Claude proxy.
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Volume2, Loader2, RefreshCw, MessageSquareText, Link2, ListChecks } from "lucide-react";
import { useNavLayer } from "./lib/nav";
import { kuDialect } from "./data/kuDialects.js";

const CACHE_KEY = "suri_favuse_v1";
const RTL = ["ar", "fa"];
const LANG_NAME = { tr: "Turkish", en: "English", ar: "Arabic", fa: "Persian (Farsi)", es: "Spanish", uk: "Ukrainian", de: "German" };

const T = {
  tr: { ex: "Örnek cümleler", use: "Nerede ve nasıl kullanılır?", prep: "Edatlar", noPrep: "Bu kelimeyle sabit bir edat kullanılmaz.", loading: "Yükleniyor…", retry: "Tekrar dene", fail: "Ek bilgiler şu an alınamadı.", offline: "İnternet yok. Ek bilgiler için bağlantı gerekli.", auth: "Ek bilgiler için giriş yapmalısın.", close: "Kapat", hold: "Detay için uzun bas" },
  en: { ex: "Example sentences", use: "Where and how is it used?", prep: "Prepositions", noPrep: "No fixed preposition is used with this word.", loading: "Loading…", retry: "Retry", fail: "More details could not be loaded right now.", offline: "You are offline. More details need a connection.", auth: "Sign in to see more details.", close: "Close", hold: "Long-press for details" },
  ar: { ex: "جمل مثال", use: "أين وكيف تُستخدم؟", prep: "حروف الجر", noPrep: "لا يُستخدم حرف جر ثابت مع هذه الكلمة.", loading: "جارٍ التحميل…", retry: "أعد المحاولة", fail: "تعذّر تحميل مزيد من التفاصيل الآن.", offline: "أنت غير متصل. التفاصيل الإضافية تحتاج إلى اتصال.", auth: "سجّل الدخول لرؤية المزيد.", close: "إغلاق", hold: "اضغط مطولًا للتفاصيل" },
  fa: { ex: "جمله‌های نمونه", use: "کجا و چگونه به کار می‌رود؟", prep: "حروف اضافه", noPrep: "برای این واژه حرف اضافهٔ ثابتی به کار نمی‌رود.", loading: "در حال بارگذاری…", retry: "تلاش دوباره", fail: "جزئیات بیشتر اکنون بارگذاری نشد.", offline: "آفلاین هستی. جزئیات بیشتر به اینترنت نیاز دارد.", auth: "برای دیدن جزئیات بیشتر وارد شو.", close: "بستن", hold: "برای جزئیات نگه دار" },
  es: { ex: "Frases de ejemplo", use: "¿Dónde y cómo se usa?", prep: "Preposiciones", noPrep: "Esta palabra no lleva una preposición fija.", loading: "Cargando…", retry: "Reintentar", fail: "No se pudieron cargar más detalles ahora.", offline: "Sin conexión. Los detalles necesitan internet.", auth: "Inicia sesión para ver más detalles.", close: "Cerrar", hold: "Mantén pulsado para ver detalles" },
  uk: { ex: "Приклади речень", use: "Де і як вживається?", prep: "Прийменники", noPrep: "З цим словом немає сталого прийменника.", loading: "Завантаження…", retry: "Повторити", fail: "Не вдалося завантажити додаткові відомості.", offline: "Немає інтернету. Для додаткових відомостей потрібне підключення.", auth: "Увійди, щоб побачити більше.", close: "Закрити", hold: "Утримуй для деталей" },
  ku: { ex: "نموونەی ڕستە", use: "لە کوێ و چۆن بەکاردێت؟", prep: "ئامرازەکانی پەیوەندی (Präposition)", noPrep: "ئەم وشەیە ئامرازی جێگیری نییە.", loading: "بارکردن…", retry: "دووبارە", fail: "ئێستا نەتوانرا وردەکاری زیاتر بار بکرێت.", offline: "ئینتەرنێت نییە. بۆ وردەکاری زیاتر پەیوەندی پێویستە.", auth: "بۆ بینینی زیاتر بچۆ ژوورەوە.", close: "داخستن", hold: "بۆ وردەکاری درێژ دابگرە" },
  kmj: { ex: "Hevokên mînak", use: "Li ku û çawa tê bikaranîn?", prep: "Daçek (Präposition)", noPrep: "Bi vê peyvê re daçekeke sabît nayê bikaranîn.", loading: "Tê barkirin…", retry: "Dîsa biceribîne", fail: "Hûrgilî niha nehatin barkirin.", offline: "Înternet tune. Ji bo hûrgiliyan girêdan pêwîst e.", auth: "Ji bo hûrgiliyan têkeve.", close: "Bigire", hold: "Ji bo hûrgiliyan dirêj bitikîne" },
};
export function favLabels(lang) {
  const k = lang === "ku" && kuDialect() === "kurmanji" ? "kmj" : lang;
  return T[k] || T.en;
}
const isRtl = (lang) => RTL.includes(lang) || (lang === "ku" && kuDialect() !== "kurmanji");
function targetName(lang) {
  if (lang === "ku") { const d = kuDialect(); return d === "kurmanji" ? "Kurmanji Kurdish (Latin script)" : d === "badini" ? "Badini Kurdish (Arabic script)" : "Central Kurdish (Sorani, Arabic script)"; }
  return LANG_NAME[lang] || "English";
}

function readCache() { try { return JSON.parse(localStorage.getItem(CACHE_KEY) || "{}") || {}; } catch { return {}; } }
function writeCache(c) {
  try {
    const keys = Object.keys(c);
    if (keys.length > 300) keys.slice(0, keys.length - 300).forEach((k) => delete c[k]);
    localStorage.setItem(CACHE_KEY, JSON.stringify(c));
  } catch { /* storage full */ }
}

async function loadUsage(callClaude, L, translation, lang) {
  const key = `${L.de}|${lang}|${lang === "ku" ? kuDialect() : ""}`;
  const hit = readCache()[key];
  if (hit) return hit;
  const kindName = { verb: "verb (infinitive)", noun: "noun", adj: "adjective" }[L.kind] || "word or phrase";
  const system = "You are a precise German teacher for adult learners (levels A1–C1). Reply with ONLY one valid JSON object, no markdown, no commentary.";
  const prompt =
`German ${kindName}: "${L.de}"${translation ? ` (known meaning: ${translation})` : ""}${L.prep ? ` — fixed preposition in our data: "${L.prep}"` : ""}.
Write all explanations and translations in ${targetName(lang)}. German sentences must be natural and short (max 12 words).
Return exactly this JSON:
{"examples":[{"de":"…","tr":"translation of the sentence"},{"de":"…","tr":"…"},{"de":"…","tr":"…"}],
 "usage":"2–3 short sentences: in which situations it is used, formal/informal register, and how to use it (for a verb: Perfekt auxiliary and whether it is separable/irregular; for a noun: plural and typical combinations; for an adjective: typical use)",
 "preps":[{"phrase":"e.g. warten auf + Akk.","de":"German example sentence","tr":"translation"}]}
Rules: exactly 3 examples with different forms/contexts. "preps" lists the prepositions this word/verb is used with (with case); use [] if there are none. Do not invent prepositions.`;
  const data = await callClaude({ model: "claude-sonnet-4-20250514", max_tokens: 900, system, messages: [{ role: "user", content: prompt }] });
  const txt = (data.content || []).filter((c) => c.type === "text").map((c) => c.text).join("\n");
  const a = txt.indexOf("{"), b = txt.lastIndexOf("}");
  const obj = JSON.parse(txt.slice(a, b + 1));
  const out = {
    examples: (obj.examples || []).filter((e) => e && e.de).slice(0, 3).map((e) => ({ de: String(e.de), tr: String(e.tr || "") })),
    usage: String(obj.usage || ""),
    preps: (obj.preps || []).filter((p) => p && p.phrase).slice(0, 4).map((p) => ({ phrase: String(p.phrase), de: String(p.de || ""), tr: String(p.tr || "") })),
  };
  if (!out.examples.length && !out.usage) throw new Error("EMPTY");
  const c = readCache(); c[key] = out; writeCache(c);
  return out;
}
function errKind(e) {
  const m = String(e?.message || e);
  if (m === "NOT_SIGNED_IN") return "auth";
  if (!navigator.onLine || /Failed to fetch|NetworkError|Load failed/i.test(m)) return "offline";
  return "fail";
}

const ART = { der: "#2563EB", die: "#ec4899", das: "#0F7A55" };

export default function FavDetail({ w, L, lang, translation, ownExample, ownExampleTr, speak, callClaude, onClose }) {
  const t = favLabels(lang);
  const rtl = isRtl(lang);
  const [state, setState] = useState("loading"); // loading | ok | auth | offline | fail
  const [data, setData] = useState(null);
  const alive = useRef(true);
  useNavLayer(true, onClose, { depth: 2, modal: true }, "fav-detail");

  function run() {
    setState("loading");
    loadUsage(callClaude, L, translation, lang)
      .then((d) => { if (alive.current) { setData(d); setState("ok"); } })
      .catch((e) => { if (alive.current) setState(errKind(e)); });
  }
  useEffect(() => { alive.current = true; run(); return () => { alive.current = false; }; /* eslint-disable-next-line */ }, [L.de, lang]);
  useEffect(() => {
    const k = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, [onClose]);

  const m = L.de.match(/^(der|die|das) (.+)$/);
  const art = m ? m[1] : null, word = m ? m[2] : L.de;
  const examples = data?.examples?.length ? data.examples : (ownExample ? [{ de: ownExample, tr: ownExampleTr || "" }] : []);
  const preps = data?.preps?.length ? data.preps : (L.prep ? [{ phrase: `${word} ${L.prep}`, de: "", tr: "" }] : []);

  return createPortal(
    <div className="s-fd-layer" role="dialog" aria-modal="true" aria-label={L.de} onClick={onClose}>
      <div className="s-fd-box" onClick={(e) => e.stopPropagation()} dir={rtl ? "rtl" : "ltr"}>
        <div className="s-fd-head">
          <div dir="ltr" className="s-fd-title">
            {art && <span className="s-fd-art" style={{ background: ART[art] }}>{art}</span>}
            <span className="s-fd-word">{word}</span>
            {L.prep && <span className="s-fd-prep">+ {L.prep}</span>}
          </div>
          <button type="button" className="s-fd-ic" onClick={() => speak(L.de)} aria-label="Audio"><Volume2 size={18} /></button>
          <button type="button" className="s-fd-ic" onClick={onClose} aria-label={t.close}><X size={18} /></button>
        </div>
        {translation && <div className="s-fd-tr">{translation}</div>}

        <div className="s-fd-scroll">
          <div className="s-fd-sec">
            <div className="s-fd-st"><ListChecks size={14} /> {t.ex}</div>
            {examples.map((e, i) => (
              <div key={i} className="s-fd-ex">
                <div className="s-fd-exrow">
                  <span dir="ltr" className="s-fd-de">{e.de}</span>
                  <button type="button" className="s-fd-ic s-fd-ic-s" onClick={() => speak(e.de)} aria-label="Audio"><Volume2 size={14} /></button>
                </div>
                {e.tr && <div className="s-fd-etr">{e.tr}</div>}
              </div>
            ))}
            {state === "loading" && !data && <div className="s-fd-note"><Loader2 size={14} className="s-fd-spin" /> {t.loading}</div>}
          </div>

          {data?.usage && (
            <div className="s-fd-sec">
              <div className="s-fd-st"><MessageSquareText size={14} /> {t.use}</div>
              <div className="s-fd-use">{data.usage}</div>
            </div>
          )}

          {(state === "ok" || preps.length > 0) && (
            <div className="s-fd-sec">
              <div className="s-fd-st"><Link2 size={14} /> {t.prep}</div>
              {preps.length ? preps.map((p, i) => (
                <div key={i} className="s-fd-ex">
                  <div dir="ltr" className="s-fd-phrase" style={{ textAlign: rtl ? "right" : "left" }}>{p.phrase}</div>
                  {p.de && <div className="s-fd-exrow"><span dir="ltr" className="s-fd-de">{p.de}</span><button type="button" className="s-fd-ic s-fd-ic-s" onClick={() => speak(p.de)} aria-label="Audio"><Volume2 size={14} /></button></div>}
                  {p.tr && <div className="s-fd-etr">{p.tr}</div>}
                </div>
              )) : <div className="s-fd-note">{t.noPrep}</div>}
            </div>
          )}

          {(state === "fail" || state === "offline" || state === "auth") && (
            <div className="s-fd-sec s-fd-err">
              <div>{state === "offline" ? t.offline : state === "auth" ? t.auth : t.fail}</div>
              {state !== "auth" && <button type="button" className="s-fd-retry" onClick={run}><RefreshCw size={14} /> {t.retry}</button>}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
