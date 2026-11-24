// Six mini-games for "Das Spiel": Hör-Diktat, Verb-Jagd, Präposition-Brücke,
// Wortschlange, Fehler-Detektiv, Radio-Quiz.
// No recorded sounds yet — see ./audio.js (CLIPS) to plug them in later.
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Volume2, Lightbulb, Check, X, SkipForward, Flame, Search, ChevronRight, Radio as RadioIcon } from "lucide-react";
import { LESSONS } from "../data/lessons.js";
import { VERBS } from "../data/verbs.js";
import { GAME_NAMES, packDesc, packLang, pickTx, wordTx } from "./labels.js";
import { VJ_VERBS, VJ_PRON, PB_ITEMS, FD_ITEMS, RQ_BULLETINS } from "./content.js";
import { say, stopSay, canSpeak, sfx } from "./audio.js";
import { Frame, Intro, Chips, Dots, Result, useFinish, useT, useTick, LV, LEVEL_COLORS, rnd, shuffle, sample, OK, BAD } from "./ui.jsx";

const ART = /^(der|die|das)\s+(.+)$/i;
const norm = (s) => String(s).toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss").replace(/[.,!?;:"„“”…]/g, "").trim();
const upto = (lv) => LV.slice(0, LV.indexOf(lv) + 1);

// ── word pools built from the app's own lesson data ───────────────────────
let _verbTx = null;
function verbTx(inf, lang) {
  if (!_verbTx) {
    _verbTx = new Map();
    Object.values(VERBS).flat().forEach((c) => c.words.forEach((w) => { if (!_verbTx.has(w.de)) _verbTx.set(w.de, w); }));
  }
  const w = _verbTx.get(inf);
  return w ? wordTx(w, lang) : "";
}
const _pools = {};
function levelWords(level, cumulative) {
  const key = level + (cumulative ? "+" : "");
  if (_pools[key]) return _pools[key];
  const lvls = cumulative ? upto(level) : [level];
  const map = new Map();
  const add = (de, w, noun) => {
    const m = String(de).match(ART);
    const bare = m ? m[2] : String(de);
    if (!/^[A-Za-zÄÖÜäöüß]{3,}$/.test(bare)) return;
    const k = bare.toLowerCase();
    if (!map.has(k)) map.set(k, { bare, art: m ? m[1].toLowerCase() : null, w, noun: !!m || noun });
  };
  LESSONS.filter((l) => lvls.includes(l.level)).forEach((l) => l.words.forEach((w) => add(w.de, w, false)));
  Object.entries(VERBS).filter(([lv]) => lvls.includes(lv)).forEach(([, cats]) => cats.forEach((c) => c.words.forEach((w) => { if (!/→/.test(w.de)) add(w.de, w, false); })));
  const arr = [...map.values()];
  _pools[key] = { map, arr };
  return _pools[key];
}

