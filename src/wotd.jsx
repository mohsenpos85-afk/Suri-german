// Word of the Day: 300 words (60 each for A1–C1) taken from the lessons, shuffled, with a card that
// grows into a detail view (audio, example, translation in the chosen language, usage note).
import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { Volume2, Heart, Shuffle, X, Sparkles, Lightbulb, CheckCircle2, Quote } from "lucide-react";
import { LESSONS } from "./data/lessons";
import { LEVEL_PALETTE, A } from "./theme";
import { useNavLayer } from "./lib/nav";
import { kuDialect } from "./data/kuDialects.js";

const LEVELS = ["A1", "A2", "B1", "B2", "C1"];
const PER_LEVEL = 60;
const DUR = 420; // ms, open/close
const LS_STATE = "suri_wotd";
const LS_KNOWN = "suri_wotd_known";

// ── Word pool: 60 evenly spread words per level that have an example sentence and translations ──
let _pool = null;
export function wordPool() {
  if (_pool) return _pool;
  const out = [];
  for (const lv of LEVELS) {
    const cand = [], seen = new Set();
    for (const les of LESSONS) {
      if (les.level !== lv) continue;
      for (const w of les.words || []) {
        if (!w || !w.de || !w.ex || !w.tr || !w.en || !w.ku || !w.exku) continue;
        if (w.de.length > 24 || w.de.includes("/") || w.de.includes("(") || seen.has(w.de)) continue;
        seen.add(w.de); cand.push({ w, les });
      }
    }
    const n = cand.length, take = Math.min(PER_LEVEL, n);
    for (let i = 0; i < take; i++) {
      const { w, les } = cand[Math.floor((i * n) / take)];
      out.push({ ...w, _level: lv, _topic: les });
    }
  }
  // seeded shuffle so the order is random but stable between visits
  let s = 20261114;
  const rnd = () => { s = (s + 0x6D2B79F5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  for (let i = out.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [out[i], out[j]] = [out[j], out[i]]; }
  _pool = out;
  return out;
}

const readJSON = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch { return d; } };
const writeJSON = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage unavailable */ } };
const dayNo = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 86400000);

