// One shared audio player for the whole app (never one per screen), plus favorites and the sleep timer.
import { useSyncExternalStore } from "react";
import { getStation, blockReason, BLOCK_TEXT } from "./license.js";

const subs = new Set();
const FAV_KEY = "suri_radio_favs";
let snap = {
  stationId: null,
  status: "idle",            // idle | loading | buffering | playing | paused | error
  error: null,               // German message
  sleepEndsAt: null,         // epoch ms
  volumeSupported: true,
  volume: 1,
  full: false,              // full-screen player open
  favs: readFavs(),
};
const emit = (patch) => { snap = { ...snap, ...patch }; subs.forEach((f) => f()); };

function readFavs() {
  try { const v = JSON.parse(localStorage.getItem(FAV_KEY)); return Array.isArray(v) ? [...new Set(v)] : []; } catch { return []; }
}

export const MSG = {
  connecting: "Verbindung wird hergestellt …",
  unreachable: "Der Radiosender ist momentan nicht erreichbar.",
  offline: "Bitte überprüfe deine Internetverbindung.",
  geo: "Dieser Sender ist in deinem Land nicht verfügbar.",
};

let audio = null, loadTimer = null, retryTimer = null, sleepTimer = null, tries = 0, wantPlay = false;
const MAX_TRIES = 3, BACKOFF = [2000, 5000, 10000], LOAD_TIMEOUT = 15000;
const clearTimers = () => { clearTimeout(loadTimer); clearTimeout(retryTimer); };

function ensureAudio() {
  if (audio || typeof Audio === "undefined") return audio;
  audio = new Audio();
  audio.preload = "none";
  audio.setAttribute("playsinline", "");
  audio.addEventListener("playing", () => { clearTimers(); tries = 0; emit({ status: "playing", error: null }); setSession("playing"); });
  audio.addEventListener("waiting", () => { if (wantPlay) emit({ status: "buffering" }); });
  audio.addEventListener("pause", () => { if (!wantPlay && snap.status !== "error" && snap.status !== "idle") { emit({ status: "paused" }); setSession("paused"); } });
  audio.addEventListener("error", () => onFail());
  audio.addEventListener("stalled", () => { if (wantPlay && snap.status === "playing") onFail(); });
  audio.addEventListener("timeupdate", checkSleep);
  // volume support: iOS Safari ignores element.volume, so the slider is hidden there
  try { const v = audio.volume; audio.volume = 0.5; if (audio.volume !== 0.5) snap.volumeSupported = false; audio.volume = v; } catch { snap.volumeSupported = false; }
  if (typeof window !== "undefined") {
    window.addEventListener("offline", () => { if (wantPlay) { clearTimers(); emit({ status: "error", error: MSG.offline }); } });
    window.addEventListener("online", () => { if (wantPlay && snap.status === "error" && snap.error === MSG.offline) { tries = 0; start(); } });
    document.addEventListener("visibilitychange", checkSleep);
  }
  return audio;
}

function onFail() {
  if (!wantPlay) return;
  clearTimers();
  if (typeof navigator !== "undefined" && navigator.onLine === false) { emit({ status: "error", error: MSG.offline }); return; }
  if (tries < MAX_TRIES) {
    const d = BACKOFF[tries] ?? 10000; tries += 1;
    emit({ status: "loading", error: MSG.connecting });
    retryTimer = setTimeout(start, d);
  } else {
    wantPlay = false; emit({ status: "error", error: MSG.unreachable });
  }
}

function start() {
  const st = getStation(snap.stationId); const a = ensureAudio();
  if (!st || !a) return;
  const why = blockReason(st);
  if (why) { wantPlay = false; emit({ status: "error", error: BLOCK_TEXT[why] || MSG.unreachable }); return; }
  clearTimeout(loadTimer);
  emit({ status: "loading", error: MSG.connecting });
  a.loop = !!st.loop;
  if (a.src !== new URL(st.streamUrl, window.location.href).href) a.src = st.streamUrl; // reuse the same source when resuming
  loadTimer = setTimeout(() => { if (snap.status === "loading") onFail(); }, LOAD_TIMEOUT);
  const p = a.play();
  if (p && p.catch) p.catch((e) => { if (e && e.name === "NotAllowedError") { wantPlay = false; clearTimers(); emit({ status: "paused", error: null }); } else onFail(); });
}

function setSession(state) {
  try {
    if (!("mediaSession" in navigator)) return;
    const st = getStation(snap.stationId); if (!st) return;
    navigator.mediaSession.metadata = new window.MediaMetadata({ title: st.name, artist: "Radio & Hören", album: "Suri" });
    navigator.mediaSession.playbackState = state === "playing" ? "playing" : "paused";
    navigator.mediaSession.setActionHandler("play", () => radio.toggle());
    navigator.mediaSession.setActionHandler("pause", () => radio.toggle());
    navigator.mediaSession.setActionHandler("stop", () => radio.stop());
  } catch { /* Media Session not supported */ }
}

function checkSleep() {
  if (snap.sleepEndsAt && Date.now() >= snap.sleepEndsAt) { radio.stop(); }
}

export const radio = {
  /** Start (or switch to) a station. Does nothing and reports a message when the station is not authorized. */
  play(id) {
    const st = getStation(id); if (!st) return;
    const why = blockReason(st);
    tries = 0;
    if (why) { wantPlay = false; if (audio) audio.pause(); emit({ stationId: id, status: "error", error: BLOCK_TEXT[why] || MSG.unreachable }); return; }
    if (snap.stationId !== id && audio) { audio.pause(); audio.removeAttribute("src"); audio.load(); }
    wantPlay = true; emit({ stationId: id }); start();
  },
  toggle() {
    if (!snap.stationId) return;
    if (wantPlay && (snap.status === "playing" || snap.status === "buffering" || snap.status === "loading")) {
      wantPlay = false; clearTimers(); if (audio) audio.pause(); emit({ status: "paused", error: null }); setSession("paused");
    } else { tries = 0; wantPlay = true; start(); }
  },
  stop() {
    wantPlay = false; clearTimers(); clearTimeout(sleepTimer);
    if (audio) { audio.pause(); audio.removeAttribute("src"); audio.load(); }
    emit({ stationId: null, status: "idle", error: null, sleepEndsAt: null, full: false });
    try { if ("mediaSession" in navigator) navigator.mediaSession.playbackState = "none"; } catch { /* noop */ }
  },
  openFull() { if (snap.stationId) emit({ full: true }); },
  closeFull() { emit({ full: false }); },
  setVolume(v) { const a = ensureAudio(); const x = Math.max(0, Math.min(1, v)); if (a) a.volume = x; emit({ volume: x }); },
  /** minutes: 0 = off */
  setSleep(min) {
    clearTimeout(sleepTimer);
    if (!min) { emit({ sleepEndsAt: null }); return; }
    const end = Date.now() + min * 60000;
    emit({ sleepEndsAt: end });
    sleepTimer = setTimeout(() => { if (snap.sleepEndsAt === end) radio.stop(); }, min * 60000);
  },
  toggleFav(id) {
    const has = snap.favs.includes(id);
    const next = has ? snap.favs.filter((x) => x !== id) : [...snap.favs, id];
    try { localStorage.setItem(FAV_KEY, JSON.stringify(next)); } catch { /* storage unavailable */ }
    emit({ favs: next });
  },
};

export function useRadio() {
  return useSyncExternalStore((cb) => { subs.add(cb); return () => subs.delete(cb); }, () => snap, () => snap);
}