/* ════════════════════════ 1 · HÖR-DIKTAT ════════════════════════ */
export function HorDiktat({ lang, onBack, addXp }) {
  const T = useT(lang), color = "#F76B15";
  const { best, finish } = useFinish("hd", addXp);
  const [phase, setPhase] = useState("intro");
  const [level, setLevel] = useState("A1");
  const [mode, setMode] = useState("word");
  const [items, setItems] = useState([]);
  const [i, setI] = useState(0);
  const [val, setVal] = useState("");
  const [fb, setFb] = useState(null);
  const [hint, setHint] = useState(0);
  const [marks, setMarks] = useState([]);
  const [hits, setHits] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [res, setRes] = useState({ nb: false, xp: 0 });
  const inputRef = useRef(null);
  const noSpeech = !canSpeak();

  useEffect(() => () => stopSay(), []);

  const play = (rate = 0.9, text) => {
    const it = items[i]; const t = text ?? (it && it.de);
    if (!t) return;
    setSpeaking(true);
    say(t, { rate, onEnd: () => setSpeaking(false) });
  };
  useEffect(() => { if (phase === "play" && items[i] && !noSpeech) { const id = setTimeout(() => play(0.9), 280); return () => clearTimeout(id); } return undefined; }, [phase, i, items]); // eslint-disable-line

  const start = () => {
    let list;
    if (mode === "word") {
      list = sample(levelWords(level, false).arr, 8).map((p) => ({ de: p.bare, show: p.art ? `${p.art} ${p.bare}` : p.bare, w: p.w, noun: !!p.art }));
    } else {
      const ex = LESSONS.filter((l) => l.level === level).flatMap((l) => l.words).filter((w) => w.ex && w.ex.split(/\s+/).length >= 3 && w.ex.split(/\s+/).length <= 9);
      list = sample(ex, 6).map((w) => ({ de: w.ex, show: w.ex, w, sent: true }));
    }
    setItems(list); setI(0); setVal(""); setFb(null); setHint(0); setMarks([]); setHits(0); setPhase("play");
  };

  const check = () => {
    const it = items[i];
    if (!it || fb) return;
    stopSay();
    let ok, diff = null, almost = false, cap = false, part = 0;
    if (it.sent) {
      const exp = it.de.split(/\s+/); const got = val.trim().split(/\s+/).filter(Boolean);
      diff = exp.map((t, k) => ({ t, ok: got[k] !== undefined && norm(got[k]) === norm(t) }));
      part = diff.filter((d) => d.ok).length / exp.length;
      ok = part === 1 && got.length === exp.length;
    } else {
      const g = val.trim();
      const exact = g.toLowerCase() === it.de.toLowerCase();
      almost = !exact && norm(g) === norm(it.de);
      ok = exact || almost;
      cap = ok && it.noun && g[0] !== it.de[0];
    }
    const pts = ok ? (hint > 0 ? 0.5 : 1) : 0;
    setHits((h) => h + pts); setMarks((m) => [...m, ok]);
    setFb({ ok, diff, almost, cap });
    sfx(ok ? "correct" : "wrong");
  };

  const next = () => {
    if (i + 1 >= items.length) {
      const score = Math.round(hits * 10) / 10;
      const xp = Math.round(hits * 4);
      const nb = finish(Math.round(score), xp);
      setRes({ nb, xp }); setPhase("result");
    } else { setI(i + 1); setVal(""); setFb(null); setHint(0); setTimeout(() => inputRef.current && inputRef.current.focus(), 60); }
  };
  const ins = (ch) => { setVal((v) => v + ch); inputRef.current && inputRef.current.focus(); };

  const it = items[i];
  const exKey = { tr: "extr", en: "exen", ar: "exar", uk: "exuk", fa: "exfa", es: "exes", ku: "exku" }[packLang(lang)] || "exen";

  return (
    <Frame T={T} color={color} icon="🎧" name={GAME_NAMES.hd} onBack={onBack} right={phase === "play" ? `${i + 1}/${items.length}` : null}>
      {phase === "intro" && (
        <Intro T={T} icon="🎧" name={GAME_NAMES.hd} desc={packDesc(lang, "hd")} best={best} onStart={start}>
          <Chips label={T.mode} items={[{ v: "word", l: T.word }, { v: "sent", l: T.sentence }]} value={mode} onChange={setMode} />
          <Chips label={T.level} items={LV} value={level} onChange={setLevel} />
          {noSpeech && <div className="pk-err">{T.noSpeech}</div>}
        </Intro>
      )}
      {phase === "play" && it && (
        <div className="pk-in" key={i}>
          <Dots n={items.length} i={i} marks={marks} />
          <div className="pk-card" style={{ textAlign: "center" }}>
            <button className={"pk-listen" + (speaking ? " on" : "")} onClick={() => play(0.9)} aria-label={T.listen}><Volume2 size={40} /></button>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 14 }}>
              <button className="pk-btn sec" onClick={() => play(0.9)}><Volume2 size={16} /> {T.listen}</button>
              <button className="pk-btn sec" onClick={() => play(0.55)}>🐢 {T.slow}</button>
            </div>
            {noSpeech && <div className="pk-tr" style={{ textAlign: "center", fontWeight: 700 }}>{it.de}</div>}
            {hint > 0 && !it.sent && <div className="pk-mask">{it.de.split("").map((c, k) => (k < hint ? c : "•")).join(" ")}</div>}
            <input ref={inputRef} className={"pk-input" + (fb ? (fb.ok ? " ok" : " bad") : "")} value={val} placeholder={T.type}
              onChange={(e) => setVal(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") (fb ? next() : check()); }}
              autoCapitalize="off" autoCorrect="off" spellCheck={false} autoComplete="off" disabled={!!fb} />
            {!fb && (
              <div className="pk-keys">{["ä", "ö", "ü", "ß"].map((c) => <button key={c} className="pk-key" onClick={() => ins(c)}>{c}</button>)}</div>
            )}
            {!fb && (
              <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                {!it.sent && hint < 3 && <button className="pk-btn sec" onClick={() => setHint(hint + 1)}><Lightbulb size={16} /> {T.hint}</button>}
                <button className="pk-btn" disabled={!val.trim()} onClick={check}><Check size={17} /> {T.check}</button>
              </div>
            )}
          </div>
          {fb && (
            <div className={"pk-fb " + (fb.ok ? "ok" : "bad")}>
              <div className="pk-fbh">{fb.ok ? <Check size={18} /> : <X size={18} />}{fb.ok ? T.right : T.wrong}</div>
              {fb.diff ? (
                <div className="pk-diff">{fb.diff.map((d, k) => <span key={k} className={"pk-tok" + (d.ok ? "" : " x")}>{d.t}</span>)}</div>
              ) : (
                !fb.ok && <div className="pk-fbt"><b>{T.answer}:</b> {it.show}</div>
              )}
              {fb.ok && !fb.diff && <div className="pk-fbt"><b>{it.show}</b></div>}
              {fb.almost && <div className="pk-fbt m">{T.almost}</div>}
              {fb.cap && <div className="pk-fbt m">{T.capTip}</div>}
              <div className="pk-fbt m">{it.sent ? (it.w[exKey] || it.w.exen) : wordTx(it.w, lang)}</div>
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <button className="pk-btn sec" onClick={() => play(0.9, it.show)}><Volume2 size={16} /></button>
                <button className="pk-btn" style={{ flex: 1 }} onClick={next}>{T.next} <ChevronRight size={17} style={T._dir === "rtl" ? { transform: "scaleX(-1)" } : null} /></button>
              </div>
            </div>
          )}
        </div>
      )}
      {phase === "result" && (
        <Result T={T} pct={hits / items.length} main={`${Math.round(hits * 10) / 10}/${items.length}`} xp={res.xp} newBest={res.nb} onAgain={() => setPhase("intro")} onBack={onBack} />
      )}
    </Frame>
  );
}

