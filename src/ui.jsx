import { R, FS, SH } from "./theme";

export function Card({ children, style, onClick, tint, ...rest }) {
  return (
    <div className={onClick ? "s-card s-press" : "s-card"} onClick={onClick}
      style={{ background: tint || "var(--surface)", borderRadius: R.lg, padding: 18, boxShadow: SH.card, ...style }} {...rest}>
      {children}
    </div>
  );
}

export function Button({ children, variant = "primary", style, ...rest }) {
  const soft = variant === "soft";
  return (
    <button type="button" className={soft ? "s-press" : "s-cta"} {...rest}
      style={soft ? { minHeight: 44, padding: "0 20px", border: "none", borderRadius: R.pill, fontWeight: 700, fontSize: FS.md, cursor: "pointer",
        fontFamily: "inherit", background: "var(--acc-lt)", color: "var(--acc-tx)", boxShadow: SH.card, ...style } : style}>
      {children}
    </button>
  );
}

export function Chip({ children, active, style, ...rest }) {
  return (
    <span className="s-chip" {...rest}
      style={{ display: "inline-flex", alignItems: "center", gap: 6, minHeight: 28, padding: "0 12px", borderRadius: R.pill,
        fontSize: FS.xs, fontWeight: 700, background: active ? "var(--acc-btn)" : "var(--acc-lt)", color: active ? "#fff" : "var(--acc-tx)", ...style }}>
      {children}
    </span>
  );
}
