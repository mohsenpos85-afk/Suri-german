// "Continue where you left off": one small record per level, kept in localStorage and mirrored
// to the cloud by sync.js. Shape: { A1: { mode, story, boxes:{"mode|key":idx}, labels:{"mode|key":text}, ts }, ... }
export const RESUME_KEY = 'suri_resume_v1';

// Set by <Lessons> on every render so deeply nested pickers know which level/tab they live in.
export const RESUME_CTX = { level: null, mode: null };
// Set by the "continue" banner on the levels page; <Lessons> consumes it on mount.
export const RESUME_AUTO = { level: null };

function readAll() {
  try {
    const v = JSON.parse(localStorage.getItem(RESUME_KEY) || '{}');
    return v && typeof v === 'object' && !Array.isArray(v) ? v : {};
  } catch { return {}; }
}

export function resumeGet(level) {
  return level ? readAll()[level] || null : null;
}

export function resumeLast() {
  const all = readAll();
  let best = null;
  for (const id of Object.keys(all)) {
    const r = all[id];
    if (r && r.mode && (!best || (r.ts || 0) > (best.ts || 0))) best = { ...r, level: id };
  }
  return best;
}

export function resumeSave(level, patch) {
  if (!level) return;
  try {
    const all = readAll();
    const cur = all[level] || {};
    const next = { ...cur, ...patch, ts: Date.now() };
    if (patch.boxes) next.boxes = { ...(cur.boxes || {}), ...patch.boxes };
    if (patch.labels) next.labels = { ...(cur.labels || {}), ...patch.labels };
    all[level] = next;
    localStorage.setItem(RESUME_KEY, JSON.stringify(all));
  } catch { /* storage blocked: resuming is a convenience, never an error */ }
}

// Text such as "Fiiller › Temel Fiiller" for the open boxes of the saved tab.
export function resumeBoxText(r) {
  if (!r || !r.mode || !r.labels) return '';
  const pre = r.mode + '|';
  return Object.keys(r.labels).filter((k) => k.startsWith(pre) && r.labels[k]).map((k) => r.labels[k]).join(' › ');
}

// Cloud merge: per level, the more recently used record wins (progress numbers use "max", positions must not).
export function mergeResume(a, b) {
  const out = {};
  const A = a && typeof a === 'object' ? a : {};
  const B = b && typeof b === 'object' ? b : {};
  for (const k of new Set([...Object.keys(A), ...Object.keys(B)])) {
    const x = A[k], y = B[k];
    out[k] = !x ? y : !y ? x : (x.ts || 0) >= (y.ts || 0) ? x : y;
  }
  return out;
}