/* ════════════════════════ 2 · VERB-JAGD ════════════════════════ */
const ENDS = ["e", "st", "t", "en", "t", "en"];
function makeVJ(mode, lastInf) {
  const pool = VJ_VERBS.filter((v) => v.inf !== lastInf);
  const v = pool[rnd(pool.length)];
  const kind = mode === "mix" ? (Math.random() < 0.5 ? "pres" : "perf") : mode;
  if (kind === "pres") {
    const p = rnd(6); const ans = v.pres[p];
    const cand = new Set();
    if (!v.sep && v.inf !== "sein") { let stem = v.inf.replace(/e?n$/, ""); const e = (/[td]$|[^aeiouäöüh]n$|[^aeiouäöüh]m$/.test(stem) ? "e" : ""); const reg = (p === 1 && /[sßxz]$/.test(stem)) ? ans : stem + (ENDS[p] === "e" ? "e" : (ENDS[p].startsWith("s") || ENDS[p] === "t" ? e + ENDS[p] : ENDS[p])); if (reg !== ans && !v.pres.includes(reg)) cand.add(reg); }
    shuffle(v.pres).forEach((f) => { if (f !== ans) cand.add(f); });
    const wrong = [...cand].slice(0, 3);
    return { v, kind, p, ans, opts: shuffle([ans, ...wrong]), prompt: VJ_PRON[p] };
  }
  const [aux, pp] = v.perf.split(" ");
  const other = aux === "hat" ? "ist" : "hat";
  const stem = v.inf.replace(/e?n$/, "");
  const reg = v.sep ? "ge" + v.inf : "ge" + stem + "t";
  const bad = reg === pp ? "ge" + v.inf : reg;
  return { v, kind, p: 2, ans: v.perf, opts: shuffle([v.perf, `${other} ${pp}`, `${aux} ${bad}`, `${other} ${bad}`]), prompt: "er / sie / es" };
}

export function VerbJagd({ lang, onBack, addXp }) {
  const T = useT(lang), color = "#C93A3F";
  const { best, finish } = useFinish("vj", addXp);
  const TOTAL = 60000;
  const [phase, setPhase] = useState("intro");
  const [mode, setMode] = useState("pres");
  const [left, setLeft] = useState(TOTAL);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [wrongs, setWrongs] = useState(0);
  const [q, setQ] = useState(null);
  const [pick, setPick] = useState(null);
  const [pop, setPop] = useState(0);
  const [res, setRes] = useState({ nb: false, xp: 0 });
  const doneRef = useRef(false);

  const start = () => { doneRef.current = false; setLeft(TOTAL); setScore(0); setStreak(0); setMaxStreak(0); setWrongs(0); setPick(null); setQ(makeVJ(mode, null)); setPhase("play"); };
  useTick(phase === "play", 100, () => setLeft((l) => Math.max(0, l - 100)));
  useEffect(() => {
    if (phase === "play" && left <= 0 && !doneRef.current) {
      doneRef.current = true;
      const xp = Math.min(40, score * 2);
      const nb = finish(score, xp);
      setRes({ nb, xp }); setPhase("result");
    }
  }, [left, phase]); // eslint-disable-line

  const choose = (o) => {
    if (pick !== null || !q) return;
    const ok = o === q.ans;
    setPick(o);
    if (ok) {
      const s = streak + 1; setScore((x) => x + 1); setStreak(s); setMaxStreak((m) => Math.max(m, s)); sfx(s % 5 === 0 ? "streak" : "correct");
      if (s % 5 === 0) { setLeft((l) => Math.min(TOTAL, l + 4000)); setPop((x) => x + 1); }
    } else { setStreak(0); setWrongs((w) => w + 1); setLeft((l) => Math.max(0, l - 3000)); sfx("wrong"); }
    setTimeout(() => { setPick(null); setQ((cur) => makeVJ(mode, cur && cur.v.inf)); }, ok ? 380 : 900);
  };

  const modes = [{ v: "pres", l: T.pres }, { v: "perf", l: T.perf }, { v: "mix", l: T.mix }];
  return (
    <Frame T={T} color={color} icon="🏹" name={GAME_NAMES.vj} onBack={onBack}>
      {phase === "intro" && (
        <Intro T={T} icon="🏹" name={GAME_NAMES.vj} desc={packDesc(lang, "vj")} best={best} onStart={start}>
          <Chips label={T.mode} items={modes} value={mode} onChange={setMode} />
        </Intro>
      )}
      {phase === "play" && q && (
        <div className="pk-in">
          <div className={"pk-time" + (left < 10000 ? " low" : "")}><i style={{ width: `${(left / TOTAL) * 100}%` }} /></div>
          <div className="pk-hud">
            <span>{T.score}: {score}</span>
            <span>{Math.ceil(left / 1000)}s</span>
            <span className="pk-flame"><Flame size={16} /> {streak}</span>
          </div>
          <div className="pk-card" style={{ position: "relative", textAlign: "center" }}>
            {pop > 0 && <div key={pop} className="pk-pop">+4s ⏱</div>}
            <div style={{ marginBottom: 8 }}><span className="pk-inf">{q.kind === "pres" ? T.pres : T.perf} · {q.v.inf}{verbTx(q.v.inf, lang) ? ` — ${verbTx(q.v.inf, lang)}` : ""}</span></div>
            <div className="pk-pron" dir="ltr"><small>{q.prompt}</small> ___</div>
          </div>
          <div className="pk-opts" style={{ marginTop: 12 }} dir="ltr">
            {q.opts.map((o) => {
              const st = pick === null ? "" : o === q.ans ? " ok" : o === pick ? " bad" : " dim";
              return <button key={o} className={"pk-opt" + st} disabled={pick !== null} onClick={() => choose(o)}>{o}</button>;
            })}
          </div>
        </div>
      )}
      {phase === "result" && (
        <Result T={T} pct={score / 18} main={score} sub={`${T.streak}: ${maxStreak} · ${T.wrong}: ${wrongs}`} xp={res.xp} newBest={res.nb} onAgain={() => setPhase("intro")} onBack={onBack} />
      )}
    </Frame>
  );
}

