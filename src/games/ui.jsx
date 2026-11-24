// Shared UI for the Das Spiel mini-games.
import React, { useEffect, useRef, useState } from "react";
import { Star, Play, RotateCcw, Trophy } from "lucide-react";
import { packT } from "./labels.js";

export const LV = ["A1", "A2", "B1", "B2", "C1", "C2"];
export const LEVEL_COLORS = { A1: "#659DB8", A2: "#569F95", B1: "#547CB6", B2: "#8877B5", C1: "#BD8D52", C2: "#9A657F" };
export const rnd = (n) => Math.floor(Math.random() * n);
export const shuffle = (a) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = rnd(i + 1); [b[i], b[j]] = [b[j], b[i]]; } return b; };
export const sample = (a, n) => shuffle(a).slice(0, n);
export const OK = "#1F8A57", BAD = "#C93A3F";

const BKEY = "suri_pack_best_v1";
export function getBest(id) { try { return (JSON.parse(localStorage.getItem(BKEY) || "{}"))[id] || 0; } catch { return 0; } }
export function setBest(id, v) { try { const o = JSON.parse(localStorage.getItem(BKEY) || "{}"); o[id] = v; localStorage.setItem(BKEY, JSON.stringify(o)); } catch { /* ignore */ } }

// shared "finish" helper: records the best score and pays out XP once per round
export function useFinish(id, addXp) {
  const [best, setB] = useState(() => getBest(id));
  const finish = (score, xp) => {
    const nb = score > best;
    if (nb) { setBest(id, score); setB(score); }
    try { if (addXp && xp > 0) addXp(xp); } catch { /* ignore */ }
    return nb;
  };
  return { best, finish };
}

export const useT = (lang) => packT(lang);

export function Frame({ T, color, icon, name, onBack, right, children }) {
  return (
    <div className="pk" dir={T._dir} style={{ "--pk": color }}>
      <style>{CSS}</style>
      <div className="pk-top">
        <div className="pk-title"><span className="pk-ico">{icon}</span><span>{name}</span></div>
        <div className="pk-right">{right}</div>
      </div>
      {children}
    </div>
  );
}

export function Intro({ T, icon, name, desc, best, onStart, children }) {
  return (
    <div className="pk-intro pk-in">
      <div className="pk-hero"><span>{icon}</span></div>
      <h2 className="pk-h2">{name}</h2>
      <p className="pk-desc">{desc}</p>
      {best > 0 && <div className="pk-bestchip"><Trophy size={14} /> {T.best}: <b>{best}</b></div>}
      {children}
      <button className="pk-cta" onClick={onStart}><Play size={18} fill="currentColor" /> {T.start}</button>
    </div>
  );
}

export function Chips({ items, value, onChange, label }) {
  return (
    <div className="pk-chipwrap">
      {label && <div className="pk-chiplab">{label}</div>}
      <div className="pk-chips">
        {items.map((it) => {
          const v = typeof it === "string" ? it : it.v;
          const l = typeof it === "string" ? it : it.l;
          const c = LEVEL_COLORS[v];
          const on = v === value;
          return (
            <button key={v} className={"pk-chip" + (on ? " on" : "")} onClick={() => onChange(v)} style={on && c ? { background: c, borderColor: c } : null}>{l}</button>
          );
        })}
      </div>
    </div>
  );
}

export function Dots({ n, i, marks }) {
  return (
    <div className="pk-dots">
      {Array.from({ length: n }).map((_, k) => (
        <span key={k} className={"pk-dot" + (k === i ? " cur" : "") + (marks[k] === true ? " ok" : marks[k] === false ? " bad" : "")} />
      ))}
    </div>
  );
}

