// Daily plan: five short steps per day at the learner's chosen level, with an XP level ring.
import { useState, useMemo, useEffect, useRef } from "react";
import { LESSONS } from "./data/lessons";
import { GRAMMAR_QUIZ } from "./data/grammarQuiz";
import { DAILY_READING } from "./data/dailyReading";
import { useNavLayer } from "./lib/nav";

const LEVEL_IDS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const STEPS = ["w", "g", "r", "a", "s"];
const XP_STEP = 10, XP_BONUS = 20;
const ORANGE = "#FF8A3D", PRIMARY = "#5B5BD6", INK = "#18181B", MUTED = "#71717A";

const TXT = {
  tr: { title: "Günlük Bölüm", sub: "Her gün 5 kısa adım", level: "Seviyeni seç", left: n => `${n} XP kaldı`, lv: "Seviye",
    w: "Wortschatz", g: "Grammatik", r: "Leseverstehen", a: "Artikel", s: "Sprachbausteine",
    dw: "8 kelime", dg: "6 soru", dr: "Kısa metin, 3 soru", da: "der, die veya das", ds: "Boşluk doldurma",
    start: "Başla", again: "Tekrar", next: "Sonraki", finish: "Bitir", done: "Tamam", allDone: "Bugünkü hedef tamam! 🎉",
    bonus: "Bonus", correct: "Doğru!", wrong: "Yanlış", answer: "Doğru cevap:", progress: "bugün", empty: "Bu seviyede bu adım için içerik yok.", result: "Sonuç" },
  en: { title: "Daily Plan", sub: "5 short steps every day", level: "Choose your level", left: n => `${n} XP to go`, lv: "Level",
    w: "Vocabulary", g: "Grammar", r: "Reading", a: "Articles", s: "Gap-fill",
    dw: "8 words", dg: "6 questions", dr: "Short text, 3 questions", da: "der, die or das", ds: "Fill the gaps",
    start: "Start", again: "Again", next: "Next", finish: "Finish", done: "Done", allDone: "Today's goal complete! 🎉",
    bonus: "Bonus", correct: "Correct!", wrong: "Wrong", answer: "Correct answer:", progress: "today", empty: "No content for this step at this level.", result: "Result" },
  de: { title: "Tagesplan", sub: "Jeden Tag 5 kurze Schritte", level: "Wähle dein Niveau", left: n => `Noch ${n} XP`, lv: "Level",
    w: "Wortschatz", g: "Grammatik", r: "Leseverstehen", a: "Artikel", s: "Sprachbausteine",
    dw: "8 Wörter", dg: "6 Fragen", dr: "Kurztext, 3 Fragen", da: "der, die oder das", ds: "Lücken füllen",
    start: "Start", again: "Nochmal", next: "Weiter", finish: "Fertig", done: "Okay", allDone: "Tagesziel erreicht! 🎉",
    bonus: "Bonus", correct: "Richtig!", wrong: "Falsch", answer: "Richtig:", progress: "heute", empty: "Für diesen Schritt gibt es hier keinen Inhalt.", result: "Ergebnis" },
  ku: { title: "بەشی ڕۆژانە", sub: "هەموو ڕۆژێک ٥ هەنگاوی کورت", level: "ئاستەکەت هەڵبژێرە", left: n => `${n} XP ماوە`, lv: "ئاست",
    w: "وشە", g: "ڕێزمان", r: "خوێندنەوە", a: "ئارتیکل", s: "پڕکردنەوەی بۆشایی",
    dw: "٨ وشە", dg: "٦ پرسیار", dr: "دەقێکی کورت، ٣ پرسیار", da: "der، die یان das", ds: "بۆشاییەکان پڕبکەرەوە",
    start: "دەستپێبکە", again: "دووبارە", next: "دواتر", finish: "تەواو", done: "باشە", allDone: "ئامانجی ئەمڕۆ تەواوبوو! 🎉",
    bonus: "بۆنەس", correct: "ڕاستە!", wrong: "هەڵەیە", answer: "وەڵامی ڕاست:", progress: "ئەمڕۆ", empty: "بۆ ئەم هەنگاوە لەم ئاستەدا ناوەڕۆک نییە.", result: "ئەنجام" },
};
const tx = (lang) => TXT[lang] || TXT.en;