/* ════════════════════════ 3 · PRÄPOSITION-BRÜCKE ════════════════════════ */
export function PrapBruecke({ lang, onBack, addXp }) {
  const T = useT(lang), color = "#0E7C86";
  const { best, finish } = useFinish("pb", addXp);
  const [phase, setPhase] = useState("intro");
  const [level, setLevel] = useState("A1");
  const [items, setItems] = useState([]);
  const [i, setI] = useState(0);
  const [pick, setPick] = useState(null);
  const [marks, setMarks] = useState([]);
  const [res, setRes] = useState({ nb: false, xp: 0, ok: 0 });

  const start = () => {
    const lv = upto(level);
    const pool = PB_ITEMS.filter((p) => lv.includes(p.l));
    const list = sample(pool, Math.min(10, pool.length)).map((p) => ({ ...p, opts: shuffle([p.a, ...p.w]) }));
    setItems(list); setI(0); setPick(null); setMarks([]); setPhase("play");
  };
  const choose = (o) => {
    if (pick) return;
    const ok = o === items[i].a;
    setPick(o); setMarks((m) => [...m, ok]); sfx(ok ? "plank" : "crack");
  };
  const next = () => {
    if (i + 1 >= items.length) {
      const ok = marks.filter(Boolean).length; const xp = ok * 3;
      const nb = finish(ok, xp); setRes({ nb, xp, ok }); setPhase("result");
    } else { setI(i + 1); setPick(null); }
  };
  const it = items[i];
  const [pre, post] = it ? it.s.split("___") : ["", ""];

  const bridge = (
    <div className="pk-bridge" aria-hidden>
      <div className="pk-planks">
        {items.map((_, k) => <span key={k} className={"pk-plank" + (marks[k] === true ? " ok" : marks[k] === false ? " bad" : k === i ? " cur" : "")} />)}
      </div>
      <div className="pk-water" />
    </div>
  );

  return (
    <Frame T={T} color={color} icon="🌉" name={GAME_NAMES.pb} onBack={onBack} right={phase === "play" ? `${i + 1}/${items.length}` : null}>
      {phase === "intro" && (
        <Intro T={T} icon="🌉" name={GAME_NAMES.pb} desc={packDesc(lang, "pb")} best={best} onStart={start}>
          <Chips label={T.level} items={["A1", "A2", "B1", "B2"]} value={level} onChange={setLevel} />
        </Intro>
      )}
      {phase === "play" && it && (
        <div className="pk-in" key={i}>
          {bridge}
          <div className="pk-card">
            <div className="pk-sent">{pre}<span className={"pk-gap" + (pick ? (pick === it.a ? " ok" : " bad") : "")}>{pick || "   "}</span>{post}</div>
            <div className="pk-opts" dir="ltr">
              {it.opts.map((o) => {
                const st = !pick ? "" : o === it.a ? " ok" : o === pick ? " bad" : " dim";
                return <button key={o} className={"pk-opt" + st} disabled={!!pick} onClick={() => choose(o)}>{o}</button>;
              })}
            </div>
          </div>
          {pick && (
            <div className={"pk-fb " + (pick === it.a ? "ok" : "bad")}>
              <div className="pk-fbh">{pick === it.a ? <Check size={18} /> : <X size={18} />}{pick === it.a ? T.right : `${T.wrong} → ${it.a}`}</div>
              <div className="pk-fbt"><b>{T.rule}:</b> {pickTx(it.n, lang)}</div>
              <div className="pk-fbt m">{it.s.replace("___", it.a)}</div>
              <div className="pk-fbt m">{pickTx(it.t, lang)}</div>
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <button className="pk-btn sec" onClick={() => say(it.s.replace("___", it.a))}><Volume2 size={16} /></button>
                <button className="pk-btn" style={{ flex: 1 }} onClick={next}>{T.next} <ChevronRight size={17} style={T._dir === "rtl" ? { transform: "scaleX(-1)" } : null} /></button>
              </div>
            </div>
          )}
        </div>
      )}
      {phase === "result" && (
        <Result T={T} pct={res.ok / items.length} main={`${res.ok}/${items.length}`} sub={res.ok / items.length >= 0.7 ? `🌉 ${T.bridgeOk}` : `💥 ${T.bridgeFall}`} xp={res.xp} newBest={res.nb} onAgain={() => setPhase("intro")} onBack={onBack}>
          <div style={{ marginTop: 14 }}>{bridge}</div>
        </Result>
      )}
    </Frame>
  );
}

