// Optional level check shown from the onboarding level screen. 16 short German multiple-choice questions,
// asked level by level (A1 → C2). The test stops at the first level that is not passed.
import { useState } from "react";
import { Target, ChevronRight, ChevronLeft, Check, Clock, Sparkles, TrendingUp, LogIn } from "lucide-react";

const LV = ["A1", "A2", "B1", "B2", "C1", "C2"];
const Q = [
  // A1
  { l: "A1", q: "Ich ___ Anna.", o: ["bin", "bist", "ist"], a: 0 },
  { l: "A1", q: "Wie ___ du?", o: ["heiße", "heißt", "heißen"], a: 1 },
  { l: "A1", q: "Ich komme ___ Syrien.", o: ["aus", "in", "nach"], a: 0 },
  { l: "A1", q: "Ich habe zwei ___.", o: ["Bruder", "Brüder", "Brüdern"], a: 1 },
  // A2
  { l: "A2", q: "Gestern ___ ich ins Kino gegangen.", o: ["habe", "bin", "war"], a: 1 },
  { l: "A2", q: "Ich möchte ___ Kaffee.", o: ["ein", "eine", "einen"], a: 2 },
  { l: "A2", q: "Mir ___ kalt.", o: ["bin", "ist", "hat"], a: 1 },
  { l: "A2", q: "Ich bleibe zu Hause, ___ ich krank bin.", o: ["weil", "aber", "oder"], a: 0 },
  // B1
  { l: "B1", q: "Ich warte ___ den Bus.", o: ["für", "an", "auf"], a: 2 },
  { l: "B1", q: "Das Auto, ___ ich gekauft habe, ist rot.", o: ["der", "das", "dem"], a: 1 },
  { l: "B1", q: "Wenn ich mehr Zeit ___, würde ich reisen.", o: ["habe", "hatte", "hätte"], a: 2 },
  { l: "B1", q: "Ich interessiere mich ___ Musik.", o: ["an", "für", "auf"], a: 1 },
  // B2
  { l: "B2", q: "Der Mann, ___ Auto gestohlen wurde, ruft die Polizei.", o: ["dem", "dessen", "das"], a: 1 },
  { l: "B2", q: "Er tut so, ___ er alles wüsste.", o: ["weil", "obwohl", "als ob"], a: 2 },
  { l: "B2", q: "Die Arbeit ___ bis morgen erledigt werden.", o: ["hat", "muss", "wird"], a: 1 },
  { l: "B2", q: "Das Gesetz wurde vom Parlament ___.", o: ["verabschieden", "verabschiedet", "verabschiedete"], a: 1 },
  // C1
  { l: "C1", q: "Sie bestand ___ ihrer Meinung, obwohl alle widersprachen.", o: ["an", "bei", "auf"], a: 2 },
  { l: "C1", q: "Das Projekt ist ___ gescheitert, dass die Finanzierung fehlte.", o: ["dafür", "daran", "darauf"], a: 1 },
  { l: "C1", q: "Ungeachtet ___ Warnungen fuhr er weiter.", o: ["den", "dem", "der"], a: 2 },
  { l: "C1", q: "Die Verhandlungen scheiterten ___ der Uneinigkeit der Parteien.", o: ["durch", "an", "von"], a: 1 },
  // C2
  { l: "C2", q: "Der Minister sah sich ___, sein Amt niederzulegen.", o: ["gezwungen", "zwingend", "Zwang"], a: 0 },
  { l: "C2", q: "Er ___ keinen Hehl daraus, dass er die Entscheidung missbilligte.", o: ["tat", "machte", "gab"], a: 1 },
  { l: "C2", q: "Sie legte ihm nahe, von dem Vorhaben ___ zu nehmen.", o: ["Abstand", "Abschied", "Rücksicht"], a: 0 },
  { l: "C2", q: "Er ließ sich nicht ___ Bockshorn jagen.", o: ["im", "ins", "zum"], a: 1 },
];

