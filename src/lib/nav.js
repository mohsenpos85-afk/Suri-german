// In-app back navigation.
// Screens register "layers" (something that can be closed to return to the previous screen).
// The Back button, the browser/hardware back button and the Escape handling all pop the
// most recently opened, deepest layer. When no layer is left the user is on the home screen.
import { useEffect, useRef, useSyncExternalStore } from "react";

let uid = 0;
let stack = [];            // { id, undo, depth, modal }
let sentinel = false;      // one extra history entry that lets the browser back button reach us
let snap = { canBack: false, modal: false };
const subs = new Set();

function top() {
  let best = null;
  stack.forEach((e) => { if (!best || e.depth >= best.depth) best = e; });
  return best;
}
function emit() {
  const t = top();
  const next = { canBack: stack.length > 0, modal: !!(t && t.modal) };
  if (next.canBack !== snap.canBack || next.modal !== snap.modal) { snap = next; subs.forEach((f) => f()); }
}
function ensureSentinel() {
  try { if (!sentinel) { window.history.pushState({ suriNav: 1 }, ""); sentinel = true; } } catch { /* no history */ }
}

export function navPush(undo, { depth = 1, modal = false } = {}) {
  const id = ++uid;
  stack.push({ id, undo, depth, modal });
  ensureSentinel();
  emit();
  return id;
}
export function navRemove(id) {
  const i = stack.findIndex((e) => e.id === id);
  if (i >= 0) { stack.splice(i, 1); emit(); }
}
export function navBack() {
  const t = top();
  if (!t) return false;
  stack = stack.filter((e) => e.id !== t.id);
  try { t.undo(); } catch { /* screen already gone */ }
  emit();
  return true;
}

if (typeof window !== "undefined") {
  window.addEventListener("popstate", () => {
    if (!sentinel) return;            // not our entry
    sentinel = false;                 // the browser consumed it
    if (stack.length) { navBack(); if (stack.length) ensureSentinel(); }
  });
}

export function useNavLayer(active, undo, opts = {}, key = 0) {
  const u = useRef(undo); u.current = undo;
  const depth = opts.depth ?? 1, modal = !!opts.modal;
  useEffect(() => {
    if (!active) return undefined;
    const id = navPush(() => u.current(), { depth, modal });
    return () => navRemove(id);
  }, [active, key, depth, modal]);
}

export function useNavState() {
  return useSyncExternalStore((cb) => { subs.add(cb); return () => subs.delete(cb); }, () => snap, () => snap);
}