/* ════════════════════════ 4 · WORTSCHLANGE ════════════════════════ */
const edge = (c) => ({ "ß": "s", "ä": "a", "ö": "o", "ü": "u" }[c] || c);
const firstOf = (w) => edge(w[0].toLowerCase());
const lastOf = (w) => edge(w[w.length - 1].toLowerCase());
const TURN = 20;

export function Wortschlange({ lang, onBack, addXp }) {
  const T = useT(lang), color = "#1F8A57";
  const { best, finish } = useFinish("ws", addXp);
  const [phase, setPhase] = useState("intro");
  const [level, setLevel] = useState("A1");
  const [chain, setChain] = useState([]);
  const [val, setVal] = useState("");
  const [err, setErr] = useState("");
  const [left, setLeft] = useState(TURN);
  const [thinking, setThinking] = useState(false);
  const [hintsLeft, setHintsLeft] = useState(3);
  const [sugg, setSugg] = useState([]);
  const [endWhy, setEndWhy] = useState("");
  const [res, setRes] = useState({ nb: false, xp: 0, won: false });
  const poolRef = useRef(null);
  const usedRef = useRef(new Set());
  const scrollRef = useRef(null);
  const timers = useRef([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const cands = (letter) => poolRef.current.arr.filter((p) => firstOf(p.bare) === letter && !usedRef.current.has(p.bare.toLowerCase()));
  const safe = (arr) => { const s = arr.filter((p) => cands(lastOf(p.bare)).length >= 2 && p.bare.length <= 12); return s.length ? s : arr; };
  const seg = (p, by) => ({ w: p.bare, by, tx: wordTx(p.w, lang) });
  const cpuMove = (letter) => {
    const c = cands(letter);
    if (!c.length) return null;
    const p = safe(c)[rnd(safe(c).length)];
    usedRef.current.add(p.bare.toLowerCase());
    return seg(p, "cpu");
  };

  const start = () => {
    poolRef.current = levelWords(level, true);
    usedRef.current = new Set();
    const pick = safe(poolRef.current.arr.filter((p) => p.bare.length >= 4 && p.bare.length <= 8));
    const f = pick[rnd(pick.length)] || poolRef.current.arr[0];
    usedRef.current.add(f.bare.toLowerCase());
    setChain([seg(f, "cpu")]); setVal(""); setErr(""); setLeft(TURN); setHintsLeft(3); setSugg([]); setThinking(false); setEndWhy(""); setPhase("play");
  };

  const end = (won, why) => {
    const mine = (chain.filter((c) => c.by === "me").length);
    const xp = Math.min(40, mine * 3 + (won ? 10 : 0));
    const nb = finish(mine, xp);
    setEndWhy(why); setRes({ nb, xp, won, mine }); setPhase("result");
  };
  useTick(phase === "play" && !thinking, 1000, () => setLeft((l) => l - 1));
  useEffect(() => { if (phase === "play" && left <= 0) end(false, T.timeUp); }, [left, phase]); // eslint-disable-line
  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [chain]);

  const need = chain.length ? lastOf(chain[chain.length - 1].w) : "";
  const submit = () => {
    if (thinking) return;
    const raw = val.trim(); if (!raw) return;
    const key = raw.toLowerCase();
    const p = poolRef.current.map.get(key);
    if (firstOf(raw) !== need) { setErr(`${T.wrongLetter}: ${need.toUpperCase()}`); sfx("wrong"); return; }
    if (!p) { setErr(T.unknown); sfx("wrong"); return; }
    if (usedRef.current.has(key)) { setErr(T.used); sfx("wrong"); return; }
    usedRef.current.add(key);
    const mine = seg(p, "me");
    const nextChain = [...chain, mine];
    setChain(nextChain); setVal(""); setErr(""); setSugg([]); sfx("correct");
    setThinking(true);
    const t = setTimeout(() => {
      const mv = cpuMove(lastOf(p.bare));
      if (!mv) {
        const m = nextChain.filter((c) => c.by === "me").length;
        const xp = Math.min(40, m * 3 + 10); const nb = finish(m, xp);
        setEndWhy(T.snakeEnd); setRes({ nb, xp, won: true, mine: m }); setThinking(false); setPhase("result"); sfx("win"); return;
      }
      setChain((c) => [...c, mv]); setThinking(false); setLeft(TURN);
    }, 750);
    timers.current.push(t);
  };
  const giveHint = () => {
    if (hintsLeft <= 0) return;
    setSugg(sample(cands(need), 3).map((p) => p.bare)); setHintsLeft((h) => h - 1);
  };

  const mineCount = chain.filter((c) => c.by === "me").length;
  return (
    <Frame T={T} color={color} icon="🐍" name={GAME_NAMES.ws} onBack={onBack} right={phase === "play" ? `${T.chain}: ${mineCount}` : null}>
      {phase === "intro" && (
        <Intro T={T} icon="🐍" name={GAME_NAMES.ws} desc={packDesc(lang, "ws")} best={best} onStart={start}>
          <Chips label={T.level} items={LV} value={level} onChange={setLevel} />
        </Intro>
      )}
      {phase === "play" && (
        <div className="pk-in">
          <div className={"pk-time" + (left <= 6 ? " low" : "")}><i style={{ width: `${Math.max(0, (left / TURN) * 100)}%` }} /></div>
          <div className="pk-card" style={{ padding: 12 }}>
            <div className="pk-snake" ref={scrollRef}>
              {chain.map((c, k) => (
                <span key={k} className={"pk-seg " + c.by}>
                  {c.w.slice(0, -1)}<b>{c.w.slice(-1)}</b>
                  {c.tx && <i>{c.tx}</i>}
                </span>
              ))}
              {thinking && <span className="pk-seg" style={{ opacity: 0.6 }}>…</span>}
            </div>
          </div>
          <div className="pk-next">
            <span style={{ color: "var(--muted)", fontWeight: 700, fontSize: 13 }}>{T.lastLetter}</span>
            <div className="pk-letter">{need}</div>
          </div>
          <input className="pk-input" value={val} placeholder={`${need.toUpperCase()}…`} onChange={(e) => { setVal(e.target.value); setErr(""); }}
            onKeyDown={(e) => { if (e.key === "Enter") submit(); }} autoCapitalize="off" autoCorrect="off" spellCheck={false} autoComplete="off" disabled={thinking} />
          <div className="pk-err">{err}</div>
          <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
            <button className="pk-btn sec" disabled={hintsLeft <= 0 || thinking} onClick={giveHint}><Lightbulb size={16} /> {T.hint} ({hintsLeft})</button>
            <button className="pk-btn" disabled={!val.trim() || thinking} onClick={submit}><Check size={17} /> {T.check}</button>
          </div>
          {sugg.length > 0 && <div className="pk-sug">{sugg.map((s) => <button key={s} onClick={() => setVal(s)}>{s}</button>)}</div>}
        </div>
      )}
      {phase === "result" && (
        <Result T={T} pct={Math.min(1, (res.mine || 0) / 8) * (res.won ? 1 : 0.9)} main={res.mine || 0} sub={endWhy} xp={res.xp} newBest={res.nb} onAgain={() => setPhase("intro")} onBack={onBack}>
          <div className="pk-snake" style={{ justifyContent: "center", marginTop: 12 }}>
            {chain.map((c, k) => <span key={k} className={"pk-seg " + c.by}>{c.w.slice(0, -1)}<b>{c.w.slice(-1)}</b></span>)}
          </div>
        </Result>
      )}
    </Frame>
  );
}

/* ════════════════════════ 5 · FEHLER-DETEKTIV ════════════════════════ */
function parseCase(s) {
  const toks = [];
  s.split(/(\{[^}]*\})/).forEach((p) => {
    if (!p) return;
    const bad = p.startsWith("{");
    const txt = bad ? p.slice(1, -1) : p;
    txt.split(/\s+/).filter(Boolean).forEach((t) => toks.push({ t, bad }));
  });
  return toks;
}

