// Optional level check shown from the onboarding level screen. 16 short German multiple-choice questions,
// asked level by level (A1 → C2). The test stops at the first level that is not passed.
import { useState } from "react";
import { Target, CheckCircle2, ChevronRight } from "lucide-react";

const LV = ["A1", "A2", "B1", "B2", "C1", "C2"];
const Q = [
  // A1
  { l: "A1", q: "Ich ___ Anna.", o: ["bin", "bist", "ist"], a: 0 },
  { l: "A1", q: "Wie ___ du?", o: ["heiße", "heißt", "heißen"], a: 1 },
  { l: "A1", q: "Ich komme ___ Syrien.", o: ["aus", "in", "nach"], a: 0 },
  // A2
  { l: "A2", q: "Gestern ___ ich ins Kino gegangen.", o: ["habe", "bin", "war"], a: 1 },
  { l: "A2", q: "Ich möchte ___ Kaffee.", o: ["ein", "eine", "einen"], a: 2 },
  { l: "A2", q: "Mir ___ kalt.", o: ["bin", "ist", "hat"], a: 1 },
  // B1
  { l: "B1", q: "Ich warte ___ den Bus.", o: ["für", "an", "auf"], a: 2 },
  { l: "B1", q: "Das Auto, ___ ich gekauft habe, ist rot.", o: ["der", "das", "dem"], a: 1 },
  { l: "B1", q: "Wenn ich mehr Zeit ___, würde ich reisen.", o: ["habe", "hatte", "hätte"], a: 2 },
  // B2
  { l: "B2", q: "Der Mann, ___ Auto gestohlen wurde, ruft die Polizei.", o: ["dem", "dessen", "das"], a: 1 },
  { l: "B2", q: "Er tut so, ___ er alles wüsste.", o: ["weil", "obwohl", "als ob"], a: 2 },
  { l: "B2", q: "Die Arbeit ___ bis morgen erledigt werden.", o: ["hat", "muss", "wird"], a: 1 },
  // C1
  { l: "C1", q: "Sie bestand ___ ihrer Meinung, obwohl alle widersprachen.", o: ["an", "bei", "auf"], a: 2 },
  { l: "C1", q: "Das Projekt ist ___ gescheitert, dass die Finanzierung fehlte.", o: ["dafür", "daran", "darauf"], a: 1 },
  // C2
  { l: "C2", q: "Der Minister sah sich ___, sein Amt niederzulegen.", o: ["gezwungen", "zwingend", "Zwang"], a: 0 },
  { l: "C2", q: "Er ___ keinen Hehl daraus, dass er die Entscheidung missbilligte.", o: ["tat", "machte", "gab"], a: 1 },
];

