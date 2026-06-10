import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { supabase } from './lib/supabase';
import {
  Home as HomeIcon, BookOpen, LayoutGrid, MessageCircle,
  KeyRound, AlertTriangle, GraduationCap, Briefcase,
  Library, Target, Trophy, Pin, BookMarked, BookOpenCheck,
  CheckCircle2, XCircle, AlertCircle, RotateCcw, Zap, RefreshCw, Mic, Volume2,
  Plane, Users, Heart, Globe, Clock, Lock, LogOut,
  Headphones, PenLine, FileText, Type, Star, TrendingUp, SlidersHorizontal, ClipboardCheck
} from "lucide-react";

// ── Shared video singleton — one decode, N canvases ──────────────────
const _sharedVideoState = { el: null, ready: false, cbs: new Set() };
function getSharedVideo() {
  if (!_sharedVideoState.el) {
    const v = document.createElement("video");
    v.src = "/ai-agent.mp4"; v.muted = true; v.loop = true; v.playsInline = true;
    v.style.cssText = "position:fixed;width:1px;height:1px;opacity:0;pointer-events:none";
    document.body.appendChild(v);
    v.addEventListener("canplay", () => {
      _sharedVideoState.ready = true;
      v.play().catch(() => {});
      _sharedVideoState.cbs.forEach(fn => fn());
    }, { once: true });
    v.load();
    _sharedVideoState.el = v;
  }
  return _sharedVideoState;
}

// ── Small static robot avatar (used for chat message icons ≤ 40px) ───
function RobotAvatar({ size = 36, style, className }) {
  return (
    <img
      src="/robot-mascot.webp"
      width={size} height={size}
      className={className}
      style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0, ...style }}
      alt="AI"
    />
  );
}

// ── Canvas chroma-key component — all instances share ONE video ──────
// Uses setInterval at 8 fps to keep CPU usage minimal
function RobotVideo({ width = 140, style, className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let ctx;
    try { ctx = canvas.getContext("2d", { willReadFrequently: true }); }
    catch (e) { return; }

    const state = getSharedVideo();

    function paint() {
      try {
        const video = state.el;
        if (!state.ready || !video || video.readyState < 2) return;
        const vw = video.videoWidth, vh = video.videoHeight;
        if (!vw || !vh) return;
        const h = Math.round(width * vh / vw);
        if (canvas.height !== h) canvas.height = h;
        ctx.clearRect(0, 0, width, h);
        ctx.drawImage(video, 0, 0, width, h);
        try {
          const img = ctx.getImageData(0, 0, width, h);
          const d = img.data;
          for (let i = 0; i < d.length; i += 4) {
            const r = d[i], g = d[i+1], b = d[i+2];
            const brightness = (r + g + b) / 3;
            const colorfulness = Math.max(r,g,b) - Math.min(r,g,b);
            // pure white with low color variation = background
            if (brightness > 250 && colorfulness < 8) { d[i+3] = 0; }
            // smooth feathered edge: bright + near-neutral pixels fade out gradually
            else if (brightness > 230 && colorfulness < 20) {
              const t = (brightness - 230) / 25;
              d[i+3] = Math.round((1 - t) * 255);
            }
          }
          ctx.putImageData(img, 0, 0);
        } catch (_) { /* canvas tainted – skip chroma-key */ }
      } catch (_) {}
    }

    let timerId;
    const startPainting = () => {
      paint();
      timerId = setInterval(paint, 125); // 8 fps
    };

    if (state.ready) { startPainting(); }
    else { state.cbs.add(startPainting); }

    return () => {
      clearInterval(timerId);
      state.cbs.delete(startPainting);
    };
  }, [width]);

  return (
    <canvas ref={canvasRef} width={width} height={width}
      className={className} style={style} />
  );
}

// ── API key helpers ──────────────────────────────────────────────────
const KEY_STORE = "ferbun_api_key";
const getApiKey = () => localStorage.getItem(KEY_STORE) || "";
const saveApiKey = (k) => localStorage.setItem(KEY_STORE, k.trim());

// Shared Anthropic fetch helper — always reads the current key
async function callClaude(body) {
  const key = getApiKey();
  if (!key) throw new Error("NO_KEY");
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || `HTTP ${res.status}`);
  }
  return res.json();
}

// ── API Key Modal ─────────────────────────────────────────────────────
function ApiKeyModal({ onSave }) {
  const [val, setVal] = useState(getApiKey());
  const save = () => { saveApiKey(val); onSave(); };
  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.55)", backdropFilter:"blur(6px)", zIndex:999, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ background:"#fff", borderRadius:24, padding:"32px 28px", maxWidth:420, width:"90%", boxShadow:"0 32px 80px rgba(0,0,0,.3)", fontFamily:"'Vazirmatn',sans-serif" }}>
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
          <div style={{ width:44, height:44, borderRadius:14, background:"linear-gradient(135deg,#06b6d4,#a855f7)", display:"grid", placeItems:"center" }}><KeyRound size={22} color="#fff" /></div>
          <div>
            <div style={{ fontWeight:800, fontSize:17, color:"#0b1120" }}>API کلیل</div>
            <div style={{ fontSize:12, color:"#5a6a85", marginTop:2 }}>Anthropic API کلیلەکەت داخل بکە</div>
          </div>
        </div>
        <input
          value={val} onChange={e => setVal(e.target.value)} onKeyDown={e => e.key==="Enter" && save()}
          placeholder="sk-ant-api03-…"
          dir="ltr"
          style={{ width:"100%", border:"2px solid rgba(6,182,212,.35)", borderRadius:14, padding:"13px 16px", fontSize:14, outline:"none", fontFamily:"monospace", boxSizing:"border-box", color:"#0b1120", marginBottom:16, transition:"border .2s" }}
          onFocus={e => e.target.style.borderColor="#06b6d4"}
          onBlur={e => e.target.style.borderColor="rgba(6,182,212,.35)"}
        />
        <div style={{ fontSize:12, color:"#5a6a85", marginBottom:20, lineHeight:1.7 }}>
          کلیلەکە لە <strong>console.anthropic.com</strong> دەردەکەویت. تەنها لە مێمۆری بۆردەکەی ئەم ئامێرەدا پاشەکەوت دەکرێت.
        </div>
        <button onClick={save} disabled={!val.trim()} style={{ width:"100%", background:val.trim()?"linear-gradient(135deg,#06b6d4,#a855f7)":"#e2e8f0", color:val.trim()?"#fff":"#94a3b8", border:"none", borderRadius:14, padding:"14px", fontWeight:700, fontSize:15, cursor:val.trim()?"pointer":"not-allowed", fontFamily:"inherit" }}>
          ✓ پاشەکەوت بکە و دەستپێبکە
        </button>
      </div>
    </div>
  );
}

// ── ناوەڕۆک / Content ──────────────────────────────────────────────
// ڕووکار: سۆرانی (RTL) · فێرکردن: ئەڵمانی · ئاست: A1–B2

const C = {
  // ── Lumo Design Tokens ──────────────────────────────────────────────
  bg: "#FBFBFC",             // ink-50 base
  panel: "#FFFFFF",          // surface
  ink: "#18181B",            // ink-900
  muted: "#71717A",          // ink-500
  red: "#5B5BD6",            // iris-500  (primary)
  redDk: "#4B45C4",          // iris-600  (primary dark)
  gold: "#F5A524",           // amber     (XP / warning)
  green: "#16A06F",          // jade      (success / correct)
  plum: "#FF6B5E",           // coral     (accent / secondary)
  rose: "#E5484D",           // rose      (error / wrong)
  goldPrem: "#E8C16B",       // gold      (premium)
  line: "#E4E4E8",           // ink-200
};

const LEVELS = [
  { id: "A1", label: "سەرەتایی", color: "#16A06F" },   // jade
  { id: "A2", label: "بنەڕەتی", color: "#F5A524" },    // amber
  { id: "B1", label: "ناوەند", color: "#5B5BD6" },      // iris
  { id: "B2", label: "پێشکەوتوو", color: "#FF6B5E" },  // coral
];
const levelColor = (id) => (LEVELS.find((l) => l.id === id) || {}).color || C.muted;

const LESSONS = [
  // ───────── A1 ─────────
  {
    id: "silaw", level: "A1", title: "سڵاوکردن و ناساندن", de: "Begrüßung", icon: "✦",
    grammar: "لە ئەڵمانیدا دوو جۆری «تۆ» هەیە: «du» (نافەرمی، بۆ هاوڕێ) و «Sie» (فەرمی، بۆ ڕێزگرتن). بۆ کەسی گەورە یان نەناس «Sie» بەکاربهێنە.",
    words: [
      { de: "Hallo", ku: "سڵاو" },
      { de: "Guten Tag", ku: "ڕۆژباش" },
      { de: "Guten Morgen", ku: "بەیانیت باش" },
      { de: "Guten Abend", ku: "ئێوارەت باش" },
      { de: "Danke", ku: "سوپاس" },
      { de: "Bitte", ku: "تکایە" },
      { de: "Ja", ku: "بەڵێ" },
      { de: "Nein", ku: "نەخێر" },
      { de: "Tschüss", ku: "ماڵئاوا" },
      { de: "Wie geht es dir?", ku: "چۆنیت؟" },
    ]
  },
  {
    id: "pronomen", level: "A1", title: "جێناو و «بوون»", de: "Pronomen & sein", icon: "✧",
    grammar: "ڤێربی «sein» (بوون): ich bin، du bist، er/sie/es ist، wir sind، ihr seid، sie/Sie sind. نموونە: «Ich bin Student» (من خوێندکارم).",
    words: [
      { de: "ich", ku: "من" },
      { de: "du", ku: "تۆ" },
      { de: "er", ku: "ئەو (نێر)" },
      { de: "sie", ku: "ئەو (مێ)" },
      { de: "es", ku: "ئەو (شت)" },
      { de: "wir", ku: "ئێمە" },
      { de: "ihr", ku: "ئێوە" },
      { de: "sie", ku: "ئەوان" },
      { de: "Sie", ku: "ئێوە (فەرمی)" },
    ]
  },
  {
    id: "hejmar", level: "A1", title: "ژمارەکان (١–١٠)", de: "Zahlen", icon: "①",
    grammar: "ژمارەکان لە ئەڵمانیدا بەپێی ڕەگەز ناگۆڕێن. «eins, zwei, drei» هەمیشە وەک یەکن.",
    words: [
      { de: "eins", ku: "یەک" },
      { de: "zwei", ku: "دوو" },
      { de: "drei", ku: "سێ" },
      { de: "vier", ku: "چوار" },
      { de: "fünf", ku: "پێنج" },
      { de: "sechs", ku: "شەش" },
      { de: "sieben", ku: "حەوت" },
      { de: "acht", ku: "هەشت" },
      { de: "neun", ku: "نۆ" },
      { de: "zehn", ku: "دە" },
    ]
  },
  {
    id: "xezan", level: "A1", title: "خێزان", de: "Familie", icon: "❖",
    grammar: "هەموو ناوێک ڕەگەزی هەیە: «der» (نێر)، «die» (مێ)، «das» (بێلایەن). نموونە: der Vater (باوک)، die Mutter (دایک)، das Kind (منداڵ). ئارتیکڵ لەگەڵ وشەکەدا فێری بە!",
    words: [
      { de: "die Mutter", ku: "دایک" },
      { de: "der Vater", ku: "باوک" },
      { de: "der Bruder", ku: "برا" },
      { de: "die Schwester", ku: "خوشک" },
      { de: "das Kind", ku: "منداڵ" },
      { de: "die Familie", ku: "خێزان" },
      { de: "der Sohn", ku: "کوڕ" },
      { de: "die Tochter", ku: "کچ" },
      { de: "die Großmutter", ku: "داپیر / نەنک" },
      { de: "der Großvater", ku: "باپیر" },
    ]
  },
  {
    id: "xwardin", level: "A1", title: "خواردن و خواردنەوە", de: "Essen & Trinken", icon: "✿",
    grammar: "هەندێ وشەی خواردن: der Kaffee (قاوە)، der Tee (چا). «der» نیشانەی ڕەگەزی نێرە. ئارتیکڵ لەگەڵ وشەکەدا بیربکەرەوە.",
    words: [
      { de: "das Brot", ku: "نان" },
      { de: "das Wasser", ku: "ئاو" },
      { de: "der Kaffee", ku: "قاوە" },
      { de: "der Tee", ku: "چا" },
      { de: "der Apfel", ku: "سێو" },
      { de: "das Fleisch", ku: "گۆشت" },
      { de: "die Milch", ku: "شیر" },
      { de: "das Ei", ku: "هێلکە" },
      { de: "der Käse", ku: "پەنیر" },
      { de: "das Obst", ku: "میوە" },
    ]
  },
  {
    id: "rengekan", level: "A1", title: "ڕەنگەکان", de: "Farben", icon: "✺",
    grammar: "ڕەنگەکان دوای «sein» ناگۆڕێن: «Das Auto ist rot» (ئۆتۆمبێلەکە سوورە). بەڵام کاتێک پێش ناو دێن دەگۆڕێن: «das rote Auto».",
    words: [
      { de: "rot", ku: "سوور" },
      { de: "blau", ku: "شین" },
      { de: "grün", ku: "سەوز" },
      { de: "gelb", ku: "زەرد" },
      { de: "schwarz", ku: "ڕەش" },
      { de: "weiß", ku: "سپی" },
      { de: "braun", ku: "قاوەیی" },
      { de: "grau", ku: "خۆڵەمێشی" },
      { de: "orange", ku: "پرتەقاڵی" },
      { de: "rosa", ku: "پەمەیی" },
    ]
  },
  // ───────── A2 ─────────
  {
    id: "zeit", level: "A2", title: "کات و کاتژمێر", de: "Zeit & Uhr", icon: "◴",
    grammar: "بۆ پرسینی کات: «Wie spät ist es?» (کاتژمێر چەندە؟). وەڵام: «Es ist drei Uhr» (کاتژمێر سێیە).",
    words: [
      { de: "die Uhr", ku: "کاتژمێر" },
      { de: "die Stunde", ku: "کاتژمێر / سەعات" },
      { de: "die Minute", ku: "خولەک" },
      { de: "heute", ku: "ئەمڕۆ" },
      { de: "morgen", ku: "سبەینێ" },
      { de: "gestern", ku: "دوێنێ" },
      { de: "jetzt", ku: "ئێستا" },
      { de: "früh", ku: "زوو" },
      { de: "spät", ku: "درەنگ" },
      { de: "der Tag", ku: "ڕۆژ" },
    ]
  },
  {
    id: "perfekt", level: "A2", title: "کاتی ڕابردوو (Perfekt)", de: "Perfekt", icon: "↩",
    grammar: "کاتی ڕابردوو = haben/sein + Partizip II. «Ich habe gegessen» (خواردم). ڤێربی جووڵە «sein» وەردەگرن: «Ich bin gegangen» (ڕۆیشتم).",
    words: [
      { de: "machen → gemacht", ku: "کردن" },
      { de: "gehen → gegangen", ku: "ڕۆیشتن" },
      { de: "essen → gegessen", ku: "خواردن" },
      { de: "trinken → getrunken", ku: "خواردنەوە" },
      { de: "sehen → gesehen", ku: "بینین" },
      { de: "kaufen → gekauft", ku: "کڕین" },
      { de: "spielen → gespielt", ku: "یاریکردن" },
      { de: "lernen → gelernt", ku: "فێربوون" },
    ]
  },
  {
    id: "modal", level: "A2", title: "ڤێربی یاریدەدەر", de: "Modalverben", icon: "◈",
    grammar: "ڤێربی یاریدەدەر + ڤێرب بە شێوەی بنەڕەتی لە کۆتایی ڕستەدا دێت: «Ich kann Deutsch sprechen» (دەتوانم ئەڵمانی قسە بکەم).",
    words: [
      { de: "können", ku: "توانین" },
      { de: "müssen", ku: "پێویستبوون / دەبێت" },
      { de: "wollen", ku: "ویستن" },
      { de: "dürfen", ku: "مۆڵەت/ڕێگەپێدان" },
      { de: "sollen", ku: "دەبێت / پێویست" },
      { de: "möchten", ku: "حەزکردن" },
    ]
  },
  {
    id: "beruf", level: "A2", title: "کارکردن و پیشە", de: "Beruf", icon: "⚒",
    grammar: "بۆ پرسینی پیشە: «Was sind Sie von Beruf?» (پیشەت چییە؟). وەڵام: «Ich bin Lehrer» (من مامۆستام) — لێرە ئارتیکڵ بەکارنایەت.",
    words: [
      { de: "der Arzt", ku: "پزیشک" },
      { de: "der Lehrer", ku: "مامۆستا" },
      { de: "der Ingenieur", ku: "ئەندازیار" },
      { de: "die Krankenschwester", ku: "پەرستار" },
      { de: "der Beruf", ku: "پیشە" },
      { de: "die Arbeit", ku: "کار" },
      { de: "das Büro", ku: "نووسینگە" },
      { de: "der Chef", ku: "بەڕێوەبەر" },
      { de: "arbeiten", ku: "کارکردن" },
      { de: "der Student", ku: "خوێندکار" },
    ]
  },
  // ───────── B1 ─────────
  {
    id: "gesund", level: "B1", title: "تەندروستی", de: "Gesundheit", icon: "✚",
    grammar: "بۆ ڕێزگرتن Konjunktiv II بەکاربهێنە: «Ich hätte gern einen Termin» (حەز دەکەم ژووانێکم هەبێت)، «Könnten Sie mir helfen?» (دەتوانن یارمەتیم بدەن؟).",
    words: [
      { de: "krank", ku: "نەخۆش" },
      { de: "gesund", ku: "تەندروست" },
      { de: "der Schmerz", ku: "ئازار" },
      { de: "das Krankenhaus", ku: "نەخۆشخانە" },
      { de: "das Medikament", ku: "دەرمان" },
      { de: "der Termin", ku: "ژووان / کاتی پزیشک" },
      { de: "die Apotheke", ku: "دەرمانخانە" },
      { de: "der Kopf", ku: "سەر" },
      { de: "der Bauch", ku: "سک" },
    ]
  },
  {
    id: "konnektoren", level: "B1", title: "ڕستەی لاوەکی و گرێدەر", de: "Nebensätze", icon: "⟜",
    grammar: "گرێدەرەکانی وەک weil، dass، wenn ڤێرب دەنێرنە کۆتایی ڕستە: «Ich lerne Deutsch, weil ich in Deutschland wohne» (ئەڵمانی فێردەبم، چونکە لە ئەڵمانیا دەژیم).",
    words: [
      { de: "weil", ku: "چونکە" },
      { de: "dass", ku: "کە" },
      { de: "wenn", ku: "ئەگەر / کاتێک" },
      { de: "obwohl", ku: "هەرچەندە" },
      { de: "deshalb", ku: "لەبەرئەوە" },
      { de: "trotzdem", ku: "لەگەڵ ئەوەشدا" },
      { de: "damit", ku: "بۆ ئەوەی" },
      { de: "während", ku: "لە کاتێکدا" },
    ]
  },
  {
    id: "reise", level: "B1", title: "گەشت و گەشتیاری", de: "Reise", icon: "✈",
    grammar: "ڤێربە لێکدراوەکان (trennbare Verben) لە کاتی ئێستادا لێک دەبنەوە: «Der Zug fährt um 8 Uhr ab» (شەمەندەفەرەکە کاتژمێر ٨ بەڕێدەکەوێت) — «abfahren».",
    words: [
      { de: "die Reise", ku: "گەشت" },
      { de: "der Flughafen", ku: "فڕۆکەخانە" },
      { de: "der Bahnhof", ku: "وێستگەی شەمەندەفەر" },
      { de: "das Hotel", ku: "هۆتێل" },
      { de: "der Koffer", ku: "جانتا" },
      { de: "die Fahrkarte", ku: "بلیت" },
      { de: "das Gepäck", ku: "بار / کەلوپەل" },
      { de: "ankommen", ku: "گەیشتن" },
      { de: "abfahren", ku: "بەڕێکەوتن" },
      { de: "buchen", ku: "حیجزکردن" },
    ]
  },
  // ───────── B2 ─────────
  {
    id: "wirtschaft", level: "B2", title: "کار و ئابووری", de: "Arbeit & Wirtschaft", icon: "₿",
    grammar: "Passiv (ڕستەی چالاک‌نەبوو): werden + Partizip II. «Das Produkt wird verkauft» (بەرهەمەکە دەفرۆشرێت). «Die Bewerbung wurde geschickt» (داواکارییەکە نێردرا).",
    words: [
      { de: "die Wirtschaft", ku: "ئابووری" },
      { de: "das Unternehmen", ku: "کۆمپانیا" },
      { de: "die Bewerbung", ku: "داواکاری کار" },
      { de: "das Gehalt", ku: "مووچە" },
      { de: "die Steuer", ku: "باج" },
      { de: "der Vertrag", ku: "گرێبەست" },
      { de: "die Erfahrung", ku: "ئەزموون" },
      { de: "die Fähigkeit", ku: "توانا / شارەزایی" },
      { de: "selbstständig", ku: "سەربەخۆ" },
      { de: "die Investition", ku: "وەبەرهێنان" },
    ]
  },
  {
    id: "umwelt", level: "B2", title: "ژینگە و کۆمەڵگا", de: "Umwelt & Gesellschaft", icon: "❦",
    grammar: "بۆ بەراوردی هاوکات «je … desto» بەکاربهێنە: «Je mehr du lernst, desto besser sprichst du» (هەرچەند زیاتر فێربیت، ئەوەندە باشتر قسە دەکەیت).",
    words: [
      { de: "die Umwelt", ku: "ژینگە" },
      { de: "der Klimawandel", ku: "گۆڕانی کەش‌وهەوا" },
      { de: "die Gesellschaft", ku: "کۆمەڵگا" },
      { de: "die Verantwortung", ku: "بەرپرسیارێتی" },
      { de: "nachhaltig", ku: "بەردەوام / گونجاو" },
      { de: "die Energie", ku: "وزە" },
      { de: "der Müll", ku: "زبڵ" },
      { de: "die Lösung", ku: "چارەسەر" },
      { de: "entwickeln", ku: "پەرەپێدان" },
      { de: "die Zukunft", ku: "داهاتوو" },
    ]
  },
  // ───────── A1 زیادکراو ─────────
  { id: "zahlen2", level: "A1", title: "ژمارەکان (١١–١٠٠)", de: "Zahlen 11–100", icon: "②",
    grammar: "لە ٢١ بەرەو سەرەوە یەکان پێش دەهاتن: «einundzwanzig» = یەک‌و‌بیست.",
    words: [
      { de: "elf", ku: "یازدە" },
      { de: "zwölf", ku: "دوازدە" },
      { de: "dreizehn", ku: "سێزدە" },
      { de: "vierzehn", ku: "چواردە" },
      { de: "fünfzehn", ku: "پازدە" },
      { de: "sechzehn", ku: "شازدە" },
      { de: "siebzehn", ku: "حەڤدە" },
      { de: "achtzehn", ku: "هەژدە" },
      { de: "neunzehn", ku: "نۆزدە" },
      { de: "zwanzig", ku: "بیست" },
      { de: "dreißig", ku: "سی" },
      { de: "vierzig", ku: "چل" },
      { de: "fünfzig", ku: "پەنجا" },
      { de: "hundert", ku: "سەد" },
    ]
  },
  { id: "wochenmonat", level: "A1", title: "ڕۆژ و مانگەکان", de: "Tage & Monate", icon: "📅",
    grammar: "ڕۆژ و مانگەکان هەموو نێرن (der): der Montag، der Januar.",
    words: [
      { de: "der Montag", ku: "دووشەممە" },
      { de: "der Dienstag", ku: "سێشەممە" },
      { de: "der Mittwoch", ku: "چوارشەممە" },
      { de: "der Donnerstag", ku: "پێنجشەممە" },
      { de: "der Freitag", ku: "هەینی" },
      { de: "der Samstag", ku: "شەممە" },
      { de: "der Sonntag", ku: "یەکشەممە" },
      { de: "der Januar", ku: "ژانویە" },
      { de: "der Februar", ku: "شوبات" },
      { de: "der März", ku: "ئازار" },
      { de: "der April", ku: "نیسان" },
      { de: "der Mai", ku: "مایس" },
      { de: "der Juni", ku: "حوزەیران" },
      { de: "der Juli", ku: "تەمموز" },
      { de: "der August", ku: "ئاب" },
      { de: "der September", ku: "ئەیلوول" },
      { de: "der Oktober", ku: "تشرینی یەکەم" },
      { de: "der November", ku: "تشرینی دووەم" },
      { de: "der Dezember", ku: "کانوونی یەکەم" },
    ]
  },
  { id: "koerper", level: "A1", title: "لەشی مرۆڤ", de: "Körper", icon: "🧍",
    grammar: "هەندێ ئەندامی لەش کۆیان ناڕێکە: das Auge → die Augen.",
    words: [
      { de: "das Auge", ku: "چاو" },
      { de: "die Nase", ku: "لووت" },
      { de: "der Mund", ku: "دەم" },
      { de: "das Ohr", ku: "گوێ" },
      { de: "die Hand", ku: "دەست" },
      { de: "der Fuß", ku: "پێ" },
      { de: "der Arm", ku: "باڵ" },
      { de: "das Bein", ku: "قاچ" },
      { de: "der Rücken", ku: "پشت" },
      { de: "das Haar", ku: "مووی سەر" },
      { de: "der Zahn", ku: "ددان" },
      { de: "der Hals", ku: "ملۆ" },
    ]
  },
  { id: "haus", level: "A1", title: "ماڵ و کەلوپەل", de: "Haus & Möbel", icon: "🏠",
    grammar: "ژوورەکان زۆربەیان das/die بەکاردێن: das Zimmer، die Küche.",
    words: [
      { de: "das Haus", ku: "ماڵ / خانوو" },
      { de: "die Wohnung", ku: "ئەپارتمان" },
      { de: "das Zimmer", ku: "ژوور" },
      { de: "die Küche", ku: "چێشتخانە" },
      { de: "das Bad", ku: "حەمام" },
      { de: "das Bett", ku: "جێگا / تەخت" },
      { de: "der Tisch", ku: "مێز" },
      { de: "der Stuhl", ku: "کورسی" },
      { de: "die Tür", ku: "دەرگا" },
      { de: "das Fenster", ku: "پەنجەرە" },
      { de: "der Schrank", ku: "دۆڵاب" },
      { de: "das Sofa", ku: "قەنەفە" },
      { de: "die Lampe", ku: "لامپە" },
      { de: "der Schlüssel", ku: "کلیل" },
    ]
  },
  { id: "kleidung", level: "A1", title: "جلوبەرگ", de: "Kleidung", icon: "👕",
    grammar: "بۆ پۆشین کرداری «tragen» یان «anziehen» بەکاردێت.",
    words: [
      { de: "die Hose", ku: "پانتۆڵ" },
      { de: "das Hemd", ku: "کراس / قەمیس" },
      { de: "die Jacke", ku: "چاکەت" },
      { de: "der Schuh", ku: "پێڵاو" },
      { de: "das Kleid", ku: "کراسی ژنانە" },
      { de: "der Rock", ku: "دامێن" },
      { de: "die Mütze", ku: "کڵاو" },
      { de: "der Mantel", ku: "پاڵتۆ" },
      { de: "die Socke", ku: "گۆرەوی" },
      { de: "der Pullover", ku: "پسوڵ / کازاکی" },
      { de: "der Gürtel", ku: "پشتێن" },
      { de: "die Brille", ku: "چاویلکە" },
    ]
  },
  { id: "tiere", level: "A1", title: "ئاژەڵەکان", de: "Tiere", icon: "🐾",
    grammar: "ناوی ئاژەڵەکان ڕەگەزی جیاوازیان هەیە: der Hund، die Katze، das Pferd.",
    words: [
      { de: "der Hund", ku: "سەگ" },
      { de: "die Katze", ku: "پشیلە" },
      { de: "der Vogel", ku: "باڵندە" },
      { de: "der Fisch", ku: "ماسی" },
      { de: "das Pferd", ku: "ئەسپ" },
      { de: "die Kuh", ku: "مانگا" },
      { de: "das Schaf", ku: "مەڕ" },
      { de: "das Huhn", ku: "مریشک" },
      { de: "der Löwe", ku: "شێر" },
      { de: "der Bär", ku: "ورچ" },
      { de: "die Maus", ku: "مشک" },
      { de: "das Schwein", ku: "بەراز" },
    ]
  },
  { id: "wetter", level: "A1", title: "کەش‌وهەوا و سروشت", de: "Wetter & Natur", icon: "☀️",
    grammar: "بۆ کەش‌وهەوا «es» بەکاردێت: Es regnet (باران دەبارێت).",
    words: [
      { de: "die Sonne", ku: "خۆر" },
      { de: "der Regen", ku: "باران" },
      { de: "der Schnee", ku: "بەفر" },
      { de: "der Wind", ku: "با" },
      { de: "die Wolke", ku: "هەور" },
      { de: "der Himmel", ku: "ئاسمان" },
      { de: "der Baum", ku: "درەخت" },
      { de: "die Blume", ku: "گوڵ" },
      { de: "das Feuer", ku: "ئاگر" },
      { de: "der Berg", ku: "شاخ" },
      { de: "der Fluss", ku: "ڕووبار" },
    ]
  },

  // ───────── A2 زیادکراو ─────────
  { id: "essen2", level: "A2", title: "خۆراک و خواردنەمەنی", de: "Lebensmittel", icon: "🍎",
    grammar: "بۆ بڕی نادیار ئارتیکڵ ناهێنرێت: «Ich kaufe Brot».",
    words: [
      { de: "die Banane", ku: "مۆز" },
      { de: "die Kartoffel", ku: "پەتاتە" },
      { de: "die Tomate", ku: "تەماتە" },
      { de: "der Reis", ku: "برنج" },
      { de: "die Nudeln", ku: "مەکەرۆنی" },
      { de: "der Zucker", ku: "شەکر" },
      { de: "das Salz", ku: "خوێ" },
      { de: "der Saft", ku: "شەربەت / ئاوی میوە" },
      { de: "das Gemüse", ku: "سەوزە" },
      { de: "die Butter", ku: "کەرە" },
      { de: "das Öl", ku: "ڕۆن" },
    ]
  },
  { id: "einkaufen", level: "A2", title: "بازاڕکردن", de: "Einkaufen", icon: "🛒",
    grammar: "«teuer» (گران) و «billig» (هەرزان) سیفەتن بۆ نرخ.",
    words: [
      { de: "das Geschäft", ku: "دوکان" },
      { de: "der Markt", ku: "بازاڕ" },
      { de: "der Supermarkt", ku: "سوپەرمارکێت" },
      { de: "das Geld", ku: "پارە" },
      { de: "der Preis", ku: "نرخ" },
      { de: "teuer", ku: "گران" },
      { de: "billig", ku: "هەرزان" },
      { de: "die Kasse", ku: "قاسە / سندوقی پارە" },
      { de: "die Tüte", ku: "کیسە" },
      { de: "das Angebot", ku: "ئەرز / داشکاندن" },
      { de: "der Kunde", ku: "کڕیار" },
      { de: "die Rechnung", ku: "پسوولە" },
      { de: "die Quittung", ku: "وەسڵ" },
      { de: "das Wechselgeld", ku: "پارەی گەڕاوە" },
    ]
  },
  { id: "stadt", level: "A2", title: "شار و شوێنەکان", de: "Stadt & Orte", icon: "🏙️",
    grammar: "بۆ «بۆ کوێ» جووڵە (Akkusativ)، بۆ «لە کوێ» شوێن (Dativ).",
    words: [
      { de: "die Stadt", ku: "شار" },
      { de: "das Dorf", ku: "گوند" },
      { de: "die Straße", ku: "شەقام" },
      { de: "der Platz", ku: "گۆڕەپان" },
      { de: "die Bank", ku: "بانک" },
      { de: "die Post", ku: "پۆستە" },
      { de: "die Schule", ku: "قوتابخانە" },
      { de: "die Universität", ku: "زانکۆ" },
      { de: "das Restaurant", ku: "چێشتخانە / ڕێستۆرانت" },
      { de: "die Kirche", ku: "کڵێسا" },
      { de: "das Kino", ku: "سینەما" },
    ]
  },
  { id: "verkehr", level: "A2", title: "هاتوچۆ و گواستنەوە", de: "Verkehr", icon: "🚌",
    grammar: "بۆ سواری گواستنەوە «mit + Dativ»: mit dem Bus (بە پاس).",
    words: [
      { de: "das Auto", ku: "ئۆتۆمبێل" },
      { de: "der Bus", ku: "پاس" },
      { de: "der Zug", ku: "شەمەندەفەر" },
      { de: "das Fahrrad", ku: "پایسکیل" },
      { de: "das Flugzeug", ku: "فڕۆکە" },
      { de: "das Schiff", ku: "کەشتی" },
      { de: "die U-Bahn", ku: "مێترۆ" },
      { de: "das Taxi", ku: "تاکسی" },
      { de: "der Weg", ku: "ڕێگا" },
      { de: "die Ampel", ku: "ترافیک لایت" },
    ]
  },
  { id: "wohnen2", level: "A2", title: "ژیان لە ماڵ", de: "Wohnen", icon: "🛋️",
    grammar: "«die Miete» (کرێ) و «der Vermieter» (خاوەن خانوو) لە ژیانی کرێدا گرنگن.",
    words: [
      { de: "die Miete", ku: "کرێ" },
      { de: "der Vermieter", ku: "خاوەن خانوو" },
      { de: "der Nachbar", ku: "دراوسێ" },
      { de: "der Balkon", ku: "بەلکۆن" },
      { de: "der Keller", ku: "ژێرزەمین" },
      { de: "der Garten", ku: "باخچە" },
      { de: "der Aufzug", ku: "ئاسانسۆر" },
      { de: "die Heizung", ku: "گەرمکەرەوە" },
      { de: "der Strom", ku: "کارەبا" },
      { de: "das Möbel", ku: "کەلوپەل" },
      { de: "der Teppich", ku: "فەرش" },
      { de: "der Spiegel", ku: "ئاوێنە" },
    ]
  },
  { id: "freizeit", level: "A2", title: "کاتی بەتاڵ و حەز", de: "Freizeit & Hobby", icon: "⚽",
    grammar: "«gern» لەگەڵ کردار حەزکردن دەگەیەنێت: Ich spiele gern.",
    words: [
      { de: "der Sport", ku: "وەرزش" },
      { de: "das Spiel", ku: "یاری" },
      { de: "die Musik", ku: "مۆسیقا" },
      { de: "der Film", ku: "فیلم" },
      { de: "das Buch", ku: "کتێب" },
      { de: "das Konzert", ku: "کۆنسێرت" },
      { de: "das Theater", ku: "شانۆ" },
      { de: "die Party", ku: "ئاهەنگ" },
      { de: "das Hobby", ku: "خولیا" },
      { de: "schwimmen", ku: "مەلەکردن" },
      { de: "tanzen", ku: "سەماکردن" },
      { de: "malen", ku: "وێنەکێشان" },
      { de: "singen", ku: "گۆرانیگوتن" },
      { de: "wandern", ku: "پیادەڕۆیی" },
    ]
  },
  { id: "gefuehle", level: "A2", title: "هەست و سیفەت", de: "Gefühle & Adjektive", icon: "🙂",
    grammar: "ئەم سیفەتانە لەگەڵ «sein» دێن: Ich bin müde (ماندووم).",
    words: [
      { de: "glücklich", ku: "بەختەوەر / دڵخۆش" },
      { de: "traurig", ku: "خەمبار" },
      { de: "müde", ku: "ماندوو" },
      { de: "hungrig", ku: "برسی" },
      { de: "durstig", ku: "تینوو" },
      { de: "wütend", ku: "تووڕە" },
      { de: "nervös", ku: "نیگەران / دڵەڕاوکێ" },
      { de: "ruhig", ku: "ئارام" },
      { de: "froh", ku: "شاد" },
      { de: "langweilig", ku: "بێزارکەر" },
      { de: "interessant", ku: "سەرنجڕاکێش" },
      { de: "wichtig", ku: "گرنگ" },
    ]
  },
  { id: "zeit2", level: "A2", title: "کات و کاتی دیاریکراو", de: "Zeit & Termine", icon: "⏰",
    grammar: "«gestern» (دوێنێ)، «heute» (ئەمڕۆ)، «morgen» (سبەینێ).",
    words: [
      { de: "später", ku: "دواتر" },
      { de: "die Woche", ku: "هەفتە" },
      { de: "der Monat", ku: "مانگ" },
      { de: "das Jahr", ku: "ساڵ" },
      { de: "pünktlich", ku: "لەسەرکات" },
    ]
  },

  // ───────── B1 زیادکراو ─────────
  { id: "beruf2", level: "B1", title: "کار و پیشە (فراوان)", de: "Arbeit & Beruf", icon: "💼",
    grammar: "«sich bewerben um» (داواکاری کردن بۆ) لە جیهانی کاردا زۆر بەکاردێت.",
    words: [
      { de: "der Arbeitgeber", ku: "کارفەرما" },
      { de: "der Arbeitnehmer", ku: "کرێکار / فەرمانبەر" },
      { de: "der Kollege", ku: "هاوکار" },
      { de: "das Vorstellungsgespräch", ku: "چاوپێکەوتنی کار" },
      { de: "die Kündigung", ku: "دەستلێبەرداری" },
      { de: "die Ausbildung", ku: "پەروەردە / ڕاهێنان" },
      { de: "das Praktikum", ku: "خولی پراکتیک" },
      { de: "die Karriere", ku: "پێشکەوتنی پیشەیی" },
    ]
  },
  { id: "bildung", level: "B1", title: "خوێندن و پەروەردە", de: "Bildung & Studium", icon: "🎓",
    grammar: "«studieren» بۆ زانکۆ، «lernen» بۆ فێربوونی گشتی.",
    words: [
      { de: "das Studium", ku: "خوێندنی زانکۆ" },
      { de: "die Prüfung", ku: "تاقیکردنەوە" },
      { de: "die Note", ku: "نمرە" },
      { de: "das Zeugnis", ku: "بڕوانامە / کارنامە" },
      { de: "der Professor", ku: "پرۆفیسۆر" },
      { de: "die Vorlesung", ku: "وانە (زانکۆ)" },
      { de: "das Seminar", ku: "سیمینار" },
      { de: "die Hausaufgabe", ku: "ئەرکی ماڵەوە" },
      { de: "das Fach", ku: "بابەت / لق" },
      { de: "das Wissen", ku: "زانیاری / زانست" },
      { de: "die Bibliothek", ku: "کتێبخانە" },
      { de: "der Abschluss", ku: "بڕوانامەی تەواوکردن" },
      { de: "die Forschung", ku: "توێژینەوە" },
    ]
  },
  { id: "gesundheit2", level: "B1", title: "تەندروستی (فراوان)", de: "Gesundheit", icon: "🩺",
    grammar: "«sich fühlen» (هەستکردن): Ich fühle mich besser.",
    words: [
      { de: "die Krankheit", ku: "نەخۆشی" },
      { de: "das Symptom", ku: "نیشانە" },
      { de: "die Behandlung", ku: "چارەسەری" },
      { de: "die Untersuchung", ku: "پشکنین" },
      { de: "die Operation", ku: "نەشتەرگەری" },
      { de: "das Rezept", ku: "ڕەچەتە" },
      { de: "die Versicherung", ku: "بیمە" },
      { de: "der Notfall", ku: "کاتی نائاسایی" },
      { de: "die Gesundheit", ku: "تەندروستی" },
    ]
  },
  { id: "technik", level: "B1", title: "تەکنەلۆژیا و میدیا", de: "Medien & Technik", icon: "💻",
    grammar: "زۆربەی وشە تەکنیکییەکان نێودەوڵەتین: das Internet، die App.",
    words: [
      { de: "der Computer", ku: "کۆمپیوتەر" },
      { de: "das Internet", ku: "ئینتەرنێت" },
      { de: "das Handy", ku: "مۆبایل" },
      { de: "die App", ku: "ئەپ" },
      { de: "die E-Mail", ku: "ئیمەیل" },
      { de: "die Webseite", ku: "ماڵپەڕ" },
      { de: "das Programm", ku: "پڕۆگرام" },
      { de: "die Datei", ku: "فایل" },
      { de: "der Bildschirm", ku: "شاشە" },
      { de: "die Tastatur", ku: "تەختەکلیل" },
      { de: "das Passwort", ku: "وشەی نهێنی" },
      { de: "das Netzwerk", ku: "تۆڕ" },
      { de: "der Drucker", ku: "پرینتەر" },
      { de: "speichern", ku: "هەڵگرتن / پاشەکەوتکردن" },
    ]
  },
  { id: "umwelt2", level: "B1", title: "ژینگە", de: "Umwelt & Natur", icon: "🌍",
    grammar: "«schützen» (پاراستن) لەگەڵ Akkusativ دێت: die Umwelt schützen.",
    words: [
      { de: "die Natur", ku: "سروشت" },
      { de: "das Recycling", ku: "پیتاندنەوە / ڕیسایکڵ" },
      { de: "die Verschmutzung", ku: "پیسبوون" },
      { de: "das Klima", ku: "کلیما / کەش‌وهەوا" },
      { de: "der Wald", ku: "دارستان" },
      { de: "die Pflanze", ku: "ڕووەک" },
      { de: "erneuerbar", ku: "نوێبووەوە" },
    ]
  },
  { id: "charakter", level: "B1", title: "هەست و کەسایەتی", de: "Gefühle & Charakter", icon: "💭",
    grammar: "ناوی هەست زۆرجار مێن (die): die Freude، die Angst.",
    words: [
      { de: "die Freude", ku: "خۆشی" },
      { de: "die Angst", ku: "ترس" },
      { de: "die Wut", ku: "تووڕەیی" },
      { de: "die Hoffnung", ku: "هیوا" },
      { de: "der Stress", ku: "سترێس / فشار" },
      { de: "die Liebe", ku: "خۆشەویستی" },
      { de: "ehrlich", ku: "ڕاستگۆ" },
      { de: "freundlich", ku: "بەسۆز" },
      { de: "geduldig", ku: "ئارامگر" },
      { de: "fleißig", ku: "کۆششکار" },
      { de: "faul", ku: "تەمبەڵ" },
      { de: "höflich", ku: "بەڕێز / ڕێزدار" },
      { de: "selbstbewusst", ku: "متمانەبەخۆ" },
      { de: "schüchtern", ku: "شەرمن" },
    ]
  },
  { id: "politik", level: "B1", title: "کۆمەڵگا و سیاسەت", de: "Gesellschaft & Politik", icon: "🏛️",
    grammar: "«die Wahl» (هەڵبژاردن) و «das Recht» (ماف) لە بابەتی کۆمەڵایەتیدا گرنگن.",
    words: [
      { de: "die Politik", ku: "سیاسەت" },
      { de: "die Regierung", ku: "حکومەت" },
      { de: "das Gesetz", ku: "یاسا" },
      { de: "die Wahl", ku: "هەڵبژاردن" },
      { de: "das Recht", ku: "ماف" },
      { de: "die Freiheit", ku: "ئازادی" },
      { de: "die Meinung", ku: "بۆچوون" },
      { de: "die Demokratie", ku: "دیموکراسی" },
      { de: "der Bürger", ku: "هاووڵاتی" },
      { de: "die Sicherheit", ku: "ئاسایش" },
    ]
  },
  { id: "kommunikation", level: "B1", title: "پەیوەندی و گفتوگۆ", de: "Kommunikation", icon: "🗣️",
    grammar: "«die Lösung» (چارەسەر) ئەنجامی «das Problem»ـە.",
    words: [
      { de: "das Gespräch", ku: "گفتوگۆ" },
      { de: "die Diskussion", ku: "گفتوگۆی قووڵ" },
      { de: "die Nachricht", ku: "پەیام / هەواڵ" },
      { de: "die Information", ku: "زانیاری" },
      { de: "die Frage", ku: "پرسیار" },
      { de: "die Antwort", ku: "وەڵام" },
      { de: "die Erklärung", ku: "ڕوونکردنەوە" },
      { de: "der Vorschlag", ku: "پێشنیار" },
      { de: "das Argument", ku: "بەڵگە" },
      { de: "der Grund", ku: "هۆکار" },
      { de: "das Problem", ku: "کێشە" },
    ]
  },

  // ───────── B2 زیادکراو ─────────
  { id: "wirtschaft2", level: "B2", title: "ئابووری (فراوان)", de: "Wirtschaft", icon: "📈",
    grammar: "«das Angebot» (پێشکەش) و «die Nachfrage» (داواکاری) بناغەی بازاڕن.",
    words: [
      { de: "der Gewinn", ku: "قازانج" },
      { de: "der Verlust", ku: "زیان" },
      { de: "der Wettbewerb", ku: "ڕکابەری" },
      { de: "die Nachfrage", ku: "داواکاری" },
      { de: "die Inflation", ku: "هەڵاوسان" },
      { de: "das Wachstum", ku: "گەشە" },
      { de: "der Umsatz", ku: "گەڕانەوەی پارە / مامەڵە" },
      { de: "die Aktie", ku: "پشک" },
      { de: "der Handel", ku: "بازرگانی" },
    ]
  },
  { id: "wissenschaft", level: "B2", title: "زانست و توێژینەوە", de: "Wissenschaft", icon: "🔬",
    grammar: "زۆربەی ئەم وشانە لە دەقی ئەکادیمیدا دەردەکەون.",
    words: [
      { de: "die Wissenschaft", ku: "زانست" },
      { de: "das Experiment", ku: "تاقیکردنەوە / ئەزموون" },
      { de: "die Theorie", ku: "تیۆری" },
      { de: "die Hypothese", ku: "گریمانە" },
      { de: "das Ergebnis", ku: "ئەنجام" },
      { de: "die Analyse", ku: "شیکاری" },
      { de: "die Entwicklung", ku: "گەشەپێدان" },
      { de: "die Entdeckung", ku: "دۆزینەوە" },
      { de: "der Beweis", ku: "بەڵگە / سەلماندن" },
      { de: "die Methode", ku: "میتۆد / ڕێباز" },
      { de: "die Studie", ku: "لێکۆڵینەوە" },
      { de: "die Technologie", ku: "تەکنەلۆژیا" },
      { de: "die Innovation", ku: "داهێنان" },
    ]
  },
  { id: "recht", level: "B2", title: "سیاسەت و یاسا", de: "Politik & Recht", icon: "⚖️",
    grammar: "«das Gericht» (دادگا)، «das Urteil» (بڕیاری دادگا).",
    words: [
      { de: "die Verfassung", ku: "دەستوور" },
      { de: "das Parlament", ku: "پەرلەمان" },
      { de: "die Opposition", ku: "ئۆپۆزیسیۆن" },
      { de: "der Minister", ku: "وەزیر" },
      { de: "das Urteil", ku: "بڕیاری دادگا" },
      { de: "der Anwalt", ku: "پارێزەر" },
      { de: "der Richter", ku: "دادوەر" },
      { de: "das Gericht", ku: "دادگا" },
      { de: "die Gerechtigkeit", ku: "دادپەروەری" },
      { de: "die Pflicht", ku: "ئەرک" },
      { de: "die Maßnahme", ku: "ڕێوشوێن" },
      { de: "die Reform", ku: "چاکسازی" },
    ]
  },
  { id: "kultur", level: "B2", title: "کۆمەڵگا و کلتوور", de: "Gesellschaft & Kultur", icon: "🎭",
    grammar: "«die Integration» (تێکەڵبوون) لە بابەتی کۆچ‌بەری گرنگە.",
    words: [
      { de: "die Kultur", ku: "کلتوور / کەلتوور" },
      { de: "die Tradition", ku: "نەریت" },
      { de: "die Integration", ku: "تێکەڵبوون" },
      { de: "die Migration", ku: "کۆچ" },
      { de: "die Vielfalt", ku: "فرەڕەنگی" },
      { de: "die Identität", ku: "ناسنامە" },
      { de: "die Religion", ku: "ئایین" },
      { de: "die Generation", ku: "نەوە" },
      { de: "die Gleichberechtigung", ku: "یەکسانی ماف" },
      { de: "das Vorurteil", ku: "پێشداوەری" },
      { de: "die Diskriminierung", ku: "جیاکاری" },
      { de: "der Wandel", ku: "گۆڕان" },
      { de: "die Mehrheit", ku: "زۆرینە" },
      { de: "die Minderheit", ku: "کەمینە" },
    ]
  },
  { id: "medien2", level: "B2", title: "میدیا و ڕاگەیاندن", de: "Medien & Kommunikation", icon: "📰",
    grammar: "«die Meinungsfreiheit» (ئازادی ڕادەربڕین) مافێکی بنەڕەتییە.",
    words: [
      { de: "die Medien", ku: "میدیا" },
      { de: "die Presse", ku: "ڕۆژنامەگەری" },
      { de: "die Werbung", ku: "ڕیکلام" },
      { de: "die Öffentlichkeit", ku: "گشت / ڕای گشتی" },
      { de: "der Einfluss", ku: "کاریگەری" },
      { de: "die Meinungsfreiheit", ku: "ئازادی ڕادەربڕین" },
      { de: "die Zensur", ku: "سانسۆر" },
      { de: "das Interview", ku: "چاوپێکەوتن" },
      { de: "der Bericht", ku: "ڕاپۆرت" },
      { de: "die Quelle", ku: "سەرچاوە" },
      { de: "die Schlagzeile", ku: "سەردێڕ" },
    ]
  },
  { id: "abstrakt", level: "B2", title: "چەمکە ئامرازییەکان", de: "Abstrakte Begriffe", icon: "🧩",
    grammar: "ئەم وشانە لە دەربڕینی ئەکادیمی و فەرمیدا کلیلن.",
    words: [
      { de: "die Bedeutung", ku: "واتا / گرنگی" },
      { de: "der Zusammenhang", ku: "پەیوەندی / بەستن" },
      { de: "die Voraussetzung", ku: "پێشمەرج" },
      { de: "die Folge", ku: "ئەنجام / شوێنکەوتە" },
      { de: "die Ursache", ku: "هۆکار" },
      { de: "der Zweck", ku: "مەبەست" },
      { de: "die Absicht", ku: "نیاز" },
      { de: "die Tatsache", ku: "ڕاستی" },
      { de: "der Aspekt", ku: "لایەن" },
      { de: "der Bereich", ku: "بوار" },
      { de: "die Wirkung", ku: "کاریگەری" },
      { de: "der Vorteil", ku: "سوود" },
      { de: "der Nachteil", ku: "زیان / لاوازی" },
      { de: "der Begriff", ku: "چەمک" },
    ]
  },
  { id: "meinung", level: "B2", title: "بۆچوون و بەڵگەهێنانەوە", de: "Meinung & Argumentation", icon: "💬",
    grammar: "بۆ بەڵگەهێنانەوە: «meiner Meinung nach» (بەلای منەوە).",
    words: [
      { de: "die Behauptung", ku: "بانگەشە" },
      { de: "die Begründung", ku: "هۆکارهێنانەوە" },
      { de: "der Standpunkt", ku: "هەڵوێست" },
      { de: "die Schlussfolgerung", ku: "دەرئەنجام" },
      { de: "das Gegenargument", ku: "بەڵگەی پێچەوانە" },
      { de: "die Kritik", ku: "ڕەخنە" },
      { de: "die Zustimmung", ku: "ڕەزامەندی" },
      { de: "die Ablehnung", ku: "ڕەتکردنەوە" },
      { de: "der Zweifel", ku: "گومان" },
      { de: "die Überzeugung", ku: "بڕوا / قەناعەت" },
      { de: "die Einschätzung", ku: "هەڵسەنگاندن" },
      { de: "die Stellungnahme", ku: "ڕاگەیاندنی هەڵوێست" },
    ]
  },
  { id: "beziehung", level: "B2", title: "هەست و پەیوەندییەکان", de: "Emotionen & Beziehungen", icon: "❤️",
    grammar: "زۆربەی ناوی هەستەکان مێن و لەگەڵ «haben/empfinden» دێن.",
    words: [
      { de: "die Beziehung", ku: "پەیوەندی" },
      { de: "das Vertrauen", ku: "متمانە" },
      { de: "die Enttäuschung", ku: "بێزاری / نائومێدی" },
      { de: "die Eifersucht", ku: "ئیرەیی" },
      { de: "die Zuneigung", ku: "سۆز" },
      { de: "der Respekt", ku: "ڕێز" },
      { de: "die Empathie", ku: "هاوسۆزی" },
      { de: "die Geduld", ku: "ئارامگری / سەبر" },
      { de: "die Leidenschaft", ku: "ئارەزوو / پەرۆشی" },
      { de: "die Sehnsucht", ku: "تامەزرۆیی" },
      { de: "die Gelassenheit", ku: "ئارامی دەروونی" },
      { de: "die Dankbarkeit", ku: "سوپاسگوزاری" },
    ]
  },
  { id: "reisen_b1", level: "B1", title: "گەشت و پشوو (فراوان)", de: "Reisen & Urlaub", icon: "✈️",
    grammar: "«der Aufenthalt» (مانەوە) و «die Unterkunft» (شوێنی مانەوە) لە گەشتدا بەکاردێن.",
    words: [
      { de: "der Urlaub", ku: "پشوو" },
      { de: "die Unterkunft", ku: "شوێنی مانەوە" },
      { de: "die Buchung", ku: "حیجزکردن" },
      { de: "der Flug", ku: "فڕین / فلایت" },
      { de: "der Pass", ku: "پاسپۆرت" },
      { de: "das Visum", ku: "ڤیزا" },
      { de: "die Sehenswürdigkeit", ku: "شوێنی گەشتیاری" },
      { de: "die Grenze", ku: "سنوور" },
      { de: "der Tourist", ku: "گەشتیار" },
      { de: "der Aufenthalt", ku: "ماوەی مانەوە" },
    ]
  },
  { id: "haeufig_b1", level: "B1", title: "کات و دووبارەبوونەوە", de: "Zeit & Häufigkeit", icon: "🔁",
    grammar: "ئەم هۆکارانە لە جێی ٢ یان دوای کردار دادەنرێن.",
    words: [
      { de: "plötzlich", ku: "لەناکاو" },
      { de: "sofort", ku: "دەستبەجێ" },
      { de: "manchmal", ku: "هەندێجار" },
      { de: "selten", ku: "بەدەگمەن" },
      { de: "oft", ku: "زۆرجار" },
      { de: "immer", ku: "هەمیشە" },
      { de: "nie", ku: "هەرگیز" },
      { de: "neulich", ku: "ئەم دواییانە" },
      { de: "regelmäßig", ku: "بەردەوام / ڕێکوپێک" },
      { de: "gleichzeitig", ku: "هاوکات" },
      { de: "schließlich", ku: "لە کۆتاییدا" },
      { de: "inzwischen", ku: "لەو ماوەیەدا" },
    ]
  },
  { id: "psyche_b2", level: "B2", title: "تەندروستی دەروونی", de: "Gesundheit & Psyche", icon: "🧠",
    grammar: "«das Wohlbefinden» (باشی هەستکردن) ئامانجی تەندروستی دەروونییە.",
    words: [
      { de: "die Psyche", ku: "دەروون" },
      { de: "die Belastung", ku: "بار / فشار" },
      { de: "die Erholung", ku: "حەوانەوە" },
      { de: "die Therapie", ku: "چارەسەری دەروونی" },
      { de: "die Sucht", ku: "ئالودەیی" },
      { de: "das Wohlbefinden", ku: "باشی و ئاسوودەیی" },
      { de: "die Diagnose", ku: "دەستنیشانکردنی نەخۆشی" },
      { de: "die Prävention", ku: "ڕێگریکردن" },
      { de: "die Ernährung", ku: "خۆراک / تەغزیە" },
      { de: "die Bewegung", ku: "جووڵە / وەرزش" },
      { de: "die Vorsorge", ku: "وریایی پێشوەختە" },
    ]
  },
  { id: "bildung_b2", level: "B2", title: "شارەزایی و پیشە", de: "Bildung & Beruf", icon: "📚",
    grammar: "«die Weiterbildung» (پەرەپێدانی شارەزایی) لە بازاڕی کاردا بەنرخە.",
    words: [
      { de: "die Qualifikation", ku: "شایستەیی / لێهاتوویی" },
      { de: "die Kompetenz", ku: "توانا / شارەزایی" },
      { de: "die Weiterbildung", ku: "خوێندنی بەردەوام" },
      { de: "die Leistung", ku: "کارایی / دەستکەوت" },
      { de: "der Fortschritt", ku: "پێشکەوتن" },
      { de: "die Herausforderung", ku: "ئاستەنگ / تەحەدا" },
      { de: "die Selbstständigkeit", ku: "سەربەخۆیی" },
      { de: "das Fachwissen", ku: "زانیاری پسپۆڕی" },
      { de: "die Zusammenarbeit", ku: "هاوکاری" },
    ]
  },
  { id: "verben_b2", level: "B2", title: "کردارە فەرمییەکان", de: "Formelle Verben", icon: "✒️",
    grammar: "ئەم کردارانە لە دەقی فەرمی و ئەکادیمیدا زۆر بەکاردێن.",
    words: [
      { de: "berücksichtigen", ku: "لەبەرچاوگرتن" },
      { de: "ermöglichen", ku: "ئەگەردانان / دەستەبەرکردن" },
      { de: "verursachen", ku: "هۆکاربوون" },
      { de: "bewältigen", ku: "زاڵبوون بەسەر" },
      { de: "beeinflussen", ku: "کاریگەریکردن" },
      { de: "voraussetzen", ku: "پێشمەرجدانان" },
      { de: "gewährleisten", ku: "مسۆگەرکردن" },
      { de: "umsetzen", ku: "جێبەجێکردن" },
      { de: "feststellen", ku: "دەستنیشانکردن" },
      { de: "zusammenfassen", ku: "کورتکردنەوە" },
    ]
  },
  { id: "alltag_a2", level: "A2", title: "ڕۆژی ئاسایی", de: "Alltag", icon: "🌅",
    grammar: "بۆ کاروباری ڕۆژانە زۆرجار کرداری لێکدراو بەکاردێت: aufwachen, aufstehen.",
    words: [ { de: "der Alltag", ku: "ڕۆژی ئاسایی" }, { de: "aufwachen", ku: "بەئاگاهاتن / خەبەربوونەوە" }, { de: "das Frühstück", ku: "نانی بەیانی" }, { de: "das Mittagessen", ku: "نانی نیوەڕۆ" }, { de: "das Abendessen", ku: "نانی ئێوارە" }, { de: "die Pause", ku: "پشوو / وچان" }, { de: "der Spaziergang", ku: "گەشتی پیادە" }, { de: "das Wochenende", ku: "کۆتایی هەفتە" }, { de: "der Feiertag", ku: "ڕۆژی پشوو / جەژن" }, { de: "die Verabredung", ku: "ژووان / بەڵێن" }, { de: "duschen", ku: "خۆشتن (دووش)" }, { de: "einschlafen", ku: "خەوتن / نوستن" } ] },
  { id: "kueche_a2", level: "A2", title: "ئامێری چێشتخانە", de: "Küchengeräte", icon: "🍴",
    grammar: "ئەم کەرەستانە لە سەر مێز و چێشتخانە بەکاردێن.",
    words: [ { de: "der Teller", ku: "قاپ" }, { de: "das Glas", ku: "پەرداخ" }, { de: "die Gabel", ku: "چەنگاڵ" }, { de: "das Messer", ku: "چەقۆ" }, { de: "der Löffel", ku: "کەوچک" }, { de: "die Tasse", ku: "فنجان" }, { de: "der Topf", ku: "مەنجەڵ / قازان" }, { de: "die Pfanne", ku: "تاوە" }, { de: "der Kühlschrank", ku: "بەفرگر / سەلاجە" }, { de: "der Herd", ku: "ئاگردان / فڕن" } ] },
  { id: "stadt2_a2", level: "A2", title: "خزمەتگوزاری شار", de: "In der Stadt", icon: "🏬",
    grammar: "ناوی شوێنە گشتییەکان بەزۆری مێ یان بێلایەنن.",
    words: [ { de: "die Bäckerei", ku: "نانەواخانە" }, { de: "die Metzgerei", ku: "قەسابخانە" }, { de: "das Café", ku: "قاوەخانە" }, { de: "das Rathaus", ku: "شارەوانی" }, { de: "der Park", ku: "پارک" }, { de: "das Schwimmbad", ku: "مەلەوانگە" }, { de: "das Stadion", ku: "یاریگا" }, { de: "die Tankstelle", ku: "بۆریخانە / پەمپی سووتەمەنی" }, { de: "der Friseur", ku: "ئەسپێرکار / قوللاوچی" }, { de: "die Brücke", ku: "پرد" } ] },
  { id: "service_b1", level: "B1", title: "کاروباری ئیداری", de: "Behörden & Service", icon: "📋",
    grammar: "«das Formular ausfüllen» (پڕکردنەوەی فۆرم) لە کاری ئیداریدا گرنگە.",
    words: [ { de: "der Antrag", ku: "داواکاری (فۆرم)" }, { de: "das Formular", ku: "فۆرم" }, { de: "die Unterschrift", ku: "واژوو" }, { de: "der Ausweis", ku: "ناسنامە" }, { de: "die Anmeldung", ku: "تۆمارکردن" }, { de: "die Genehmigung", ku: "مۆڵەت" }, { de: "die Gebühr", ku: "کرێ / باج" }, { de: "der Beamte", ku: "فەرمانبەر" }, { de: "die Behörde", ku: "دەزگای حکومی" }, { de: "der Stempel", ku: "مۆر" } ] },
  { id: "gefuehle_b1", level: "B1", title: "هەستی ناوەند", de: "Gefühle (B1)", icon: "😌",
    grammar: "ئەم سیفەتانە لەگەڵ «sein» یان «sich fühlen» دێن.",
    words: [ { de: "zufrieden", ku: "ڕازی" }, { de: "enttäuscht", ku: "نائومێد" }, { de: "stolz", ku: "شانازیمەند" }, { de: "aufgeregt", ku: "هەیجان" }, { de: "neugierig", ku: "زانینخواز / پرسیارچی" }, { de: "eifersüchtig", ku: "ئیرەدار" }, { de: "erschöpft", ku: "ماندووی تەواو" }, { de: "gelangweilt", ku: "بێزاربوو" } ] },
  { id: "denken_b2", level: "B2", title: "بیر و هۆشیاری", de: "Denken & Bewusstsein", icon: "💡",
    grammar: "ئەم چەمکانە لە دەقی فەلسەفی و ئەکادیمیدا دەردەکەون.",
    words: [ { de: "die Vernunft", ku: "هزر / عەقڵ" }, { de: "das Bewusstsein", ku: "هۆشیاری" }, { de: "die Wahrnehmung", ku: "هەستپێکردن / تێگەیشتن" }, { de: "die Erkenntnis", ku: "زانین / تێگەیشتن" }, { de: "die Annahme", ku: "گریمانە / پێشبینی" }, { de: "der Widerspruch", ku: "دژایەتی / پێچەوانە" }, { de: "die Tendenz", ku: "ئاراستە / مەیل" }, { de: "das Ausmaß", ku: "ڕادە / پانتایی" } ] },
];

// ── بانکی وشە بۆ کارت / Flashcard word bank ───────────────────────
// هەر وشە: de=ئەڵمانی، ku=سۆرانی، ex=نموونە (ئەڵمانی)، exku=وەرگێڕانی نموونە
const FLASHCARDS = {
  A1: [
    { de: "Hallo", ku: "سڵاو", ex: "Hallo, wie geht es dir?", exku: "سڵاو، چۆنیت؟" },
    { de: "Danke", ku: "سوپاس", ex: "Danke für deine Hilfe.", exku: "سوپاس بۆ یارمەتیت." },
    { de: "Bitte", ku: "تکایە", ex: "Bitte komm herein.", exku: "تکایە وەرە ژوورەوە." },
    { de: "Ja", ku: "بەڵێ", ex: "Ja, das ist richtig.", exku: "بەڵێ، ئەوە ڕاستە." },
    { de: "Nein", ku: "نەخێر", ex: "Nein, danke.", exku: "نەخێر، سوپاس." },
    { de: "der Name", ku: "ناو", ex: "Mein Name ist Mohsin.", exku: "ناوم محسنە." },
    { de: "der Tag", ku: "ڕۆژ", ex: "Heute ist ein schöner Tag.", exku: "ئەمڕۆ ڕۆژێکی جوانە." },
    { de: "die Nacht", ku: "شەو", ex: "Die Nacht ist dunkel.", exku: "شەو تاریکە." },
    { de: "das Jahr", ku: "ساڵ", ex: "Ein Jahr hat zwölf Monate.", exku: "ساڵێک دوازدە مانگی هەیە." },
    { de: "die Woche", ku: "هەفتە", ex: "Die Woche hat sieben Tage.", exku: "هەفتە حەوت ڕۆژی هەیە." },
    { de: "die Mutter", ku: "دایک", ex: "Meine Mutter kocht gut.", exku: "دایکم باش خواردن لێدەنێ." },
    { de: "der Vater", ku: "باوک", ex: "Mein Vater arbeitet viel.", exku: "باوکم زۆر کار دەکات." },
    { de: "der Bruder", ku: "برا", ex: "Ich habe einen Bruder.", exku: "برایەکم هەیە." },
    { de: "die Schwester", ku: "خوشک", ex: "Meine Schwester ist klein.", exku: "خوشکم بچووکە." },
    { de: "das Kind", ku: "منداڵ", ex: "Das Kind spielt im Garten.", exku: "منداڵەکە لە باخچەدا یاری دەکات." },
    { de: "der Freund", ku: "هاوڕێ", ex: "Er ist mein bester Freund.", exku: "ئەو باشترین هاوڕێمە." },
    { de: "die Frau", ku: "ژن / خانم", ex: "Die Frau liest ein Buch.", exku: "ژنەکە کتێبێک دەخوێنێتەوە." },
    { de: "der Mann", ku: "پیاو", ex: "Der Mann geht zur Arbeit.", exku: "پیاوەکە دەچێتە سەر کار." },
    { de: "das Baby", ku: "کۆرپە", ex: "Das Baby schläft.", exku: "کۆرپەکە خەوتووە." },
    { de: "die Familie", ku: "خێزان", ex: "Meine Familie ist groß.", exku: "خێزانەکەم گەورەیە." },
    { de: "das Brot", ku: "نان", ex: "Ich esse Brot zum Frühstück.", exku: "نان دەخۆم بۆ نانی بەیانی." },
    { de: "das Wasser", ku: "ئاو", ex: "Ich trinke viel Wasser.", exku: "زۆر ئاو دەخۆمەوە." },
    { de: "der Kaffee", ku: "قاوە", ex: "Möchtest du einen Kaffee?", exku: "قاوەیەکت دەوێت؟" },
    { de: "die Milch", ku: "شیر", ex: "Die Milch ist kalt.", exku: "شیرەکە ساردە." },
    { de: "der Apfel", ku: "سێو", ex: "Der Apfel ist rot.", exku: "سێوەکە سوورە." },
    { de: "das Fleisch", ku: "گۆشت", ex: "Ich esse kein Fleisch.", exku: "گۆشت ناخۆم." },
    { de: "das Gemüse", ku: "سەوزە", ex: "Gemüse ist gesund.", exku: "سەوزە بۆ تەندروستی باشە." },
    { de: "der Reis", ku: "برنج", ex: "Wir essen Reis.", exku: "برنج دەخۆین." },
    { de: "das Ei", ku: "هێلکە", ex: "Ich koche ein Ei.", exku: "هێلکەیەک دەکوڵێنم." },
    { de: "der Zucker", ku: "شەکر", ex: "Kein Zucker, bitte.", exku: "بێ شەکر، تکایە." },
    { de: "der Kopf", ku: "سەر", ex: "Mein Kopf tut weh.", exku: "سەرم دێشێت." },
    { de: "die Hand", ku: "دەست", ex: "Wasch deine Hände.", exku: "دەستەکانت بشۆ." },
    { de: "das Auge", ku: "چاو", ex: "Ihre Augen sind blau.", exku: "چاوەکانی شینن." },
    { de: "der Fuß", ku: "پێ", ex: "Mein Fuß ist müde.", exku: "پێم ماندووە." },
    { de: "das Herz", ku: "دڵ", ex: "Mein Herz schlägt schnell.", exku: "دڵم خێرا لێدەدات." },
    { de: "das Haar", ku: "مووی سەر", ex: "Sie hat lange Haare.", exku: "مووی درێژی هەیە." },
    { de: "der Mund", ku: "دەم", ex: "Mach den Mund auf.", exku: "دەمت بکەرەوە." },
    { de: "das Ohr", ku: "گوێ", ex: "Ich höre mit den Ohren.", exku: "بە گوێ دەبیستم." },
    { de: "die Nase", ku: "لووت", ex: "Seine Nase ist kalt.", exku: "لووتی ساردە." },
    { de: "der Zahn", ku: "ددان", ex: "Mein Zahn tut weh.", exku: "ددانم دێشێت." },
    { de: "das Haus", ku: "ماڵ / خانوو", ex: "Das Haus ist groß.", exku: "خانووەکە گەورەیە." },
    { de: "die Tür", ku: "دەرگا", ex: "Mach die Tür zu.", exku: "دەرگاکە دابخە." },
    { de: "das Fenster", ku: "پەنجەرە", ex: "Öffne das Fenster.", exku: "پەنجەرەکە بکەرەوە." },
    { de: "der Tisch", ku: "مێز", ex: "Das Buch liegt auf dem Tisch.", exku: "کتێبەکە لەسەر مێزەکەیە." },
    { de: "der Stuhl", ku: "کورسی", ex: "Setz dich auf den Stuhl.", exku: "لەسەر کورسییەکە دانیشە." },
    { de: "das Bett", ku: "جێگا / نوێن", ex: "Ich gehe ins Bett.", exku: "دەچمە جێگاوە." },
    { de: "die Küche", ku: "چێشتخانە", ex: "Die Küche ist sauber.", exku: "چێشتخانەکە پاکە." },
    { de: "das Zimmer", ku: "ژوور", ex: "Mein Zimmer ist klein.", exku: "ژوورەکەم بچووکە." },
    { de: "der Schlüssel", ku: "کلیل", ex: "Wo ist der Schlüssel?", exku: "کلیلەکە لەکوێیە؟" },
    { de: "die Lampe", ku: "چرا / لامپە", ex: "Die Lampe ist an.", exku: "چراکە داگیرساوە." },
    { de: "sein", ku: "بوون", ex: "Ich bin müde.", exku: "ماندووم." },
    { de: "haben", ku: "هەبوون", ex: "Ich habe Zeit.", exku: "کاتم هەیە." },
    { de: "gehen", ku: "ڕۆیشتن", ex: "Ich gehe nach Hause.", exku: "دەچمە ماڵەوە." },
    { de: "kommen", ku: "هاتن", ex: "Komm her!", exku: "وەرە ئێرە!" },
    { de: "essen", ku: "خواردن", ex: "Wir essen zusammen.", exku: "پێکەوە دەخۆین." },
    { de: "trinken", ku: "خواردنەوە", ex: "Ich trinke Tee.", exku: "چا دەخۆمەوە." },
    { de: "sehen", ku: "بینین", ex: "Ich sehe dich.", exku: "دەتبینم." },
    { de: "sprechen", ku: "قسەکردن", ex: "Sprichst du Deutsch?", exku: "ئەڵمانی قسە دەکەیت؟" },
    { de: "lesen", ku: "خوێندنەوە", ex: "Ich lese ein Buch.", exku: "کتێبێک دەخوێنمەوە." },
    { de: "schreiben", ku: "نووسین", ex: "Sie schreibt einen Brief.", exku: "نامەیەک دەنووسێت." },
    { de: "machen", ku: "کردن", ex: "Was machst du?", exku: "چی دەکەیت؟" },
    { de: "arbeiten", ku: "کارکردن", ex: "Ich arbeite im Büro.", exku: "لە نووسینگەدا کار دەکەم." },
    { de: "lernen", ku: "فێربوون", ex: "Ich lerne Deutsch.", exku: "ئەڵمانی فێردەبم." },
    { de: "spielen", ku: "یاریکردن", ex: "Die Kinder spielen.", exku: "منداڵەکان یاری دەکەن." },
    { de: "schlafen", ku: "خەوتن", ex: "Ich schlafe acht Stunden.", exku: "هەشت کاتژمێر دەخەوم." },
    { de: "wohnen", ku: "نیشتەجێبوون", ex: "Ich wohne in Bochum.", exku: "لە بۆخوم نیشتەجێم." },
    { de: "kaufen", ku: "کڕین", ex: "Ich kaufe Brot.", exku: "نان دەکڕم." },
    { de: "fahren", ku: "ڕۆیشتن / لێخوڕین", ex: "Ich fahre mit dem Bus.", exku: "بە پاس دەڕۆم." },
    { de: "lieben", ku: "خۆشویستن", ex: "Ich liebe meine Familie.", exku: "خێزانەکەم خۆش دەوێت." },
    { de: "verstehen", ku: "تێگەیشتن", ex: "Ich verstehe nicht.", exku: "تێناگەم." },
    { de: "groß", ku: "گەورە", ex: "Das Haus ist groß.", exku: "خانووەکە گەورەیە." },
    { de: "klein", ku: "بچووک", ex: "Die Katze ist klein.", exku: "پشیلەکە بچووکە." },
    { de: "gut", ku: "باش", ex: "Das Essen ist gut.", exku: "خواردنەکە باشە." },
    { de: "schlecht", ku: "خراپ", ex: "Das Wetter ist schlecht.", exku: "کەش‌وهەوا خراپە." },
    { de: "schön", ku: "جوان", ex: "Der Park ist schön.", exku: "پارکەکە جوانە." },
    { de: "neu", ku: "نوێ", ex: "Das Auto ist neu.", exku: "ئۆتۆمبێلەکە نوێیە." },
    { de: "alt", ku: "کۆن / پیر", ex: "Das Haus ist alt.", exku: "خانووەکە کۆنە." },
    { de: "warm", ku: "گەرم", ex: "Das Wasser ist warm.", exku: "ئاوەکە گەرمە." },
    { de: "kalt", ku: "سارد", ex: "Es ist kalt heute.", exku: "ئەمڕۆ ساردە." },
    { de: "schnell", ku: "خێرا", ex: "Das Auto ist schnell.", exku: "ئۆتۆمبێلەکە خێرایە." },
    { de: "eins", ku: "یەک", ex: "Ich habe nur eins.", exku: "تەنها یەکم هەیە." },
    { de: "zwei", ku: "دوو", ex: "Ich habe zwei Brüder.", exku: "دوو برام هەیە." },
    { de: "drei", ku: "سێ", ex: "Es ist drei Uhr.", exku: "کاتژمێر سێیە." },
    { de: "zehn", ku: "دە", ex: "Ich zähle bis zehn.", exku: "تا دە دەژمێرم." },
    { de: "hundert", ku: "سەد", ex: "Das kostet hundert Euro.", exku: "ئەمە سەد یۆرۆ دەکات." },
    { de: "heute", ku: "ئەمڕۆ", ex: "Heute lerne ich Deutsch.", exku: "ئەمڕۆ ئەڵمانی فێردەبم." },
    { de: "morgen", ku: "سبەینێ", ex: "Morgen gehe ich zur Schule.", exku: "سبەینێ دەچمە قوتابخانە." },
    { de: "gestern", ku: "دوێنێ", ex: "Gestern war ich krank.", exku: "دوێنێ نەخۆش بووم." },
    { de: "jetzt", ku: "ئێستا", ex: "Jetzt esse ich.", exku: "ئێستا دەخۆم." },
    { de: "immer", ku: "هەمیشە", ex: "Ich lerne immer.", exku: "هەمیشە فێردەبم." },
    { de: "die Schule", ku: "قوتابخانە", ex: "Die Kinder gehen zur Schule.", exku: "منداڵەکان دەچنە قوتابخانە." },
    { de: "das Buch", ku: "کتێب", ex: "Das Buch ist interessant.", exku: "کتێبەکە سەرنجڕاکێشە." },
    { de: "das Auto", ku: "ئۆتۆمبێل", ex: "Mein Auto ist rot.", exku: "ئۆتۆمبێلەکەم سوورە." },
    { de: "die Stadt", ku: "شار", ex: "Bochum ist eine Stadt.", exku: "بۆخوم شارێکە." },
    { de: "das Geld", ku: "پارە", ex: "Ich habe kein Geld.", exku: "پارەم نییە." },
    { de: "die Zeit", ku: "کات", ex: "Ich habe keine Zeit.", exku: "کاتم نییە." },
    { de: "der Hund", ku: "سەگ", ex: "Der Hund ist freundlich.", exku: "سەگەکە دۆستانەیە." },
    { de: "die Katze", ku: "پشیلە", ex: "Die Katze schläft.", exku: "پشیلەکە خەوتووە." },
    { de: "die Sprache", ku: "زمان", ex: "Deutsch ist eine schöne Sprache.", exku: "ئەڵمانی زمانێکی جوانە." },
    { de: "die Arbeit", ku: "کار", ex: "Die Arbeit ist wichtig.", exku: "کار گرنگە." },
  ],
  A2: [
    { de: "aufstehen", ku: "هەستان", ex: "Ich stehe um sieben auf.", exku: "کاتژمێر حەوت هەڵدەستم." },
    { de: "frühstücken", ku: "نانی بەیانی خواردن", ex: "Wir frühstücken zusammen.", exku: "پێکەوە نانی بەیانی دەخۆین." },
    { de: "einkaufen", ku: "بازاڕکردن", ex: "Ich kaufe im Supermarkt ein.", exku: "لە سوپەرمارکێت بازاڕ دەکەم." },
    { de: "kochen", ku: "خواردن لێنان", ex: "Meine Mutter kocht Reis.", exku: "دایکم برنج لێدەنێ." },
    { de: "putzen", ku: "پاککردنەوە", ex: "Ich putze das Zimmer.", exku: "ژوورەکە پاک دەکەمەوە." },
    { de: "treffen", ku: "بینین / دیداری", ex: "Ich treffe meinen Freund.", exku: "هاوڕێکەم دەبینم." },
    { de: "helfen", ku: "یارمەتیدان", ex: "Kannst du mir helfen?", exku: "دەتوانی یارمەتیم بدەیت؟" },
    { de: "fragen", ku: "پرسین", ex: "Ich frage den Lehrer.", exku: "پرسیار لە مامۆستا دەکەم." },
    { de: "antworten", ku: "وەڵامدانەوە", ex: "Sie antwortet schnell.", exku: "بە خێرایی وەڵام دەداتەوە." },
    { de: "warten", ku: "چاوەڕوانکردن", ex: "Ich warte auf den Bus.", exku: "چاوەڕوانی پاس دەکەم." },
    { de: "bezahlen", ku: "پارەدان", ex: "Ich bezahle mit Karte.", exku: "بە کارت پارە دەدەم." },
    { de: "brauchen", ku: "پێویستیبوون", ex: "Ich brauche Hilfe.", exku: "پێویستیم بە یارمەتییە." },
    { de: "finden", ku: "دۆزینەوە", ex: "Ich finde meinen Schlüssel nicht.", exku: "کلیلەکەم نادۆزمەوە." },
    { de: "öffnen", ku: "کردنەوە", ex: "Öffne bitte die Tür.", exku: "تکایە دەرگاکە بکەرەوە." },
    { de: "schließen", ku: "داخستن", ex: "Ich schließe das Fenster.", exku: "پەنجەرەکە دادەخەم." },
    { de: "beginnen", ku: "دەستپێکردن", ex: "Der Kurs beginnt um neun.", exku: "خولەکە کاتژمێر نۆ دەست پێدەکات." },
    { de: "enden", ku: "کۆتایی‌هاتن", ex: "Der Film endet spät.", exku: "فیلمەکە درەنگ کۆتایی دێت." },
    { de: "reisen", ku: "گەشتکردن", ex: "Ich reise gern.", exku: "حەز دەکەم گەشت بکەم." },
    { de: "besuchen", ku: "سەردانکردن", ex: "Ich besuche meine Oma.", exku: "سەردانی داپیرم دەکەم." },
    { de: "bleiben", ku: "مانەوە", ex: "Ich bleibe zu Hause.", exku: "لە ماڵەوە دەمێنمەوە." },
    { de: "der Bahnhof", ku: "وێستگەی شەمەندەفەر", ex: "Der Bahnhof ist weit.", exku: "وێستگەکە دوورە." },
    { de: "der Flughafen", ku: "فڕۆکەخانە", ex: "Wir fahren zum Flughafen.", exku: "دەچینە فڕۆکەخانە." },
    { de: "der Zug", ku: "شەمەندەفەر", ex: "Der Zug ist pünktlich.", exku: "شەمەندەفەرەکە لە کاتی خۆیدایە." },
    { de: "das Flugzeug", ku: "فڕۆکە", ex: "Das Flugzeug fliegt hoch.", exku: "فڕۆکەکە بەرز دەفڕێت." },
    { de: "das Ticket", ku: "بلیت", ex: "Ich kaufe ein Ticket.", exku: "بلیتێک دەکڕم." },
    { de: "die Reise", ku: "گەشت", ex: "Die Reise war lang.", exku: "گەشتەکە درێژ بوو." },
    { de: "das Hotel", ku: "هۆتێل", ex: "Das Hotel ist schön.", exku: "هۆتێلەکە جوانە." },
    { de: "der Koffer", ku: "جانتا", ex: "Mein Koffer ist schwer.", exku: "جانتاکەم قورسە." },
    { de: "die Straße", ku: "شەقام", ex: "Die Straße ist voll.", exku: "شەقامەکە پڕە." },
    { de: "die Brücke", ku: "پرد", ex: "Die Brücke ist alt.", exku: "پردەکە کۆنە." },
    { de: "der Beruf", ku: "پیشە", ex: "Was ist dein Beruf?", exku: "پیشەت چییە؟" },
    { de: "das Büro", ku: "نووسینگە", ex: "Ich arbeite im Büro.", exku: "لە نووسینگەدا کار دەکەم." },
    { de: "der Chef", ku: "بەڕێوەبەر", ex: "Mein Chef ist nett.", exku: "بەڕێوەبەرەکەم بەسۆزە." },
    { de: "die Firma", ku: "کۆمپانیا", ex: "Die Firma ist groß.", exku: "کۆمپانیاکە گەورەیە." },
    { de: "das Gehalt", ku: "مووچە", ex: "Das Gehalt ist gut.", exku: "مووچەکە باشە." },
    { de: "die Universität", ku: "زانکۆ", ex: "Ich studiere an der Universität.", exku: "لە زانکۆ دەخوێنم." },
    { de: "die Prüfung", ku: "تاقیکردنەوە", ex: "Die Prüfung ist schwer.", exku: "تاقیکردنەوەکە قورسە." },
    { de: "die Note", ku: "نمرە", ex: "Ich habe eine gute Note.", exku: "نمرەیەکی باشم هەیە." },
    { de: "der Kurs", ku: "خول", ex: "Der Kurs ist interessant.", exku: "خولەکە سەرنجڕاکێشە." },
    { de: "das Studium", ku: "خوێندن", ex: "Mein Studium dauert lange.", exku: "خوێندنەکەم زۆر دەخایەنێت." },
    { de: "glücklich", ku: "بەختەوەر / دڵخۆش", ex: "Ich bin glücklich.", exku: "بەختەوەرم." },
    { de: "traurig", ku: "خەمگین", ex: "Sie ist traurig.", exku: "خەمگینە." },
    { de: "müde", ku: "ماندوو", ex: "Ich bin sehr müde.", exku: "زۆر ماندووم." },
    { de: "hungrig", ku: "برسی", ex: "Ich bin hungrig.", exku: "برسیمە." },
    { de: "durstig", ku: "تینوو", ex: "Bist du durstig?", exku: "تینوویت؟" },
    { de: "wichtig", ku: "گرنگ", ex: "Das ist sehr wichtig.", exku: "ئەمە زۆر گرنگە." },
    { de: "einfach", ku: "ئاسان", ex: "Die Aufgabe ist einfach.", exku: "ئەرکەکە ئاسانە." },
    { de: "schwierig", ku: "سەخت / قورس", ex: "Deutsch ist nicht schwierig.", exku: "ئەڵمانی سەخت نییە." },
    { de: "interessant", ku: "سەرنجڕاکێش", ex: "Das Buch ist interessant.", exku: "کتێبەکە سەرنجڕاکێشە." },
    { de: "langweilig", ku: "بێزارکەر", ex: "Der Film war langweilig.", exku: "فیلمەکە بێزارکەر بوو." },
    { de: "die Stunde", ku: "کاتژمێر", ex: "Eine Stunde hat sechzig Minuten.", exku: "کاتژمێرێک شەست خولەکی هەیە." },
    { de: "die Minute", ku: "خولەک", ex: "Warte eine Minute.", exku: "خولەکێک چاوەڕێبە." },
    { de: "der Monat", ku: "مانگ", ex: "Ein Monat hat vier Wochen.", exku: "مانگێک چوار هەفتەی هەیە." },
    { de: "manchmal", ku: "هەندێجار", ex: "Manchmal koche ich.", exku: "هەندێجار خواردن لێدەنێم." },
    { de: "oft", ku: "زۆرجار", ex: "Ich gehe oft spazieren.", exku: "زۆرجار دەچمە پیاسە." },
    { de: "nie", ku: "هەرگیز", ex: "Ich rauche nie.", exku: "هەرگیز جگەرە ناکێشم." },
    { de: "bald", ku: "بەم زووانە", ex: "Ich komme bald.", exku: "بەم زووانە دێم." },
    { de: "zuerst", ku: "سەرەتا", ex: "Zuerst lerne ich.", exku: "سەرەتا فێردەبم." },
    { de: "später", ku: "دواتر", ex: "Wir sprechen später.", exku: "دواتر قسە دەکەین." },
    { de: "endlich", ku: "لەکۆتاییدا", ex: "Endlich bin ich fertig.", exku: "لەکۆتاییدا تەواوبووم." },
    { de: "das Wetter", ku: "کەش‌وهەوا", ex: "Wie ist das Wetter?", exku: "کەش‌وهەوا چۆنە؟" },
    { de: "die Sonne", ku: "خۆر", ex: "Die Sonne scheint.", exku: "خۆر دەدرەوشێتەوە." },
    { de: "der Regen", ku: "باران", ex: "Der Regen ist stark.", exku: "بارانەکە بەهێزە." },
    { de: "der Schnee", ku: "بەفر", ex: "Im Winter gibt es Schnee.", exku: "لە زستاندا بەفر دەبارێت." },
    { de: "der Wind", ku: "با", ex: "Der Wind ist kalt.", exku: "باکە ساردە." },
    { de: "der Himmel", ku: "ئاسمان", ex: "Der Himmel ist blau.", exku: "ئاسمان شینە." },
    { de: "der Baum", ku: "درەخت", ex: "Der Baum ist hoch.", exku: "درەختەکە بەرزە." },
    { de: "die Blume", ku: "گوڵ", ex: "Die Blume ist schön.", exku: "گوڵەکە جوانە." },
    { de: "der Berg", ku: "شاخ", ex: "Der Berg ist hoch.", exku: "شاخەکە بەرزە." },
    { de: "das Meer", ku: "دەریا", ex: "Das Meer ist groß.", exku: "دەریا گەورەیە." },
    { de: "das Handy", ku: "مۆبایل", ex: "Mein Handy ist neu.", exku: "مۆبایلەکەم نوێیە." },
    { de: "der Computer", ku: "کۆمپیوتەر", ex: "Ich arbeite am Computer.", exku: "لەسەر کۆمپیوتەر کار دەکەم." },
    { de: "das Internet", ku: "ئینتەرنێت", ex: "Das Internet ist schnell.", exku: "ئینتەرنێت خێرایە." },
    { de: "die Musik", ku: "مۆسیقا", ex: "Ich höre Musik.", exku: "گوێ لە مۆسیقا دەگرم." },
    { de: "der Film", ku: "فیلم", ex: "Der Film war gut.", exku: "فیلمەکە باش بوو." },
    { de: "das Spiel", ku: "یاری", ex: "Das Spiel macht Spaß.", exku: "یارییەکە خۆشە." },
    { de: "die Party", ku: "ئاهەنگ", ex: "Die Party war toll.", exku: "ئاهەنگەکە نایاب بوو." },
    { de: "das Geschenk", ku: "دیاری", ex: "Danke für das Geschenk.", exku: "سوپاس بۆ دیارییەکە." },
    { de: "die Idee", ku: "بیرۆکە", ex: "Das ist eine gute Idee.", exku: "ئەمە بیرۆکەیەکی باشە." },
    { de: "die Frage", ku: "پرسیار", ex: "Ich habe eine Frage.", exku: "پرسیارێکم هەیە." },
  ],
  B1: [
    { de: "die Meinung", ku: "بۆچوون", ex: "Meiner Meinung nach ist das falsch.", exku: "بەلای منەوە ئەمە هەڵەیە." },
    { de: "die Erfahrung", ku: "ئەزموون", ex: "Ich habe viel Erfahrung.", exku: "ئەزموونی زۆرم هەیە." },
    { de: "die Möglichkeit", ku: "دەرفەت / ئەگەر", ex: "Es gibt eine Möglichkeit.", exku: "دەرفەتێک هەیە." },
    { de: "die Entscheidung", ku: "بڕیار", ex: "Das ist eine wichtige Entscheidung.", exku: "ئەمە بڕیارێکی گرنگە." },
    { de: "das Ziel", ku: "ئامانج", ex: "Mein Ziel ist klar.", exku: "ئامانجم ڕوونە." },
    { de: "der Grund", ku: "هۆکار", ex: "Was ist der Grund?", exku: "هۆکارەکە چییە؟" },
    { de: "das Problem", ku: "کێشە", ex: "Wir haben ein Problem.", exku: "کێشەیەکمان هەیە." },
    { de: "die Lösung", ku: "چارەسەر", ex: "Ich suche eine Lösung.", exku: "بەدوای چارەسەردا دەگەڕێم." },
    { de: "der Vorteil", ku: "سوود", ex: "Das hat viele Vorteile.", exku: "ئەمە سوودی زۆری هەیە." },
    { de: "der Nachteil", ku: "کاستی / زیان", ex: "Es gibt auch Nachteile.", exku: "کاستیشی هەیە." },
    { de: "entscheiden", ku: "بڕیاردان", ex: "Ich muss mich entscheiden.", exku: "دەبێت بڕیار بدەم." },
    { de: "erklären", ku: "ڕوونکردنەوە", ex: "Kannst du das erklären?", exku: "دەتوانی ئەمە ڕوون بکەیتەوە؟" },
    { de: "vergleichen", ku: "بەراوردکردن", ex: "Wir vergleichen die Preise.", exku: "نرخەکان بەراورد دەکەین." },
    { de: "empfehlen", ku: "پێشنیارکردن", ex: "Ich empfehle dieses Buch.", exku: "ئەم کتێبە پێشنیار دەکەم." },
    { de: "entwickeln", ku: "پەرەپێدان", ex: "Wir entwickeln eine App.", exku: "ئەپێک پەرەپێدەدەین." },
    { de: "verbessern", ku: "باشترکردن", ex: "Ich will mein Deutsch verbessern.", exku: "دەمەوێت ئەڵمانییەکەم باشتر بکەم." },
    { de: "vermeiden", ku: "خۆلادان", ex: "Vermeide diesen Fehler.", exku: "خۆ لەم هەڵەیە بپارێزە." },
    { de: "erreichen", ku: "گەیشتن بە", ex: "Ich will mein Ziel erreichen.", exku: "دەمەوێت بگەمە ئامانجم." },
    { de: "sich erinnern", ku: "بیرهێنانەوە", ex: "Ich erinnere mich an dich.", exku: "بیرت دەکەمەوە." },
    { de: "sich freuen", ku: "دڵخۆشبوون", ex: "Ich freue mich auf dich.", exku: "بە بینینت دڵخۆشم." },
    { de: "die Gesundheit", ku: "تەندروستی", ex: "Gesundheit ist wichtig.", exku: "تەندروستی گرنگە." },
    { de: "die Krankheit", ku: "نەخۆشی", ex: "Die Krankheit ist nicht ernst.", exku: "نەخۆشییەکە مەترسیدار نییە." },
    { de: "die Behandlung", ku: "چارەسەری", ex: "Die Behandlung dauert lange.", exku: "چارەسەرییەکە زۆر دەخایەنێت." },
    { de: "der Termin", ku: "ژووان", ex: "Ich habe einen Termin beim Arzt.", exku: "ژووانێکم لای پزیشک هەیە." },
    { de: "die Apotheke", ku: "دەرمانخانە", ex: "Die Apotheke ist geschlossen.", exku: "دەرمانخانەکە داخراوە." },
    { de: "das Rezept", ku: "ڕەچەتە", ex: "Der Arzt gibt mir ein Rezept.", exku: "پزیشک ڕەچەتەیەکم دەداتێ." },
    { de: "sich erholen", ku: "چاکبوونەوە", ex: "Ich muss mich erholen.", exku: "دەبێت چاکببمەوە." },
    { de: "der Stress", ku: "فشار / سترێس", ex: "Ich habe viel Stress.", exku: "سترێسی زۆرم هەیە." },
    { de: "die Ernährung", ku: "خۆراک", ex: "Gesunde Ernährung ist wichtig.", exku: "خۆراکی تەندروست گرنگە." },
    { de: "die Bewegung", ku: "جووڵە", ex: "Bewegung ist gut für den Körper.", exku: "جووڵە بۆ جەستە باشە." },
    { de: "die Gesellschaft", ku: "کۆمەڵگا", ex: "Die Gesellschaft verändert sich.", exku: "کۆمەڵگا دەگۆڕێت." },
    { de: "die Politik", ku: "سیاسەت", ex: "Ich interessiere mich für Politik.", exku: "ئارەزووی سیاسەت دەکەم." },
    { de: "die Nachricht", ku: "هەواڵ", ex: "Ich höre die Nachrichten.", exku: "گوێ لە هەواڵەکان دەگرم." },
    { de: "die Zeitung", ku: "ڕۆژنامە", ex: "Ich lese die Zeitung.", exku: "ڕۆژنامەکە دەخوێنمەوە." },
    { de: "die Werbung", ku: "ڕیکلام", ex: "Die Werbung ist überall.", exku: "ڕیکلام لە هەموو شوێنێکە." },
    { de: "die Bildung", ku: "پەروەردە / فێرکاری", ex: "Bildung öffnet Türen.", exku: "فێرکاری دەرگا دەکاتەوە." },
    { de: "die Kultur", ku: "کلتوور", ex: "Die deutsche Kultur ist interessant.", exku: "کلتووری ئەڵمانی سەرنجڕاکێشە." },
    { de: "die Sprache", ku: "زمان", ex: "Sprache verbindet Menschen.", exku: "زمان خەڵک بەیەکەوە دەبەستێتەوە." },
    { de: "die Zukunft", ku: "داهاتوو", ex: "Ich denke an die Zukunft.", exku: "بیر لە داهاتوو دەکەمەوە." },
    { de: "die Beziehung", ku: "پەیوەندی", ex: "Eine gute Beziehung braucht Zeit.", exku: "پەیوەندییەکی باش کات دەوێت." },
    { de: "weil", ku: "چونکە", ex: "Ich lerne, weil ich es brauche.", exku: "فێردەبم، چونکە پێویستمە." },
    { de: "obwohl", ku: "هەرچەندە", ex: "Ich gehe, obwohl es regnet.", exku: "دەڕۆم، هەرچەندە باران دەبارێت." },
    { de: "trotzdem", ku: "لەگەڵ ئەوەشدا", ex: "Es ist spät, trotzdem arbeite ich.", exku: "درەنگە، لەگەڵ ئەوەشدا کار دەکەم." },
    { de: "deshalb", ku: "لەبەرئەوە", ex: "Ich bin krank, deshalb bleibe ich zu Hause.", exku: "نەخۆشم، لەبەرئەوە لە ماڵەوە دەمێنمەوە." },
    { de: "außerdem", ku: "سەرباری ئەوە", ex: "Es ist teuer, außerdem alt.", exku: "گرانە، سەرباری ئەوە کۆنیشە." },
    { de: "vielleicht", ku: "لەوانەیە", ex: "Vielleicht komme ich morgen.", exku: "لەوانەیە سبەینێ بێم." },
    { de: "wahrscheinlich", ku: "ئەگەری هەیە", ex: "Wahrscheinlich regnet es.", exku: "ئەگەری هەیە باران ببارێت." },
    { de: "unbedingt", ku: "حەتمەن", ex: "Du musst das unbedingt sehen.", exku: "حەتمەن دەبێت ئەمە ببینیت." },
    { de: "ungefähr", ku: "نزیکەی", ex: "Es kostet ungefähr zehn Euro.", exku: "نزیکەی دە یۆرۆ دەکات." },
    { de: "normalerweise", ku: "بەشێوەی ئاسایی", ex: "Normalerweise stehe ich früh auf.", exku: "بەئاسایی زوو هەڵدەستم." },
    { de: "der Unterschied", ku: "جیاوازی", ex: "Was ist der Unterschied?", exku: "جیاوازییەکە چییە؟" },
    { de: "die Wahrheit", ku: "ڕاستی", ex: "Sag mir die Wahrheit.", exku: "ڕاستیم پێبڵێ." },
    { de: "die Hoffnung", ku: "هیوا", ex: "Ich habe Hoffnung.", exku: "هیوام هەیە." },
    { de: "die Angst", ku: "ترس", ex: "Ich habe keine Angst.", exku: "ناترسم." },
    { de: "der Erfolg", ku: "سەرکەوتن", ex: "Ich wünsche dir Erfolg.", exku: "سەرکەوتنت بۆ دەخوازم." },
    { de: "die Verantwortung", ku: "بەرپرسیارێتی", ex: "Das ist deine Verantwortung.", exku: "ئەمە بەرپرسیارێتی تۆیە." },
    { de: "die Gewohnheit", ku: "خوو / نەریت", ex: "Das ist eine schlechte Gewohnheit.", exku: "ئەمە خووێکی خراپە." },
    { de: "die Umgebung", ku: "دەوروبەر", ex: "Die Umgebung ist ruhig.", exku: "دەوروبەر ئارامە." },
    { de: "die Veränderung", ku: "گۆڕان", ex: "Veränderung ist nötig.", exku: "گۆڕان پێویستە." },
    { de: "der Eindruck", ku: "تێڕوانین / کاریگەری", ex: "Ich habe einen guten Eindruck.", exku: "تێڕوانینێکی باشم هەیە." },
    { de: "sich vorstellen", ku: "خۆناساندن", ex: "Darf ich mich vorstellen?", exku: "دەکرێت خۆم بناسێنم؟" },
    { de: "sich interessieren", ku: "ئارەزووکردن", ex: "Ich interessiere mich für Kunst.", exku: "ئارەزووی هونەر دەکەم." },
    { de: "sich kümmern", ku: "ئاگاداربوون", ex: "Ich kümmere mich um die Kinder.", exku: "ئاگاداری منداڵەکان دەبم." },
    { de: "teilnehmen", ku: "بەشداریکردن", ex: "Ich nehme am Kurs teil.", exku: "لە خولەکەدا بەشداری دەکەم." },
    { de: "vorbereiten", ku: "ئامادەکردن", ex: "Ich bereite das Essen vor.", exku: "خواردنەکە ئامادە دەکەم." },
    { de: "wiederholen", ku: "دووبارەکردنەوە", ex: "Bitte wiederhole das.", exku: "تکایە ئەمە دووبارە بکەرەوە." },
    { de: "erlauben", ku: "ڕێگەدان", ex: "Das ist nicht erlaubt.", exku: "ئەمە ڕێگەپێدراو نییە." },
    { de: "verbieten", ku: "قەدەغەکردن", ex: "Rauchen ist verboten.", exku: "جگەرەکێشان قەدەغەیە." },
    { de: "versuchen", ku: "هەوڵدان", ex: "Ich versuche es noch einmal.", exku: "جارێکی تر هەوڵ دەدەم." },
    { de: "die Mehrheit", ku: "زۆرینە", ex: "Die Mehrheit ist dafür.", exku: "زۆرینە لەگەڵیدایە." },
    { de: "die Bevölkerung", ku: "دانیشتووان", ex: "Die Bevölkerung wächst.", exku: "دانیشتووان زیاد دەبن." },
    { de: "die Regierung", ku: "حکوومەت", ex: "Die Regierung trifft eine Entscheidung.", exku: "حکوومەت بڕیارێک دەدات." },
    { de: "das Gesetz", ku: "یاسا", ex: "Das Gesetz ist neu.", exku: "یاساکە نوێیە." },
    { de: "das Recht", ku: "ماف", ex: "Jeder hat Rechte.", exku: "هەموو کەسێک مافی هەیە." },
    { de: "die Pflicht", ku: "ئەرک", ex: "Das ist meine Pflicht.", exku: "ئەمە ئەرکی منە." },
    { de: "die Freiheit", ku: "ئازادی", ex: "Freiheit ist wichtig.", exku: "ئازادی گرنگە." },
    { de: "der Frieden", ku: "ئاشتی", ex: "Wir wollen Frieden.", exku: "ئاشتیمان دەوێت." },
    { de: "die Hilfe", ku: "یارمەتی", ex: "Danke für deine Hilfe.", exku: "سوپاس بۆ یارمەتیت." },
    { de: "die Geduld", ku: "سەبر / ئارامگرتن", ex: "Lernen braucht Geduld.", exku: "فێربوون سەبری دەوێت." },
    { de: "der Vorschlag", ku: "پێشنیار", ex: "Ich habe einen Vorschlag.", exku: "پێشنیارێکم هەیە." },
  ],
  B2: [
    { de: "die Wirtschaft", ku: "ئابووری", ex: "Die Wirtschaft wächst langsam.", exku: "ئابووری بەهێواشی گەشە دەکات." },
    { de: "das Unternehmen", ku: "کۆمپانیا / پڕۆژە", ex: "Das Unternehmen ist erfolgreich.", exku: "کۆمپانیاکە سەرکەوتووە." },
    { de: "die Investition", ku: "وەبەرهێنان", ex: "Die Investition lohnt sich.", exku: "وەبەرهێنانەکە دەرفەتێکی باشە." },
    { de: "der Gewinn", ku: "قازانج", ex: "Der Gewinn ist gestiegen.", exku: "قازانج زیادی کردووە." },
    { de: "der Verlust", ku: "زیان", ex: "Wir hatten einen Verlust.", exku: "زیانمان کرد." },
    { de: "die Steuer", ku: "باج", ex: "Die Steuern sind hoch.", exku: "باجەکان بەرزن." },
    { de: "der Markt", ku: "بازاڕ", ex: "Der Markt ist hart umkämpft.", exku: "بازاڕ کێبڕکێی توندی تێدایە." },
    { de: "die Nachfrage", ku: "داواکاری", ex: "Die Nachfrage ist groß.", exku: "داواکاری زۆرە." },
    { de: "das Angebot", ku: "ئەرز / پێشکەش", ex: "Das Angebot ist begrenzt.", exku: "ئەرزەکە سنووردارە." },
    { de: "die Konkurrenz", ku: "کێبڕکێ", ex: "Die Konkurrenz ist stark.", exku: "کێبڕکێ بەهێزە." },
    { de: "die Umwelt", ku: "ژینگە", ex: "Wir müssen die Umwelt schützen.", exku: "دەبێت ژینگە بپارێزین." },
    { de: "der Klimawandel", ku: "گۆڕانی کەش‌وهەوا", ex: "Der Klimawandel ist real.", exku: "گۆڕانی کەش‌وهەوا ڕاستەقینەیە." },
    { de: "die Energie", ku: "وزە", ex: "Erneuerbare Energie ist wichtig.", exku: "وزەی نوێبووەوە گرنگە." },
    { de: "nachhaltig", ku: "بەردەوام / گونجاو", ex: "Wir brauchen nachhaltige Lösungen.", exku: "پێویستیمان بە چارەسەری بەردەوامە." },
    { de: "die Verschmutzung", ku: "پیسبوون", ex: "Die Verschmutzung steigt.", exku: "پیسبوون زیاد دەبێت." },
    { de: "der Müll", ku: "زبڵ", ex: "Wir trennen den Müll.", exku: "زبڵ جیا دەکەینەوە." },
    { de: "schützen", ku: "پاراستن", ex: "Wir schützen die Natur.", exku: "سروشت دەپارێزین." },
    { de: "verbrauchen", ku: "بەکارهێنان / خەرجکردن", ex: "Wir verbrauchen zu viel Energie.", exku: "زۆر وزە بەکاردەهێنین." },
    { de: "die Ressource", ku: "سەرچاوە", ex: "Ressourcen sind begrenzt.", exku: "سەرچاوەکان سنووردارن." },
    { de: "die Folge", ku: "دەرئەنجام", ex: "Das hat ernste Folgen.", exku: "ئەمە دەرئەنجامی جددی هەیە." },
    { de: "die Entwicklung", ku: "گەشە / پەرەسەندن", ex: "Die Entwicklung ist positiv.", exku: "گەشەکردنەکە ئەرێنییە." },
    { de: "die Forschung", ku: "توێژینەوە", ex: "Die Forschung ist wichtig.", exku: "توێژینەوە گرنگە." },
    { de: "die Wissenschaft", ku: "زانست", ex: "Die Wissenschaft macht Fortschritte.", exku: "زانست پێشکەوتن دەکات." },
    { de: "die Technologie", ku: "تەکنەلۆژیا", ex: "Technologie verändert das Leben.", exku: "تەکنەلۆژیا ژیان دەگۆڕێت." },
    { de: "die Untersuchung", ku: "لێکۆڵینەوە", ex: "Die Untersuchung dauert Monate.", exku: "لێکۆڵینەوەکە مانگەها دەخایەنێت." },
    { de: "das Ergebnis", ku: "ئەنجام", ex: "Das Ergebnis ist überraschend.", exku: "ئەنجامەکە سەرسوڕهێنەرە." },
    { de: "der Beweis", ku: "بەڵگە", ex: "Es gibt keinen Beweis.", exku: "هیچ بەڵگەیەک نییە." },
    { de: "die Theorie", ku: "تیۆری", ex: "Die Theorie ist komplex.", exku: "تیۆرییەکە ئاڵۆزە." },
    { de: "die Voraussetzung", ku: "پێشمەرج", ex: "Eine Voraussetzung ist Erfahrung.", exku: "پێشمەرجێک ئەزموونە." },
    { de: "der Zusammenhang", ku: "پەیوەندی / گرێدان", ex: "Es gibt einen Zusammenhang.", exku: "پەیوەندییەک هەیە." },
    { de: "berücksichtigen", ku: "لەبەرچاوگرتن", ex: "Wir müssen das berücksichtigen.", exku: "دەبێت ئەمە لەبەرچاو بگرین." },
    { de: "betonen", ku: "جەختکردن", ex: "Er betont die Wichtigkeit.", exku: "جەخت لە گرنگییەکە دەکات." },
    { de: "beeinflussen", ku: "کاریگەری‌کردن", ex: "Das Wetter beeinflusst die Stimmung.", exku: "کەش‌وهەوا کاریگەری لەسەر کەشی دەروونی هەیە." },
    { de: "ermöglichen", ku: "دەستەبەرکردن", ex: "Das Internet ermöglicht vieles.", exku: "ئینتەرنێت زۆر شت دەستەبەر دەکات." },
    { de: "verursachen", ku: "هۆکاربوون", ex: "Rauchen verursacht Krankheiten.", exku: "جگەرەکێشان دەبێتە هۆی نەخۆشی." },
    { de: "vermuten", ku: "گریمانکردن", ex: "Ich vermute, dass er kommt.", exku: "گریمان دەکەم کە دێت." },
    { de: "behaupten", ku: "بانگەشەکردن", ex: "Er behauptet, er sei unschuldig.", exku: "بانگەشە دەکات کە بێتاوانە." },
    { de: "zweifeln", ku: "گومانکردن", ex: "Ich zweifle daran.", exku: "گومانی لێ دەکەم." },
    { de: "überzeugen", ku: "قایلکردن", ex: "Du hast mich überzeugt.", exku: "قایلت کردم." },
    { de: "verzichten", ku: "وازهێنان", ex: "Ich verzichte auf Zucker.", exku: "واز لە شەکر دەهێنم." },
    { de: "die Herausforderung", ku: "ئاستەنگ", ex: "Das ist eine große Herausforderung.", exku: "ئەمە ئاستەنگێکی گەورەیە." },
    { de: "die Gerechtigkeit", ku: "دادپەروەری", ex: "Wir kämpfen für Gerechtigkeit.", exku: "بۆ دادپەروەری تێدەکۆشین." },
    { de: "die Gleichheit", ku: "یەکسانی", ex: "Gleichheit ist ein Grundrecht.", exku: "یەکسانی مافێکی بنەڕەتییە." },
    { de: "die Vielfalt", ku: "جۆراوجۆری", ex: "Vielfalt ist eine Stärke.", exku: "جۆراوجۆری خاڵێکی بەهێزە." },
    { de: "die Integration", ku: "تێکەڵبوون", ex: "Integration braucht Zeit.", exku: "تێکەڵبوون کات دەوێت." },
    { de: "die Migration", ku: "کۆچ", ex: "Migration ist ein wichtiges Thema.", exku: "کۆچ بابەتێکی گرنگە." },
    { de: "das Vorurteil", ku: "پێشداوەری", ex: "Vorurteile sind gefährlich.", exku: "پێشداوەری مەترسیدارە." },
    { de: "die Toleranz", ku: "لێبووردەیی", ex: "Toleranz ist wichtig.", exku: "لێبووردەیی گرنگە." },
    { de: "der Respekt", ku: "ڕێز", ex: "Respekt ist die Basis.", exku: "ڕێز بنەماکەیە." },
    { de: "das Bewusstsein", ku: "ئاگایی / هۆشیاری", ex: "Das Bewusstsein wächst.", exku: "ئاگایی زیاد دەبێت." },
    { de: "erfolgreich", ku: "سەرکەوتوو", ex: "Sie ist sehr erfolgreich.", exku: "زۆر سەرکەوتووە." },
    { de: "verfügbar", ku: "بەردەست", ex: "Das Produkt ist verfügbar.", exku: "بەرهەمەکە بەردەستە." },
    { de: "notwendig", ku: "پێویست", ex: "Das ist nicht notwendig.", exku: "ئەمە پێویست نییە." },
    { de: "deutlich", ku: "ئاشکرا / ڕوون", ex: "Der Unterschied ist deutlich.", exku: "جیاوازییەکە ئاشکرایە." },
    { de: "zuständig", ku: "بەرپرس", ex: "Wer ist dafür zuständig?", exku: "کێ بەرپرسە لەمە؟" },
    { de: "üblich", ku: "باو / ئاسایی", ex: "Das ist hier üblich.", exku: "ئەمە لێرە باوە." },
    { de: "zahlreich", ku: "زۆر / فرە", ex: "Es gibt zahlreiche Beispiele.", exku: "نموونەی زۆر هەیە." },
    { de: "vorläufig", ku: "کاتی", ex: "Das ist eine vorläufige Lösung.", exku: "ئەمە چارەسەرێکی کاتییە." },
    { de: "angemessen", ku: "گونجاو / شیاو", ex: "Der Preis ist angemessen.", exku: "نرخەکە گونجاوە." },
    { de: "die Bedingung", ku: "مەرج", ex: "Unter einer Bedingung.", exku: "بە یەک مەرج." },
    { de: "die Maßnahme", ku: "ڕێوشوێن", ex: "Die Regierung ergreift Maßnahmen.", exku: "حکوومەت ڕێوشوێن دەگرێتەبەر." },
    { de: "die Auswirkung", ku: "کاریگەری", ex: "Die Auswirkungen sind groß.", exku: "کاریگەرییەکان گەورەن." },
    { de: "die Erkenntnis", ku: "تێگەیشتن / زانیاری", ex: "Das ist eine neue Erkenntnis.", exku: "ئەمە تێگەیشتنێکی نوێیە." },
    { de: "die Schlussfolgerung", ku: "دەرئەنجام", ex: "Was ist deine Schlussfolgerung?", exku: "دەرئەنجامی تۆ چییە؟" },
    { de: "der Aspekt", ku: "لایەن", ex: "Ein wichtiger Aspekt.", exku: "لایەنێکی گرنگ." },
    { de: "der Standpunkt", ku: "دیدگا / بۆچوون", ex: "Ich verstehe deinen Standpunkt.", exku: "لە دیدگاکەت دەگەم." },
    { de: "die Auseinandersetzung", ku: "مشتومڕ", ex: "Es gab eine Auseinandersetzung.", exku: "مشتومڕێک ڕوویدا." },
    { de: "die Zusammenarbeit", ku: "هاوکاری", ex: "Zusammenarbeit ist wichtig.", exku: "هاوکاری گرنگە." },
    { de: "die Verbindung", ku: "پەیوەندی", ex: "Es gibt eine Verbindung.", exku: "پەیوەندییەک هەیە." },
    { de: "berufstätig", ku: "خاوەن کار", ex: "Sie ist berufstätig.", exku: "ئەو خاوەن کارە." },
    { de: "die Bewerbung", ku: "داواکاری کار", ex: "Ich schreibe eine Bewerbung.", exku: "داواکارییەکی کار دەنووسم." },
    { de: "das Vorstellungsgespräch", ku: "چاوپێکەوتنی کار", ex: "Das Vorstellungsgespräch war gut.", exku: "چاوپێکەوتنەکە باش بوو." },
    { de: "die Qualifikation", ku: "شایستەیی", ex: "Du hast die richtige Qualifikation.", exku: "شایستەیی گونجاوت هەیە." },
    { de: "die Weiterbildung", ku: "پەرەپێدانی شارەزایی", ex: "Weiterbildung ist nützlich.", exku: "پەرەپێدانی شارەزایی سوودبەخشە." },
    { de: "der Fortschritt", ku: "پێشکەوتن", ex: "Wir machen Fortschritte.", exku: "پێشکەوتن دەکەین." },
    { de: "die Leistung", ku: "کارایی", ex: "Deine Leistung ist gut.", exku: "کاراییەکەت باشە." },
    { de: "die Erwartung", ku: "چاوەڕوانی", ex: "Die Erwartungen sind hoch.", exku: "چاوەڕوانییەکان بەرزن." },
    { de: "die Anforderung", ku: "پێداویستی", ex: "Die Anforderungen sind streng.", exku: "پێداویستییەکان توندن." },
    { de: "zukünftig", ku: "لە داهاتوودا", ex: "Zukünftig arbeite ich hier.", exku: "لە داهاتوودا لێرە کار دەکەم." },
    { de: "die Strategie", ku: "ستراتیژی", ex: "Wir brauchen eine neue Strategie.", exku: "پێویستیمان بە ستراتیژییەکی نوێیە." },
  ],
};

// ── بانکی ڕێزمان / Grammar bank (A1–B2) ───────────────────────────
// هەر بابەت: de=ناونیشانی ئەڵمانی، ku=ناونیشانی سۆرانی، exp=ڕوونکردنەوە بە سۆرانی، ex=[{de,ku}]
const GRAMMAR = {
  A1: [
    { de: "Artikel: der, die, das", ku: "ئارتیکڵ (der/die/das)", icon: "✦",
      exp: "هەموو ناوێک لە ئەڵمانیدا ڕەگەزی هەیە: نێر «der»، مێ «die»، بێلایەن «das». ئارتیکڵ پێشتر دێت و دەبێت لەگەڵ ناوەکەدا فێری بیت، چونکە هەمیشە بە لۆژیک نییە. لای خوارەوە یاسا و نموونەکان بەپێی هەر ئارتیکڵێک جیاکراونەتەوە.",
      groups: [
        { art: "der", emoji: "🔵", tr: "نێر (männlich)", color: "#2f6f8f",
          rules: ["ڕۆژەکانی هەفتە، مانگەکان، وەرزەکان", "زۆربەی پیشەکان", "کۆتاییەکان: -er، -en، -el (زۆرجار)", "زۆربەی کەسانی نێر"],
          words: [["der Mann","پیاو"],["der Vater","باوک"],["der Sohn","کوڕ"],["der Bruder","برا"],["der Lehrer","مامۆستا"],["der Arzt","پزیشک"],["der Student","خوێندکار"],["der Fahrer","شۆفێر"],["der Bäcker","نانەوا"],["der Computer","کۆمپیوتەر"],["der Tisch","مێز"],["der Stuhl","کورسی"],["der Fernseher","تەلەفزیۆن"],["der Kühlschrank","بەفرگر / سەلاجە"],["der Montag","دووشەممە"],["der Dienstag","سێشەممە"],["der Mittwoch","چوارشەممە"],["der Januar","ژانویە"],["der Februar","شوبات"],["der Sommer","هاوین"],["der Winter","زستان"]] },
        { art: "die", emoji: "🔴", tr: "مێ (feminin)", color: "#b8412e",
          rules: ["کۆتاییەکان: -e، -ung، -heit، -keit، -ion، -schaft، -ie", "زۆربەی کەسانی مێ", "زۆربەی شار و شتەکان"],
          words: [["die Frau","ژن"],["die Mutter","دایک"],["die Tochter","کچ"],["die Schwester","خوشک"],["die Lehrerin","مامۆستا (ژن)"],["die Ärztin","پزیشک (ژن)"],["die Lampe","چرا / لامپە"],["die Tür","دەرگا"],["die Schule","قوتابخانە"],["die Stadt","شار"],["die Wohnung","ئەپارتمان / نیشتەجێ"],["die Küche","چێشتخانە"],["die Straße","شەقام"],["die Prüfung","تاقیکردنەوە"],["die Zeitung","ڕۆژنامە"],["die Meinung","بۆچوون"],["die Freiheit","ئازادی"],["die Möglichkeit","دەرفەت / ئەگەر"],["die Freundschaft","هاوڕێیەتی"],["die Nation","نەتەوە"],["die Situation","بارودۆخ"],["die Biologie","زیندەزانی"],["die Musik","مۆسیقا"]] },
        { art: "das", emoji: "🟡", tr: "بێلایەن (neutral)", color: "#c8922a",
          rules: ["کۆتاییەکان: -chen، -lein، -ment، -um", "کردار وەک ناو", "منداڵ و شتەکان"],
          words: [["das Kind","منداڵ"],["das Baby","کۆرپە"],["das Mädchen","کچ (بچووک)"],["das Haus","ماڵ / خانوو"],["das Auto","ئۆتۆمبێل"],["das Buch","کتێب"],["das Fenster","پەنجەرە"],["das Wasser","ئاو"],["das Essen","خواردن"],["das Trinken","خواردنەوە"],["das Spiel","یاری"],["das Zimmer","ژوور"],["das Krankenhaus","نەخۆشخانە"],["das Studium","خوێندن"],["das Museum","مۆزەخانە"],["das Zentrum","ناوەند"],["das Instrument","ئامێری مۆسیقا"],["das Problem","کێشە"],["das Telefon","تەلەفۆن"],["das Foto","وێنە"]] },
      ],
      merksatz: [ { de: "der", ku: "نێر (männlich)" }, { de: "die", ku: "مێ (weiblich)" }, { de: "das", ku: "بێلایەن (neutral)" } ],
      ex: [ { de: "der Tisch", ku: "مێز (نێر)" }, { de: "die Lampe", ku: "چرا (مێ)" }, { de: "das Buch", ku: "کتێب (بێلایەن)" }, { de: "der Stuhl ist neu.", ku: "کورسییەکە نوێیە." }, { de: "die Tür ist offen.", ku: "دەرگاکە کراوەیە." }, { de: "das Fenster ist groß.", ku: "پەنجەرەکە گەورەیە." } ] },
    { de: "Bestimmte / unbestimmte Artikel", ku: "ئارتیکڵی دیاریکراو و نادیار", icon: "✧",
      exp: "«der/die/das» بۆ شتی دیاریکراو (ئەو شتەی دەیناسین). «ein/eine» بۆ شتی نادیار (شتێک بۆ یەکەم جار). بۆ بێلایەن و نێر «ein»، بۆ مێ «eine».",
      ex: [ { de: "Das ist ein Buch.", ku: "ئەمە کتێبێکە (نادیار)." }, { de: "Das Buch ist neu.", ku: "کتێبەکە نوێیە (دیاریکراو)." }, { de: "Ich habe eine Frage.", ku: "پرسیارێکم هەیە." }, { de: "Ein Mann wartet draußen.", ku: "پیاوێک لە دەرەوە چاوەڕێیە." }, { de: "Der Mann ist mein Vater.", ku: "پیاوەکە باوکمە." }, { de: "Eine Katze schläft hier.", ku: "پشیلەیەک لێرە خەوتووە." } ] },
    { de: "Plural", ku: "کۆ (زۆرینە)", icon: "❖",
      exp: "لە ئەڵمانیدا کۆکردنەوە چەند شێوازی هەیە: -e، -n/-en، -er، -s، یان بێ گۆڕان. لە کۆدا ئارتیکڵ هەمیشە «die» دەبێت.",
      ex: [ { de: "das Kind → die Kinder", ku: "منداڵ → منداڵان" }, { de: "die Frau → die Frauen", ku: "ژن → ژنان" }, { de: "das Auto → die Autos", ku: "ئۆتۆمبێل → ئۆتۆمبێلەکان" }, { de: "der Tisch → die Tische", ku: "مێز → مێزەکان" }, { de: "der Apfel → die Äpfel", ku: "سێو → سێوەکان" }, { de: "das Buch → die Bücher", ku: "کتێب → کتێبەکان" } ] },
    { de: "Personalpronomen", ku: "جێناوی کەسی", icon: "✺",
      exp: "جێناوەکان: ich (من)، du (تۆ)، er/sie/es (ئەو)، wir (ئێمە)، ihr (ئێوە)، sie (ئەوان)، Sie (ئێوەی فەرمی).",
      ex: [ { de: "Ich bin Student.", ku: "من خوێندکارم." }, { de: "Wir lernen Deutsch.", ku: "ئێمە ئەڵمانی فێردەبین." }, { de: "Sie ist Lehrerin.", ku: "ئەو (مێ) مامۆستایە." }, { de: "Er kommt aus Erbil.", ku: "ئەو خەڵکی هەولێرە." }, { de: "Ihr seid willkommen.", ku: "ئێوە بەخێربێن." }, { de: "Es ist kalt heute.", ku: "ئەمڕۆ ساردە." } ] },
    { de: "Präsens — regelmäßige Verben", ku: "کاتی ئێستا — کرداری ڕێکوپێک", icon: "▸",
      exp: "ڕەگی کردار + کۆتایی: ich -e، du -st، er/sie/es -t، wir -en، ihr -t، sie/Sie -en. نموونە: lernen → ich lerne.",
      ex: [ { de: "ich lerne", ku: "فێردەبم" }, { de: "du lernst", ku: "تۆ فێردەبیت" }, { de: "wir lernen", ku: "ئێمە فێردەبین" }, { de: "er spielt Fußball.", ku: "ئەو تۆپی پێ یاری دەکات." }, { de: "ihr arbeitet viel.", ku: "ئێوە زۆر کار دەکەن." }, { de: "sie wohnen hier.", ku: "ئەوان لێرە نیشتەجێن." } ] },
    { de: "Unregelmäßige Verben", ku: "کرداری ناڕێک (بنەڕەتی)", icon: "↯",
      exp: "هەندێ کردار لە «du» و «er/sie/es»دا ڤاوڵەکەیان دەگۆڕێت (a→ä، e→i/ie). نموونە: fahren → du fährst، essen → du isst.",
      ex: [ { de: "fahren → er fährt", ku: "لێخوڕین → ئەو لێدەخوڕێت" }, { de: "essen → du isst", ku: "خواردن → تۆ دەخۆیت" }, { de: "sehen → er sieht", ku: "بینین → ئەو دەبینێت" }, { de: "geben → du gibst", ku: "دان → تۆ دەدەیت" }, { de: "lesen → sie liest", ku: "خوێندنەوە → ئەو دەیخوێنێتەوە" }, { de: "schlafen → er schläft", ku: "خەوتن → ئەو دەخەوێت" } ] },
    { de: "sein und haben", ku: "کرداری «بوون» و «هەبوون»", icon: "◈",
      exp: "sein: ich bin، du bist، er ist، wir sind، ihr seid، sie sind. haben: ich habe، du hast، er hat، wir haben، ihr habt، sie haben. زۆر گرنگن چونکە بنەمای زۆر شتن.",
      ex: [ { de: "Ich bin müde.", ku: "ماندووم." }, { de: "Du hast Zeit.", ku: "کاتت هەیە." }, { de: "Wir sind hier.", ku: "ئێمە لێرەین." }, { de: "Er ist mein Bruder.", ku: "ئەو برامە." }, { de: "Sie hat ein Auto.", ku: "ئەو ئۆتۆمبێلێکی هەیە." }, { de: "Ihr seid spät.", ku: "ئێوە درەنگن." } ] },
    { de: "Modalverben", ku: "کرداری یاریدەدەر (مۆداڵ)", icon: "◆",
      exp: "können (توانین)، müssen (دەبێت)، wollen (ویستن)، dürfen (مۆڵەت)، sollen (پێویست)، möchten (حەزکردن). کرداری دووەم بە شێوەی بنەڕەتی دەچێتە کۆتایی ڕستە.",
      ex: [ { de: "Ich kann schwimmen.", ku: "دەتوانم مەلە بکەم." }, { de: "Du musst lernen.", ku: "دەبێت فێربیت." }, { de: "Wir wollen essen.", ku: "دەمانەوێت بخۆین." }, { de: "Darf ich rein?", ku: "دەکرێت بێمە ژوورەوە؟" }, { de: "Du sollst warten.", ku: "دەبێت چاوەڕێ بکەیت." }, { de: "Ich möchte Kaffee.", ku: "قاوەم دەوێت." } ] },
    { de: "W-Fragen", ku: "پرسیاری W", icon: "?",
      exp: "پرسیار بە وشەی پرسیاری دەست پێدەکات: wer (کێ)، was (چی)، wo (لەکوێ)، wann (کەی)، wie (چۆن)، warum (بۆچی). کردار دێتە جێی دووەم.",
      ex: [ { de: "Wo wohnst du?", ku: "لەکوێ نیشتەجێیت؟" }, { de: "Was machst du?", ku: "چی دەکەیت؟" }, { de: "Wann kommst du?", ku: "کەی دێیت؟" }, { de: "Wer ist das?", ku: "ئەمە کێیە؟" }, { de: "Wie heißt du?", ku: "ناوت چییە؟" }, { de: "Warum lernst du Deutsch?", ku: "بۆچی ئەڵمانی فێردەبیت؟" } ] },
    { de: "Ja/Nein-Fragen", ku: "پرسیاری بەڵێ/نەخێر", icon: "↔",
      exp: "ئەم پرسیارانە بە کردار دەست پێدەکەن (کردار دێتە جێی یەکەم). وەڵام بە ja یان nein.",
      ex: [ { de: "Kommst du mit?", ku: "لەگەڵم دێیت؟" }, { de: "Hast du Zeit?", ku: "کاتت هەیە؟" }, { de: "Ist das richtig?", ku: "ئەمە ڕاستە؟" }, { de: "Sprichst du Englisch?", ku: "ئینگلیزی قسە دەکەیت؟" }, { de: "Magst du Tee?", ku: "حەزت لە چایە؟" }, { de: "Wohnst du hier?", ku: "لێرە نیشتەجێیت؟" } ] },
    { de: "Satzstellung", ku: "ڕیزبەندی ڕستە", icon: "≡",
      exp: "لە ڕستەی ئاساییدا کردار هەمیشە لە جێی دووەمە. «Position 2» یاسای زۆر گرنگی ئەڵمانییە.",
      ex: [ { de: "Ich lerne heute Deutsch.", ku: "ئەمڕۆ ئەڵمانی فێردەبم." }, { de: "Heute lerne ich Deutsch.", ku: "ئەمڕۆ ئەڵمانی فێردەبم (کردار هێشتا جێی ٢)." }, { de: "Morgen gehe ich nach Hause.", ku: "سبەینێ دەچمە ماڵەوە." }, { de: "Am Abend sehe ich fern.", ku: "ئێوارە تەلەفزیۆن سەیر دەکەم." }, { de: "In Bochum wohne ich.", ku: "لە بۆخوم نیشتەجێم." }, { de: "Jetzt esse ich.", ku: "ئێستا دەخۆم." } ] },
    { de: "Akkusativ", ku: "ئاککوزاتیڤ (بەرکاری ڕاستەوخۆ)", icon: "→",
      exp: "ئاککوزاتیڤ بەرکاری ڕاستەوخۆیە. تەنها ئارتیکڵی نێر دەگۆڕێت: der → den، ein → einen. مێ و بێلایەن ناگۆڕێن.",
      ex: [ { de: "Ich sehe den Mann.", ku: "پیاوەکە دەبینم." }, { de: "Ich kaufe einen Apfel.", ku: "سێوێک دەکڕم." }, { de: "Ich lese das Buch.", ku: "کتێبەکە دەخوێنمەوە." }, { de: "Er hat einen Hund.", ku: "سەگێکی هەیە." }, { de: "Wir brauchen den Schlüssel.", ku: "پێویستیمان بە کلیلەکەیە." }, { de: "Ich trinke eine Cola.", ku: "کۆلایەک دەخۆمەوە." } ] },
    { de: "Possessivartikel", ku: "ئارتیکڵی خاوەندارێتی", icon: "✪",
      exp: "mein (هی من)، dein (هی تۆ)، sein (هی ئەو نێر)، ihr (هی ئەو مێ)، unser (هی ئێمە). لەگەڵ ڕەگەزی ناوەکە دەگونجێن.",
      ex: [ { de: "Das ist mein Buch.", ku: "ئەمە کتێبی منە." }, { de: "Deine Tasche ist schön.", ku: "جانتاکەت جوانە." }, { de: "Sein Auto ist neu.", ku: "ئۆتۆمبێلەکەی نوێیە." }, { de: "Ihre Mutter ist Ärztin.", ku: "دایکی پزیشکە." }, { de: "Unser Haus ist groß.", ku: "خانووەکەمان گەورەیە." }, { de: "Euer Lehrer ist nett.", ku: "مامۆستاکەتان بەسۆزە." } ] },
    { de: "Trennbare Verben", ku: "کرداری لێکدراو", icon: "⇿",
      exp: "هەندێ کردار پێشگرێکیان هەیە کە لە کاتی ئێستادا لێک دەبێتەوە و دەچێتە کۆتایی ڕستە. نموونە: aufstehen → ich stehe auf.",
      ex: [ { de: "Ich stehe um 7 auf.", ku: "کاتژمێر ٧ هەڵدەستم." }, { de: "Er kauft ein.", ku: "ئەو بازاڕ دەکات." }, { de: "Wir kommen an.", ku: "ئێمە دەگەین." }, { de: "Ruf mich an!", ku: "پەیوەندیم پێوە بکە!" }, { de: "Der Zug fährt ab.", ku: "شەمەندەفەرەکە بەڕێدەکەوێت." }, { de: "Ich räume das Zimmer auf.", ku: "ژوورەکە ڕێک دەخەم." } ] },
    { de: "Negation: nicht / kein", ku: "نەرێ کردن (nicht/kein)", icon: "⊘",
      exp: "«nicht» بۆ نەرێکردنی کردار، سیفەت یان ڕستە. «kein» بۆ نەرێکردنی ناو (لەگەڵ ئارتیکڵی نادیار یان بێ ئارتیکڵ).",
      ex: [ { de: "Ich verstehe nicht.", ku: "تێناگەم." }, { de: "Ich habe kein Geld.", ku: "پارەم نییە." }, { de: "Das ist nicht richtig.", ku: "ئەمە ڕاست نییە." }, { de: "Er ist nicht hier.", ku: "ئەو لێرە نییە." }, { de: "Ich habe keine Zeit.", ku: "کاتم نییە." }, { de: "Das macht keinen Spaß.", ku: "ئەمە خۆش نییە." } ] },
    { de: "Imperativ", ku: "فەرمان", icon: "!",
      exp: "بۆ فەرمانکردن. du: ڕەگی کردار (Komm!). ihr: ڕەگ + t (Kommt!). Sie: کردار + Sie (Kommen Sie!).",
      ex: [ { de: "Komm her!", ku: "وەرە ئێرە!" }, { de: "Macht die Tür zu!", ku: "دەرگاکە دابخەن!" }, { de: "Warten Sie bitte!", ku: "تکایە چاوەڕێ بکەن!" }, { de: "Iss dein Essen!", ku: "خواردنەکەت بخۆ!" }, { de: "Sei ruhig!", ku: "بێدەنگ بە!" }, { de: "Hören Sie zu!", ku: "گوێ بگرن!" } ] },
    { de: "Präpositionen: Ort & Zeit", ku: "ئامرازی شوێن و کات", icon: "⌖",
      exp: "شوێن: in (لە ناو)، an (لەسەر/لای)، auf (لەسەر)، neben (لاتەنیشت). کات: um (کاتژمێر)، am (ڕۆژ)، im (مانگ/وەرز).",
      ex: [ { de: "Ich bin in der Schule.", ku: "لە قوتابخانەم." }, { de: "Um 8 Uhr.", ku: "کاتژمێر ٨." }, { de: "Im Sommer.", ku: "لە هاویندا." }, { de: "Am Montag arbeite ich.", ku: "دووشەممە کار دەکەم." }, { de: "Das Bild ist an der Wand.", ku: "وێنەکە لەسەر دیوارەکەیە." }, { de: "Die Tasche ist auf dem Tisch.", ku: "جانتاکە لەسەر مێزەکەیە." } ] },
  ],
  A2: [
    { de: "Dativ", ku: "داتیڤ (بەرکاری ناڕاستەوخۆ)", icon: "→",
      exp: "داتیڤ بەرکاری ناڕاستەوخۆیە (بۆ کێ؟). ئارتیکڵ دەگۆڕێت: der→dem، die→der، das→dem، die(کۆ)→den+n.",
      ex: [ { de: "Ich gebe dem Kind ein Buch.", ku: "کتێبێک دەدەم بە منداڵەکە." }, { de: "Ich helfe der Frau.", ku: "یارمەتی ژنەکە دەدەم." }, { de: "Es gehört dem Mann.", ku: "هی پیاوەکەیە." }, { de: "Ich danke dir.", ku: "سوپاست دەکەم." }, { de: "Das Buch gehört mir.", ku: "کتێبەکە هی منە." }, { de: "Sie hilft den Kindern.", ku: "یارمەتی منداڵەکان دەدات." } ] },
    { de: "Wechselpräpositionen", ku: "ئامرازی دوولایەن", icon: "⇆",
      exp: "نۆ ئامراز (in, an, auf, über, unter, vor, hinter, neben, zwischen) هەم Akkusativ هەم Dativ. جووڵە→Akkusativ (wohin؟)، شوێن→Dativ (wo؟).",
      ex: [ { de: "Ich gehe in die Schule.", ku: "دەچمە قوتابخانە (جووڵە/Akk)." }, { de: "Ich bin in der Schule.", ku: "لە قوتابخانەم (شوێن/Dativ)." }, { de: "Das Buch liegt auf dem Tisch.", ku: "کتێبەکە لەسەر مێزەکەیە." }, { de: "Ich lege das Buch auf den Tisch.", ku: "کتێبەکە دەخەمە سەر مێزەکە." }, { de: "Die Katze ist unter dem Bett.", ku: "پشیلەکە لەژێر جێگاکەیە." }, { de: "Er hängt das Bild an die Wand.", ku: "وێنەکە بە دیوارەوە هەڵدەواسێت." } ] },
    { de: "Perfekt", ku: "کاتی ڕابردووی تەواو (Perfekt)", icon: "↩",
      exp: "haben/sein + Partizip II. زۆربەی کردار haben وەردەگرن؛ کرداری جووڵە و گۆڕان sein. Partizip II زۆرجار: ge...t یان ge...en.",
      ex: [ { de: "Ich habe gegessen.", ku: "خواردم." }, { de: "Wir haben gelernt.", ku: "فێربووین." }, { de: "Er ist gegangen.", ku: "ئەو ڕۆیشت." }, { de: "Sie hat ein Buch gekauft.", ku: "کتێبێکی کڕی." }, { de: "Ich bin nach Berlin gefahren.", ku: "چووم بۆ بەرلین." }, { de: "Hast du das gesehen?", ku: "ئەمەت بینی؟" } ] },
    { de: "Präteritum (sein, haben, Modalverben)", ku: "ڕابردووی سادە", icon: "↪",
      exp: "بۆ sein، haben و مۆداڵەکان لە قسەی ڕۆژانەشدا Präteritum بەکاردێت: war (بوو)، hatte (هەیبوو)، konnte (توانی)، musste (پێویست بوو).",
      ex: [ { de: "Ich war krank.", ku: "نەخۆش بووم." }, { de: "Sie hatte Zeit.", ku: "کاتی هەبوو." }, { de: "Wir konnten nicht kommen.", ku: "نەماندەتوانی بێین." }, { de: "Es war sehr kalt.", ku: "زۆر سارد بوو." }, { de: "Er musste arbeiten.", ku: "پێویست بوو کار بکات." }, { de: "Ich hatte keine Wahl.", ku: "هیچ هەڵبژاردنێکم نەبوو." } ] },
    { de: "Reflexive Verben", ku: "کرداری لێکدراوەی خۆ", icon: "↺",
      exp: "هەندێ کردار جێناوی خۆ (mich, dich, sich…) وەردەگرن. نموونە: sich freuen (دڵخۆشبوون)، sich waschen (خۆشتن).",
      ex: [ { de: "Ich freue mich.", ku: "دڵخۆشم." }, { de: "Er wäscht sich.", ku: "خۆی دەشوات." }, { de: "Wir treffen uns.", ku: "یەکتر دەبینین." }, { de: "Setz dich bitte.", ku: "تکایە دانیشە." }, { de: "Sie interessiert sich für Musik.", ku: "ئارەزووی مۆسیقا دەکات." }, { de: "Ich fühle mich gut.", ku: "هەست بە باشی دەکەم." } ] },
    { de: "Konjunktionen: und, oder, aber, denn, sondern", ku: "گرێدەرە سادەکان", icon: "&",
      exp: "ئەم گرێدەرانە ڕیزبەندی ناگۆڕن (کردار لە جێی ٢ دەمێنێتەوە): und (و)، oder (یان)، aber (بەڵام)، denn (چونکە)، sondern (بەڵکو).",
      ex: [ { de: "Ich lerne, denn es ist wichtig.", ku: "فێردەبم، چونکە گرنگە." }, { de: "Tee oder Kaffee?", ku: "چا یان قاوە؟" }, { de: "Nicht heute, sondern morgen.", ku: "نەک ئەمڕۆ، بەڵکو سبەینێ." }, { de: "Ich bin müde, aber glücklich.", ku: "ماندووم، بەڵام بەختەوەرم." }, { de: "Er kommt und sie geht.", ku: "ئەو دێت و ئەو دەڕوات." }, { de: "Ich bleibe, aber du gehst.", ku: "دەمێنمەوە، بەڵام تۆ دەڕۆیت." } ] },
    { de: "Nebensatz: weil, dass", ku: "ڕستەی لاوەکی (weil/dass)", icon: "⟜",
      exp: "دوای weil (چونکە) و dass (کە) کردار دەچێتە کۆتایی ڕستەی لاوەکی. ئەمە جیاوازییەکی گەورەیە لەگەڵ ڕستەی سادە.",
      ex: [ { de: "Ich bleibe, weil ich krank bin.", ku: "دەمێنمەوە، چونکە نەخۆشم." }, { de: "Ich weiß, dass du kommst.", ku: "دەزانم کە دێیت." }, { de: "Er sagt, dass es regnet.", ku: "دەڵێت کە باران دەبارێت." }, { de: "Ich lerne, weil ich es brauche.", ku: "فێردەبم، چونکە پێویستمە." }, { de: "Sie glaubt, dass es stimmt.", ku: "پێیوایە کە ڕاستە." }, { de: "Wir gehen, weil es spät ist.", ku: "دەڕۆین، چونکە درەنگە." } ] },
    { de: "Komparativ", ku: "بەراوردی (پلەی بەرز)", icon: "≷",
      exp: "بۆ بەراوردکردن: سیفەت + -er + als. نموونە: groß → größer als. هەندێ بێ ڕێک: gut → besser.",
      ex: [ { de: "Er ist größer als ich.", ku: "ئەو لە من گەورەترە." }, { de: "Heute ist es kälter.", ku: "ئەمڕۆ ساردترە." }, { de: "Das ist besser.", ku: "ئەمە باشترە." }, { de: "Sie ist jünger als er.", ku: "ئەو لە ئەو گەنجترە." }, { de: "Dieses Auto ist teurer.", ku: "ئەم ئۆتۆمبێلە گرانترە." }, { de: "Deutsch ist schwerer als Englisch.", ku: "ئەڵمانی لە ئینگلیزی قورسترە." } ] },
    { de: "Superlativ", ku: "بەرزترین پلە", icon: "★",
      exp: "بەرزترین پلە: am + سیفەت + -sten، یان der/die/das + -ste. نموونە: am größten (گەورەترین).",
      ex: [ { de: "Er ist am größten.", ku: "ئەو گەورەترینە." }, { de: "Das ist das beste Buch.", ku: "ئەمە باشترین کتێبە." }, { de: "Sie läuft am schnellsten.", ku: "ئەو خێراترین ڕادەکات." }, { de: "Das ist der höchste Berg.", ku: "ئەمە بەرزترین شاخە." }, { de: "Heute ist der kälteste Tag.", ku: "ئەمڕۆ ساردترین ڕۆژە." }, { de: "Du bist mein bester Freund.", ku: "تۆ باشترین هاوڕێمی." } ] },
    { de: "Genitiv (Einführung)", ku: "گەنیتیڤ (ناساندن)", icon: "'s",
      exp: "گەنیتیڤ خاوەندارێتی پیشان دەدات (هی کێ؟). ئارتیکڵ: des/eines (+s بۆ ناوی نێر/بێلایەن)، der (مێ).",
      ex: [ { de: "das Auto des Mannes", ku: "ئۆتۆمبێلی پیاوەکە" }, { de: "die Farbe der Blume", ku: "ڕەنگی گوڵەکە" }, { de: "der Titel des Buches", ku: "ناونیشانی کتێبەکە" }, { de: "das Haus meiner Eltern", ku: "خانووی دایک و باوکم" }, { de: "der Name des Kindes", ku: "ناوی منداڵەکە" }, { de: "die Tür des Hauses", ku: "دەرگای خانووەکە" } ] },
    { de: "Pronomen: Personal-, Possessiv-, Demonstrativ-", ku: "جۆرەکانی جێناو", icon: "⁂",
      exp: "Personalpronomen (er, ihn, ihm)، Possessivpronomen (meiner, deiner)، Demonstrativpronomen (dieser, jener) — بۆ ئاماژەکردن و دووبارەنەکردنەوەی ناو.",
      ex: [ { de: "Ich sehe ihn.", ku: "ئەو دەبینم." }, { de: "Dieser Stuhl ist frei.", ku: "ئەم کورسییە بەتاڵە." }, { de: "Das ist meiner.", ku: "ئەمە هی منە." }, { de: "Ich gebe ihm das Buch.", ku: "کتێبەکەی دەدەمێ." }, { de: "Diese Tasche ist schön.", ku: "ئەم جانتایە جوانە." }, { de: "Welches möchtest du? Dieses.", ku: "کامەت دەوێت؟ ئەمە." } ] },
    { de: "Relativsätze (basic)", ku: "ڕستەی پەیوەندیدار (سادە)", icon: "⌐",
      exp: "بۆ زانیاری زیاتر دەربارەی ناو. جێناوی پەیوەندیدار (der, die, das) لەگەڵ ڕەگەزی ناوەکە دەگونجێت و کردار دەچێتە کۆتایی.",
      ex: [ { de: "Der Mann, der dort steht, ...", ku: "ئەو پیاوەی لەوێ ڕاوەستاوە، ..." }, { de: "Das Buch, das ich lese, ...", ku: "ئەو کتێبەی دەیخوێنمەوە، ..." }, { de: "Die Frau, die singt, ...", ku: "ئەو ژنەی گۆرانی دەڵێت، ..." }, { de: "Das Auto, das rot ist, ...", ku: "ئەو ئۆتۆمبێلەی سوورە، ..." }, { de: "Der Freund, der hilft, ...", ku: "ئەو هاوڕێیەی یارمەتی دەدات، ..." }, { de: "Die Stadt, die schön ist, ...", ku: "ئەو شارەی جوانە، ..." } ] },
  ],
  B1: [
    { de: "Plusquamperfekt", ku: "ڕابردووی دوور", icon: "⟲",
      exp: "بۆ کارێک کە پێش کارێکی تری ڕابردوو ڕوویداوە. hatte/war + Partizip II. زۆرجار لەگەڵ nachdem بەکاردێت.",
      ex: [ { de: "Ich hatte schon gegessen.", ku: "پێشتر خواردبووم." }, { de: "Er war schon gegangen.", ku: "ئەو پێشتر ڕۆیشتبوو." }, { de: "Nachdem ich gegessen hatte, ...", ku: "دوای ئەوەی خواردبووم، ..." }, { de: "Sie hatte den Brief geschrieben.", ku: "نامەکەی نووسیبوو." }, { de: "Wir waren schon angekommen.", ku: "پێشتر گەیشتبووین." }, { de: "Hattest du das gewusst?", ku: "ئەمەت زانیبوو؟" } ] },
    { de: "Futur I", ku: "داهاتوو (Futur I)", icon: "⇉",
      exp: "بۆ داهاتوو و گریمانە. werden + کرداری بنەڕەتی (لە کۆتایی). هەرچەندە زۆرجار کاتی ئێستا بۆ داهاتوو بەکاردێت.",
      ex: [ { de: "Ich werde Deutsch lernen.", ku: "ئەڵمانی فێردەبم (داهاتوو)." }, { de: "Es wird regnen.", ku: "باران دەبارێت." }, { de: "Wir werden sehen.", ku: "دەبینین." }, { de: "Sie wird Ärztin werden.", ku: "دەبێتە پزیشک." }, { de: "Ich werde dich anrufen.", ku: "پەیوەندیت پێوە دەکەم." }, { de: "Morgen wird es kalt sein.", ku: "سبەینێ سارد دەبێت." } ] },
    { de: "Relativsätze (detail)", ku: "ڕستەی پەیوەندیدار (ورد)", icon: "⌐",
      exp: "جێناوی پەیوەندیدار لە هەموو کەیسەکاندا دەگۆڕێت: Nominativ (der)، Akkusativ (den)، Dativ (dem)، Genitiv (dessen/deren).",
      ex: [ { de: "Der Mann, dem ich helfe, ...", ku: "ئەو پیاوەی یارمەتی دەدەم، ... (Dativ)" }, { de: "Das Kind, dessen Buch ...", ku: "ئەو منداڵەی کتێبەکەی ... (Genitiv)" }, { de: "Die Stadt, in der ich wohne, ...", ku: "ئەو شارەی تێیدا دەژیم، ..." }, { de: "Der Film, den ich gesehen habe, ...", ku: "ئەو فیلمەی بینیم، ..." }, { de: "Die Leute, mit denen ich arbeite, ...", ku: "ئەو کەسانەی لەگەڵیان کار دەکەم، ..." }, { de: "Das Auto, das er kaufte, ...", ku: "ئەو ئۆتۆمبێلەی کڕی، ..." } ] },
    { de: "Konjunktiv II", ku: "کۆنیونکتیڤ II (مەرجی)", icon: "≈",
      exp: "بۆ خواست، گریمانە و ڕێزگرتن. würde + Infinitiv، یان hätte/wäre/könnte. زۆر بەکاردێت بۆ نەرمی.",
      ex: [ { de: "Ich würde gern kommen.", ku: "حەز دەکەم بێم." }, { de: "Ich hätte eine Frage.", ku: "پرسیارێکم هەبووایە." }, { de: "Könnten Sie mir helfen?", ku: "دەتوانن یارمەتیم بدەن؟" }, { de: "Wenn ich reich wäre, ...", ku: "ئەگەر دەوڵەمەند بوومایە، ..." }, { de: "Das wäre toll.", ku: "ئەمە نایاب دەبوو." }, { de: "Ich würde lieber bleiben.", ku: "پێم باشترە بمێنمەوە." } ] },
    { de: "Passiv (Vorgangspassiv)", ku: "ڕستەی چالاک‌نەبوو", icon: "⊡",
      exp: "کاتێک کردار گرنگترە لە کردارکەر. werden + Partizip II. نموونە: «Das Haus wird gebaut» (خانووەکە دروست دەکرێت).",
      ex: [ { de: "Das Auto wird repariert.", ku: "ئۆتۆمبێلەکە چاک دەکرێتەوە." }, { de: "Die Tür wird geöffnet.", ku: "دەرگاکە دەکرێتەوە." }, { de: "Deutsch wird hier gesprochen.", ku: "لێرە ئەڵمانی قسە دەکرێت." }, { de: "Das Buch wird gelesen.", ku: "کتێبەکە دەخوێنرێتەوە." }, { de: "Die Arbeit wird gemacht.", ku: "کارەکە دەکرێت." }, { de: "Das Essen wird gekocht.", ku: "خواردنەکە لێدەنرێت." } ] },
    { de: "Infinitiv mit zu", ku: "ئینفینیتیڤ لەگەڵ zu", icon: "zu",
      exp: "دوای هەندێ کردار/ناو/سیفەت، کرداری دووەم بە «zu + Infinitiv» دێت. نموونە: «Ich versuche zu lernen».",
      ex: [ { de: "Ich versuche zu lernen.", ku: "هەوڵ دەدەم فێربم." }, { de: "Es ist wichtig zu üben.", ku: "گرنگە مەشق بکەیت." }, { de: "Ich habe vergessen anzurufen.", ku: "بیرم چووە پەیوەندی بکەم." }, { de: "Ich hoffe dich zu sehen.", ku: "هیوادارم بتبینم." }, { de: "Es macht Spaß zu reisen.", ku: "گەشتکردن خۆشە." }, { de: "Ich habe keine Zeit zu warten.", ku: "کاتم نییە چاوەڕێ بکەم." } ] },
    { de: "um…zu / ohne…zu / statt…zu", ku: "um/ohne/statt + zu", icon: "⊕",
      exp: "um…zu (بۆ ئەوەی)، ohne…zu (بەبێ ئەوەی)، statt…zu (لەبری ئەوەی). هەردوو ڕستە یەک کردارکەریان هەیە.",
      ex: [ { de: "Ich lerne, um zu bestehen.", ku: "فێردەبم بۆ ئەوەی سەربکەوم." }, { de: "Er geht, ohne zu grüßen.", ku: "دەڕوات بەبێ ئەوەی سڵاو بکات." }, { de: "Statt zu schlafen, lese ich.", ku: "لەبری خەوتن، دەخوێنمەوە." }, { de: "Ich spare, um ein Auto zu kaufen.", ku: "پارە کۆدەکەمەوە بۆ کڕینی ئۆتۆمبێل." }, { de: "Sie ging, ohne etwas zu sagen.", ku: "ڕۆیشت بەبێ ئەوەی شتێک بڵێت." }, { de: "Statt zu arbeiten, spielt er.", ku: "لەبری کارکردن، یاری دەکات." } ] },
    { de: "Adjektivdeklination", ku: "ڕەوانبێژی سیفەت", icon: "✦",
      exp: "کاتێک سیفەت پێش ناو دێت، کۆتاییەکەی دەگۆڕێت بەپێی ئارتیکڵ، ڕەگەز و کەیس. دوای der/die/das زۆرجار -e یان -en.",
      ex: [ { de: "der rote Apfel", ku: "سێوە سوورەکە" }, { de: "ein roter Apfel", ku: "سێوێکی سوور" }, { de: "mit dem roten Auto", ku: "بە ئۆتۆمبێلە سوورەکە" }, { de: "die schöne Stadt", ku: "شارە جوانەکە" }, { de: "ein gutes Buch", ku: "کتێبێکی باش" }, { de: "kaltes Wasser", ku: "ئاوی سارد" } ] },
    { de: "Genitiv", ku: "گەنیتیڤ (تەواو)", icon: "'s",
      exp: "خاوەندارێتی و پەیوەندی. ناوی نێر/بێلایەن +s دەگرن. هەروەها لەگەڵ هەندێ ئامرازدا بەکاردێت (wegen, trotz).",
      ex: [ { de: "das Haus meines Vaters", ku: "خانووی باوکم" }, { de: "wegen des Wetters", ku: "بەهۆی کەش‌وهەواوە" }, { de: "trotz des Regens", ku: "سەرەڕای بارانەکە" }, { de: "die Meinung der Leute", ku: "بۆچوونی خەڵک" }, { de: "während des Tages", ku: "لە ماوەی ڕۆژدا" }, { de: "der Anfang des Films", ku: "سەرەتای فیلمەکە" } ] },
    { de: "Indirekte Fragen", ku: "پرسیاری ناڕاستەوخۆ", icon: "?",
      exp: "پرسیار دەخرێتە ناو ڕستەیەکەوە؛ کردار دەچێتە کۆتایی. لەگەڵ ob (ئایا) بۆ پرسیاری بەڵێ/نەخێر.",
      ex: [ { de: "Weißt du, wo er ist?", ku: "دەزانیت لەکوێیە؟" }, { de: "Ich frage, ob es regnet.", ku: "دەپرسم ئایا باران دەبارێت." }, { de: "Sag mir, wann du kommst.", ku: "پێم بڵێ کەی دێیت." }, { de: "Ich weiß nicht, was das ist.", ku: "نازانم ئەمە چییە." }, { de: "Kannst du mir sagen, wie es geht?", ku: "دەتوانیت پێم بڵێیت چۆنە؟" }, { de: "Er fragt, warum du gehst.", ku: "دەپرسێت بۆچی دەڕۆیت." } ] },
    { de: "Konjunktionen: obwohl, wenn, als, während…", ku: "گرێدەرە لاوەکییەکان", icon: "⟜",
      exp: "obwohl (هەرچەندە)، wenn (ئەگەر/کاتێک)، als (کاتێک-ڕابردوو)، während (لە کاتێکدا)، bevor (پێش)، nachdem (دوای)، seitdem (لەو کاتەوە). کردار دەچێتە کۆتایی.",
      ex: [ { de: "Als ich klein war, ...", ku: "کاتێک بچووک بووم، ..." }, { de: "Bevor ich gehe, esse ich.", ku: "پێش ئەوەی بڕۆم، دەخۆم." }, { de: "Seitdem er hier ist, ...", ku: "لەو کاتەوەی لێرەیە، ..." }, { de: "Obwohl es regnet, gehe ich.", ku: "هەرچەندە باران دەبارێت، دەڕۆم." }, { de: "Wenn ich Zeit habe, komme ich.", ku: "ئەگەر کاتم هەبێت، دێم." }, { de: "Während sie kocht, lese ich.", ku: "لە کاتێکدا ئەو خواردن لێدەنێ، دەخوێنمەوە." } ] },
    { de: "Präpositionen mit Genitiv", ku: "ئامراز لەگەڵ گەنیتیڤ", icon: "⌖",
      exp: "هەندێ ئامراز Genitiv وەردەگرن: wegen (بەهۆی)، trotz (سەرەڕای)، während (لە ماوەی)، (an)statt (لەبری).",
      ex: [ { de: "während des Kurses", ku: "لە ماوەی خولەکەدا" }, { de: "wegen des Problems", ku: "بەهۆی کێشەکەوە" }, { de: "trotz der Kälte", ku: "سەرەڕای ساردی" }, { de: "statt des Kaffees", ku: "لەبری قاوەکە" }, { de: "innerhalb einer Woche", ku: "لە ماوەی هەفتەیەکدا" }, { de: "außerhalb der Stadt", ku: "لە دەرەوەی شارەکە" } ] },
  ],
  B2: [
    { de: "Passiv (alle Formen)", ku: "ڕستەی چالاک‌نەبوو (هەموو فۆرمەکان)", icon: "⊡",
      exp: "Passiv لە هەموو کاتەکاندا: ئێستا (wird gemacht)، ڕابردوو (wurde gemacht)، Perfekt (ist gemacht worden). «worden» نیشانەی Passivی ڕابردووە.",
      ex: [ { de: "Das Haus wurde gebaut.", ku: "خانووەکە دروستکرا." }, { de: "Es ist verkauft worden.", ku: "فرۆشراوە." }, { de: "Das wird gemacht werden.", ku: "ئەمە دەکرێت (داهاتوو)." }, { de: "Der Brief wurde geschrieben.", ku: "نامەکە نووسرا." }, { de: "Die Stadt ist zerstört worden.", ku: "شارەکە وێران کراوە." }, { de: "Die Regeln werden erklärt.", ku: "یاساکان ڕوون دەکرێنەوە." } ] },
    { de: "Zustandspassiv", ku: "Passivی دۆخ", icon: "▣",
      exp: "ئەنجامی کارێک پیشان دەدات، نەک کردارەکە. sein + Partizip II. نموونە: «Die Tür ist geschlossen» (دەرگاکە داخراوە — دۆخ).",
      ex: [ { de: "Das Geschäft ist geschlossen.", ku: "دوکانەکە داخراوە." }, { de: "Der Brief ist geschrieben.", ku: "نامەکە نووسراوە." }, { de: "Alles ist vorbereitet.", ku: "هەمووشت ئامادەکراوە." }, { de: "Das Fenster ist geöffnet.", ku: "پەنجەرەکە کراوەیە." }, { de: "Die Arbeit ist erledigt.", ku: "کارەکە تەواوکراوە." }, { de: "Das Problem ist gelöst.", ku: "کێشەکە چارەسەرکراوە." } ] },
    { de: "Passiv mit Modalverben", ku: "Passiv لەگەڵ مۆداڵ", icon: "⊞",
      exp: "مۆداڵ + Partizip II + werden. نموونە: «Das muss gemacht werden» (ئەمە دەبێت بکرێت).",
      ex: [ { de: "Das muss repariert werden.", ku: "ئەمە دەبێت چاک بکرێتەوە." }, { de: "Es kann gemacht werden.", ku: "دەکرێت بکرێت." }, { de: "Es sollte vermieden werden.", ku: "دەبێت خۆی لێ بپارێزرێت." }, { de: "Das darf nicht gesagt werden.", ku: "ئەمە نابێت بگوترێت." }, { de: "Die Regeln müssen befolgt werden.", ku: "دەبێت یاساکان پەیڕەو بکرێن." }, { de: "Es kann nicht geändert werden.", ku: "ناتوانرێت بگۆڕدرێت." } ] },
    { de: "Konjunktiv I (indirekte Rede)", ku: "کۆنیونکتیڤ I (قسەی ناڕاستەوخۆ)", icon: "❝",
      exp: "بۆ گێڕانەوەی قسەی کەسانی تر (بەتایبەت لە ڕۆژنامەدا). نموونە: er sei، er habe، er komme.",
      ex: [ { de: "Er sagt, er sei krank.", ku: "دەڵێت کە نەخۆشە." }, { de: "Sie meint, sie habe Zeit.", ku: "پێیوایە کاتی هەیە." }, { de: "Man sagt, es komme bald.", ku: "دەگوترێت بەم زووانە دێت." }, { de: "Er behauptet, er wisse nichts.", ku: "بانگەشە دەکات هیچ نازانێت." }, { de: "Sie sagte, sie werde kommen.", ku: "گوتی دێت." }, { de: "Der Minister sagt, er habe recht.", ku: "وەزیر دەڵێت ڕاستە." } ] },
    { de: "Konjunktiv II (fortgeschritten)", ku: "کۆنیونکتیڤ II (پێشکەوتوو)", icon: "≈",
      exp: "بۆ گریمانەی ڕابردوو و پەشیمانی. hätte/wäre + Partizip II. نموونە: «Ich hätte das gemacht» (ئەمەم بکردایە).",
      ex: [ { de: "Ich hätte dir geholfen.", ku: "یارمەتیم بدایایت." }, { de: "Wenn ich Zeit gehabt hätte, ...", ku: "ئەگەر کاتم هەبووایە، ..." }, { de: "Das wäre besser gewesen.", ku: "ئەمە باشتر دەبوو." }, { de: "Ich hätte das nicht gesagt.", ku: "ئەمەم نەدەگوت." }, { de: "Wärst du gekommen, ...", ku: "ئەگەر هاتبووایت، ..." }, { de: "Sie hätte gewinnen können.", ku: "دەیتوانی بباتەوە." } ] },
    { de: "Nominalisierung", ku: "ناوکردن (نۆمیناڵایزەیشن)", icon: "N",
      exp: "گۆڕینی کردار/ڕستە بۆ ناو — تایبەتمەندی ئەڵمانی فەرمی و ئەکادیمی. نموونە: «beim Lernen» = «während man lernt».",
      ex: [ { de: "das Lernen", ku: "فێربوون (وەک ناو)" }, { de: "beim Lesen", ku: "لە کاتی خوێندنەوەدا" }, { de: "nach der Ankunft", ku: "دوای گەیشتن" }, { de: "vor dem Schlafen", ku: "پێش خەوتن" }, { de: "das Rauchen ist verboten", ku: "جگەرەکێشان قەدەغەیە" }, { de: "durch das Üben", ku: "بەهۆی مەشقکردنەوە" } ] },
    { de: "Partizip I", ku: "پارتیسیپی یەکەم", icon: "Ⅰ",
      exp: "Infinitiv + d. وەک سیفەت کاری ئەنجامدراو/بەردەوام پیشان دەدات. نموونە: spielend (یاریکەر، لە کاتی یاریدا).",
      ex: [ { de: "das spielende Kind", ku: "منداڵە یاریکەرەکە" }, { de: "die schlafende Katze", ku: "پشیلە خەوتووەکە" }, { de: "lachend", ku: "بەپێکەنینەوە" }, { de: "die singende Frau", ku: "ژنە گۆرانیبێژەکە" }, { de: "ein weinendes Baby", ku: "کۆرپەیەکی گریان" }, { de: "die kommende Woche", ku: "هەفتەی داهاتوو" } ] },
    { de: "Partizip II als Adjektiv", ku: "پارتیسیپی دووەم وەک سیفەت", icon: "Ⅱ",
      exp: "Partizip II دەتوانێت وەک سیفەت بەکاربێت و ئەنجامێک پیشان بدات. نموونە: «das gekochte Essen» (خواردنە لێنراوەکە).",
      ex: [ { de: "die geöffnete Tür", ku: "دەرگا کراوەکە" }, { de: "ein gebrauchtes Auto", ku: "ئۆتۆمبێلێکی بەکارهاتوو" }, { de: "das geschriebene Wort", ku: "وشە نووسراوەکە" }, { de: "die gekochte Suppe", ku: "شۆربا لێنراوەکە" }, { de: "ein verlorenes Spiel", ku: "یارییەکی دۆڕاو" }, { de: "die reparierte Uhr", ku: "کاتژمێرە چاککراوەکە" } ] },
    { de: "Erweiterte Relativsätze", ku: "ڕستەی پەیوەندیداری فراوان", icon: "⌐",
      exp: "ڕستەی پەیوەندیدار لەگەڵ ئامراز: «in dem»، «mit der»، «über den». هەروەها was/wo بۆ ئاماژەی گشتی.",
      ex: [ { de: "der Tag, an dem wir ...", ku: "ئەو ڕۆژەی کە ئێمە ..." }, { de: "das Thema, über das ...", ku: "ئەو بابەتەی دەربارەی ..." }, { de: "alles, was du brauchst", ku: "هەرچی پێویستتە" }, { de: "die Firma, bei der ich arbeite, ...", ku: "ئەو کۆمپانیایەی تێیدا کار دەکەم، ..." }, { de: "der Grund, aus dem ...", ku: "ئەو هۆکارەی کە ..." }, { de: "das, was wichtig ist, ...", ku: "ئەوەی گرنگە، ..." } ] },
    { de: "Futur II", ku: "داهاتووی دووەم", icon: "⇉",
      exp: "بۆ کارێک کە لە داهاتوودا تەواو دەبێت. werden + Partizip II + haben/sein. نموونە: «Ich werde es gemacht haben».",
      ex: [ { de: "Bis morgen werde ich es beendet haben.", ku: "تا سبەینێ تەوای دەکەم." }, { de: "Er wird angekommen sein.", ku: "ئەو گەیشتووی دەبێت." }, { de: "Sie wird es vergessen haben.", ku: "لەوانەیە بیری چووبێت." }, { de: "Bis dahin werden wir fertig sein.", ku: "تا ئەو کاتە تەواو دەبین." }, { de: "Er wird das gelesen haben.", ku: "ئەو ئەمەی خوێندووەتەوە (گریمانە)." }, { de: "Sie werden gegangen sein.", ku: "ئەوان ڕۆیشتوون (گریمانە)." } ] },
    { de: "Kausale, konsekutive, konzessive Sätze", ku: "ڕستەی هۆکاری، ئەنجامی، ڕێگری", icon: "⟜",
      exp: "هۆکاری (da، weil)، ئەنجامی (sodass، so…dass)، ڕێگری/کۆنسێسیڤ (obwohl، obgleich). بۆ پەیوەندی لۆژیکی نێوان ڕستەکان.",
      ex: [ { de: "Da es regnet, bleiben wir.", ku: "لەبەر ئەوەی باران دەبارێت، دەمێنینەوە." }, { de: "Es war so kalt, dass ...", ku: "ئەوەندە سارد بوو کە ..." }, { de: "Obwohl er müde ist, arbeitet er.", ku: "هەرچەندە ماندووە، کار دەکات." }, { de: "Er lernte viel, sodass er bestand.", ku: "زۆر خوێندی، بۆیە سەرکەوت." }, { de: "Weil sie krank war, blieb sie.", ku: "چونکە نەخۆش بوو، مایەوە." }, { de: "Trotzdem gab er nicht auf.", ku: "لەگەڵ ئەوەشدا واز نەهێنا." } ] },
    { de: "Funktionsverbgefüge", ku: "گرێدانی ناو-کردار", icon: "⚙",
      exp: "بەستەی ناو+کردار کە وەک یەک واتا کاردەکەن، زۆر لە ئەڵمانی فەرمیدا. نموونە: «eine Entscheidung treffen» (بڕیاردان).",
      ex: [ { de: "eine Entscheidung treffen", ku: "بڕیاردان" }, { de: "in Frage stellen", ku: "گومان لێکردن" }, { de: "zur Verfügung stehen", ku: "بەردەست بوون" }, { de: "eine Rolle spielen", ku: "ڕۆڵ گێڕان" }, { de: "Rücksicht nehmen", ku: "ڕەچاوکردن" }, { de: "in Anspruch nehmen", ku: "سوود وەرگرتن لە" } ] },
    { de: "Verben/Adjektive/Nomen mit Präpositionen", ku: "وشە لەگەڵ ئامرازی جێگیر", icon: "⌖",
      exp: "زۆر کردار، سیفەت و ناو ئامرازێکی جێگیریان هەیە کە دەبێت لەبەری بکەیت. نموونە: warten auf (چاوەڕوانی)، stolz auf (شانازی بە).",
      ex: [ { de: "Ich warte auf den Bus.", ku: "چاوەڕوانی پاس دەکەم." }, { de: "Ich denke an dich.", ku: "بیرت دەکەمەوە." }, { de: "stolz auf etwas sein", ku: "شانازی بە شتێک کردن" }, { de: "Ich freue mich auf das Wochenende.", ku: "بە کۆتایی هەفتە دڵخۆشم." }, { de: "Er interessiert sich für Politik.", ku: "ئارەزووی سیاسەت دەکات." }, { de: "die Angst vor dem Versagen", ku: "ترس لە شکستهێنان" } ] },
    { de: "Wortbildung: Präfixe & Suffixe", ku: "دروستکردنی وشە: پێشگر و پاشگر", icon: "✚",
      exp: "وشەی نوێ بە پێشگر (un-، ver-، be-) و پاشگر (-ung، -heit، -keit، -lich) دروست دەکرێن. ئەمە دەستەواژەکەت زۆر فراوان دەکات.",
      ex: [ { de: "glücklich → das Glück", ku: "بەختەوەر → بەختەوەری" }, { de: "frei → die Freiheit", ku: "ئازاد → ئازادی" }, { de: "möglich → unmöglich", ku: "گونجاو → ناگونجاو" }, { de: "arbeiten → die Arbeit", ku: "کارکردن → کار" }, { de: "krank → die Krankheit", ku: "نەخۆش → نەخۆشی" }, { de: "lesen → der Leser", ku: "خوێندنەوە → خوێنەر" } ] },
  ],
};
// ── بانکی کردار / Verb bank (50 هەر ئاست) ─────────────────────────
const VERBS = {
  A1: [
    { de: "sein", ku: "بوون", ex: "Ich bin zu Hause.", exku: "لە ماڵەوەم." },
    { de: "haben", ku: "هەبوون", ex: "Ich habe ein Auto.", exku: "ئۆتۆمبێلێکم هەیە." },
    { de: "machen", ku: "کردن", ex: "Was machst du?", exku: "چی دەکەیت؟" },
    { de: "gehen", ku: "ڕۆیشتن", ex: "Ich gehe nach Hause.", exku: "دەچمە ماڵەوە." },
    { de: "kommen", ku: "هاتن", ex: "Komm bitte her.", exku: "تکایە وەرە ئێرە." },
    { de: "essen", ku: "خواردن", ex: "Ich esse einen Apfel.", exku: "سێوێک دەخۆم." },
    { de: "trinken", ku: "خواردنەوە", ex: "Sie trinkt Wasser.", exku: "ئاو دەخواتەوە." },
    { de: "sehen", ku: "بینین", ex: "Ich sehe einen Vogel.", exku: "باڵندەیەک دەبینم." },
    { de: "sprechen", ku: "قسەکردن", ex: "Sprichst du Deutsch?", exku: "ئەڵمانی قسە دەکەیت؟" },
    { de: "lesen", ku: "خوێندنەوە", ex: "Er liest ein Buch.", exku: "کتێبێک دەخوێنێتەوە." },
    { de: "schreiben", ku: "نووسین", ex: "Ich schreibe einen Brief.", exku: "نامەیەک دەنووسم." },
    { de: "lernen", ku: "فێربوون", ex: "Wir lernen Deutsch.", exku: "ئەڵمانی فێردەبین." },
    { de: "arbeiten", ku: "کارکردن", ex: "Sie arbeitet viel.", exku: "زۆر کار دەکات." },
    { de: "spielen", ku: "یاریکردن", ex: "Die Kinder spielen.", exku: "منداڵەکان یاری دەکەن." },
    { de: "schlafen", ku: "خەوتن", ex: "Das Baby schläft.", exku: "کۆرپەکە خەوتووە." },
    { de: "wohnen", ku: "نیشتەجێبوون", ex: "Ich wohne in Bochum.", exku: "لە بۆخوم نیشتەجێم." },
    { de: "kaufen", ku: "کڕین", ex: "Ich kaufe Brot.", exku: "نان دەکڕم." },
    { de: "fahren", ku: "لێخوڕین / ڕۆیشتن", ex: "Wir fahren nach Berlin.", exku: "دەچینە بەرلین." },
    { de: "lieben", ku: "خۆشویستن", ex: "Ich liebe meine Familie.", exku: "خێزانەکەم خۆش دەوێت." },
    { de: "verstehen", ku: "تێگەیشتن", ex: "Ich verstehe dich.", exku: "لێت دەگەم." },
    { de: "heißen", ku: "ناوبوون", ex: "Wie heißt du?", exku: "ناوت چییە؟" },
    { de: "kochen", ku: "خواردن لێنان", ex: "Meine Mutter kocht gut.", exku: "دایکم باش خواردن لێدەنێ." },
    { de: "hören", ku: "بیستن", ex: "Ich höre Musik.", exku: "گوێ لە مۆسیقا دەگرم." },
    { de: "sagen", ku: "گوتن", ex: "Was sagst du?", exku: "چی دەڵێیت؟" },
    { de: "fragen", ku: "پرسین", ex: "Ich frage den Lehrer.", exku: "پرسیار لە مامۆستا دەکەم." },
    { de: "antworten", ku: "وەڵامدانەوە", ex: "Bitte antworte mir.", exku: "تکایە وەڵامم بدەرەوە." },
    { de: "geben", ku: "دان", ex: "Gib mir das Buch.", exku: "کتێبەکەم بدەرێ." },
    { de: "nehmen", ku: "وەرگرتن", ex: "Ich nehme einen Tee.", exku: "چایەک وەردەگرم." },
    { de: "finden", ku: "دۆزینەوە", ex: "Ich finde den Schlüssel nicht.", exku: "کلیلەکە نادۆزمەوە." },
    { de: "suchen", ku: "گەڕان", ex: "Ich suche meine Tasche.", exku: "بەدوای جانتاکەمدا دەگەڕێم." },
    { de: "öffnen", ku: "کردنەوە", ex: "Öffne das Fenster.", exku: "پەنجەرەکە بکەرەوە." },
    { de: "schließen", ku: "داخستن", ex: "Schließ die Tür.", exku: "دەرگاکە دابخە." },
    { de: "warten", ku: "چاوەڕوانکردن", ex: "Ich warte auf dich.", exku: "چاوەڕوانت دەکەم." },
    { de: "brauchen", ku: "پێویستیبوون", ex: "Ich brauche Hilfe.", exku: "پێویستیم بە یارمەتییە." },
    { de: "helfen", ku: "یارمەتیدان", ex: "Kannst du mir helfen?", exku: "دەتوانی یارمەتیم بدەیت؟" },
    { de: "zeigen", ku: "پیشاندان", ex: "Zeig mir das Foto.", exku: "وێنەکەم پیشان بدە." },
    { de: "bringen", ku: "هێنان", ex: "Bring mir Wasser.", exku: "ئاومم بۆ بهێنە." },
    { de: "tragen", ku: "هەڵگرتن", ex: "Er trägt eine Tasche.", exku: "جانتایەک هەڵدەگرێت." },
    { de: "laufen", ku: "ڕاکردن", ex: "Ich laufe schnell.", exku: "خێرا ڕادەکەم." },
    { de: "stehen", ku: "ڕاوەستان", ex: "Ich stehe vor der Tür.", exku: "لەبەردەم دەرگاکە ڕاوەستاوم." },
    { de: "sitzen", ku: "دانیشتن", ex: "Ich sitze am Tisch.", exku: "لەسەر مێزەکە دانیشتووم." },
    { de: "wissen", ku: "زانین", ex: "Ich weiß die Antwort.", exku: "وەڵامەکە دەزانم." },
    { de: "kennen", ku: "ناسین", ex: "Ich kenne ihn.", exku: "ئەو دەناسم." },
    { de: "denken", ku: "بیرکردنەوە", ex: "Ich denke an dich.", exku: "بیرت دەکەمەوە." },
    { de: "glauben", ku: "باوەڕکردن", ex: "Ich glaube dir.", exku: "باوەڕت پێدەکەم." },
    { de: "bezahlen", ku: "پارەدان", ex: "Ich bezahle die Rechnung.", exku: "پسوولەکە دەدەم." },
    { de: "kosten", ku: "نرخبوون", ex: "Was kostet das?", exku: "ئەمە چەند دەکات؟" },
    { de: "feiern", ku: "ئاهەنگگێڕان", ex: "Wir feiern heute.", exku: "ئەمڕۆ ئاهەنگ دەگێڕین." },
    { de: "singen", ku: "گۆرانیگوتن", ex: "Sie singt schön.", exku: "بە جوانی گۆرانی دەڵێت." },
    { de: "tanzen", ku: "سەماکردن", ex: "Wir tanzen gern.", exku: "حەز دەکەین سەما بکەین." },
  ],
  A2: [
    { de: "aufstehen", ku: "هەستان", ex: "Ich stehe früh auf.", exku: "زوو هەڵدەستم." },
    { de: "anrufen", ku: "پەیوەندیکردن", ex: "Ich rufe dich an.", exku: "پەیوەندیت پێوە دەکەم." },
    { de: "einkaufen", ku: "بازاڕکردن", ex: "Ich kaufe im Markt ein.", exku: "لە بازاڕ بازاڕ دەکەم." },
    { de: "fernsehen", ku: "تەلەفزیۆن سەیرکردن", ex: "Abends sehe ich fern.", exku: "ئێوارە تەلەفزیۆن سەیر دەکەم." },
    { de: "mitkommen", ku: "بەیەکەوەهاتن", ex: "Kommst du mit?", exku: "لەگەڵم دێیت؟" },
    { de: "ankommen", ku: "گەیشتن", ex: "Der Zug kommt an.", exku: "شەمەندەفەرەکە دەگات." },
    { de: "abfahren", ku: "بەڕێکەوتن", ex: "Der Bus fährt ab.", exku: "پاسەکە بەڕێدەکەوێت." },
    { de: "vorbereiten", ku: "ئامادەکردن", ex: "Ich bereite das Essen vor.", exku: "خواردنەکە ئامادە دەکەم." },
    { de: "treffen", ku: "بینین / دیداری", ex: "Ich treffe meinen Freund.", exku: "هاوڕێکەم دەبینم." },
    { de: "besuchen", ku: "سەردانکردن", ex: "Ich besuche meine Oma.", exku: "سەردانی داپیرم دەکەم." },
    { de: "bleiben", ku: "مانەوە", ex: "Ich bleibe hier.", exku: "لێرە دەمێنمەوە." },
    { de: "beginnen", ku: "دەستپێکردن", ex: "Der Kurs beginnt jetzt.", exku: "خولەکە ئێستا دەست پێدەکات." },
    { de: "enden", ku: "کۆتاییهاتن", ex: "Der Film endet spät.", exku: "فیلمەکە درەنگ کۆتایی دێت." },
    { de: "reisen", ku: "گەشتکردن", ex: "Ich reise nach Italien.", exku: "بۆ ئیتاڵیا گەشت دەکەم." },
    { de: "verkaufen", ku: "فرۆشتن", ex: "Er verkauft sein Auto.", exku: "ئۆتۆمبێلەکەی دەفرۆشێت." },
    { de: "wiederholen", ku: "دووبارەکردنەوە", ex: "Wiederhole bitte den Satz.", exku: "تکایە ڕستەکە دووبارە بکەرەوە." },
    { de: "erklären", ku: "ڕوونکردنەوە", ex: "Der Lehrer erklärt die Regel.", exku: "مامۆستا یاساکە ڕوون دەکاتەوە." },
    { de: "vergessen", ku: "لەبیرکردن", ex: "Ich habe es vergessen.", exku: "بیرم چووە." },
    { de: "erinnern", ku: "بیرهێنانەوە", ex: "Ich erinnere mich daran.", exku: "بیری دەکەمەوە." },
    { de: "verlieren", ku: "ونکردن", ex: "Ich habe meinen Schlüssel verloren.", exku: "کلیلەکەم ون کرد." },
    { de: "gewinnen", ku: "بردنەوە", ex: "Unser Team gewinnt.", exku: "تیمەکەمان دەباتەوە." },
    { de: "bestellen", ku: "داواکردن (خواردن)", ex: "Ich bestelle eine Pizza.", exku: "پیتزایەک داوا دەکەم." },
    { de: "schmecken", ku: "تامبوون", ex: "Das Essen schmeckt gut.", exku: "خواردنەکە تامی خۆشە." },
    { de: "gefallen", ku: "بەدڵبوون", ex: "Das Buch gefällt mir.", exku: "کتێبەکە بەدڵمە." },
    { de: "wünschen", ku: "خواستن", ex: "Ich wünsche dir Glück.", exku: "بەختت بۆ دەخوازم." },
    { de: "schenken", ku: "دیاریدان", ex: "Ich schenke ihr Blumen.", exku: "گوڵی پێ دەبەخشم." },
    { de: "einladen", ku: "بانگهێشتکردن", ex: "Ich lade dich ein.", exku: "بانگهێشتت دەکەم." },
    { de: "mitbringen", ku: "لەگەڵخۆهێنان", ex: "Bring etwas mit.", exku: "شتێک لەگەڵ خۆت بهێنە." },
    { de: "aussehen", ku: "دیارکەوتن", ex: "Du siehst müde aus.", exku: "ماندوو دیاریت." },
    { de: "anziehen", ku: "پۆشین", ex: "Ich ziehe eine Jacke an.", exku: "چاکەتێک دەپۆشم." },
    { de: "ausziehen", ku: "داکەندن", ex: "Zieh die Schuhe aus.", exku: "پێڵاوەکانت دابکەنە." },
    { de: "anfangen", ku: "دەستپێکردن", ex: "Wir fangen an.", exku: "دەست پێدەکەین." },
    { de: "aufhören", ku: "وەستان", ex: "Hör auf zu reden.", exku: "وازبهێنە لە قسەکردن." },
    { de: "duschen", ku: "خۆشتن (دووش)", ex: "Ich dusche morgens.", exku: "بەیانیان خۆم دەشۆم." },
    { de: "rufen", ku: "بانگکردن", ex: "Er ruft den Hund.", exku: "بانگی سەگەکە دەکات." },
    { de: "putzen", ku: "پاککردنەوە", ex: "Ich putze die Fenster.", exku: "پەنجەرەکان پاک دەکەمەوە." },
    { de: "reparieren", ku: "چاککردنەوە", ex: "Er repariert das Auto.", exku: "ئۆتۆمبێلەکە چاک دەکاتەوە." },
    { de: "benutzen", ku: "بەکارهێنان", ex: "Ich benutze mein Handy.", exku: "مۆبایلەکەم بەکاردەهێنم." },
    { de: "verlassen", ku: "بەجێهێشتن", ex: "Ich verlasse das Haus.", exku: "ماڵ بەجێدەهێڵم." },
    { de: "ankreuzen", ku: "نیشانکردن", ex: "Kreuze die Antwort an.", exku: "وەڵامەکە نیشان بکە." },
    { de: "wiegen", ku: "کێشان", ex: "Wie viel wiegst du?", exku: "چەند کێشت هەیە؟" },
    { de: "passieren", ku: "ڕوودان", ex: "Was ist passiert?", exku: "چی ڕوویدا؟" },
    { de: "funktionieren", ku: "کارکردن (ئامێر)", ex: "Das Handy funktioniert nicht.", exku: "مۆبایلەکە کار ناکات." },
    { de: "buchen", ku: "حیجزکردن", ex: "Ich buche ein Hotel.", exku: "هۆتێلێک حیجز دەکەم." },
    { de: "packen", ku: "بارکردن (جانتا)", ex: "Ich packe meinen Koffer.", exku: "جانتاکەم بار دەکەم." },
    { de: "übernachten", ku: "شەوبەسەربردن", ex: "Wir übernachten im Hotel.", exku: "لە هۆتێل شەو دەبەینەسەر." },
    { de: "sich freuen", ku: "دڵخۆشبوون", ex: "Ich freue mich sehr.", exku: "زۆر دڵخۆشم." },
    { de: "sich setzen", ku: "دانیشتن", ex: "Setz dich bitte.", exku: "تکایە دانیشە." },
    { de: "sich fühlen", ku: "هەستکردن", ex: "Ich fühle mich gut.", exku: "هەست بە باشی دەکەم." },
    { de: "sich waschen", ku: "خۆشتن", ex: "Ich wasche mich.", exku: "خۆم دەشۆم." },
  ],
  B1: [
    { de: "sich entscheiden", ku: "بڕیاردان", ex: "Ich kann mich nicht entscheiden.", exku: "ناتوانم بڕیار بدەم." },
    { de: "vergleichen", ku: "بەراوردکردن", ex: "Wir vergleichen die Angebote.", exku: "ئەرزەکان بەراورد دەکەین." },
    { de: "empfehlen", ku: "پێشنیارکردن", ex: "Ich empfehle dir das Buch.", exku: "ئەم کتێبەت پێشنیار دەکەم." },
    { de: "entwickeln", ku: "پەرەپێدان", ex: "Wir entwickeln eine App.", exku: "ئەپێک پەرەپێدەدەین." },
    { de: "verbessern", ku: "باشترکردن", ex: "Ich verbessere mein Deutsch.", exku: "ئەڵمانییەکەم باشتر دەکەم." },
    { de: "vermeiden", ku: "خۆلادان", ex: "Vermeide solche Fehler.", exku: "خۆت لەو جۆرە هەڵانە بپارێزە." },
    { de: "erreichen", ku: "گەیشتن بە", ex: "Ich will mein Ziel erreichen.", exku: "دەمەوێت بگەمە ئامانجم." },
    { de: "beschreiben", ku: "وەسفکردن", ex: "Beschreibe das Bild.", exku: "وێنەکە وەسف بکە." },
    { de: "ausdrücken", ku: "دەربڕین", ex: "Ich kann es nicht ausdrücken.", exku: "ناتوانم دەریبڕم." },
    { de: "überzeugen", ku: "قایلکردن", ex: "Du hast mich überzeugt.", exku: "قایلت کردم." },
    { de: "vorschlagen", ku: "پێشنیارکردن", ex: "Ich schlage einen Plan vor.", exku: "پلانێک پێشنیار دەکەم." },
    { de: "teilnehmen", ku: "بەشداریکردن", ex: "Ich nehme am Kurs teil.", exku: "لە خولەکەدا بەشداری دەکەم." },
    { de: "sich bewerben", ku: "داواکاریکردن (کار)", ex: "Ich bewerbe mich um die Stelle.", exku: "بۆ پۆستەکە داواکاری دەکەم." },
    { de: "sich kümmern", ku: "ئاگاداربوون", ex: "Ich kümmere mich darum.", exku: "ئاگاداری دەبم." },
    { de: "sich interessieren", ku: "ئارەزووکردن", ex: "Ich interessiere mich für Kunst.", exku: "ئارەزووی هونەر دەکەم." },
    { de: "sich beschweren", ku: "گلەییکردن", ex: "Er beschwert sich oft.", exku: "زۆرجار گلەیی دەکات." },
    { de: "sich gewöhnen", ku: "ڕاهاتن", ex: "Ich gewöhne mich daran.", exku: "پێی ڕادێم." },
    { de: "sich verlassen", ku: "پشتبەستن", ex: "Ich verlasse mich auf dich.", exku: "پشت بە تۆ دەبەستم." },
    { de: "erlauben", ku: "ڕێگەدان", ex: "Das ist nicht erlaubt.", exku: "ئەمە ڕێگەپێدراو نییە." },
    { de: "verbieten", ku: "قەدەغەکردن", ex: "Rauchen ist verboten.", exku: "جگەرەکێشان قەدەغەیە." },
    { de: "versuchen", ku: "هەوڵدان", ex: "Ich versuche es nochmal.", exku: "جارێکی تر هەوڵ دەدەم." },
    { de: "schaffen", ku: "سەرکەوتن / تەواوکردن", ex: "Ich schaffe das.", exku: "لەپێناوی دێم." },
    { de: "erlauben", ku: "ڕێپێدان", ex: "Erlaube mir das.", exku: "ڕێگەم بدە." },
    { de: "bedeuten", ku: "واتابوون", ex: "Was bedeutet das Wort?", exku: "ئەم وشەیە چی دەگەیەنێت؟" },
    { de: "beweisen", ku: "سەلماندن", ex: "Er kann es beweisen.", exku: "دەتوانێت بیسەلمێنێت." },
    { de: "behandeln", ku: "چارەسەرکردن / مامەڵەکردن", ex: "Der Arzt behandelt den Patienten.", exku: "پزیشک نەخۆشەکە چارەسەر دەکات." },
    { de: "untersuchen", ku: "پشکنین / لێکۆڵینەوە", ex: "Der Arzt untersucht mich.", exku: "پزیشک پشکنینم بۆ دەکات." },
    { de: "erholen", ku: "چاکبوونەوە", ex: "Ich muss mich erholen.", exku: "دەبێت چاکببمەوە." },
    { de: "verschieben", ku: "دواخستن", ex: "Wir verschieben das Treffen.", exku: "کۆبوونەوەکە دوادەخەین." },
    { de: "organisieren", ku: "ڕێکخستن", ex: "Ich organisiere die Party.", exku: "ئاهەنگەکە ڕێک دەخەم." },
    { de: "planen", ku: "پلاندانان", ex: "Wir planen eine Reise.", exku: "پلانی گەشتێک دادەنێین." },
    { de: "erwarten", ku: "چاوەڕوانکردن", ex: "Ich erwarte eine Antwort.", exku: "چاوەڕوانی وەڵامم." },
    { de: "vermuten", ku: "گریمانکردن", ex: "Ich vermute, er kommt nicht.", exku: "گریمان دەکەم نایەت." },
    { de: "berichten", ku: "ڕاپۆرتکردن", ex: "Sie berichtet über die Lage.", exku: "دەربارەی دۆخەکە ڕاپۆرت دەدات." },
    { de: "diskutieren", ku: "گفتوگۆکردن", ex: "Wir diskutieren das Thema.", exku: "بابەتەکە تاوتوێ دەکەین." },
    { de: "kritisieren", ku: "ڕەخنەگرتن", ex: "Er kritisiert den Plan.", exku: "ڕەخنە لە پلانەکە دەگرێت." },
    { de: "überlegen", ku: "بیرکردنەوە (ورد)", ex: "Ich überlege es mir.", exku: "بیری لێدەکەمەوە." },
    { de: "entstehen", ku: "پەیدابوون / دروستبوون", ex: "So entstehen Probleme.", exku: "بەم شێوەیە کێشە دروست دەبێت." },
    { de: "verändern", ku: "گۆڕین", ex: "Das verändert alles.", exku: "ئەمە هەمووشت دەگۆڕێت." },
    { de: "beeinflussen", ku: "کاریگەریکردن", ex: "Das Wetter beeinflusst mich.", exku: "کەش‌وهەوا کاریگەریم لێ دەکات." },
    { de: "verbinden", ku: "بەستنەوە", ex: "Sprache verbindet Menschen.", exku: "زمان خەڵک بەیەکەوە دەبەستێتەوە." },
    { de: "trennen", ku: "جیاکردنەوە", ex: "Wir trennen den Müll.", exku: "زبڵ جیا دەکەینەوە." },
    { de: "wachsen", ku: "گەشەکردن / مەزنبوون", ex: "Die Stadt wächst schnell.", exku: "شارەکە خێرا گەشە دەکات." },
    { de: "sterben", ku: "مردن", ex: "Die Pflanze ist gestorben.", exku: "ڕووەکەکە مرد." },
    { de: "geboren werden", ku: "لەدایکبوون", ex: "Ich bin in Erbil geboren.", exku: "لە هەولێر لەدایکبووم." },
    { de: "heiraten", ku: "هاوسەرگیری", ex: "Sie heiraten im Sommer.", exku: "لە هاویندا هاوسەرگیری دەکەن." },
    { de: "umziehen", ku: "گواستنەوە (ماڵ)", ex: "Wir ziehen nächste Woche um.", exku: "هەفتەی داهاتوو ماڵ دەگوازینەوە." },
    { de: "sich verabreden", ku: "ژووانگرتن", ex: "Wir verabreden uns für Freitag.", exku: "بۆ هەینی ژووان دەگرین." },
    { de: "verzichten", ku: "وازهێنان", ex: "Ich verzichte auf Zucker.", exku: "واز لە شەکر دەهێنم." },
    { de: "gehören", ku: "هیبوون / سەربوون", ex: "Das gehört mir.", exku: "ئەمە هی منە." },
  ],
  B2: [
    { de: "berücksichtigen", ku: "لەبەرچاوگرتن", ex: "Wir müssen das berücksichtigen.", exku: "دەبێت ئەمە لەبەرچاو بگرین." },
    { de: "betonen", ku: "جەختکردن", ex: "Er betont die Bedeutung.", exku: "جەخت لە گرنگییەکە دەکات." },
    { de: "ermöglichen", ku: "دەستەبەرکردن", ex: "Das ermöglicht neue Chancen.", exku: "ئەمە دەرفەتی نوێ دەستەبەر دەکات." },
    { de: "verursachen", ku: "هۆکاربوون", ex: "Stress verursacht Krankheiten.", exku: "سترێس دەبێتە هۆی نەخۆشی." },
    { de: "behaupten", ku: "بانگەشەکردن", ex: "Er behauptet, unschuldig zu sein.", exku: "بانگەشە دەکات کە بێتاوانە." },
    { de: "bezweifeln", ku: "گومانلێکردن", ex: "Ich bezweifle das.", exku: "گومانی لێ دەکەم." },
    { de: "voraussetzen", ku: "پێشمەرجدانان", ex: "Das setzt Erfahrung voraus.", exku: "ئەمە ئەزموونی پێویستە." },
    { de: "gewährleisten", ku: "دڵنیاکردنەوە / مسۆگەرکردن", ex: "Wir gewährleisten Qualität.", exku: "جۆری مسۆگەر دەکەین." },
    { de: "verfügen", ku: "هەبوون / دەستڕاگەیشتن", ex: "Er verfügt über viel Erfahrung.", exku: "ئەزموونی زۆری هەیە." },
    { de: "umsetzen", ku: "جێبەجێکردن", ex: "Wir setzen den Plan um.", exku: "پلانەکە جێبەجێ دەکەین." },
    { de: "durchführen", ku: "ئەنجامدان / بەڕێوەبردن", ex: "Wir führen eine Studie durch.", exku: "لێکۆڵینەوەیەک ئەنجام دەدەین." },
    { de: "feststellen", ku: "دەستنیشانکردن", ex: "Wir stellen fest, dass ...", exku: "دەستنیشان دەکەین کە ..." },
    { de: "erfordern", ku: "پێویستیکردن", ex: "Das erfordert Geduld.", exku: "ئەمە سەبری پێویستە." },
    { de: "beitragen", ku: "بەشداریکردن (لە)", ex: "Jeder trägt dazu bei.", exku: "هەرکەس بەشداری تێدا دەکات." },
    { de: "auswirken", ku: "کاریگەریدانان", ex: "Das wirkt sich negativ aus.", exku: "کاریگەری نەرێنی دەبێت." },
    { de: "hinweisen", ku: "ئاماژەدان", ex: "Ich weise auf das Problem hin.", exku: "ئاماژە بە کێشەکە دەکەم." },
    { de: "verzeichnen", ku: "تۆمارکردن", ex: "Wir verzeichnen einen Anstieg.", exku: "زیادبوونێک تۆمار دەکەین." },
    { de: "entsprechen", ku: "گونجان (لەگەڵ)", ex: "Das entspricht den Regeln.", exku: "ئەمە لەگەڵ یاساکان دەگونجێت." },
    { de: "verdeutlichen", ku: "ڕوونترکردنەوە", ex: "Das Beispiel verdeutlicht es.", exku: "نموونەکە ڕوونتری دەکاتەوە." },
    { de: "zusammenfassen", ku: "کورتکردنەوە", ex: "Ich fasse den Text zusammen.", exku: "دەقەکە کورت دەکەمەوە." },
    { de: "erläutern", ku: "شیکردنەوە", ex: "Er erläutert die Theorie.", exku: "تیۆرییەکە شی دەکاتەوە." },
    { de: "schildern", ku: "وەسفکردن (وردەکاری)", ex: "Sie schildert die Situation.", exku: "دۆخەکە وەسف دەکات." },
    { de: "vermitteln", ku: "گەیاندن / ناوبژیوانی", ex: "Der Lehrer vermittelt Wissen.", exku: "مامۆستا زانیاری دەگەیەنێت." },
    { de: "berücksichtigen", ku: "ڕەچاوکردن", ex: "Bitte berücksichtige meine Meinung.", exku: "تکایە بۆچوونم ڕەچاو بکە." },
    { de: "scheitern", ku: "شکستهێنان", ex: "Das Projekt ist gescheitert.", exku: "پڕۆژەکە شکستی هێنا." },
    { de: "bewältigen", ku: "زاڵبوون بەسەر", ex: "Wir bewältigen die Krise.", exku: "بەسەر قەیرانەکەدا زاڵ دەبین." },
    { de: "verschärfen", ku: "توندترکردن", ex: "Das verschärft die Lage.", exku: "ئەمە دۆخەکە توندتر دەکات." },
    { de: "vorhaben", ku: "نیازبوون", ex: "Was hast du vor?", exku: "نیازت چییە؟" },
    { de: "voraussagen", ku: "پێشبینیکردن", ex: "Niemand kann das voraussagen.", exku: "کەس ناتوانێت پێشبینی بکات." },
    { de: "übertreffen", ku: "تێپەڕاندن / سەرکەوتن بەسەر", ex: "Sie übertrifft alle Erwartungen.", exku: "لە هەموو چاوەڕوانییەک تێدەپەڕێت." },
    { de: "anpassen", ku: "گونجاندن", ex: "Wir passen den Plan an.", exku: "پلانەکە دەگونجێنین." },
    { de: "verlangen", ku: "داواکردن (بەتوندی)", ex: "Der Job verlangt viel.", exku: "کارەکە زۆر داوا دەکات." },
    { de: "betreffen", ku: "پەیوەستبوون بە", ex: "Das betrifft uns alle.", exku: "ئەمە پەیوەستە بە هەموومانەوە." },
    { de: "beruhen", ku: "بنەمابوون (لەسەر)", ex: "Das beruht auf Fakten.", exku: "ئەمە لەسەر ڕاستی دامەزراوە." },
    { de: "verfolgen", ku: "بەدواداچوون", ex: "Wir verfolgen ein Ziel.", exku: "ئامانجێک بەدوادا دەچین." },
    { de: "widersprechen", ku: "پێچەوانەبوون / ڕەتکردنەوە", ex: "Ich widerspreche dir.", exku: "پێچەوانەی تۆ دەڵێم." },
    { de: "verzichten", ku: "وازهێنان", ex: "Ich verzichte auf den Urlaub.", exku: "واز لە پشوو دەهێنم." },
    { de: "ablehnen", ku: "ڕەتکردنەوە", ex: "Sie lehnt das Angebot ab.", exku: "پێشنیارەکە ڕەت دەکاتەوە." },
    { de: "zustimmen", ku: "ڕەزامەندیدان", ex: "Ich stimme dir zu.", exku: "لەگەڵت ڕازیم." },
    { de: "erzielen", ku: "بەدەستهێنان (ئەنجام)", ex: "Wir erzielen gute Ergebnisse.", exku: "ئەنجامی باش بەدەست دەهێنین." },
    { de: "überwinden", ku: "تێپەڕاندن (ئاستەنگ)", ex: "Wir überwinden die Hindernisse.", exku: "بەسەر ئاستەنگەکاندا زاڵ دەبین." },
    { de: "begründen", ku: "هۆکارهێنانەوە", ex: "Begründe deine Meinung.", exku: "هۆکاری بۆچوونەکەت بهێنەرەوە." },
    { de: "beabsichtigen", ku: "مەبەستبوون", ex: "Ich beabsichtige zu kündigen.", exku: "مەبەستمە دەستبکێشمەوە." },
    { de: "gelten", ku: "بەکارهاتن / ڕەواجبوون", ex: "Die Regel gilt für alle.", exku: "یاساکە بۆ هەمووان ڕەواجە." },
    { de: "verschwinden", ku: "ونبوون", ex: "Das Problem verschwindet nicht.", exku: "کێشەکە نامێنێت." },
    { de: "auffallen", ku: "بەرچاوکەوتن", ex: "Es fällt mir auf, dass ...", exku: "بەرچاوم دەکەوێت کە ..." },
    { de: "übernehmen", ku: "وەرگرتن (بەرپرسیارێتی)", ex: "Ich übernehme die Verantwortung.", exku: "بەرپرسیارێتی وەردەگرم." },
    { de: "nachweisen", ku: "سەلماندن (بەبەڵگە)", ex: "Er kann es nachweisen.", exku: "بە بەڵگە دەیسەلمێنێت." },
    { de: "verarbeiten", ku: "پرۆسێسکردن / هەزمکردن", ex: "Ich muss die Information verarbeiten.", exku: "دەبێت زانیارییەکە پرۆسێس بکەم." },
    { de: "abhängen", ku: "پشتبەستوویبوون (بە)", ex: "Das hängt von dir ab.", exku: "ئەمە بە تۆوە بەندە." },
  ],
};

// German text helper — always render LTR inside the RTL layout
function De({ children, size, color }) {
  return <span dir="ltr" style={{ fontFamily: "'Satoshi',system-ui,sans-serif", fontSize: size, color, display: "inline-block" }}>{children}</span>;
}

// ── خشتەی ڕێزمان / Grammar summary tables (بەپێی ناونیشان) ─────────
const GTABLES = {
  "Artikel: der, die, das": { headers: ["ڕەگەز", "ئارتیکڵ", "نموونە"], rows: [["نێر", "der", "der Mann"], ["مێ", "die", "die Frau"], ["بێلایەن", "das", "das Kind"]] },
  "Bestimmte / unbestimmte Artikel": { headers: ["ڕەگەز", "دیاریکراو", "نادیار"], rows: [["نێر", "der", "ein"], ["مێ", "die", "eine"], ["بێلایەن", "das", "ein"]] },
  "Plural": { headers: ["کۆتایی", "نموونە"], rows: [["-e", "der Tisch → die Tische"], ["-er", "das Kind → die Kinder"], ["-(e)n", "die Frau → die Frauen"], ["-s", "das Auto → die Autos"]] },
  "Personalpronomen": { headers: ["ئەڵمانی", "سۆرانی"], rows: [["ich", "من"], ["du", "تۆ"], ["er / sie / es", "ئەو"], ["wir", "ئێمە"], ["ihr", "ئێوە"], ["sie / Sie", "ئەوان / فەرمی"]] },
  "Präsens — regelmäßige Verben": { headers: ["کەس", "lernen"], rows: [["ich", "lerne"], ["du", "lernst"], ["er/sie/es", "lernt"], ["wir", "lernen"], ["ihr", "lernt"], ["sie/Sie", "lernen"]] },
  "Unregelmäßige Verben": { headers: ["کەس", "fahren", "essen"], rows: [["ich", "fahre", "esse"], ["du", "fährst", "isst"], ["er/sie/es", "fährt", "isst"], ["wir", "fahren", "essen"]] },
  "sein und haben": { headers: ["کەس", "sein", "haben"], rows: [["ich", "bin", "habe"], ["du", "bist", "hast"], ["er/sie/es", "ist", "hat"], ["wir", "sind", "haben"], ["ihr", "seid", "habt"], ["sie/Sie", "sind", "haben"]] },
  "Modalverben": { headers: ["مۆداڵ", "واتا"], rows: [["können", "توانین"], ["müssen", "دەبێت"], ["wollen", "ویستن"], ["dürfen", "مۆڵەت"], ["sollen", "پێویست"], ["möchten", "حەزکردن"]] },
  "W-Fragen": { headers: ["پرسیار", "واتا"], rows: [["wer", "کێ"], ["was", "چی"], ["wo", "لەکوێ"], ["wann", "کەی"], ["wie", "چۆن"], ["warum", "بۆچی"]] },
  "Ja/Nein-Fragen": { headers: ["١ (کردار)", "٢ (کەس)", "..."], rows: [["Kommst", "du", "mit?"], ["Hast", "du", "Zeit?"], ["Ist", "das", "richtig?"]] },
  "Satzstellung": { headers: ["پێگەی ١", "پێگەی ٢ (کردار)", "ماوە"], rows: [["Ich", "lerne", "heute Deutsch"], ["Heute", "lerne", "ich Deutsch"], ["Morgen", "gehe", "ich nach Hause"]] },
  "Akkusativ": { headers: ["ڕەگەز", "Nominativ", "Akkusativ"], rows: [["نێر", "der / ein", "den / einen"], ["مێ", "die / eine", "die / eine"], ["بێلایەن", "das / ein", "das / ein"], ["کۆ", "die", "die"]] },
  "Possessivartikel": { headers: ["کەس", "خاوەندارێتی"], rows: [["ich", "mein"], ["du", "dein"], ["er", "sein"], ["sie", "ihr"], ["wir", "unser"], ["ihr", "euer"]] },
  "Trennbare Verben": { headers: ["کردار", "پێشگر", "لە ڕستەدا"], rows: [["aufstehen", "auf", "ich stehe auf"], ["einkaufen", "ein", "ich kaufe ein"], ["ankommen", "an", "ich komme an"]] },
  "Negation: nicht / kein": { headers: ["بەکارهێنان", "نموونە"], rows: [["nicht (کردار/سیفەت)", "Ich verstehe nicht."], ["kein (ناوی نادیار)", "Ich habe kein Geld."], ["keine (مێ/کۆ)", "Ich habe keine Zeit."]] },
  "Imperativ": { headers: ["کەس", "فۆرم"], rows: [["du", "Komm!"], ["ihr", "Kommt!"], ["Sie", "Kommen Sie!"]] },
  "Präpositionen: Ort & Zeit": { headers: ["ئامراز", "واتا"], rows: [["in", "لە ناو"], ["an", "لای / لەسەر"], ["auf", "لەسەر"], ["um", "کاتژمێر (کات)"], ["am", "ڕۆژ (کات)"], ["im", "مانگ / وەرز (کات)"]] },
  "Dativ": { headers: ["ڕەگەز", "Nominativ", "Dativ"], rows: [["نێر", "der", "dem"], ["مێ", "die", "der"], ["بێلایەن", "das", "dem"], ["کۆ", "die", "den (+n)"]] },
  "Wechselpräpositionen": { headers: ["پرسیار", "کەیس", "نموونە"], rows: [["wohin? (جووڵە)", "Akkusativ", "in die Schule"], ["wo? (شوێن)", "Dativ", "in der Schule"]] },
  "Perfekt": { headers: ["یاریدەدەر", "نموونە"], rows: [["haben", "ich habe gemacht"], ["sein (جووڵە)", "ich bin gegangen"]] },
  "Präteritum (sein, haben, Modalverben)": { headers: ["کردار", "Präteritum"], rows: [["sein", "war"], ["haben", "hatte"], ["können", "konnte"], ["müssen", "musste"], ["wollen", "wollte"]] },
  "Reflexive Verben": { headers: ["کەس", "جێناوی خۆ"], rows: [["ich", "mich"], ["du", "dich"], ["er/sie/es", "sich"], ["wir", "uns"], ["ihr", "euch"], ["sie/Sie", "sich"]] },
  "Konjunktionen: und, oder, aber, denn, sondern": { headers: ["گرێدەر", "واتا"], rows: [["und", "و"], ["oder", "یان"], ["aber", "بەڵام"], ["denn", "چونکە"], ["sondern", "بەڵکو"]] },
  "Nebensatz: weil, dass": { headers: ["گرێدەر", "واتا", "کردار"], rows: [["weil", "چونکە", "کۆتایی ڕستە"], ["dass", "کە", "کۆتایی ڕستە"]] },
  "Komparativ": { headers: ["Positiv", "Komparativ"], rows: [["groß", "größer"], ["alt", "älter"], ["gut", "besser"], ["viel", "mehr"]] },
  "Superlativ": { headers: ["Positiv", "Komparativ", "Superlativ"], rows: [["groß", "größer", "am größten"], ["gut", "besser", "am besten"], ["viel", "mehr", "am meisten"]] },
  "Genitiv (Einführung)": { headers: ["ڕەگەز", "Genitiv"], rows: [["نێر", "des (+s)"], ["مێ", "der"], ["بێلایەن", "des (+s)"], ["کۆ", "der"]] },
  "Pronomen: Personal-, Possessiv-, Demonstrativ-": { headers: ["جۆر", "نموونە"], rows: [["Personal", "er, ihn, ihm"], ["Possessiv", "meiner, deiner"], ["Demonstrativ", "dieser, jener"]] },
  "Relativsätze (basic)": { headers: ["ڕەگەز", "جێناوی پەیوەندیدار"], rows: [["نێر", "der"], ["مێ", "die"], ["بێلایەن", "das"], ["کۆ", "die"]] },
  "Plusquamperfekt": { headers: ["یاریدەدەر", "نموونە"], rows: [["hatte + Partizip II", "ich hatte gemacht"], ["war + Partizip II (جووڵە)", "ich war gegangen"]] },
  "Futur I": { headers: ["کەس", "werden", "+ Infinitiv"], rows: [["ich", "werde", "lernen"], ["du", "wirst", "lernen"], ["er/sie/es", "wird", "lernen"], ["wir", "werden", "lernen"]] },
  "Relativsätze (detail)": { headers: ["کەیس", "نێر", "مێ", "بێلایەن", "کۆ"], rows: [["Nom", "der", "die", "das", "die"], ["Akk", "den", "die", "das", "die"], ["Dativ", "dem", "der", "dem", "denen"], ["Genitiv", "dessen", "deren", "dessen", "deren"]] },
  "Konjunktiv II": { headers: ["فۆرم", "واتا"], rows: [["würde + Infinitiv", "بۆ گریمانە/خواست"], ["hätte", "هەبووایە"], ["wäre", "بووایە"], ["könnte", "دەیتوانی"]] },
  "Passiv (Vorgangspassiv)": { headers: ["Aktiv", "Passiv"], rows: [["Man baut das Haus.", "Das Haus wird gebaut."], ["Man liest das Buch.", "Das Buch wird gelesen."]] },
  "Infinitiv mit zu": { headers: ["پێکهاتە", "نموونە"], rows: [["Verb + zu + Infinitiv", "Ich versuche zu lernen."], ["Es ist + Adj + zu + Inf", "Es ist wichtig zu üben."]] },
  "um…zu / ohne…zu / statt…zu": { headers: ["پێکهاتە", "واتا"], rows: [["um … zu", "بۆ ئەوەی"], ["ohne … zu", "بەبێ ئەوەی"], ["statt … zu", "لەبری ئەوەی"]] },
  "Adjektivdeklination": { headers: ["دوای", "کۆتایی (نێر Nom)", "نموونە"], rows: [["der / die / das", "-e", "der rote Apfel"], ["ein / eine", "-er / -e / -es", "ein roter Apfel"], ["بێ ئارتیکڵ", "-er / -e / -es", "roter Wein"]] },
  "Genitiv": { headers: ["ڕەگەز", "ئارتیکڵی Genitiv"], rows: [["نێر", "des (+s)"], ["مێ", "der"], ["بێلایەن", "des (+s)"], ["کۆ", "der"]] },
  "Indirekte Fragen": { headers: ["ڕاستەوخۆ", "ناڕاستەوخۆ"], rows: [["Wo ist er?", "Weißt du, wo er ist?"], ["Kommt er? (بەڵێ/نەخێر)", "Ich frage, ob er kommt."]] },
  "Konjunktionen: obwohl, wenn, als, während…": { headers: ["گرێدەر", "واتا"], rows: [["obwohl", "هەرچەندە"], ["wenn", "ئەگەر / کاتێک"], ["als", "کاتێک (ڕابردوو)"], ["während", "لە کاتێکدا"], ["bevor", "پێش"], ["nachdem", "دوای"], ["seitdem", "لەو کاتەوە"]] },
  "Präpositionen mit Genitiv": { headers: ["ئامراز", "واتا"], rows: [["wegen", "بەهۆی"], ["trotz", "سەرەڕای"], ["während", "لە ماوەی"], ["statt", "لەبری"], ["innerhalb", "لە ناوەوەی"], ["außerhalb", "لە دەرەوەی"]] },
  "Passiv (alle Formen)": { headers: ["کات", "فۆرم"], rows: [["Präsens", "wird gemacht"], ["Präteritum", "wurde gemacht"], ["Perfekt", "ist gemacht worden"], ["Futur", "wird gemacht werden"]] },
  "Zustandspassiv": { headers: ["Vorgangspassiv (کردار)", "Zustandspassiv (دۆخ)"], rows: [["wird geöffnet", "ist geöffnet"], ["wird geschlossen", "ist geschlossen"]] },
  "Konjunktiv I (indirekte Rede)": { headers: ["Infinitiv", "Konjunktiv I"], rows: [["sein", "sei"], ["haben", "habe"], ["kommen", "komme"], ["werden", "werde"]] },
  "Konjunktiv II (fortgeschritten)": { headers: ["کات", "فۆرم"], rows: [["ئێستا", "würde machen"], ["ڕابردوو", "hätte gemacht"], ["ڕابردوو (جووڵە)", "wäre gegangen"]] },
  "Nominalisierung": { headers: ["کردار", "ناو"], rows: [["lernen", "das Lernen"], ["lesen", "das Lesen"], ["essen", "das Essen"], ["ankommen", "die Ankunft"]] },
  "Partizip I": { headers: ["Infinitiv", "Partizip I"], rows: [["spielen", "spielend"], ["lachen", "lachend"], ["schlafen", "schlafend"], ["kommen", "kommend"]] },
  "Partizip II als Adjektiv": { headers: ["Verb", "Partizip II"], rows: [["öffnen", "geöffnet"], ["kochen", "gekocht"], ["schreiben", "geschrieben"], ["reparieren", "repariert"]] },
  "Futur II": { headers: ["پێکهاتە", "نموونە"], rows: [["werden + P II + haben", "Ich werde es gemacht haben."], ["werden + P II + sein (جووڵە)", "Er wird gegangen sein."]] },
  "Kausale, konsekutive, konzessive Sätze": { headers: ["جۆر", "گرێدەر"], rows: [["هۆکاری", "weil, da"], ["ئەنجامی", "sodass, so … dass"], ["ڕێگری", "obwohl, obgleich"]] },
  "Wortbildung: Präfixe & Suffixe": { headers: ["جۆر", "نموونە"], rows: [["پێشگر un-", "möglich → unmöglich"], ["پاشگر -ung", "die Zeitung"], ["پاشگر -heit", "die Freiheit"], ["پاشگر -keit", "die Möglichkeit"], ["پاشگر -er", "der Leser"]] },
};

// ── نموونەی ڕستەی تەواو / Full-sentence examples per topic (≥10) ──
const GEXAMPLES = {
  "Artikel: der, die, das": [
    { de: "Der Mann liest eine Zeitung.", ku: "پیاوەکە ڕۆژنامەیەک دەخوێنێتەوە." },
    { de: "Die Frau kocht das Essen.", ku: "ژنەکە خواردنەکە لێدەنێ." },
    { de: "Das Kind spielt im Garten.", ku: "منداڵەکە لە باخچەدا یاری دەکات." },
    { de: "Der Tisch ist aus Holz.", ku: "مێزەکە لە دارە." },
    { de: "Die Lampe ist sehr hell.", ku: "چراکە زۆر ڕووناکە." },
    { de: "Das Buch liegt auf dem Tisch.", ku: "کتێبەکە لەسەر مێزەکەیە." },
    { de: "Der Hund schläft im Haus.", ku: "سەگەکە لە ماڵدا خەوتووە." },
    { de: "Die Tür ist offen.", ku: "دەرگاکە کراوەیە." },
    { de: "Das Auto fährt sehr schnell.", ku: "ئۆتۆمبێلەکە زۆر خێرا دەڕوات." },
    { de: "Der Lehrer erklärt die Aufgabe.", ku: "مامۆستا ئەرکەکە ڕوون دەکاتەوە." }
  ],
  "Bestimmte / unbestimmte Artikel": [
    { de: "Ich sehe einen Hund.", ku: "سەگێک دەبینم." },
    { de: "Der Hund ist sehr groß.", ku: "سەگەکە زۆر گەورەیە." },
    { de: "Sie kauft eine Tasche.", ku: "جانتایەک دەکڕێت." },
    { de: "Die Tasche ist teuer.", ku: "جانتاکە گرانە." },
    { de: "Wir haben ein Auto.", ku: "ئۆتۆمبێلێکمان هەیە." },
    { de: "Das Auto ist neu.", ku: "ئۆتۆمبێلەکە نوێیە." },
    { de: "Ein Mann steht vor der Tür.", ku: "پیاوێک لەبەردەم دەرگاکە ڕاوەستاوە." },
    { de: "Der Mann ist mein Onkel.", ku: "پیاوەکە ماممە." },
    { de: "Ich möchte einen Apfel.", ku: "سێوێکم دەوێت." },
    { de: "Eine Frau fragt nach dem Weg.", ku: "ژنێک پرسیاری ڕێگا دەکات." }
  ],
  "Plural": [
    { de: "Die Kinder spielen draußen.", ku: "منداڵەکان لە دەرەوە یاری دەکەن." },
    { de: "Meine Brüder wohnen in Berlin.", ku: "براکانم لە بەرلین دەژین." },
    { de: "Die Bücher sind sehr alt.", ku: "کتێبەکان زۆر کۆنن." },
    { de: "Wir haben zwei Autos.", ku: "دوو ئۆتۆمبێلمان هەیە." },
    { de: "Die Häuser sind groß.", ku: "خانووەکان گەورەن." },
    { de: "Die Frauen arbeiten im Büro.", ku: "ژنەکان لە نووسینگەدا کار دەکەن." },
    { de: "Ich kaufe drei Äpfel.", ku: "سێ سێو دەکڕم." },
    { de: "Die Lehrer sind freundlich.", ku: "مامۆستاکان دۆستانەن." },
    { de: "Die Tische sind aus Holz.", ku: "مێزەکان لە دارن." },
    { de: "Die Städte in Deutschland sind schön.", ku: "شارەکانی ئەڵمانیا جوانن." }
  ],
  "Personalpronomen": [
    { de: "Ich komme aus Kurdistan.", ku: "من خەڵکی کوردستانم." },
    { de: "Du sprichst sehr gut Deutsch.", ku: "تۆ زۆر باش ئەڵمانی قسە دەکەیت." },
    { de: "Er arbeitet in einer Firma.", ku: "ئەو لە کۆمپانیایەکدا کار دەکات." },
    { de: "Sie liest jeden Tag.", ku: "ئەو هەموو ڕۆژێک دەخوێنێتەوە." },
    { de: "Es ist heute sehr kalt.", ku: "ئەمڕۆ زۆر ساردە." },
    { de: "Wir lernen zusammen.", ku: "پێکەوە فێردەبین." },
    { de: "Ihr seid sehr nett.", ku: "ئێوە زۆر بەسۆزن." },
    { de: "Sie kommen morgen an.", ku: "ئەوان سبەینێ دەگەن." },
    { de: "Ich verstehe dich gut.", ku: "باش لێت دەگەم." },
    { de: "Wir wohnen in Bochum.", ku: "لە بۆخوم دەژین." }
  ],
  "Präsens — regelmäßige Verben": [
    { de: "Ich lerne jeden Tag Deutsch.", ku: "هەموو ڕۆژێک ئەڵمانی فێردەبم." },
    { de: "Du spielst sehr gut Fußball.", ku: "تۆ زۆر باش تۆپی پێ یاری دەکەیت." },
    { de: "Er arbeitet in Frankfurt.", ku: "ئەو لە فرانکفورت کار دەکات." },
    { de: "Wir wohnen in einer Stadt.", ku: "لە شارێکدا دەژین." },
    { de: "Ihr macht eine Pause.", ku: "ئێوە پشوویەک دەدەن." },
    { de: "Sie kaufen frisches Brot.", ku: "نانی تازە دەکڕن." },
    { de: "Ich höre gern Musik.", ku: "حەز دەکەم گوێ لە مۆسیقا بگرم." },
    { de: "Du fragst den Lehrer.", ku: "تۆ پرسیار لە مامۆستا دەکەیت." },
    { de: "Wir lernen neue Wörter.", ku: "وشەی نوێ فێردەبین." },
    { de: "Das Kind weint laut.", ku: "منداڵەکە بە دەنگی بەرز دەگری." }
  ],
  "Unregelmäßige Verben": [
    { de: "Er fährt mit dem Bus zur Arbeit.", ku: "ئەو بە پاس دەچێتە سەر کار." },
    { de: "Du isst zu viel Schokolade.", ku: "تۆ زۆر شۆکۆلاتە دەخۆیت." },
    { de: "Sie liest ein interessantes Buch.", ku: "کتێبێکی سەرنجڕاکێش دەخوێنێتەوە." },
    { de: "Er gibt mir sein Heft.", ku: "دەفتەرەکەی دەداتە من." },
    { de: "Das Kind schläft schon.", ku: "منداڵەکە ئێستا خەوتووە." },
    { de: "Du sprichst sehr schnell.", ku: "تۆ زۆر خێرا قسە دەکەیت." },
    { de: "Er nimmt den Zug nach Köln.", ku: "شەمەندەفەری کۆلن دەگرێت." },
    { de: "Sie sieht jeden Abend fern.", ku: "هەموو ئێوارەیەک تەلەفزیۆن سەیر دەکات." },
    { de: "Er trägt einen schweren Koffer.", ku: "جانتایەکی قورس هەڵدەگرێت." },
    { de: "Du läufst sehr schnell.", ku: "تۆ زۆر خێرا ڕادەکەیت." }
  ],
  "sein und haben": [
    { de: "Ich bin heute sehr müde.", ku: "ئەمڕۆ زۆر ماندووم." },
    { de: "Du bist mein bester Freund.", ku: "تۆ باشترین هاوڕێمی." },
    { de: "Er ist Arzt von Beruf.", ku: "ئەو پیشەی پزیشکە." },
    { de: "Wir sind seit zwei Jahren hier.", ku: "دوو ساڵە لێرەین." },
    { de: "Ihr seid sehr fleißig.", ku: "ئێوە زۆر کۆششکارن." },
    { de: "Sie sind aus Deutschland.", ku: "ئەوان خەڵکی ئەڵمانیان." },
    { de: "Ich habe einen großen Bruder.", ku: "برایەکی گەورەم هەیە." },
    { de: "Du hast viel Zeit.", ku: "کاتی زۆرت هەیە." },
    { de: "Er hat ein neues Auto.", ku: "ئۆتۆمبێلێکی نوێی هەیە." },
    { de: "Wir haben morgen eine Prüfung.", ku: "سبەینێ تاقیکردنەوەمان هەیە." }
  ],
  "Modalverben": [
    { de: "Ich kann gut schwimmen.", ku: "باش دەتوانم مەلە بکەم." },
    { de: "Du musst mehr lernen.", ku: "دەبێت زیاتر فێربیت." },
    { de: "Er will ein Auto kaufen.", ku: "دەیەوێت ئۆتۆمبێلێک بکڕێت." },
    { de: "Wir dürfen hier nicht rauchen.", ku: "لێرە بۆمان نییە جگەرە بکێشین." },
    { de: "Ihr sollt pünktlich sein.", ku: "دەبێت لە کاتی خۆتاندا بن." },
    { de: "Ich möchte einen Kaffee trinken.", ku: "دەمەوێت قاوەیەک بخۆمەوە." },
    { de: "Kannst du mir helfen?", ku: "دەتوانیت یارمەتیم بدەیت؟" },
    { de: "Wir müssen jetzt gehen.", ku: "ئێستا دەبێت بڕۆین." },
    { de: "Sie will Ärztin werden.", ku: "دەیەوێت ببێتە پزیشک." },
    { de: "Darf ich das Fenster öffnen?", ku: "دەکرێت پەنجەرەکە بکەمەوە؟" }
  ],
  "W-Fragen": [
    { de: "Wo wohnst du jetzt?", ku: "ئێستا لەکوێ دەژیت؟" },
    { de: "Was machst du am Wochenende?", ku: "کۆتایی هەفتە چی دەکەیت؟" },
    { de: "Wann beginnt der Unterricht?", ku: "وانەکە کەی دەست پێدەکات؟" },
    { de: "Wer ist dieser Mann?", ku: "ئەم پیاوە کێیە؟" },
    { de: "Wie heißt deine Schwester?", ku: "ناوی خوشکت چییە؟" },
    { de: "Warum lernst du Deutsch?", ku: "بۆچی ئەڵمانی فێردەبیت؟" },
    { de: "Woher kommst du?", ku: "خەڵکی کوێیت؟" },
    { de: "Wohin gehst du?", ku: "بۆ کوێ دەچیت؟" },
    { de: "Wie viel kostet das?", ku: "ئەمە چەند دەکات؟" },
    { de: "Welche Farbe magst du?", ku: "حەزت لە کام ڕەنگە؟" }
  ],
  "Ja/Nein-Fragen": [
    { de: "Kommst du heute Abend?", ku: "ئەمڕۆ ئێوارە دێیت؟" },
    { de: "Hast du ein Auto?", ku: "ئۆتۆمبێلت هەیە؟" },
    { de: "Sprichst du Englisch?", ku: "ئینگلیزی قسە دەکەیت؟" },
    { de: "Bist du müde?", ku: "ماندوویت؟" },
    { de: "Magst du Kaffee?", ku: "حەزت لە قاوەیە؟" },
    { de: "Wohnst du in Berlin?", ku: "لە بەرلین دەژیت؟" },
    { de: "Möchtest du etwas essen?", ku: "دەتەوێت شتێک بخۆیت؟" },
    { de: "Kannst du schwimmen?", ku: "دەتوانیت مەلە بکەیت؟" },
    { de: "Hast du morgen Zeit?", ku: "سبەینێ کاتت هەیە؟" },
    { de: "Verstehst du mich?", ku: "لێم دەگەیت؟" }
  ],
  "Satzstellung": [
    { de: "Ich gehe heute ins Kino.", ku: "ئەمڕۆ دەچمە سینەما." },
    { de: "Heute gehe ich ins Kino.", ku: "ئەمڕۆ دەچمە سینەما (کردار جێی ٢)." },
    { de: "Am Montag arbeite ich nicht.", ku: "دووشەممە کار ناکەم." },
    { de: "Morgen fahren wir nach Köln.", ku: "سبەینێ دەچینە کۆلن." },
    { de: "Ich trinke jeden Morgen Kaffee.", ku: "هەموو بەیانییەک قاوە دەخۆمەوە." },
    { de: "Nach der Arbeit gehe ich nach Hause.", ku: "دوای کار دەچمە ماڵەوە." },
    { de: "Im Sommer reisen wir viel.", ku: "لە هاویندا زۆر گەشت دەکەین." },
    { de: "Er spielt am Abend Gitarre.", ku: "ئێوارە گیتار لێدەدات." },
    { de: "Wir essen um acht Uhr.", ku: "کاتژمێر هەشت دەخۆین." },
    { de: "Manchmal koche ich für meine Familie.", ku: "هەندێجار بۆ خێزانەکەم خواردن لێدەنێم." }
  ],
  "Akkusativ": [
    { de: "Ich sehe den Mann dort.", ku: "ئەو پیاوەی ئەوێ دەبینم." },
    { de: "Sie kauft einen neuen Computer.", ku: "کۆمپیوتەرێکی نوێ دەکڕێت." },
    { de: "Wir lesen das Buch zusammen.", ku: "پێکەوە کتێبەکە دەخوێنینەوە." },
    { de: "Er trinkt einen Kaffee.", ku: "قاوەیەک دەخواتەوە." },
    { de: "Ich brauche den Schlüssel.", ku: "پێویستم بە کلیلەکەیە." },
    { de: "Hast du die Zeitung gelesen?", ku: "ڕۆژنامەکەت خوێندەوە؟" },
    { de: "Wir besuchen den Lehrer.", ku: "سەردانی مامۆستا دەکەین." },
    { de: "Sie liebt ihren Hund.", ku: "سەگەکەی خۆش دەوێت." },
    { de: "Ich kaufe einen Apfel und eine Banane.", ku: "سێوێک و مۆزێک دەکڕم." },
    { de: "Er fragt den Polizisten.", ku: "پرسیار لە پۆلیسەکە دەکات." }
  ],
  "Possessivartikel": [
    { de: "Das ist mein Auto.", ku: "ئەمە ئۆتۆمبێلی منە." },
    { de: "Deine Schwester ist sehr nett.", ku: "خوشکت زۆر بەسۆزە." },
    { de: "Sein Vater arbeitet im Krankenhaus.", ku: "باوکی لە نەخۆشخانە کار دەکات." },
    { de: "Ihre Mutter kocht sehr gut.", ku: "دایکی زۆر باش خواردن لێدەنێ." },
    { de: "Unser Haus ist klein.", ku: "خانووەکەمان بچووکە." },
    { de: "Euer Lehrer ist streng.", ku: "مامۆستاکەتان توندە." },
    { de: "Mein Bruder studiert in Köln.", ku: "برام لە کۆلن دەخوێنێت." },
    { de: "Ich suche meinen Schlüssel.", ku: "بەدوای کلیلەکەمدا دەگەڕێم." },
    { de: "Wo ist deine Tasche?", ku: "جانتاکەت لەکوێیە؟" },
    { de: "Ihre Kinder gehen zur Schule.", ku: "منداڵەکانی دەچنە قوتابخانە." }
  ],
  "Trennbare Verben": [
    { de: "Ich stehe jeden Tag um sieben auf.", ku: "هەموو ڕۆژێک کاتژمێر حەوت هەڵدەستم." },
    { de: "Wir kaufen am Samstag ein.", ku: "شەممە بازاڕ دەکەین." },
    { de: "Der Zug fährt um neun Uhr ab.", ku: "شەمەندەفەرەکە کاتژمێر نۆ بەڕێدەکەوێت." },
    { de: "Ruf mich heute Abend an!", ku: "ئەمڕۆ ئێوارە پەیوەندیم پێوە بکە!" },
    { de: "Wann kommt der Bus an?", ku: "پاسەکە کەی دەگات؟" },
    { de: "Ich räume mein Zimmer auf.", ku: "ژوورەکەم ڕێک دەخەم." },
    { de: "Sie zieht ihre Jacke an.", ku: "چاکەتەکەی دەپۆشێت." },
    { de: "Mach bitte das Licht aus!", ku: "تکایە چراکە بکوژێنەوە!" },
    { de: "Wir fangen um acht an.", ku: "کاتژمێر هەشت دەست پێدەکەین." },
    { de: "Er sieht jeden Abend fern.", ku: "هەموو ئێوارەیەک تەلەفزیۆن سەیر دەکات." }
  ],
  "Negation: nicht / kein": [
    { de: "Ich verstehe das nicht.", ku: "لەمە تێناگەم." },
    { de: "Er ist heute nicht zu Hause.", ku: "ئەمڕۆ لە ماڵەوە نییە." },
    { de: "Ich habe kein Geld dabei.", ku: "پارەم پێ نییە." },
    { de: "Sie hat keine Geschwister.", ku: "خوشک و برای نییە." },
    { de: "Das ist nicht mein Buch.", ku: "ئەمە کتێبی من نییە." },
    { de: "Wir gehen heute nicht ins Kino.", ku: "ئەمڕۆ ناچینە سینەما." },
    { de: "Ich trinke keinen Alkohol.", ku: "ئەلکهۆل ناخۆمەوە." },
    { de: "Das Wetter ist nicht gut.", ku: "کەش‌وهەوا باش نییە." },
    { de: "Er spricht kein Deutsch.", ku: "ئەو ئەڵمانی قسە ناکات." },
    { de: "Ich möchte das nicht.", ku: "ئەمەم ناوێت." }
  ],
  "Imperativ": [
    { de: "Komm bitte her!", ku: "تکایە وەرە ئێرە!" },
    { de: "Mach die Tür zu!", ku: "دەرگاکە دابخە!" },
    { de: "Hört bitte zu!", ku: "تکایە گوێ بگرن!" },
    { de: "Sei bitte ruhig!", ku: "تکایە بێدەنگ بە!" },
    { de: "Trink mehr Wasser!", ku: "زیاتر ئاو بخۆوە!" },
    { de: "Warten Sie einen Moment!", ku: "ساتێک چاوەڕێ بکەن!" },
    { de: "Iss dein Gemüse!", ku: "سەوزەکەت بخۆ!" },
    { de: "Geh nach Hause!", ku: "بڕۆ ماڵەوە!" },
    { de: "Helfen Sie mir bitte!", ku: "تکایە یارمەتیم بدەن!" },
    { de: "Schreibt die Wörter auf!", ku: "وشەکان بنووسن!" }
  ],
  "Präpositionen: Ort & Zeit": [
    { de: "Ich bin um acht Uhr zu Hause.", ku: "کاتژمێر هەشت لە ماڵەوەم." },
    { de: "Das Buch liegt auf dem Tisch.", ku: "کتێبەکە لەسەر مێزەکەیە." },
    { de: "Wir treffen uns am Montag.", ku: "دووشەممە یەکتر دەبینین." },
    { de: "Im Sommer fahren wir ans Meer.", ku: "لە هاویندا دەچینە دەریا." },
    { de: "Die Katze ist unter dem Stuhl.", ku: "پشیلەکە لەژێر کورسییەکەیە." },
    { de: "Er wohnt in einer großen Stadt.", ku: "لە شارێکی گەورەدا دەژی." },
    { de: "Das Bild hängt an der Wand.", ku: "وێنەکە بە دیوارەوەیە." },
    { de: "Ich komme am Abend.", ku: "ئێوارە دێم." },
    { de: "Wir warten vor dem Kino.", ku: "لەبەردەم سینەما چاوەڕێ دەکەین." },
    { de: "Im Januar ist es sehr kalt.", ku: "لە ژانویەدا زۆر ساردە." }
  ],
  "Dativ": [
    { de: "Ich gebe dem Kind einen Apfel.", ku: "سێوێک دەدەمە منداڵەکە." },
    { de: "Sie hilft ihrer Mutter.", ku: "یارمەتی دایکی دەدات." },
    { de: "Das Buch gehört dem Lehrer.", ku: "کتێبەکە هی مامۆستایە." },
    { de: "Ich danke dir für deine Hilfe.", ku: "سوپاست دەکەم بۆ یارمەتیت." },
    { de: "Er schreibt seinem Freund einen Brief.", ku: "نامەیەک بۆ هاوڕێکەی دەنووسێت." },
    { de: "Das Auto gefällt mir sehr.", ku: "ئۆتۆمبێلەکە زۆر بەدڵمە." },
    { de: "Wir helfen den Kindern.", ku: "یارمەتی منداڵەکان دەدەین." },
    { de: "Sie gibt dem Hund Wasser.", ku: "ئاو دەداتە سەگەکە." },
    { de: "Ich glaube dir.", ku: "باوەڕت پێدەکەم." },
    { de: "Das gehört meiner Schwester.", ku: "ئەمە هی خوشکمە." }
  ],
  "Wechselpräpositionen": [
    { de: "Ich gehe in die Schule.", ku: "دەچمە قوتابخانە (جووڵە)." },
    { de: "Ich bin in der Schule.", ku: "لە قوتابخانەم (شوێن)." },
    { de: "Er legt das Buch auf den Tisch.", ku: "کتێبەکە دەخاتە سەر مێزەکە." },
    { de: "Das Buch liegt auf dem Tisch.", ku: "کتێبەکە لەسەر مێزەکەیە." },
    { de: "Sie hängt das Bild an die Wand.", ku: "وێنەکە بە دیوارەوە هەڵدەواسێت." },
    { de: "Das Bild hängt an der Wand.", ku: "وێنەکە بە دیوارەوەیە." },
    { de: "Die Katze springt auf das Sofa.", ku: "پشیلەکە دەفڕێتە سەر قەنەفەکە." },
    { de: "Wir fahren in die Stadt.", ku: "دەچینە شار." },
    { de: "Das Kind steht hinter der Tür.", ku: "منداڵەکە لەپشت دەرگاکەوەیە." },
    { de: "Ich setze mich auf den Stuhl.", ku: "لەسەر کورسییەکە دادەنیشم." }
  ],
  "Perfekt": [
    { de: "Ich habe gestern viel gelernt.", ku: "دوێنێ زۆرم خوێند." },
    { de: "Wir haben einen Film gesehen.", ku: "فیلمێکمان بینی." },
    { de: "Er ist nach Berlin gefahren.", ku: "چووە بەرلین." },
    { de: "Sie hat ein Buch gekauft.", ku: "کتێبێکی کڕی." },
    { de: "Hast du schon gegessen?", ku: "خواردووتە؟" },
    { de: "Wir sind spät angekommen.", ku: "درەنگ گەیشتین." },
    { de: "Ich habe meine Hausaufgaben gemacht.", ku: "ئەرکی ماڵەوەم کرد." },
    { de: "Er hat den ganzen Tag gearbeitet.", ku: "بە درێژایی ڕۆژ کاری کرد." },
    { de: "Sie ist früh aufgestanden.", ku: "زوو هەستا." },
    { de: "Wir haben zusammen Kaffee getrunken.", ku: "پێکەوە قاوەمان خواردەوە." }
  ],
  "Präteritum (sein, haben, Modalverben)": [
    { de: "Ich war gestern krank.", ku: "دوێنێ نەخۆش بووم." },
    { de: "Wir waren im Urlaub.", ku: "لە پشوودا بووین." },
    { de: "Sie hatte keine Zeit.", ku: "کاتی نەبوو." },
    { de: "Er hatte einen schönen Tag.", ku: "ڕۆژێکی خۆشی هەبوو." },
    { de: "Ich konnte nicht schlafen.", ku: "نەمتوانی بخەوم." },
    { de: "Wir mussten lange warten.", ku: "ناچار بووین زۆر چاوەڕێ بکەین." },
    { de: "Du wolltest doch kommen.", ku: "تۆ دەتویست بێیت." },
    { de: "Es war sehr kalt im Winter.", ku: "لە زستاندا زۆر سارد بوو." },
    { de: "Sie durfte nicht ausgehen.", ku: "بۆی نەبوو بچێتە دەرەوە." },
    { de: "Ich hatte als Kind einen Hund.", ku: "لە منداڵیمدا سەگێکم هەبوو." }
  ],
  "Reflexive Verben": [
    { de: "Ich freue mich auf das Wochenende.", ku: "بە کۆتایی هەفتە دڵخۆشم." },
    { de: "Er wäscht sich jeden Morgen.", ku: "هەموو بەیانییەک خۆی دەشوات." },
    { de: "Wir treffen uns um sechs.", ku: "کاتژمێر شەش یەکتر دەبینین." },
    { de: "Setz dich bitte hierher.", ku: "تکایە لێرە دانیشە." },
    { de: "Sie interessiert sich für Kunst.", ku: "ئارەزووی هونەر دەکات." },
    { de: "Ich fühle mich heute gut.", ku: "ئەمڕۆ هەست بە باشی دەکەم." },
    { de: "Beeil dich, wir sind spät!", ku: "خێرا بکە، درەنگین!" },
    { de: "Er erinnert sich an seine Kindheit.", ku: "منداڵیی خۆی بیر دەکەوێتەوە." },
    { de: "Wir unterhalten uns über Politik.", ku: "دەربارەی سیاسەت گفتوگۆ دەکەین." },
    { de: "Ich ärgere mich über den Lärm.", ku: "لە دەنگەدەنگەکە بێزار دەبم." }
  ],
  "Konjunktionen: und, oder, aber, denn, sondern": [
    { de: "Ich lerne Deutsch und Englisch.", ku: "ئەڵمانی و ئینگلیزی فێردەبم." },
    { de: "Möchtest du Tee oder Kaffee?", ku: "چا دەتەوێت یان قاوە؟" },
    { de: "Ich bin müde, aber glücklich.", ku: "ماندووم، بەڵام بەختەوەرم." },
    { de: "Ich bleibe zu Hause, denn es regnet.", ku: "لە ماڵەوە دەمێنمەوە، چونکە باران دەبارێت." },
    { de: "Das ist nicht billig, sondern teuer.", ku: "ئەمە ئەرزان نییە، بەڵکو گرانە." },
    { de: "Er kocht und sie deckt den Tisch.", ku: "ئەو خواردن لێدەنێ و ئەو مێزەکە ئامادە دەکات." },
    { de: "Wir können laufen oder fahren.", ku: "دەتوانین بە پێ بڕۆین یان بە ئۆتۆمبێل." },
    { de: "Ich rufe an, aber niemand antwortet.", ku: "پەیوەندی دەکەم، بەڵام کەس وەڵام نادات." },
    { de: "Sie isst nicht Fleisch, sondern Gemüse.", ku: "گۆشت ناخوات، بەڵکو سەوزە." },
    { de: "Ich gehe früh, denn ich bin müde.", ku: "زوو دەڕۆم، چونکە ماندووم." }
  ],
  "Nebensatz: weil, dass": [
    { de: "Ich lerne Deutsch, weil ich in Deutschland lebe.", ku: "ئەڵمانی فێردەبم، چونکە لە ئەڵمانیا دەژیم." },
    { de: "Ich glaube, dass er recht hat.", ku: "پێموایە کە ڕاستە." },
    { de: "Sie bleibt zu Hause, weil sie krank ist.", ku: "لە ماڵەوە دەمێنێتەوە، چونکە نەخۆشە." },
    { de: "Ich weiß, dass du fleißig bist.", ku: "دەزانم کە کۆششکاریت." },
    { de: "Wir gehen nicht, weil es regnet.", ku: "ناڕۆین، چونکە باران دەبارێت." },
    { de: "Er sagt, dass er morgen kommt.", ku: "دەڵێت کە سبەینێ دێت." },
    { de: "Ich freue mich, dass du hier bist.", ku: "دڵخۆشم کە لێرەیت." },
    { de: "Sie lernt viel, weil sie eine Prüfung hat.", ku: "زۆر دەخوێنێت، چونکە تاقیکردنەوەی هەیە." },
    { de: "Ich hoffe, dass alles gut wird.", ku: "هیوادارم هەمووشت باش بێت." },
    { de: "Wir essen jetzt, weil wir Hunger haben.", ku: "ئێستا دەخۆین، چونکە برسیمانە." }
  ],
  "Komparativ": [
    { de: "Mein Bruder ist größer als ich.", ku: "برام لە من گەورەترە." },
    { de: "Heute ist es kälter als gestern.", ku: "ئەمڕۆ لە دوێنێ ساردترە." },
    { de: "Dieses Buch ist interessanter.", ku: "ئەم کتێبە سەرنجڕاکێشترە." },
    { de: "Berlin ist größer als Bochum.", ku: "بەرلین لە بۆخوم گەورەترە." },
    { de: "Sie ist jünger als ihr Bruder.", ku: "لە برای گەنجترە." },
    { de: "Das Auto ist teurer als das Fahrrad.", ku: "ئۆتۆمبێل لە پاسکیل گرانترە." },
    { de: "Kaffee schmeckt mir besser als Tee.", ku: "قاوە لە چا پێم خۆشترە." },
    { de: "Er läuft schneller als ich.", ku: "لە من خێراتر ڕادەکات." },
    { de: "Diese Aufgabe ist schwerer.", ku: "ئەم ئەرکە قورسترە." },
    { de: "Im Sommer sind die Tage länger.", ku: "لە هاویندا ڕۆژەکان درێژترن." }
  ],
  "Superlativ": [
    { de: "Das ist das beste Restaurant der Stadt.", ku: "ئەمە باشترین چێشتخانەی شارەکەیە." },
    { de: "Er ist der Größte in der Klasse.", ku: "لە پۆلەکەدا گەورەترینە." },
    { de: "Der Mount Everest ist der höchste Berg.", ku: "ئێڤەرێست بەرزترین شاخە." },
    { de: "Sie spricht am besten Deutsch.", ku: "باشترین ئەڵمانی قسە دەکات." },
    { de: "Heute ist der kälteste Tag des Jahres.", ku: "ئەمڕۆ ساردترین ڕۆژی ساڵە." },
    { de: "Das ist mein liebstes Buch.", ku: "ئەمە خۆشەویستترین کتێبمە." },
    { de: "Er läuft am schnellsten.", ku: "خێراترین ڕادەکات." },
    { de: "Diese Stadt ist die schönste.", ku: "ئەم شارە جوانترینە." },
    { de: "Du bist mein bester Freund.", ku: "تۆ باشترین هاوڕێمی." },
    { de: "Das war der längste Tag meines Lebens.", ku: "ئەوە درێژترین ڕۆژی ژیانم بوو." }
  ],
  "Genitiv (Einführung)": [
    { de: "Das ist das Auto meines Vaters.", ku: "ئەمە ئۆتۆمبێلی باوکمە." },
    { de: "Die Farbe der Blume ist rot.", ku: "ڕەنگی گوڵەکە سوورە." },
    { de: "Der Titel des Buches ist lang.", ku: "ناونیشانی کتێبەکە درێژە." },
    { de: "Das Haus meiner Eltern ist alt.", ku: "خانووی دایک و باوکم کۆنە." },
    { de: "Der Name des Kindes ist Lara.", ku: "ناوی منداڵەکە لارایە." },
    { de: "Die Tür des Hauses ist blau.", ku: "دەرگای خانووەکە شینە." },
    { de: "Das ist die Tasche meiner Schwester.", ku: "ئەمە جانتای خوشکمە." },
    { de: "Der Anfang des Films war spannend.", ku: "سەرەتای فیلمەکە سەرنجڕاکێش بوو." },
    { de: "Die Fenster des Zimmers sind groß.", ku: "پەنجەرەکانی ژوورەکە گەورەن." },
    { de: "Das ist das Büro des Chefs.", ku: "ئەمە نووسینگەی بەڕێوەبەرەکەیە." }
  ],
  "Pronomen: Personal-, Possessiv-, Demonstrativ-": [
    { de: "Ich sehe ihn jeden Tag.", ku: "هەموو ڕۆژێک دەیبینم." },
    { de: "Sie gibt ihm das Buch.", ku: "کتێبەکەی دەداتێ." },
    { de: "Dieser Stuhl ist frei.", ku: "ئەم کورسییە بەتاڵە." },
    { de: "Das ist meiner, nicht deiner.", ku: "ئەمە هی منە، نەک هی تۆ." },
    { de: "Diese Tasche gefällt mir.", ku: "ئەم جانتایە بەدڵمە." },
    { de: "Welches Auto möchtest du? Dieses.", ku: "کام ئۆتۆمبێلت دەوێت؟ ئەمە." },
    { de: "Kennst du sie?", ku: "دەیناسیت؟" },
    { de: "Er hilft uns immer.", ku: "هەمیشە یارمەتیمان دەدات." },
    { de: "Ich habe es ihr gegeben.", ku: "دامە ئەو (مێ)." },
    { de: "Jener Mann dort ist mein Lehrer.", ku: "ئەو پیاوەی ئەوێ مامۆستامە." }
  ],
  "Relativsätze (basic)": [
    { de: "Der Mann, der dort steht, ist mein Onkel.", ku: "ئەو پیاوەی لەوێ ڕاوەستاوە، ماممە." },
    { de: "Das Buch, das ich lese, ist spannend.", ku: "ئەو کتێبەی دەیخوێنمەوە، سەرنجڕاکێشە." },
    { de: "Die Frau, die singt, ist berühmt.", ku: "ئەو ژنەی گۆرانی دەڵێت، بەناوبانگە." },
    { de: "Das Auto, das rot ist, gehört mir.", ku: "ئەو ئۆتۆمبێلەی سوورە، هی منە." },
    { de: "Der Freund, der mir hilft, heißt Karwan.", ku: "ئەو هاوڕێیەی یارمەتیم دەدات، ناوی کاروانە." },
    { de: "Die Stadt, die schön ist, heißt Köln.", ku: "ئەو شارەی جوانە، ناوی کۆلنە." },
    { de: "Das Kind, das spielt, ist mein Sohn.", ku: "ئەو منداڵەی یاری دەکات، کوڕمە." },
    { de: "Der Lehrer, der Deutsch unterrichtet, ist nett.", ku: "ئەو مامۆستایەی ئەڵمانی دەڵێتەوە، بەسۆزە." },
    { de: "Die Blume, die hier wächst, ist selten.", ku: "ئەو گوڵەی لێرە گەشە دەکات، دەگمەنە." },
    { de: "Das Handy, das neu ist, war teuer.", ku: "ئەو مۆبایلەی نوێیە، گران بوو." }
  ],
  "Plusquamperfekt": [
    { de: "Ich hatte schon gegessen, als er kam.", ku: "پێشتر خواردبووم، کاتێک ئەو هات." },
    { de: "Sie war schon gegangen, bevor ich ankam.", ku: "پێشتر ڕۆیشتبوو، پێش ئەوەی بگەم." },
    { de: "Wir hatten den Film schon gesehen.", ku: "پێشتر فیلمەکەمان بینیبوو." },
    { de: "Nachdem er gegessen hatte, ging er schlafen.", ku: "دوای ئەوەی خواردبووی، چووە خەو." },
    { de: "Ich hatte den Brief geschrieben.", ku: "نامەکەم نووسیبوو." },
    { de: "Sie hatten das Haus schon verkauft.", ku: "پێشتر خانووەکەیان فرۆشتبوو." },
    { de: "Er war nie zuvor geflogen.", ku: "پێشتر هەرگیز نەفڕیبوو." },
    { de: "Wir waren schon angekommen, als es regnete.", ku: "پێشتر گەیشتبووین، کاتێک باران باری." },
    { de: "Hattest du davon gehört?", ku: "گوێت لێی بووبوو؟" },
    { de: "Ich hatte meinen Schlüssel vergessen.", ku: "کلیلەکەم لەبیر کردبوو." }
  ],
  "Futur I": [
    { de: "Ich werde nächstes Jahr Deutsch lernen.", ku: "ساڵی داهاتوو ئەڵمانی فێردەبم." },
    { de: "Morgen wird es regnen.", ku: "سبەینێ باران دەبارێت." },
    { de: "Wir werden uns bald wiedersehen.", ku: "بەم زووانە یەکتر دەبینینەوە." },
    { de: "Sie wird Ärztin werden.", ku: "دەبێتە پزیشک." },
    { de: "Ich werde dich morgen anrufen.", ku: "سبەینێ پەیوەندیت پێوە دەکەم." },
    { de: "Er wird die Prüfung bestehen.", ku: "لە تاقیکردنەوەکە سەردەکەوێت." },
    { de: "Das Wetter wird besser werden.", ku: "کەش‌وهەوا باشتر دەبێت." },
    { de: "Wir werden im Sommer nach Italien fahren.", ku: "لە هاویندا دەچینە ئیتاڵیا." },
    { de: "Ich werde nie aufgeben.", ku: "هەرگیز واز ناهێنم." },
    { de: "Du wirst es schaffen.", ku: "لەپێناوی دێیت." }
  ],
  "Relativsätze (detail)": [
    { de: "Der Mann, dem ich helfe, ist alt.", ku: "ئەو پیاوەی یارمەتی دەدەم، پیرە." },
    { de: "Das Kind, dessen Buch verloren ist, weint.", ku: "ئەو منداڵەی کتێبەکەی ون بووە، دەگری." },
    { de: "Die Stadt, in der ich wohne, ist klein.", ku: "ئەو شارەی تێیدا دەژیم، بچووکە." },
    { de: "Der Film, den ich gesehen habe, war gut.", ku: "ئەو فیلمەی بینیم، باش بوو." },
    { de: "Die Leute, mit denen ich arbeite, sind nett.", ku: "ئەو کەسانەی لەگەڵیان کار دەکەم، بەسۆزن." },
    { de: "Das Auto, das er gekauft hat, ist teuer.", ku: "ئەو ئۆتۆمبێلەی کڕیویەتی، گرانە." },
    { de: "Die Frau, deren Sohn hier lernt, ist Lehrerin.", ku: "ئەو ژنەی کوڕەکەی لێرە دەخوێنێت، مامۆستایە." },
    { de: "Der Tag, an dem wir uns trafen, war schön.", ku: "ئەو ڕۆژەی یەکترمان بینی، خۆش بوو." },
    { de: "Das Haus, in dem sie wohnt, ist alt.", ku: "ئەو خانووەی تێیدا دەژی، کۆنە." },
    { de: "Der Lehrer, dem die Schüler vertrauen, ist gut.", ku: "ئەو مامۆستایەی قوتابییەکان متمانەی پێدەکەن، باشە." }
  ],
  "Konjunktiv II": [
    { de: "Ich würde gern nach Japan reisen.", ku: "حەز دەکەم بچمە ژاپۆن." },
    { de: "An deiner Stelle würde ich mehr lernen.", ku: "لە جێی تۆ بوومایە زیاتر دەخوێندم." },
    { de: "Könnten Sie mir bitte helfen?", ku: "دەکرێت تکایە یارمەتیم بدەن؟" },
    { de: "Wenn ich Zeit hätte, würde ich kommen.", ku: "ئەگەر کاتم هەبووایە، دەهاتم." },
    { de: "Das wäre wirklich toll.", ku: "ئەمە بەڕاستی نایاب دەبوو." },
    { de: "Ich hätte gern einen Kaffee.", ku: "حەز دەکەم قاوەیەکم هەبێت." },
    { de: "Würdest du mir das erklären?", ku: "ئەمەم بۆ ڕوون دەکەیتەوە؟" },
    { de: "Wenn er reich wäre, würde er reisen.", ku: "ئەگەر دەوڵەمەند بوایە، گەشتی دەکرد." },
    { de: "Ich würde lieber zu Hause bleiben.", ku: "پێم باشترە لە ماڵەوە بمێنمەوە." },
    { de: "Es wäre besser, früh zu gehen.", ku: "باشتر دەبوو زوو بڕۆیت." }
  ],
  "Passiv (Vorgangspassiv)": [
    { de: "Das Auto wird gerade repariert.", ku: "ئۆتۆمبێلەکە ئێستا چاک دەکرێتەوە." },
    { de: "Die Tür wird langsam geöffnet.", ku: "دەرگاکە بەهێواشی دەکرێتەوە." },
    { de: "Hier wird Deutsch gesprochen.", ku: "لێرە ئەڵمانی قسە دەکرێت." },
    { de: "Das Buch wird von vielen gelesen.", ku: "کتێبەکە لەلایەن زۆر کەسەوە دەخوێنرێتەوە." },
    { de: "Das Essen wird in der Küche gekocht.", ku: "خواردنەکە لە چێشتخانە لێدەنرێت." },
    { de: "Die Häuser werden schnell gebaut.", ku: "خانووەکان خێرا دروست دەکرێن." },
    { de: "Der Brief wird heute geschickt.", ku: "نامەکە ئەمڕۆ دەنێردرێت." },
    { de: "Die Fenster werden geputzt.", ku: "پەنجەرەکان پاک دەکرێنەوە." },
    { de: "Das Problem wird bald gelöst.", ku: "کێشەکە بەم زووانە چارەسەر دەکرێت." },
    { de: "Die Arbeit wird gut gemacht.", ku: "کارەکە باش دەکرێت." }
  ],
  "Infinitiv mit zu": [
    { de: "Ich versuche, jeden Tag zu lernen.", ku: "هەوڵ دەدەم هەموو ڕۆژێک فێربم." },
    { de: "Es ist wichtig, viel zu üben.", ku: "گرنگە زۆر مەشق بکەیت." },
    { de: "Ich habe vergessen, dich anzurufen.", ku: "بیرم چووە پەیوەندیت پێوە بکەم." },
    { de: "Es macht Spaß, mit dir zu reden.", ku: "لەگەڵت قسەکردن خۆشە." },
    { de: "Ich hoffe, dich bald zu sehen.", ku: "هیوادارم بەم زووانە بتبینم." },
    { de: "Es ist nicht leicht, eine Sprache zu lernen.", ku: "ئاسان نییە زمانێک فێربیت." },
    { de: "Ich habe keine Zeit, zu warten.", ku: "کاتم نییە چاوەڕێ بکەم." },
    { de: "Er beginnt, Deutsch zu sprechen.", ku: "دەست دەکات بە ئەڵمانی قسەکردن." },
    { de: "Sie hat Angst, zu fliegen.", ku: "دەترسێت بفڕێت." },
    { de: "Vergiss nicht, das Licht auszumachen.", ku: "لەبیرت نەچێت چراکە بکوژێنیتەوە." }
  ],
  "um…zu / ohne…zu / statt…zu": [
    { de: "Ich lerne viel, um die Prüfung zu bestehen.", ku: "زۆر دەخوێنم بۆ ئەوەی لە تاقیکردنەوەکە سەربکەوم." },
    { de: "Er ging weg, ohne etwas zu sagen.", ku: "ڕۆیشت بەبێ ئەوەی شتێک بڵێت." },
    { de: "Statt zu schlafen, lernte sie die ganze Nacht.", ku: "لەبری خەوتن، بە درێژایی شەو خوێندی." },
    { de: "Ich spare Geld, um ein Auto zu kaufen.", ku: "پارە کۆدەکەمەوە بۆ ئەوەی ئۆتۆمبێلێک بکڕم." },
    { de: "Sie verließ das Haus, ohne zu frühstücken.", ku: "ماڵی بەجێهێشت بەبێ ئەوەی نانی بەیانی بخوات." },
    { de: "Statt zu arbeiten, spielt er den ganzen Tag.", ku: "لەبری کارکردن، بە درێژایی ڕۆژ یاری دەکات." },
    { de: "Wir fahren früh los, um den Stau zu vermeiden.", ku: "زوو بەڕێدەکەوین بۆ ئەوەی لە قەرەباڵغی خۆ بپارێزین." },
    { de: "Er ging, ohne sich zu verabschieden.", ku: "ڕۆیشت بەبێ ماڵئاوایی." },
    { de: "Ich rufe an, um einen Termin zu machen.", ku: "پەیوەندی دەکەم بۆ ئەوەی ژووانێک دابنێم." },
    { de: "Statt zu fahren, gehen wir zu Fuß.", ku: "لەبری ئۆتۆمبێل، بە پێ دەڕۆین." }
  ],
  "Adjektivdeklination": [
    { de: "Der rote Apfel schmeckt süß.", ku: "سێوە سوورەکە تامی شیرینە." },
    { de: "Ich kaufe ein neues Auto.", ku: "ئۆتۆمبێلێکی نوێ دەکڕم." },
    { de: "Sie wohnt in einem großen Haus.", ku: "لە خانوویەکی گەورەدا دەژی." },
    { de: "Das ist eine interessante Geschichte.", ku: "ئەمە چیرۆکێکی سەرنجڕاکێشە." },
    { de: "Wir trinken kaltes Wasser.", ku: "ئاوی سارد دەخۆینەوە." },
    { de: "Der kleine Hund schläft.", ku: "سەگە بچووکەکە خەوتووە." },
    { de: "Ich mag die schöne Stadt.", ku: "شارە جوانەکەم پێ خۆشە." },
    { de: "Er trägt einen schwarzen Mantel.", ku: "پاڵتۆیەکی ڕەش لەبەری دەکات." },
    { de: "Das alte Buch ist wertvoll.", ku: "کتێبە کۆنەکە بەنرخە." },
    { de: "Sie hat lange braune Haare.", ku: "مووی درێژی قاوەیی هەیە." }
  ],
  "Genitiv": [
    { de: "Das Haus meines Vaters ist groß.", ku: "خانووی باوکم گەورەیە." },
    { de: "Wegen des schlechten Wetters bleiben wir.", ku: "بەهۆی کەش‌وهەوای خراپ دەمێنینەوە." },
    { de: "Trotz des Regens gehen wir spazieren.", ku: "سەرەڕای بارانەکە دەچینە پیاسە." },
    { de: "Die Meinung der Leute ist wichtig.", ku: "بۆچوونی خەڵک گرنگە." },
    { de: "Während des Tages arbeite ich.", ku: "لە ماوەی ڕۆژدا کار دەکەم." },
    { de: "Der Anfang des Films war langweilig.", ku: "سەرەتای فیلمەکە بێزارکەر بوو." },
    { de: "Das ist das Auto meiner Mutter.", ku: "ئەمە ئۆتۆمبێلی دایکمە." },
    { de: "Die Tür des Zimmers ist zu.", ku: "دەرگای ژوورەکە داخراوە." },
    { de: "Das Ende der Geschichte war traurig.", ku: "کۆتایی چیرۆکەکە خەمگین بوو." },
    { de: "Die Hauptstadt des Landes ist schön.", ku: "پایتەختی وڵاتەکە جوانە." }
  ],
  "Indirekte Fragen": [
    { de: "Weißt du, wo der Bahnhof ist?", ku: "دەزانیت وێستگەکە لەکوێیە؟" },
    { de: "Ich frage mich, ob er kommt.", ku: "لە خۆم دەپرسم ئایا دێت." },
    { de: "Kannst du mir sagen, wie spät es ist?", ku: "دەتوانیت پێم بڵێیت کاتژمێر چەندە؟" },
    { de: "Ich weiß nicht, was das bedeutet.", ku: "نازانم ئەمە چی دەگەیەنێت." },
    { de: "Sie fragt, warum ich traurig bin.", ku: "دەپرسێت بۆچی خەمگینم." },
    { de: "Ich möchte wissen, wann der Kurs beginnt.", ku: "دەمەوێت بزانم خولەکە کەی دەست پێدەکات." },
    { de: "Er fragt, ob das Geschäft offen ist.", ku: "دەپرسێت ئایا دوکانەکە کراوەیە." },
    { de: "Weißt du, wer das gesagt hat?", ku: "دەزانیت کێ ئەمەی گوت؟" },
    { de: "Ich frage, wie das funktioniert.", ku: "دەپرسم ئەمە چۆن کار دەکات." },
    { de: "Sag mir, wohin du gehst.", ku: "پێم بڵێ بۆ کوێ دەچیت." }
  ],
  "Konjunktionen: obwohl, wenn, als, während…": [
    { de: "Obwohl es regnet, gehe ich spazieren.", ku: "هەرچەندە باران دەبارێت، دەچمە پیاسە." },
    { de: "Wenn ich Zeit habe, besuche ich dich.", ku: "ئەگەر کاتم هەبێت، سەردانت دەکەم." },
    { de: "Als ich klein war, wohnte ich in Erbil.", ku: "کاتێک بچووک بووم، لە هەولێر دەژیام." },
    { de: "Während sie kocht, deckt er den Tisch.", ku: "لە کاتێکدا ئەو خواردن لێدەنێ، ئەو مێزەکە ئامادە دەکات." },
    { de: "Bevor ich gehe, trinke ich Kaffee.", ku: "پێش ئەوەی بڕۆم، قاوە دەخۆمەوە." },
    { de: "Nachdem wir gegessen hatten, gingen wir.", ku: "دوای ئەوەی خواردمان، ڕۆیشتین." },
    { de: "Seitdem er hier ist, bin ich glücklich.", ku: "لەو کاتەوەی لێرەیە، بەختەوەرم." },
    { de: "Obwohl er müde ist, arbeitet er weiter.", ku: "هەرچەندە ماندووە، بەردەوامە لە کارکردن." },
    { de: "Wenn das Wetter gut ist, fahren wir ans Meer.", ku: "ئەگەر کەش‌وهەوا باش بێت، دەچینە دەریا." },
    { de: "Als der Film begann, wurde es still.", ku: "کاتێک فیلمەکە دەستی پێکرد، بێدەنگی باڵی کێشا." }
  ],
  "Präpositionen mit Genitiv": [
    { de: "Während des Kurses darf man nicht reden.", ku: "لە ماوەی خولەکەدا نابێت قسە بکرێت." },
    { de: "Wegen des Problems kam er zu spät.", ku: "بەهۆی کێشەکەوە درەنگ هات." },
    { de: "Trotz der Kälte gehen wir raus.", ku: "سەرەڕای ساردی دەچینە دەرەوە." },
    { de: "Statt des Kaffees trinke ich Tee.", ku: "لەبری قاوە چا دەخۆمەوە." },
    { de: "Innerhalb einer Woche antworte ich.", ku: "لە ماوەی هەفتەیەکدا وەڵام دەدەمەوە." },
    { de: "Außerhalb der Stadt ist es ruhig.", ku: "لە دەرەوەی شارەکە ئارامە." },
    { de: "Während der Ferien reisen wir viel.", ku: "لە ماوەی پشوودا زۆر گەشت دەکەین." },
    { de: "Wegen des Sturms blieben die Schulen zu.", ku: "بەهۆی ڕەشەبادا قوتابخانەکان داخران." },
    { de: "Trotz seiner Krankheit arbeitet er.", ku: "سەرەڕای نەخۆشییەکەی کار دەکات." },
    { de: "Anstatt eines Briefes schickte sie eine E-Mail.", ku: "لەبری نامەیەک، ئیمەیڵێکی نارد." }
  ],
  "Passiv (alle Formen)": [
    { de: "Das Haus wird dieses Jahr gebaut.", ku: "خانووەکە ئەمساڵ دروست دەکرێت." },
    { de: "Das Auto wurde letzte Woche repariert.", ku: "ئۆتۆمبێلەکە هەفتەی ڕابردوو چاک کرایەوە." },
    { de: "Der Brief ist schon geschickt worden.", ku: "نامەکە پێشتر نێردراوە." },
    { de: "Die Stadt ist im Krieg zerstört worden.", ku: "شارەکە لە جەنگدا وێران کراوە." },
    { de: "Die Regeln werden klar erklärt.", ku: "یاساکان بە ڕوونی ڕوون دەکرێنەوە." },
    { de: "Das Projekt wird nächstes Jahr beendet werden.", ku: "پڕۆژەکە ساڵی داهاتوو تەواو دەکرێت." },
    { de: "Die Entscheidung wurde gestern getroffen.", ku: "بڕیارەکە دوێنێ درا." },
    { de: "Viele Bücher werden jedes Jahr verkauft.", ku: "هەموو ساڵێک کتێبی زۆر دەفرۆشرێت." },
    { de: "Das Problem ist endlich gelöst worden.", ku: "کێشەکە لەکۆتاییدا چارەسەر کرا." },
    { de: "Die Arbeit wird bald fertig sein.", ku: "کارەکە بەم زووانە تەواو دەبێت." }
  ],
  "Zustandspassiv": [
    { de: "Das Geschäft ist seit gestern geschlossen.", ku: "دوکانەکە لە دوێنێوە داخراوە." },
    { de: "Der Brief ist schon geschrieben.", ku: "نامەکە نووسراوە." },
    { de: "Alles ist für die Party vorbereitet.", ku: "هەمووشت بۆ ئاهەنگەکە ئامادەکراوە." },
    { de: "Das Fenster ist den ganzen Tag geöffnet.", ku: "پەنجەرەکە بە درێژایی ڕۆژ کراوەیە." },
    { de: "Die Arbeit ist endlich erledigt.", ku: "کارەکە لەکۆتاییدا تەواوکراوە." },
    { de: "Das Problem ist jetzt gelöst.", ku: "کێشەکە ئێستا چارەسەرکراوە." },
    { de: "Die Tür ist abgeschlossen.", ku: "دەرگاکە کلیل کراوە." },
    { de: "Der Tisch ist schon gedeckt.", ku: "مێزەکە ئامادەکراوە." },
    { de: "Das Auto ist gut repariert.", ku: "ئۆتۆمبێلەکە باش چاککراوەتەوە." },
    { de: "Die Hausaufgaben sind gemacht.", ku: "ئەرکەکانی ماڵەوە کراون." }
  ],
  "Passiv mit Modalverben": [
    { de: "Das muss heute gemacht werden.", ku: "ئەمە دەبێت ئەمڕۆ بکرێت." },
    { de: "Das Auto kann repariert werden.", ku: "ئۆتۆمبێلەکە دەکرێت چاک بکرێتەوە." },
    { de: "Solche Fehler sollten vermieden werden.", ku: "دەبێت خۆ لەو جۆرە هەڵانە بپارێزرێت." },
    { de: "Hier darf nicht geraucht werden.", ku: "لێرە نابێت جگەرە بکێشرێت." },
    { de: "Die Regeln müssen befolgt werden.", ku: "دەبێت یاساکان پەیڕەو بکرێن." },
    { de: "Das kann nicht geändert werden.", ku: "ئەمە ناتوانرێت بگۆڕدرێت." },
    { de: "Die Aufgabe muss bis morgen erledigt werden.", ku: "ئەرکەکە دەبێت تا سبەینێ تەواو بکرێت." },
    { de: "Das Problem kann gelöst werden.", ku: "کێشەکە دەکرێت چارەسەر بکرێت." },
    { de: "Die Tür sollte geschlossen werden.", ku: "دەبێت دەرگاکە داخرێت." },
    { de: "Diese Frage muss beantwortet werden.", ku: "دەبێت ئەم پرسیارە وەڵام بدرێتەوە." }
  ],
  "Konjunktiv I (indirekte Rede)": [
    { de: "Er sagt, er sei sehr beschäftigt.", ku: "دەڵێت کە زۆر سەرقاڵە." },
    { de: "Sie meint, sie habe keine Zeit.", ku: "پێیوایە کاتی نییە." },
    { de: "Man sagt, das Wetter werde besser.", ku: "دەگوترێت کەش‌وهەوا باشتر دەبێت." },
    { de: "Der Minister erklärt, er kenne das Problem.", ku: "وەزیر ڕادەگەیەنێت کە کێشەکە دەناسێت." },
    { de: "Er behauptet, er sei unschuldig.", ku: "بانگەشە دەکات کە بێتاوانە." },
    { de: "Sie sagte, sie komme später.", ku: "گوتی دواتر دێت." },
    { de: "Die Zeitung schreibt, die Preise seien gestiegen.", ku: "ڕۆژنامەکە دەنووسێت نرخەکان بەرز بوونەتەوە." },
    { de: "Er sagt, er habe alles verstanden.", ku: "دەڵێت هەمووی تێگەیشتووە." },
    { de: "Sie meint, das sei nicht wichtig.", ku: "پێیوایە ئەمە گرنگ نییە." },
    { de: "Man berichtet, der Unfall sei schwer gewesen.", ku: "ڕاپۆرت دەدرێت کە ڕووداوەکە سەخت بووە." }
  ],
  "Konjunktiv II (fortgeschritten)": [
    { de: "Ich hätte dir geholfen, wenn du gefragt hättest.", ku: "یارمەتیم دەدایت، ئەگەر داوات بکردایە." },
    { de: "Wenn ich mehr Zeit gehabt hätte, wäre ich gekommen.", ku: "ئەگەر کاتی زیاترم هەبووایە، دەهاتم." },
    { de: "Das wäre besser gewesen.", ku: "ئەمە باشتر دەبوو." },
    { de: "Ich hätte das nie gesagt.", ku: "ئەمەم هەرگیز نەدەگوت." },
    { de: "Wärst du früher gekommen, hättest du ihn getroffen.", ku: "ئەگەر زووتر بهاتبووایت، دەتدی." },
    { de: "Sie hätte die Prüfung bestehen können.", ku: "دەیتوانی لە تاقیکردنەوەکە سەربکەوێت." },
    { de: "An deiner Stelle hätte ich anders gehandelt.", ku: "لە جێی تۆ بە جۆرێکی تر هەڵسوکەوتم دەکرد." },
    { de: "Es hätte schlimmer sein können.", ku: "دەکرا خراپتر بوایە." },
    { de: "Wenn er ehrlich gewesen wäre, hätte ich ihm vertraut.", ku: "ئەگەر ڕاستگۆ بوایە، متمانەم پێدەکرد." },
    { de: "Ich wäre fast zu spät gekommen.", ku: "خەریک بوو درەنگ بگەم." }
  ],
  "Nominalisierung": [
    { de: "Das Lernen einer Sprache braucht Zeit.", ku: "فێربوونی زمانێک کات دەوێت." },
    { de: "Beim Lesen entspanne ich mich.", ku: "لە کاتی خوێندنەوەدا حەوانەوەم بۆ دەبێت." },
    { de: "Nach der Ankunft ruhten wir uns aus.", ku: "دوای گەیشتن حەوانەوەمان کرد." },
    { de: "Das Rauchen ist hier verboten.", ku: "جگەرەکێشان لێرە قەدەغەیە." },
    { de: "Vor dem Schlafen lese ich ein Buch.", ku: "پێش خەوتن کتێبێک دەخوێنمەوە." },
    { de: "Durch das Üben wird man besser.", ku: "بەهۆی مەشقکردنەوە مرۆڤ باشتر دەبێت." },
    { de: "Das Schwimmen macht mir Spaß.", ku: "مەلەکردن پێم خۆشە." },
    { de: "Beim Kochen höre ich Musik.", ku: "لە کاتی خواردن لێناندا گوێ لە مۆسیقا دەگرم." },
    { de: "Das Reisen erweitert den Horizont.", ku: "گەشتکردن دیدگا فراوان دەکات." },
    { de: "Nach dem Essen gehen wir spazieren.", ku: "دوای خواردن دەچینە پیاسە." }
  ],
  "Partizip I": [
    { de: "Das spielende Kind lacht laut.", ku: "منداڵە یاریکەرەکە بە دەنگی بەرز پێدەکەنێت." },
    { de: "Die schlafende Katze liegt auf dem Sofa.", ku: "پشیلە خەوتووەکە لەسەر قەنەفەکەیە." },
    { de: "Lachend kam sie ins Zimmer.", ku: "بەپێکەنینەوە هاتە ژوورەوە." },
    { de: "Die singende Frau ist meine Tante.", ku: "ژنە گۆرانیبێژەکە پوورمە." },
    { de: "Ein weinendes Baby braucht seine Mutter.", ku: "کۆرپەیەکی گریان دایکی دەوێت." },
    { de: "In der kommenden Woche habe ich frei.", ku: "لە هەفتەی داهاتوودا پشوودارم." },
    { de: "Der wartende Mann wurde ungeduldig.", ku: "پیاوە چاوەڕوانەکە بێ ئارام بوو." },
    { de: "Das brennende Haus war gefährlich.", ku: "خانووە سووتاوەکە مەترسیدار بوو." },
    { de: "Sie sah die fallenden Blätter.", ku: "گەڵا کەوتووەکانی بینی." },
    { de: "Der lächelnde Lehrer begrüßte uns.", ku: "مامۆستا زەردەخەنەدارەکە بەخێرهاتنی کردین." }
  ],
  "Partizip II als Adjektiv": [
    { de: "Die geöffnete Tür ließ kalte Luft herein.", ku: "دەرگا کراوەکە هەوای سارد هێنایە ژوورەوە." },
    { de: "Er fährt ein gebrauchtes Auto.", ku: "ئۆتۆمبێلێکی بەکارهاتوو لێدەخوڕێت." },
    { de: "Das geschriebene Wort bleibt.", ku: "وشە نووسراوەکە دەمێنێتەوە." },
    { de: "Die gekochte Suppe schmeckt gut.", ku: "شۆربا لێنراوەکە تامی خۆشە." },
    { de: "Ein verlorenes Spiel ist nicht das Ende.", ku: "یارییەکی دۆڕاو کۆتایی نییە." },
    { de: "Die reparierte Uhr funktioniert wieder.", ku: "کاتژمێرە چاککراوەکە دیسان کار دەکات." },
    { de: "Das gebackene Brot riecht herrlich.", ku: "نانە کراوەکە بۆنی خۆشە." },
    { de: "Die bezahlte Rechnung liegt auf dem Tisch.", ku: "پسوولە دراوەکە لەسەر مێزەکەیە." },
    { de: "Ein gut geplanter Tag ist produktiv.", ku: "ڕۆژێکی باش پلاندانراو بەردارە." },
    { de: "Die versteckten Schlüssel waren im Garten.", ku: "کلیلە شاراوەکان لە باخچەدا بوون." }
  ],
  "Erweiterte Relativsätze": [
    { de: "Der Tag, an dem wir uns trafen, war besonders.", ku: "ئەو ڕۆژەی یەکترمان بینی، تایبەت بوو." },
    { de: "Das Thema, über das wir sprachen, war wichtig.", ku: "ئەو بابەتەی باسمان کرد، گرنگ بوو." },
    { de: "Das ist alles, was du wissen musst.", ku: "ئەمە هەمووی ئەوەیە کە دەبێت بیزانیت." },
    { de: "Die Firma, bei der ich arbeite, ist groß.", ku: "ئەو کۆمپانیایەی تێیدا کار دەکەم، گەورەیە." },
    { de: "Der Grund, aus dem er ging, ist unklar.", ku: "ئەو هۆکارەی لەبەری ڕۆیشت، ڕوون نییە." },
    { de: "Die Stadt, in die wir reisen, ist alt.", ku: "ئەو شارەی بۆی گەشت دەکەین، کۆنە." },
    { de: "Der Mann, mit dem sie spricht, ist Arzt.", ku: "ئەو پیاوەی لەگەڵی قسە دەکات، پزیشکە." },
    { de: "Das ist der Ort, wo ich geboren wurde.", ku: "ئەمە ئەو شوێنەیە کە تێیدا لەدایک بووم." },
    { de: "Die Leute, für die ich arbeite, sind fair.", ku: "ئەو کەسانەی بۆیان کار دەکەم، دادپەروەرن." },
    { de: "Das Auto, dessen Motor kaputt ist, steht hier.", ku: "ئەو ئۆتۆمبێلەی بزوێنەرەکەی خراپ بووە، لێرە ڕاوەستاوە." }
  ],
  "Futur II": [
    { de: "Bis morgen werde ich die Arbeit beendet haben.", ku: "تا سبەینێ کارەکە تەواو دەکەم." },
    { de: "Er wird bis dann angekommen sein.", ku: "تا ئەو کاتە دەگات." },
    { de: "Sie wird es bestimmt vergessen haben.", ku: "بەدڵنیاییەوە بیری چووە." },
    { de: "Bis nächstes Jahr werden wir umgezogen sein.", ku: "تا ساڵی داهاتوو ماڵمان گواستووەتەوە." },
    { de: "Er wird das Buch schon gelesen haben.", ku: "ئەو کتێبەکەی خوێندووەتەوە (گریمانە)." },
    { de: "Bis Freitag werden sie zurückgekommen sein.", ku: "تا هەینی دەگەڕێنەوە." },
    { de: "Ich werde bis dahin alles vorbereitet haben.", ku: "تا ئەو کاتە هەمووشت ئامادە دەکەم." },
    { de: "Sie werden die Prüfung bestanden haben.", ku: "لە تاقیکردنەوەکە سەرکەوتوون (گریمانە)." },
    { de: "Wir werden uns wohl getroffen haben.", ku: "لەوانەیە یەکترمان بینیبێت." },
    { de: "Bis zum Abend wird er fertig sein.", ku: "تا ئێوارە تەواو دەبێت." }
  ],
  "Kausale, konsekutive, konzessive Sätze": [
    { de: "Da es spät war, gingen wir nach Hause.", ku: "لەبەر ئەوەی درەنگ بوو، چووینەوە ماڵەوە." },
    { de: "Es war so kalt, dass wir drinnen blieben.", ku: "ئەوەندە سارد بوو کە لە ژوورەوە ماینەوە." },
    { de: "Obwohl er reich ist, lebt er einfach.", ku: "هەرچەندە دەوڵەمەندە، بە سادەیی دەژی." },
    { de: "Weil sie krank war, blieb sie im Bett.", ku: "چونکە نەخۆش بوو، لە جێگادا مایەوە." },
    { de: "Er lernte fleißig, sodass er bestand.", ku: "بە کۆشش خوێندی، بۆیە سەرکەوت." },
    { de: "Trotzdem gab er nicht auf.", ku: "لەگەڵ ئەوەشدا واز نەهێنا." },
    { de: "Da ich müde war, ging ich früh schlafen.", ku: "لەبەر ئەوەی ماندوو بووم، زوو چووم بخەوم." },
    { de: "Das Wetter war so schön, dass wir spazieren gingen.", ku: "کەش‌وهەوا ئەوەندە خۆش بوو کە چووینە پیاسە." },
    { de: "Obwohl es teuer war, kaufte sie es.", ku: "هەرچەندە گران بوو، کڕی." },
    { de: "Er sprach leise, sodass ihn niemand hörte.", ku: "بە دەنگی نزم قسەی کرد، بۆیە کەس گوێی لێ نەبوو." }
  ],
  "Funktionsverbgefüge": [
    { de: "Wir müssen eine Entscheidung treffen.", ku: "دەبێت بڕیارێک بدەین." },
    { de: "Sie stellt seine Ehrlichkeit in Frage.", ku: "گومان لە ڕاستگۆییەکەی دەکات." },
    { de: "Ich stehe dir zur Verfügung.", ku: "بەردەستی تۆم." },
    { de: "Bildung spielt eine wichtige Rolle.", ku: "پەروەردە ڕۆڵێکی گرنگ دەگێڕێت." },
    { de: "Bitte nimm Rücksicht auf die anderen.", ku: "تکایە ڕەچاوی ئەوانی تر بکە." },
    { de: "Er nimmt meine Hilfe in Anspruch.", ku: "سوود لە یارمەتیم وەردەگرێت." },
    { de: "Die Regierung trifft neue Maßnahmen.", ku: "حکوومەت ڕێوشوێنی نوێ دەگرێتەبەر." },
    { de: "Das bringt mich zum Nachdenken.", ku: "ئەمە وام لێدەکات بیر بکەمەوە." },
    { de: "Wir kommen zu einem guten Ergebnis.", ku: "دەگەینە ئەنجامێکی باش." },
    { de: "Er setzt seinen Plan in die Tat um.", ku: "پلانەکەی جێبەجێ دەکات." }
  ],
  "Verben/Adjektive/Nomen mit Präpositionen": [
    { de: "Ich warte auf den Bus.", ku: "چاوەڕوانی پاس دەکەم." },
    { de: "Ich denke oft an meine Familie.", ku: "زۆرجار بیری خێزانەکەم دەکەمەوە." },
    { de: "Sie freut sich auf das Wochenende.", ku: "بە کۆتایی هەفتە دڵخۆشە." },
    { de: "Er interessiert sich für Politik.", ku: "ئارەزووی سیاسەت دەکات." },
    { de: "Ich bin stolz auf meine Arbeit.", ku: "شانازی بە کارەکەم دەکەم." },
    { de: "Sie hat Angst vor Hunden.", ku: "لە سەگ دەترسێت." },
    { de: "Wir sprechen über das Problem.", ku: "دەربارەی کێشەکە قسە دەکەین." },
    { de: "Er gehört zu meiner Familie.", ku: "سەر بە خێزانەکەمە." },
    { de: "Ich bin mit dem Ergebnis zufrieden.", ku: "لە ئەنجامەکە ڕازیم." },
    { de: "Das hängt von dir ab.", ku: "ئەمە بە تۆوە بەندە." }
  ],
  "Wortbildung: Präfixe & Suffixe": [
    { de: "Aus glücklich wird das Glück.", ku: "لە «glücklich»ەوە دەبێتە بەختەوەری." },
    { de: "Die Freiheit ist ein wichtiges Recht.", ku: "ئازادی مافێکی گرنگە." },
    { de: "Das ist leider unmöglich.", ku: "بەداخەوە ئەمە ناگونجاوە." },
    { de: "Die Arbeit macht mir Freude.", ku: "کارەکە خۆشی پێ دەبەخشم." },
    { de: "Seine Krankheit war nicht schlimm.", ku: "نەخۆشییەکەی سەخت نەبوو." },
    { de: "Der Leser versteht den Text gut.", ku: "خوێنەرەکە دەقەکە باش تێدەگات." },
    { de: "Die Möglichkeit besteht noch.", ku: "ئەگەرەکە هێشتا هەیە." },
    { de: "Unfreundlich zu sein ist nicht gut.", ku: "نادۆستانە بوون باش نییە." },
    { de: "Die Schönheit der Natur ist groß.", ku: "جوانی سروشت گەورەیە." },
    { de: "Die Verbindung ist sehr schlecht.", ku: "پەیوەندییەکە زۆر خراپە." }
  ],
};

// ── دەنگ / German text-to-speech (browser Web Speech API) ─────────
let _deVoice = null;
// ناوی دەنگە نێرینەکانی ئەڵمانی لە سیستەمە جیاوازەکاندا
const MALE_DE_NAMES = ["stefan", "conrad", "markus", "hans", "klaus", "daniel", "yannick", "bernd", "viktor", "männlich", "male"];
function pickGermanVoice() {
  try {
    const vs = window.speechSynthesis.getVoices();
    const de = vs.filter((v) => v.lang && v.lang.toLowerCase().startsWith("de"));
    // ١) دەنگی نێرینەی ئەڵمانی بەپێی ناو
    _deVoice =
      de.find((v) => MALE_DE_NAMES.some((n) => v.name.toLowerCase().includes(n))) ||
      // ٢) دەنگی de-DE
      de.find((v) => v.lang === "de-DE") ||
      // ٣) هەر دەنگێکی ئەڵمانی
      de[0] || null;
  } catch (e) {}
}
if (typeof window !== "undefined" && window.speechSynthesis) {
  pickGermanVoice();
  try { window.speechSynthesis.onvoiceschanged = pickGermanVoice; } catch (e) {}
}
function speakDe(text) {
  try {
    const synth = window.speechSynthesis;
    if (!synth || !text) return;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(String(text));
    u.lang = "de-DE";
    if (_deVoice) u.voice = _deVoice;
    u.rate = 0.9;
    u.pitch = 0.8;
    u.volume = 1;
    synth.speak(u);
  } catch (e) {}
}

function Speak({ text, size = 15 }) {
  return (
    <button onClick={(e) => { e.stopPropagation(); speakDe(text); }} title="گوێ لێ بگرە"
      style={{ border: "none", background: "transparent", cursor: "pointer", color: C.gold, padding: "0 4px", lineHeight: 1, verticalAlign: "middle", flexShrink: 0, display:"inline-flex", alignItems:"center" }}>
      <Volume2 size={size} />
    </button>
  );
}

function LevelPills({ value, onChange }) {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
      {LEVELS.map((lv) => {
        const active = value === lv.id;
        return (
          <button key={lv.id} onClick={() => onChange(lv.id)}
            style={{
              border: "none",
              background: active ? lv.color : "rgba(255,255,255,0.72)",
              color: active ? "#fff" : lv.color,
              padding: "9px 20px",
              borderRadius: 99,
              fontWeight: 700,
              fontSize: 14,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: active
                ? `0 6px 22px ${lv.color}66, 0 2px 6px rgba(0,0,0,.06)`
                : "0 2px 10px rgba(0,0,0,.06)",
              outline: active ? `2px solid ${lv.color}44` : "2px solid transparent",
              outlineOffset: 2,
              transition: "all .28s cubic-bezier(.22,1,.36,1)",
            }}>
            {lv.id} · {lv.label}
          </button>
        );
      })}
    </div>
  );
}

// ── Premium Launch Animation ────────────────────────────────────────
const INTRO_GREETINGS = [
  "Merhaba","Hello","Hallo","Hola","Bonjour","مرحبا",
  "Привет","Ciao","سلاو","سلام","안녕하세요","こんにちは",
];
const INTRO_ZONES = [
  {x:22,y:12},{x:50,y:8}, {x:87,y:13},
  {x:7, y:44},{x:90,y:46},{x:12,y:72},
  {x:52,y:78},{x:84,y:68},{x:24,y:26},
  {x:77,y:24},{x:17,y:58},{x:81,y:57},
];
/* INTRO_DRIFTS removed — words now emerge from logo center */

function Intro({ onDone }) {
  const [out,    setOut]    = useState(false);
  const [words,  setWords]  = useState([]);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const WORD_DUR = 5500;

  useEffect(() => {
    const shuffled = [...INTRO_GREETINGS].sort(() => Math.random() - 0.5);
    let gIdx = 0, zIdx = 0;

    const spawn = () => {
      if (gIdx >= shuffled.length) { clearInterval(iv); return; }
      const text  = shuffled[gIdx]; gIdx++;
      const zone  = INTRO_ZONES[zIdx % INTRO_ZONES.length]; zIdx++;
      const depth = Math.random();
      const id    = Date.now() + Math.random();
      setWords(prev => [...prev, {id, text, zone, depth}]);
      setTimeout(() => setWords(prev => prev.filter(w => w.id !== id)), WORD_DUR + 120);
    };

    spawn();
    const iv = setInterval(spawn, 290);

    // Counters — start 1 s, run 2 s
    const t0 = Date.now();
    const CDEL = 1000, CDUR = 2000;
    let raf;
    const tick = () => {
      const el = Date.now() - t0 - CDEL;
      if (el >= 0) {
        const e = 1 - Math.pow(1 - Math.min(el / CDUR, 1), 3);
        setCount1(Math.round(e * 50000));
        setCount2(Math.round(e * 1000));
        if (el < CDUR) raf = requestAnimationFrame(tick);
      } else raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const t1 = setTimeout(() => { clearInterval(iv); setOut(true); }, 5500);
    const t2 = setTimeout(() => onDone(), 6000);
    return () => { clearInterval(iv); cancelAnimationFrame(raf); clearTimeout(t1); clearTimeout(t2); setWords([]); };
  }, []);

  return (
    <div style={{
      position:"fixed", inset:0, zIndex:9999,
      background:"#fff", overflow:"hidden",
      opacity: out ? 0 : 1,
      transition: out ? "opacity .5s cubic-bezier(.4,0,.2,1)" : "none",
    }}>
      {/* Soft ambient gradient */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        background:"radial-gradient(ellipse 55% 45% at 50% 48%, rgba(91,91,214,.05) 0%, transparent 68%)",
        animation:"sp-ambient 4s ease-in-out infinite",
      }} />

      {/* ── Floating words — emerge from logo center ── */}
      {words.map(w => {
        const size    = 15 + w.depth * 14;
        const opacity = +(0.5 + w.depth * 0.4).toFixed(2);
        const bobDur  = (2.2 + w.depth * 1.4).toFixed(1);
        const bobDel  = (0.9 + w.depth * 0.5).toFixed(1);
        return (
          <div key={w.id} style={{
            position:"absolute",
            left:`${w.zone.x}%`, top:`${w.zone.y}%`,
            '--dx':`${(50 - w.zone.x)}vw`,
            '--dy':`${(43 - w.zone.y)}vh`,
            pointerEvents:"none",
            zIndex: Math.round(w.depth * 8) + 1,
            animation:`iw-emerge 0.85s cubic-bezier(.2,0,0,1) both`,
          }}>
            <span style={{
              display:"block",
              fontFamily:"'Satoshi',system-ui,sans-serif",
              fontWeight:600, fontSize:size,
              color:"#5B5BD6", opacity,
              whiteSpace:"nowrap", letterSpacing:"-.2px",
              animation:`iw-bob ${bobDur}s ${bobDel}s ease-in-out infinite`,
            }}>{w.text}</span>
          </div>
        );
      })}

      {/* ── Logo + title ── */}
      <div style={{
        position:"absolute", inset:0, zIndex:10, pointerEvents:"none",
        display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
      }}>
        <div style={{
          position:"absolute", width:230, height:230, borderRadius:"50%",
          background:"radial-gradient(circle, rgba(91,91,214,.11) 0%, transparent 65%)",
          animation:"sp-halo 3.2s ease-in-out infinite",
        }} />
        <div style={{
          width:108, height:108, borderRadius:32,
          background:"linear-gradient(135deg,#5B5BD6 0%,#FF6B5E 100%)",
          display:"grid", placeItems:"center", position:"relative",
          boxShadow:"0 24px 64px rgba(91,91,214,.38), 0 8px 22px rgba(91,91,214,.20)",
          animation:"sp-logo-in .8s cubic-bezier(.34,1.08,.64,1) both, sp-logo-fl 3.8s .8s ease-in-out infinite",
        }}>
          <GraduationCap size={52} color="#fff" strokeWidth={1.6} />
        </div>
        <div style={{ textAlign:"center", marginTop:20, animation:"sp-title-in .55s .28s ease both" }}>
          <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontWeight:800, fontSize:22, color:"#18181B", direction:"ltr", letterSpacing:"-.3px" }}>Willkommen!</div>
          <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontWeight:400, fontSize:13, color:"#A1A1AA", marginTop:6, letterSpacing:"1px", fontStyle:"italic", direction:"ltr" }}>Every language is a new life.</div>
        </div>
      </div>

      {/* ── Stats (bottom) ── */}
      <div style={{
        position:"absolute", bottom:44, left:0, right:0, zIndex:10,
        display:"flex", justifyContent:"center",
        animation:"sp-stats-in .6s 1.1s ease both",
      }}>
        {[
          {val:`${count1.toLocaleString()}+`, label:"Learners",             sub:"Active students"},
          {val:`${count2.toLocaleString()}+`, label:"Completed Lessons",    sub:"Across all levels"},
          {val:"Beginner to Advanced",         label:"Structured Curriculum",sub:"6 CEFR levels"},
        ].map((s, i) => (
          <div key={s.label} style={{
            textAlign:"center", padding:"0 24px",
            borderRight: i < 2 ? "1px solid rgba(91,91,214,.12)" : "none",
          }}>
            <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontWeight:800, fontSize:i===2?15:22, color:"#5B5BD6", fontVariantNumeric:"tabular-nums", lineHeight:1.3 }}>{s.val}</div>
            <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontWeight:600, fontSize:13, color:"#18181B", marginTop:3 }}>{s.label}</div>
            <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontWeight:400, fontSize:11, color:"#A1A1AA", marginTop:2 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes sp-ambient  { 0%,100%{opacity:.45} 50%{opacity:1} }
        @keyframes iw-emerge {
          0%   { opacity:0; transform:translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(0.15); }
          65%  { opacity:1; transform:translate(-50%,-50%) scale(1.07); }
          100% { opacity:1; transform:translate(-50%,-50%) scale(1); }
        }
        @keyframes iw-bob {
          0%,100% { transform:translateY(0px) rotate(0deg); }
          50%     { transform:translateY(-9px) rotate(1deg); }
        }
        @keyframes sp-halo     { 0%,100%{transform:scale(1);opacity:.65}   50%{transform:scale(1.28);opacity:1} }
        @keyframes sp-logo-in  { 0%{opacity:0;transform:scale(.92)} 65%{opacity:1;transform:scale(1.01)} 100%{opacity:1;transform:scale(1)} }
        @keyframes sp-logo-fl  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes sp-title-in { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        @keyframes sp-stats-in { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </div>
  );
}

// ── Onboarding Data ─────────────────────────────────────────────────
const OB_LANGS = [
  {v:"es",    code:"ES", label:"Spanish",   native:"Español"},
  {v:"en",    code:"EN", label:"English",   native:"English"},
  {v:"ar",    code:"AR", label:"Arabic",    native:"العربية"},
  {v:"tr",    code:"TR", label:"Turkish",   native:"Türkçe"},
  {v:"fr",    code:"FR", label:"French",    native:"Français"},
  {v:"ru",    code:"RU", label:"Russian",   native:"Русский"},
  {v:"ku",    code:"KU", label:"Sorani Kurdish", native:"سۆرانی"},
  {v:"fa",    code:"FA", label:"Farsi",         native:"فارسی"},
  {v:"ko",    code:"KO", label:"Korean",        native:"한국어"},
  {v:"ja",    code:"JA", label:"Japanese",      native:"日本語"},
];
const LANG_DIR = {tr:"ltr",en:"ltr",ar:"rtl",es:"ltr",fr:"ltr",ru:"ltr",ku:"rtl",fa:"rtl",ko:"ltr",ja:"ltr"};

const OB_TRANS = {
  en:{
    level_title:"What is your current German level?",level_sub:"Be honest — we'll match your pace",
    goals_title:"Why do you want to learn German?",goals_sub:"Select all that apply",
    daily_title:"How much time can you study each day?",daily_sub:"Consistency beats intensity",
    focus_title:"What would you like to improve first?",focus_sub:"Select all that apply",
    summary_title:"Your personalized plan is ready!",summary_sub:"Here's what we prepared for you",
    btn_continue:"Continue",sum_lang:"Native Language",sum_level:"Current Level",sum_goals:"Goals",sum_daily:"Daily Study",sum_focus:"Focus",
    auth_title:"Create your account",auth_sub:"Save your progress",auth_email:"Continue with Email",auth_google:"Continue with Google",auth_apple:"Continue with Apple",auth_skip:"Maybe later",
    login_title:"Welcome back",login_sub:"Sign in to continue",login_email:"EMAIL ADDRESS",login_pass:"PASSWORD",login_btn:"Sign In",login_no_acc:"Don't have an account?",login_reg:"Register",forgot_link:"Forgot password?",forgot_title:"Reset Password",forgot_sub:"Enter your email — we'll send you a 6-digit code",forgot_send:"Send Code",forgot_otp_title:"Check Your Email",forgot_otp_sub:"Enter the 6-digit code sent to",forgot_verify:"Verify Code",forgot_newpw_title:"Set New Password",forgot_newpw_sub:"Choose a strong new password",forgot_save:"Save New Password",
    lv_none:"Complete Beginner",lv_none_s:"Never studied German",lv_x:"Not Sure",lv_x_s:"I'll find out later",
    lv_A1_s:"Basic words and phrases",lv_A2_s:"Simple conversations",lv_B1_s:"Everyday topics",lv_B2_s:"Fluent communication",lv_C1_s:"Near-native proficiency",
    g_live:"Living in Germany",g_work:"Work & Career",g_edu:"University / Education",g_exam:"Citizenship / Exam",g_travel:"Travel",g_family:"Family & Friends",g_hobby:"Personal Interest",
    d_5:"Quick daily habit",d_10:"Regular practice",d_15:"Steady progress",d_20:"Serious learning",d_30:"Rapid advancement",
    f_speaking:"Speaking",f_listening:"Listening",f_reading:"Reading",f_writing:"Writing",f_grammar:"Grammar",f_vocabulary:"Vocabulary",f_all:"Everything",
    lang_title:"What is your native language?",lang_sub:"We'll explain grammar in your language",lang_msg:"The app will open in English",btn_back:"Back",unit_min:"min",
  },
  tr:{
    level_title:"Mevcut Almanca seviyeniz nedir?",level_sub:"Dürüst olun — hızınıza göre uyarlayacağız",
    goals_title:"Neden Almanca öğrenmek istiyorsunuz?",goals_sub:"Uygun olanları seçin",
    daily_title:"Her gün ne kadar çalışabilirsiniz?",daily_sub:"Düzenlilik, yoğunluğu geçer",
    focus_title:"Önce neyi geliştirmek istersiniz?",focus_sub:"Uygun olanları seçin",
    summary_title:"Kişisel planınız hazır!",summary_sub:"Sizin için hazırladıklarımız",
    btn_continue:"Devam",sum_lang:"Ana Dil",sum_level:"Mevcut Seviye",sum_goals:"Hedefler",sum_daily:"Günlük Çalışma",sum_focus:"Odak",
    auth_title:"Hesabınızı oluşturun",auth_sub:"İlerlemenizi kaydedin",auth_email:"E-posta ile Devam",auth_google:"Google ile Devam",auth_apple:"Apple ile Devam",auth_skip:"Belki daha sonra",
    login_title:"Tekrar hoş geldiniz",login_sub:"Devam etmek için giriş yapın",login_email:"E-POSTA",login_pass:"ŞİFRE",login_btn:"Giriş Yap",login_no_acc:"Hesabınız yok mu?",login_reg:"Kayıt Ol",forgot_link:"Şifremi unuttum",forgot_title:"Şifre Sıfırla",forgot_sub:"E-posta adresinizi girin — 6 haneli kod göndereceğiz",forgot_send:"Kod Gönder",forgot_otp_title:"E-postanızı Kontrol Edin",forgot_otp_sub:"Gönderilen 6 haneli kodu girin:",forgot_verify:"Kodu Doğrula",forgot_newpw_title:"Yeni Şifre Belirleyin",forgot_newpw_sub:"Güçlü bir yeni şifre seçin",forgot_save:"Şifreyi Kaydet",
    lv_none:"Tam Başlangıç",lv_none_s:"Hiç Almanca öğrenmedim",lv_x:"Emin Değilim",lv_x_s:"Sonradan öğrenirim",
    lv_A1_s:"Temel kelime ve ifadeler",lv_A2_s:"Basit konuşmalar",lv_B1_s:"Günlük konular",lv_B2_s:"Akıcı iletişim",lv_C1_s:"Ana dile yakın yetkinlik",
    g_live:"Almanya'da Yaşam",g_work:"İş ve Kariyer",g_edu:"Üniversite / Eğitim",g_exam:"Vatandaşlık / Sınav",g_travel:"Seyahat",g_family:"Aile ve Arkadaşlar",g_hobby:"Kişisel İlgi",
    d_5:"Günlük hızlı alışkanlık",d_10:"Düzenli pratik",d_15:"Sürekli ilerleme",d_20:"Ciddi öğrenme",d_30:"Hızlı gelişim",
    f_speaking:"Konuşma",f_listening:"Dinleme",f_reading:"Okuma",f_writing:"Yazma",f_grammar:"Dilbilgisi",f_vocabulary:"Kelime Bilgisi",f_all:"Her Şey",
    lang_title:"Ana diliniz nedir?",lang_sub:"Dilbilgisini kendi dilinizde açıklayacağız",lang_msg:"Uygulama Türkçe açılacak",btn_back:"Geri",unit_min:"dk",
  },
  ku:{
    level_title:"ئاستی ئەڵمانیت چەندە؟",level_sub:"ڕاستگۆبە — ئاستت ئامادە دەکەین",
    goals_title:"بۆچی دەتەوێت ئەڵمانی فێربیت؟",goals_sub:"هەموو ئەوانەی پەیوەندیدارن هەڵبژێرە",
    daily_title:"هەر ڕۆژ چەند کات دەتوانیت بخوێنیت؟",daily_sub:"بەردەوامی گرنگتر لە زۆری",
    focus_title:"سەرەتا کامیان باشتر بکەیت؟",focus_sub:"هەموو ئەوانەی پەیوەندیدارن هەڵبژێرە",
    summary_title:"پلانی تایبەتت ئامادەیە!",summary_sub:"ئەوەی بۆت ئامادە کردووین",
    btn_continue:"بەردەوامبە",sum_lang:"زمانی دایکی",sum_level:"ئاستی ئێستا",sum_goals:"ئامانجەکان",sum_daily:"خوێندنی ڕۆژانە",sum_focus:"تەرکیز",
    auth_title:"ئەکاونتت دروست بکە",auth_sub:"پێشکەوتنت پاشەکەوت بکە",auth_email:"بە ئیمەیڵ بەردەوامبە",auth_google:"بە Google بەردەوامبە",auth_apple:"بە Apple بەردەوامبە",auth_skip:"لەوانەیە دواتر",
    login_title:"بەخێربێیتەوە",login_sub:"بۆ بەردەوامبوون چوونەژوورەوە بکە",login_email:"ئیمەیڵ",login_pass:"ووشەی تێپەڕین",login_btn:"چوونەژوورەوە",login_no_acc:"ئەکاونتت نییە؟",login_reg:"تۆمارکردن",forgot_link:"ووشەی تێپەڕینم لەبیرچووم",forgot_title:"ووشەی تێپەڕین ریسێت بکە",forgot_sub:"ئیمەیڵەکەت بنووسە — کۆدی ٦ ژمارەیی بۆت دەنێرین",forgot_send:"کۆد بنێرە",forgot_otp_title:"ئیمەیڵەکەت بپشکنە",forgot_otp_sub:"کۆدی ٦ ژمارەیی کە نێردراوە بنووسە:",forgot_verify:"کۆد دروستکردنەوە",forgot_newpw_title:"ووشەی تێپەڕینی نوێ",forgot_newpw_sub:"ووشەی تێپەڕینی بەهێزی نوێ هەڵبژێرە",forgot_save:"ووشەی تێپەڕین پاشەکەوت بکە",
    lv_none:"تەواو سەرەتایی",lv_none_s:"هەرگیز ئەڵمانی نەخوێندووم",lv_x:"دڵنیا نیم",lv_x_s:"دواتر دەزانم",
    lv_A1_s:"وشە و دەستەواژەی بنەڕەتی",lv_A2_s:"گفتوگۆی سادە",lv_B1_s:"بابەتی ڕۆژانە",lv_B2_s:"پەیوەندی ئەسوود",lv_C1_s:"نزیکی زمانی دایکی",
    g_live:"ژیان لە ئەڵمانیا",g_work:"کار و پیشە",g_edu:"زانکۆ / خوێندن",g_exam:"ملێیەتی / تاقیکردنەوە",g_travel:"گەشت",g_family:"خێزان و هاوڕێ",g_hobby:"حەزی کەسی",
    d_5:"ئیرادەی ڕۆژانەی خێرا",d_10:"پراکتیسی ئاسایی",d_15:"پێشکەوتنی بەردەوام",d_20:"فێربوونی جدی",d_30:"پێشکەوتنی خێرا",
    f_speaking:"قسەکردن",f_listening:"گوێگرتن",f_reading:"خوێندنەوە",f_writing:"نووسین",f_grammar:"ڕێزمان",f_vocabulary:"وشەکان",f_all:"هەموو شت",
    lang_title:"زمانی دایکیت چییە؟",lang_sub:"ڕێزمانی بە زمانەکەت ڕوونیدەکەینەوە",lang_msg:"بەرنامە بە سۆرانی کوردی کراوەتەوە",btn_back:"گەڕانەوە",unit_min:"خولەک",
  },
  ar:{
    level_title:"ما مستواك الحالي في الألمانية؟",level_sub:"كن صادقاً — سنتكيّف مع وتيرتك",
    goals_title:"لماذا تريد تعلّم الألمانية؟",goals_sub:"اختر كل ما ينطبق",
    daily_title:"كم من الوقت تستطيع الدراسة يومياً؟",daily_sub:"الانتظام يتغلّب على الكثافة",
    focus_title:"ما الذي تريد تحسينه أولاً؟",focus_sub:"اختر كل ما ينطبق",
    summary_title:"خطّتك الشخصية جاهزة!",summary_sub:"إليك ما أعددناه لك",
    btn_continue:"متابعة",sum_lang:"اللغة الأم",sum_level:"المستوى الحالي",sum_goals:"الأهداف",sum_daily:"الدراسة اليومية",sum_focus:"التركيز",
    auth_title:"أنشئ حسابك",auth_sub:"احفظ تقدّمك",auth_email:"المتابعة بالبريد",auth_google:"المتابعة بـ Google",auth_apple:"المتابعة بـ Apple",auth_skip:"ربما لاحقاً",
    login_title:"مرحباً بعودتك",login_sub:"سجّل دخولك للمتابعة",login_email:"البريد الإلكتروني",login_pass:"كلمة المرور",login_btn:"دخول",login_no_acc:"ليس لديك حساب؟",login_reg:"سجّل الآن",forgot_link:"نسيت كلمة المرور؟",forgot_title:"إعادة تعيين كلمة المرور",forgot_sub:"أدخل بريدك — سنرسل لك رمزاً مكوّناً من 6 أرقام",forgot_send:"إرسال الرمز",forgot_otp_title:"تحقّق من بريدك",forgot_otp_sub:"أدخل الرمز المكوّن من 6 أرقام المُرسَل إلى",forgot_verify:"تحقّق من الرمز",forgot_newpw_title:"تعيين كلمة مرور جديدة",forgot_newpw_sub:"اختر كلمة مرور قوية",forgot_save:"حفظ كلمة المرور",
    lv_none:"مبتدئ تماماً",lv_none_s:"لم أدرس الألمانية قط",lv_x:"لست متأكداً",lv_x_s:"سأعرف لاحقاً",
    lv_A1_s:"كلمات وعبارات أساسية",lv_A2_s:"محادثات بسيطة",lv_B1_s:"مواضيع يومية",lv_B2_s:"تواصل طليق",lv_C1_s:"قريب من مستوى اللغة الأم",
    g_live:"العيش في ألمانيا",g_work:"العمل والمهنة",g_edu:"الجامعة / التعليم",g_exam:"الجنسية / الامتحان",g_travel:"السفر",g_family:"العائلة والأصدقاء",g_hobby:"اهتمام شخصي",
    d_5:"عادة يومية سريعة",d_10:"تمرين منتظم",d_15:"تقدّم ثابت",d_20:"تعلّم جادّ",d_30:"تقدّم سريع",
    f_speaking:"التحدّث",f_listening:"الاستماع",f_reading:"القراءة",f_writing:"الكتابة",f_grammar:"القواعد",f_vocabulary:"المفردات",f_all:"كل شيء",
    lang_title:"ما هي لغتك الأم؟",lang_sub:"سنشرح القواعد بلغتك",lang_msg:"سيُفتح التطبيق باللغة العربية",btn_back:"رجوع",unit_min:"دقيقة",
  },
  fa:{
    level_title:"سطح فعلی آلمانی شما چیست؟",level_sub:"صادق باشید — سرعت شما را تنظیم می‌کنیم",
    goals_title:"چرا می‌خواهید آلمانی یاد بگیرید؟",goals_sub:"همه موارد مناسب را انتخاب کنید",
    daily_title:"هر روز چقدر می‌توانید مطالعه کنید؟",daily_sub:"پیوستگی از شدت مهم‌تر است",
    focus_title:"اول چه چیزی را بهبود می‌دهید؟",focus_sub:"همه موارد مناسب را انتخاب کنید",
    summary_title:"برنامه شخصی شما آماده است!",summary_sub:"آنچه برای شما آماده کرده‌ایم",
    btn_continue:"ادامه",sum_lang:"زبان مادری",sum_level:"سطح فعلی",sum_goals:"اهداف",sum_daily:"مطالعه روزانه",sum_focus:"تمرکز",
    auth_title:"حساب کاربری بسازید",auth_sub:"پیشرفت خود را ذخیره کنید",auth_email:"ادامه با ایمیل",auth_google:"ادامه با Google",auth_apple:"ادامه با Apple",auth_skip:"شاید بعداً",
    login_title:"خوش برگشتید",login_sub:"برای ادامه وارد شوید",login_email:"ایمیل",login_pass:"رمز عبور",login_btn:"ورود",login_no_acc:"حساب ندارید؟",login_reg:"ثبت‌نام",forgot_link:"رمز عبور را فراموش کردید؟",forgot_title:"بازنشانی رمز عبور",forgot_sub:"ایمیل خود را وارد کنید — کد ۶ رقمی ارسال می‌کنیم",forgot_send:"ارسال کد",forgot_otp_title:"ایمیل خود را بررسی کنید",forgot_otp_sub:"کد ۶ رقمی ارسال شده به",forgot_verify:"تأیید کد",forgot_newpw_title:"رمز عبور جدید",forgot_newpw_sub:"یک رمز عبور قوی انتخاب کنید",forgot_save:"ذخیره رمز عبور",
    lv_none:"کاملاً مبتدی",lv_none_s:"هرگز آلمانی نخوانده‌ام",lv_x:"مطمئن نیستم",lv_x_s:"بعداً می‌فهمم",
    lv_A1_s:"کلمات و عبارات پایه",lv_A2_s:"مکالمات ساده",lv_B1_s:"موضوعات روزمره",lv_B2_s:"ارتباط روان",lv_C1_s:"نزدیک به زبان مادری",
    g_live:"زندگی در آلمان",g_work:"کار و حرفه",g_edu:"دانشگاه / تحصیل",g_exam:"شهروندی / آزمون",g_travel:"سفر",g_family:"خانواده و دوستان",g_hobby:"علاقه شخصی",
    d_5:"عادت روزانه سریع",d_10:"تمرین منظم",d_15:"پیشرفت پیوسته",d_20:"یادگیری جدی",d_30:"پیشرفت سریع",
    f_speaking:"صحبت کردن",f_listening:"گوش دادن",f_reading:"خواندن",f_writing:"نوشتن",f_grammar:"دستور زبان",f_vocabulary:"لغت",f_all:"همه چیز",
    lang_title:"زبان مادری شما چیست؟",lang_sub:"گرامر را به زبان خودتان توضیح می‌دهیم",lang_msg:"برنامه به فارسی باز می‌شود",btn_back:"بازگشت",unit_min:"دقیقه",
  },
  es:{
    level_title:"¿Cuál es tu nivel actual de alemán?",level_sub:"Sé honesto — adaptaremos tu ritmo",
    goals_title:"¿Por qué quieres aprender alemán?",goals_sub:"Selecciona todo lo que aplique",
    daily_title:"¿Cuánto tiempo puedes estudiar cada día?",daily_sub:"La constancia supera a la intensidad",
    focus_title:"¿Qué te gustaría mejorar primero?",focus_sub:"Selecciona todo lo que aplique",
    summary_title:"¡Tu plan personalizado está listo!",summary_sub:"Esto es lo que hemos preparado para ti",
    btn_continue:"Continuar",sum_lang:"Idioma nativo",sum_level:"Nivel actual",sum_goals:"Objetivos",sum_daily:"Estudio diario",sum_focus:"Enfoque",
    auth_title:"Crea tu cuenta",auth_sub:"Guarda tu progreso",auth_email:"Continuar con email",auth_google:"Continuar con Google",auth_apple:"Continuar con Apple",auth_skip:"Quizás más tarde",
    login_title:"Bienvenido de nuevo",login_sub:"Inicia sesión para continuar",login_email:"CORREO ELECTRÓNICO",login_pass:"CONTRASEÑA",login_btn:"Iniciar sesión",login_no_acc:"¿No tienes cuenta?",login_reg:"Regístrate",forgot_link:"¿Olvidaste tu contraseña?",forgot_title:"Restablecer Contraseña",forgot_sub:"Ingresa tu email — te enviaremos un código de 6 dígitos",forgot_send:"Enviar Código",forgot_otp_title:"Revisa tu Email",forgot_otp_sub:"Ingresa el código de 6 dígitos enviado a",forgot_verify:"Verificar Código",forgot_newpw_title:"Nueva Contraseña",forgot_newpw_sub:"Elige una contraseña segura",forgot_save:"Guardar Contraseña",
    lv_none:"Principiante total",lv_none_s:"Nunca estudié alemán",lv_x:"No estoy seguro",lv_x_s:"Lo averiguaré después",
    lv_A1_s:"Palabras y frases básicas",lv_A2_s:"Conversaciones simples",lv_B1_s:"Temas cotidianos",lv_B2_s:"Comunicación fluida",lv_C1_s:"Casi como un nativo",
    g_live:"Vivir en Alemania",g_work:"Trabajo y carrera",g_edu:"Universidad / Educación",g_exam:"Ciudadanía / Examen",g_travel:"Viaje",g_family:"Familia y amigos",g_hobby:"Interés personal",
    d_5:"Hábito diario rápido",d_10:"Práctica regular",d_15:"Progreso constante",d_20:"Aprendizaje serio",d_30:"Avance rápido",
    f_speaking:"Hablar",f_listening:"Escuchar",f_reading:"Leer",f_writing:"Escribir",f_grammar:"Gramática",f_vocabulary:"Vocabulario",f_all:"Todo",
    lang_title:"¿Cuál es tu idioma nativo?",lang_sub:"Explicaremos la gramática en tu idioma",lang_msg:"La app se abrirá en Español",btn_back:"Atrás",unit_min:"min",
  },
  fr:{
    level_title:"Quel est votre niveau actuel en allemand ?",level_sub:"Soyez honnête — nous adapterons votre rythme",
    goals_title:"Pourquoi voulez-vous apprendre l'allemand ?",goals_sub:"Sélectionnez tout ce qui s'applique",
    daily_title:"Combien de temps pouvez-vous étudier chaque jour ?",daily_sub:"La régularité bat l'intensité",
    focus_title:"Que souhaitez-vous améliorer en premier ?",focus_sub:"Sélectionnez tout ce qui s'applique",
    summary_title:"Votre plan personnalisé est prêt !",summary_sub:"Voici ce que nous avons préparé pour vous",
    btn_continue:"Continuer",sum_lang:"Langue maternelle",sum_level:"Niveau actuel",sum_goals:"Objectifs",sum_daily:"Étude quotidienne",sum_focus:"Focus",
    auth_title:"Créez votre compte",auth_sub:"Sauvegardez vos progrès",auth_email:"Continuer par e-mail",auth_google:"Continuer avec Google",auth_apple:"Continuer avec Apple",auth_skip:"Peut-être plus tard",
    login_title:"Bon retour",login_sub:"Connectez-vous pour continuer",login_email:"E-MAIL",login_pass:"MOT DE PASSE",login_btn:"Se connecter",login_no_acc:"Pas de compte ?",login_reg:"S'inscrire",forgot_link:"Mot de passe oublié ?",forgot_title:"Réinitialiser le mot de passe",forgot_sub:"Entrez votre e-mail — nous vous enverrons un code à 6 chiffres",forgot_send:"Envoyer le code",forgot_otp_title:"Vérifiez votre e-mail",forgot_otp_sub:"Entrez le code à 6 chiffres envoyé à",forgot_verify:"Vérifier le code",forgot_newpw_title:"Nouveau mot de passe",forgot_newpw_sub:"Choisissez un mot de passe fort",forgot_save:"Enregistrer le mot de passe",
    lv_none:"Débutant complet",lv_none_s:"Je n'ai jamais étudié l'allemand",lv_x:"Je ne suis pas sûr",lv_x_s:"Je verrai plus tard",
    lv_A1_s:"Mots et phrases de base",lv_A2_s:"Conversations simples",lv_B1_s:"Sujets du quotidien",lv_B2_s:"Communication fluide",lv_C1_s:"Quasi bilingue",
    g_live:"Vivre en Allemagne",g_work:"Travail et carrière",g_edu:"Université / Études",g_exam:"Citoyenneté / Examen",g_travel:"Voyage",g_family:"Famille et amis",g_hobby:"Intérêt personnel",
    d_5:"Habitude quotidienne rapide",d_10:"Pratique régulière",d_15:"Progrès constant",d_20:"Apprentissage sérieux",d_30:"Avancement rapide",
    f_speaking:"Expression orale",f_listening:"Compréhension orale",f_reading:"Lecture",f_writing:"Écriture",f_grammar:"Grammaire",f_vocabulary:"Vocabulaire",f_all:"Tout",
    lang_title:"Quelle est votre langue maternelle ?",lang_sub:"Nous expliquerons la grammaire dans votre langue",lang_msg:"L'application s'ouvrira en Français",btn_back:"Retour",unit_min:"min",
  },
  ru:{
    level_title:"Какой у вас текущий уровень немецкого?",level_sub:"Будьте честны — мы подстроимся под ваш темп",
    goals_title:"Зачем вы хотите учить немецкий?",goals_sub:"Выберите всё, что подходит",
    daily_title:"Сколько времени вы можете учиться каждый день?",daily_sub:"Регулярность важнее интенсивности",
    focus_title:"Что хотите улучшить в первую очередь?",focus_sub:"Выберите всё, что подходит",
    summary_title:"Ваш персональный план готов!",summary_sub:"Вот что мы для вас подготовили",
    btn_continue:"Продолжить",sum_lang:"Родной язык",sum_level:"Текущий уровень",sum_goals:"Цели",sum_daily:"Ежедневное обучение",sum_focus:"Фокус",
    auth_title:"Создайте аккаунт",auth_sub:"Сохраните прогресс",auth_email:"Продолжить с email",auth_google:"Продолжить с Google",auth_apple:"Продолжить с Apple",auth_skip:"Может быть позже",
    login_title:"С возвращением",login_sub:"Войдите для продолжения",login_email:"ЭЛ. ПОЧТА",login_pass:"ПАРОЛЬ",login_btn:"Войти",login_no_acc:"Нет аккаунта?",login_reg:"Зарегистрироваться",forgot_link:"Забыли пароль?",forgot_title:"Сброс пароля",forgot_sub:"Введите email — отправим 6-значный код",forgot_send:"Отправить код",forgot_otp_title:"Проверьте почту",forgot_otp_sub:"Введите 6-значный код отправленный на",forgot_verify:"Подтвердить код",forgot_newpw_title:"Новый пароль",forgot_newpw_sub:"Придумайте надёжный новый пароль",forgot_save:"Сохранить пароль",
    lv_none:"Полный новичок",lv_none_s:"Никогда не учил немецкий",lv_x:"Не уверен",lv_x_s:"Узнаю позже",
    lv_A1_s:"Базовые слова и фразы",lv_A2_s:"Простые разговоры",lv_B1_s:"Повседневные темы",lv_B2_s:"Свободное общение",lv_C1_s:"Почти как носитель",
    g_live:"Жизнь в Германии",g_work:"Работа и карьера",g_edu:"Университет / Образование",g_exam:"Гражданство / Экзамен",g_travel:"Путешествия",g_family:"Семья и друзья",g_hobby:"Личный интерес",
    d_5:"Быстрая ежедневная привычка",d_10:"Регулярная практика",d_15:"Стабильный прогресс",d_20:"Серьёзное обучение",d_30:"Быстрое продвижение",
    f_speaking:"Говорение",f_listening:"Аудирование",f_reading:"Чтение",f_writing:"Письмо",f_grammar:"Грамматика",f_vocabulary:"Словарный запас",f_all:"Всё",
    lang_title:"Какой у вас родной язык?",lang_sub:"Мы будем объяснять грамматику на вашем языке",lang_msg:"Приложение откроется на русском языке",btn_back:"Назад",unit_min:"мин",
  },
  ko:{
    level_title:"현재 독일어 수준은 어떻게 되나요?",level_sub:"솔직하게 — 속도에 맞춰 드립니다",
    goals_title:"독일어를 배우려는 이유가 무엇인가요?",goals_sub:"해당하는 것을 모두 선택하세요",
    daily_title:"매일 얼마나 공부할 수 있나요?",daily_sub:"꾸준함이 강도를 이깁니다",
    focus_title:"먼저 무엇을 개선하고 싶으신가요?",focus_sub:"해당하는 것을 모두 선택하세요",
    summary_title:"맞춤형 계획이 준비됐어요!",summary_sub:"준비한 내용을 확인하세요",
    btn_continue:"계속",sum_lang:"모국어",sum_level:"현재 수준",sum_goals:"목표",sum_daily:"일일 학습",sum_focus:"집중",
    auth_title:"계정을 만드세요",auth_sub:"진행 상황을 저장하세요",auth_email:"이메일로 계속",auth_google:"Google로 계속",auth_apple:"Apple로 계속",auth_skip:"나중에 하기",
    login_title:"다시 오신 것을 환영합니다",login_sub:"계속하려면 로그인하세요",login_email:"이메일",login_pass:"비밀번호",login_btn:"로그인",login_no_acc:"계정이 없으신가요?",login_reg:"회원가입",forgot_link:"비밀번호를 잊으셨나요?",forgot_title:"비밀번호 재설정",forgot_sub:"이메일을 입력하세요 — 6자리 코드를 보내드립니다",forgot_send:"코드 보내기",forgot_otp_title:"이메일을 확인하세요",forgot_otp_sub:"다음 주소로 전송된 6자리 코드를 입력하세요:",forgot_verify:"코드 확인",forgot_newpw_title:"새 비밀번호 설정",forgot_newpw_sub:"강력한 새 비밀번호를 선택하세요",forgot_save:"비밀번호 저장",
    lv_none:"완전 초보",lv_none_s:"독일어를 배운 적 없어요",lv_x:"잘 모르겠어요",lv_x_s:"나중에 알아볼게요",
    lv_A1_s:"기본 단어와 표현",lv_A2_s:"간단한 대화",lv_B1_s:"일상 주제",lv_B2_s:"유창한 의사소통",lv_C1_s:"원어민에 가까운 수준",
    g_live:"독일에서 생활",g_work:"직업과 커리어",g_edu:"대학 / 교육",g_exam:"시민권 / 시험",g_travel:"여행",g_family:"가족과 친구",g_hobby:"개인 관심",
    d_5:"빠른 일일 습관",d_10:"규칙적인 연습",d_15:"꾸준한 진전",d_20:"진지한 학습",d_30:"빠른 발전",
    f_speaking:"말하기",f_listening:"듣기",f_reading:"읽기",f_writing:"쓰기",f_grammar:"문법",f_vocabulary:"어휘",f_all:"전부",
    lang_title:"모국어가 무엇인가요?",lang_sub:"문법을 귀하의 언어로 설명해 드립니다",lang_msg:"앱이 한국어로 열립니다",btn_back:"뒤로",unit_min:"분",
  },
  ja:{
    level_title:"現在のドイツ語レベルは？",level_sub:"正直に — ペースに合わせます",
    goals_title:"なぜドイツ語を学びたいですか？",goals_sub:"該当するものをすべて選んでください",
    daily_title:"毎日どのくらい勉強できますか？",daily_sub:"継続は力なり",
    focus_title:"最初に何を改善したいですか？",focus_sub:"該当するものをすべて選んでください",
    summary_title:"あなた専用のプランが完成しました！",summary_sub:"準備した内容をご確認ください",
    btn_continue:"次へ",sum_lang:"母国語",sum_level:"現在のレベル",sum_goals:"目標",sum_daily:"毎日の学習",sum_focus:"フォーカス",
    auth_title:"アカウントを作成",auth_sub:"進捗を保存する",auth_email:"メールで続ける",auth_google:"Googleで続ける",auth_apple:"Appleで続ける",auth_skip:"後でする",
    login_title:"おかえりなさい",login_sub:"続けるにはログインしてください",login_email:"メール",login_pass:"パスワード",login_btn:"ログイン",login_no_acc:"アカウントをお持ちでないですか？",login_reg:"登録する",forgot_link:"パスワードをお忘れですか？",forgot_title:"パスワードをリセット",forgot_sub:"メールアドレスを入力 — 6桁のコードをお送りします",forgot_send:"コードを送る",forgot_otp_title:"メールをご確認ください",forgot_otp_sub:"次のアドレスに送信された6桁のコードを入力:",forgot_verify:"コードを確認",forgot_newpw_title:"新しいパスワードを設定",forgot_newpw_sub:"強力な新しいパスワードを選んでください",forgot_save:"パスワードを保存",
    lv_none:"完全な初心者",lv_none_s:"ドイツ語を勉強したことがない",lv_x:"よくわからない",lv_x_s:"後で確認します",
    lv_A1_s:"基本的な単語とフレーズ",lv_A2_s:"簡単な会話",lv_B1_s:"日常のトピック",lv_B2_s:"流暢なコミュニケーション",lv_C1_s:"ほぼネイティブレベル",
    g_live:"ドイツでの生活",g_work:"仕事とキャリア",g_edu:"大学 / 教育",g_exam:"市民権 / 試験",g_travel:"旅行",g_family:"家族と友人",g_hobby:"個人的な趣味",
    d_5:"素早い毎日の習慣",d_10:"定期的な練習",d_15:"着実な進歩",d_20:"本格的な学習",d_30:"急速な上達",
    f_speaking:"スピーキング",f_listening:"リスニング",f_reading:"リーディング",f_writing:"ライティング",f_grammar:"文法",f_vocabulary:"語彙",f_all:"すべて",
    lang_title:"母国語は何ですか？",lang_sub:"文法をあなたの言語で説明します",lang_msg:"アプリが日本語で開きます",btn_back:"戻る",unit_min:"分",
  },
};

const OB_LEVELS = [
  {v:"none", badge:"★",  label:"Complete Beginner",      sub:"Never studied German"},
  {v:"A1",   badge:"A1", label:"A1 — Beginner",          sub:"Basic words and phrases"},
  {v:"A2",   badge:"A2", label:"A2 — Elementary",        sub:"Simple conversations"},
  {v:"B1",   badge:"B1", label:"B1 — Intermediate",      sub:"Everyday topics"},
  {v:"B2",   badge:"B2", label:"B2 — Upper Intermediate", sub:"Fluent communication"},
  {v:"C1",   badge:"C1", label:"C1 — Advanced",          sub:"Near-native proficiency"},
  {v:"x",    badge:"?",  label:"Not Sure",               sub:"I'll find out later"},
];
const OB_GOALS = [
  {v:"live",   Icon: HomeIcon,       label:"Living in Germany"},
  {v:"work",   Icon: Briefcase,      label:"Work and Career"},
  {v:"edu",    Icon: GraduationCap,  label:"University / Education"},
  {v:"exam",   Icon: ClipboardCheck, label:"Citizenship / Exam"},
  {v:"travel", Icon: Plane,          label:"Travel"},
  {v:"family", Icon: Users,          label:"Family and Friends"},
  {v:"hobby",  Icon: Heart,          label:"Personal Interest"},
];
const OB_DAILY = [
  {v:"5",  label:"5 min",  sub:"Quick daily habit"},
  {v:"10", label:"10 min", sub:"Regular practice"},
  {v:"15", label:"15 min", sub:"Steady progress"},
  {v:"20", label:"20 min", sub:"Serious learning"},
  {v:"30", label:"30+ min",sub:"Rapid advancement"},
];
const OB_FOCUS = [
  {v:"speaking",   Icon: Mic,        label:"Speaking"},
  {v:"listening",  Icon: Headphones, label:"Listening"},
  {v:"reading",    Icon: BookOpen,   label:"Reading"},
  {v:"writing",    Icon: PenLine,    label:"Writing"},
  {v:"grammar",    Icon: FileText,   label:"Grammar"},
  {v:"vocabulary", Icon: Type,       label:"Vocabulary"},
  {v:"all",        Icon: Star,       label:"Everything"},
];

const GOAL_LABELS = {live:"Living in Germany",work:"Work & Career",edu:"Education",exam:"Citizenship / Exam",travel:"Travel",family:"Family & Friends",hobby:"Personal Interest"};
const LANG_LABELS = {tr:"Turkish",en:"English",ar:"Arabic",es:"Spanish",fr:"French",ru:"Russian",ku:"Sorani Kurdish",fa:"Farsi",ko:"Korean",ja:"Japanese"};
const FOCUS_LABELS = {speaking:"Speaking",listening:"Listening",reading:"Reading",writing:"Writing",grammar:"Grammar",vocabulary:"Vocabulary",all:"Everything"};

// ── Onboarding System ───────────────────────────────────────────────
function OnboardingSystem({ onDone, startAt = "welcome" }) {
  const FLOW = ["welcome","lang","level","goals","daily","focus","summary","auth"];
  const [screen, setScreen]   = useState(startAt);
  const [animKey, setAnimKey] = useState(0);
  const [answers, setAnswers] = useState({ goals:[], focus:[] });
  // auth sub-states
  const [authMode, setAuthMode]   = useState("main"); // main|email|forgot_email|forgot_otp|forgot_newpw|check_email
  const [email, setEmail]         = useState("");
  const [name, setName]           = useState("");
  const [pw, setPw]               = useState("");
  const [pw2, setPw2]             = useState("");
  const [formErr, setFormErr]     = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [otpCode, setOtpCode]     = useState("");
  const [otpEmail, setOtpEmail]   = useState("");
  const [newPw, setNewPw]         = useState("");
  const [newPw2, setNewPw2]       = useState("");

  const lang = answers.lang || "en";
  const t = (key) => (OB_TRANS[lang]?.[key] ?? OB_TRANS.en[key] ?? key);
  const dir = LANG_DIR[lang] || "ltr";

  const progressIdx = FLOW.indexOf(screen);
  const progress    = progressIdx <= 0 ? 0 : (progressIdx / (FLOW.length - 1)) * 100;

  const go = useCallback((next) => { setAnimKey(k=>k+1); setScreen(next); }, []);

  function save(key, val) { setAnswers(a => ({...a, [key]: val})); }
  function toggleMulti(key, val) {
    setAnswers(a => {
      const arr = a[key] || [];
      return {...a, [key]: arr.includes(val) ? arr.filter(x=>x!==val) : [...arr, val]};
    });
  }

  function finish(extra={}) {
    const data = {...answers, ...extra};
    localStorage.setItem("ferbun_onboarded", "1");
    const safeData = {...data};
    delete safeData._pw;
    localStorage.setItem("ob_data", JSON.stringify(safeData));
    onDone(data);
  }

  // ── Supabase: Register ────────────────────────────────
  async function submitEmail() {
    if (!name.trim()) return setFormErr("Please enter your full name.");
    if (!email.includes("@")) return setFormErr("Please enter a valid email.");
    const pwOk = pw.length >= 8 && /[A-Z]/.test(pw) && /[0-9]/.test(pw);
    if (!pwOk) return setFormErr("Password: min 8 chars, 1 uppercase, 1 number.");
    if (pw !== pw2) return setFormErr("Passwords do not match.");
    setFormErr("");
    setAuthLoading(true);

    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password: pw,
      options: { data: { full_name: name.trim() } }
    });

    setAuthLoading(false);

    if (error) {
      const msg = error.message.toLowerCase();
      if (msg.includes("already") || msg.includes("registered") || msg.includes("exists")) {
        setFormErr("This email is already registered. Redirecting to sign in…");
        setTimeout(() => { go("login"); setAuthMode("main"); setEmail(""); setPw(""); }, 2200);
      } else {
        setFormErr(error.message);
      }
      return;
    }

    // Save answers now (before possible email redirect)
    const safeData = {...answers, email: email.trim(), name: name.trim(), auth:"email"};
    localStorage.setItem("ob_data", JSON.stringify(safeData));
    localStorage.setItem("ferbun_onboarded", "1");
    setAuthMode("check_email");
  }

  // ── Supabase: Sign In ─────────────────────────────────
  async function submitLogin() {
    if (!email.trim()) return setFormErr("Please enter your email.");
    if (!pw) return setFormErr("Please enter your password.");
    setFormErr("");
    setAuthLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: pw,
    });

    setAuthLoading(false);

    if (error) {
      setFormErr(error.message);
      return;
    }

    // onAuthStateChange in App component handles session → app transition
    const stored = JSON.parse(localStorage.getItem("ob_data") || "{}");
    onDone({ ...stored, auth: "login" });
  }

  // ── Supabase: Google OAuth ────────────────────────────
  async function signInWithGoogle() {
    // Save current answers before redirect
    const safeData = {...answers, auth:"google"};
    localStorage.setItem("ob_data", JSON.stringify(safeData));
    localStorage.setItem("ferbun_onboarded", "1");
    setAuthLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin }
    });
    setAuthLoading(false);
    if (error) setFormErr(error.message);
  }

  // ── Supabase: Forgot Password — Step 1 (send OTP) ────
  async function submitForgotEmail() {
    const fe = email.trim();
    if (!fe.includes("@")) return setFormErr("Please enter a valid email address.");
    setFormErr("");
    setAuthLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email: fe,
      options: { shouldCreateUser: false }
    });

    setAuthLoading(false);

    if (error) {
      setFormErr(error.message);
      return;
    }

    setOtpEmail(fe);
    setOtpCode("");
    setAuthMode("forgot_otp");
  }

  // ── Supabase: Forgot Password — Step 2 (verify OTP) ──
  async function submitForgotOtp() {
    if (otpCode.length < 6) return setFormErr("Please enter the full 6-digit code.");
    setFormErr("");
    setAuthLoading(true);

    const { error } = await supabase.auth.verifyOtp({
      email: otpEmail,
      token: otpCode,
      type: "email"
    });

    setAuthLoading(false);

    if (error) {
      setFormErr(error.message);
      return;
    }

    setOtpCode("");
    setNewPw("");
    setNewPw2("");
    setAuthMode("forgot_newpw");
  }

  // ── Supabase: Forgot Password — Step 3 (set new pw) ──
  async function submitNewPw() {
    if (newPw.length < 8) return setFormErr("Password must be at least 8 characters.");
    if (newPw !== newPw2) return setFormErr("Passwords do not match.");
    setFormErr("");
    setAuthLoading(true);

    const { error } = await supabase.auth.updateUser({ password: newPw });

    setAuthLoading(false);

    if (error) {
      setFormErr(error.message);
      return;
    }

    const stored = JSON.parse(localStorage.getItem("ob_data") || "{}");
    onDone({ ...stored, auth: "reset" });
  }

  // ── Shared card style ────────────────────────────────
  const card = (active) => ({
    border: active ? "2px solid #5B5BD6" : "1.5px solid #E4E4E8",
    background: active ? "rgba(91,91,214,.07)" : "#fff",
    borderRadius:16, cursor:"pointer", transition:"all .15s",
    boxShadow: active ? "0 0 0 4px rgba(91,91,214,.10)" : "none",
  });

  // ── Wrapper — memoized so toggleMulti doesn't remount it ─────────
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const W = useCallback(({children, showBack=false, backTo}) => (
    <div style={{ position:"fixed", inset:0, zIndex:9998, background:"#fff", display:"flex", flexDirection:"column", fontFamily:"'Vazirmatn',sans-serif", direction:dir, overflowY:"auto" }}>
      {/* Progress */}
      {screen !== "welcome" && screen !== "auth" && authMode === "main" && (
        <div style={{ flexShrink:0 }}>
          <div style={{ height:3, background:"#F0F0F0" }}>
            <div style={{ height:"100%", width:`${progress}%`, background:"linear-gradient(90deg,#5B5BD6,#FF6B5E)", transition:"width .4s ease" }} />
          </div>
          <div style={{ display:"flex", justifyContent:"space-between", padding:"12px 20px 0", fontSize:13, color:"#71717A" }}>
            <span style={{ fontWeight:600 }}>{progressIdx}/{FLOW.length-1}</span>
            {showBack && <button onClick={() => go(backTo)} style={{ border:"none", background:"transparent", cursor:"pointer", color:"#71717A", fontWeight:600, fontSize:13 }}>← Back</button>}
          </div>
        </div>
      )}
      <div key={animKey} style={{ flex:1, padding:"28px 24px 40px", maxWidth:480, margin:"0 auto", width:"100%", animation:"ob-enter .28s ease both" }}>
        {children}
      </div>
      <style>{`
        @keyframes ob-enter { from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:translateX(0)} }
        .ob-btn { border:none; border-radius:14px; cursor:pointer; font-family:'Vazirmatn',sans-serif; font-weight:700; transition:all .15s; }
        .ob-btn:hover { filter:brightness(.95); transform:translateY(-1px); }
        .ob-btn:active { transform:translateY(0); }
      `}</style>
    </div>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [screen, animKey, progress, progressIdx, dir, go, authMode]);

  // ══ SCREENS ═════════════════════════════════════════════════════

  // ── Forgot password — Step 1: enter email ───────────────────────
  if (authMode === "forgot_email") return (
    <W>
      <button onClick={() => { setAuthMode("main"); setFormErr(""); setEmail(""); }}
        style={{ border:"none", background:"transparent", cursor:"pointer", color:"#71717A", fontSize:13, fontWeight:600, marginBottom:24, padding:0 }}>← {t("btn_back")}</button>
      <div style={{ textAlign:"center", marginBottom:36 }}>
        <div style={{ width:64, height:64, borderRadius:20, background:"linear-gradient(135deg,#5B5BD6,#FF6B5E)", display:"grid", placeItems:"center", margin:"0 auto 20px", boxShadow:"0 12px 32px rgba(91,91,214,.28)" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </div>
        <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontWeight:800, fontSize:24, color:"#18181B", marginBottom:8 }}>{t("forgot_title")}</div>
        <div style={{ fontSize:14, color:"#71717A", lineHeight:1.6, maxWidth:300, margin:"0 auto" }}>{t("forgot_sub")}</div>
      </div>
      <div style={{ marginBottom:20 }}>
        <label style={{ display:"block", fontSize:12, fontWeight:700, color:"#71717A", marginBottom:6 }}>{t("login_email")}</label>
        <input type="email" placeholder="your@email.com" value={email} onChange={e => { setEmail(e.target.value); setFormErr(""); }}
          onKeyDown={e => e.key==="Enter" && submitForgotEmail()}
          style={{ width:"100%", padding:"14px 16px", border:"1.5px solid #E4E4E8", borderRadius:14, fontSize:15, outline:"none", fontFamily:"'Vazirmatn',sans-serif", boxSizing:"border-box" }} />
      </div>
      {formErr && <div style={{ color:"#E5484D", fontSize:13, marginBottom:14, padding:"10px 14px", background:"rgba(229,72,77,.08)", borderRadius:10 }}>{formErr}</div>}
      <button className="ob-btn" onClick={submitForgotEmail} disabled={authLoading}
        style={{ background: authLoading ? "#A1A1AA" : "linear-gradient(135deg,#5B5BD6,#4B45C4)", color:"#fff", padding:"15px", fontSize:15, width:"100%", cursor: authLoading ? "default" : "pointer" }}>
        {authLoading ? "…" : t("forgot_send")}
      </button>
    </W>
  );

  // ── Forgot password — Step 2: enter OTP code ────────────────────
  if (authMode === "forgot_otp") return (
    <W>
      <button onClick={() => { setAuthMode("forgot_email"); setFormErr(""); }}
        style={{ border:"none", background:"transparent", cursor:"pointer", color:"#71717A", fontSize:13, fontWeight:600, marginBottom:24, padding:0 }}>← {t("btn_back")}</button>
      <div style={{ textAlign:"center", marginBottom:36 }}>
        <div style={{ width:64, height:64, borderRadius:20, background:"linear-gradient(135deg,#5B5BD6,#FF6B5E)", display:"grid", placeItems:"center", margin:"0 auto 20px", boxShadow:"0 12px 32px rgba(91,91,214,.28)" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
        </div>
        <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontWeight:800, fontSize:24, color:"#18181B", marginBottom:8 }}>{t("forgot_otp_title")}</div>
        <div style={{ fontSize:14, color:"#71717A", lineHeight:1.6, maxWidth:320, margin:"0 auto" }}>
          {t("forgot_otp_sub")} <strong style={{ color:"#18181B" }}>{otpEmail}</strong>
        </div>
      </div>
      <div style={{ marginBottom:20 }}>
        <label style={{ display:"block", fontSize:12, fontWeight:700, color:"#71717A", marginBottom:6 }}>6-DIGIT CODE</label>
        <input type="text" inputMode="numeric" maxLength={6} placeholder="000000" value={otpCode}
          onChange={e => { setOtpCode(e.target.value.replace(/\D/g,"")); setFormErr(""); }}
          onKeyDown={e => e.key==="Enter" && submitForgotOtp()}
          style={{ width:"100%", padding:"18px 16px", border:"1.5px solid #E4E4E8", borderRadius:14, fontSize:28, fontWeight:800, outline:"none", fontFamily:"'Satoshi',system-ui,sans-serif", letterSpacing:"0.3em", textAlign:"center", boxSizing:"border-box" }} />
      </div>
      {formErr && <div style={{ color:"#E5484D", fontSize:13, marginBottom:14, padding:"10px 14px", background:"rgba(229,72,77,.08)", borderRadius:10 }}>{formErr}</div>}
      <button className="ob-btn" onClick={submitForgotOtp} disabled={authLoading || otpCode.length < 6}
        style={{ background: (authLoading || otpCode.length<6) ? "#E4E4E8" : "linear-gradient(135deg,#5B5BD6,#4B45C4)", color: (authLoading || otpCode.length<6) ? "#A1A1AA" : "#fff", padding:"15px", fontSize:15, width:"100%", cursor: (authLoading || otpCode.length<6) ? "default" : "pointer" }}>
        {authLoading ? "…" : t("forgot_verify")}
      </button>
      <button onClick={submitForgotEmail} disabled={authLoading}
        style={{ border:"none", background:"transparent", color:"#5B5BD6", fontSize:13, fontWeight:600, cursor:"pointer", display:"block", margin:"16px auto 0", textDecoration:"underline" }}>
        Resend code
      </button>
    </W>
  );

  // ── Forgot password — Step 3: set new password ──────────────────
  if (authMode === "forgot_newpw") return (
    <W>
      <div style={{ textAlign:"center", marginBottom:36 }}>
        <div style={{ width:64, height:64, borderRadius:20, background:"linear-gradient(135deg,#16A06F,#5B5BD6)", display:"grid", placeItems:"center", margin:"0 auto 20px", boxShadow:"0 12px 32px rgba(22,160,111,.28)" }}>
          <Lock size={30} color="#fff" strokeWidth={1.8} />
        </div>
        <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontWeight:800, fontSize:24, color:"#18181B", marginBottom:8 }}>{t("forgot_newpw_title")}</div>
        <div style={{ fontSize:14, color:"#71717A" }}>{t("forgot_newpw_sub")}</div>
      </div>
      {[["NEW PASSWORD", newPw, setNewPw], ["CONFIRM PASSWORD", newPw2, setNewPw2]].map(([lbl, val, setter]) => (
        <div key={lbl} style={{ marginBottom:14 }}>
          <label style={{ display:"block", fontSize:12, fontWeight:700, color:"#71717A", marginBottom:6 }}>{lbl}</label>
          <input type="password" placeholder="••••••••" value={val} onChange={e => { setter(e.target.value); setFormErr(""); }}
            style={{ width:"100%", padding:"14px 16px", border:"1.5px solid #E4E4E8", borderRadius:14, fontSize:15, outline:"none", fontFamily:"'Vazirmatn',sans-serif", boxSizing:"border-box" }} />
        </div>
      ))}
      <div style={{ fontSize:12, color:"#A1A1AA", marginBottom:20, lineHeight:1.8 }}>Minimum 8 characters</div>
      {formErr && <div style={{ color:"#E5484D", fontSize:13, marginBottom:14, padding:"10px 14px", background:"rgba(229,72,77,.08)", borderRadius:10 }}>{formErr}</div>}
      <button className="ob-btn" onClick={submitNewPw} disabled={authLoading}
        style={{ background: authLoading ? "#A1A1AA" : "linear-gradient(135deg,#16A06F,#5B5BD6)", color:"#fff", padding:"15px", fontSize:15, width:"100%", cursor: authLoading ? "default" : "pointer" }}>
        {authLoading ? "…" : t("forgot_save")}
      </button>
    </W>
  );

  // ── Check email (after registration) ────────────────────────────
  if (authMode === "check_email") return (
    <W>
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", minHeight:"80vh", textAlign:"center" }}>
        <div style={{ width:80, height:80, borderRadius:24, background:"linear-gradient(135deg,#5B5BD6,#FF6B5E)", display:"grid", placeItems:"center", boxShadow:"0 16px 40px rgba(91,91,214,.3)", marginBottom:28 }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </div>
        <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontWeight:800, fontSize:26, color:"#18181B", marginBottom:12 }}>Check Your Email</div>
        <div style={{ fontSize:15, color:"#71717A", lineHeight:1.7, maxWidth:300, marginBottom:8 }}>
          We sent a confirmation link to
        </div>
        <div style={{ fontSize:16, fontWeight:700, color:"#5B5BD6", marginBottom:32 }}>{email}</div>
        <div style={{ fontSize:13, color:"#A1A1AA", lineHeight:1.7, maxWidth:300 }}>
          Click the link in the email to activate your account. After confirming, you can sign in.
        </div>
        <button onClick={() => { setAuthMode("main"); go("login"); setEmail(""); setPw(""); }}
          style={{ marginTop:40, border:"1.5px solid #E4E4E8", background:"transparent", color:"#5B5BD6", fontWeight:700, fontSize:14, padding:"12px 32px", borderRadius:14, cursor:"pointer" }}>
          Go to Sign In
        </button>
      </div>
    </W>
  );

  // Login
  if (screen === "login") return (
    <W>
      <div style={{ display:"flex", flexDirection:"column", minHeight:"85vh", justifyContent:"center" }}>
        <div style={{ textAlign:"center", marginBottom:36 }}>
          <div style={{ width:64, height:64, borderRadius:20, background:"linear-gradient(135deg,#5B5BD6,#FF6B5E)", display:"grid", placeItems:"center", margin:"0 auto 20px", boxShadow:"0 12px 32px rgba(91,91,214,.28)" }}>
            <GraduationCap size={32} color="#fff" strokeWidth={1.8} />
          </div>
          <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontWeight:800, fontSize:26, color:"#18181B", marginBottom:8 }}>{t("login_title")}</div>
          <div style={{ fontSize:14, color:"#71717A" }}>{t("login_sub")}</div>
        </div>

        <div style={{ marginBottom:14 }}>
          <label style={{ display:"block", fontSize:12, fontWeight:700, color:"#71717A", marginBottom:6 }}>{t("login_email")}</label>
          <input type="email" placeholder="your@email.com" value={email} onChange={e => { setEmail(e.target.value); setFormErr(""); }}
            style={{ width:"100%", padding:"14px 16px", border:"1.5px solid #E4E4E8", borderRadius:14, fontSize:15, outline:"none", fontFamily:"'Vazirmatn',sans-serif", boxSizing:"border-box" }} />
        </div>
        <div style={{ marginBottom:4 }}>
          <label style={{ display:"block", fontSize:12, fontWeight:700, color:"#71717A", marginBottom:6 }}>{t("login_pass")}</label>
          <input type="password" placeholder="••••••••" value={pw} onChange={e => { setPw(e.target.value); setFormErr(""); }}
            onKeyDown={e => e.key === "Enter" && submitLogin()}
            style={{ width:"100%", padding:"14px 16px", border:"1.5px solid #E4E4E8", borderRadius:14, fontSize:15, outline:"none", fontFamily:"'Vazirmatn',sans-serif", boxSizing:"border-box" }} />
        </div>
        <div style={{ textAlign:"right", marginBottom:8 }}>
          <button onClick={() => { setFormErr(""); setAuthMode("forgot_email"); }}
            style={{ border:"none", background:"transparent", color:"#5B5BD6", fontWeight:600, cursor:"pointer", fontSize:13, padding:"4px 0" }}>
            {t("forgot_link")}
          </button>
        </div>

        {formErr && (
          <div style={{ color:"#E5484D", fontSize:13, margin:"10px 0 4px", padding:"10px 14px", background:"rgba(229,72,77,.08)", borderRadius:10 }}>
            {formErr}
          </div>
        )}

        <button className="ob-btn" onClick={submitLogin} disabled={authLoading}
          style={{ background: authLoading ? "#A1A1AA" : "linear-gradient(135deg,#5B5BD6,#4B45C4)", color:"#fff", padding:"15px", fontSize:15, width:"100%", marginTop:12, marginBottom:20, cursor: authLoading ? "default" : "pointer" }}>
          {authLoading ? "…" : t("login_btn")}
        </button>

        <div style={{ textAlign:"center", padding:"18px 0", borderTop:"1px solid #F0F0F5" }}>
          <span style={{ fontSize:14, color:"#71717A" }}>{t("login_no_acc")} </span>
          <button onClick={() => { setFormErr(""); setEmail(""); setPw(""); go("auth"); }}
            style={{ border:"none", background:"transparent", color:"#5B5BD6", fontWeight:700, cursor:"pointer", fontSize:14, padding:0 }}>
            {t("login_reg")}
          </button>
        </div>
      </div>
    </W>
  );

  // Welcome
  if (screen === "welcome") return (
    <W>
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", minHeight:"80vh", textAlign:"center", gap:0 }}>
        <div style={{ width:80, height:80, borderRadius:24, background:"linear-gradient(135deg,#5B5BD6,#FF6B5E)", display:"grid", placeItems:"center", boxShadow:"0 16px 40px rgba(91,91,214,.3)", marginBottom:32 }}>
          <GraduationCap size={40} color="#fff" strokeWidth={1.8} />
        </div>
        <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontWeight:800, fontSize:32, lineHeight:1.2, color:"#18181B", marginBottom:14 }}>Learn German<br/>Faster</div>
        <div style={{ fontSize:15, color:"#71717A", lineHeight:1.7, maxWidth:300, marginBottom:48 }}>Personalize your learning experience in less than one minute.</div>
        <button className="ob-btn" onClick={() => go("lang")}
          style={{ background:"linear-gradient(135deg,#5B5BD6,#4B45C4)", color:"#fff", padding:"16px 48px", fontSize:16, width:"100%", maxWidth:340, borderRadius:16 }}>
          Get Started →
        </button>
      </div>
    </W>
  );

  // Language
  if (screen === "lang") return (
    <W>
      <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontWeight:800, fontSize:22, color:"#18181B", marginBottom:6 }}>{t("lang_title")}</div>
      <div style={{ fontSize:14, color:"#71717A", marginBottom:24 }}>{t("lang_sub")}</div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
        {OB_LANGS.map(l => (
          <button key={l.v} onClick={() => save("lang", l.v)}
            style={{ ...card(answers.lang===l.v), padding:"14px 12px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:6 }}>
            <div style={{ width:46, height:30, borderRadius:9, background: answers.lang===l.v ? "#5B5BD6" : "#F0F0F5", display:"flex", alignItems:"center", justifyContent:"center", transition:"background .15s" }}>
              <span style={{ fontWeight:800, fontSize:12, letterSpacing:"1px", color: answers.lang===l.v ? "#fff" : "#71717A" }}>{l.code}</span>
            </div>
            <span style={{ fontWeight:700, fontSize:13, color: answers.lang===l.v ? "#5B5BD6" : "#18181B" }}>{l.label}</span>
            <span style={{ fontSize:11, color:"#A1A1AA" }}>{l.native}</span>
          </button>
        ))}
      </div>
      {answers.lang && (
        <div style={{ display:"flex", alignItems:"center", gap:8, marginTop:18, padding:"12px 16px", borderRadius:12, background:"#F0F0FF", border:"1px solid #E0E0FF" }}>
          <Globe size={18} color="#5B5BD6" strokeWidth={2} />
          <span style={{ fontSize:13, color:"#5B5BD6", fontWeight:600 }}>{t("lang_msg")}</span>
        </div>
      )}
      <button
        className="ob-btn"
        disabled={!answers.lang}
        onClick={() => go("level")}
        style={{
          marginTop:20, width:"100%", padding:"16px", fontSize:16,
          background: answers.lang ? "linear-gradient(135deg,#5B5BD6,#4B45C4)" : "#E4E4E7",
          color: answers.lang ? "#fff" : "#A1A1AA",
          cursor: answers.lang ? "pointer" : "not-allowed",
          borderRadius:16, transition:"all .2s",
        }}>
        {answers.lang ? t("btn_continue") : "—"}
      </button>
    </W>
  );

  // Level
  if (screen === "level") return (
    <W>
      <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontWeight:800, fontSize:22, color:"#18181B", marginBottom:6 }}>{t("level_title")}</div>
      <div style={{ fontSize:14, color:"#71717A", marginBottom:24 }}>{t("level_sub")}</div>
      <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
        {OB_LEVELS.map(l => {
          const lbl = l.v==="none" ? t("lv_none") : l.v==="x" ? t("lv_x") : l.label;
          const sub = l.v==="none" ? t("lv_none_s") : l.v==="x" ? t("lv_x_s") : t(`lv_${l.v}_s`);
          return (
            <button key={l.v} onClick={() => save("level", l.v)}
              style={{ ...card(answers.level===l.v), padding:"14px 16px", display:"flex", alignItems:"center", gap:14, textAlign:dir==="rtl"?"right":"left" }}>
              <div style={{ width:40, height:40, borderRadius:12, background: answers.level===l.v ? "#5B5BD6" : "#F4F4F5", display:"grid", placeItems:"center", flexShrink:0 }}>
                <span style={{ fontWeight:800, fontSize:13, color: answers.level===l.v ? "#fff" : "#71717A" }}>{l.badge}</span>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:700, fontSize:14, color: answers.level===l.v ? "#5B5BD6" : "#18181B" }}>{lbl}</div>
                <div style={{ fontSize:12, color:"#A1A1AA", marginTop:2 }}>{sub}</div>
              </div>
              {answers.level===l.v && <CheckCircle2 size={18} color="#5B5BD6" />}
            </button>
          );
        })}
      </div>
      <div style={{ display:"flex", gap:10, marginTop:24 }}>
        <button className="ob-btn" onClick={() => go("lang")}
          style={{ flex:1, padding:"15px 0", fontSize:15, background:"#F4F4F5", color:"#3F3F46" }}>
          {t("btn_back")}
        </button>
        <button className="ob-btn"
          disabled={!answers.level}
          onClick={() => answers.level && go("goals")}
          style={{ flex:2, padding:"15px 0", fontSize:15,
            background: answers.level ? "linear-gradient(135deg,#5B5BD6,#4B45C4)" : "#E4E4E7",
            color: answers.level ? "#fff" : "#A1A1AA",
            cursor: answers.level ? "pointer" : "not-allowed" }}>
          {t("btn_continue")}
        </button>
      </div>
    </W>
  );

  // Goals (multi-select)
  if (screen === "goals") return (
    <W>
      <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontWeight:800, fontSize:22, color:"#18181B", marginBottom:6 }}>{t("goals_title")}</div>
      <div style={{ fontSize:14, color:"#71717A", marginBottom:24 }}>{t("goals_sub")}</div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:24 }}>
        {OB_GOALS.map(g => {
          const sel = answers.goals.includes(g.v);
          return (
            <button key={g.v} onClick={() => toggleMulti("goals", g.v)}
              style={{ ...card(sel), padding:"16px 12px", display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
              <g.Icon size={26} color={sel ? "#5B5BD6" : "#71717A"} strokeWidth={1.8} />
              <span style={{ fontWeight:700, fontSize:12, color: sel ? "#5B5BD6" : "#18181B", textAlign:"center", lineHeight:1.4 }}>{t("g_"+g.v)}</span>
            </button>
          );
        })}
      </div>
      <div style={{ display:"flex", gap:10 }}>
        <button className="ob-btn" onClick={() => go("level")}
          style={{ flex:1, padding:"15px 0", fontSize:15, background:"#F4F4F5", color:"#3F3F46" }}>
          {t("btn_back")}
        </button>
        <button className="ob-btn"
          disabled={answers.goals.length === 0}
          onClick={() => answers.goals.length > 0 && go("daily")}
          style={{ flex:2, padding:"15px 0", fontSize:15,
            background: answers.goals.length > 0 ? "linear-gradient(135deg,#5B5BD6,#4B45C4)" : "#E4E4E7",
            color: answers.goals.length > 0 ? "#fff" : "#A1A1AA",
            cursor: answers.goals.length > 0 ? "pointer" : "not-allowed" }}>
          {t("btn_continue")} {answers.goals.length > 0 ? `(${answers.goals.length})` : ""}
        </button>
      </div>
    </W>
  );

  // Daily
  if (screen === "daily") return (
    <W>
      <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontWeight:800, fontSize:22, color:"#18181B", marginBottom:6 }}>{t("daily_title")}</div>
      <div style={{ fontSize:14, color:"#71717A", marginBottom:24 }}>{t("daily_sub")}</div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
        {OB_DAILY.map((d, idx) => (
          <button key={d.v} onClick={() => save("daily", d.v)}
            style={{ ...card(answers.daily===d.v), padding:"16px 12px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:4,
              ...(idx === OB_DAILY.length - 1 && OB_DAILY.length % 2 === 1 ? { gridColumn:"1 / -1" } : {}) }}>
            <div style={{ fontWeight:800, fontSize:22, color: answers.daily===d.v ? "#5B5BD6" : "#18181B" }}>
              {d.v === "30" ? "30+" : d.v}
            </div>
            <div style={{ fontWeight:600, fontSize:12, color: answers.daily===d.v ? "#5B5BD6" : "#71717A" }}>
              {t("unit_min")}
            </div>
            <div style={{ fontSize:11, color:"#A1A1AA", marginTop:2, textAlign:"center" }}>{t("d_"+d.v)}</div>
          </button>
        ))}
      </div>
      <div style={{ display:"flex", gap:10, marginTop:24 }}>
        <button className="ob-btn" onClick={() => go("goals")}
          style={{ flex:1, padding:"15px 0", fontSize:15, background:"#F4F4F5", color:"#3F3F46" }}>
          {t("btn_back")}
        </button>
        <button className="ob-btn"
          disabled={!answers.daily}
          onClick={() => answers.daily && go("focus")}
          style={{ flex:2, padding:"15px 0", fontSize:15,
            background: answers.daily ? "linear-gradient(135deg,#5B5BD6,#4B45C4)" : "#E4E4E7",
            color: answers.daily ? "#fff" : "#A1A1AA",
            cursor: answers.daily ? "pointer" : "not-allowed" }}>
          {t("btn_continue")}
        </button>
      </div>
    </W>
  );

  // Focus (multi-select)
  if (screen === "focus") return (
    <W>
      <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontWeight:800, fontSize:22, color:"#18181B", marginBottom:6 }}>{t("focus_title")}</div>
      <div style={{ fontSize:14, color:"#71717A", marginBottom:24 }}>{t("focus_sub")}</div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10, marginBottom:24 }}>
        {OB_FOCUS.map(f => {
          const sel = answers.focus.includes(f.v);
          return (
            <button key={f.v} onClick={() => toggleMulti("focus",f.v)}
              style={{ ...card(sel), padding:"14px 8px", display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
              <f.Icon size={22} color={sel ? "#5B5BD6" : "#71717A"} strokeWidth={1.8} />
              <span style={{ fontWeight:700, fontSize:12, color: sel ? "#5B5BD6" : "#18181B", textAlign:"center" }}>{t("f_"+f.v)}</span>
            </button>
          );
        })}
      </div>
      <div style={{ display:"flex", gap:10 }}>
        <button className="ob-btn" onClick={() => go("daily")}
          style={{ flex:1, padding:"15px 0", fontSize:15, background:"#F4F4F5", color:"#3F3F46" }}>
          {t("btn_back")}
        </button>
        <button className="ob-btn"
          disabled={answers.focus.length === 0}
          onClick={() => answers.focus.length > 0 && go("summary")}
          style={{ flex:2, padding:"15px 0", fontSize:15,
            background: answers.focus.length > 0 ? "linear-gradient(135deg,#5B5BD6,#4B45C4)" : "#E4E4E7",
            color: answers.focus.length > 0 ? "#fff" : "#A1A1AA",
            cursor: answers.focus.length > 0 ? "pointer" : "not-allowed" }}>
          {t("btn_continue")} {answers.focus.length > 0 ? `(${answers.focus.length})` : ""}
        </button>
      </div>
    </W>
  );

  // Summary
  if (screen === "summary") return (
    <W>
      <div style={{ textAlign:"center", marginBottom:32 }}>
        <div style={{ width:64, height:64, borderRadius:20, background:"linear-gradient(135deg,#5B5BD6,#FF6B5E)", display:"grid", placeItems:"center", margin:"0 auto 16px", boxShadow:"0 12px 32px rgba(91,91,214,.28)" }}>
          <Target size={32} color="#fff" strokeWidth={1.8} />
        </div>
        <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontWeight:800, fontSize:24, color:"#18181B", marginBottom:8 }}>{t("summary_title")}</div>
        <div style={{ fontSize:14, color:"#71717A" }}>{t("summary_sub")}</div>
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:12, marginBottom:32 }}>
        {[
          {label:t("sum_lang"),  val: LANG_LABELS[answers.lang] || answers.lang || "—", Icon: Globe},
          {label:t("sum_level"), val: answers.level ? (answers.level==="none"?t("lv_none"):answers.level==="x"?t("lv_x"):OB_LEVELS.find(l=>l.v===answers.level)?.label) : "—", Icon: TrendingUp},
          {label:t("sum_goals"), val: answers.goals.map(g=>t("g_"+g)).join(", ") || "—", Icon: Target},
          {label:t("sum_daily"), val: answers.daily ? `${answers.daily} min` : "—", Icon: Clock},
          {label:t("sum_focus"), val: answers.focus.map(f=>t("f_"+f)).join(", ") || "—", Icon: SlidersHorizontal},
        ].map(row => (
          <div key={row.label} style={{ background:"#F8F8FC", borderRadius:14, padding:"14px 16px", display:"flex", alignItems:"flex-start", gap:12 }}>
            <div style={{ width:32, height:32, borderRadius:10, background:"rgba(91,91,214,.1)", display:"grid", placeItems:"center", flexShrink:0 }}>
              <row.Icon size={16} color="#5B5BD6" strokeWidth={2} />
            </div>
            <div>
              <div style={{ fontSize:12, color:"#71717A", fontWeight:600, marginBottom:2 }}>{row.label}</div>
              <div style={{ fontSize:14, color:"#18181B", fontWeight:700 }}>{row.val}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display:"flex", gap:10 }}>
        <button className="ob-btn" onClick={() => go("focus")}
          style={{ flex:1, padding:"15px 0", fontSize:15, background:"#F4F4F5", color:"#3F3F46" }}>
          {t("btn_back")}
        </button>
        <button className="ob-btn" onClick={() => go("auth")}
          style={{ flex:2, padding:"15px 0", fontSize:15, background:"linear-gradient(135deg,#5B5BD6,#4B45C4)", color:"#fff" }}>
          {t("btn_continue")} →
        </button>
      </div>
    </W>
  );

  // Auth
  if (screen === "auth") {

    // Email form
    if (authMode === "email") return (
      <W>
        <button onClick={() => { setAuthMode("main"); setFormErr(""); }} style={{ border:"none", background:"transparent", cursor:"pointer", color:"#71717A", fontSize:13, fontWeight:600, marginBottom:24, padding:0 }}>← Back</button>
        <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontWeight:800, fontSize:22, color:"#18181B", marginBottom:6 }}>Create your account</div>
        <div style={{ fontSize:14, color:"#71717A", marginBottom:28 }}>Your progress will be saved and synced</div>
        {["Full Name","Email Address","Password","Confirm Password"].map((lbl,i) => (
          <div key={lbl} style={{ marginBottom:14 }}>
            <label style={{ display:"block", fontSize:12, fontWeight:700, color:"#71717A", marginBottom:6 }}>{lbl.toUpperCase()}</label>
            <input
              type={lbl.includes("Password") ? "password" : lbl==="Email Address" ? "email" : "text"}
              placeholder={lbl}
              value={i===0?name:i===1?email:i===2?pw:pw2}
              onChange={e => [setName,setEmail,setPw,setPw2][i](e.target.value)}
              style={{ width:"100%", padding:"14px 16px", border:"1.5px solid #E4E4E8", borderRadius:14, fontSize:15, outline:"none", fontFamily:"'Vazirmatn',sans-serif", boxSizing:"border-box" }}
            />
          </div>
        ))}
        {formErr && <div style={{ color:"#E5484D", fontSize:13, marginBottom:14, padding:"10px 14px", background:"rgba(229,72,77,.08)", borderRadius:10 }}>{formErr}</div>}
        <div style={{ fontSize:12, color:"#A1A1AA", marginBottom:20, lineHeight:1.8 }}>
          Password requirements: min. 8 characters · 1 uppercase · 1 number
        </div>
        <button className="ob-btn" onClick={submitEmail} disabled={authLoading}
          style={{ background: authLoading ? "#A1A1AA" : "linear-gradient(135deg,#5B5BD6,#4B45C4)", color:"#fff", padding:"15px", fontSize:15, width:"100%", cursor: authLoading ? "default" : "pointer" }}>
          {authLoading ? "Creating account…" : "Create Account"}
        </button>
      </W>
    );

    // (PIN setup removed — Supabase handles auth security)

    // Main auth screen
    return (
      <W>
        <div style={{ display:"flex", flexDirection:"column", minHeight:"80vh", justifyContent:"center" }}>
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <div style={{ width:64, height:64, borderRadius:20, background:"linear-gradient(135deg,#5B5BD6,#FF6B5E)", display:"grid", placeItems:"center", margin:"0 auto 20px", boxShadow:"0 12px 32px rgba(91,91,214,.28)" }}>
              <GraduationCap size={32} color="#fff" strokeWidth={1.8} />
            </div>
            <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontWeight:800, fontSize:24, color:"#18181B", marginBottom:8 }}>{t("auth_title")}</div>
            <div style={{ fontSize:14, color:"#71717A", lineHeight:1.7, maxWidth:280, margin:"0 auto" }}>{t("auth_sub")}</div>
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {/* Google */}
            <button className="ob-btn" onClick={signInWithGoogle} disabled={authLoading}
              style={{ background:"#fff", border:"1.5px solid #E4E4E8", color:"#18181B", padding:"15px", fontSize:15, display:"flex", alignItems:"center", justifyContent:"center", gap:10, cursor: authLoading ? "default" : "pointer" }}>
              <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              {authLoading ? "…" : t("auth_google")}
            </button>

            {/* Apple */}
            <button className="ob-btn" onClick={() => finish({ auth:"apple" })}
              style={{ background:"#18181B", color:"#fff", padding:"15px", fontSize:15, display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.17 10.56c-.02-2.19 1.79-3.24 1.87-3.29-1.02-1.49-2.6-1.69-3.17-1.72-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.77-2.86-.75-1.47.02-2.83.86-3.59 2.17C.61 10.38 1.6 14.18 2.83 16.18c.59.85 1.3 1.81 2.22 1.77.89-.04 1.23-.57 2.31-.57 1.08 0 1.39.57 2.33.56.96-.02 1.57-.87 2.16-1.73.68-.99.96-1.95.97-2-.02-.01-1.88-.72-1.9-2.87l.25-.78zM10.9 3.62c.49-.59.82-1.43.73-2.26-.71.03-1.58.47-2.1 1.07-.46.53-.87 1.38-.76 2.2.8.06 1.62-.41 2.13-1.01z"/></svg>
              {t("auth_apple")}
            </button>

            <div style={{ display:"flex", alignItems:"center", gap:12, margin:"4px 0" }}>
              <div style={{ flex:1, height:1, background:"#E4E4E8" }} />
              <span style={{ fontSize:12, color:"#A1A1AA", fontWeight:600 }}>OR</span>
              <div style={{ flex:1, height:1, background:"#E4E4E8" }} />
            </div>

            {/* Email */}
            <button className="ob-btn" onClick={() => setAuthMode("email")}
              style={{ background:"#F4F4F5", color:"#18181B", padding:"15px", fontSize:15, display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
              <svg width="18" height="14" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="m2 4 10 7.5L22 4"/></svg>
              {t("auth_email")}
            </button>
          </div>

        </div>
      </W>
    );
  }

  return null;
}


export default function App() {
  const [intro, setIntro]           = useState(false);
  const [onboarding, setOnboarding] = useState(false);
  const [obStartScreen, setObStartScreen] = useState("lang");
  const [appLoaded, setAppLoaded]   = useState(false); // true once session check is done
  const [tab, setTab] = useState("home");
  const [openLesson, setOpenLesson] = useState(null);
  const [progress, setProgress] = useState({}); // key `${level}::${topic}` → ڕێژەی % (0..100)
  const [showKeyModal, setShowKeyModal] = useState(false);

  useEffect(() => {
    // ── Check existing session on mount ──────────────────────────
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      const onboarded = !!localStorage.getItem("ferbun_onboarded");

      if (s) {
        // Active session → go straight to app
        if (!onboarded) localStorage.setItem("ferbun_onboarded", "1");
      } else if (!onboarded) {
        // First time on this device → splash → full onboarding
        setIntro(true);       // show 6s splash
        setObStartScreen("lang");
        setOnboarding(true);  // will show after splash
      } else {
        // Returning user, no session → welcome → login (no splash)
        setObStartScreen("welcome");
        setOnboarding(true);
      }

      setAppLoaded(true);
    });

    // ── Listen for auth changes (OAuth redirects, sign-in, sign-out) ─
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, s) => {
      if (s) {
        // Signed in → close any onboarding/intro
        if (!localStorage.getItem("ferbun_onboarded")) {
          localStorage.setItem("ferbun_onboarded", "1");
        }
        setOnboarding(false);
        setIntro(false);
        setAppLoaded(true);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  function handleLogout() {
    supabase.auth.signOut().then(() => {
      setIntro(false);
      setObStartScreen("welcome");
      setOnboarding(true);
    });
  }

  return (
    <div dir="rtl" style={{ minHeight: "100vh", background: "radial-gradient(ellipse at 15% 10%, rgba(91,91,214,.10) 0%, transparent 50%), radial-gradient(ellipse at 88% 8%, rgba(255,107,94,.08) 0%, transparent 48%), #FBFBFC", backgroundAttachment: "fixed", color: C.ink, fontFamily: "'Vazirmatn', sans-serif" }}>
      {/* Loading overlay while session check completes */}
      {!appLoaded && (
        <div style={{ position:"fixed", inset:0, background:"#fff", zIndex:99999, display:"grid", placeItems:"center" }}>
          <div style={{ width:56, height:56, borderRadius:18, background:"linear-gradient(135deg,#5B5BD6,#FF6B5E)", display:"grid", placeItems:"center", boxShadow:"0 12px 32px rgba(91,91,214,.28)" }}>
            <GraduationCap size={28} color="#fff" strokeWidth={1.8} />
          </div>
        </div>
      )}
      {intro && <Intro onDone={() => setIntro(false)} />}
      {!intro && onboarding && <OnboardingSystem onDone={() => setOnboarding(false)} startAt={obStartScreen} />}
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&f[]=general-sans@400,500,600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700&display=swap');
        :root {
          --iris-50:#EEF0FF; --iris-100:#E0E3FF; --iris-200:#C6CBFF;
          --iris-500:#5B5BD6; --iris-600:#4B45C4; --iris-700:#3D38A3;
          --coral-500:#FF6B5E; --coral-600:#E8503F;
          --jade:#16A06F; --rose:#E5484D; --amber:#F5A524; --gold:#E8C16B;
          --ink-200:#E4E4E8; --ink-500:#71717A; --ink-900:#18181B;
          --bg:#FBFBFC; --surface:#FFFFFF;
          --display:'Satoshi',system-ui,sans-serif;
          --body:'General Sans',system-ui,sans-serif;
          --shadow-sm:0 1px 2px rgba(24,24,27,.06);
          --shadow-md:0 4px 18px rgba(24,24,27,.08);
          --shadow-lg:0 18px 48px rgba(24,24,27,.12);
          --radius-sm:8px; --radius-md:12px; --radius-lg:16px;
          --radius-xl:20px; --radius-2xl:28px; --radius-full:999px;
          --ease-spring:cubic-bezier(.2,0,0,1);
        }
        * { box-sizing: border-box; }
        body { margin: 0; }

        /* ── Keyframes ── */
        @keyframes rise      { from { opacity:0; transform:translateY(22px) scale(.98) } to { opacity:1; transform:none } }
        @keyframes flip      { from { transform:rotateX(90deg); opacity:0 }              to { transform:none; opacity:1 } }
        @keyframes barGrow   { from { width:0 }                                          to { width:var(--w) } }
        @keyframes pulse     { 0%,100%{ box-shadow: 0 0 0 0 rgba(91,91,214,.4) }          50%{ box-shadow: 0 0 0 8px rgba(91,91,214,0) } }
        @keyframes float     { 0%,100%{ transform:translateY(0) }                        50%{ transform:translateY(-6px) } }
        @keyframes shimmer      { 0%{ background-position:200% center }                     100%{ background-position:-200% center } }
        @keyframes robotFloat   { 0%,100%{ transform:translateY(0px) rotate(0deg) }         50%{ transform:translateY(-12px) rotate(-3deg) } }
        @keyframes robotThink   { 0%,100%{ transform:translateY(0px) rotate(0deg) }         25%{ transform:translateY(-6px) rotate(-14deg) } 50%{ transform:translateY(-10px) rotate(-18deg) } 75%{ transform:translateY(-6px) rotate(-14deg) } }
        @keyframes robotHappy   { 0%{ transform:scale(1) rotate(0deg) }                     20%{ transform:scale(1.12) rotate(-8deg) }  60%{ transform:scale(1.1) rotate(6deg) }  100%{ transform:scale(1) rotate(0deg) } }
        @keyframes thinkDot     { 0%,80%,100%{ transform:scale(0); opacity:0 }              40%{ transform:scale(1); opacity:1 } }
        .robot-idle    { animation: robotFloat 3.2s ease-in-out infinite; }
        .robot-thinking{ animation: robotThink 1.4s ease-in-out infinite; }
        .robot-happy   { animation: robotHappy 0.65s cubic-bezier(.22,1,.36,1) both; }

        /* ── Animations ── */
        .rise      { animation: rise .6s cubic-bezier(.22,1,.36,1) both; }
        .card-flip { animation: flip .38s cubic-bezier(.22,1,.36,1) both; }

        /* ── Typography ── */
        .gtext {
          background: linear-gradient(135deg, var(--iris-500), var(--coral-500));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .shimmer-text {
          background: linear-gradient(90deg, var(--iris-500) 0%, var(--coral-500) 40%, var(--iris-500) 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        /* ── Cards ── */
        button { font-family: inherit; cursor: pointer; }
        .wcard {
          transition: all .3s cubic-bezier(.22,1,.36,1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .wcard:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 28px 56px rgba(91,91,214,.14), 0 6px 16px rgba(0,0,0,.05) !important;
          background: rgba(255,255,255,.95) !important;
          border-color: rgba(91,91,214,.35) !important;
        }

        /* ── Navigation ── */
        .navbtn { transition: all .25s cubic-bezier(.22,1,.36,1); position: relative; }
        .navbtn:hover { transform: translateY(-2px); }
        .navbtn.active-tab { animation: pulse 2s ease infinite; }

        /* ── Progress Bars ── */
        .bar-track {
          height: 10px;
          background: rgba(148,163,184,.15);
          border-radius: 99px;
          overflow: hidden;
        }
        .bar-fill {
          height: 100%;
          border-radius: 99px;
          width: var(--w, 0%);
          animation: barGrow .9s cubic-bezier(.22,1,.36,1) both;
          position: relative;
          overflow: hidden;
        }
        .bar-fill::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,.35) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
        }

        /* ── Stat chips ── */
        .stat-chip {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: all .25s ease;
        }
        .stat-chip:hover { transform: translateY(-3px); }

        /* ── Glow buttons ── */
        .glow-btn {
          background: linear-gradient(135deg, #06b6d4, #a855f7) !important;
          color: #fff !important;
          box-shadow: 0 6px 24px rgba(6,182,212,.45) !important;
          transition: all .25s ease !important;
        }
        .glow-btn:hover { box-shadow: 0 10px 32px rgba(6,182,212,.6) !important; transform: translateY(-2px); }

        /* ── Scrollbar ── */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(180deg,#06b6d4,#a855f7); border-radius: 99px; }
        ::-webkit-scrollbar-track { background: transparent; }
      `}</style>

      {!intro && !onboarding && <header style={{ borderBottom: "1px solid rgba(255,255,255,0.35)", background: "rgba(255,255,255,0.58)", backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)", position: "sticky", top: 0, zIndex: 20, boxShadow: "0 4px 32px rgba(6,182,212,0.1)" }}>
        {/* gradient accent line at very top */}
        <div style={{ height: 3, background: "linear-gradient(90deg, #06b6d4, #a855f7, #10b981, #06b6d4)", backgroundSize: "200% 100%", animation: "shimmer 4s linear infinite" }} />
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div onClick={() => { setTab("home"); setOpenLesson(null); }} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 14, background: "linear-gradient(135deg, #06b6d4, #a855f7)", color: "#fff", display: "grid", placeItems: "center", fontFamily: "'Satoshi',system-ui,sans-serif", fontWeight: 700, fontSize: 20, boxShadow: "0 6px 18px rgba(6,182,212,0.45)" }}>A</div>
            <div>
              <div className="gtext" style={{ fontWeight: 800, fontSize: 18, lineHeight: 1.2 }}>فێربوونی ئەڵمانی</div>
              <div style={{ fontSize: 11, color: C.muted }}>ئەڵمانی بە سۆرانی · <De>A1–B2</De></div>
            </div>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:6 }}>
            <nav style={{ display: "flex", gap: 4 }}>
              {[["home","ماڵەوە",HomeIcon],["lessons","وانە",BookOpen],["cards","کارت",LayoutGrid],["talk","گفتوگۆ",MessageCircle]].map(([k, label, NavIcon]) => (
                <button key={k} className={`navbtn${tab===k?" active-tab":""}`} onClick={() => { setTab(k); setOpenLesson(null); }}
                  style={{ border: "none", background: tab===k ? "rgba(6,182,212,0.12)" : "transparent", color: tab===k ? C.red : C.muted, padding: "8px 14px", borderRadius: 12, fontSize: 14, fontWeight: tab===k ? 700 : 500, display: "flex", alignItems: "center", gap: 5 }}>
                  <NavIcon size={15} />{label}
                  {tab===k && <span style={{ position: "absolute", bottom: 0, left: "15%", right: "15%", height: 3, background: "linear-gradient(90deg,#06b6d4,#a855f7)", borderRadius: 99, display: "block" }} />}
                </button>
              ))}
            </nav>
            {/* API key status button */}
            <button onClick={() => setShowKeyModal(true)} title="API کلیل"
              style={{ border:"none", background:getApiKey()?"rgba(16,185,129,.12)":"rgba(239,68,68,.12)", color:getApiKey()?"#10b981":"#ef4444", width:34, height:34, borderRadius:10, fontSize:16, cursor:"pointer", display:"grid", placeItems:"center", flexShrink:0 }}>
              {getApiKey() ? <KeyRound size={16} /> : <AlertTriangle size={16} />}
            </button>
            {/* Logout button */}
            <button onClick={handleLogout} title="Logout"
              style={{ border:"none", background:"rgba(229,72,77,.08)", color:"#E5484D", width:34, height:34, borderRadius:10, cursor:"pointer", display:"grid", placeItems:"center", flexShrink:0 }}>
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </header>}
      {!intro && !onboarding && showKeyModal && <ApiKeyModal onSave={() => setShowKeyModal(false)} />}

      {!intro && !onboarding && <main style={{ maxWidth: 880, margin: "0 auto", padding: "28px 20px 64px" }}>
        {tab === "home" && <Home setTab={setTab} progress={progress} />}
        {tab === "lessons" && <Lessons open={openLesson} setOpen={setOpenLesson} progress={progress} setProgress={setProgress} />}
        {tab === "cards" && <Flashcards />}
        {tab === "talk" && <Talk />}
      </main>}
    </div>
  );
}

// ── ماڵەوە / Home ──────────────────────────────────────────────────
function KeyArt() {
  // Motîvasyon: zman = kilîl (key) bo xwêndin û kar
  return (
    <div style={{ position: "relative", width: 200, height: 210, flexShrink: 0, margin: "0 auto" }}>
      <svg viewBox="0 0 200 210" width="200" height="210" xmlns="http://www.w3.org/2000/svg">
        {/* glow */}
        <circle cx="100" cy="92" r="78" fill="rgba(253,243,230,.10)" />
        <circle cx="100" cy="92" r="58" fill="rgba(253,243,230,.08)" />
        {/* rays */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <rect key={a} x="98.5" y="6" width="3" height="13" rx="1.5" fill="rgba(253,243,230,.5)"
            transform={`rotate(${a} 100 92)`} />
        ))}
        {/* key */}
        <g fill="#fdf3e6">
          <circle cx="100" cy="62" r="30" fill="none" stroke="#fdf3e6" strokeWidth="12" />
          <rect x="94" y="90" width="12" height="92" rx="3" />
          <rect x="106" y="150" width="20" height="11" rx="2" />
          <rect x="106" y="167" width="14" height="11" rx="2" />
        </g>
        {/* gold accent dot in bow */}
        <circle cx="100" cy="62" r="9" fill={C.gold} />
      </svg>
      {/* badges */}
      <div style={{ position: "absolute", top: 8, left: -6, background: "#fdf3e6", color: C.green, width: 50, height: 50, borderRadius: "50%", display: "grid", placeItems: "center", boxShadow: "0 6px 16px rgba(0,0,0,.18)" }}><GraduationCap size={24} /></div>
      <div style={{ position: "absolute", bottom: 18, right: -6, background: "#fdf3e6", color: C.plum, width: 50, height: 50, borderRadius: "50%", display: "grid", placeItems: "center", boxShadow: "0 6px 16px rgba(0,0,0,.18)" }}><Briefcase size={24} /></div>
    </div>
  );
}

function Home({ setTab, progress = {} }) {
  const wordCount = LESSONS.reduce((n, l) => n + l.words.length, 0);
  const lessonsByLevel = LEVELS.map((lv) => {
    const lvLessons = LESSONS.filter((l) => l.level === lv.id);
    const done = lvLessons.filter((l) => (progress[l.id] || 0) >= 95).length;
    return { ...lv, count: lvLessons.length, done };
  });
  const tiles = [
    { k: "lessons", t: "وانە و ڕێزمان", d: "لە A1 تا B2 — بابەت بە بابەت، لەگەڵ تێبینی ڕێزمانی.", Icon: BookOpen, c: C.red, cEnd: C.plum },
    { k: "cards", t: "کارتی وشەکان", d: "بەپێی ئاست، بە دووبارەکردنەوە فێربە.", Icon: LayoutGrid, c: C.gold, cEnd: "#f97316" },
    { k: "talk", t: "گفتوگۆی ڕێبەر AI", d: "لەگەڵ ڕێبەر AI بە ئەڵمانی قسە بکە.", Icon: MessageCircle, c: C.green, cEnd: "#059669" },
  ];
  const stats = [
    { Icon: Library, val: LESSONS.length, label: "وانە", color: C.red },
    { Icon: MessageCircle, val: wordCount, label: "وشە", color: C.plum },
    { Icon: Target, val: "4", label: "ئاست", color: C.gold },
    { Icon: Trophy, val: "A1–B2", label: "CEFR", color: C.green },
  ];
  return (
    <div className="rise">
      {/* ── HERO ── */}
      <div style={{ background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 45%, #a855f7 100%)", borderRadius: 28, padding: "36px 32px", color: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 24px 70px rgba(6,182,212,0.38)" }}>
        {/* decorative blobs */}
        <div style={{ position:"absolute", top:-60, left:-60, width:220, height:220, borderRadius:"50%", background:"rgba(255,255,255,.07)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:-40, right:60, width:160, height:160, borderRadius:"50%", background:"rgba(168,85,247,.25)", pointerEvents:"none" }} />

        <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", position:"relative" }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:"rgba(255,255,255,.18)", backdropFilter:"blur(10px)", borderRadius:99, padding:"5px 14px", fontSize:12, letterSpacing:".07em", marginBottom:16 }}>
              ✦ بەخێربێیت بۆ فێربوونی ئەڵمانی
            </div>
            <div style={{ borderInlineStart: "3px solid rgba(255,255,255,.7)", paddingInlineStart: 16 }}>
              <div dir="ltr" style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontStyle:"italic", fontSize:20, lineHeight:1.4, textAlign:"left" }}>
                „Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt."
                <Speak text="Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt." size={16} />
              </div>
              <div style={{ fontSize:15, marginTop:8, lineHeight:1.75, opacity:.92 }}>
                «سنوورەکانی زمانم، سنوورەکانی جیهانمن.»
              </div>
              <div dir="ltr" style={{ fontSize:12, opacity:.75, marginTop:6, textAlign:"left" }}>— Ludwig Wittgenstein</div>
            </div>
          </div>
          <div style={{ flexShrink:0, position:"relative" }}>
            <RobotVideo width={80} className="robot-idle" style={{ filter:"drop-shadow(0 16px 32px rgba(0,0,0,.38))" }} />
            <div style={{ position:"absolute", bottom:-4, right:-6, background:"#10b981", color:"#fff", fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:99, boxShadow:"0 4px 12px rgba(16,185,129,.5)", letterSpacing:".04em", whiteSpace:"nowrap" }}>AI Online ✦</div>
          </div>
        </div>

        <div style={{ marginTop:24, background:"rgba(255,255,255,.14)", border:"1px solid rgba(255,255,255,.3)", borderRadius:18, padding:"14px 18px", backdropFilter:"blur(14px)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>
            <KeyRound size={22} style={{ flexShrink:0, opacity:.9 }} />
            <div>
              <div dir="ltr" style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontSize:16, fontWeight:600, textAlign:"left" }}>
                In Deutschland ist die Sprache der Schlüssel — zum Studium und zum Beruf.
                <Speak text="In Deutschland ist die Sprache der Schlüssel, zum Studium und zum Beruf." size={14} />
              </div>
              <div style={{ fontSize:14.5, marginTop:5, lineHeight:1.75, opacity:.9 }}>لە ئەڵمانیا، زمان کلیلەکەیە — هەم بۆ خوێندن و هەم بۆ کار.</div>
            </div>
          </div>
        </div>

        <div style={{ display:"flex", gap:10, marginTop:22, flexWrap:"wrap", alignItems:"center" }}>
          <button onClick={() => setTab("lessons")} className="glow-btn" style={{ border:"none", padding:"13px 28px", borderRadius:16, fontWeight:700, fontSize:15 }}>
            ← دەست پێبکە
          </button>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {["A1","A2","B1","B2"].map(lv => (
              <span key={lv} style={{ background:"rgba(255,255,255,.2)", borderRadius:99, padding:"4px 12px", fontSize:13, fontWeight:700 }}>{lv}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS ROW ── */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12, marginTop:18 }}>
        {stats.map((s) => (
          <div key={s.label} className="stat-chip" style={{ background:C.panel, border:`1px solid ${C.line}`, borderRadius:20, padding:"18px 14px", textAlign:"center", boxShadow:"0 4px 18px rgba(0,0,0,.06)" }}>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:8, color:s.color }}><s.Icon size={26} /></div>
            <div style={{ fontWeight:800, fontSize:22, color:s.color, lineHeight:1 }}>{s.val}</div>
            <div style={{ fontSize:12, color:C.muted, marginTop:4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── LEVEL PROGRESS BARS ── */}
      <div style={{ background:C.panel, border:`1px solid ${C.line}`, borderRadius:24, padding:"24px 26px", marginTop:14, backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)", boxShadow:"0 8px 28px rgba(0,0,0,.06)" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
          <div style={{ fontWeight:800, fontSize:17 }}>پێشکەوتن بەپێی ئاست</div>
          <div style={{ fontSize:12, color:C.muted }}>کلیک بکە بۆ فێربوون</div>
        </div>
        {lessonsByLevel.map((lv, i) => {
          const pct = lv.count > 0 ? Math.round((lv.done / lv.count) * 100) : 0;
          return (
            <div key={lv.id} onClick={() => setTab("lessons")} style={{ marginBottom: i < lessonsByLevel.length-1 ? 18 : 0, cursor:"pointer" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <span style={{ width:32, height:32, borderRadius:10, background:lv.color, color:"#fff", display:"grid", placeItems:"center", fontSize:13, fontWeight:800, boxShadow:`0 4px 12px ${lv.color}55` }}>{lv.id}</span>
                  <span style={{ fontWeight:600, fontSize:14, color:C.ink }}>{lv.label}</span>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <span style={{ fontSize:12, color:C.muted }}>{lv.count} وانە</span>
                  <span style={{ fontSize:13, fontWeight:700, color:lv.color }}>{pct}%</span>
                </div>
              </div>
              <div className="bar-track">
                <div className="bar-fill" style={{ "--w": `${pct}%`, background:`linear-gradient(90deg, ${lv.color}, ${lv.color}bb)` }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* ── TILES ── */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))", gap:14, marginTop:14 }}>
        {tiles.map((x) => (
          <div key={x.k} className="wcard" onClick={() => setTab(x.k)} style={{ background:C.panel, border:`1px solid ${C.line}`, borderRadius:24, padding:24, cursor:"pointer", boxShadow:"0 8px 24px rgba(0,0,0,.06)", overflow:"hidden", position:"relative" }}>
            {/* top gradient stripe */}
            <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:`linear-gradient(90deg, ${x.c}, ${x.cEnd})` }} />
            <div style={{ width:54, height:54, borderRadius:18, background:`linear-gradient(135deg, ${x.c}, ${x.cEnd})`, display:"grid", placeItems:"center", boxShadow:`0 8px 20px ${x.c}55`, marginTop:8 }}><x.Icon size={26} color="#fff" /></div>
            <div style={{ fontWeight:800, fontSize:18, marginTop:16 }}>{x.t}</div>
            <div style={{ color:C.muted, fontSize:13.5, marginTop:6, lineHeight:1.8 }}>{x.d}</div>
            <div style={{ marginTop:14, display:"flex", alignItems:"center", gap:4, color:x.c, fontSize:13, fontWeight:700 }}>
              دەستپێبکە <span style={{ fontSize:16 }}>←</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── وانە / Lessons ─────────────────────────────────────────────────
// ── خشتەی بازنەیی / Progress donut ───────────────────────────────
function Donut({ pct, size = 132 }) {
  const stroke = 14, r = (size - stroke) / 2, circ = 2 * Math.PI * r;
  const v = Math.max(0, Math.min(100, pct || 0));
  const filled = (circ * v) / 100;
  const gradId = `dg${size}`;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(148,163,184,.15)" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={`url(#${gradId})`} strokeWidth={stroke}
        strokeLinecap="round" strokeDasharray={`${filled} ${circ - filled}`}
        transform={`rotate(-90 ${size/2} ${size/2})`} style={{ transition:"stroke-dasharray .7s cubic-bezier(.22,1,.36,1)", filter:"drop-shadow(0 0 6px rgba(6,182,212,.45))" }} />
      <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle"
        style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontSize:size*0.24, fontWeight:800, fill:"#06b6d4" }}>{Math.round(v)}%</text>
    </svg>
  );
}

// ── تێست / AI-generated test (١٠ پرسیار هەر گەڕێک) ─────────────────
function AITest({ subject, level, pct = 0, onBatch, hint }) {
  const N = 10;
  const [phase, setPhase] = useState("intro"); // intro | loading | active | result | error
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [lastDelta, setLastDelta] = useState(null);

  async function generate() {
    setPhase("loading"); setAnswers({});
    const prompt =
      `بابەت: ${subject}. ئاست: ${level}. ` +
      `${N} پرسیاری هەڵبژاردنی فرە (multiple choice) دروست بکە بۆ تاقیکردنەوەی ئەم بابەتە بە ئەڵمانی. ` +
      `پرسیارەکان تەنها سەبارەت بەم بابەتە بن و بەپێی ئاستی ${level}. هەر پرسیارێک سێ هەڵبژاردەی هەبێت. ` +
      (hint ? hint + " " : "") +
      `تەنها JSON بگەڕێنەرەوە بەبێ هیچ دەقێکی تر، بەم فۆرماتە: ` +
      `{"questions":[{"q":"پرسیار بە ئەڵمانی","options":["A","B","C"],"correct":0,"why":"ڕوونکردنەوەی وەڵامی ڕاست بە سۆرانی"}]}`;
    try {
      const data = await callClaude({ model: "claude-sonnet-4-20250514", max_tokens: 2800, messages: [{ role: "user", content: prompt }] });
      let txt = (data.content || []).filter((c) => c.type === "text").map((c) => c.text).join("\n").trim().replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(txt);
      const clean = (parsed.questions || [])
        .filter((q) => q && Array.isArray(q.options) && q.options.length >= 2)
        .map((q) => ({ q: String(q.q || ""), options: q.options.map(String), correct: Number(q.correct) || 0, why: q.why ? String(q.why) : "" }))
        .slice(0, N);
      if (!clean.length) throw new Error("no q");
      setQuestions(clean);
      setPhase("active");
    } catch (e) { setPhase(e.message?.includes("credit") ? "nocredit" : e.message === "NO_KEY" ? "nokey" : "error"); }
  }

  const correctCount = questions.reduce((n, q, i) => n + (answers[i] === q.correct ? 1 : 0), 0);

  function check() {
    const c = correctCount, w = questions.length - c;
    setLastDelta(c - w);
    onBatch && onBatch(c, w);
    setPhase("result");
  }

  // ── INTRO (+ chart + last result message) ──
  if (phase === "intro") {
    return (
      <div style={{ marginTop: 26, background: "linear-gradient(135deg, #06b6d4, #10b981)", borderRadius: 22, padding: 24, color: "#fff", textAlign: "center", boxShadow: "0 16px 48px rgba(6,182,212,.3)", position: "relative", overflow: "hidden" }}>
        <div style={{ fontWeight: 700, fontSize: 19, marginBottom: 4 }}>🧠 تاقیکردنەوەی ڕێبەر AI</div>
        <div style={{ display: "grid", placeItems: "center", margin: "8px 0" }}>
          <div style={{ background: "#fff", borderRadius: "50%", padding: 6 }}><Donut pct={pct} /></div>
        </div>
        {lastDelta !== null && (
          <div style={{ background: "rgba(255,255,255,.15)", borderRadius: 10, padding: "8px 12px", fontSize: 14, margin: "0 auto 10px", maxWidth: 320 }}>
            دوایین تاقیکردنەوە: {lastDelta >= 0 ? <b style={{ color: "#bdf0c8" }}>+{lastDelta}٪ بەدەستهات</b> : <b style={{ color: "#ffd4cb" }}>{lastDelta}٪ لەدەستچوو</b>}
          </div>
        )}
        <div style={{ fontSize: 13.5, opacity: .9, marginBottom: 14, lineHeight: 1.8, maxWidth: 340, margin: "0 auto 14px" }}>
          هەر گەڕێک <b>١٠ پرسیار</b>. هەر وەڵامی ڕاست <b>+١٪</b>، هەر هەڵە <b>−١٪</b>. بگە بە <b>٩٥٪</b> بۆ کردنەوەی بەشی تاقیکردنەوە.
        </div>
        <button onClick={generate} style={{ background: "#eef6ef", color: "#2f5238", border: "none", padding: "12px 26px", borderRadius: 11, fontWeight: 700, fontSize: 15 }}>
          {pct > 0 ? "بەردەوامبە — ١٠ پرسیار" : "دەست بە تاقیکردنەوە بکە"}
        </button>
      </div>
    );
  }
  if (phase === "loading") return <div style={{ marginTop: 26, textAlign: "center", color: C.muted, fontSize: 15, padding: 24 }}>⏳ ڕێبەر AI پرسیارەکان دروست دەکات…</div>;
  if (phase === "nokey") return (
    <div style={{ marginTop:26, textAlign:"center", padding:20, background:"#fef3c7", borderRadius:14 }}>
      <div style={{ fontSize:22, marginBottom:8 }}>🔑</div>
      <div style={{ color:"#92400e", fontWeight:700, fontSize:15, marginBottom:6 }}>API کلیلت نییە</div>
      <div style={{ color:"#78350f", fontSize:13 }}>لە سەرەوەی پەڕەکە کلیک بکە لەسەر 🔑 و کلیلەکەت زیاد بکە.</div>
    </div>
  );
  if (phase === "nocredit") return (
    <div style={{ marginTop:26, textAlign:"center", padding:20, background:"#fef3c7", borderRadius:14 }}>
      <div style={{ fontSize:22, marginBottom:8 }}>💳</div>
      <div style={{ color:"#92400e", fontWeight:700, fontSize:15, marginBottom:6 }}>Anthropic کرێدیتت تەواو بووە</div>
      <div style={{ color:"#78350f", fontSize:13, lineHeight:1.7, marginBottom:12 }}>
        بچۆ بۆ <strong>console.anthropic.com/settings/billing</strong> و کرێدیت زیاد بکە، پاشان دووبارە هەوڵبدەرەوە.
      </div>
      <button onClick={generate} style={{ background:"#f59e0b", color:"#fff", border:"none", padding:"9px 18px", borderRadius:9, fontWeight:700 }}>دووبارە هەوڵبدە</button>
    </div>
  );
  if (phase === "error") return (
    <div style={{ marginTop:26, textAlign:"center", padding:20, background:"#fbeae6", borderRadius:14 }}>
      <div style={{ color:C.redDk, fontSize:15, marginBottom:10 }}>ببورە، دروستکردنی پرسیار سەرکەوتوو نەبوو.</div>
      <button onClick={generate} style={{ background:C.red, color:"#fff", border:"none", padding:"9px 18px", borderRadius:9, fontWeight:700 }}>دووبارە هەوڵبدە</button>
    </div>
  );

  const reviewed = phase === "result";
  return (
    <div style={{ marginTop: 26 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ fontWeight: 700, fontSize: 18 }}>🧠 تاقیکردنەوەی ڕێبەر AI</div>
        <span style={{ background: reviewed ? C.green : C.muted, color: "#fff", padding: "4px 13px", borderRadius: 14, fontWeight: 700, fontSize: 14 }} dir="ltr">{correctCount} / {questions.length}</span>
      </div>

      {reviewed && (
        <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, padding: 18, marginBottom: 16, display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap", justifyContent: "center" }}>
          <Donut pct={pct} />
          <div style={{ textAlign: "center", minWidth: 150 }}>
            <div style={{ fontSize: 14, color: C.muted, marginBottom: 4 }}>ئەم تاقیکردنەوەیە</div>
            <div style={{ fontSize: 26, fontWeight: 800, color: lastDelta >= 0 ? C.green : C.redDk }} dir="ltr">{lastDelta >= 0 ? "+" : ""}{lastDelta}%</div>
            <div style={{ fontSize: 13.5, color: C.muted, marginTop: 6 }}>ڕێژەی گشتی: <b style={{ color: C.green }}>{Math.round(pct)}٪</b></div>
          </div>
        </div>
      )}

      <div style={{ display: "grid", gap: 14 }}>
        {questions.map((q, i) => (
          <div key={i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: 16 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 4, marginBottom: 10 }}>
              <div style={{ fontWeight: 600, fontSize: 15.5, lineHeight: 1.7, flex: 1 }} dir="auto">{i + 1}. {q.q}</div>
              <Speak text={q.q} />
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              {q.options.map((opt, oi) => {
                const chosen = answers[i] === oi, isCorrect = q.correct === oi;
                let bg = "#fff", bd = C.line, col = C.ink;
                if (reviewed) {
                  if (isCorrect) { bg = "#e7f1ea"; bd = C.green; col = C.green; }
                  else if (chosen) { bg = "#fbeae6"; bd = C.red; col = C.redDk; }
                } else if (chosen) { bg = "#e3f0ef"; bd = C.red; }
                return (
                  <button key={oi} disabled={reviewed} onClick={() => setAnswers((a) => ({ ...a, [i]: oi }))}
                    style={{ textAlign: "right", background: bg, border: `1.5px solid ${bd}`, color: col, padding: "10px 14px", borderRadius: 10, fontSize: 14.5, fontWeight: chosen || (reviewed && isCorrect) ? 700 : 400 }}>
                    <span dir="ltr" style={{ fontFamily: "'Satoshi',system-ui,sans-serif" }}>{opt}</span>
                    {reviewed && isCorrect && " ✓"}{reviewed && chosen && !isCorrect && " ✗"}
                  </button>
                );
              })}
            </div>
            {reviewed && q.why && (
              <div style={{ marginTop: 10, background: "#fff8ec", border: `1px solid ${C.gold}`, borderRadius: 10, padding: "9px 13px", fontSize: 13.5, lineHeight: 1.7 }}>
                <span style={{ color: C.gold, fontWeight: 700 }}>◆ </span>{q.why}
              </div>
            )}
          </div>
        ))}
      </div>

      {!reviewed ? (
        <>
          {Object.keys(answers).length < questions.length && (
            <div style={{ marginTop: 14, textAlign: "center", fontSize: 13, color: C.muted }}>
              {questions.length - Object.keys(answers).length} پرسیار وەڵام نەدراوەتەوە — وەڵامی نەدراو وەک هەڵە دەژمێردرێت.
            </div>
          )}
          <button onClick={check} style={{ width: "100%", marginTop: 12, background: C.green, color: "#fff", border: "none", padding: "13px", borderRadius: 11, fontWeight: 700, fontSize: 15 }}>
            پشکنینی وەڵامەکان
          </button>
        </>
      ) : (
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          <button onClick={generate} style={{ flex: 1, background: C.green, color: "#fff", border: "none", padding: "13px", borderRadius: 11, fontWeight: 700, fontSize: 15 }}>
            ١٠ پرسیاری تر
          </button>
          <button onClick={() => setPhase("intro")} style={{ flex: 1, background: "transparent", color: C.red, border: `1.5px solid ${C.red}`, padding: "13px", borderRadius: 11, fontWeight: 700, fontSize: 15 }}>
            دواتر دەیکەم
          </button>
        </div>
      )}
    </div>
  );
}

// ── تاقیکردنەوەی فەرمی / Official-style exam runner ───────────────
// ── دەستەواژە و گرێدەرە گرنگەکانی B1 / B1 Redemittel ──────────────
const B1_REDEMITTEL = [
  { de: "Meinung äußern", ku: "بۆچوون دەربڕین", items: [
    { p: "Meiner Meinung nach …", ex: "Meiner Meinung nach ist Lernen sehr wichtig.", exku: "بەلای منەوە فێربوون زۆر گرنگە." },
    { p: "Ich denke, dass …", ex: "Ich denke, dass du recht hast.", exku: "پێم وایە تۆ ڕاست دەکەیت." },
    { p: "Ich glaube, dass …", ex: "Ich glaube, dass es morgen regnet.", exku: "باوەڕم وایە سبەینێ باران دەبارێت." },
    { p: "Ich bin der Meinung, dass …", ex: "Ich bin der Meinung, dass Sport gesund ist.", exku: "ئەو بۆچوونەم هەیە کە وەرزش بۆ تەندروستی باشە." },
    { p: "Ich vertrete die Ansicht, dass …", ex: "Ich vertrete die Ansicht, dass Bildung frei sein sollte.", exku: "ئەو ڕایە دەگرم کە خوێندن دەبێت بەخۆڕایی بێت." },
    { p: "Soweit ich weiß …", ex: "Soweit ich weiß, ist das Geschäft heute geschlossen.", exku: "بەو ئەندازەیەی دەزانم، دوکانەکە ئەمڕۆ داخراوە." },
    { p: "Meines Erachtens …", ex: "Meines Erachtens ist das eine gute Idee.", exku: "بەبڕوای من ئەمە بیرۆکەیەکی باشە." },
  ]},
  { de: "Zustimmung ausdrücken", ku: "ڕەزامەندی دەربڕین", items: [
    { p: "Da stimme ich zu.", ex: "Du hast viel gearbeitet – da stimme ich zu.", exku: "زۆرت کار کردووە – لەگەڵتدا ڕازیم." },
    { p: "Ich bin damit einverstanden.", ex: "Ich bin damit einverstanden, früher anzufangen.", exku: "ڕازیم بە زووتر دەستپێکردن." },
    { p: "Das sehe ich genauso.", ex: "Das Wetter ist toll – das sehe ich genauso.", exku: "کەش‌وهەوا نایابە – منیش هەروا دەبینم." },
    { p: "Genau!", ex: "Genau! Das wollte ich auch sagen.", exku: "تەواو! منیش دەمویست ئەوە بڵێم." },
    { p: "Da haben Sie recht.", ex: "Da haben Sie recht, das ist zu teuer.", exku: "ڕاست دەفەرموون، ئەمە زۆر گرانە." },
  ]},
  { de: "Widersprechen", ku: "پێچەوانەبوون", items: [
    { p: "Da bin ich anderer Meinung.", ex: "Da bin ich anderer Meinung als du.", exku: "بۆچوونێکی جیاوازم لە تۆ هەیە." },
    { p: "Das sehe ich anders.", ex: "Das sehe ich anders, das ist nicht so einfach.", exku: "بە جۆرێکی تر دەیبینم، ئەوەندە ئاسان نییە." },
    { p: "Ich kann dem nicht zustimmen.", ex: "Ich kann dem nicht zustimmen.", exku: "ناتوانم لەگەڵ ئەوەدا ڕازی بم." },
    { p: "Ich bezweifle, dass …", ex: "Ich bezweifle, dass das funktioniert.", exku: "گومان دەکەم کە ئەمە کار بکات." },
    { p: "Ich bin nicht ganz überzeugt.", ex: "Ich bin nicht ganz überzeugt von dieser Idee.", exku: "بەتەواوی قایل نەبووم بەم بیرۆکەیە." },
  ]},
  { de: "Vorteile nennen", ku: "سوودەکان", items: [
    { p: "Ein Vorteil ist, dass …", ex: "Ein Vorteil ist, dass man Zeit spart.", exku: "سوودێک ئەوەیە کە کات دەپارێزرێت." },
    { p: "Positiv ist auch, dass …", ex: "Positiv ist auch, dass es billig ist.", exku: "خاڵێکی ئەرێنیش ئەوەیە کە هەرزانە." },
    { p: "Dafür spricht, dass …", ex: "Dafür spricht, dass es umweltfreundlich ist.", exku: "ئەوەی لەبەرژەوەندیدایە ئەوەیە کە دۆستی ژینگەیە." },
    { p: "Nicht zu vergessen ist, dass …", ex: "Nicht zu vergessen ist, dass es gesund ist.", exku: "نابێت لەبیر بکرێت کە تەندروستە." },
  ]},
  { de: "Nachteile nennen", ku: "زیانەکان", items: [
    { p: "Ein Nachteil ist, dass …", ex: "Ein Nachteil ist, dass es teuer ist.", exku: "زیانێک ئەوەیە کە گرانە." },
    { p: "Problematisch ist, dass …", ex: "Problematisch ist, dass es zu wenig Zeit gibt.", exku: "کێشە ئەوەیە کە کاتی کەم هەیە." },
    { p: "Dagegen spricht, dass …", ex: "Dagegen spricht, dass es laut ist.", exku: "ئەوەی دژیەتی ئەوەیە کە دەنگەدەنگە." },
    { p: "Kritisch sehe ich …", ex: "Kritisch sehe ich die hohen Kosten.", exku: "بە ڕەخنەوە لە تێچووە بەرزەکان دەڕوانم." },
  ]},
  { de: "Vergleichen", ku: "بەراوردکردن", items: [
    { p: "Im Vergleich zu …", ex: "Im Vergleich zu früher ist es besser.", exku: "بەراورد بە جاران، باشترە." },
    { p: "Im Gegensatz zu …", ex: "Im Gegensatz zu dir mag ich Tee.", exku: "بەپێچەوانەی تۆ، حەزم لە چایە." },
    { p: "Einerseits …, andererseits …", ex: "Einerseits ist es teuer, andererseits ist es gut.", exku: "لەلایەکەوە گرانە، لەلایەکی ترەوە باشە." },
    { p: "Während …", ex: "Während er schläft, arbeite ich.", exku: "لە کاتێکدا ئەو دەخەوێت، من کار دەکەم." },
    { p: "Anders als …", ex: "Anders als gestern ist es heute kalt.", exku: "بەپێچەوانەی دوێنێ، ئەمڕۆ ساردە." },
  ]},
  { de: "Schlussfolgerung", ku: "دەرئەنجام", items: [
    { p: "Zusammenfassend lässt sich sagen, dass …", ex: "Zusammenfassend lässt sich sagen, dass Sport wichtig ist.", exku: "بەکورتی دەتوانرێت بگوترێت کە وەرزش گرنگە." },
    { p: "Abschließend möchte ich sagen, dass …", ex: "Abschließend möchte ich sagen, dass ich zufrieden bin.", exku: "لە کۆتاییدا دەمەوێت بڵێم کە ڕازیم." },
    { p: "Insgesamt kann man feststellen, dass …", ex: "Insgesamt kann man feststellen, dass es gut war.", exku: "بەگشتی دەتوانرێت دیاری بکرێت کە باش بوو." },
    { p: "Daher bin ich der Meinung, dass …", ex: "Daher bin ich der Meinung, dass wir warten sollten.", exku: "بۆیە ئەو بۆچوونەم هەیە کە دەبێت چاوەڕێ بکەین." },
  ]},
  { de: "Formelle Redewendungen (E-Mail / Brief)", ku: "دەستەواژەی فەرمی", items: [
    { p: "Hiermit möchte ich …", ex: "Hiermit möchte ich mich für die Stelle bewerben.", exku: "بەمەوە دەمەوێت بۆ پۆستەکە داواکاری بکەم." },
    { p: "Ich wende mich an Sie, weil …", ex: "Ich wende mich an Sie, weil ich eine Frage habe.", exku: "پەیوەندیتان پێوە دەکەم، چونکە پرسیارێکم هەیە." },
    { p: "Ich würde mich freuen, wenn …", ex: "Ich würde mich freuen, wenn Sie mir antworten.", exku: "دڵخۆش دەبم ئەگەر وەڵامم بدەنەوە." },
    { p: "Für weitere Fragen stehe ich Ihnen gerne zur Verfügung.", ex: "Für weitere Fragen stehe ich Ihnen gerne zur Verfügung.", exku: "بۆ پرسیاری زیاتر بە خۆشحاڵییەوە لە خزمەتتانم." },
    { p: "Vielen Dank im Voraus.", ex: "Vielen Dank im Voraus für Ihre Hilfe.", exku: "پێشوەخت زۆر سوپاس بۆ یارمەتیتان." },
  ]},
  { de: "Konnektoren", ku: "گرێدەرەکان", items: [
    { p: "weil", ex: "Ich bleibe, weil ich krank bin.", exku: "دەمێنمەوە، چونکە نەخۆشم." },
    { p: "dass", ex: "Ich weiß, dass du kommst.", exku: "دەزانم کە دێیت." },
    { p: "obwohl", ex: "Obwohl es regnet, gehe ich.", exku: "هەرچەندە باران دەبارێت، دەڕۆم." },
    { p: "wenn", ex: "Wenn ich Zeit habe, komme ich.", exku: "ئەگەر کاتم هەبێت، دێم." },
    { p: "als", ex: "Als ich klein war, spielte ich viel.", exku: "کاتێک بچووک بووم، زۆر یاریم دەکرد." },
    { p: "nachdem", ex: "Nachdem ich gegessen hatte, ging ich.", exku: "دوای ئەوەی خواردبووم، ڕۆیشتم." },
    { p: "bevor", ex: "Bevor ich gehe, esse ich.", exku: "پێش ئەوەی بڕۆم، دەخۆم." },
    { p: "während", ex: "Während sie kocht, lese ich.", exku: "لە کاتێکدا ئەو خواردن لێدەنێ، دەخوێنمەوە." },
    { p: "deshalb", ex: "Es regnet, deshalb bleibe ich zu Hause.", exku: "باران دەبارێت، بۆیە لە ماڵەوە دەمێنمەوە." },
    { p: "deswegen", ex: "Ich bin müde, deswegen schlafe ich.", exku: "ماندووم، لەبەر ئەوە دەخەوم." },
    { p: "daher", ex: "Es ist spät, daher gehe ich.", exku: "درەنگە، بۆیە دەڕۆم." },
    { p: "trotzdem", ex: "Es regnet, trotzdem gehe ich spazieren.", exku: "باران دەبارێت، لەگەڵ ئەوەشدا بۆ پیادەڕۆیی دەچم." },
    { p: "außerdem", ex: "Es ist teuer, außerdem ist es alt.", exku: "گرانە، سەرباری ئەوەش کۆنە." },
    { p: "darüber hinaus", ex: "Es ist gut, darüber hinaus ist es billig.", exku: "باشە، جگە لەوەش هەرزانە." },
    { p: "hingegen", ex: "Ich mag Tee, er hingegen mag Kaffee.", exku: "حەزم لە چایە، ئەو بەپێچەوانەوە حەزی لە قاوەیە." },
  ]},
];

function RedemittelPanel() {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontSize: 13.5, fontWeight: 700, color: C.muted, marginBottom: 10 }}>📚 دەستەواژە و گرێدەرە گرنگەکانی B1 (بە نموونە)</div>
      <div style={{ display: "grid", gap: 12 }}>
        {B1_REDEMITTEL.map((cat, ci) => (
          <div key={ci} style={{ background: C.panel, border: `1px solid ${C.line}`, borderInlineStart: `5px solid ${C.gold}`, borderRadius: 14, padding: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }} dir="ltr">{cat.de}</div>
            <div style={{ color: C.muted, fontSize: 13, marginBottom: 12 }}>{cat.ku}</div>
            <div style={{ display: "grid", gap: 12 }}>
              {cat.items.map((it, i) => (
                <div key={i} style={{ borderTop: i ? `1px dashed ${C.line}` : "none", paddingTop: i ? 10 : 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}><De size={15} color={C.red}>{it.p}</De></div>
                  <div style={{ display: "flex", alignItems: "center", gap: 3, marginTop: 4 }}>
                    <span style={{ color: C.gold, fontSize: 12, fontWeight: 700 }}>◆</span>
                    <De size={14.5} color={C.ink}>{it.ex}</De><Speak text={it.ex} size={13} />
                  </div>
                  <div style={{ color: C.muted, fontSize: 14, marginTop: 3, lineHeight: 1.7 }}>{it.exku}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── پێکهاتەی پێشکەشکردنی B2 / B2 Präsentation ────────────────────
const B2_PRAESENTATION = [
  { de: "Einleitung", ku: "پێشەکی", items: [
    { de: "Guten Tag zusammen.", ku: "سڵاو لە هەمووتان." },
    { de: 'Heute möchte ich über das Thema „…" sprechen.', ku: "ئەمڕۆ دەمەوێت دەربارەی بابەتی «…» قسە بکەم." },
    { de: "Dieses Thema ist heutzutage besonders aktuell und wird in der Gesellschaft häufig diskutiert.", ku: "ئەم بابەتە لە ئەمڕۆدا زۆر گرنگ و نوێیە و لە کۆمەڵگادا زۆرجار باسی لێوەدەکرێت." },
    { de: "Zunächst werde ich einige allgemeine Informationen zum Thema geben.", ku: "سەرەتا هەندێک زانیاری گشتی دەربارەی بابەتەکە دەدەم." },
    { de: "Anschließend werde ich auf die Vor- und Nachteile eingehen.", ku: "پاشان باسی سوود و زیانەکان دەکەم." },
    { de: "Danach möchte ich meine persönliche Meinung dazu äußern.", ku: "دواتر دەمەوێت بۆچوونی کەسی خۆم دەربارەی دەربڕم." },
    { de: "Abschließend werde ich die wichtigsten Punkte zusammenfassen.", ku: "لە کۆتاییدا گرنگترین خاڵەکان کورت دەکەمەوە." },
  ]},
  { de: "Hauptteil – Einführung ins Thema", ku: "بەشی سەرەکی — ناساندنی بابەت", items: [
    { de: "Zunächst möchte ich erklären, was man unter … versteht.", ku: "سەرەتا دەمەوێت ڕوون بکەمەوە کە مەبەست لە … چییە." },
    { de: "In den letzten Jahren hat dieses Thema zunehmend an Bedeutung gewonnen.", ku: "لە ساڵانی دواییدا ئەم بابەتە بەردەوام گرنگیی زیاتری وەرگرتووە." },
    { de: "Viele Menschen beschäftigen sich heutzutage mit diesem Thema, da es unseren Alltag stark beeinflusst.", ku: "ئەمڕۆ زۆر کەس خەریکی ئەم بابەتەن، چونکە کاریگەری زۆری لەسەر ژیانی ڕۆژانەمان هەیە." },
  ]},
  { de: "Vorteile", ku: "سوودەکان", items: [
    { de: "Ein wesentlicher Vorteil besteht darin, dass …", ku: "سوودێکی سەرەکی ئەوەیە کە …" },
    { de: "Darüber hinaus bietet … die Möglichkeit, …", ku: "جگە لەوەش، … دەرفەتی … دەڕەخسێنێت." },
    { de: "Außerdem darf man nicht vergessen, dass …", ku: "سەرباری ئەوەش، نابێت لەبیر بکرێت کە …" },
    { de: "Ein weiterer positiver Aspekt ist, dass …", ku: "خاڵێکی ئەرێنی تر ئەوەیە کە …" },
  ]},
  { de: "Nachteile", ku: "زیانەکان", items: [
    { de: "Auf der anderen Seite gibt es auch einige Nachteile.", ku: "لەلایەکی ترەوە، هەندێک زیانیش هەن." },
    { de: "Ein Nachteil besteht darin, dass …", ku: "زیانێک ئەوەیە کە …" },
    { de: "Darüber hinaus kann es dazu führen, dass …", ku: "جگە لەوەش، دەکرێت ببێتە هۆی ئەوەی کە …" },
    { de: "Kritisch zu betrachten ist außerdem, dass …", ku: "هەروەها بە ڕەخنەوە دەبێت سەیر بکرێت کە …" },
  ]},
  { de: "Eigene Meinung", ku: "بۆچوونی خۆم", items: [
    { de: "Meiner Meinung nach überwiegen die Vorteile/Nachteile.", ku: "بەلای منەوە سوودەکان/زیانەکان زاڵن." },
    { de: "Ich persönlich bin der Ansicht, dass …", ku: "من بەکەسی ئەو ڕایەم هەیە کە …" },
    { de: "Aus meiner Sicht sollte man …", ku: "لە دیدی منەوە دەبێت …" },
    { de: "Dennoch hängt vieles von der individuellen Situation ab.", ku: "لەگەڵ ئەوەشدا، زۆر شت بە دۆخی تاکەکەسی بەستراوەتەوە." },
  ]},
  { de: "Schluss", ku: "کۆتایی", items: [
    { de: "Zusammenfassend lässt sich sagen, dass …", ku: "بەکورتی دەتوانرێت بگوترێت کە …" },
    { de: "Sowohl die Vorteile als auch die Nachteile sollten berücksichtigt werden.", ku: "هەم سوودەکان و هەم زیانەکان دەبێت لەبەرچاو بگیرێن." },
    { de: "Abschließend möchte ich betonen, dass …", ku: "لە کۆتاییدا دەمەوێت جەخت بکەمەوە لەسەر ئەوەی کە …" },
    { de: "Ich bedanke mich für Ihre Aufmerksamkeit und beantworte gerne Ihre Fragen.", ku: "سوپاس بۆ گوێگرتنتان و بە خۆشحاڵییەوە وەڵامی پرسیارەکانتان دەدەمەوە." },
  ]},
];

function PraesentationPanel() {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontSize: 13.5, fontWeight: 700, color: C.muted, marginBottom: 10, display:"flex", alignItems:"center", gap:6 }}><Mic size={14} /> پێکهاتەی پێشکەشکردن (Präsentation) — B2</div>
      <div style={{ display: "grid", gap: 12 }}>
        {B2_PRAESENTATION.map((cat, ci) => (
          <div key={ci} style={{ background: C.panel, border: `1px solid ${C.line}`, borderInlineStart: `5px solid ${C.plum}`, borderRadius: 14, padding: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }} dir="ltr">{cat.de}</div>
            <div style={{ color: C.muted, fontSize: 13, marginBottom: 12 }}>{cat.ku}</div>
            <div style={{ display: "grid", gap: 11 }}>
              {cat.items.map((it, i) => (
                <div key={i} style={{ borderTop: i ? `1px dashed ${C.line}` : "none", paddingTop: i ? 9 : 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <span style={{ color: C.plum, fontSize: 12, fontWeight: 700 }}>▸</span>
                    <De size={15} color={C.ink}>{it.de}</De><Speak text={it.de} size={13} />
                  </div>
                  <div style={{ color: C.muted, fontSize: 14, marginTop: 3, lineHeight: 1.7 }}>{it.ku}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── دەستەواژەکانی A1 (قسەکردن، نووسین، ڕۆژانە) ───────────────────
const A1_REDEMITTEL = [
  { de: "Begrüßung", ku: "سڵاوکردن", items: [
    { p: "Guten Morgen.", ex: "Guten Morgen, mein Name ist Karwan.", exku: "بەیانیت باش، ناوم کاروانە." },
    { p: "Guten Tag.", ex: "Guten Tag, ich heiße Karwan.", exku: "ڕۆژباش، ناوم کاروانە." },
    { p: "Hallo.", ex: "Hallo, ich komme aus Kurdistan.", exku: "سڵاو، من خەڵکی کوردستانم." },
  ]},
  { de: "Name sagen", ku: "ناوگوتن", items: [
    { p: "Ich heiße …", ex: "Ich heiße Karwan.", exku: "ناوم کاروانە." },
    { p: "Mein Name ist …", ex: "Mein Name ist Karwan Mihemed.", exku: "ناوم کاروان محەمەدە." },
  ]},
  { de: "Herkunft", ku: "ڕەچەڵەک", items: [
    { p: "Ich komme aus …", ex: "Ich komme aus Kurdistan.", exku: "من خەڵکی کوردستانم." },
    { p: "Ich bin aus …", ex: "Ich bin aus Hewlêr.", exku: "من خەڵکی هەولێرم." },
  ]},
  { de: "Wohnort", ku: "شوێنی نیشتەجێبوون", items: [
    { p: "Ich wohne in …", ex: "Ich wohne in Hewlêr.", exku: "لە هەولێر دەژیم." },
    { p: "Ich lebe in …", ex: "Ich lebe in Deutschland.", exku: "لە ئەڵمانیا دەژیم." },
  ]},
  { de: "Beruf", ku: "پیشە", items: [
    { p: "Ich bin …", ex: "Ich bin Student.", exku: "من خوێندکارم." },
    { p: "Ich arbeite als …", ex: "Ich arbeite als Dolmetscher.", exku: "وەک وەرگێڕ کار دەکەم." },
  ]},
  { de: "Familie", ku: "خێزان", items: [
    { p: "Ich bin verheiratet.", ex: "Ich bin verheiratet und habe zwei Kinder.", exku: "هاوسەرگیریم کردووە و دوو منداڵم هەیە." },
    { p: "Ich habe …", ex: "Ich habe zwei Kinder.", exku: "دوو منداڵم هەیە." },
  ]},
  { de: "Hobbys", ku: "خولیا", items: [
    { p: "In meiner Freizeit …", ex: "In meiner Freizeit lese ich Bücher.", exku: "لە کاتی بەتاڵمدا کتێب دەخوێنمەوە." },
    { p: "Mein Hobby ist …", ex: "Mein Hobby ist Fußball.", exku: "خولیام تۆپی پێیە." },
  ]},
  { de: "Fragen stellen", ku: "پرسیارکردن", items: [
    { p: "Wie heißen Sie?", exku: "ناوت چییە؟" },
    { p: "Woher kommen Sie?", exku: "خەڵکی کوێیت؟" },
    { p: "Wo wohnen Sie?", exku: "لە کوێ دەژیت؟" },
    { p: "Was sind Sie von Beruf?", exku: "پیشەت چییە؟" },
    { p: "Wie alt sind Sie?", exku: "تەمەنت چەندە؟" },
    { p: "Welche Sprachen sprechen Sie?", exku: "چ زمانێک قسە دەکەیت؟" },
  ]},
  { de: "Bitten und Wünsche", ku: "داواکاری و ئارەزوو", items: [
    { p: "Können Sie bitte …?", ex: "Können Sie bitte langsamer sprechen?", exku: "دەکرێت تکایە هێواشتر قسە بکەیت؟" },
    { p: "Bitte helfen Sie mir.", exku: "تکایە یارمەتیم بدە." },
    { p: "Ich möchte …", ex: "Ich möchte einen Kaffee.", exku: "قاوەیەکم دەوێت." },
    { p: "Ich hätte gern …", ex: "Ich hätte gern ein Wasser.", exku: "ئاوێکم دەوێت." },
  ]},
  { de: "Einkaufen", ku: "بازاڕکردن", items: [
    { p: "Ich möchte … kaufen", ex: "Ich möchte Brot kaufen.", exku: "دەمەوێت نان بکڕم." },
    { p: "Haben Sie …?", ex: "Haben Sie Milch?", exku: "شیرت هەیە؟" },
    { p: "Wie viel kostet das?", ex: "Wie viel kostet das Brot?", exku: "نرخی نانەکە چەندە؟" },
    { p: "Ich nehme das.", exku: "ئەمە دەبەم." },
    { p: "Danke schön.", exku: "زۆر سوپاس." },
  ]},
  { de: "Im Restaurant", ku: "لە چێشتخانە", items: [
    { p: "Ich möchte …", ex: "Ich möchte eine Pizza.", exku: "پیتزایەکم دەوێت." },
    { p: "Ich hätte gern …", ex: "Ich hätte gern einen Tee.", exku: "چایەکم دەوێت." },
    { p: "Was empfehlen Sie?", exku: "چی پێشنیار دەکەیت؟" },
    { p: "Die Rechnung, bitte.", exku: "تکایە پسوولەکە." },
  ]},
  { de: "E-Mail schreiben", ku: "نووسینی ئیمەیل", items: [
    { p: "Hallo …", ex: "Hallo Azad,", exku: "سڵاو ئازاد،" },
    { p: "Liebe(r) …", ex: "Liebe Hêlîn,", exku: "هێلینی خۆشەویست،" },
    { p: "Ich schreibe dir, weil …", ex: "Ich schreibe dir, weil ich Geburtstag habe.", exku: "بۆت دەنووسم، چونکە ڕۆژی لەدایکبوونمە." },
    { p: "Ich möchte …", ex: "Ich möchte dich einladen.", exku: "دەمەوێت بانگهێشتت بکەم." },
    { p: "Möchtest du kommen?", ex: "Möchtest du am Samstag kommen?", exku: "دەتەوێت ڕۆژی شەممە بێیت؟" },
    { p: "Hast du Zeit?", ex: "Hast du morgen Zeit?", exku: "سبەینێ کاتت هەیە؟" },
    { p: "Viele Grüße", exku: "زۆر سڵاو (کۆتایی نامە)" },
    { p: "Bis bald", exku: "هەتا دواتر / بەزووی دەتبینم" },
  ]},
  { de: "Hören & Lesen", ku: "گوێگرتن و خوێندنەوە", items: [
    { p: "geöffnet", ex: "Das Geschäft ist geöffnet.", exku: "دوکانەکە کراوەیە." },
    { p: "geschlossen", ex: "Das Geschäft ist geschlossen.", exku: "دوکانەکە داخراوە." },
    { p: "Ankunft", ex: "Die Ankunft ist um 18 Uhr.", exku: "گەیشتن کاتژمێر ١٨ـە." },
    { p: "Abfahrt", ex: "Die Abfahrt ist um 19 Uhr.", exku: "بەڕێکەوتن کاتژمێر ١٩ـە." },
    { p: "heute", ex: "Heute habe ich frei.", exku: "ئەمڕۆ پشوومە." },
    { p: "morgen", ex: "Morgen arbeite ich.", exku: "سبەینێ کار دەکەم." },
    { p: "gestern", ex: "Gestern war ich zu Hause.", exku: "دوێنێ لە ماڵەوە بووم." },
  ]},
  { de: "Alltag – häufige Phrasen", ku: "ڕستەی ڕۆژانە", items: [
    { p: "Ja, gerne.", exku: "بەڵێ، بە خۆشحاڵییەوە." },
    { p: "Natürlich.", exku: "بێگومان." },
    { p: "Das ist gut.", exku: "ئەمە باشە." },
    { p: "Nein, danke.", exku: "نەخێر، سوپاس." },
    { p: "Leider nicht.", exku: "بەداخەوە نا." },
    { p: "Ich kann nicht.", ex: "Ich kann heute nicht.", exku: "ئەمڕۆ ناتوانم." },
    { p: "Ich verstehe.", exku: "تێدەگەم." },
    { p: "Ich verstehe nicht.", exku: "تێناگەم." },
    { p: "Können Sie das wiederholen?", ex: "Können Sie das bitte wiederholen?", exku: "دەکرێت تکایە دووبارەی بکەیتەوە؟" },
    { p: "Können Sie langsamer sprechen?", exku: "دەکرێت هێواشتر قسە بکەیت؟" },
  ]},
  { de: "Prüfung – Rettungsphrasen", ku: "دەستەواژەی فریاکەوتن لە تاقیکردنەوەدا", items: [
    { p: "Entschuldigung, ich habe die Frage nicht verstanden.", exku: "ببورە، پرسیارەکەم تێنەگەیشت." },
    { p: "Können Sie die Frage bitte wiederholen?", exku: "دەکرێت تکایە پرسیارەکە دووبارە بکەیتەوە؟" },
    { p: "Können Sie bitte langsamer sprechen?", exku: "دەکرێت تکایە هێواشتر قسە بکەیت؟" },
    { p: "Wie sagt man das auf Deutsch?", exku: "ئەمە بە ئەڵمانی چۆن دەگوترێت؟" },
    { p: "Ich weiß es leider nicht.", exku: "بەداخەوە نازانم." },
    { p: "Einen Moment, bitte.", exku: "تکایە چرکەیەک." },
    { p: "Können Sie mir helfen?", exku: "دەکرێت یارمەتیم بدەیت؟" },
  ]},
];

// ── دەستەواژەکانی A2 ─────────────────────────────────────────────
const A2_REDEMITTEL = [
  { de: "Sich vorstellen", ku: "خۆ ناساندن", items: [
    { p: "Ich heiße …", ex: "Ich heiße Rojin.", exku: "ناوم ڕۆژینە." },
    { p: "Mein Name ist …", ex: "Mein Name ist Baran.", exku: "ناوم بارانە." },
    { p: "Ich komme aus …", ex: "Ich komme aus Kurdistan.", exku: "من خەڵکی کوردستانم." },
    { p: "Ich wohne in …", ex: "Ich wohne in einer kleinen Stadt.", exku: "لە شارۆچکەیەکی بچووک دەژیم." },
    { p: "Ich bin … Jahre alt.", ex: "Ich bin 25 Jahre alt.", exku: "تەمەنم ٢٥ ساڵە." },
    { p: "Ich arbeite als …", ex: "Ich arbeite als Assistent.", exku: "وەک یاریدەدەر کار دەکەم." },
    { p: "Ich mache eine Ausbildung als …", ex: "Ich mache eine Ausbildung als Pflegehelfer.", exku: "خولی پەروەردەی یاریدەدەری چاودێری دەکەم." },
    { p: "Ich studiere …", ex: "Ich studiere Medizin.", exku: "پزیشکی دەخوێنم." },
  ]},
  { de: "Meinung", ku: "بۆچوون", items: [
    { p: "Ich finde das gut.", ex: "Ich finde das gut, weil es praktisch ist.", exku: "پێم باشە، چونکە کرداریە." },
    { p: "Ich finde das nicht gut.", ex: "Ich finde das nicht gut, weil es teuer ist.", exku: "پێم باش نییە، چونکە گرانە." },
    { p: "Ich denke, dass …", ex: "Ich denke, dass Deutsch wichtig ist.", exku: "پێم وایە ئەڵمانی گرنگە." },
    { p: "Ich glaube, dass …", ex: "Ich glaube, dass das schwierig ist.", exku: "باوەڕم وایە ئەمە سەختە." },
    { p: "Für mich ist das wichtig.", ex: "Für mich ist das wichtig, weil ich arbeite.", exku: "بۆ من ئەمە گرنگە، چونکە کار دەکەم." },
  ]},
  { de: "Zustimmung", ku: "ڕەزامەندی", items: [
    { p: "Ja, das stimmt.", ex: "Ja, das stimmt genau.", exku: "بەڵێ، تەواو ڕاستە." },
    { p: "Ich bin einverstanden.", ex: "Ich bin einverstanden mit dem Plan.", exku: "لەگەڵ پلانەکە ڕازیم." },
    { p: "Das ist richtig.", exku: "ئەمە ڕاستە." },
    { p: "Genau.", ex: "Genau, das sehe ich auch so.", exku: "تەواو، منیش هەروا دەبینم." },
  ]},
  { de: "Widerspruch", ku: "پێچەوانەبوون", items: [
    { p: "Ich glaube nicht.", ex: "Ich glaube nicht, dass das stimmt.", exku: "باوەڕم نییە کە ئەمە ڕاست بێت." },
    { p: "Das ist falsch.", ex: "Das ist falsch für mich.", exku: "بۆ من ئەمە هەڵەیە." },
    { p: "Ich bin nicht sicher.", exku: "دڵنیا نیم." },
  ]},
  { de: "Fragen stellen", ku: "پرسیارکردن", items: [
    { p: "Was bedeutet das?", ex: "Was bedeutet dieses Wort?", exku: "ئەم وشەیە واتای چییە؟" },
    { p: "Können Sie das bitte wiederholen?", exku: "دەکرێت تکایە دووبارەی بکەیتەوە؟" },
    { p: "Wie bitte?", exku: "چی فەرموو؟ / ببورە؟" },
    { p: "Wo ist …?", ex: "Wo ist der Bahnhof?", exku: "وێستگەی شەمەندەفەر لە کوێیە؟" },
    { p: "Wie komme ich zu …?", ex: "Wie komme ich zum Krankenhaus?", exku: "چۆن بگەم بە نەخۆشخانە؟" },
    { p: "Wann beginnt …?", ex: "Wann beginnt der Kurs?", exku: "خولەکە کەی دەستپێدەکات؟" },
    { p: "Wie viel kostet das?", ex: "Wie viel kostet das Ticket?", exku: "نرخی بلیتەکە چەندە؟" },
  ]},
  { de: "Einkaufen", ku: "بازاڕکردن", items: [
    { p: "Ich möchte …", ex: "Ich möchte Brot kaufen.", exku: "دەمەوێت نان بکڕم." },
    { p: "Haben Sie …?", ex: "Haben Sie Milch?", exku: "شیرت هەیە؟" },
    { p: "Ich brauche …", ex: "Ich brauche einen Pullover.", exku: "پێویستم بە پسوڵێکە." },
    { p: "Das ist zu teuer.", ex: "Das ist zu teuer für mich.", exku: "ئەمە بۆ من زۆر گرانە." },
    { p: "Ich nehme das.", exku: "ئەمە دەبەم." },
    { p: "Kann ich mit Karte zahlen?", exku: "دەتوانم بە کارت پارە بدەم؟" },
    { p: "Ich zahle bar.", exku: "بە کاش پارە دەدەم." },
  ]},
  { de: "Restaurant", ku: "چێشتخانە", items: [
    { p: "Ich hätte gern …", ex: "Ich hätte gern einen Kaffee.", exku: "قاوەیەکم دەوێت." },
    { p: "Ich nehme …", ex: "Ich nehme eine Suppe.", exku: "شۆربایەک دەبەم." },
    { p: "Was empfehlen Sie?", exku: "چی پێشنیار دەکەیت؟" },
    { p: "Die Rechnung, bitte.", exku: "تکایە پسوولەکە." },
    { p: "Das Essen ist sehr gut.", exku: "خواردنەکە زۆر خۆشە." },
  ]},
  { de: "Arzt / Gesundheit", ku: "پزیشک و تەندروستی", items: [
    { p: "Ich habe Schmerzen.", ex: "Ich habe Kopfschmerzen.", exku: "سەرئێشەم هەیە." },
    { p: "Ich bin krank.", exku: "نەخۆشم." },
    { p: "Ich brauche einen Termin.", exku: "پێویستم بە ژووانێکە." },
    { p: "Ich fühle mich nicht gut.", exku: "هەست بە باشی ناکەم." },
    { p: "Wo ist die Apotheke?", exku: "دەرمانخانە لە کوێیە؟" },
  ]},
  { de: "Reisen / Verkehr", ku: "گەشت و گواستنەوە", items: [
    { p: "Wo fährt der Bus ab?", exku: "پاسەکە لە کوێوە بەڕێدەکەوێت؟" },
    { p: "Wann fährt der Zug?", exku: "شەمەندەفەرەکە کەی بەڕێدەکەوێت؟" },
    { p: "Ich habe eine Fahrkarte.", exku: "بلیتم هەیە." },
    { p: "Der Zug hat Verspätung.", exku: "شەمەندەفەرەکە دواکەوتووە." },
  ]},
  { de: "Alltag", ku: "ڕۆژانە", items: [
    { p: "Ich habe Zeit.", ex: "Ich habe heute Zeit.", exku: "ئەمڕۆ کاتم هەیە." },
    { p: "Ich habe keine Zeit.", exku: "کاتم نییە." },
    { p: "Ich bin zu Hause.", exku: "لە ماڵەوەم." },
    { p: "Ich gehe nach Hause.", exku: "دەچمە ماڵەوە." },
    { p: "Ich arbeite heute.", exku: "ئەمڕۆ کار دەکەم." },
  ]},
  { de: "E-Mail / Schreiben", ku: "ئیمەیل و نووسین", items: [
    { p: "Hallo …", ex: "Hallo Dilan,", exku: "سڵاو دیلان،" },
    { p: "Liebe(r) …", ex: "Liebe Rojin,", exku: "ڕۆژینی خۆشەویست،" },
    { p: "Ich schreibe dir, weil …", ex: "Ich schreibe dir, weil ich krank bin.", exku: "بۆت دەنووسم، چونکە نەخۆشم." },
    { p: "Ich möchte dich informieren, dass …", ex: "Ich möchte dich informieren, dass ich nicht komme.", exku: "دەمەوێت ئاگادارت بکەمەوە کە نایەم." },
    { p: "Ich habe eine Frage.", exku: "پرسیارێکم هەیە." },
    { p: "Hast du Zeit?", ex: "Hast du morgen Zeit?", exku: "سبەینێ کاتت هەیە؟" },
    { p: "Ich lade dich ein.", exku: "بانگهێشتت دەکەم." },
    { p: "Viele Grüße", exku: "زۆر سڵاو (کۆتایی نامە)" },
    { p: "Bis bald", exku: "هەتا دواتر" },
  ]},
  { de: "Problem / Notfall", ku: "کێشە و فریاکەوتن", items: [
    { p: "Ich brauche Hilfe.", exku: "پێویستم بە یارمەتییە." },
    { p: "Es gibt ein Problem.", exku: "کێشەیەک هەیە." },
    { p: "Ich verstehe nicht.", exku: "تێناگەم." },
    { p: "Können Sie mir helfen?", exku: "دەکرێت یارمەتیم بدەیت؟" },
  ]},
  { de: "Prüfung – Retter-Phrasen", ku: "دەستەواژەی فریاکەوتن لە تاقیکردنەوەدا", items: [
    { p: "Entschuldigung, ich habe nicht verstanden.", exku: "ببورە، تێنەگەیشتم." },
    { p: "Können Sie langsamer sprechen?", exku: "دەکرێت هێواشتر قسە بکەیت؟" },
    { p: "Wie sagt man das auf Deutsch?", exku: "ئەمە بە ئەڵمانی چۆن دەگوترێت؟" },
    { p: "Ich weiß es nicht.", exku: "نازانم." },
    { p: "Einen Moment, bitte.", exku: "تکایە چرکەیەک." },
  ]},
];

function PhrasePanel({ title, data, accent }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontSize: 13.5, fontWeight: 700, color: C.muted, marginBottom: 10 }}>{title}</div>
      <div style={{ display: "grid", gap: 12 }}>
        {data.map((cat, ci) => (
          <div key={ci} style={{ background: C.panel, border: `1px solid ${C.line}`, borderInlineStart: `5px solid ${accent}`, borderRadius: 14, padding: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }} dir="ltr">{cat.de}</div>
            <div style={{ color: C.muted, fontSize: 13, marginBottom: 12 }}>{cat.ku}</div>
            <div style={{ display: "grid", gap: 11 }}>
              {cat.items.map((it, i) => {
                const hasEx = it.ex && it.ex !== it.p;
                return (
                  <div key={i} style={{ borderTop: i ? `1px dashed ${C.line}` : "none", paddingTop: i ? 9 : 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                      <De size={15} color={accent}>{it.p}</De>{!hasEx && <Speak text={it.p} size={13} />}
                    </div>
                    {hasEx && (
                      <div style={{ display: "flex", alignItems: "center", gap: 3, marginTop: 4 }}>
                        <span style={{ color: accent, fontSize: 12, fontWeight: 700 }}>◆</span>
                        <De size={14.5} color={C.ink}>{it.ex}</De><Speak text={it.ex} size={13} />
                      </div>
                    )}
                    {it.exku && <div style={{ color: C.muted, fontSize: 14, marginTop: 3, lineHeight: 1.7 }}>{it.exku}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function sectionsForLevel(level) {
  if (level === "A1") return [
    { type: "sprachbausteine", de: "Sprachbausteine", ku: "پێکهاتەی زمان" },
    { type: "hoeren", de: "Hören", ku: "گوێگرتن" },
    { type: "antworten", de: "Hören und antworten", ku: "گوێگرتن و وەڵامدانەوە" },
    { type: "lesen", de: "Lesen", ku: "خوێندنەوە" },
    { type: "schreiben", de: "Schreiben", ku: "نووسین" },
    { type: "muendlich", de: "Mündliche Prüfung", ku: "تاقیکردنەوەی زارەکی" },
  ];
  return [
    { type: "sprachbausteine", de: "Sprachbausteine", ku: "پێکهاتەی زمان" },
    { type: "hoeren", de: "Hören", ku: "گوێگرتن" },
    { type: "lesen", de: "Lesen", ku: "خوێندنەوە" },
    { type: "schreiben", de: "Schreiben", ku: "نووسین" },
    { type: "muendlich", de: "Mündliche Prüfung", ku: "تاقیکردنەوەی زارەکی" },
  ];
}

async function callAI(prompt, maxTokens = 1600) {
  const data = await callClaude({ model: "claude-sonnet-4-20250514", max_tokens: maxTokens, messages: [{ role: "user", content: prompt }] });
  let txt = (data.content || []).filter((c) => c.type === "text").map((c) => c.text).join("\n").trim().replace(/```json|```/g, "").trim();
  return JSON.parse(txt);
}

function ExamRunner({ provName, provDe, level, onClose, onScore }) {
  const [idx, setIdx] = useState(0);
  const [data, setData] = useState({});      // type → content | "loading" | "error"
  const [ans, setAns] = useState({});        // type → answers
  const [phase, setPhase] = useState("run"); // run | overview | result
  const [result, setResult] = useState(null);
  const SECS = sectionsForLevel(level);

  const sec = SECS[idx];
  const base = `بۆ تاقیکردنەوەی فەرمی ${provName} (${provDe}) ئاستی ${level} بە زمانی ئەڵمانی. `;

  async function gen(type) {
    setData((d) => ({ ...d, [type]: "loading" }));
    let prompt, tokens = 2000;
    const A1 = level === "A1";
    if (type === "sprachbausteine") {
      prompt = A1
        ? base + `نامە یان دەقێکی کورت دروست بکە کە تێیدا ٥ بۆشایی هەبێت بە شێوەی ___1___ تا ___5___. بۆ هەر بۆشاییەک ٣ هەڵبژاردە و ئەو ژمارەیەی وەڵامی ڕاست. تەنها JSON: {"text":"دەق لەگەڵ ___1___","gaps":[{"n":1,"options":["a","b","c"],"correct":0}]}`
        : base + `بەشی Sprachbausteine بە دوو پارچە: Teil 1 (gap) نامەیەک لەگەڵ ٦ بۆشایی ___1___ تا ___6___، هەرکام ٣ هەڵبژاردە. Teil 2 (wordbank) دیالۆگێک لەگەڵ ٥ بۆشایی ___11___ تا ___15___ و لیستی ٦ وشە (a–f) کە هەرکام تەنها جارێک بەکاردێت (correct = ئیندێکسی وشە لە options). تەنها JSON: {"parts":[{"kind":"gap","instruction":"Teil 1","text":"دەق لەگەڵ ___1___","gaps":[{"n":1,"options":["a","b","c"],"correct":0}]},{"kind":"wordbank","instruction":"Teil 2","text":"دیالۆگ لەگەڵ ___11___","options":["w1","w2","w3","w4","w5","w6"],"gaps":[{"n":11,"correct":2}]}]}`;
      tokens = 2600;
    } else if (type === "hoeren") {
      prompt = A1
        ? base + `٣ تێکستی گوێگرتنی کورت بۆ ڕاست/هەڵە و ٣ تێکست بۆ هەڵبژاردنی a/b. تەنها JSON: {"rf":[{"situation":"دۆخ بە سۆرانی","transcript":"دەقی ئەڵمانی","statement":"بانگەشە بە ئەڵمانی","correct":true}],"mc":[{"transcript":"دەقی ئەڵمانی","q":"پرسیار","options":["a","b"],"correct":0}]}`
        : base + `بەشی Hören بە سێ پارچە، هەموو ڕاست/هەڵە و دەنگدار. Teil 1: ٣ بەند، Teil 2: ٢ بەند، Teil 3: ٣ بەند. هەر بەند transcript (ئەڵمانی) و statement (ئەڵمانی) و correct(true/false). تەنها JSON: {"parts":[{"kind":"rf","instruction":"Teil 1","audio":true,"items":[{"transcript":"..","statement":"..","correct":true}]},{"kind":"rf","instruction":"Teil 2","audio":true,"items":[{"transcript":"..","statement":"..","correct":false}]},{"kind":"rf","instruction":"Teil 3","audio":true,"items":[{"transcript":"..","statement":"..","correct":true}]}]}`;
      tokens = 2600;
    } else if (type === "antworten") {
      prompt = base + `٣ ئاخاوتن یان پرسیاری کورت (prompts) و ٤ وەڵامی ئامادە (responses). بۆ هەر ئاخاوتنێک ئیندێکسی ئەو وەڵامەی دەگونجێت. تەنها JSON: {"prompts":["..","..",".."],"responses":["..","..","..",".."],"answers":[2,0,3]}`;
    } else if (type === "lesen") {
      prompt = A1
        ? base + `بەشی خوێندنەوە بە سێ پارچە. Teil A: ٤ سەردێڕ و ٣ دەقی زۆر کورت، بۆ هەر دەقێک ئیندێکسی سەردێڕی گونجاو. Teil B: دەقێکی کورت + ٣ بانگەشە ڕاست/هەڵە. Teil C: ٣ دۆخ، هەر یەک دوو ڕیکلام (a,b)، ئیندێکسی ڕاست. تەنها JSON: {"teilA":{"headings":["a","b","c","d"],"texts":["..","..",".."],"answers":[0,1,2]},"teilB":{"text":"..","items":[{"statement":"..","correct":true}]},"teilC":[{"situation":"..","a":"..","b":"..","correct":0}]}`
        : base + `بەشی Lesen بە سێ پارچە. Teil 1 (match): ٤ دەقی کورت + ٦ سەردێڕ (headings)، بۆ هەر دەقێک ئیندێکسی سەردێڕ. Teil 2 (rf): دەقێک + ٢ بانگەشە ڕاست/هەڵە. Teil 3 (match-passage): دەقێکی دابەشکراو بۆ ٦ پارچە (label a–f) + ٤ ئەرک، بۆ هەر ئەرکێک ئیندێکسی ئەو پارچەیەی زانیاری تێدایە. تەنها JSON: {"parts":[{"kind":"match","instruction":"Teil 1","texts":["t1","t2","t3","t4"],"options":["h1","h2","h3","h4","h5","h6"],"answers":[0,1,2,3]},{"kind":"rf","instruction":"Teil 2","text":"..","items":[{"statement":"..","correct":true},{"statement":"..","correct":false}]},{"kind":"match","instruction":"Teil 3","passage":[{"label":"a","text":".."},{"label":"b","text":".."}],"prompts":["..","..","..",".."],"answers":[0,1,2,3]}]}`;
      tokens = 2800;
    } else if (type === "schreiben") {
      prompt = base + (A1
        ? `بەشی نووسین بە دوو پارچە. Teil A: فۆرم (Formular) — ڕێنمایی + وەسفی کەسێک + ٥ خانە (٣٦–٤٠). Teil B: ئیمەیلێکی کورت لەگەڵ ٣ خاڵ. تەنها JSON: {"teilA":{"intro":"..","person":"..","fields":[{"n":36,"label":"Familienname"}]},"teilB":{"task":".."}}`
        : `ئەرکی نووسینی ئیمەیل بۆ هاوڕێیەک لەگەڵ ٦ خاڵ، فێرخواز ٣ هەڵدەبژێرێت. تەنها JSON: {"task":"داواکاری ئەرکەکە بە ئەڵمانی + ٦ خاڵ (•) + ڕوونکردنەوەی کورتی سۆرانی"}`);
    } else if (type === "muendlich") {
      prompt = base + (A1
        ? `ئەرکێکی قسەکردن بۆ A1. تەنها JSON: {"task":"ئەرکەکە بە ئەڵمانی + ڕوونکردنەوەی کورتی سۆرانی"}`
        : `ئەرکی تاقیکردنەوەی زارەکی بە سێ پارچە: Teil 1 ناسیاوبوون، Teil 2 ئاڵوگۆڕی زانیاری، Teil 3 ڕێککەوتن لەسەر چالاکی. تەنها JSON: {"task":"هەر سێ پارچەکە بە ئەڵمانی + ڕوونکردنەوەی کورتی سۆرانی"}`);
    }
    try { const j = await callAI(prompt, tokens); setData((d) => ({ ...d, [type]: j })); }
    catch (e) { setData((d) => ({ ...d, [type]: "error" })); }
  }

  useEffect(() => {
    if (phase === "run" && data[sec.type] === undefined) gen(sec.type);
  }, [idx, phase]);

  function submit() {
    let correct = 0, total = 0;
    const gradeParts = (parts, a) => {
      (parts || []).forEach((p, pi) => {
        if (p.kind === "gap" || p.kind === "wordbank") (p.gaps || []).forEach((g, i) => { total++; if (a[pi + "_" + i] === g.correct) correct++; });
        else if (p.kind === "rf") (p.items || []).forEach((it, i) => { total++; if (a[pi + "_" + i] === it.correct) correct++; });
        else if (p.kind === "mc") (p.items || []).forEach((it, i) => { total++; if (a[pi + "_" + i] === it.correct) correct++; });
        else if (p.kind === "match") (p.answers || []).forEach((cor, i) => { total++; if (a[pi + "_" + i] === cor) correct++; });
      });
    };
    for (const s of SECS) {
      const c = data[s.type]; const a = ans[s.type] || {};
      if (!c || c === "loading" || c === "error") continue;
      if (c.parts) { gradeParts(c.parts, a); continue; }
      if (s.type === "sprachbausteine") c.gaps.forEach((g, i) => { total++; if (a[i] === g.correct) correct++; });
      else if (s.type === "hoeren") { (c.rf || []).forEach((it, i) => { total++; if (a["rf" + i] === it.correct) correct++; }); (c.mc || []).forEach((it, i) => { total++; if (a["mc" + i] === it.correct) correct++; }); }
      else if (s.type === "antworten") (c.answers || []).forEach((cor, i) => { total++; if (a[i] === cor) correct++; });
      else if (s.type === "lesen") {
        if (c.teilA) (c.teilA.answers || []).forEach((cor, i) => { total++; if (a["A" + i] === cor) correct++; });
        if (c.teilB) (c.teilB.items || []).forEach((it, i) => { total++; if (a["B" + i] === it.correct) correct++; });
        if (Array.isArray(c.teilC)) c.teilC.forEach((it, i) => { total++; if (a["C" + i] === it.correct) correct++; });
      }
    }
    const pct = total ? Math.round((correct / total) * 100) : 0;
    setResult({ correct, total, pct });
    setPhase("result");
    onScore && onScore(pct);
  }

  // ── RESULT ──
  if (phase === "result" && result) {
    const passed = result.pct >= 60;
    return (
      <div className="rise" style={{ textAlign: "center" }}>
        <div style={{ background: passed ? C.green : C.red, color: "#fff", borderRadius: 20, padding: "28px 20px" }}>
          <div style={{ fontSize: 40 }}>{passed ? "🎉" : "💪"}</div>
          <div style={{ fontWeight: 700, fontSize: 22, marginTop: 8 }}>{provName} — {level}</div>
          <div style={{ fontSize: 48, fontWeight: 800, marginTop: 6 }} dir="ltr">{result.pct}%</div>
          <div style={{ fontSize: 15, opacity: .92, marginTop: 4 }} dir="ltr">{result.correct} / {result.total}</div>
          <div style={{ fontSize: 15, marginTop: 10 }}>{passed ? "پیرۆزە! دەرچوویت ✓" : "هێشتا پێویستت بە مەشقی زیاترە."}</div>
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
          <button onClick={() => { setPhase("run"); setIdx(0); setData({}); setAns({}); setResult(null); }} style={{ flex: 1, background: C.red, color: "#fff", border: "none", padding: 13, borderRadius: 11, fontWeight: 700 }}>دووبارە</button>
          <button onClick={onClose} style={{ flex: 1, background: "transparent", color: C.ink, border: `1.5px solid ${C.line}`, padding: 13, borderRadius: 11, fontWeight: 700 }}>داخستن</button>
        </div>
      </div>
    );
  }

  // ── OVERVIEW ──
  if (phase === "overview") {
    return (
      <div className="rise">
        <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>📋 پێداچوونەوە</h3>
        <p style={{ color: C.muted, fontSize: 14, marginBottom: 16 }}>پێش ناردن، دڵنیابە لە بەشەکان.</p>
        <div style={{ display: "grid", gap: 10 }}>
          {SECS.map((s, i) => {
            const c = data[s.type]; const a = ans[s.type] || {};
            let info = "نەکراوەتەوە";
            if (c && c !== "loading" && c !== "error") {
              if (s.type === "schreiben") info = "بە دەست (دەفتەر) ✍️";
              else if (s.type === "muendlich") info = "زارەکی 🗣️";
              else { const n = Object.keys(a).length; info = `${n} وەڵام`; }
            }
            return (
              <button key={s.type} onClick={() => { setPhase("run"); setIdx(i); }} style={{ textAlign: "right", background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: "13px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span><b dir="ltr">{i + 1}. {s.de}</b> <span style={{ color: C.muted, fontSize: 13 }}>· {s.ku}</span></span>
                <span style={{ color: C.muted, fontSize: 13 }}>{info}</span>
              </button>
            );
          })}
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
          <button onClick={submit} style={{ flex: 1, background: C.green, color: "#fff", border: "none", padding: 14, borderRadius: 11, fontWeight: 700, fontSize: 15 }}>📨 ناردن و وەرگرتنی نمرە</button>
          <button onClick={() => { setPhase("run"); setIdx(SECS.length - 1); }} style={{ background: "transparent", color: C.ink, border: `1.5px solid ${C.line}`, padding: "14px 18px", borderRadius: 11, fontWeight: 700 }}>گەڕانەوە</button>
        </div>
      </div>
    );
  }

  // ── RUN (one section) ──
  const content = data[sec.type];
  const a = ans[sec.type] || {};
  const setA = (v) => setAns((p) => ({ ...p, [sec.type]: v }));
  const Opt = ({ on, active, children }) => (
    <button onClick={on} style={{ textAlign: "right", background: active ? "#e3f0ef" : "#fff", border: `1.5px solid ${active ? C.red : C.line}`, color: C.ink, padding: "9px 13px", borderRadius: 9, fontSize: 14.5, fontWeight: active ? 700 : 400 }}>{children}</button>
  );

  return (
    <div className="rise">
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        <span dir="ltr" style={{ background: C.red, color: "#fff", borderRadius: 8, padding: "2px 9px", fontSize: 13, fontWeight: 700 }}>{idx + 1}/{SECS.length}</span>
        <h3 style={{ fontWeight: 700, fontSize: 19 }} dir="ltr">{sec.de}</h3>
      </div>
      <p style={{ color: C.muted, fontSize: 13.5, marginBottom: 14 }}>{sec.ku}</p>

      {content === "loading" && <div style={{ textAlign: "center", color: C.muted, padding: 24 }}>⏳ ڕێبەر AI ئەم بەشە دروست دەکات…</div>}
      {content === "error" && <div style={{ textAlign: "center", padding: 18, background: "#fbeae6", borderRadius: 12 }}><div style={{ color: C.redDk, marginBottom: 8 }}>هەڵە ڕوویدا.</div><button onClick={() => gen(sec.type)} style={{ background: C.red, color: "#fff", border: "none", padding: "8px 16px", borderRadius: 9, fontWeight: 700 }}>دووبارە</button></div>}

      {content && content !== "loading" && content !== "error" && (
        <div style={{ display: "grid", gap: 14 }}>
          {content.parts && content.parts.map((p, pi) => {
            const setPA = (i, v) => setA({ ...a, [pi + "_" + i]: v });
            return (
              <div key={pi} style={{ display: "grid", gap: 12 }}>
                {p.instruction && <div style={{ fontWeight: 700, color: C.muted, fontSize: 13 }} dir="auto">{p.instruction}</div>}

                {(p.kind === "gap") && (<>
                  <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 16, lineHeight: 2 }} dir="ltr"><De size={15}>{p.text}</De></div>
                  {p.gaps.map((g, i) => (
                    <div key={i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ fontWeight: 700, color: C.red, minWidth: 22 }} dir="ltr">{g.n}.</span>
                      {g.options.map((o, oi) => {
                        const on = a[pi + "_" + i] === oi;
                        return <button key={oi} onClick={() => setPA(i, oi)} style={{ background: on ? C.red : "#fff", color: on ? "#fff" : C.ink, border: `1.5px solid ${on ? C.red : C.line}`, borderRadius: 8, padding: "5px 11px", fontSize: 14, fontWeight: on ? 700 : 400 }}><span dir="ltr" style={{ fontFamily: "'Satoshi',system-ui,sans-serif" }}>{o}</span></button>;
                      })}
                    </div>
                  ))}
                </>)}

                {(p.kind === "wordbank") && (<>
                  <div style={{ background: C.bg, border: `1px solid ${C.line}`, borderRadius: 12, padding: 12 }}>
                    {p.options.map((o, oi) => <span key={oi} dir="ltr" style={{ display: "inline-block", margin: 3, background: "#fff", border: `1px solid ${C.line}`, borderRadius: 8, padding: "4px 9px", fontFamily: "'Satoshi',system-ui,sans-serif", fontSize: 13.5 }}>{String.fromCharCode(97 + oi)}) {o}</span>)}
                  </div>
                  <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 16, lineHeight: 2 }} dir="ltr"><De size={15}>{p.text}</De></div>
                  {p.gaps.map((g, i) => (
                    <div key={i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                      <span style={{ fontWeight: 700, color: C.red, minWidth: 22 }} dir="ltr">{g.n}.</span>
                      {p.options.map((o, oi) => {
                        const on = a[pi + "_" + i] === oi;
                        return <button key={oi} onClick={() => setPA(i, oi)} style={{ background: on ? C.red : "#fff", color: on ? "#fff" : C.ink, border: `1.5px solid ${on ? C.red : C.line}`, borderRadius: 7, padding: "5px 10px", fontSize: 13.5, fontWeight: 700 }}><span dir="ltr">{String.fromCharCode(97 + oi)}</span></button>;
                      })}
                    </div>
                  ))}
                </>)}

                {(p.kind === "rf") && (<>
                  {p.text && <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 16, lineHeight: 1.9 }} dir="ltr"><De size={14.5}>{p.text}</De></div>}
                  {p.items.map((it, i) => (
                    <div key={i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 14 }}>
                      {p.audio && it.transcript && <button onClick={() => speakDe(it.transcript)} style={{ background: C.gold, color: "#fff", border: "none", borderRadius: 9, padding: "6px 12px", fontWeight: 700, fontSize: 13, marginBottom: 8, display:"inline-flex", alignItems:"center", gap:5 }}><Volume2 size={13} /> گوێ بگرە {i + 1}</button>}
                      <div dir="ltr" style={{ marginBottom: 10 }}><De size={15}>{it.statement}</De></div>
                      <div style={{ display: "flex", gap: 8 }}>
                        <Opt on={() => setPA(i, true)} active={a[pi + "_" + i] === true}>PLUS (+)</Opt>
                        <Opt on={() => setPA(i, false)} active={a[pi + "_" + i] === false}>MINUS (–)</Opt>
                      </div>
                    </div>
                  ))}
                </>)}

                {(p.kind === "mc") && (<>
                  {p.text && <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 16, lineHeight: 1.9 }} dir="ltr"><De size={14.5}>{p.text}</De></div>}
                  {p.items.map((it, i) => (
                    <div key={i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 14 }}>
                      {p.audio && it.transcript && <button onClick={() => speakDe(it.transcript)} style={{ background: C.gold, color: "#fff", border: "none", borderRadius: 9, padding: "6px 12px", fontWeight: 700, fontSize: 13, marginBottom: 8, display:"inline-flex", alignItems:"center", gap:5 }}><Volume2 size={13} /> گوێ بگرە {i + 1}</button>}
                      <div dir="ltr" style={{ fontWeight: 600, marginBottom: 8 }}><De size={15}>{it.q}</De></div>
                      <div style={{ display: "grid", gap: 7 }}>{it.options.map((o, oi) => <Opt key={oi} on={() => setPA(i, oi)} active={a[pi + "_" + i] === oi}><span dir="ltr" style={{ fontFamily: "'Satoshi',system-ui,sans-serif" }}>{String.fromCharCode(97 + oi)}) {o}</span></Opt>)}</div>
                    </div>
                  ))}
                </>)}

                {(p.kind === "match") && (() => {
                  const usePassage = Array.isArray(p.passage) && p.passage.length;
                  const items = p.prompts || p.texts || [];
                  const opts = usePassage ? p.passage.map((x) => x.label) : (p.options || []);
                  return (<>
                    {usePassage ? (
                      <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 14 }}>
                        {p.passage.map((x, xi) => <div key={xi} dir="ltr" style={{ padding: "5px 0", borderBottom: xi < p.passage.length - 1 ? `1px solid ${C.line}` : "none" }}><b style={{ color: C.red }}>{x.label})</b> <De size={13.5}>{x.text}</De></div>)}
                      </div>
                    ) : (
                      <div style={{ background: C.bg, border: `1px solid ${C.line}`, borderRadius: 12, padding: 14 }}>
                        {opts.map((o, oi) => <div key={oi} dir="ltr" style={{ fontFamily: "'Satoshi',system-ui,sans-serif", fontSize: 14, padding: "3px 0" }}>{String.fromCharCode(97 + oi)}) {o}</div>)}
                      </div>
                    )}
                    {items.map((t, i) => (
                      <div key={i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 14 }}>
                        <div dir="ltr" style={{ marginBottom: 10, lineHeight: 1.8 }}><De size={14.5}>{t}</De></div>
                        <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>{opts.map((o, oi) => <Opt key={oi} on={() => setPA(i, oi)} active={a[pi + "_" + i] === oi}><span dir="ltr">{String.fromCharCode(97 + oi)}</span></Opt>)}</div>
                      </div>
                    ))}
                  </>);
                })()}
              </div>
            );
          })}

          {!content.parts && sec.type === "sprachbausteine" && (<>
            <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 16, lineHeight: 2 }} dir="ltr"><De size={15}>{content.text}</De></div>
            {content.gaps.map((g, i) => (
              <div key={i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontWeight: 700, color: C.red, minWidth: 22 }} dir="ltr">{g.n}.</span>
                {g.options.map((o, oi) => {
                  const on = a[i] === oi;
                  return <button key={oi} onClick={() => setA({ ...a, [i]: oi })} style={{ background: on ? C.red : "#fff", color: on ? "#fff" : C.ink, border: `1.5px solid ${on ? C.red : C.line}`, borderRadius: 8, padding: "5px 11px", fontSize: 14, fontWeight: on ? 700 : 400 }}><span dir="ltr" style={{ fontFamily: "'Satoshi',system-ui,sans-serif" }}>{o}</span></button>;
                })}
              </div>
            ))}
          </>)}

          {!content.parts && sec.type === "hoeren" && (<>
            <div style={{ fontWeight: 700, color: C.muted, fontSize: 13 }}>Teil A — RICHTIG (+) / FALSCH (–)</div>
            {(content.rf || []).map((it, i) => (
              <div key={"rf" + i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 14 }}>
                <div style={{ fontSize: 13, color: C.muted, marginBottom: 6 }}>{it.situation}</div>
                <button onClick={() => speakDe(it.transcript)} style={{ background: C.gold, color: "#fff", border: "none", borderRadius: 9, padding: "6px 12px", fontWeight: 700, fontSize: 13, marginBottom: 8, display:"inline-flex", alignItems:"center", gap:5 }}><Volume2 size={13} /> گوێ بگرە</button>
                <div dir="ltr" style={{ marginBottom: 10 }}><De size={15}>{it.statement}</De></div>
                <div style={{ display: "flex", gap: 8 }}>
                  <Opt on={() => setA({ ...a, ["rf" + i]: true })} active={a["rf" + i] === true}>RICHTIG (+)</Opt>
                  <Opt on={() => setA({ ...a, ["rf" + i]: false })} active={a["rf" + i] === false}>FALSCH (–)</Opt>
                </div>
              </div>
            ))}
            <div style={{ fontWeight: 700, color: C.muted, fontSize: 13, marginTop: 6 }}>Teil B — a / b</div>
            {(content.mc || []).map((it, i) => (
              <div key={"mc" + i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 14 }}>
                <button onClick={() => speakDe(it.transcript)} style={{ background: C.gold, color: "#fff", border: "none", borderRadius: 9, padding: "6px 12px", fontWeight: 700, fontSize: 13, marginBottom: 8, display:"inline-flex", alignItems:"center", gap:5 }}><Volume2 size={13} /> گوێ بگرە</button>
                <div dir="ltr" style={{ marginBottom: 10 }}><De size={15}>{it.q}</De></div>
                <div style={{ display: "grid", gap: 7 }}>{it.options.map((o, oi) => <Opt key={oi} on={() => setA({ ...a, ["mc" + i]: oi })} active={a["mc" + i] === oi}><span dir="ltr" style={{ fontFamily: "'Satoshi',system-ui,sans-serif" }}>{String.fromCharCode(97 + oi)}) {o}</span></Opt>)}</div>
              </div>
            ))}
          </>)}

          {!content.parts && sec.type === "antworten" && (<>
            <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 14 }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: C.muted, marginBottom: 8 }}>وەڵامە ئامادەکان:</div>
              {content.responses.map((r, ri) => <div key={ri} dir="ltr" style={{ fontFamily: "'Satoshi',system-ui,sans-serif", fontSize: 14, padding: "3px 0" }}>{String.fromCharCode(97 + ri)}) {r}</div>)}
            </div>
            {content.prompts.map((p, i) => (
              <div key={i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 14 }}>
                <button onClick={() => speakDe(p)} style={{ background: C.gold, color: "#fff", border: "none", borderRadius: 9, padding: "6px 12px", fontWeight: 700, fontSize: 13, marginBottom: 8, display:"inline-flex", alignItems:"center", gap:5 }}><Volume2 size={13} /> گوێ بگرە {i + 1}</button>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>{content.responses.map((r, ri) => <Opt key={ri} on={() => setA({ ...a, [i]: ri })} active={a[i] === ri}><span dir="ltr">{String.fromCharCode(97 + ri)}</span></Opt>)}</div>
              </div>
            ))}
          </>)}

          {!content.parts && sec.type === "lesen" && (<>
            {content.teilA && (<>
              <div style={{ fontWeight: 700, color: C.muted, fontSize: 13 }}>Teil A — سەردێڕ بۆ دەق دیاری بکە</div>
              <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 14 }}>
                {content.teilA.headings.map((h, hi) => <div key={hi} dir="ltr" style={{ fontFamily: "'Satoshi',system-ui,sans-serif", fontSize: 14, padding: "3px 0" }}>{String.fromCharCode(97 + hi)}) {h}</div>)}
              </div>
              {content.teilA.texts.map((t, i) => (
                <div key={"A" + i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 14 }}>
                  <div dir="ltr" style={{ marginBottom: 10, lineHeight: 1.8 }}><De size={14.5}>{t}</De></div>
                  <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>{content.teilA.headings.map((h, hi) => <Opt key={hi} on={() => setA({ ...a, ["A" + i]: hi })} active={a["A" + i] === hi}><span dir="ltr">{String.fromCharCode(97 + hi)}</span></Opt>)}</div>
                </div>
              ))}
            </>)}

            {content.teilB && (<>
              <div style={{ fontWeight: 700, color: C.muted, fontSize: 13, marginTop: 6 }}>Teil B — RICHTIG (+) / FALSCH (–)</div>
              <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 16, lineHeight: 1.9 }} dir="ltr"><De size={14.5}>{content.teilB.text}</De></div>
              {content.teilB.items.map((it, i) => (
                <div key={"B" + i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 14 }}>
                  <div dir="ltr" style={{ marginBottom: 10 }}><De size={15}>{it.statement}</De></div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <Opt on={() => setA({ ...a, ["B" + i]: true })} active={a["B" + i] === true}>RICHTIG (+)</Opt>
                    <Opt on={() => setA({ ...a, ["B" + i]: false })} active={a["B" + i] === false}>FALSCH (–)</Opt>
                  </div>
                </div>
              ))}
            </>)}

            {Array.isArray(content.teilC) && (<>
              <div style={{ fontWeight: 700, color: C.muted, fontSize: 13, marginTop: 6 }}>Teil C — کام ڕیکلام دەگونجێت؟ (a / b)</div>
              {content.teilC.map((it, i) => (
                <div key={"C" + i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 14 }}>
                  <div style={{ fontWeight: 600, marginBottom: 10 }} dir="auto">{it.situation}</div>
                  <div style={{ display: "grid", gap: 8 }}>
                    {["a", "b"].map((lbl, oi) => (
                      <button key={oi} onClick={() => setA({ ...a, ["C" + i]: oi })}
                        style={{ textAlign: "right", background: a["C" + i] === oi ? "#e3f0ef" : "#fff", border: `1.5px solid ${a["C" + i] === oi ? C.red : C.line}`, borderRadius: 10, padding: "10px 13px", fontSize: 14 }}>
                        <span dir="ltr" style={{ fontFamily: "'Satoshi',system-ui,sans-serif" }}><b>{lbl})</b> {it[lbl]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </>)}
          </>)}

          {sec.type === "schreiben" && (<>
            {content.teilA ? (<>
              <div style={{ fontWeight: 700, color: C.muted, fontSize: 13 }}>Teil A — Formular</div>
              <div style={{ background: "#fff8ec", border: `1px solid ${C.gold}`, borderRadius: 12, padding: 16, lineHeight: 1.9 }} dir="auto">{content.teilA.intro}</div>
              <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 16, lineHeight: 1.9 }} dir="ltr"><De size={14.5}>{content.teilA.person}</De></div>
              <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 16 }}>
                {content.teilA.fields.map((f, i) => (
                  <div key={i} dir="ltr" style={{ display: "flex", alignItems: "baseline", gap: 8, padding: "7px 0", fontFamily: "'Satoshi',system-ui,sans-serif", fontSize: 14.5 }}>
                    <span style={{ fontWeight: 700, color: C.red, minWidth: 26 }}>{f.n}</span>
                    <span style={{ minWidth: 120 }}>{f.label}:</span>
                    <span style={{ flex: 1, borderBottom: `1.5px dotted ${C.muted}` }}>&nbsp;</span>
                  </div>
                ))}
              </div>
              <div style={{ fontWeight: 700, color: C.muted, fontSize: 13, marginTop: 6 }}>Teil B — E-Mail</div>
              <div style={{ background: "#fff8ec", border: `1px solid ${C.gold}`, borderRadius: 12, padding: 16, lineHeight: 1.9 }} dir="auto">{content.teilB.task}</div>
            </>) : (
              <div style={{ background: "#fff8ec", border: `1px solid ${C.gold}`, borderRadius: 12, padding: 16, lineHeight: 1.9 }} dir="auto">{content.task}</div>
            )}
            <div style={{ background: "#eef6ef", border: `1px solid ${C.green}`, borderRadius: 12, padding: "14px 16px", textAlign: "center" }}>
              <div style={{ fontSize: 22 }}>✏️📓</div>
              <div style={{ fontWeight: 700, fontSize: 15.5, color: C.green, marginTop: 4 }}>ئێستا کاتی دەفتەر و پێنووسەیە 😊</div>
              <div style={{ fontSize: 13.5, color: C.muted, marginTop: 4, lineHeight: 1.8 }}>ئەم بەشە لە ئەپدا مەنووسە — بە دەست لەسەر دەفتەرەکەت بنووسە بۆ مەشقی نووسین.</div>
            </div>
          </>)}

          {sec.type === "muendlich" && (<>
            <div style={{ background: "#fff8ec", border: `1px solid ${C.gold}`, borderRadius: 12, padding: 16, lineHeight: 1.9 }} dir="auto">{content.task}</div>
            <div style={{ fontSize: 12.5, color: C.muted }}>ⓘ ئەم بەشە بۆ مەشقی زارەکییە و لە نمرە ناژمێردرێت — بە دەنگی بەرز قسەی بکە.</div>
          </>)}
        </div>
      )}

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        {idx > 0 && <button onClick={() => setIdx(idx - 1)} style={{ background: "transparent", color: C.muted, border: `1.5px solid ${C.line}`, padding: "12px 14px", borderRadius: 11, fontWeight: 700 }}>→ پێشوو</button>}
        {idx < SECS.length - 1 ? (
          <button onClick={() => setIdx(idx + 1)} style={{ flex: 1, background: C.red, color: "#fff", border: "none", padding: 13, borderRadius: 11, fontWeight: 700, fontSize: 15 }}>بەشی دواتر ←</button>
        ) : (
          <button onClick={() => setPhase("overview")} style={{ flex: 1, background: C.green, color: "#fff", border: "none", padding: 13, borderRadius: 11, fontWeight: 700, fontSize: 15 }}>📋 پێداچوونەوە ←</button>
        )}
        <button onClick={onClose} style={{ background: "transparent", color: C.redDk, border: `1.5px solid ${C.line}`, padding: "13px 16px", borderRadius: 11, fontWeight: 700 }}>داخستن</button>
      </div>
    </div>
  );
}

function Lessons({ open, setOpen, progress = {}, setProgress }) {
  const [level, setLevel] = useState("A1");
  const [mode, setMode] = useState("grammar"); // grammar | verbs | vocab
  const mkBatch = (key) => (c, w) => setProgress && setProgress((p) => ({ ...p, [key]: Math.max(0, Math.min(100, (p[key] || 0) + (c - w))) }));
  const [examType, setExamType] = useState(null); // null | "telc" | "goethe"
  const [examLevel, setExamLevel] = useState(null); // null | "A1".."B2"

  // ── Grammar detail view ──
  if (open && open.startsWith("g:")) {
    const gid = open.slice(2);
    const list = GRAMMAR[level] || Object.values(GRAMMAR).flat();
    let g = (GRAMMAR[level] || []).find((x) => x.de === gid);
    if (!g) { for (const lv of Object.keys(GRAMMAR)) { const f = GRAMMAR[lv].find((x) => x.de === gid); if (f) { g = f; break; } } }
    const gt = GTABLES[g.de];
    const gtLtr = !!gt && (gt.headers[0] === "کەس" || gt.headers[0] === "ئەڵمانی"); // خشتەی جێناو/کێشان: سۆلا → ساغ
    const exList = GEXAMPLES[g.de] || g.ex;
    return (
      <div className="rise">
        <button onClick={() => setOpen(null)} style={{ border: "none", background: "transparent", color: C.red, fontWeight: 600, fontSize: 14, marginBottom: 14 }}>↩ هەموو بابەتەکان</button>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
          <span style={{ background: levelColor(level), color: "#fff", padding: "3px 11px", borderRadius: 14, fontSize: 13, fontWeight: 700 }}>{level}</span>
          <h2 style={{ fontWeight: 700, fontSize: 25, margin: 0 }}>{g.ku}</h2>
        </div>
        <div style={{ color: C.muted, fontSize: 14, marginBottom: 18 }}><De>{g.de}</De></div>

        <div style={{ background: "#fff8ec", border: `1px solid ${C.gold}`, borderRadius: 12, padding: "14px 16px", marginBottom: 20 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.gold, marginBottom: 6 }}>◆ ڕوونکردنەوە</div>
          <div style={{ fontSize: 15, lineHeight: 1.9 }}>{g.exp}</div>
        </div>

        {gt && (
          <div style={{ marginBottom: 22 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.muted, marginBottom: 10 }}>📊 خشتەی کورتە</div>
            <div style={{ overflowX: "auto", border: `1px solid ${C.line}`, borderRadius: 12 }}>
              <table dir={gtLtr ? "ltr" : "rtl"} style={{ width: "100%", borderCollapse: "collapse", fontSize: 14.5 }}>
                <thead>
                  <tr style={{ background: levelColor(level) }}>
                    {gt.headers.map((h, hi) => (
                      <th key={hi} style={{ color: "#fff", fontWeight: 700, padding: "10px 12px", textAlign: gtLtr ? "left" : "right", whiteSpace: "nowrap" }}><span dir="auto">{h}</span></th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {gt.rows.map((row, ri) => (
                    <tr key={ri} style={{ background: ri % 2 ? "#fbf6ee" : "#fff" }}>
                      {row.map((cell, ci) => (
                        <td key={ci} style={{ padding: "9px 12px", borderTop: `1px solid ${C.line}`, textAlign: gtLtr ? "left" : "right", color: ci === 0 ? C.ink : C.red, fontWeight: ci === 0 ? 700 : 500 }}>
                          <span dir="auto" style={{ fontFamily: /[A-Za-zÄÖÜäöüß]/.test(cell) ? "'Satoshi',system-ui,sans-serif" : "inherit" }}>{cell}</span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {g.groups && (
          <div style={{ display: "grid", gap: 16, marginBottom: 22 }}>
            {g.groups.map((grp) => (
              <div key={grp.art} style={{ background: C.panel, border: `1px solid ${C.line}`, borderInlineStart: `5px solid ${grp.color}`, borderRadius: 14, overflow: "hidden" }}>
                <div style={{ background: grp.color, color: "#fff", padding: "12px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 18 }}>{grp.emoji}</span>
                  <span dir="ltr" style={{ fontFamily: "'Satoshi',system-ui,sans-serif", fontSize: 22, fontWeight: 700 }}>{grp.art}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, opacity: .95 }}>— {grp.tr}</span>
                </div>
                <div style={{ padding: "14px 16px" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: grp.color, marginBottom: 8, display:"flex", alignItems:"center", gap:5 }}><Pin size={12} /> یاساکان</div>
                  <ul style={{ margin: "0 0 14px", paddingInlineStart: 20, fontSize: 14.5, lineHeight: 1.9 }}>
                    {grp.rules.map((r, ri) => <li key={ri}>{r}</li>)}
                  </ul>
                  <div style={{ fontSize: 12, fontWeight: 700, color: grp.color, marginBottom: 8 }}>🧾 نموونەکان</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {grp.words.map((w, wi) => (
                      <span key={wi} style={{ display: "inline-flex", flexDirection: "column", gap: 2, background: "#fff", border: `1px solid ${C.line}`, borderRadius: 10, padding: "7px 11px", minWidth: 92 }}>
                        <span style={{ display: "flex", alignItems: "center", gap: 2 }}><De size={14.5} color={C.ink}>{w[0]}</De><Speak text={w[0]} size={13} /></span>
                        <span style={{ fontSize: 13, color: grp.color, fontWeight: 600 }}>{w[1]}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {g.merksatz && (
          <div style={{ background: `linear-gradient(225deg, ${C.red}, ${C.redDk})`, color: "#fdf3e6", borderRadius: 14, padding: "16px 18px", marginBottom: 22 }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 10 }}>🧠 ڕستەی بیرهێنانەوە (Merksatz)</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              {g.merksatz.map((m, mi) => (
                <div key={mi} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span dir="ltr" style={{ fontFamily: "'Satoshi',system-ui,sans-serif", fontSize: 18, fontWeight: 700 }}>{m.de}</span>
                  <span style={{ opacity: .85 }}>= {m.ku}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ fontSize: 13, fontWeight: 700, color: C.muted, marginBottom: 10 }}>نموونەکان / Beispiele <span style={{ color: C.gold }}>({exList.length})</span></div>
        <div style={{ display: "grid", gap: 10 }}>
          {exList.map((e, i) => (
            <div key={i} className="wcard" style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: "13px 16px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 4 }}><div style={{ flex: 1 }}><De size={17} color={C.ink}>{e.de}</De></div><Speak text={e.de} /></div>
              <div style={{ color: C.red, fontSize: 15.5, marginTop: 5, lineHeight: 1.7 }}>{e.ku}</div>
            </div>
          ))}
        </div>

        <AITest subject={`ڕێزمان: «${g.de}» (${g.ku})`} level={level}
          pct={progress[level + "::" + g.de] || 0} onBatch={mkBatch(level + "::" + g.de)} />
      </div>
    );
  }

  // ── Vocab (thematic) detail view ──
  if (open) {
    const l = LESSONS.find((x) => x.id === open);
    return (
      <div className="rise">
        <button onClick={() => setOpen(null)} style={{ border: "none", background: "transparent", color: C.red, fontWeight: 600, fontSize: 14, marginBottom: 14 }}>↩ هەموو وانەکان</button>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
          <span style={{ background: levelColor(l.level), color: "#fff", padding: "3px 11px", borderRadius: 14, fontSize: 13, fontWeight: 700 }}>{l.level}</span>
          <h2 style={{ fontWeight: 700, fontSize: 26, margin: 0 }}>{l.title}</h2>
        </div>
        <div style={{ color: C.muted, fontSize: 14, marginBottom: 18 }}><De>{l.de}</De></div>
        <div style={{ background: "#fff8ec", border: `1px solid ${C.gold}`, borderRadius: 12, padding: "14px 16px", marginBottom: 20 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.gold, marginBottom: 6 }}>◆ تێبینی ڕێزمان</div>
          <div style={{ fontSize: 15, lineHeight: 1.9 }}>{l.grammar}</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(210px,1fr))", gap: 12 }}>
          {l.words.map((w, i) => (
            <div key={i} className="wcard" style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: "14px 16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 2 }}><De size={17} color={C.ink}>{w.de}</De><Speak text={w.de} /></div>
              <div style={{ color: C.red, fontSize: 16, marginTop: 4 }}>{w.ku}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── List view ──
  const grammarList = GRAMMAR[level] || [];
  const verbList = VERBS[level] || [];
  const topicKeys = [...grammarList.map((g) => level + "::" + g.de), level + "::verbs", level + "::vocab"];
  const doneCount = topicKeys.filter((k) => (progress[k] || 0) >= 95).length;
  const examUnlocked = topicKeys.length > 0 && doneCount === topicKeys.length;
  const avgPct = topicKeys.length ? Math.round(topicKeys.reduce((s, k) => s + (progress[k] || 0), 0) / topicKeys.length) : 0;
  const vocabList = LESSONS.filter((l) => l.level === level);
  const Tab = ({ id, label }) => (
    <button onClick={() => setMode(id)}
      style={{ flex: 1, border: "none", background: mode === id ? C.red : "transparent", color: mode === id ? "#fff" : C.muted, padding: "10px 6px", borderRadius: 9, fontWeight: 700, fontSize: 13.5 }}>
      {label}
    </button>
  );

  return (
    <div className="rise">
      <h2 style={{ fontWeight: 700, fontSize: 25, marginBottom: 4 }}>وانە و ڕێزمان</h2>
      <p style={{ color: C.muted, fontSize: 14, marginBottom: 16 }}>{mode === "exam" ? "تاقیکردنەوەی فەرمی هەڵبژێرە." : "ئاستێک هەڵبژێرە، پاشان ڕێزمان، کردار، وشە یان تاقیکردنەوە."}</p>
      {mode !== "exam" && <LevelPills value={level} onChange={(lv) => { setLevel(lv); }} />}

      <div style={{ display: "flex", gap: 6, background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: 5, marginBottom: 18 }}>
        <Tab id="grammar" label={`ڕێزمان (${grammarList.length})`} />
        <Tab id="verbs" label={`کردار (${verbList.length})`} />
        <Tab id="vocab" label={`وشە (${vocabList.length})`} />
        <button onClick={() => setMode("pre")}
          style={{ flex: 1, border: "none", background: mode === "pre" ? C.gold : "transparent", color: mode === "pre" ? "#fff" : C.muted, padding: "10px 6px", borderRadius: 9, fontWeight: 700, fontSize: 13.5, display: "flex", alignItems: "center", justifyContent: "center", gap: 3 }}>
          <span style={{ fontSize: 11 }}>📝</span> پێش-تاقی
        </button>
        <button onClick={() => setMode("exam")}
          style={{ flex: 1, border: "none", background: mode === "exam" ? C.green : (examUnlocked ? C.green : "transparent"), color: (mode === "exam" || examUnlocked) ? "#fff" : C.muted, padding: "10px 6px", borderRadius: 9, fontWeight: 700, fontSize: 13.5, display: "flex", alignItems: "center", justifyContent: "center", gap: 3 }}>
          <span style={{ fontSize: 11 }}>{examUnlocked ? "✓" : "🎓"}</span> تاقیکردنەوە
        </button>
      </div>

      {mode === "pre" && (
        <div className="rise">
          <div style={{ background: `linear-gradient(225deg, ${C.gold}, #8a5a12)`, color: "#fff8ec", borderRadius: 18, padding: "22px 20px", marginBottom: 6 }}>
            <div style={{ fontSize: 30 }}>📝</div>
            <div style={{ fontWeight: 700, fontSize: 21, marginTop: 6 }}>پێش-تاقیکردنەوە — ئاستی {level}</div>
            <div style={{ fontSize: 14, opacity: .92, marginTop: 8, lineHeight: 1.9 }}>
              دەستەواژە و پێکهاتە گرنگەکان بۆ ئامادەکاری تاقیکردنەوەی فەرمی ئاستی {level} — لەگەڵ نموونە و وەرگێڕانی سۆرانی.
            </div>
          </div>
          {level === "A1" && <PhrasePanel title="🗣️ دەستەواژە گرنگەکانی A1 (بە نموونە)" data={A1_REDEMITTEL} accent={C.red} />}
          {level === "A2" && <PhrasePanel title="🗣️ دەستەواژە گرنگەکانی A2 (بە نموونە)" data={A2_REDEMITTEL} accent={C.green} />}
          {level === "B1" && <RedemittelPanel />}
          {level === "B2" && <PraesentationPanel />}
        </div>
      )}

      {mode === "exam" && (() => {
        const PROV = { telc: { name: "telc Deutsch", de: "telc", Icon: BookMarked, color: "#0e7c7a", note: "تاقیکردنەوەی telc — فۆرمی پرسیاری «Sprachbausteine» و خوێندنەوە." },
                       goethe: { name: "Goethe-Zertifikat", de: "Goethe-Institut", Icon: BookOpenCheck, color: "#b8412e", note: "تاقیکردنەوەی Goethe — ڕێزمان، وشە و تێگەیشتنی دەق." } };
        const LV = ["A1", "A2", "B1", "B2"];

        // Step 1: choose provider
        if (!examType) {
          return (
            <div className="rise">
              <h3 style={{ fontWeight: 700, fontSize: 19, marginBottom: 4 }}>🎓 تاقیکردنەوەی فەرمی</h3>
              <p style={{ color: C.muted, fontSize: 14, marginBottom: 16 }}>کام تاقیکردنەوە دەتەوێت مەشقی بکەیت؟</p>
              <div style={{ display: "grid", gap: 14 }}>
                {Object.entries(PROV).map(([k, p]) => (
                  <button key={k} onClick={() => setExamType(k)}
                    style={{ textAlign: "right", background: C.panel, border: `1px solid ${C.line}`, borderInlineStart: `6px solid ${p.color}`, borderRadius: 16, padding: 18, display: "flex", alignItems: "center", gap: 16, cursor: "pointer" }}>
                    <div style={{ width: 52, height: 52, borderRadius: 13, background: p.color, color: "#fff", display: "grid", placeItems: "center", flexShrink: 0 }}><p.Icon size={26} /></div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 19 }} dir="ltr">{p.name}</div>
                      <div style={{ color: C.muted, fontSize: 13, marginTop: 3, lineHeight: 1.7 }}>{p.note}</div>
                    </div>
                    <div style={{ color: p.color, fontSize: 20 }}>←</div>
                  </button>
                ))}
              </div>
            </div>
          );
        }

        const prov = PROV[examType];
        // Step 2: choose level
        if (!examLevel) {
          return (
            <div className="rise">
              <button onClick={() => setExamType(null)} style={{ border: "none", background: "transparent", color: C.red, fontWeight: 600, fontSize: 14, marginBottom: 12 }}>↩ گەڕانەوە بۆ هەڵبژاردنی تاقیکردنەوە</button>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 11, background: prov.color, color: "#fff", display: "grid", placeItems: "center" }}><prov.Icon size={22} /></div>
                <div><div style={{ fontWeight: 700, fontSize: 18 }} dir="ltr">{prov.name}</div><div style={{ color: C.muted, fontSize: 13 }}>ئاستێک هەڵبژێرە</div></div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {LV.map((lv) => {
                  const p = progress[`${examType}::${lv}::exam`] || 0;
                  return (
                    <button key={lv} onClick={() => setExamLevel(lv)}
                      style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: "18px 14px", cursor: "pointer", textAlign: "center" }}>
                      <div dir="ltr" style={{ fontFamily: "'Satoshi',system-ui,sans-serif", fontWeight: 700, fontSize: 26, color: prov.color }}>{lv}</div>
                      <div style={{ marginTop: 6, fontSize: 12.5, color: p >= 95 ? C.green : C.muted, fontWeight: 700 }} dir="ltr">{p >= 95 ? "✓ " : ""}{Math.round(p)}%</div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        }

        // Step 3: the exam itself
        return (
          <div className="rise">
            <button onClick={() => setExamLevel(null)} style={{ border: "none", background: "transparent", color: C.red, fontWeight: 600, fontSize: 14, marginBottom: 12 }}>↩ گۆڕینی ئاست</button>
            <ExamRunner provName={prov.name} provDe={prov.de} level={examLevel}
              onClose={() => setExamLevel(null)}
              onScore={(p) => setProgress && setProgress((pr) => ({ ...pr, [`${examType}::${examLevel}::exam`]: p }))} />
          </div>
        );
      })()}

      {mode === "grammar" && (
        <div style={{ display: "grid", gap: 11 }}>
          {grammarList.map((g) => {
            const tp = progress[level + "::" + g.de] || 0;
            return (
            <div key={g.de} className="wcard" onClick={() => setOpen("g:" + g.de)} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: 16, display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }}>
              <div style={{ width: 42, height: 42, borderRadius: 11, background: levelColor(level), color: "#fff", display: "grid", placeItems: "center", fontSize: 18, fontWeight: 700, flexShrink: 0 }}>{g.icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 18 }}>{g.ku}</div>
                <div style={{ color: C.muted, fontSize: 13 }}><De>{g.de}</De></div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                <span dir="ltr" style={{ fontSize: 13, fontWeight: 700, padding: "3px 9px", borderRadius: 12, background: tp >= 95 ? "#e7f1ea" : C.bg, color: tp >= 95 ? C.green : C.muted, border: `1px solid ${tp >= 95 ? C.green : C.line}` }}>
                  {tp >= 95 ? "✓ " : ""}{Math.round(tp)}%
                </span>
                <div style={{ color: C.red, fontSize: 20 }}>←</div>
              </div>
            </div>
            );
          })}
        </div>
      )}

      {mode === "verbs" && (
        <div style={{ display: "grid", gap: 10 }}>
          {verbList.map((v, i) => (
            <div key={i} className="wcard" style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: "13px 16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                <De size={18} color={C.red}>{v.de}</De>
                <Speak text={v.de} size={16} />
                <span style={{ fontWeight: 700, fontSize: 16 }}>{v.ku}</span>
              </div>
              <div style={{ marginTop: 8, borderTop: `1px dashed ${C.line}`, paddingTop: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 2 }}><De size={15} color={C.ink}>{v.ex}</De><Speak text={v.ex} /></div>
                <div style={{ color: C.muted, fontSize: 14.5, marginTop: 4, lineHeight: 1.7 }}>{v.exku}</div>
              </div>
            </div>
          ))}
          <AITest subject={`کرداری ئەڵمانی ئاستی ${level} (کێشان و بەکارهێنانیان لە ناو ڕستەدا)`} level={level}
            hint="پرسیارەکان لەسەر بەکارهێنانی کردارەکان بن لە ناو ڕستەدا: فۆرمی ڕاستی کردار، کات، کێشان و پڕکردنەوەی بۆشایی لە ڕستەدا. پرسیاری واتای کوردی کردارەکە مەکە."
            pct={progress[level + "::verbs"] || 0} onBatch={mkBatch(level + "::verbs")} />
        </div>
      )}

      {mode === "vocab" && (
        <div style={{ display: "grid", gap: 12 }}>
          {vocabList.map((l) => (
            <div key={l.id} className="wcard" onClick={() => setOpen(l.id)} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: 18, display: "flex", alignItems: "center", gap: 16, cursor: "pointer" }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: levelColor(l.level), color: "#fff", display: "grid", placeItems: "center", fontSize: 22 }}>{l.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 19 }}>{l.title}</div>
                <div style={{ color: C.muted, fontSize: 13.5 }}><De>{l.de}</De> · {l.words.length} وشە</div>
              </div>
              <div style={{ color: C.red, fontSize: 20 }}>←</div>
            </div>
          ))}
          <AITest subject={`وشەی ئەڵمانی ئاستی ${level} لەسەر بابەتەکانی: ${vocabList.map((l) => l.title).join("، ")}`} level={level}
            pct={progress[level + "::vocab"] || 0} onBatch={mkBatch(level + "::vocab")} />
        </div>
      )}
    </div>
  );
}

// ── helper: ئارتیکڵی وشە دیاری بکە ────────────────────────────────
function detectArticle(de) {
  if (de.startsWith("der ")) return { art: "der", color: "#3b82f6" };
  if (de.startsWith("die ")) return { art: "die", color: "#ec4899" };
  if (de.startsWith("das ")) return { art: "das", color: "#16A06F" };
  return null;
}

// ── Synonym / Antonym meta-veritabanı ─────────────────────────────
const WORD_META = {
  // A1 — Antonimler
  "Ja":             { ant: "Nein" },
  "Nein":           { ant: "Ja" },
  "der Tag":        { ant: "die Nacht" },
  "die Nacht":      { ant: "der Tag" },
  "groß":           { ant: "klein" },
  "klein":          { ant: "groß" },
  "gut":            { ant: "schlecht" },
  "schlecht":       { ant: "gut" },
  "schön":          { ant: "hässlich" },
  "neu":            { ant: "alt" },
  "alt":            { ant: "jung / neu" },
  "warm":           { ant: "kalt" },
  "kalt":           { ant: "warm" },
  "schnell":        { ant: "langsam" },
  "die Frau":       { ant: "der Mann" },
  "der Mann":       { ant: "die Frau" },
  "kaufen":         { ant: "verkaufen" },
  "kommen":         { ant: "gehen" },
  "immer":          { ant: "nie" },
  "heute":          { ant: "gestern / morgen" },
  // A1 — Synonymlar
  "der Vater":      { syn: "der Papa" },
  "die Mutter":     { syn: "die Mama" },
  "der Freund":     { syn: "der Kamerad" },
  "gehen":          { syn: "laufen" },
  "sprechen":       { syn: "reden" },
  "wohnen":         { syn: "leben" },
  "lernen":         { syn: "studieren" },
  "die Arbeit":     { syn: "der Beruf" },
  "sehen":          { syn: "schauen / blicken" },
  "machen":         { syn: "tun" },
  "das Haus":       { syn: "die Wohnung" },
  "der Hund":       { syn: "der Vierbeiner" },
  // A2 — Antonimler
  "öffnen":         { ant: "schließen" },
  "schließen":      { ant: "öffnen" },
  "antworten":      { ant: "fragen" },
  "aufstehen":      { ant: "hinlegen / schlafen" },
  "finden":         { ant: "verlieren" },
  "warten":         { ant: "weitergehen" },
  // A2 — Synonymlar
  "helfen":         { syn: "unterstützen" },
  "kochen":         { syn: "zubereiten" },
  "treffen":        { syn: "begegnen" },
  "brauchen":       { syn: "benötigen" },
  // B1 — Antonimler
  "glücklich":      { ant: "traurig" },
  "traurig":        { ant: "glücklich" },
  "wichtig":        { ant: "unwichtig" },
  "einfach":        { ant: "schwierig" },
  "möglich":        { ant: "unmöglich" },
  "interessant":    { ant: "langweilig" },
  "gesund":         { ant: "krank" },
  "sicher":         { ant: "gefährlich" },
  "laut":           { ant: "leise" },
  "stark":          { ant: "schwach" },
  "lang":           { ant: "kurz" },
  "teuer":          { ant: "billig" },
  "früh":           { ant: "spät" },
  "ankommen":       { ant: "abfahren" },
  "beginnen":       { ant: "enden" },
  "erlauben":       { ant: "verbieten" },
  "erfolgreich":    { ant: "erfolglos" },
  "richtig":        { ant: "falsch" },
  // B1 — Synonymlar
  "erklären":       { syn: "beschreiben" },
  "verstehen":      { syn: "begreifen" },
  "verbessern":     { syn: "optimieren" },
  "planen":         { syn: "organisieren" },
  "lösen":          { syn: "beheben" },
  // B2 — Antonimler
  "zufrieden":      { ant: "unzufrieden" },
  "fördern":        { ant: "behindern" },
  "wachsen":        { ant: "schrumpfen" },
  "zunehmen":       { ant: "abnehmen" },
  "steigen":        { ant: "sinken" },
  "positiv":        { ant: "negativ" },
  "komplex":        { ant: "einfach" },
  // B2 — Synonymlar
  "unterstützen":   { syn: "fördern" },
  "behaupten":      { syn: "argumentieren" },
  "betonen":        { syn: "hervorheben" },
};

// ── کارت / Flashcards ──────────────────────────────────────────────
function Flashcards() {
  const [level,    setLevel]    = useState("A1");
  const [deck,     setDeck]     = useState(() => mkDeck("A1"));
  const [idx,      setIdx]      = useState(0);
  const [selected, setSelected] = useState(null); // null | option-index
  const [scores,   setScores]   = useState({ correct: 0, wrong: 0 });
  const [streak,   setStreak]   = useState(0);
  const [optKey,   setOptKey]   = useState(0); // bump → regenerate options

  function mkDeck(lv) {
    return (FLASHCARDS[lv] || []).map((w, i) => ({
      ...w, key: i,
      uid: `${i}-${Math.random()}`, // unique per instance (repeats get different uid)
      retries: 0,
    })).sort(() => Math.random() - 0.5);
  }

  // ── build 3 options: 1 correct + 2 random wrong ──
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = useMemo(() => {
    const card = deck[idx];
    if (!card) return [];
    const pool = (FLASHCARDS[level] || []).filter(w => w.ku !== card.ku);
    // fallback: pick from all levels if pool too small
    const src = pool.length >= 2 ? pool
      : Object.values(FLASHCARDS).flat().filter(w => w.ku !== card.ku);
    const wrong = [...src].sort(() => Math.random() - 0.5).slice(0, 2)
      .map(w => ({ ku: w.ku, correct: false }));
    return [{ ku: card.ku, correct: true }, ...wrong].sort(() => Math.random() - 0.5);
  // optKey is the trigger — we intentionally read deck/idx/level from closure
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optKey]);

  function reset(lv) {
    const d = mkDeck(lv);
    setDeck(d); setIdx(0); setSelected(null);
    setScores({ correct: 0, wrong: 0 }); setStreak(0);
    setOptKey(k => k + 1);
  }
  function changeLevel(lv) { setLevel(lv); reset(lv); }

  function choose(i) {
    if (selected !== null) return;
    const correct = options[i].correct;
    setSelected(i);
    setScores(s => ({ ...s, correct: s.correct + (correct ? 1 : 0), wrong: s.wrong + (correct ? 0 : 1) }));
    setStreak(s => correct ? s + 1 : 0);
    // Wrong answer → push card back 3-5 positions (max 2 retries)
    if (!correct) {
      const card = deck[idx];
      if (card.retries < 2) {
        const nextDeck = [...deck];
        const at = Math.min(idx + 3 + Math.floor(Math.random() * 3), nextDeck.length);
        nextDeck.splice(at, 0, { ...card, retries: card.retries + 1, uid: `${card.key}-r${card.retries + 1}-${Math.random()}` });
        setDeck(nextDeck);
      }
    }
  }

  function next() {
    setIdx(i => i + 1);
    setSelected(null);
    setOptKey(k => k + 1);
  }

  // ── keyboard: 1/2/3 = choose, Space/Enter = next ──
  useEffect(() => {
    function onKey(e) {
      if (idx >= deck.length) return;
      if (selected === null) {
        if (e.key === "1") choose(0);
        if (e.key === "2") choose(1);
        if (e.key === "3") choose(2);
      } else {
        if (e.code === "Space" || e.code === "Enter") { e.preventDefault(); next(); }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, idx, deck, options]);

  const card     = deck[idx];
  const finished = idx >= deck.length;
  const progress = deck.length > 0 ? Math.min((idx / deck.length) * 100, 100) : 0;
  const total    = scores.correct + scores.wrong;
  const accuracy = total > 0 ? Math.round((scores.correct / total) * 100) : 0;
  const lvColor  = levelColor(level);
  const meta     = card ? WORD_META[card.de] : null;
  const artInfo  = card ? detectArticle(card.de) : null;
  const displayWord = card ? (artInfo ? card.de.slice(card.de.indexOf(" ") + 1) : card.de) : "";

  return (
    <div className="rise">
      {/* ── Header ── */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:4 }}>
        <h2 style={{ fontWeight:700, fontSize:22, margin:0 }}>کارتی وشەکان</h2>
        {streak > 1 && (
          <div style={{ display:"flex", alignItems:"center", gap:4, background:"rgba(245,165,36,.15)", border:"1px solid rgba(245,165,36,.3)", borderRadius:99, padding:"4px 12px" }}>
            <Zap size={14} color={C.gold} />
            <span style={{ fontSize:13, fontWeight:700, color:C.gold }}>{streak} 🔥</span>
          </div>
        )}
      </div>
      <p style={{ color:C.muted, fontSize:13, marginBottom:14 }}>مێشکت ئامادەیە؟ وشەکان ئامادەی شەڕن — ببینە کێ دەبەرێت! ⚔️🧠</p>
      <LevelPills value={level} onChange={changeLevel} />

      {finished ? (
        /* ── Completion ── */
        <div className="rise" style={{ textAlign:"center", padding:"32px 0" }}>
          <div style={{ width:80, height:80, borderRadius:"50%", background:`linear-gradient(135deg,${lvColor},${C.gold})`, display:"grid", placeItems:"center", margin:"0 auto 16px", boxShadow:`0 12px 32px ${lvColor}55` }}>
            <Trophy size={36} color="#fff" />
          </div>
          <h3 style={{ fontWeight:800, fontSize:26, margin:"0 0 8px" }}>تەواوت کرد!</h3>
          <p style={{ color:C.muted, fontSize:14, marginBottom:20 }}>
            {scores.correct} لە {total} — <strong style={{ color:lvColor }}>{accuracy}%</strong>
          </p>
          <div style={{ display:"flex", gap:12, justifyContent:"center", marginBottom:24 }}>
            {[
              { Icon:CheckCircle2, count:scores.correct, label:"دروست", color:"#16A06F" },
              { Icon:XCircle,      count:scores.wrong,   label:"هەڵە",   color:"#ef4444" },
            ].map(s => (
              <div key={s.label} style={{ background:C.panel, border:`1px solid ${C.line}`, borderRadius:16, padding:"16px 28px" }}>
                <s.Icon size={24} color={s.color} style={{ margin:"0 auto 6px", display:"block" }} />
                <div style={{ fontWeight:800, fontSize:26, color:s.color }}>{s.count}</div>
                <div style={{ fontSize:12, color:C.muted }}>{s.label}</div>
              </div>
            ))}
          </div>
          <button onClick={() => reset(level)}
            style={{ background:`linear-gradient(135deg,${lvColor},${C.gold})`, color:"#fff", border:"none", padding:"13px 32px", borderRadius:16, fontWeight:700, fontSize:15, cursor:"pointer", display:"inline-flex", alignItems:"center", gap:8, boxShadow:`0 6px 20px ${lvColor}44` }}>
            <RefreshCw size={16} /> دووبارە مەشق بکە
          </button>
        </div>
      ) : card ? (
        <>
          {/* ── Progress ── */}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8, marginTop:4 }}>
            <span style={{ background:lvColor, color:"#fff", padding:"3px 11px", borderRadius:14, fontSize:12, fontWeight:700 }}>{level}</span>
            <span style={{ fontSize:12, color:C.muted, fontWeight:600 }} dir="ltr">{idx + 1} / {deck.length}</span>
            <span style={{ fontSize:12, color:lvColor, fontWeight:700 }}>{Math.round(progress)}%</span>
          </div>
          <div style={{ height:6, background:C.line, borderRadius:6, marginBottom:16 }}>
            <div style={{ height:"100%", width:`${progress}%`, background:`linear-gradient(90deg,${lvColor},${C.gold})`, borderRadius:6, transition:"width .35s ease" }} />
          </div>

          {/* ── Flash Card ── */}
          <div className="card-flip" key={card.uid}
            style={{ background:C.panel, border:`1px solid ${C.line}`, borderRadius:22, overflow:"hidden", boxShadow:"0 8px 32px rgba(0,0,0,.07)", marginBottom:14 }}>
            {/* top stripe */}
            <div style={{ height:4, background:`linear-gradient(90deg,${lvColor},${C.gold})` }} />
            <div style={{ padding:"26px 24px", textAlign:"center" }}>
              <div style={{ fontSize:11, letterSpacing:".07em", color:C.muted, fontWeight:600, marginBottom:10 }}>ئەڵمانی / Deutsch</div>
              {/* Article badge */}
              {artInfo && (
                <div style={{ display:"inline-block", background:artInfo.color, color:"#fff", fontSize:12, fontWeight:700, padding:"2px 14px", borderRadius:99, marginBottom:10 }}>{artInfo.art}</div>
              )}
              {/* Word + TTS */}
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
                <De size={38} color={C.ink}>{displayWord}</De>
                <Speak text={card.de} size={26} />
              </div>

              {/* Syn/Ant + example — revealed after answering */}
              {selected !== null && (
                <div className="rise" style={{ borderTop:`1px dashed ${C.line}`, marginTop:18, paddingTop:14 }}>
                  {/* Correct answer label */}
                  <div style={{ fontWeight:700, fontSize:18, color:lvColor, marginBottom:8 }}>{card.ku}</div>
                  {/* Syn or Ant badge */}
                  {meta && (
                    <div style={{ display:"inline-flex", alignItems:"center", gap:6, marginBottom:10,
                      background: meta.ant ? "rgba(229,72,77,.08)" : "rgba(91,91,214,.08)",
                      border:`1px solid ${meta.ant ? "rgba(229,72,77,.25)" : "rgba(91,91,214,.25)"}`,
                      borderRadius:99, padding:"4px 14px", fontSize:13 }}>
                      <span style={{ fontWeight:700, color: meta.ant ? "#E5484D" : C.red }}>
                        {meta.ant ? "↔ Antonym:" : "≈ Synonym:"}
                      </span>
                      <De size={13} color={C.ink}>{meta.ant || meta.syn}</De>
                    </div>
                  )}
                  {/* Example sentence */}
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:5, marginBottom:3 }}>
                    <De size={13} color={C.muted}>{card.ex}</De>
                    <Speak text={card.ex} size={13} />
                  </div>
                  <div style={{ color:C.muted, fontSize:12, lineHeight:1.7 }}>{card.exku}</div>
                </div>
              )}
            </div>
          </div>

          {/* ── 3 options ── */}
          <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
            {options.map((opt, i) => {
              const answered  = selected !== null;
              const isCorrect = opt.correct;
              const isPicked  = selected === i;
              let bg, border, clr, shadow = "none";
              if (!answered)        { bg = C.panel; border = `1px solid ${C.line}`; clr = C.ink; }
              else if (isCorrect)   { bg = "rgba(22,160,111,.1)"; border = "2px solid #16A06F"; clr = "#16A06F"; shadow = "0 4px 16px rgba(22,160,111,.2)"; }
              else if (isPicked)    { bg = "rgba(229,72,77,.1)";  border = "2px solid #E5484D"; clr = "#E5484D"; }
              else                  { bg = C.panel; border = `1px solid ${C.line}`; clr = C.muted; }
              return (
                <button key={i} onClick={() => choose(i)}
                  style={{ background:bg, border, borderRadius:16, padding:"14px 18px", textAlign:"right",
                    fontFamily:"'Vazirmatn',sans-serif", fontSize:16, fontWeight:600, color:clr,
                    cursor: answered ? "default" : "pointer", width:"100%",
                    display:"flex", alignItems:"center", gap:12, transition:"all .22s", boxShadow:shadow }}>
                  {/* number badge */}
                  <span style={{ width:28, height:28, borderRadius:8, flexShrink:0,
                    background: !answered ? "rgba(0,0,0,.06)" : isCorrect ? "#16A06F" : isPicked ? "#E5484D" : "rgba(0,0,0,.06)",
                    color: (!answered || (!isCorrect && !isPicked)) ? C.muted : "#fff",
                    display:"grid", placeItems:"center", fontSize:13, fontWeight:700 }}>{i + 1}</span>
                  <span style={{ flex:1 }}>{opt.ku}</span>
                  {answered && isCorrect  && <CheckCircle2 size={18} />}
                  {answered && isPicked && !isCorrect && <XCircle size={18} />}
                </button>
              );
            })}
          </div>

          {/* ── Next / keyboard hint ── */}
          {selected !== null ? (
            <div className="rise" style={{ marginTop:14 }}>
              <button onClick={next} className="glow-btn"
                style={{ width:"100%", padding:"14px", borderRadius:16, fontWeight:700, fontSize:15,
                  display:"flex", alignItems:"center", justifyContent:"center", gap:10, cursor:"pointer", border:"none" }}>
                بەرەو پێشەوە
                <span style={{ fontSize:11, opacity:.65 }}>Space / Enter</span>
              </button>
            </div>
          ) : (
            <div style={{ textAlign:"center", marginTop:10, color:C.muted, fontSize:12, display:"flex", justifyContent:"center", gap:16 }}>
              <span>1 · 2 · 3 — هەڵبژاردن</span>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}

// ── گفتوگۆ / AI Talk ───────────────────────────────────────────────
function Talk() {
  const [level, setLevel] = useState("A1");
  const [msgs, setMsgs] = useState([
    { role: "assistant", text: "سڵاو! من مامۆستای ئەڵمانیتم. 😊 ئاستی خۆت هەڵبژێرە و با بە ئەڵمانی قسە بکەین. با دەست پێبکەین: «Wie heißt du?» (ناوت چییە؟)" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...msgs, { role: "user", text }];
    setMsgs(next); setInput(""); setLoading(true);

    const system =
      `ناوت «ڕێبەر»ە، مامۆستایەکی ئەڵمانیت کە بە دڵنەرمی فێری کەسێک دەکەیت کە زمانەکەی سۆرانی (کوردی) یە. ئاستی فێرخواز ${level} یە — بەپێی ئەو ئاستە قسە بکە و وشە هەڵبژێرە. ` +
      "بە ئەڵمانی قسە بکە بەڵام هەمیشە ڕوونکردنەوە و وەرگێڕان بە سۆرانی بدە. وەڵامەکان کورت بکە (٢-٤ ڕستە). " +
      "هەڵە ئەڵمانییەکانی بەکارهێنەر بە نەرمی ڕاست بکەرەوە و هەندێجار پرسیارێکی ئاسان بکە بۆ ئەوەی گفتوگۆکە بەردەوام بێت. هەر جارێک نموونەیەکی ئەڵمانی بدە و واتاکەی بە سۆرانی پیشان بدە.";

    try {
      const data = await callClaude({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system, messages: next.map((m) => ({ role: m.role, content: m.text })) });
      const reply = (data.content || []).filter((c) => c.type === "text").map((c) => c.text).join("\n").trim();
      setMsgs((m) => [...m, { role: "assistant", text: reply || "..." }]);
    } catch (e) {
      setMsgs((m) => [...m, { role: "assistant", text: "ببورە، پەیوەندی نەکرا. تکایە دووبارە هەوڵبدەرەوە." }]);
    } finally { setLoading(false); }
  }

  return (
    <div className="rise">

      {/* ── ROBOT MASCOT PANEL ── */}
      <div style={{ background:"linear-gradient(135deg,#0c0f24 0%,#1a1040 50%,#0c1a2e 100%)", borderRadius:28, padding:"24px 28px", marginBottom:16, position:"relative", overflow:"hidden", boxShadow:"0 24px 60px rgba(6,182,212,0.25)" }}>
        {/* star dots */}
        {[...Array(16)].map((_,i)=>(<div key={i} style={{ position:"absolute", width:i%3===0?3:2, height:i%3===0?3:2, borderRadius:"50%", background:"rgba(255,255,255,.6)", top:`${(i*17+7)%90}%`, left:`${(i*23+5)%88}%`, opacity:.35+i%4*.15, pointerEvents:"none" }}/>))}
        <div style={{ position:"absolute", top:-60, right:-50, width:220, height:220, borderRadius:"50%", background:"radial-gradient(circle,rgba(6,182,212,.22) 0%,transparent 70%)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", bottom:-50, left:60, width:180, height:180, borderRadius:"50%", background:"radial-gradient(circle,rgba(168,85,247,.18) 0%,transparent 70%)", pointerEvents:"none" }}/>

        <div style={{ display:"flex", alignItems:"center", gap:20, position:"relative" }}>
          {/* Info */}
          <div style={{ flex:1 }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:5, background:"rgba(6,182,212,.15)", border:"1px solid rgba(6,182,212,.3)", borderRadius:99, padding:"3px 12px", fontSize:11, color:"#67e8f9", fontWeight:700, marginBottom:8, letterSpacing:".06em" }}>✦ مامۆستای ئەڵمانیت</div>
            <div style={{ fontFamily:"'Satoshi',system-ui,sans-serif", fontSize:20, fontWeight:700, color:"#fff", lineHeight:1.3, marginBottom:6 }}>
              {loading
                ? <span style={{ color:"#fbbf24" }}>دەفتەرەکەم دەبینم… <span style={{ fontSize:17 }}>📓</span></span>
                : <span>باشە، <span className="gtext">چی دەتەوێت بزانیت؟</span></span>}
            </div>
            {loading
              ? <div style={{ display:"flex", gap:5, alignItems:"center" }}>
                  {[0,1,2].map(d=>(<div key={d} style={{ width:7, height:7, borderRadius:"50%", background:"#fbbf24", animation:`thinkDot 1.4s ${d*.22}s ease infinite` }}/>))}
                  <span style={{ color:"rgba(255,255,255,.5)", fontSize:12, marginInlineStart:6 }}>وەڵامەکە دیده دەکات…</span>
                </div>
              : <div style={{ color:"rgba(255,255,255,.6)", fontSize:13, lineHeight:1.7 }}>ئاستی <strong style={{ color:"#a5f3fc" }}>{level}</strong> هەڵبژێراوە · بە ئەڵمانی قسە بکە</div>}
          </div>
          {/* Robot */}
          <div style={{ flexShrink:0, textAlign:"center" }}>
            <RobotVideo width={90} className={loading?"robot-thinking":"robot-idle"} style={{ filter:"drop-shadow(0 12px 28px rgba(6,182,212,0.55))" }} />
            <div style={{ marginTop:6, display:"flex", alignItems:"center", justifyContent:"center", gap:5 }}>
              <span style={{ width:7, height:7, borderRadius:"50%", background:loading?"#f59e0b":"#10b981", display:"inline-block", boxShadow:loading?"0 0 8px #f59e0b":"0 0 8px #10b981" }}/>
              <span style={{ fontSize:11, color:loading?"#fbbf24":"#34d399", fontWeight:700, letterSpacing:".05em" }}>{loading?"دەبینێت…":"ڕێبەر AI"}</span>
            </div>
          </div>
        </div>
      </div>

      <LevelPills value={level} onChange={setLevel} />

      <div style={{ background:"rgba(255,255,255,0.55)", border:"1px solid rgba(255,255,255,0.5)", backdropFilter:"blur(24px)", WebkitBackdropFilter:"blur(24px)", borderRadius:22, height:420, display:"flex", flexDirection:"column", overflow:"hidden", boxShadow:"0 12px 40px rgba(14,165,233,0.1)", marginTop:14 }}>
        <div style={{ flex:1, overflowY:"auto", padding:18, display:"flex", flexDirection:"column", gap:12 }}>
          {msgs.map((m, i) => (
            <div key={i} style={{ display:"flex", alignItems:"flex-end", gap:10, flexDirection: m.role==="user" ? "row-reverse" : "row" }}>
              {m.role==="assistant" && (
                <RobotAvatar size={36} style={{ filter:"drop-shadow(0 4px 8px rgba(6,182,212,0.4))" }} />
              )}
              {m.role==="user" && (
                <div style={{ width:34, height:34, borderRadius:"50%", background:"linear-gradient(135deg,#0ea5e9,#8b5cf6)", display:"grid", placeItems:"center", fontSize:16, flexShrink:0, boxShadow:"0 4px 12px rgba(14,165,233,0.4)" }}>🧑‍🎓</div>
              )}
              <div style={{ maxWidth:"78%" }}>
                <div style={{ background: m.role==="user" ? "linear-gradient(135deg,#0ea5e9,#8b5cf6)" : "rgba(255,255,255,0.92)", color: m.role==="user" ? "#fff" : C.ink, border: m.role==="user" ? "none" : "1px solid rgba(148,163,184,0.2)", padding:"12px 16px", borderRadius: m.role==="user" ? "18px 4px 18px 18px" : "4px 18px 18px 18px", fontSize:15, lineHeight:1.8, whiteSpace:"pre-wrap", boxShadow: m.role==="user" ? "0 4px 16px rgba(14,165,233,0.35)" : "0 2px 10px rgba(0,0,0,0.05)" }}>
                  {m.text}
                </div>
              </div>
            </div>
          ))}
          {loading && (
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <RobotAvatar size={36} className="robot-thinking" style={{ filter:"drop-shadow(0 4px 8px rgba(6,182,212,0.4))" }} />
              <div style={{ background:"rgba(255,255,255,0.92)", border:"1px solid rgba(148,163,184,0.2)", padding:"12px 18px", borderRadius:"4px 18px 18px 18px", display:"flex", gap:5 }}>
                {[0,1,2].map(d=>(<div key={d} style={{ width:8, height:8, borderRadius:"50%", background:C.red, animation:`thinkDot 1.4s ${d*.22}s ease infinite` }}/>))}
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        <div style={{ borderTop:"1px solid rgba(148,163,184,0.2)", padding:14, display:"flex", gap:10 }}>
          <input value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=>e.key==="Enter"&&send()}
            placeholder="لێرە بە ئەڵمانی بنووسە… (نموونە: Ich heiße…)"
            style={{ flex:1, border:"1px solid rgba(148,163,184,0.3)", borderRadius:14, padding:"12px 16px", fontSize:15, outline:"none", background:"rgba(255,255,255,0.9)", color:C.ink, fontFamily:"inherit" }} />
          <button onClick={send} disabled={loading} style={{ background:loading?C.muted:"linear-gradient(135deg,#0ea5e9,#8b5cf6)", color:"#fff", border:"none", padding:"0 22px", borderRadius:14, fontWeight:700, fontSize:18, boxShadow:loading?"none":"0 4px 14px rgba(14,165,233,0.4)" }}>↑</button>
        </div>
      </div>
    </div>
  );
}
