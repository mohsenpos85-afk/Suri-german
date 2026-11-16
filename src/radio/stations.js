// ── LAUNCH SWITCH ────────────────────────────────────────────────────────────────
// While true, stations that have a streamUrl but no license yet are playable as a PREVIEW (marked "Vorschau").
// BEFORE PUBLIC LAUNCH: obtain the broadcasters' permission, set licenseStatus:"licensed" + license.status:"licensed"
// per station, then set this to false. Unlicensed stations are blocked again automatically.
export const RADIO_PREVIEW_UNLICENSED = true;

// Logos: put the broadcaster logo files in public/radio/ (<id>.png = full logo, <id>-icon.png = square symbol).
// They are shown while preview mode is on or once license.logoAuthorized is true; a missing file falls back to an icon.
// Radio station configuration. These are CANDIDATE broadcasters only — none is licensed or enabled.
// A station becomes playable only when ALL of: enabled === true, license.status === "licensed",
// a streamUrl is set, and the authorization has not expired (see isPlayable in license.js).
// Never add a stream URL here without written permission from the broadcaster.

const pending = (extra = {}) => ({
  status: "pending",        // pending | licensed | expired | withdrawn
  authorization: null,      // reference to the written permission (who/when/document)
  territories: null,        // e.g. ["DE","AT","CH"]; null = not yet defined
  expiresAt: null,          // ISO date, null = not yet defined
  permittedUses: null,      // e.g. ["in-app live playback"]
  logoAuthorized: false,    // logos may only be shown when authorized
  ...extra,
});

export const STATIONS = [
  {
    id: "dlf", logo: "/radio/dlf.png", logoIcon: "/radio/dlf-icon.png", name: "Deutschlandfunk", levelMin: "B2", levelMax: "C2",
    category: "Nachrichten, Wissenschaft, Politik",
    description: "Informationsprogramm mit Nachrichten, Hintergründen und Wissenschaft.",
    broadcaster: "Deutschlandradio", website: "https://www.deutschlandfunk.de",
    live: true, enabled: true, licenseStatus: "pending", streamUrl: "https://st01.sslstream.dlf.de/dlf/01/128/mp3/stream.mp3?aggregator=web", license: pending(),
  },
  {
    id: "dlf-nova", playerPage: "https://consoles.radioplayer.cloud/276388/index.html", logo: "/radio/dlf-nova.png", logoIcon: "/radio/dlf-nova-icon.png", name: "Deutschlandfunk Nova", levelMin: "B1", levelMax: "C1",
    category: "Alltag, Kultur, junge Themen",
    description: "Wissen, Alltag und Kultur — gesprochen für ein junges Publikum.",
    broadcaster: "Deutschlandradio", website: "https://www.deutschlandfunknova.de",
    live: true, enabled: true, licenseStatus: "pending", streamUrl: "https://st03.sslstream.dlf.de/dlf/03/128/mp3/stream.mp3?aggregator=web", license: pending(),
  },
  {
    id: "dlf-kultur", playerPage: "https://consoles.radioplayer.cloud/276387/index.html", logo: "/radio/dlf-kultur.png", logoIcon: "/radio/dlf-kultur-icon.png", name: "Deutschlandfunk Kultur", levelMin: "B2", levelMax: "C2",
    category: "Kultur, Gesellschaft, Diskussionen",
    description: "Kultur, Gesellschaft und ausführliche Gespräche.",
    broadcaster: "Deutschlandradio", website: "https://www.deutschlandfunkkultur.de",
    live: true, enabled: true, licenseStatus: "pending", streamUrl: "https://st02.sslstream.dlf.de/dlf/02/128/mp3/stream.mp3?aggregator=web", license: pending(),
  },
  {
    id: "wdr5", playerPage: "https://www1.wdr.de/radio/player/radioplayer112~_layout-popupVersion.html", logo: "/radio/wdr5.png", logoIcon: "/radio/wdr5-icon.png", name: "WDR 5", levelMin: "B1", levelMax: "C2",
    category: "Interviews, Nachrichten, Alltag",
    description: "Wortprogramm mit Interviews, Nachrichten und Alltagsthemen.",
    broadcaster: "Westdeutscher Rundfunk (WDR)", website: "https://www.wdr.de/radio/wdr5/",
    live: true, enabled: true, licenseStatus: "pending", streamUrl: "https://wdr-wdr5-live.icecastssl.wdr.de/wdr/wdr5/live/mp3/128/stream.mp3", license: pending(),
  },
  {
    id: "diemaus", logo: "/radio/diemaus.png", logoIcon: "/radio/diemaus-icon.png", name: "Die Maus", levelMin: "A2", levelMax: "B1",
    category: "Kinderradio, einfache Sprache",
    description: "Kinderradio mit klarer, langsamer Sprache – gut zum Einstieg ins Hörverstehen.",
    broadcaster: "Westdeutscher Rundfunk (WDR)", website: "https://www.wdrmaus.de/",
    live: true, enabled: true, licenseStatus: "pending", streamUrl: "https://wdr-diemaus-live.icecastssl.wdr.de/wdr/diemaus/live/mp3/128/stream.mp3", license: pending(),
  },
];

// Development-only test source: an original tone sequence generated for this project (public/radio-test.wav).
// It is NOT a radio broadcast, never shows "LIVE" and is only available in dev builds or with ?radiodev=1.
export const TEST_STATION = {
  id: "dev-test", name: "Testton (kein Radio)", levelMin: "A1", levelMax: "C2",
  category: "Nur zum Testen des Players",
  description: "Eigener Testton für die Entwicklung. Keine Radiosendung.",
  broadcaster: "Suri (Testmaterial)", website: null,
  live: false, enabled: true, licenseStatus: "test", streamUrl: "/radio-test.wav", logo: null, loop: true,
  license: { status: "test", authorization: "Eigenes Material", territories: null, expiresAt: null, permittedUses: ["Entwicklung"], logoAuthorized: false },
};