const T = {
  tr: { open: "Seviyemi test et", openSub: "İsteğe bağlı · yaklaşık 3 dakika", title: "Seviye tespiti", q: (a, b) => `Soru ${a} / ${b}`, idk: "Bilmiyorum", res: "Tahmini seviyen", none: "Tam başlangıç", use: "Bu seviyeyle başla", retry: "Testi tekrarla", back: "Vazgeç", prev: "Geri", hint: "Bilmiyorsan tahmin etme, “Bilmiyorum”a bas.", sub: "Sonuç sadece başlangıç önerisidir; istediğin zaman değiştirebilirsin.",
    introTitle: "Seviyeni birlikte bulalım", introSub: "Kısa sorularla Almanca seviyeni tespit edelim; sana en uygun yerden başla.", p1: "Yaklaşık 3 dakika", p2: "Not yok, baskı yok", p3: "Zorlaşınca test kendiliğinden durur", start: "Teste başla", score: (n, m) => `${m} sorudan ${n} doğru`, rec: "Önerilen",
    choiceTitle: "Nasıl devam etmek istersin?", choiceSub: "İstediğin zaman seviyeni değiştirebilirsin.", testT: "Seviye tespiti", testS: "Kısa bir testle sana uygun seviyeyi bulalım.", directT: "Direkt giriş", directS: "Soruları atla, doğrudan hesabına gir." },
  en: { open: "Test my level", openSub: "Optional · about 3 minutes", title: "Level check", q: (a, b) => `Question ${a} / ${b}`, idk: "I don't know", res: "Your estimated level", none: "Complete beginner", use: "Start with this level", retry: "Retake the test", back: "Cancel", prev: "Back", hint: "If you don't know, don't guess — tap “I don't know”.", sub: "The result is only a starting suggestion; you can change it any time.",
    introTitle: "Let's find your level", introSub: "A few short questions will place you in German — so you start exactly where it fits.", p1: "About 3 minutes", p2: "No grades, no pressure", p3: "Stops by itself when it gets hard", start: "Start the test", score: (n, m) => `${n} of ${m} correct`, rec: "Recommended",
    choiceTitle: "How would you like to continue?", choiceSub: "You can change your level any time.", testT: "Level check", testS: "A short test to find the level that fits you.", directT: "Go straight in", directS: "Skip the questions and sign in right away." },
  ar: { open: "اختبر مستواي", openSub: "اختياري · حوالي 3 دقائق", title: "تحديد المستوى", q: (a, b) => `السؤال ${a} / ${b}`, idk: "لا أعرف", res: "مستواك التقديري", none: "مبتدئ تمامًا", use: "ابدأ بهذا المستوى", retry: "أعد الاختبار", back: "إلغاء", prev: "رجوع", hint: "إن لم تكن تعرف فلا تخمّن — اضغط «لا أعرف».", sub: "النتيجة مجرد اقتراح للبداية، ويمكنك تغييرها في أي وقت.",
    introTitle: "لنجد مستواك معًا", introSub: "بضعة أسئلة قصيرة تحدّد مستواك في الألمانية لتبدأ من المكان المناسب.", p1: "حوالي 3 دقائق", p2: "بلا درجات وبلا ضغط", p3: "يتوقف الاختبار تلقائيًا عندما يصبح صعبًا", start: "ابدأ الاختبار", score: (n, m) => `${n} من ${m} صحيحة`, rec: "موصى به",
    choiceTitle: "كيف تريد المتابعة؟", choiceSub: "يمكنك تغيير مستواك في أي وقت.", testT: "تحديد المستوى", testS: "اختبار قصير لنجد المستوى المناسب لك.", directT: "دخول مباشر", directS: "تخطَّ الأسئلة وسجّل دخولك مباشرة." },
  fa: { open: "سطح من را بسنج", openSub: "اختیاری · حدود ۳ دقیقه", title: "تعیین سطح", q: (a, b) => `سؤال ${a} / ${b}`, idk: "نمی‌دانم", res: "سطح تقریبی تو", none: "کاملاً مبتدی", use: "با این سطح شروع کن", retry: "تکرار آزمون", back: "انصراف", prev: "بازگشت", hint: "اگر نمی‌دانی حدس نزن — «نمی‌دانم» را بزن.", sub: "نتیجه فقط یک پیشنهاد شروع است و هر زمان می‌توانی آن را عوض کنی.",
    introTitle: "با هم سطحت را پیدا کنیم", introSub: "چند پرسش کوتاه سطح آلمانی‌ات را مشخص می‌کند تا از جای درست شروع کنی.", p1: "حدود ۳ دقیقه", p2: "بدون نمره و بدون فشار", p3: "وقتی سخت شود آزمون خودکار تمام می‌شود", start: "شروع آزمون", score: (n, m) => `${n} از ${m} درست`, rec: "پیشنهادی",
    choiceTitle: "چطور ادامه بدهیم؟", choiceSub: "هر زمان می‌توانی سطحت را عوض کنی.", testT: "تعیین سطح", testS: "یک آزمون کوتاه برای پیدا کردن سطح مناسب تو.", directT: "ورود مستقیم", directS: "پرسش‌ها را رد کن و مستقیم وارد شو." },
  es: { open: "Probar mi nivel", openSub: "Opcional · unos 3 minutos", title: "Prueba de nivel", q: (a, b) => `Pregunta ${a} / ${b}`, idk: "No lo sé", res: "Tu nivel estimado", none: "Principiante total", use: "Empezar con este nivel", retry: "Repetir la prueba", back: "Cancelar", prev: "Atrás", hint: "Si no lo sabes, no adivines: toca «No lo sé».", sub: "El resultado es solo una sugerencia inicial; puedes cambiarlo cuando quieras.",
    introTitle: "Encontremos tu nivel", introSub: "Unas preguntas cortas sitúan tu alemán para que empieces justo donde corresponde.", p1: "Unos 3 minutos", p2: "Sin notas, sin presión", p3: "Se detiene sola cuando se pone difícil", start: "Empezar la prueba", score: (n, m) => `${n} de ${m} correctas`, rec: "Recomendado",
    choiceTitle: "¿Cómo quieres continuar?", choiceSub: "Puedes cambiar tu nivel cuando quieras.", testT: "Prueba de nivel", testS: "Una prueba corta para encontrar tu nivel.", directT: "Entrar directamente", directS: "Salta las preguntas e inicia sesión ya." },
  uk: { open: "Перевірити мій рівень", openSub: "Необов’язково · близько 3 хвилин", title: "Визначення рівня", q: (a, b) => `Питання ${a} / ${b}`, idk: "Не знаю", res: "Твій орієнтовний рівень", none: "Повний початківець", use: "Почати з цього рівня", retry: "Пройти ще раз", back: "Скасувати", prev: "Назад", hint: "Якщо не знаєш — не вгадуй, натисни «Не знаю».", sub: "Результат — лише порада для старту; його можна змінити будь-коли.",
    introTitle: "Знайдімо твій рівень", introSub: "Кілька коротких запитань визначать твій рівень німецької, щоб ти почав саме з того місця.", p1: "Близько 3 хвилин", p2: "Без оцінок і тиску", p3: "Тест сам зупиниться, коли стане складно", start: "Почати тест", score: (n, m) => `${n} з ${m} правильно`, rec: "Рекомендовано",
    choiceTitle: "Як ти хочеш продовжити?", choiceSub: "Рівень можна змінити будь-коли.", testT: "Визначення рівня", testS: "Короткий тест, щоб знайти твій рівень.", directT: "Одразу увійти", directS: "Пропусти запитання й увійди відразу." },
  ku: { open: "ئاستەکەم تاقی بکەرەوە", openSub: "ئارەزوومەندانە · نزیکەی ٣ خولەک", title: "دیاریکردنی ئاست", q: (a, b) => `پرسیار ${a} / ${b}`, idk: "نازانم", res: "ئاستی مەزەندەکراوت", none: "سەرەتایی تەواو", use: "بەم ئاستە دەست پێبکە", retry: "تاقیکردنەوە دووبارە", back: "هەڵوەشاندنەوە", prev: "گەڕانەوە", hint: "ئەگەر نازانیت پێشبینی مەکە — «نازانم» دابگرە.", sub: "ئەنجامەکە تەنها پێشنیارێکی دەستپێکە؛ هەر کاتێک دەتوانیت بیگۆڕیت.",
    introTitle: "با ئاستەکەت پێکەوە بدۆزینەوە", introSub: "چەند پرسیارێکی کورت ئاستی ئەڵمانیت دیاری دەکات تا لە شوێنی گونجاوەوە دەست پێبکەیت.", p1: "نزیکەی ٣ خولەک", p2: "بێ نمرە و بێ پەستان", p3: "کاتێک قورس دەبێت تاقیکردنەوەکە خۆی دەوەستێت", start: "دەستپێکردنی تاقیکردنەوە", score: (n, m) => `${n} لە ${m} ڕاست`, rec: "پێشنیارکراو",
    choiceTitle: "چۆن دەتەوێت بەردەوام بیت؟", choiceSub: "هەر کاتێک دەتوانیت ئاستەکەت بگۆڕیت.", testT: "دیاریکردنی ئاست", testS: "تاقیکردنەوەیەکی کورت بۆ دۆزینەوەی ئاستی گونجاو.", directT: "چوونەژوورەوەی ڕاستەوخۆ", directS: "پرسیارەکان بپەڕێنە و ڕاستەوخۆ بچۆ ژوورەوە." },
  kmj: { open: "Asta xwe biceribîne", openSub: "Bi dilxwazî · nêzîkî 3 deqe", title: "Diyarkirina asta", q: (a, b) => `Pirs ${a} / ${b}`, idk: "Nizanim", res: "Astaya te ya texmînî", none: "Destpêkera tam", use: "Bi vê astê dest pê bike", retry: "Testê dubare bike", back: "Betal bike", prev: "Vegere", hint: "Ger nizanî, texmîn neke — “Nizanim” bitikîne.", sub: "Encam tenê pêşniyareke destpêkê ye; tu dikarî her dem biguherînî.",
    introTitle: "Em astaya te bi hev re bibînin", introSub: "Çend pirsên kurt astaya te ya Almanî diyar dikin da tu ji cihê rast dest pê bikî.", p1: "Nêzîkî 3 deqe", p2: "Bê nimre, bê zextê", p3: "Gava dijwar bibe test bi xwe disekine", start: "Testê dest pê bike", score: (n, m) => `${n} ji ${m} rast`, rec: "Tê pêşniyarkirin",
    choiceTitle: "Tu dixwazî çawa bidomînî?", choiceSub: "Tu dikarî her dem astaya xwe biguherînî.", testT: "Diyarkirina asta", testS: "Testeke kurt ji bo dîtina astaya guncav.", directT: "Rasterast têkeve", directS: "Pirsan derbas bike û rasterast têkeve." },
};

