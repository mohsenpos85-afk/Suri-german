// Cloud sync for learning progress.
//
// The app keeps everything in localStorage (fast, works offline). This module
// mirrors a fixed set of keys into one `user_state` row per signed-in user, so
// progress survives a new phone or cleared browser data.
//
// Conflict rule: merge, never overwrite. Numbers take the max, lists are
// unioned, dates take the latest, objects merge key by key. So progress can
// only move forward, no matter which device synced last.

export const SYNC_KEYS = [
  'fuxi_progress', 'fuxi_streak', 'fuxi_xp', 'fuxi_journey', 'fuxi_journey_done',
  'fuxi_pending_key', 'fuxi_cards', 'fuxi_favs', 'fuxi_srs',
];

const DATE_RE = /^\d{4}-\d{2}-\d{2}/;
const isObj = (v) => v && typeof v === 'object' && !Array.isArray(v);

export function mergeValue(a, b) {
  if (a === undefined || a === null) return b === undefined ? null : b;
  if (b === undefined || b === null) return a;
  if (typeof a === 'number' && typeof b === 'number') return Math.max(a, b);
  if (typeof a === 'boolean' && typeof b === 'boolean') return a || b;
  if (typeof a === 'string' && typeof b === 'string') {
    if (DATE_RE.test(a) && DATE_RE.test(b)) return a >= b ? a : b;
    return a || b;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    const seen = new Set();
    const out = [];
    for (const item of [...a, ...b]) {
      const k = JSON.stringify(item);
      if (!seen.has(k)) { seen.add(k); out.push(item); }
    }
    return out;
  }
  if (isObj(a) && isObj(b)) {
    const out = {};
    for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) out[k] = mergeValue(a[k], b[k]);
    return out;
  }
  return a; // incompatible shapes: keep local
}

// A pending key is only valid while the journey is still at its target level.
function mergePendingKey(local, remote, mergedJourney) {
  const cands = [local, remote].filter((k) => k && Number.isFinite(k.toLevelId));
  return cands.find((k) => k.toLevelId === mergedJourney) || null;
}

export function mergeStates(local, remote) {
  const out = {};
  for (const k of SYNC_KEYS) {
    if (k === 'fuxi_pending_key') continue;
    const v = mergeValue(local[k], remote ? remote[k] : undefined);
    if (v !== null && v !== undefined) out[k] = v;
  }
  const j = Number(out.fuxi_journey) || 1;
  const pk = mergePendingKey(local.fuxi_pending_key, remote ? remote.fuxi_pending_key : null, j);
  if (pk) out.fuxi_pending_key = pk;
  return out;
}

function readLocal() {
  const out = {};
  for (const k of SYNC_KEYS) {
    try {
      const raw = localStorage.getItem(k);
      if (raw !== null) out[k] = JSON.parse(raw);
    } catch { /* unparsable value: skip */ }
  }
  return out;
}

function writeLocal(state) {
  let changed = false;
  for (const k of SYNC_KEYS) {
    try {
      const cur = localStorage.getItem(k);
      if (k in state) {
        // Numbers (fuxi_journey, fuxi_xp) are stored as bare digits, which JSON.stringify also produces.
        const next = JSON.stringify(state[k]);
        if (cur !== next) { localStorage.setItem(k, next); changed = true; }
      } else if (k === 'fuxi_pending_key' && cur !== null) {
        localStorage.removeItem(k); changed = true; // a stale key card that was already used elsewhere
      }
    } catch { /* storage blocked */ }
  }
  return changed;
}

let timer = null;
let lastPushed = '';
let running = false;

// Pulls remote state, merges it into localStorage and pushes the result.
// Returns true when local data changed (the UI should reload to pick it up).
export async function syncNow(supabase, userId) {
  const local = readLocal();
  const { data, error } = await supabase.from('user_state').select('data').eq('user_id', userId).maybeSingle();
  if (error) throw error;
  const merged = mergeStates(local, data ? data.data : null);
  const changed = writeLocal(merged);
  const payload = JSON.stringify(merged);
  if (payload !== lastPushed) {
    const { error: upErr } = await supabase.from('user_state').upsert({ user_id: userId, data: merged, updated_at: new Date().toISOString() });
    if (upErr) throw upErr;
    lastPushed = payload;
  }
  return changed;
}

async function pushIfChanged(supabase, userId) {
  const local = readLocal();
  const payload = JSON.stringify(local);
  if (payload === lastPushed) return;
  const { error } = await supabase.from('user_state').upsert({ user_id: userId, data: local, updated_at: new Date().toISOString() });
  if (!error) lastPushed = payload;
}

// Starts syncing for a signed-in user. Safe to call repeatedly.
// onRemoteChange is called once when the first pull changed local data.
export function startSync(supabase, userId, onRemoteChange) {
  if (running) return stopSync;
  running = true;
  syncNow(supabase, userId)
    .then((changed) => { if (changed && onRemoteChange) onRemoteChange(); })
    .catch(() => { /* offline or table missing: the app keeps working locally */ });
  timer = setInterval(() => { pushIfChanged(supabase, userId).catch(() => {}); }, 20000);
  const flush = () => { if (document.visibilityState === 'hidden') pushIfChanged(supabase, userId).catch(() => {}); };
  document.addEventListener('visibilitychange', flush);
  stopSync.flush = flush;
  return stopSync;
}

export function stopSync() {
  running = false;
  lastPushed = '';
  if (timer) clearInterval(timer);
  timer = null;
  if (stopSync.flush) document.removeEventListener('visibilitychange', stopSync.flush);
}

// Removes the synced keys from this device. Call it after an explicit sign-out so the next
// person who signs in here does not inherit (and merge in) the previous user's progress.
export function clearLocalState() {
  for (const k of SYNC_KEYS) {
    try { localStorage.removeItem(k); } catch { /* storage blocked */ }
  }
}