// ── UI texts ──
const SUP = ["ku", "tr", "en", "ar", "fa", "es", "uk"];
const L = {
  tr: { title: "Günün kelimesi", example: "Örnek cümle", meaning: "Anlamı", usage: "Ne zaman kullanılır?", listen: "Dinle", fav: "Favorilere ekle", unfav: "Favorilerden çıkar", next: "Başka kelime", close: "Kapat", known: "Anladım, bir daha gösterme", more: "Detay için dokun", done: "Tüm kelimeleri öğrendin!", doneSub: "Yeni kelimeler için ‘Sıfırla’ya dokun.", reset: "Sıfırla", count: (a, b) => `${a} / ${b} öğrenildi`,
    noun: (a, t) => `İsim (${a}). «${t}» konusunda geçer. Her zaman artikeliyle birlikte öğren.`, other: (t) => `«${t}» konusunda kullanılır. Bir şeyi anlatırken ya da yorumlarken işine yarar.` },
  en: { title: "Word of the day", example: "Example", meaning: "Meaning", usage: "When to use it", listen: "Listen", fav: "Add to favorites", unfav: "Remove from favorites", next: "Another word", close: "Close", known: "Got it, don't show again", more: "Tap for details", done: "You have learned all words!", doneSub: "Tap ‘Reset’ for new words.", reset: "Reset", count: (a, b) => `${a} / ${b} learned`,
    noun: (a, t) => `Noun (${a}). Comes up when talking about “${t}”. Always learn it with its article.`, other: (t) => `Used when talking about “${t}”. Handy for describing or commenting on things.` },
  ar: { title: "كلمة اليوم", example: "جملة مثال", meaning: "المعنى", usage: "متى تُستخدم؟", listen: "استمع", fav: "أضف إلى المفضلة", unfav: "أزل من المفضلة", next: "كلمة أخرى", close: "إغلاق", known: "فهمتها، لا تعرضها مجددًا", more: "اضغط للتفاصيل", done: "تعلمت كل الكلمات!", doneSub: "اضغط «إعادة» لكلمات جديدة.", reset: "إعادة", count: (a, b) => `${a} / ${b} تم تعلمها`,
    noun: (a, t) => `اسم (${a}). تظهر عند الحديث عن «${t}». تعلّمها دائمًا مع أداة التعريف.`, other: (t) => `تُستخدم عند الحديث عن «${t}». مفيدة لوصف الأشياء أو التعليق عليها.` },
  fa: { title: "کلمهٔ امروز", example: "جملهٔ نمونه", meaning: "معنی", usage: "چه موقع به کار می‌رود؟", listen: "گوش بده", fav: "افزودن به علاقه‌مندی‌ها", unfav: "حذف از علاقه‌مندی‌ها", next: "کلمهٔ دیگر", close: "بستن", known: "فهمیدم، دیگر نشان نده", more: "برای جزئیات لمس کن", done: "همهٔ کلمه‌ها را یاد گرفتی!", doneSub: "برای کلمه‌های جدید «بازنشانی» را بزن.", reset: "بازنشانی", count: (a, b) => `${a} / ${b} یاد گرفته شد`,
    noun: (a, t) => `اسم (${a}). در موضوع «${t}» می‌آید. همیشه همراه با حرف تعریف یاد بگیر.`, other: (t) => `در موضوع «${t}» به کار می‌رود. برای توصیف یا نظر دادن مفید است.` },
  es: { title: "Palabra del día", example: "Ejemplo", meaning: "Significado", usage: "Cuándo se usa", listen: "Escuchar", fav: "Añadir a favoritos", unfav: "Quitar de favoritos", next: "Otra palabra", close: "Cerrar", known: "Entendido, no mostrar más", more: "Toca para ver más", done: "¡Has aprendido todas las palabras!", doneSub: "Toca ‘Reiniciar’ para nuevas palabras.", reset: "Reiniciar", count: (a, b) => `${a} / ${b} aprendidas`,
    noun: (a, t) => `Sustantivo (${a}). Aparece al hablar de «${t}». Apréndelo siempre con su artículo.`, other: (t) => `Se usa al hablar de «${t}». Útil para describir o comentar cosas.` },
  uk: { title: "Слово дня", example: "Приклад", meaning: "Значення", usage: "Коли вживається", listen: "Слухати", fav: "Додати до обраного", unfav: "Прибрати з обраного", next: "Інше слово", close: "Закрити", known: "Зрозумів, більше не показувати", more: "Торкнись для деталей", done: "Ти вивчив усі слова!", doneSub: "Натисни «Скинути» для нових слів.", reset: "Скинути", count: (a, b) => `${a} / ${b} вивчено`,
    noun: (a, t) => `Іменник (${a}). Трапляється в темі «${t}». Завжди вчи разом з артиклем.`, other: (t) => `Вживається в темі «${t}». Допомагає описувати та коментувати речі.` },
  ku: { title: "وشەی ئەمڕۆ", example: "نموونەی ڕستە", meaning: "واتا", usage: "کەی بەکاردێت؟", listen: "گوێ بگرە", fav: "زیادکردن بۆ دڵخوازەکان", unfav: "لابردن لە دڵخوازەکان", next: "وشەیەکی تر", close: "داخستن", known: "تێگەیشتم، چیتر نیشان مەدە", more: "بۆ وردەکاری دەست لێبدە", done: "هەموو وشەکانت فێربوو!", doneSub: "بۆ وشەی نوێ «سفرکردنەوە» دابگرە.", reset: "سفرکردنەوە", count: (a, b) => `${a} / ${b} فێربوو`,
    noun: (a, t) => `ناو (${a}). لە بابەتی «${t}» دێت. هەمیشە لەگەڵ هۆداری فێری ببە.`, other: (t) => `لە بابەتی «${t}» بەکاردێت. بۆ وەسفکردن یان ڕای دان سوودبەخشە.` },
  kmj: { title: "Peyva îro", example: "Hevoka mînak", meaning: "Wate", usage: "Kengî tê bikaranîn?", listen: "Guh bide", fav: "Li hezkirîyan zêde bike", unfav: "Ji hezkirîyan derxe", next: "Peyveke din", close: "Bigire", known: "Fêm kir, careke din nîşan nede", more: "Ji bo hûrgiliyan bitikîne", done: "Te hemû peyv fêr bûn!", doneSub: "Ji bo peyvên nû ‘Ji nû ve’ bitikîne.", reset: "Ji nû ve", count: (a, b) => `${a} / ${b} hat fêrkirin`,
    noun: (a, t) => `Navdêr (${a}). Di mijara «${t}» de derbas dibe. Her tim bi artîkelê re hîn bibe.`, other: (t) => `Di mijara «${t}» de tê bikaranîn. Ji bo danasîn û şîrovekirinê bikêr e.` },
};
const ART = { der: { m: "#4F8FD6" }, die: { m: "#D0627F" }, das: { m: "#4FA58A" } };
const RTL_LANGS = ["ar", "fa"];