const text = (lang, kmj) => T[kmj ? "kmj" : lang] || T.en;
export const placementLabels = text;
export const LEVEL_COLORS = { A1: "#659DB8", A2: "#569F95", B1: "#547CB6", B2: "#8877B5", C1: "#BD8D52", C2: "#9A657F" };

/** Highest passed level, or "none" when A1 was not passed. */
function result(answers) {
  let reached = "none";
  for (const lv of LV) {
    const qs = Q.map((q, i) => [q, i]).filter(([q]) => q.l === lv);
    const ok = qs.filter(([q, i]) => answers[i] === q.a).length;
    if (ok >= Math.ceil(qs.length * 0.6)) reached = lv; else break;
  }
  return reached;
}
const mix = (c, a) => `color-mix(in srgb, ${c} ${a}%, transparent)`;

/** Choice screen shown right after the language page: level check or straight in. */
export function ChoiceScreen({ lang, kmj, dir, onTest, onDirect }) {
  const t = text(lang, kmj);
  const ar = dir === "rtl";
  return (
    <div dir={dir} className="pt-wrap" style={{ textAlign: "center" }}>
      <style>{CSS}</style>
      <img src="/fuxi-mascot.png" alt="" style={{ width: 118, height: 118, objectFit: "contain", filter: "drop-shadow(0 16px 30px rgba(255,140,0,.35))", margin: "6px auto 12px", display: "block", animation: "pt-float 3.2s ease-in-out infinite" }} />
      <div style={{ fontWeight: 900, fontSize: 25, color: "var(--ink)", lineHeight: 1.25, marginBottom: 6 }}>{t.choiceTitle}</div>
      <div style={{ fontSize: 14, color: "var(--muted)", marginBottom: 24 }}>{t.choiceSub}</div>

      <button type="button" className="pt-opt pt-opt-main" onClick={onTest} style={{ textAlign: ar ? "right" : "left" }}>
        <span className="pt-opt-badge">{t.rec}</span>
        <span className="pt-opt-ic"><Target size={26} /></span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span className="pt-opt-t">{t.testT}</span>
          <span className="pt-opt-s">{t.testS}</span>
          <span className="pt-chips" dir="ltr">{LV.map((l) => <i key={l} style={{ background: LEVEL_COLORS[l] }}>{l}</i>)}</span>
        </span>
        <ChevronRight size={22} className="pt-opt-go" style={{ transform: ar ? "scaleX(-1)" : "none" }} />
      </button>

      <button type="button" className="pt-opt" onClick={onDirect} style={{ textAlign: ar ? "right" : "left" }}>
        <span className="pt-opt-ic pt-opt-ic-soft"><LogIn size={24} /></span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span className="pt-opt-t" style={{ color: "var(--ink)" }}>{t.directT}</span>
          <span className="pt-opt-s" style={{ color: "var(--muted)" }}>{t.directS}</span>
        </span>
        <ChevronRight size={22} style={{ color: "var(--muted)", transform: ar ? "scaleX(-1)" : "none" }} />
      </button>
    </div>
  );
}

