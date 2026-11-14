// Radio & Hören: home card, internal screen, persistent mini player and full player.
// All strings are German on purpose (the feature is about listening to German).
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Radio, ChevronLeft, Play, Pause, Heart, Lock, Moon, Volume2, X, Headphones, Info, ExternalLink, Loader2 } from "lucide-react";
import { LEVEL_PALETTE, A } from "../theme";
import { useNavLayer } from "../lib/nav";
import { STATIONS, RADIO_PREVIEW_UNLICENSED } from "./stations.js";
import { listStations, getStation, blockReason, isPlayable, isRealLive, isPreview, devToolsOn, BLOCK_TEXT } from "./license.js";
import { radio, useRadio } from "./service.js";

const LV = ["A1", "A2", "B1", "B2", "C1", "C2"];
const lvIdx = (x) => LV.indexOf(x);
const inLevel = (s, lv) => lvIdx(lv) >= lvIdx(s.levelMin) && lvIdx(lv) <= lvIdx(s.levelMax);
const SLEEP = [0, 10, 15, 30, 45, 60];
const STATUS_TEXT = { loading: "Verbindung wird hergestellt …", buffering: "Puffert …", playing: "Läuft", paused: "Pausiert", idle: "" };

function statusLine(r, st) {
  if (r.status === "error") return r.error || BLOCK_TEXT.unavailable;
  const base = STATUS_TEXT[r.status] || "";
  return st && st.licenseStatus === "test" && r.status === "playing" ? "Testton läuft" : base;
}

function LevelChips({ s }) {
  const a = LEVEL_PALETTE[s.levelMin], b = LEVEL_PALETTE[s.levelMax];
  return (
    <span style={{ display: "inline-flex", gap: 4, alignItems: "center" }}>
      <span className="s-radio-lv" style={{ background: A(a.acc, "2E"), color: a.dk }}>{s.levelMin}</span>
      {s.levelMin !== s.levelMax && <><span style={{ color: "var(--muted)", fontSize: 11 }}>–</span><span className="s-radio-lv" style={{ background: A(b.acc, "2E"), color: b.dk }}>{s.levelMax}</span></>}
    </span>
  );
}

// Station logo next to the name. Falls back to the radio icon when no (authorized) logo file is available.
function StationLogo({ s, size = 44, icon = 20, plate = true, full = false }) {
  const [bad, setBad] = useState(false);
  const src = full ? s.logo : (s.logoIcon || s.logo);
  const ok = src && !bad && (RADIO_PREVIEW_UNLICENSED || s.license?.logoAuthorized);
  if (ok && full) {
    return <img src={src} alt={s.name} className="s-radio-logofull" loading="lazy" onError={() => setBad(true)} />;
  }
  if (ok) {
    return (
      <span className="s-radio-logo" style={{ width: size, height: size }}>
        <img src={src} alt="" loading="lazy" onError={() => setBad(true)} />
      </span>
    );
  }
  return plate
    ? <span className="s-plate" style={{ width: size, height: size, flexShrink: 0 }}><Radio size={icon} /></span>
    : <Radio size={icon} />;
}

function PlayBtn({ station, size = 44 }) {
  const r = useRadio();
  const mine = r.stationId === station.id;
  const active = mine && (r.status === "playing" || r.status === "buffering" || r.status === "loading");
  const why = blockReason(station);
  const label = why ? `${station.name}: nicht verfügbar` : active ? `${station.name} pausieren` : `${station.name} abspielen`;
  return (
    <button type="button" className="s-radio-play" aria-label={label} aria-disabled={!!why} disabled={!!why}
      style={{ width: size, height: size }}
      onClick={() => (mine ? radio.toggle() : radio.play(station.id))}>
      {mine && (r.status === "loading" || r.status === "buffering") ? <Loader2 size={20} className="s-radio-spin" /> : active ? <Pause size={20} fill="currentColor" /> : why ? <Lock size={18} /> : <Play size={20} fill="currentColor" />}
    </button>
  );
}

function FavBtn({ id, name }) {
  const r = useRadio();
  const on = r.favs.includes(id);
  return (
    <button type="button" className="s-wotd-ic" aria-pressed={on} aria-label={on ? `${name} aus Favoriten entfernen` : `${name} zu Favoriten hinzufügen`}
      onClick={() => radio.toggleFav(id)} style={{ color: on ? "#D0627F" : "var(--acc-tx)" }}>
      <Heart size={17} strokeWidth={1.9} fill={on ? "currentColor" : "none"} />
    </button>
  );
}