export default function WordOfDay({ lang = "tr", favs = [], toggleFav, speak, tC, tEx, tF, className }) {
  const pool = useMemo(wordPool, []);
  const kurm = lang === "ku" && kuDialect() === "kurmanji";
  const pl = SUP.includes(lang) ? lang : "en";
  const T = kurm ? L.kmj : L[pl];
  const isRtl = !kurm && (pl === "ku" || RTL_LANGS.includes(pl));

  const [known, setKnown] = useState(() => readJSON(LS_KNOWN, []));
  const [st, setSt] = useState(() => {
    const s = readJSON(LS_STATE, null), d = dayNo();
    return s && s.day === d ? s : { day: d, pos: d % pool.length };
  });
  const knownSet = useMemo(() => new Set(known), [known]);
  const left = pool.filter((w) => !knownSet.has(w.de));
  // pointer into the shuffled pool, skipping words the learner already knows
  const cur = useMemo(() => {
    if (!left.length) return null;
    for (let i = 0; i < pool.length; i++) {
      const w = pool[(st.pos + i) % pool.length];
      if (!knownSet.has(w.de)) return w;
    }
    return null;
  }, [pool, st.pos, knownSet, left.length]);

  const save = (s) => { setSt(s); writeJSON(LS_STATE, s); };
  const shuffle = useCallback((e) => { e && e.stopPropagation && e.stopPropagation(); save({ day: st.day, pos: (st.pos + 1) % pool.length }); }, [st, pool.length]);
  const applyKnown = (de) => {
    setKnown((k) => { const next = k.includes(de) ? k : [...k, de]; writeJSON(LS_KNOWN, next); return next; });
    setSt((q) => { const n = { day: q.day, pos: (q.pos + 1) % pool.length }; writeJSON(LS_STATE, n); return n; });
  };
  const markKnown = (e) => {
    e && e.stopPropagation && e.stopPropagation();
    if (!cur) return;
    const de = cur.de;
    if (phase === "open") { close(); setTimeout(() => applyKnown(de), reduce() ? 0 : DUR + 30); } else applyKnown(de);
  };
  const resetKnown = (e) => { e && e.stopPropagation && e.stopPropagation(); setKnown([]); writeJSON(LS_KNOWN, []); };

  // ── open / close animation (card grows into the detail box and back) ──
  const [phase, setPhase] = useState("closed"); // closed | opening | open | closing
  const [from, setFrom] = useState(null);
  const [target, setTarget] = useState(null);
  const cardRef = useRef(null);
  const timer = useRef(null);
  const calcTarget = () => {
    const vw = window.innerWidth, vh = window.innerHeight;
    const w = Math.min(vw - 32, 560), h = Math.min(vh - 96, 700);
    return { top: Math.max(16, (vh - h) / 2), left: (vw - w) / 2, width: w, height: h };
  };
  const reduce = () => { try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch { return false; } };
  const open = () => {
    if (!cur || !cardRef.current || phase !== "closed") return;
    const r = cardRef.current.getBoundingClientRect();
    setFrom({ top: r.top, left: r.left, width: r.width, height: r.height });
    setTarget(calcTarget());
    setPhase("opening");
    requestAnimationFrame(() => requestAnimationFrame(() => setPhase("open")));
  };
  const close = useCallback(() => {
    if (phase === "closed" || phase === "closing") return;
    if (cardRef.current) { const r = cardRef.current.getBoundingClientRect(); setFrom({ top: r.top, left: r.left, width: r.width, height: r.height }); }
    setPhase("closing");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setPhase("closed"), reduce() ? 0 : DUR);
  }, [phase]);
  useEffect(() => () => clearTimeout(timer.current), []);
  const shown = phase !== "closed";
  useNavLayer(shown && phase !== "closing", close, { depth: 2, modal: true }, "wotd");
  useEffect(() => {
    if (!shown) return undefined;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    const onResize = () => setTarget(calcTarget());
    window.addEventListener("keydown", onKey); window.addEventListener("resize", onResize);
    const prev = document.body.style.overflow; document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); document.body.style.overflow = prev; };
  }, [shown, close]);

  // ── data for the current word ──
  const w = cur;
  const pal = LEVEL_PALETTE[w?._level || "A1"];
  const isFav = !!(w && favs.some((f) => f.de === w.de));
  const m = w ? w.de.match(/^(der|die|das)\s+(.+)$/i) : null;
  const art = m ? m[1].toLowerCase() : null, base = m ? m[2] : w?.de;
  const topic = w ? (() => { const s = tF(w._topic, pl, "title") || w._topic.de; return s; })() : "";
  const meaning = w ? tC(w, pl) : "";
  const exTr = w ? tEx(w, pl) : "";
  const usage = w ? (art ? T.noun(art, topic) : T.other(topic)) : "";
  const learned = known.length;

  const mkBtn = (Icon, label, onClick, active, extra = {}) => (
    <button type="button" className="s-wotd-ic" aria-label={label} title={label} aria-pressed={active ?? undefined} onClick={onClick}
      style={{ color: active ? "#D0627F" : "var(--acc-tx)", ...extra }}>
      <Icon size={17} strokeWidth={1.9} fill={active ? "currentColor" : "none"} />
    </button>
  );

  if (!w) {
    return (
      <div ref={cardRef} className={`s-wotd-card ${className || ""}`} dir={isRtl ? "rtl" : "ltr"} style={{ cursor: "default" }}>
        <div className="s-wotd-head"><span className="s-plate s-wotd-plate"><CheckCircle2 size={17} /></span><span className="s-wotd-label">{T.title}</span></div>
        <div style={{ fontWeight: 800, fontSize: 16, color: "var(--ink)", marginTop: 10 }}>{T.done}</div>
        <div style={{ fontSize: 13, color: "var(--muted)", margin: "4px 0 12px" }}>{T.doneSub}</div>
        <button type="button" className="s-capsule" onClick={resetKnown}>{T.reset}</button>
      </div>
    );
  }

  const open_ = phase === "open";
  const box = open_ ? target : from;
  const overlayStyle = box ? {
    top: box.top, left: box.left, width: box.width, height: box.height,
    borderRadius: open_ ? 30 : 22,
    transition: reduce() ? "none" : `top ${DUR}ms cubic-bezier(.22,1,.36,1), left ${DUR}ms cubic-bezier(.22,1,.36,1), width ${DUR}ms cubic-bezier(.22,1,.36,1), height ${DUR}ms cubic-bezier(.22,1,.36,1), border-radius ${DUR}ms ease`,
  } : {};

  return (
    <>
      <div ref={cardRef} className={`s-wotd-card ${className || ""}`} dir={isRtl ? "rtl" : "ltr"} role="button" tabIndex={0}
        aria-label={`${T.title}: ${w.de}. ${T.more}`} onClick={open}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } }}
        style={{ visibility: shown ? "hidden" : "visible" }}>
        <div className="s-wotd-head">
          <span className="s-plate s-wotd-plate"><Sparkles size={17} /></span>
          <span className="s-wotd-label">{T.title}</span>
          <span className="s-wotd-lv" style={{ background: A(pal.acc, "26"), color: pal.dk }}>{w._level}</span>
        </div>
        <div className="s-wotd-word" dir="ltr">
          {art && <span className="s-wotd-art" style={{ color: ART[art].m }}>{art}</span>}
          <span>{base}</span>
        </div>
        <div className="s-wotd-tr" dir="auto">{meaning}</div>
        <div className="s-wotd-ex" dir="ltr">«{w.ex}»</div>
        <div className="s-wotd-row">
          {mkBtn(Volume2, T.listen, (e) => { e.stopPropagation(); speak(w.de); })}
          {mkBtn(Heart, isFav ? T.unfav : T.fav, (e) => { e.stopPropagation(); toggleFav(w); }, isFav)}
          {mkBtn(Shuffle, T.next, shuffle)}
          <span className="s-wotd-more">{T.more}</span>
        </div>
      </div>

      {shown && createPortal(
        <div className="s-wotd-layer" role="dialog" aria-modal="true" aria-label={`${T.title}: ${w.de}`} dir={isRtl ? "rtl" : "ltr"}>
          <div className="s-wotd-backdrop" onClick={close} style={{ opacity: open_ ? 1 : 0, transition: reduce() ? "none" : `opacity ${DUR}ms ease` }} />
          <div className="s-wotd-box" style={overlayStyle}>
            <div className="s-wotd-inner" style={{ opacity: open_ ? 1 : 0, transition: reduce() ? "none" : `opacity ${open_ ? 260 : 120}ms ease ${open_ ? 140 : 0}ms` }}>
              <div className="s-wotd-top">
                <span className="s-plate s-wotd-plate"><Sparkles size={17} /></span>
                <span className="s-wotd-label">{T.title}</span>
                <span className="s-wotd-lv" style={{ background: A(pal.acc, "26"), color: pal.dk }}>{w._level}</span>
                <button type="button" className="s-wotd-x" aria-label={T.close} onClick={close}><X size={18} strokeWidth={2} /></button>
              </div>

              <div className="s-wotd-scroll">
                <div className="s-wotd-word big" dir="ltr">
                  {art && <span className="s-wotd-art" style={{ color: ART[art].m }}>{art}</span>}
                  <span>{base}</span>
                </div>
                <div className="s-wotd-actions">
                  {mkBtn(Volume2, T.listen, () => speak(w.de), false, { width: 46, height: 46 })}
                  {mkBtn(Heart, isFav ? T.unfav : T.fav, () => toggleFav(w), isFav, { width: 46, height: 46 })}
                  {mkBtn(Shuffle, T.next, (e) => shuffle(e), false, { width: 46, height: 46 })}
                </div>

                <div className="s-wotd-sec">
                  <div className="s-wotd-sec-t">{T.meaning}</div>
                  <div className="s-wotd-meaning" dir="auto">{meaning}</div>
                </div>

                <div className="s-wotd-sec">
                  <div className="s-wotd-sec-t"><Quote size={13} /> {T.example}</div>
                  <div className="s-wotd-exrow">
                    <div className="s-wotd-exde" dir="ltr">{w.ex}</div>
                    {mkBtn(Volume2, T.listen, () => speak(w.ex), false, { flexShrink: 0 })}
                  </div>
                  <div className="s-wotd-exmean" dir="auto">{exTr}</div>
                </div>

                <div className="s-wotd-sec">
                  <div className="s-wotd-sec-t"><Lightbulb size={13} /> {T.usage}</div>
                  <div className="s-wotd-usage" dir="auto">{usage}</div>
                </div>
              </div>

              <div className="s-wotd-foot">
                <button type="button" className="s-cta" onClick={markKnown} style={{ flex: 1 }}>
                  <CheckCircle2 size={16} style={{ marginInlineEnd: 6, verticalAlign: "-3px" }} />{T.known}
                </button>
                <div className="s-wotd-count">{T.count(learned, pool.length)}</div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