const T = {
  tr: { open: "Seviyemi test et", openSub: "İsteğe bağlı · yaklaşık 2 dakika", title: "Seviye tespiti", q: (a, b) => `Soru ${a} / ${b}`, idk: "Bilmiyorum", res: "Tahmini seviyen", none: "Tam başlangıç", use: "Bu seviyeyi kullan", retry: "Testi tekrarla", back: "Vazgeç", hint: "Bilmiyorsan tahmin etme, “Bilmiyorum”a bas.", sub: "Sonuç sadece başlangıç önerisidir; istediğin zaman değiştirebilirsin." },
  en: { open: "Test my level", openSub: "Optional · about 2 minutes", title: "Level check", q: (a, b) => `Question ${a} / ${b}`, idk: "I don't know", res: "Your estimated level", none: "Complete beginner", use: "Use this level", retry: "Retake the test", back: "Cancel", hint: "If you don't know, don't guess — tap “I don't know”.", sub: "The result is only a starting suggestion; you can change it any time." },
  ar: { open: "اختبر مستواي", openSub: "اختياري · حوالي دقيقتين", title: "تحديد المستوى", q: (a, b) => `السؤال ${a} / ${b}`, idk: "لا أعرف", res: "مستواك التقديري", none: "مبتدئ تمامًا", use: "استخدم هذا المستوى", retry: "أعد الاختبار", back: "إلغاء", hint: "إن لم تكن تعرف فلا تخمّن — اضغط «لا أعرف».", sub: "النتيجة مجرد اقتراح للبداية، ويمكنك تغييرها في أي وقت." },
  fa: { open: "سطح من را بسنج", openSub: "اختیاری · حدود ۲ دقیقه", title: "تعیین سطح", q: (a, b) => `سؤال ${a} / ${b}`, idk: "نمی‌دانم", res: "سطح تقریبی تو", none: "کاملاً مبتدی", use: "از این سطح استفاده کن", retry: "تکرار آزمون", back: "انصراف", hint: "اگر نمی‌دانی حدس نزن — «نمی‌دانم» را بزن.", sub: "نتیجه فقط یک پیشنهاد شروع است و هر زمان می‌توانی آن را عوض کنی." },
  es: { open: "Probar mi nivel", openSub: "Opcional · unos 2 minutos", title: "Prueba de nivel", q: (a, b) => `Pregunta ${a} / ${b}`, idk: "No lo sé", res: "Tu nivel estimado", none: "Principiante total", use: "Usar este nivel", retry: "Repetir la prueba", back: "Cancelar", hint: "Si no lo sabes, no adivines: toca «No lo sé».", sub: "El resultado es solo una sugerencia inicial; puedes cambiarlo cuando quieras." },
  uk: { open: "Перевірити мій рівень", openSub: "Необов’язково · близько 2 хвилин", title: "Визначення рівня", q: (a, b) => `Питання ${a} / ${b}`, idk: "Не знаю", res: "Твій орієнтовний рівень", none: "Повний початківець", use: "Використати цей рівень", retry: "Пройти ще раз", back: "Скасувати", hint: "Якщо не знаєш — не вгадуй, натисни «Не знаю».", sub: "Результат — лише порада для старту; його можна змінити будь-коли." },
  ku: { open: "ئاستەکەم تاقی بکەرەوە", openSub: "ئارەزوومەندانە · نزیکەی ٢ خولەک", title: "دیاریکردنی ئاست", q: (a, b) => `پرسیار ${a} / ${b}`, idk: "نازانم", res: "ئاستی مەزەندەکراوت", none: "سەرەتایی تەواو", use: "ئەم ئاستە بەکاربهێنە", retry: "تاقیکردنەوە دووبارە", back: "هەڵوەشاندنەوە", hint: "ئەگەر نازانیت پێشبینی مەکە — «نازانم» دابگرە.", sub: "ئەنجامەکە تەنها پێشنیارێکی دەستپێکە؛ هەر کاتێک دەتوانیت بیگۆڕیت." },
  kmj: { open: "Asta xwe biceribîne", openSub: "Bi dilxwazî · nêzîkî 2 deqe", title: "Diyarkirina asta", q: (a, b) => `Pirs ${a} / ${b}`, idk: "Nizanim", res: "Astaya te ya texmînî", none: "Destpêkera tam", use: "Vê astê bi kar bîne", retry: "Testê dubare bike", back: "Betal bike", hint: "Ger nizanî, texmîn neke — “Nizanim” bitikîne.", sub: "Encam tenê pêşniyareke destpêkê ye; tu dikarî her dem biguherînî." },
};
const text = (lang, kmj) => T[kmj ? "kmj" : lang] || T.en;
export const placementLabels = text;

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