export function Result({ T, pct, main, sub, xp, newBest, onAgain, onBack, children }) {
  const stars = pct >= 0.9 ? 3 : pct >= 0.6 ? 2 : pct >= 0.3 ? 1 : 0;
  const title = [T.t0, T.t1, T.t2, T.t3][stars];
  return (
    <div className="pk-result pk-in">
      <div className="pk-stars">
        {[0, 1, 2].map((k) => <Star key={k} size={44} className={"pk-star" + (k < stars ? " on" : "")} style={{ animationDelay: `${k * 0.18}s` }} fill={k < stars ? "currentColor" : "none"} />)}
      </div>
      <h2 className="pk-h2">{title}</h2>
      <div className="pk-big">{main}</div>
      {sub && <div className="pk-sub">{sub}</div>}
      {newBest && <div className="pk-newbest"><Trophy size={14} /> {T.newBest}</div>}
      {xp > 0 && <div className="pk-xp">+{xp} {T.xp}</div>}
      {children}
      <div className="pk-actions">
        <button className="pk-cta" onClick={onAgain}><RotateCcw size={17} /> {T.again}</button>
        <button className="pk-ghost" onClick={onBack}>{T.menu}</button>
      </div>
    </div>
  );
}

// small hook: run a function every `ms` while `on` is true
export function useTick(on, ms, fn) {
  const ref = useRef(fn);
  ref.current = fn;
  useEffect(() => {
    if (!on) return undefined;
    const id = setInterval(() => ref.current(), ms);
    return () => clearInterval(id);
  }, [on, ms]);
}

