// Audio helpers for the Das Spiel mini-games.
//
// 1) SOUND EFFECTS — intentionally empty for now. To add sounds later, drop the
//    files into /public/sfx/ and fill the paths below, e.g.
//      correct: "/sfx/correct.mp3"
//    Every game already calls sfx("<name>") at the right moments; an empty
//    path simply plays nothing.
// 2) SPEECH — German text-to-speech through the browser's speechSynthesis
//    (used by Hör-Diktat and Radio-Quiz until real recordings are added).
export const CLIPS = {
  correct: "", wrong: "", streak: "", win: "", lose: "", tick: "", plank: "", crack: "", found: "", radioOn: "",
};

export function sfx(name) {
  const url = CLIPS[name];
  if (!url) return;
  try { const a = new Audio(url); a.play().catch(() => {}); } catch { /* ignore */ }
}

export const canSpeak = () => typeof window !== "undefined" && "speechSynthesis" in window;

function pickVoice() {
  try {
    const vs = window.speechSynthesis.getVoices();
    return vs.find((v) => /^de[-_]/i.test(v.lang) && /google|anna|katja|marlene|vicki|female/i.test(v.name))
      || vs.find((v) => /^de/i.test(v.lang)) || null;
  } catch { return null; }
}

export function say(text, { rate = 0.9, onStart, onEnd } = {}) {
  if (!canSpeak() || !text) { onEnd && onEnd(); return false; }
  try {
    const s = window.speechSynthesis;
    s.cancel();
    const u = new SpeechSynthesisUtterance(String(text));
    u.lang = "de-DE";
    const v = pickVoice();
    if (v) u.voice = v;
    u.rate = rate;
    u.onstart = () => onStart && onStart();
    u.onend = u.onerror = () => onEnd && onEnd();
    s.speak(u);
    return true;
  } catch { onEnd && onEnd(); return false; }
}

export function stopSay() { try { window.speechSynthesis.cancel(); } catch { /* ignore */ } }