export default function PlacementTest({ lang, kmj, dir, onUse, onCancel }) {
  const t = text(lang, kmj);
  const [i, setI] = useState(0);
  const [ans, setAns] = useState({});
  const [done, setDone] = useState(false);

  function pick(choice) {
    const next = { ...ans, [i]: choice };
    setAns(next);
    const cur = Q[i].l;
    const last = Q.map((q) => q.l).lastIndexOf(cur);
    if (i === last) {
      // level finished: continue only when it was passed
      const qs = Q.map((q, k) => [q, k]).filter(([q]) => q.l === cur);
      const ok = qs.filter(([q, k]) => next[k] === q.a).length;
      if (ok < Math.ceil(qs.length * 0.6) || i === Q.length - 1) { setAns(next); setDone(true); return; }
    }
    setI(i + 1);
  }

  if (done) {
    const r = result(ans);
    const level = r === "none" ? "none" : r === "C2" ? "C1" : r; // the onboarding list ends at C1
    return (
      <div dir={dir} style={{ textAlign: "center" }}>
        <div style={{ fontWeight: 800, fontSize: 22, color: "var(--ink)", marginBottom: 6 }}>{t.title}</div>
        <div style={{ fontSize: 14, color: "var(--muted)", marginBottom: 20 }}>{t.res}</div>
        <div style={{ width: 120, height: 120, borderRadius: "50%", margin: "0 auto 14px", display: "grid", placeItems: "center", color: "#fff", fontWeight: 900, fontSize: r === "none" ? 18 : 40,
          background: "linear-gradient(135deg,var(--acc-btn),var(--acc-dk))", boxShadow: "0 14px 30px color-mix(in srgb, var(--acc) 40%, transparent)" }}>
          {r === "none" ? "★" : r}
        </div>
        <div style={{ fontWeight: 800, fontSize: 18, color: "var(--ink)" }}>{r === "none" ? t.none : r}</div>
        <div style={{ fontSize: 12.5, color: "var(--muted)", margin: "12px auto 0", maxWidth: 320, lineHeight: 1.5 }}>{t.sub}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 24 }}>
          <button className="ob-btn" onClick={() => onUse(level)}
            style={{ padding: "15px 0", fontSize: 15, background: "linear-gradient(135deg,var(--acc-btn),var(--acc-dk))", color: "#fff" }}>{t.use}</button>
          <button className="ob-btn" onClick={() => { setAns({}); setI(0); setDone(false); }}
            style={{ padding: "15px 0", fontSize: 15, background: "var(--surface-hi)", color: "#3F3F46" }}>{t.retry}</button>
        </div>
      </div>
    );
  }

  const q = Q[i];
  const shown = i + 1;
  return (
    <div dir={dir}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 800, color: "var(--acc-tx)" }}><Target size={16} /> {t.title}</span>
        <span style={{ fontSize: 12.5, color: "var(--muted)", fontWeight: 700 }}>{t.q(shown, Q.length)}</span>
      </div>
      <div style={{ height: 6, borderRadius: 99, background: "#F0F0F0", overflow: "hidden", marginBottom: 22 }}>
        <div style={{ height: "100%", width: `${(i / Q.length) * 100}%`, background: "linear-gradient(90deg,var(--acc-btn),var(--acc-dk))", transition: "width .3s" }} />
      </div>
      <div style={{ textAlign: "center", marginBottom: 6 }}><span style={{ fontSize: 12, fontWeight: 800, color: "var(--muted)" }}>{q.l}</span></div>
      <div dir="ltr" style={{ fontSize: 22, fontWeight: 800, color: "var(--ink)", textAlign: "center", lineHeight: 1.35, margin: "0 0 22px" }}>{q.q}</div>
      <div dir="ltr" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {q.o.map((o, k) => (
          <button key={k} type="button" onClick={() => pick(k)}
            style={{ padding: "15px 16px", borderRadius: 16, border: "1.5px solid var(--line)", background: "#fff", fontSize: 17, fontWeight: 700, color: "var(--ink)", cursor: "pointer", fontFamily: "inherit" }}>{o}</button>
        ))}
        <button type="button" onClick={() => pick(-1)}
          style={{ padding: "12px 16px", borderRadius: 16, border: "1.5px dashed var(--line)", background: "transparent", fontSize: 14, fontWeight: 700, color: "var(--muted)", cursor: "pointer", fontFamily: "inherit" }}>{t.idk}</button>
      </div>
      <div style={{ fontSize: 12, color: "var(--muted)", textAlign: "center", marginTop: 16 }}>{t.hint}</div>
      <div style={{ textAlign: "center", marginTop: 16 }}>
        <button type="button" onClick={onCancel} style={{ background: "none", border: "none", color: "var(--muted)", fontSize: 13.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>{t.back}</button>
      </div>
    </div>
  );
}