export function FehlerDetektiv({ lang, onBack, addXp }) {
  const T = useT(lang), color = "#7A4FD0";
  const { best, finish } = useFinish("fd", addXp);
  const [phase, setPhase] = useState("intro");
  const [level, setLevel] = useState("A1");
  const [cases, setCases] = useState([]);
  const [i, setI] = useState(0);
  const [sel, setSel] = useState(null);
  const [marks, setMarks] = useState([]);
  const [res, setRes] = useState({ nb: false, xp: 0, ok: 0 });

  const start = () => {
    const lv = upto(level);
    const pool = FD_ITEMS.filter((c) => lv.includes(c.l));
    setCases(sample(pool, Math.min(8, pool.length)).map((c) => ({ ...c, toks: parseCase(c.s) })));
    setI(0); setSel(null); setMarks([]); setPhase("play");
  };
  const cur = cases[i];
  const hasErr = cur ? cur.toks.some((t) => t.bad) : false;
  const answer = (idx) => {
    if (sel !== null) return;
    const ok = idx === "none" ? !hasErr : (cur.toks[idx] && cur.toks[idx].bad);
    setSel(idx); setMarks((m) => [...m, !!ok]); sfx(ok ? "found" : "wrong");
  };
  const next = () => {
    if (i + 1 >= cases.length) {
      const ok = marks.filter(Boolean).length; const xp = ok * 4; const nb = finish(ok, xp);
      setRes({ nb, xp, ok }); setPhase("result");
    } else { setI(i + 1); setSel(null); }
  };
  const solved = sel !== null && marks[i];

  return (
    <Frame T={T} color={color} icon="🔍" name={GAME_NAMES.fd} onBack={onBack} right={phase === "play" ? `${i + 1}/${cases.length}` : null}>
      {phase === "intro" && (
        <Intro T={T} icon="🔍" name={GAME_NAMES.fd} desc={packDesc(lang, "fd")} best={best} onStart={start}>
          <Chips label={T.level} items={["A1", "A2", "B1", "B2"]} value={level} onChange={setLevel} />
        </Intro>
      )}
      {phase === "play" && cur && (
        <div className="pk-in" key={i}>
          <Dots n={cases.length} i={i} marks={marks} />
          <div className="pk-file">
            <span className="pk-file-tag">{T.case} {String(i + 1).padStart(2, "0")}</span>
            <div style={{ textAlign: "center", color: "var(--muted)", fontSize: 13, fontWeight: 700, margin: "4px 0 10px", display: "flex", gap: 6, alignItems: "center", justifyContent: "center" }}>
              <Search size={15} /> {T.tapErr}
            </div>
            <div className="pk-words">
              {cur.toks.map((tk, k) => {
                let st = "";
                if (sel !== null) {
                  if (sel === k) st = tk.bad ? " found" : " bad";
                  else if (tk.bad && !solved) st = " reveal";
                  else if (tk.bad && solved && sel !== k && cur.toks[sel] && cur.toks[sel].bad) st = " found";
                }
                return <button key={k} className={"pk-w" + st} disabled={sel !== null} onClick={() => answer(k)}>{tk.t}</button>;
              })}
            </div>
            <div style={{ textAlign: "center", marginTop: 12 }}>
              <button className={"pk-btn sec"} disabled={sel !== null} onClick={() => answer("none")}><Check size={16} /> {T.noErr}</button>
            </div>
          </div>
          {sel !== null && (
            <div className={"pk-fb " + (marks[i] ? "ok" : "bad")}>
              <div className="pk-fbh">{marks[i] ? <Check size={18} /> : <X size={18} />}{marks[i] ? T.right : T.wrong}</div>
              {hasErr
                ? <div className="pk-fbt">{cur.toks.filter((t) => t.bad).map((t) => t.t).join(" ")} <b>→ {cur.f}</b></div>
                : <div className="pk-fbt"><b>{T.correctSentence}</b></div>}
              <div className="pk-fbt m">{pickTx(cur.n, lang)}</div>
              <div className="pk-fbt m">{pickTx(cur.t, lang)}</div>
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <button className="pk-btn sec" onClick={() => say(cur.f ? cur.s.replace(/\{[^}]*\}/, cur.f) : cur.s)}><Volume2 size={16} /></button>
                <button className="pk-btn" style={{ flex: 1 }} onClick={next}>{T.next} <ChevronRight size={17} style={T._dir === "rtl" ? { transform: "scaleX(-1)" } : null} /></button>
              </div>
            </div>
          )}
        </div>
      )}
      {phase === "result" && (
        <Result T={T} pct={res.ok / cases.length} main={`${res.ok}/${cases.length}`} xp={res.xp} newBest={res.nb} onAgain={() => setPhase("intro")} onBack={onBack} />
      )}
    </Frame>
  );
}