// ── date, seed and storage helpers ────────────────────────────────────
const todayKey = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };
const dayNumber = () => Math.floor(Date.now() / 86400000);
function rng(seedStr) {
  let h = 1779033703 ^ seedStr.length;
  for (let i = 0; i < seedStr.length; i++) { h = Math.imul(h ^ seedStr.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
  let a = h >>> 0;
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const shuffled = (arr, r) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

const KEY = "suri_daily";
function readState() {
  try { const s = JSON.parse(localStorage.getItem(KEY) || "{}"); if (s.date === todayKey()) return s; } catch { /* storage blocked */ }
  return { date: todayKey(), byLevel: {} };
}
function writeState(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* storage blocked */ } }
export function dailyLevel() {
  try { const l = localStorage.getItem("suri_daily_level"); if (LEVEL_IDS.includes(l)) return l; } catch { /* */ }
  try { const o = JSON.parse(localStorage.getItem("ob_data") || "{}"); if (LEVEL_IDS.includes(o.level)) return o.level; } catch { /* */ }
  return "A1";
}
export function dailyStatus() {
  const lv = dailyLevel(); const s = readState();
  const done = Object.keys((s.byLevel[lv] || {}).done || {}).length;
  return { level: lv, done, total: STEPS.length };
}
export function levelInfo(xp) {
  let lvl = 1, rem = Math.max(0, xp | 0), need = 100;
  while (rem >= need) { rem -= need; lvl++; need = 100 + 50 * (lvl - 1); }
  return { lvl, cur: rem, need };
}

// ── content builders (seeded per day, level and step) ─────────────────
const meaning = (w, lang) => w[lang] || w.en || w.tr || w.ku || "";
function wordPool(level) { return LESSONS.filter(l => l.level === level).flatMap(l => l.words).filter(w => w && w.de); }

function build(step, level, lang) {
  const r = rng(`${todayKey()}|${level}|${step}`);
  if (step === "w") {
    const pool = wordPool(level); const picks = shuffled(pool, r).slice(0, 8);
    return picks.map(w => {
      const right = meaning(w, lang);
      const others = shuffled(pool.map(x => meaning(x, lang)).filter(m => m && m !== right), r);
      const uniq = [...new Set(others)].slice(0, 3);
      const opts = shuffled([right, ...uniq], r);
      return { prompt: w.de, sub: w.ex, options: opts, correct: opts.indexOf(right), dir: "auto" };
    }).filter(it => it.options.length >= 2);
  }
  if (step === "a") {
    const pool = wordPool(level).filter(w => /^(der|die|das)\s+\S/i.test(w.de));
    return shuffled(pool, r).slice(0, 8).map(w => {
      const [art, ...rest] = w.de.split(/\s+/);
      const opts = ["der", "die", "das"];
      return { prompt: rest.join(" "), sub: meaning(w, lang), options: opts, correct: opts.indexOf(art.toLowerCase()), big: true };
    });
  }
  if (step === "g") {
    const all = Object.entries(GRAMMAR_QUIZ).filter(([k]) => k.startsWith(level + "::")).flatMap(([, qs]) => qs);
    return shuffled(all, r).slice(0, 6).map(q => {
      const right = q.options[q.correct]; const opts = shuffled(q.options, r);
      const why = lang === "ku" ? q.why : lang === "tr" ? q.whyTr : "";
      return { prompt: q.q, options: opts, correct: opts.indexOf(right), why, sentence: true };
    });
  }
  if (step === "r") {
    const list = DAILY_READING[level] || [];
    if (!list.length) return [];
    const p = list[dayNumber() % list.length];
    return p.qs.map(q => {
      const right = q.o[q.a]; const opts = shuffled(q.o, r);
      return { prompt: q.q, context: p, options: opts, correct: opts.indexOf(right), sentence: true };
    });
  }
  return [];
}

// ── level ring ────────────────────────────────────────────────────────
function LevelRing({ xp, size = 132, t }) {
  const info = levelInfo(xp); const pct = info.cur / info.need;
  const R = (size - 16) / 2, C = 2 * Math.PI * R;
  const [shown, setShown] = useState(() => { try { const p = parseFloat(localStorage.getItem("suri_ring_pct")); return Number.isFinite(p) ? p : 0; } catch { return 0; } });
  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(pct));
    try { localStorage.setItem("suri_ring_pct", String(pct)); } catch { /* */ }
    return () => cancelAnimationFrame(id);
  }, [pct]);
  const gid = `rg${size}`;
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }} role="img" aria-label={`${t.lv} ${info.lvl}, ${info.cur}/${info.need} XP`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: "rotate(-90deg)", display: "block" }}>
        <defs><linearGradient id={gid} x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FFB36B" /><stop offset="55%" stopColor={ORANGE} /><stop offset="100%" stopColor="#8B7CF6" /></linearGradient></defs>
        <circle cx={size / 2} cy={size / 2} r={R} fill="none" stroke="rgba(91,91,214,.12)" strokeWidth="10" />
        <circle cx={size / 2} cy={size / 2} r={R} fill="none" stroke={`url(#${gid})`} strokeWidth="10" strokeLinecap="round"
          strokeDasharray={C} strokeDashoffset={C * (1 - Math.min(1, shown))} style={{ transition: "stroke-dashoffset 1.1s cubic-bezier(.22,1,.36,1)", filter: "drop-shadow(0 0 6px rgba(255,138,61,.45))" }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", direction: "ltr" }}>
        <div style={{ fontSize: size * 0.11, fontWeight: 700, color: MUTED, letterSpacing: ".06em", textTransform: "uppercase" }}>{t.lv}</div>
        <div style={{ fontSize: size * 0.3, fontWeight: 900, color: INK, lineHeight: 1 }}>{info.lvl}</div>
        <div style={{ fontSize: size * 0.1, fontWeight: 700, color: ORANGE, marginTop: 2 }}>{info.cur}/{info.need}</div>
      </div>
    </div>
  );
}

