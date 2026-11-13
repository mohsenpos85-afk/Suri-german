import { R, FS, SH, COLOR } from "./theme";

export function Card({ children, style, onClick, tint, ...rest }) {
  return (
    <div className={onClick ? "s-card s-press" : "s-card"} onClick={onClick}
      style={{ background: tint || "#fff", borderRadius: R.lg, padding: 18, boxShadow: SH.card, ...style }} {...rest}>
      {children}
    </div>
  );
}

export function Button({ children, variant = "primary", style, ...rest }) {
  const v = {
    primary: { background: `linear-gradient(135deg,${COLOR.primary},${COLOR.primaryDk})`, color: "#fff", boxShadow: SH.glow },
    accent: { background: `linear-gradient(135deg,${COLOR.accent},${COLOR.accentDk})`, color: "#fff", boxShadow: "0 6px 20px rgba(255,138,61,.4)" },
    soft: { background: COLOR.tint, color: COLOR.primary, boxShadow: "none" },
  }[variant];
  return (
    <button type="button" className="s-press" {...rest}
      style={{ minHeight: 44, padding: "0 20px", border: "none", borderRadius: R.pill, fontWeight: 700,
        fontSize: FS.md, cursor: "pointer", fontFamily: "inherit", ...v, ...style }}>
      {children}
    </button>
  );
}

export function Chip({ children, active, style, ...rest }) {
  return (
    <span className="s-chip" {...rest}
      style={{ display: "inline-flex", alignItems: "center", gap: 6, minHeight: 28, padding: "0 12px",
        borderRadius: R.pill, fontSize: FS.xs, fontWeight: 700,
        background: active ? COLOR.primary : COLOR.tint, color: active ? "#fff" : COLOR.primary, ...style }}>
      {children}
    </span>
  );
}