export default function PlacementTest({ lang, kmj, dir, levelText, onUse, onCancel }) {
  const t = text(lang, kmj);
  const [started, setStarted] = useState(false);
  const [i, setI] = useState(0);
  const [ans, setAns] = useState({});
  const [picked, setPicked] = useState(null);
  const [done, setDone] = useState(false);
  const ar = dir === "rtl";

  function advance(next, k) {
    const cur = Q[k].l;
    const last = Q.map((q) => q.l).lastIndexOf(cur);
    if (k === last) {
      const qs = Q.map((q, n) => [q, n]).filter(([q]) => q.l === cur);
      const ok = qs.filter(([q, n]) => next[n] === q.a).length;
      if (ok < Math.ceil(qs.length * 0.6) || k === Q.length - 1) { setDone(true); return; }
    }
    setI(k + 1);
  }
  function pick(choice) {
    if (picked !== null) return;
    setPicked(choice);
    const next = { ...ans, [i]: choice };
    setAns(next);
    setTimeout(() => { setPicked(null); advance(next, i); }, 220);
  }
  function restart() { setAns({}); setI(0); setDone(false); setPicked(null); setStarted(true); }

  const shell = (children) => <div dir={dir} className="pt-wrap"><style>{CSS}</style>{children}</div>;

  // ── intro ──
  if (!started) {
    return shell(
      <div style={{ textAlign: "center" }}>
        <div className="pt-hero"><img src="/fuxi-mascot.png" alt="" /></div>
        <div style={{ fontWeight: 900, fontSize: 26, color: "var(--ink)", lineHeight: 1.25, margin: "14px 0 8px" }}>{t.introTitle}</div>
        <div style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.55, maxWidth: 330, margin: "0 auto 22px" }}>{t.introSub}</div>
        <div className="pt-pts">
          {[[Clock, t.p1], [Sparkles, t.p2], [TrendingUp, t.p3]].map(([Ic, tx], k) => (
            <div key={k} className="pt-pt" style={{ textAlign: ar ? "right" : "left" }}><span><Ic size={18} /></span>{tx}</div>
          ))}
        </div>
        <button className="ob-btn pt-cta" onClick={() => setStarted(true)}>{t.start}</button>
        <button type="button" className="pt-link" onClick={onCancel}>{t.back}</button>
      </div>
    );
  }

  // ── result ──
  if (done) {
    const r = result(ans);
    const level = r === "none" ? "none" : r === "C2" ? "C1" : r; // the onboarding list ends at C1
    const correct = Object.entries(ans).filter(([k, v]) => Q[k].a === v).length;
    const asked = Object.keys(ans).length;
    const lt = levelText(r === "none" ? "none" : r);
    const col = r === "none" ? "#8A94A6" : LEVEL_COLORS[r];
    const reachedIdx = r === "none" ? -1 : LV.indexOf(r);
    return shell(
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: "var(--muted)", letterSpacing: ".04em", marginBottom: 14 }}>{t.res}</div>
        <div className="pt-medal" style={{ background: `linear-gradient(145deg, color-mix(in srgb, ${col} 70%, #fff), ${col} 55%, color-mix(in srgb, ${col} 70%, #0b1a24))`, boxShadow: `0 20px 44px -10px ${mix(col, 60)}, inset 1px 2px 0 rgba(255,255,255,.5), inset -3px -5px 10px rgba(0,0,0,.16)` }}>
          <span style={{ fontSize: r === "none" ? 40 : 54 }}>{r === "none" ? "★" : r}</span>
        </div>
        <div style={{ fontWeight: 900, fontSize: 21, color: "var(--ink)", marginTop: 18 }}>{lt.label}</div>
        <div style={{ fontSize: 13.5, color: "var(--muted)", marginTop: 4 }}>{lt.sub}</div>
        <div className="pt-pyr" dir="ltr">
          {[...LV].reverse().map((l, k) => {
            const idx = LV.indexOf(l); const on = idx <= reachedIdx; const cur = idx === reachedIdx;
            return (
              <div key={l} className={`pt-bar${on ? " on" : ""}${cur ? " cur" : ""}`}
                style={{ width: `${46 + k * 10}%`, background: on ? `linear-gradient(90deg, ${LEVEL_COLORS[l]}, color-mix(in srgb, ${LEVEL_COLORS[l]} 78%, #fff))` : "var(--surface-hi, #EEF1F4)", color: on ? "#fff" : "#9AA5B4", animationDelay: `${(5 - idx) * 70}ms` }}>{l}</div>
            );
          })}
        </div>
        <div style={{ fontSize: 13, fontWeight: 800, color: "var(--ink)", marginTop: 16 }}>{t.score(correct, asked)}</div>
        <div style={{ fontSize: 12.5, color: "var(--muted)", margin: "8px auto 0", maxWidth: 320, lineHeight: 1.5 }}>{t.sub}</div>
        <button className="ob-btn pt-cta" style={{ marginTop: 24, background: `linear-gradient(135deg, ${col}, color-mix(in srgb, ${col} 72%, #0b1a24))` }} onClick={() => onUse(level)}>{t.use}</button>
        <button type="button" className="pt-link" onClick={restart}>{t.retry}</button>
      </div>
    );
  }

  // ── question ──
  const q = Q[i];
  const col = LEVEL_COLORS[q.l];
  const curLv = LV.indexOf(q.l);
  return shell(
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <button type="button" className="pt-back" onClick={() => (i > 0 ? (setPicked(null), setI(i - 1)) : onCancel())} aria-label={t.prev}><ChevronLeft size={20} style={{ transform: ar ? "scaleX(-1)" : "none" }} /></button>
        <span style={{ fontSize: 12.5, color: "var(--muted)", fontWeight: 800 }}>{t.q(i + 1, Q.length)}</span>
        <span style={{ width: 36 }} />
      </div>
      <div className="pt-steps" dir="ltr">
        {LV.map((l, k) => (
          <span key={l} className={k < curLv ? "done" : k === curLv ? "cur" : ""} style={{ "--c": LEVEL_COLORS[l] }}>
            {k < curLv ? <Check size={13} strokeWidth={3} /> : l}
          </span>
        ))}
      </div>
      <div key={i} className="pt-card" style={{ "--c": col }}>
        <span className="pt-lv" style={{ background: mix(col, 16), color: col }}>{q.l}</span>
        <div dir="ltr" className="pt-q">{q.q}</div>
        <div dir="ltr" className="pt-opts">
          {q.o.map((o, k) => (
            <button key={k} type="button" className={`pt-o${picked === k ? " sel" : ""}`} onClick={() => pick(k)} style={{ "--c": col }}>
              <b>{"ABC"[k]}</b><span>{o}</span>
            </button>
          ))}
        </div>
        <button type="button" className={`pt-idk${picked === -1 ? " sel" : ""}`} onClick={() => pick(-1)}>{t.idk}</button>
      </div>
      <div style={{ fontSize: 12, color: "var(--muted)", textAlign: "center", marginTop: 14 }}>{t.hint}</div>
      <div style={{ textAlign: "center", marginTop: 10 }}><button type="button" className="pt-link" onClick={onCancel}>{t.back}</button></div>
    </div>
  );
}