// ── home card ─────────────────────────────────────────────────────────
export function DailyHomeCard({ lang, onOpen, getXp }) {
  const t = tx(lang); const st = dailyStatus();
  return (
    <button type="button" onClick={onOpen} className="s-press"
      style={{ width: "100%", display: "flex", alignItems: "center", gap: 16, textAlign: "start", border: "none", cursor: "pointer", fontFamily: "inherit",
        background: "#fff", borderRadius: 24, padding: "14px 18px", marginBottom: 18, boxShadow: "0 1px 2px rgba(30,30,70,.05), 0 10px 28px rgba(91,91,214,.16)" }}>
      <LevelRing xp={getXp()} size={84} t={t} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 900, fontSize: 18, color: INK }}>{t.title}</div>
        <div style={{ fontSize: 13, color: MUTED, margin: "2px 0 8px" }}>{st.level} · {st.done}/{st.total} {t.progress}</div>
        <div style={{ display: "flex", gap: 5 }}>
          {STEPS.map((s, i) => <span key={s} style={{ flex: 1, height: 7, borderRadius: 99, background: i < st.done ? `linear-gradient(90deg,#FFB36B,${ORANGE})` : "rgba(91,91,214,.12)" }} />)}
        </div>
      </div>
      <span aria-hidden="true" style={{ width: 40, height: 40, borderRadius: 99, background: `linear-gradient(135deg,${ORANGE},#F0701A)`, color: "#fff", display: "grid", placeItems: "center", fontSize: 20, fontWeight: 900, boxShadow: "0 6px 16px rgba(255,138,61,.45)", flexShrink: 0 }}>›</span>
    </button>
  );
}