function StationCard({ s, onOpenFull }) {
  const why = blockReason(s);
  return (
    <div className="s-radio-card">
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <StationLogo s={s} size={48} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontWeight: 800, fontSize: 15.5, color: "var(--ink)" }}>{s.name}</span>
            <LevelChips s={s} />
            {isRealLive(s) && <span className="s-radio-live"><i /> LIVE</span>}
            {isPreview(s) && <span className="s-radio-prev">Vorschau</span>}
          </div>
          <div style={{ fontSize: 12.5, color: "var(--acc-tx)", fontWeight: 700, marginTop: 2 }}>{s.category}</div>
          <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 4, lineHeight: 1.4 }}>{s.description}</div>
          <div style={{ fontSize: 11.5, color: "var(--muted)", marginTop: 6 }}>Sender: {s.broadcaster}</div>
          {why && <div className="s-radio-note"><Lock size={13} /> {why === "no-stream" && s.playerPage ? "Wird über den offiziellen Player des Senders geöffnet." : BLOCK_TEXT[why]}</div>}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
          <PlayBtn station={s} />
          <FavBtn id={s.id} name={s.name} />
        </div>
      </div>
      {s.playerPage && !s.streamUrl && (
        <a className="s-capsule" style={{ marginTop: 12, textDecoration: "none" }} href={s.playerPage} target="_blank" rel="noopener noreferrer">
          <Play size={14} fill="currentColor" /> Offiziellen Player öffnen <ExternalLink size={12} />
        </a>
      )}
      {s.website && (
        <a className="s-radio-link" href={s.website} target="_blank" rel="noopener noreferrer">
          Offizielle Informationen <ExternalLink size={12} />
        </a>
      )}
    </div>
  );
}

// ── Home card ──
export function HomeRadioCard({ onOpen }) {
  const live = STATIONS.some(isRealLive);
  return (
    <button type="button" className="s-radio-home s-dt s-dt-frost" onClick={onOpen} aria-label="Radio & Hören öffnen">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span className="s-plate" style={{ width: 46, height: 46, flexShrink: 0 }}><Headphones size={21} /></span>
        <div style={{ flex: 1, minWidth: 0, textAlign: "start" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontWeight: 800, fontSize: 16, color: "var(--ink)" }}>Radio &amp; Hören</span>
            {live && <span className="s-radio-live"><i /> LIVE</span>}
          </div>
          <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 2 }}>Deutsch hören – jederzeit und überall</div>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
        {STATIONS.map((s) => (
          <span key={s.id} className="s-radio-chip" style={{ opacity: isPlayable(s) ? 1 : 0.75 }}>
            <StationLogo s={s} size={16} icon={11} plate={false} /> {!isPlayable(s) && <Lock size={11} />} {s.name}
          </span>
        ))}
      </div>
      <div style={{ marginTop: 12 }}><span className="s-cta" style={{ display: "inline-block" }}>Radio entdecken</span></div>
    </button>
  );
}

