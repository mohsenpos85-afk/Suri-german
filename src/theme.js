// Suri design tokens: one place for radius, type scale, shadows and accents.
export const R = { sm: 12, md: 16, lg: 24, pill: 999 };
export const FS = { xs: 12, sm: 14, md: 16, lg: 20, xl: 28 };
export const SH = {
  card: "0 1px 2px rgba(30,30,70,.05), 0 8px 24px rgba(30,30,70,.08)",
  lift: "0 2px 4px rgba(30,30,70,.06), 0 14px 34px rgba(30,30,70,.14)",
  glow: "0 6px 22px rgba(91,91,214,.35)",
};
export const COLOR = {
  primary: "#5B5BD6", primaryDk: "#4B45C4", tint: "#F1F0FE",
  accent: "#FF8A3D", accentDk: "#F0701A",
  ink: "#18181B", muted: "#71717A", line: "#E4E4E8", bg: "#FBFBFC",
};

// Shared white card shell used across lessons, exercises and home.
export const CARD = { background: "#fff", borderRadius: 22, border: "1px solid rgba(91,91,214,.08)", boxShadow: SH.card };