// ── multiple-choice runner (instant feedback) ─────────────────────────
function McqRun({ items, t, onComplete, onClose }) {
  const [i, setI] = useState(0); const [picked, setPicked] = useState(null); const [score, setScore] = useState(0);
  const [end, setEnd] = useState(false); const fired = useRef(false);
  const it = items[i]; const total = items.length;
  const pct = Math.round((score / total) * 100);
  useEffect(() => { if (end && !fired.current) { fired.current = true; onComplete(pct); } }, [end, pct, onComplete]);
  const pick = (oi) => {
    if (picked !== null) return;
    setPicked(oi); if (oi === it.correct) setScore(s => s + 1);
    try { navigator.vibrate?.(oi === it.correct ? 12 : [30, 40, 30]); } catch { /* */ }
  };
  const next = () => { if (i + 1 >= total) setEnd(true); else { setI(i + 1); setPicked(null); } };
  if (end) {
    return (
      <div style={{ textAlign: "center", padding: "30px 0" }}>
        <div style={{ fontSize: 56 }}>{pct === 100 ? "🏆" : pct >= 60 ? "🎉" : "💪"}</div>
        <div style={{ fontSize: 40, fontWeight: 900, color: INK }}>{pct}%</div>
        <div style={{ color: MUTED, marginBottom: 22 }}>{score} / {total}</div>
        <button type="button" className="s-press" onClick={onClose} style={bigBtn}>{t.done}</button>
      </div>
    );
  }
  const ok = picked !== null && picked === it.correct;
  return (
    <div>
      <div style={{ display: "flex", gap: 4, marginBottom: 18 }}>
        {items.map((_, k) => <span key={k} style={{ flex: 1, height: 6, borderRadius: 99, background: k < i ? ORANGE : k === i ? "#FFB36B" : "rgba(91,91,214,.12)" }} />)}
      </div>
      {it.context && (
        <div dir="ltr" style={{ background: "#fff", borderRadius: 20, padding: "16px 18px", marginBottom: 16, boxShadow: "0 1px 2px rgba(30,30,70,.05), 0 8px 22px rgba(30,30,70,.08)" }}>
          <div style={{ fontWeight: 800, color: PRIMARY, marginBottom: 6 }}>{it.context.title}</div>
          <div style={{ fontSize: 15, lineHeight: 1.7, color: INK }}>{it.context.text}</div>
        </div>
      )}
      <div dir="ltr" style={{ textAlign: "center", margin: "6px 0 18px" }}>
        <div style={{ fontSize: it.sentence ? 19 : 30, fontWeight: 900, color: INK, lineHeight: 1.4 }}>{it.prompt}</div>
        {it.sub && <div style={{ fontSize: 13, color: MUTED, marginTop: 6 }}>{it.sub}</div>}
      </div>
      <div style={{ display: "grid", gap: 10, gridTemplateColumns: it.big ? "repeat(3,1fr)" : "1fr" }}>
        {it.options.map((o, oi) => {
          const right = picked !== null && oi === it.correct, wrong = picked === oi && oi !== it.correct;
          return (
            <button key={oi} type="button" className="s-press" onClick={() => pick(oi)} disabled={picked !== null && !right && !wrong}
              style={{ minHeight: it.big ? 64 : 52, padding: "10px 16px", borderRadius: 18, cursor: "pointer", fontFamily: "inherit", fontSize: it.big ? 20 : 15, fontWeight: 800,
                border: `2px solid ${right ? "#16A06F" : wrong ? "#E5484D" : "transparent"}`,
                background: right ? "#E6F7F0" : wrong ? "#FDECEC" : "#fff", color: right ? "#0F7A55" : wrong ? "#C0343A" : INK,
                boxShadow: "0 1px 2px rgba(30,30,70,.05), 0 6px 16px rgba(30,30,70,.08)", opacity: picked !== null && !right && !wrong ? 0.55 : 1 }}>
              <span dir="auto">{o}</span>
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div style={{ marginTop: 16 }}>
          <div style={{ fontWeight: 800, color: ok ? "#16A06F" : "#E5484D" }}>{ok ? t.correct : t.wrong}</div>
          {!ok && <div dir="auto" style={{ fontSize: 14, color: INK, marginTop: 2 }}>{t.answer} <b>{it.options[it.correct]}</b></div>}
          {it.why && <div dir="auto" style={{ fontSize: 13, color: MUTED, marginTop: 4 }}>{it.why}</div>}
          <button type="button" className="s-press" onClick={next} style={{ ...bigBtn, marginTop: 14 }}>{i + 1 >= total ? t.finish : t.next}</button>
        </div>
      )}
    </div>
  );
}
const bigBtn = { width: "100%", minHeight: 52, border: "none", borderRadius: 99, cursor: "pointer", fontFamily: "inherit", fontWeight: 800, fontSize: 16, color: "#fff",
  background: `linear-gradient(135deg,${ORANGE},#F0701A)`, boxShadow: "0 8px 22px rgba(255,138,61,.4)" };

// ── the daily plan screen ─────────────────────────────────────────────
export default function DailyPlan({ lang = "tr", onClose, SbQuiz, sbForLevel, addXp, getXp, Confetti }) {
  const t = tx(lang);
  const [level, setLevelState] = useState(dailyLevel);
  const [state, setState] = useState(readState);
  const [step, setStep] = useState(null);
  const [xp, setXp] = useState(() => getXp());
  const [burst, setBurst] = useState(false);

  useEffect(() => { if (!burst) return undefined; const id = setTimeout(() => setBurst(false), 4800); return () => clearTimeout(id); }, [burst]);
  useNavLayer(true, onClose, { depth: 3 });
  useNavLayer(!!step, () => setStep(null), { depth: 4 });

  const setLevel = (l) => { setLevelState(l); setStep(null); try { localStorage.setItem("suri_daily_level", l); } catch { /* */ } };
  const lvState = state.byLevel[level] || { done: {}, awarded: {} };
  const doneCount = STEPS.filter(s => lvState.done[s] !== undefined).length;
  const allDone = doneCount === STEPS.length;

  const complete = (s, pct) => {
    const cur = readState(); const l = cur.byLevel[level] || { done: {}, awarded: {} };
    l.done[s] = Math.max(pct, l.done[s] || 0);
    let gain = 0;
    if (!l.awarded[s]) { l.awarded[s] = true; gain += XP_STEP; }
    if (STEPS.every(k => l.done[k] !== undefined) && !l.awarded.bonus) { l.awarded.bonus = true; gain += XP_BONUS; setBurst(true); }
    cur.byLevel[level] = l; writeState(cur); setState(cur);
    if (gain) setXp(addXp(gain));
  };

  const items = useMemo(() => (step && step !== "s" ? build(step, level, lang) : []), [step, level, lang]);
  const sbEx = useMemo(() => { const list = sbForLevel(level); return list.length ? [list[dayNumber() % list.length]] : []; }, [level, sbForLevel]);

  const desc = { w: t.dw, g: t.dg, r: t.dr, a: t.da, s: t.ds };
  const icon = { w: "📚", g: "🧩", r: "📖", a: "🏷️", s: "✏️" };
  const info = levelInfo(xp);

  return (
    <div role="dialog" aria-label={t.title} style={{ position: "fixed", inset: 0, zIndex: 205, overflowY: "auto", background: "linear-gradient(180deg,#F3F1FF 0%,#FBFBFC 40%)", fontFamily: "'Satoshi',system-ui,sans-serif" }}>
      {burst && Confetti && <div style={{ position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none" }}><Confetti /></div>}
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "68px 18px 40px", position: "relative" }}>
        {!step ? (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 20 }}>
              <LevelRing xp={xp} t={t} />
              <div>
                <div style={{ fontWeight: 900, fontSize: 24, color: INK }}>{t.title}</div>
                <div style={{ fontSize: 14, color: MUTED, marginTop: 2 }}>{t.sub}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: ORANGE, marginTop: 6 }}>{t.left(info.need - info.cur)}</div>
              </div>
            </div>

            <div style={{ fontSize: 12, fontWeight: 700, color: MUTED, margin: "0 0 8px" }}>{t.level}</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {LEVEL_IDS.map(l => (
                <button key={l} type="button" className="s-press" onClick={() => setLevel(l)} aria-pressed={l === level}
                  style={{ minWidth: 52, minHeight: 40, padding: "0 14px", borderRadius: 99, border: "none", cursor: "pointer", fontFamily: "inherit", fontWeight: 800, fontSize: 14,
                    background: l === level ? PRIMARY : "#fff", color: l === level ? "#fff" : PRIMARY, boxShadow: l === level ? "0 6px 16px rgba(91,91,214,.4)" : "0 1px 2px rgba(30,30,70,.05), 0 4px 12px rgba(30,30,70,.07)" }}>{l}</button>
              ))}
            </div>

            {allDone && (
              <div style={{ background: `linear-gradient(135deg,${ORANGE},#F0701A)`, color: "#fff", borderRadius: 20, padding: "14px 18px", fontWeight: 800, marginBottom: 14, boxShadow: "0 8px 22px rgba(255,138,61,.4)" }}>
                {t.allDone} <span style={{ opacity: .85, fontWeight: 700 }}>(+{XP_BONUS} XP {t.bonus})</span>
              </div>
            )}

            <div style={{ display: "grid", gap: 12 }}>
              {STEPS.map((s, i) => {
                const d = lvState.done[s];
                return (
                  <button key={s} type="button" className="s-press" onClick={() => setStep(s)}
                    style={{ display: "flex", alignItems: "center", gap: 14, textAlign: "start", width: "100%", border: "none", cursor: "pointer", fontFamily: "inherit",
                      background: "#fff", borderRadius: 22, padding: "14px 16px", boxShadow: "0 1px 2px rgba(30,30,70,.05), 0 8px 22px rgba(30,30,70,.08)" }}>
                    <span style={{ width: 46, height: 46, borderRadius: 16, display: "grid", placeItems: "center", fontSize: 22, flexShrink: 0,
                      background: d !== undefined ? "#E6F7F0" : "#F1F0FE" }}>{d !== undefined ? "✓" : icon[s]}</span>
                    <span style={{ flex: 1, minWidth: 0 }}>
                      <span style={{ display: "block", fontWeight: 800, fontSize: 16, color: INK }}>{i + 1}. {t[s]}</span>
                      <span style={{ display: "block", fontSize: 13, color: MUTED, marginTop: 2 }}>{d !== undefined ? `${d}%` : desc[s]}</span>
                    </span>
                    <span style={{ fontWeight: 800, fontSize: 13, color: d !== undefined ? "#16A06F" : ORANGE }}>{d !== undefined ? t.again : `+${XP_STEP} XP`}</span>
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div style={{ fontWeight: 900, fontSize: 20, color: INK, marginBottom: 16 }}>{t[step]} <span style={{ color: MUTED, fontWeight: 700, fontSize: 14 }}>· {level}</span></div>
            {step === "s" ? (
              sbEx.length ? <SbQuiz key={level + step} exercises={sbEx} lang={lang} onDone={(p) => complete("s", p)} /> : <div style={{ color: MUTED }}>{t.empty}</div>
            ) : items.length ? (
              <McqRun key={level + step} items={items} t={t} onComplete={(p) => complete(step, p)} onClose={() => setStep(null)} />
            ) : <div style={{ color: MUTED }}>{t.empty}</div>}
          </>
        )}
      </div>
    </div>
  );
}
