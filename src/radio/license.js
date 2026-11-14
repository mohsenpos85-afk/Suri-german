import { STATIONS, TEST_STATION, RADIO_PREVIEW_UNLICENSED } from "./stations.js";

export function devToolsOn() {
  try {
    if (import.meta.env && import.meta.env.DEV) return true;
    return new URLSearchParams(window.location.search).get("radiodev") === "1";
  } catch { return false; }
}

/** All stations that can be shown (candidates, plus the test source when development tools are on). */
export function listStations() { return devToolsOn() ? [...STATIONS, TEST_STATION] : STATIONS; }
export function getStation(id) { return listStations().find((s) => s.id === id) || null; }

/** Why a station cannot be played, or null when playback is permitted. */
export function blockReason(s, now = Date.now()) {
  if (!s) return "unknown";
  if (s.licenseStatus === "test") return devToolsOn() && s.streamUrl ? null : "unavailable";
  if (!s.enabled) return "disabled";
  if (!s.streamUrl) return "no-stream";
  const licensed = s.licenseStatus === "licensed" && s.license && s.license.status === "licensed";
  if (!licensed) return RADIO_PREVIEW_UNLICENSED ? null : "not-licensed"; // preview mode: playable, but marked
  if (s.license.expiresAt && new Date(s.license.expiresAt).getTime() < now) return "expired";
  return null;
}
export const isPlayable = (s) => blockReason(s) === null;
/** A genuine live radio station that can be played right now (the test tone never counts). */
export const isRealLive = (s) => !!s && s.live === true && s.licenseStatus !== "test" && isPlayable(s);
/** Playable only because preview mode is on (no license yet). */
export const isPreview = (s) => !!s && s.licenseStatus !== "test" && s.licenseStatus !== "licensed" && isPlayable(s);

export const BLOCK_TEXT = {
  disabled: "Dieser Sender ist noch nicht freigeschaltet.",
  "not-licensed": "Für diesen Sender liegt noch keine Genehmigung vor.",
  "no-stream": "Für diesen Sender ist noch keine Verbindung eingerichtet.",
  expired: "Die Genehmigung für diesen Sender ist abgelaufen.",
  unavailable: "Der Radiosender ist momentan nicht erreichbar.",
  unknown: "Der Radiosender ist momentan nicht erreichbar.",
};