// ── Full radio screen ──
export function RadioScreen({ onClose, onNavigate }) {
  useNavLayer(true, onClose, { depth: 2, modal: true }, "radio");
  const [lv, setLv] = useState("B1");
  const r = useRadio();
  const all = listStations();
  const live = all.filter((s) => isRealLive(s) || s.licenseStatus === "test");
  const byLevel = STATIONS.filter((s) => inLevel(s, lv));
  const favs = all.filter((s) => r.favs.includes(s.id));
  const openFull = () => radio.openFull();
  return (
    <div className="s-radio-screen" role="region" aria-label="Radio & Hören">
      <div className="s-radio-wrap">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
          <button type="button" className="s-capsule" onClick={onClose} aria-label="Zurück zur Startseite"><ChevronLeft size={18} /> Zurück</button>
        </div>
        <h1 style={{ margin: "10px 0 2px", fontSize: 26, fontWeight: 900, color: "var(--ink)" }}>Radio &amp; Hören</h1>
        <p style={{ margin: 0, fontSize: 14, color: "var(--muted)" }}>Lerne Deutsch mit echten Radiosendungen.</p>

        <h2 className="s-radio-h">Jetzt live hören</h2>
        {live.length === 0 ? (
          <div className="s-radio-card" style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <Info size={18} style={{ flexShrink: 0, color: "var(--acc-tx)", marginTop: 2 }} />
            <div style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.5 }}>
              Zurzeit ist noch kein Live-Sender freigegeben. Sobald ein Sender genehmigt ist, erscheint er hier.
            </div>
          </div>
        ) : live.map((s) => <StationCard key={s.id} s={s} onOpenFull={openFull} />)}

        <h2 className="s-radio-h">Radiosender entdecken</h2>
        {STATIONS.map((s) => <StationCard key={s.id} s={s} onOpenFull={openFull} />)}

        <h2 className="s-radio-h">Nach Sprachniveau</h2>
        <div className="s-radio-lvrow" role="tablist" aria-label="Sprachniveau">
          {LV.map((x) => {
            const p = LEVEL_PALETTE[x], on = x === lv;
            return (
              <button key={x} type="button" role="tab" aria-selected={on} onClick={() => setLv(x)}
                className="s-radio-lvbtn" style={{ background: on ? p.acc : A(p.acc, "26"), color: on ? "#fff" : p.dk }}>{x}</button>
            );
          })}
        </div>
        {byLevel.length ? byLevel.map((s) => <StationCard key={s.id} s={s} onOpenFull={openFull} />) : (
          <div className="s-radio-card">
            <div style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.5 }}>
              Für {lv} gibt es noch keinen geeigneten Radiosender. Normale Radiosendungen sind für dieses Niveau zu schnell.
              Übe stattdessen mit den Hör-Lektionen in der App.
            </div>
            {onNavigate && <button type="button" className="s-capsule" style={{ marginTop: 10 }} onClick={() => { onClose(); onNavigate("levels"); }}>Zu den Lektionen</button>}
          </div>
        )}

        <h2 className="s-radio-h">Meine Favoriten</h2>
        {favs.length ? favs.map((s) => <StationCard key={s.id} s={s} onOpenFull={openFull} />) : (
          <div className="s-radio-card"><div style={{ fontSize: 13.5, color: "var(--muted)" }}>Tippe auf das Herz, um einen Sender hier zu speichern.</div></div>
        )}

        <h2 className="s-radio-h">Tipps zum Hörverstehen</h2>
        <div className="s-radio-card">
          <ul style={{ margin: 0, paddingInlineStart: 18, fontSize: 13.5, color: "var(--ink)", lineHeight: 1.65 }}>
            <li>Höre zuerst ohne Pause und versuche, das Thema zu erkennen.</li>
            <li>Konzentriere dich auf bekannte Wörter, nicht auf jedes einzelne Wort.</li>
            <li>Höre kurze Abschnitte mehrmals, wenn du etwas nicht verstanden hast.</li>
            <li>Schreibe drei neue Wörter auf und suche sie in der App.</li>
            <li>Regelmäßig 10 Minuten täglich hilft mehr als einmal lange.</li>
          </ul>
        </div>

        <p style={{ fontSize: 11.5, color: "var(--muted)", marginTop: 18, lineHeight: 1.5 }}>
          Hinweis: Beim Hören über das Internet kann deine IP-Adresse an den jeweiligen Streaming-Anbieter übermittelt werden.
          Sender werden erst nach Genehmigung durch den jeweiligen Rundfunkanbieter freigeschaltet.
        </p>
        {devToolsOn() && <p style={{ fontSize: 11.5, color: "var(--muted)" }}>Entwicklungsmodus: Testton ist aktiv (kein Radio).</p>}
      </div>
    </div>
  );
}

function Remaining({ endsAt }) {
  const [, tick] = useState(0);
  useEffect(() => { const t = setInterval(() => tick((x) => x + 1), 1000); return () => clearInterval(t); }, []);
  const s = Math.max(0, Math.round((endsAt - Date.now()) / 1000));
  return <span aria-live="off">{String(Math.floor(s / 60)).padStart(2, "0")}:{String(s % 60).padStart(2, "0")}</span>;
}