/* ════════════════════════ 6 · RADIO-QUIZ ════════════════════════ */
export function RadioQuiz({ lang, onBack, addXp }) {
  const T = useT(lang), color = "#E8590C";
  const { best, finish } = useFinish("rq", addXp);
  const [phase, setPhase] = useState("intro");
  const [lvl, setLvl] = useState("all");
  const [list, setList] = useState([]);
  const [bi, setBi] = useState(0);
  const [heard, setHeard] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [showTx, setShowTx] = useState(false);
  const [ans, setAns] = useState({});
  const [res, setRes] = useState({ nb: false, xp: 0, ok: 0, total: 0 });
  const noSpeech = !canSpeak();
  useEffect(() => () => stopSay(), []);

  const start = () => {
    const pool = lvl === "all" ? RQ_BULLETINS : RQ_BULLETINS.filter((b) => (lvl === "A2" ? b.l === "A2" : b.l === "B1"));
    setList(sample(pool, Math.min(4, pool.length)).map((b) => ({ ...b, qs: b.qs.map((q) => { const o = q.o.map((t, k) => ({ t, k })); return { q: q.q, o: shuffle(o), a: q.a }; }) })));
    setBi(0); setHeard(false); setShowTx(false); setAns({}); setPhase("play");
  };
  const b = list[bi];
  const listen = () => {
    if (!b) return;
    sfx("radioOn"); setHeard(true); setSpeaking(true);
    say(b.text, { rate: 0.88, onEnd: () => setSpeaking(false) });
  };
  const stop = () => { stopSay(); setSpeaking(false); };
  const allAnswered = b && b.qs.every((_, k) => ans[`${bi}-${k}`] !== undefined);
  const choose = (k, o) => { const key = `${bi}-${k}`; if (ans[key] !== undefined) return; setAns((a) => ({ ...a, [key]: o.k })); sfx(o.k === b.qs[k].a ? "correct" : "wrong"); };
  const next = () => {
    stop();
    if (bi + 1 >= list.length) {
      let ok = 0, total = 0;
      list.forEach((bb, x) => bb.qs.forEach((q, k) => { total++; if (ans[`${x}-${k}`] === q.a) ok++; }));
      const xp = ok * 3; const nb = finish(ok, xp); setRes({ nb, xp, ok, total }); setPhase("result");
    } else { setBi(bi + 1); setHeard(false); setShowTx(false); }
  };
  const freq = useMemo(() => (87.5 + (bi * 3.7) % 18).toFixed(1).replace(".", ","), [bi]);

  return (
    <Frame T={T} color={color} icon="📻" name={GAME_NAMES.rq} onBack={() => { stopSay(); onBack(); }} right={phase === "play" ? `${bi + 1}/${list.length}` : null}>
      {phase === "intro" && (
        <Intro T={T} icon="📻" name={GAME_NAMES.rq} desc={packDesc(lang, "rq")} best={best} onStart={start}>
          <Chips label={T.level} items={[{ v: "all", l: T.all }, { v: "A2", l: "A2" }, { v: "B1", l: "B1" }]} value={lvl} onChange={setLvl} />
          {noSpeech && <div className="pk-err">{T.noSpeech}</div>}
        </Intro>
      )}
      {phase === "play" && b && (
        <div className="pk-in" key={bi}>
          <div className="pk-radio">
            <div className="pk-rtop"><span className="pk-badge">{b.title}</span><span className={"pk-air" + (speaking ? " on" : "")}><i />{T.onAir}</span></div>
            <div className={"pk-dial" + (speaking ? " on" : "")}><span className="pk-freq">{freq} MHz · Radio Suri</span><div className="pk-needle" /></div>
            <div className={"pk-eq" + (speaking ? " on" : "")}>{Array.from({ length: 18 }).map((_, k) => <i key={k} style={{ animationDelay: `${(k * 0.11) % 0.9}s`, animationDuration: `${0.5 + ((k * 37) % 50) / 100}s` }} />)}</div>
            <div className="pk-rbtn">
              {!noSpeech && (speaking
                ? <button className="main" onClick={stop}><X size={17} /> Stop</button>
                : <button className="main" onClick={listen}><RadioIcon size={17} /> {heard ? T.listen : T.start}</button>)}
              <button className="alt" onClick={() => setShowTx((s) => !s)}>{showTx || noSpeech ? T.hideText : T.showText}</button>
            </div>
          </div>
          {(showTx || noSpeech) && <div className="pk-tr">{b.text}</div>}
          {(heard || noSpeech) && b.qs.map((q, k) => {
            const key = `${bi}-${k}`; const a = ans[key];
            return (
              <div key={key} className="pk-in">
                <div className="pk-q">{k + 1}. {q.q}</div>
                <div className="pk-opts col" dir="ltr">
                  {q.o.map((o) => {
                    const st = a === undefined ? "" : o.k === q.a ? " ok" : o.k === a ? " bad" : " dim";
                    return <button key={o.k} className={"pk-opt" + st} disabled={a !== undefined} onClick={() => choose(k, o)}>{o.t}</button>;
                  })}
                </div>
              </div>
            );
          })}
          {allAnswered && (
            <div style={{ marginTop: 16, textAlign: "center" }}>
              <button className="pk-cta" onClick={next}>{T.next} <ChevronRight size={18} style={T._dir === "rtl" ? { transform: "scaleX(-1)" } : null} /></button>
            </div>
          )}
        </div>
      )}
      {phase === "result" && (
        <Result T={T} pct={res.ok / res.total} main={`${res.ok}/${res.total}`} xp={res.xp} newBest={res.nb} onAgain={() => setPhase("intro")} onBack={onBack} />
      )}
    </Frame>
  );
}