const CSS = `
.pt-wrap { font-family: 'Vazirmatn', sans-serif; }
@keyframes pt-in { from { opacity: 0; transform: translateY(14px) scale(.98); } to { opacity: 1; transform: none; } }
@keyframes pt-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
@keyframes pt-grow { from { opacity: 0; transform: scaleX(.3); } to { opacity: 1; transform: none; } }
@keyframes pt-pop { 0% { opacity: 0; transform: scale(.6); } 70% { transform: scale(1.06); } 100% { opacity: 1; transform: none; } }
.pt-hero { width: 150px; height: 150px; margin: 10px auto 0; border-radius: 50%; display: grid; place-items: center; background: radial-gradient(circle, rgba(255,160,40,.22), rgba(255,160,40,0) 70%); animation: pt-pop .5s both; }
.pt-hero img { width: 124px; height: 124px; object-fit: contain; filter: drop-shadow(0 14px 26px rgba(255,140,0,.35)); animation: pt-float 3.2s ease-in-out infinite; }
.pt-pts { display: flex; flex-direction: column; gap: 10px; margin: 0 auto 26px; max-width: 340px; }
.pt-pt { display: flex; align-items: center; gap: 12px; padding: 11px 14px; border-radius: 16px; background: #F6F8FA; font-size: 14px; font-weight: 700; color: var(--ink); }
.pt-pt span { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 11px; background: #fff; color: var(--acc-tx); box-shadow: 0 2px 8px rgba(22,40,58,.1); flex-shrink: 0; }
.pt-cta { width: 100%; padding: 16px; font-size: 16px; color: #fff; border-radius: 16px; background: linear-gradient(135deg, var(--acc-btn), var(--acc-dk)); box-shadow: 0 12px 26px -8px rgba(22,40,58,.4); }
.pt-link { display: block; margin: 14px auto 0; background: none; border: none; color: var(--muted); font: inherit; font-size: 13.5px; font-weight: 700; cursor: pointer; }
.pt-back { width: 36px; height: 36px; border-radius: 12px; border: none; background: #F2F4F7; color: var(--ink); display: grid; place-items: center; cursor: pointer; }
.pt-steps { display: flex; gap: 6px; margin-bottom: 18px; }
.pt-steps span { flex: 1; height: 30px; border-radius: 10px; display: grid; place-items: center; font-size: 11.5px; font-weight: 800; background: #F0F2F5; color: #9AA5B4; transition: all .3s; }
.pt-steps span.cur { background: var(--c); color: #fff; box-shadow: 0 6px 14px -4px var(--c); transform: translateY(-2px); }
.pt-steps span.done { background: color-mix(in srgb, var(--c) 22%, #fff); color: var(--c); }
.pt-card { position: relative; padding: 20px 16px 16px; border-radius: 26px; background: #fff; border: 1.5px solid #E6EAEF; box-shadow: 0 18px 40px -22px rgba(22,40,58,.35); animation: pt-in .3s cubic-bezier(.22,1,.36,1) both; overflow: hidden; }
.pt-card::before { content: ""; position: absolute; inset: 0 0 auto 0; height: 5px; background: var(--c); }
.pt-lv { display: inline-block; padding: 3px 11px; border-radius: 99px; font-size: 12px; font-weight: 900; }
.pt-q { font-size: 22px; font-weight: 900; color: var(--ink); line-height: 1.4; margin: 12px 0 18px; text-align: center; }
.pt-opts { display: flex; flex-direction: column; gap: 10px; }
.pt-o { display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 16px; border: 1.5px solid #E6EAEF; background: #fff; font: inherit; font-size: 17px; font-weight: 800; color: var(--ink); cursor: pointer; text-align: left; transition: transform .12s, border-color .15s, background .15s; }
.pt-o b { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 10px; background: #F2F4F7; color: #7B8798; font-size: 13px; flex-shrink: 0; }
.pt-o:hover { border-color: var(--c); }
.pt-o:active, .pt-o.sel { transform: scale(.98); border-color: var(--c); background: color-mix(in srgb, var(--c) 10%, #fff); }
.pt-o.sel b { background: var(--c); color: #fff; }
.pt-idk { width: 100%; margin-top: 12px; padding: 11px; border-radius: 14px; border: 1.5px dashed #D5DBE3; background: transparent; font: inherit; font-size: 14px; font-weight: 700; color: var(--muted); cursor: pointer; }
.pt-idk.sel { background: #F2F4F7; }
.pt-medal { width: 150px; height: 150px; border-radius: 50%; margin: 0 auto; display: grid; place-items: center; color: #fff; font-weight: 900; animation: pt-pop .6s cubic-bezier(.22,1,.36,1) both; text-shadow: 0 3px 8px rgba(0,0,0,.2); }
.pt-pyr { display: flex; flex-direction: column; align-items: center; gap: 5px; margin: 22px auto 0; max-width: 300px; }
.pt-bar { height: 28px; border-radius: 9px; display: grid; place-items: center; font-size: 12px; font-weight: 900; animation: pt-grow .5s both; }
.pt-bar.cur { box-shadow: 0 0 0 3px #fff, 0 0 0 5px currentColor; }
.pt-opt { position: relative; display: flex; align-items: center; gap: 14px; width: 100%; padding: 18px 16px; margin-bottom: 14px; border-radius: 24px; border: 1.5px solid #E6EAEF; background: #fff; font: inherit; cursor: pointer; box-shadow: 0 10px 26px -16px rgba(22,40,58,.35); transition: transform .15s, box-shadow .15s; }
.pt-opt:hover { transform: translateY(-2px); }
.pt-opt:active { transform: scale(.985); }
.pt-opt-main { border: none; color: #fff; background: linear-gradient(140deg, var(--acc-btn), var(--acc-dk)); box-shadow: 0 18px 36px -14px rgba(22,40,58,.55), inset 1px 1px 0 rgba(255,255,255,.3); }
.pt-opt-badge { position: absolute; top: -10px; inset-inline-end: 16px; padding: 3px 11px; border-radius: 99px; background: #FFB020; color: #3b2a00; font-size: 11.5px; font-weight: 900; box-shadow: 0 6px 14px -4px rgba(255,176,32,.7); }
.pt-opt-ic { display: grid; place-items: center; width: 54px; height: 54px; border-radius: 18px; background: rgba(255,255,255,.2); box-shadow: inset 1px 1px 0 rgba(255,255,255,.4), inset -1px -2px 3px rgba(0,0,0,.15); flex-shrink: 0; }
.pt-opt-ic-soft { background: #F2F4F7; color: var(--acc-tx); box-shadow: none; }
.pt-opt-t { display: block; font-size: 17px; font-weight: 900; color: #fff; }
.pt-opt-s { display: block; margin-top: 3px; font-size: 13px; line-height: 1.4; color: rgba(255,255,255,.88); }
.pt-chips { display: flex; gap: 4px; margin-top: 9px; }
.pt-chips i { font-style: normal; font-size: 10.5px; font-weight: 900; color: #fff; padding: 2px 7px; border-radius: 99px; box-shadow: inset 0 0 0 1.5px rgba(255,255,255,.55); }
@media (prefers-reduced-motion: reduce) { .pt-wrap *, .pt-hero img { animation: none !important; } }
`;