export const CSS = `
.pk{max-width:560px;margin:0 auto;padding:12px 14px 40px;color:var(--ink);font-family:inherit}
.pk *{box-sizing:border-box}
.pk-top{display:flex;align-items:center;gap:10px;padding:6px 0 14px}
.pk-back{width:38px;height:38px;border-radius:12px;border:1px solid var(--line);background:var(--surface);color:var(--ink);display:grid;place-items:center;cursor:pointer;flex-shrink:0}
.pk-back:active{transform:scale(.94)}
.pk-title{flex:1;display:flex;align-items:center;gap:8px;font-weight:800;font-size:17px;min-width:0}
.pk-title span:last-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.pk-ico{width:30px;height:30px;border-radius:10px;display:grid;place-items:center;font-size:16px;background:color-mix(in srgb,var(--pk) 16%,transparent);flex-shrink:0}
.pk-right{display:flex;align-items:center;gap:8px;font-weight:700;font-size:14px;color:var(--muted)}
.pk-in{animation:pkIn .35s cubic-bezier(.2,.8,.2,1) both}
@keyframes pkIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.pk-intro,.pk-result{text-align:center;padding:10px 4px}
.pk-hero{width:96px;height:96px;margin:6px auto 14px;border-radius:30px;display:grid;place-items:center;font-size:46px;background:linear-gradient(145deg,color-mix(in srgb,var(--pk) 30%,var(--surface)),color-mix(in srgb,var(--pk) 8%,var(--surface)));border:1px solid color-mix(in srgb,var(--pk) 30%,var(--line));box-shadow:0 10px 30px color-mix(in srgb,var(--pk) 22%,transparent)}
.pk-h2{margin:0 0 6px;font-size:24px;font-weight:800;letter-spacing:-.01em}
.pk-desc{margin:0 auto 14px;max-width:360px;color:var(--muted);font-size:14.5px;line-height:1.5}
.pk-bestchip{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:99px;font-size:13px;background:color-mix(in srgb,var(--pk) 12%,transparent);color:var(--pk);margin-bottom:12px;font-weight:600}
.pk-chipwrap{margin:8px 0 14px}
.pk-chiplab{font-size:12px;color:var(--muted);font-weight:700;letter-spacing:.04em;text-transform:uppercase;margin-bottom:7px}
.pk-chips{display:flex;flex-wrap:wrap;gap:7px;justify-content:center}
.pk-chip{padding:8px 15px;border-radius:99px;border:1.5px solid var(--line);background:var(--surface);color:var(--ink);font-weight:700;font-size:14px;cursor:pointer;font-family:inherit;transition:all .15s}
.pk-chip.on{background:var(--pk);border-color:var(--pk);color:#fff;box-shadow:0 4px 14px color-mix(in srgb,var(--pk) 35%,transparent)}
.pk-cta{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:50px;padding:0 28px;border-radius:16px;border:none;background:var(--pk);color:#fff;font-weight:800;font-size:16px;cursor:pointer;font-family:inherit;box-shadow:0 8px 22px color-mix(in srgb,var(--pk) 35%,transparent);transition:transform .12s}
.pk-cta:active{transform:scale(.97)}
.pk-cta:disabled{opacity:.45;box-shadow:none;cursor:default}
.pk-ghost{min-height:50px;padding:0 22px;border-radius:16px;border:1.5px solid var(--line);background:var(--surface);color:var(--ink);font-weight:700;font-size:15px;cursor:pointer;font-family:inherit}
.pk-actions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:18px}
.pk-dots{display:flex;gap:5px;justify-content:center;margin:0 0 16px}
.pk-dot{height:6px;flex:1;max-width:34px;border-radius:99px;background:var(--line);transition:background .2s}
.pk-dot.cur{background:color-mix(in srgb,var(--pk) 55%,var(--line))}
.pk-dot.ok{background:${OK}}.pk-dot.bad{background:${BAD}}
.pk-card{background:var(--surface);border:1px solid var(--line);border-radius:22px;padding:18px;box-shadow:0 4px 18px rgba(0,0,0,.05)}
.pk-btn{min-height:48px;padding:0 20px;border-radius:14px;border:none;background:var(--pk);color:#fff;font-weight:800;font-size:15px;cursor:pointer;font-family:inherit;display:inline-flex;align-items:center;justify-content:center;gap:7px}
.pk-btn:disabled{opacity:.4;cursor:default}
.pk-btn.sec{background:var(--surface);color:var(--ink);border:1.5px solid var(--line)}
.pk-opts{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.pk-opt{min-height:56px;padding:10px 12px;border-radius:16px;border:1.5px solid var(--line);background:var(--surface);color:var(--ink);font-weight:700;font-size:16px;cursor:pointer;font-family:inherit;transition:transform .1s,border-color .15s,background .15s;display:flex;align-items:center;justify-content:center;text-align:center}
.pk-opt:active{transform:scale(.97)}
.pk-opt:disabled{cursor:default}
.pk-opt.ok{background:color-mix(in srgb,${OK} 16%,var(--surface));border-color:${OK};color:${OK}}
.pk-opt.bad{background:color-mix(in srgb,${BAD} 14%,var(--surface));border-color:${BAD};color:${BAD};animation:pkShake .3s}
.pk-opt.dim{opacity:.5}
.pk-opts.col{grid-template-columns:1fr}
@keyframes pkShake{20%{transform:translateX(-5px)}50%{transform:translateX(5px)}80%{transform:translateX(-3px)}}
.pk-fb{margin-top:14px;padding:14px 16px;border-radius:18px;border:1px solid var(--line);background:var(--surface);text-align:start;animation:pkIn .3s both}
.pk-fb.ok{border-color:color-mix(in srgb,${OK} 45%,var(--line));background:color-mix(in srgb,${OK} 8%,var(--surface))}
.pk-fb.bad{border-color:color-mix(in srgb,${BAD} 45%,var(--line));background:color-mix(in srgb,${BAD} 7%,var(--surface))}
.pk-fbh{font-weight:800;font-size:15px;margin-bottom:4px;display:flex;align-items:center;gap:7px}
.pk-fb.ok .pk-fbh{color:${OK}}.pk-fb.bad .pk-fbh{color:${BAD}}
.pk-fbt{unicode-bidi:plaintext;font-size:14px;line-height:1.55;color:var(--ink)}
.pk-fbt.m{color:var(--muted);font-size:13.5px;margin-top:3px}
.pk-stars{display:flex;justify-content:center;gap:8px;margin:6px 0 10px}
.pk-star{color:var(--line);animation:pkPop .5s cubic-bezier(.3,1.6,.5,1) both}
.pk-star.on{color:#F5B301;filter:drop-shadow(0 4px 10px rgba(245,179,1,.45))}
@keyframes pkPop{from{transform:scale(.2) rotate(-30deg);opacity:0}to{transform:none;opacity:1}}
.pk-big{font-size:46px;font-weight:900;color:var(--pk);line-height:1.1;margin:6px 0}
.pk-sub{color:var(--muted);font-size:14px}
.pk-newbest{display:inline-flex;gap:6px;align-items:center;margin-top:10px;padding:5px 12px;border-radius:99px;background:rgba(245,179,1,.16);color:#B7820A;font-weight:700;font-size:13px}
.pk-xp{margin-top:10px;font-weight:800;color:var(--acc-tx,var(--pk))}
/* Hör-Diktat */
.pk-listen{width:104px;height:104px;border-radius:50%;border:none;margin:4px auto 6px;display:grid;place-items:center;cursor:pointer;color:#fff;background:radial-gradient(circle at 30% 25%,color-mix(in srgb,var(--pk) 70%,#fff),var(--pk));box-shadow:0 12px 30px color-mix(in srgb,var(--pk) 40%,transparent);position:relative}
.pk-listen.on::before,.pk-listen.on::after{content:"";position:absolute;inset:-6px;border-radius:50%;border:2px solid var(--pk);opacity:.6;animation:pkRing 1.3s ease-out infinite}
.pk-listen.on::after{animation-delay:.6s}
@keyframes pkRing{from{transform:scale(.92);opacity:.7}to{transform:scale(1.4);opacity:0}}
.pk-input{width:100%;min-height:54px;border-radius:16px;border:2px solid var(--line);background:var(--surface);color:var(--ink);font-size:20px;font-weight:700;padding:0 16px;text-align:center;font-family:inherit;outline:none;direction:ltr}
.pk-input:focus{border-color:var(--pk)}
.pk-input.ok{border-color:${OK}}.pk-input.bad{border-color:${BAD}}
.pk-keys{display:flex;gap:8px;justify-content:center;margin:10px 0}
.pk-key{width:48px;height:42px;border-radius:12px;border:1.5px solid var(--line);background:var(--surface-hi,var(--surface));color:var(--ink);font-weight:800;font-size:18px;cursor:pointer;font-family:inherit}
.pk-mask{font-size:22px;letter-spacing:.18em;font-weight:800;color:var(--pk);text-align:center;margin:6px 0;direction:ltr}
.pk-diff{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;direction:ltr;margin:6px 0}
.pk-tok{padding:4px 9px;border-radius:9px;font-weight:700;font-size:15px;background:color-mix(in srgb,${OK} 14%,transparent);color:${OK}}
.pk-tok.x{background:color-mix(in srgb,${BAD} 14%,transparent);color:${BAD};text-decoration:line-through}
/* Verb-Jagd */
.pk-time{height:9px;border-radius:99px;background:var(--line);overflow:hidden;margin-bottom:6px}
.pk-time>i{display:block;height:100%;border-radius:99px;background:linear-gradient(90deg,var(--pk),color-mix(in srgb,var(--pk) 60%,#fff));transition:width .1s linear}
.pk-time.low>i{background:${BAD}}
.pk-hud{display:flex;justify-content:space-between;align-items:center;font-weight:800;font-size:14px;margin-bottom:12px}
.pk-flame{display:inline-flex;align-items:center;gap:4px;color:#E8590C}
.pk-pron{font-size:40px;font-weight:900;text-align:center;letter-spacing:-.01em;margin:4px 0}
.pk-pron small{color:var(--muted);font-weight:700;font-size:19px}
.pk-inf{display:inline-block;padding:4px 12px;border-radius:99px;background:color-mix(in srgb,var(--pk) 12%,transparent);color:var(--pk);font-weight:700;font-size:14px}
.pk-pop{position:absolute;inset-inline:0;top:-4px;text-align:center;font-weight:900;color:${OK};animation:pkUp .7s ease-out both;pointer-events:none}
@keyframes pkUp{from{opacity:1;transform:translateY(8px)}to{opacity:0;transform:translateY(-26px)}}
/* Präposition-Brücke */
.pk-bridge{position:relative;margin:2px 0 18px;padding:10px 6px 0;border-radius:20px;background:linear-gradient(180deg,color-mix(in srgb,var(--pk) 10%,var(--surface)),var(--surface));border:1px solid var(--line);overflow:hidden}
.pk-planks{display:flex;gap:3px;align-items:flex-end;justify-content:center;padding:6px 6px 0;position:relative;z-index:1}
.pk-plank{flex:1;max-width:40px;height:16px;border-radius:5px 5px 3px 3px;border:2px dashed color-mix(in srgb,var(--pk) 40%,var(--line));background:transparent;transition:all .35s cubic-bezier(.3,1.5,.5,1)}
.pk-plank.cur{border-style:solid;border-color:var(--pk);animation:pkPulse 1.1s ease-in-out infinite}
.pk-plank.ok{border:2px solid color-mix(in srgb,var(--pk) 70%,#000);background:linear-gradient(180deg,color-mix(in srgb,var(--pk) 75%,#fff),var(--pk));transform:translateY(0)}
.pk-plank.bad{border:2px solid ${BAD};background:repeating-linear-gradient(135deg,${BAD},${BAD} 4px,#7a1c20 4px,#7a1c20 8px);transform:translateY(7px) rotate(7deg);opacity:.85}
@keyframes pkPulse{50%{transform:translateY(-3px)}}
.pk-water{height:30px;margin-top:-2px;background:linear-gradient(180deg,color-mix(in srgb,#4FA3D1 28%,transparent),color-mix(in srgb,#4FA3D1 10%,transparent));position:relative;overflow:hidden}
.pk-water::before{content:"";position:absolute;left:-50%;width:200%;top:6px;height:12px;background:radial-gradient(ellipse at 50% 100%,transparent 55%,color-mix(in srgb,#4FA3D1 35%,transparent) 56%,transparent 62%) 0 0/36px 12px repeat-x;animation:pkWave 3s linear infinite}
@keyframes pkWave{to{transform:translateX(36px)}}
.pk-sent{font-size:21px;line-height:1.7;font-weight:700;text-align:center;direction:ltr;margin:6px 0 16px}
.pk-gap{display:inline-block;min-width:64px;padding:1px 12px;border-radius:10px;border:2px dashed var(--pk);color:var(--pk);vertical-align:baseline}
.pk-gap.ok{border:2px solid ${OK};color:${OK};background:color-mix(in srgb,${OK} 10%,transparent)}
.pk-gap.bad{border:2px solid ${BAD};color:${BAD}}
/* Wortschlange */
.pk-snake{display:flex;flex-wrap:wrap;gap:6px;align-items:center;max-height:210px;overflow-y:auto;padding:4px 2px 8px;direction:ltr}
.pk-seg{padding:6px 12px;border-radius:99px;font-weight:800;font-size:15px;border:1.5px solid var(--line);background:var(--surface);position:relative;line-height:1.15;animation:pkSeg .35s cubic-bezier(.3,1.5,.5,1) both}
.pk-seg.me{background:color-mix(in srgb,var(--pk) 16%,var(--surface));border-color:color-mix(in srgb,var(--pk) 55%,var(--line))}
.pk-seg b{color:var(--pk)}
.pk-seg i{display:block;font-style:normal;font-weight:600;font-size:10.5px;color:var(--muted);margin-top:1px;max-width:110px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
@keyframes pkSeg{from{transform:scale(.4);opacity:0}to{transform:none;opacity:1}}
.pk-next{display:flex;align-items:center;justify-content:center;gap:12px;margin:10px 0 12px}
.pk-letter{width:64px;height:64px;border-radius:20px;display:grid;place-items:center;font-size:34px;font-weight:900;color:#fff;background:linear-gradient(145deg,color-mix(in srgb,var(--pk) 70%,#fff),var(--pk));box-shadow:0 8px 22px color-mix(in srgb,var(--pk) 38%,transparent);animation:pkPulse 1.4s ease-in-out infinite;text-transform:uppercase}
.pk-err{color:${BAD};font-weight:700;font-size:13.5px;text-align:center;min-height:20px;margin:6px 0}
.pk-sug{display:flex;gap:7px;flex-wrap:wrap;justify-content:center;margin-top:10px}
.pk-sug button{padding:6px 12px;border-radius:99px;border:1.5px dashed var(--pk);background:transparent;color:var(--pk);font-weight:700;cursor:pointer;font-family:inherit;font-size:14px}
/* Fehler-Detektiv */
.pk-file{position:relative;padding:20px 16px 18px;border-radius:20px;background:color-mix(in srgb,#E8C77A 18%,var(--surface));border:1px solid color-mix(in srgb,#C79A2E 40%,var(--line));box-shadow:0 6px 18px rgba(0,0,0,.06)}
.pk-file-tag{position:absolute;top:-11px;inset-inline-start:16px;padding:3px 12px;border-radius:8px;background:var(--pk);color:#fff;font-weight:800;font-size:12px;letter-spacing:.08em}
.pk-words{display:flex;flex-wrap:wrap;gap:8px 6px;justify-content:center;direction:ltr;margin:4px 0}
.pk-w{padding:7px 11px;border-radius:12px;border:1.5px solid transparent;background:var(--surface);color:var(--ink);font-weight:700;font-size:18px;cursor:pointer;font-family:inherit;transition:all .15s}
.pk-w:hover:not(:disabled){border-color:var(--pk)}
.pk-w:disabled{cursor:default}
.pk-w.bad{background:color-mix(in srgb,${BAD} 15%,var(--surface));border-color:${BAD};color:${BAD};animation:pkShake .3s}
.pk-w.found{background:color-mix(in srgb,${OK} 16%,var(--surface));border-color:${OK};color:${OK};text-decoration:underline wavy;text-underline-offset:4px}
.pk-w.reveal{border-color:#F5B301;background:rgba(245,179,1,.16)}
/* Radio-Quiz */
.pk-radio{border-radius:26px;padding:18px 16px 16px;color:#fff;background:linear-gradient(160deg,#2b2f3a,#161922);box-shadow:0 14px 34px rgba(0,0,0,.28),inset 0 1px 0 rgba(255,255,255,.1);position:relative;overflow:hidden}
.pk-radio::after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 20% 0%,color-mix(in srgb,var(--pk) 30%,transparent),transparent 55%);pointer-events:none}
.pk-rtop{display:flex;justify-content:space-between;align-items:center;font-size:12px;letter-spacing:.1em;font-weight:800;position:relative;z-index:1;direction:ltr}
.pk-air{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:99px;background:rgba(255,255,255,.08);color:rgba(255,255,255,.5)}
.pk-air i{width:8px;height:8px;border-radius:50%;background:#666}
.pk-air.on{background:rgba(232,55,55,.2);color:#ff7b7b}
.pk-air.on i{background:#ff3b3b;animation:pkBlink 1s infinite}
@keyframes pkBlink{50%{opacity:.25}}
.pk-dial{position:relative;z-index:1;margin:14px 0 8px;height:46px;border-radius:12px;background:rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.08);overflow:hidden;direction:ltr}
.pk-dial::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(255,255,255,.28) 0 1px,transparent 1px 12px);mask:linear-gradient(180deg,transparent 45%,#000 46%);-webkit-mask:linear-gradient(180deg,transparent 45%,#000 46%)}
.pk-needle{position:absolute;top:0;bottom:0;width:2px;background:#ff5a4d;box-shadow:0 0 10px #ff5a4d;left:38%;transition:left 1.2s ease}
.pk-dial.on .pk-needle{animation:pkSweep 3.2s ease-in-out infinite alternate}
@keyframes pkSweep{from{left:36%}to{left:41%}}
.pk-freq{position:absolute;top:5px;inset-inline-start:10px;font-size:11px;font-weight:800;color:rgba(255,255,255,.65)}
.pk-eq{position:relative;z-index:1;display:flex;gap:4px;align-items:flex-end;justify-content:center;height:46px;margin:6px 0 10px}
.pk-eq i{width:6px;height:6px;border-radius:3px;background:var(--pk);opacity:.55;transition:height .2s}
.pk-eq.on i{animation:pkEq .9s ease-in-out infinite alternate;opacity:1}
@keyframes pkEq{from{height:6px}to{height:42px}}
.pk-rbtn{position:relative;z-index:1;display:flex;gap:10px;justify-content:center}
.pk-rbtn button{min-height:46px;padding:0 20px;border-radius:14px;border:none;font-weight:800;font-size:15px;cursor:pointer;font-family:inherit;display:inline-flex;align-items:center;gap:7px}
.pk-rbtn .main{background:var(--pk);color:#fff}
.pk-rbtn .alt{background:rgba(255,255,255,.1);color:#fff}
.pk-tr{margin-top:12px;padding:12px 14px;border-radius:14px;background:var(--surface);border:1px solid var(--line);font-size:14.5px;line-height:1.65;direction:ltr;text-align:start;animation:pkIn .3s both}
.pk-q{font-weight:800;font-size:16.5px;margin:16px 0 10px;direction:ltr;text-align:start}
.pk-badge{display:inline-block;padding:2px 9px;border-radius:99px;font-size:11px;font-weight:800;background:rgba(255,255,255,.12);color:#fff;letter-spacing:.06em;text-transform:uppercase}
@media (prefers-reduced-motion:reduce){.pk *,.pk-in{animation-duration:.01ms!important;animation-iteration-count:1!important}}
`;