// ── Full player ──
export function RadioFullPlayer() {
  const r = useRadio();
  useNavLayer(r.full, () => radio.closeFull(), { depth: 4, modal: true }, "radio-full");
  useEffect(() => {
    if (!r.full) return undefined;
    const k = (e) => { if (e.key === "Escape") radio.closeFull(); };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, [r.full]);
  const st = getStation(r.stationId);
  if (!r.full || !st) return null;
  const busy = r.status === "loading" || r.status === "buffering";
  const playing = r.status === "playing";
  return createPortal(
    <div className="s-radio-full" role="dialog" aria-modal="true" aria-label={`Player: ${st.name}`}>
      <div className="s-radio-fullin">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: "var(--acc-tx)" }}>Radio &amp; Hören</span>
          <button type="button" className="s-wotd-x" aria-label="Player schließen" onClick={() => radio.closeFull()}><X size={18} /></button>
        </div>
        <div className="s-radio-art" aria-hidden="true">
          <StationLogo s={st} size={120} icon={72} plate={false} full />
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontSize: 22, fontWeight: 900, color: "var(--ink)" }}>{st.name}</span>
            {isRealLive(st) && playing && <span className="s-radio-live"><i /> LIVE</span>}
          </div>
          <div style={{ marginTop: 6, display: "flex", justifyContent: "center", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <LevelChips s={st} />
            <span style={{ fontSize: 12.5, color: "var(--muted)" }}>{st.category}</span>
          </div>
          <div role="status" aria-live="polite" style={{ marginTop: 10, minHeight: 20, fontSize: 13.5, fontWeight: 700, color: r.status === "error" ? "#B3402F" : "var(--acc-tx)" }}>
            {statusLine(r, st)}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 18, margin: "8px 0" }}>
          <FavBtn id={st.id} name={st.name} />
          <button type="button" className="s-radio-big" onClick={() => radio.toggle()} aria-label={playing || busy ? "Pausieren" : "Abspielen"}>
            {busy ? <Loader2 size={30} className="s-radio-spin" /> : playing ? <Pause size={30} fill="currentColor" /> : <Play size={30} fill="currentColor" />}
          </button>
          <button type="button" className="s-wotd-ic" aria-label="Wiedergabe beenden" onClick={() => radio.stop()}><X size={17} /></button>
        </div>
        {r.volumeSupported && (
          <label className="s-radio-vol"><Volume2 size={16} aria-hidden="true" />
            <input type="range" min="0" max="1" step="0.05" value={r.volume} onChange={(e) => radio.setVolume(parseFloat(e.target.value))} aria-label="Lautstärke" />
          </label>
        )}
        <div className="s-radio-sleep">
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12.5, fontWeight: 800, color: "var(--acc-tx)" }}>
            <Moon size={14} /> Einschlaf-Timer {r.sleepEndsAt ? <span style={{ marginInlineStart: "auto", color: "var(--ink)" }}><Remaining endsAt={r.sleepEndsAt} /></span> : null}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
            {SLEEP.map((m) => {
              const on = m === 0 ? !r.sleepEndsAt : false;
              return <button key={m} type="button" className="s-radio-chipbtn" aria-pressed={on} onClick={() => radio.setSleep(m)} style={on ? { background: "var(--acc-btn)", color: "#fff" } : undefined}>{m === 0 ? "Aus" : `${m} Min.`}</button>;
            })}
          </div>
        </div>
        <div style={{ fontSize: 11.5, color: "var(--muted)", textAlign: "center", lineHeight: 1.5 }}>
          {st.licenseStatus === "test" ? "Eigener Testton, keine Radiosendung." : `Sender: ${st.broadcaster}`}
        </div>
      </div>
    </div>,
    document.body
  );
}

// ── Persistent mini player (one shared audio element underneath) ──
export function RadioMiniPlayer() {
  const r = useRadio();
  const st = getStation(r.stationId);
  if (!st) return null;
  const busy = r.status === "loading" || r.status === "buffering";
  const playing = r.status === "playing";
  return (
    <div className="s-radio-mini" role="region" aria-label="Radio-Player">
      <button type="button" className="s-radio-mini-main" onClick={() => radio.openFull()} aria-label={`Player öffnen: ${st.name}`}>
        <StationLogo s={st} size={38} icon={18} />
        <span style={{ minWidth: 0, textAlign: "start" }}>
          <span style={{ display: "block", fontWeight: 800, fontSize: 13.5, color: "var(--ink)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{st.name}</span>
          <span style={{ display: "block", fontSize: 11.5, color: r.status === "error" ? "#B3402F" : "var(--muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{statusLine(r, st)}</span>
        </span>
      </button>
      <button type="button" className="s-radio-play" style={{ width: 40, height: 40 }} onClick={() => radio.toggle()} aria-label={playing || busy ? "Pausieren" : "Abspielen"}>
        {busy ? <Loader2 size={18} className="s-radio-spin" /> : playing ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
      </button>
      <button type="button" className="s-wotd-ic" style={{ width: 32, height: 32 }} onClick={() => radio.stop()} aria-label="Wiedergabe beenden"><X size={15} /></button>
    </div>
  );
}
