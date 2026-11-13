// Suri design tokens. Values live in src/theme.css (CSS variables) so a level can re-theme the whole app.
export const R = { sm: 12, md: 16, lg: 24, pill: 999 };
export const FS = { xs: 12, sm: 14, md: 16, lg: 20, xl: 28 };
export const SH = {
  card: "var(--sh-card)",
  lift: "var(--sh-lift)",
  dark: "var(--sh-dark)",
  press: "var(--sh-press)",
  glow: "0 8px 22px -4px color-mix(in srgb, var(--acc) 55%, transparent)",
};
export const COLOR = {
  primary: "var(--acc-btn)", primaryDk: "var(--acc-dk)", tint: "var(--acc-lt)",
  accent: "var(--acc)", accentDk: "var(--acc-dk)",
  ink: "var(--ink)", muted: "var(--muted)", line: "var(--line)", bg: "var(--page)",
};

// Shared card shell: raised, mat blue-grey surface lit from the top-left.
export const CARD = { background: "var(--surface)", borderRadius: 24, boxShadow: "var(--sh-card)" };

// Append a hex alpha ("22") to a colour; works for CSS variables too.
export const A = (c, hh) => (typeof c === "string" && c.startsWith("var("))
  ? `color-mix(in srgb, ${c} ${Math.round(parseInt(hh, 16) / 255 * 100)}%, transparent)`
  : c + hh;

// Per-level accent families (main / light surface / dark tone), shared with theme.css.
export const LEVEL_PALETTE = {
  A1: { acc: "#659DB8", lt: "#D7E8EF", dk: "#315B71" },
  A2: { acc: "#569F95", lt: "#D4EBE6", dk: "#2C655F" },
  B1: { acc: "#547CB6", lt: "#D8E3F3", dk: "#304D7C" },
  B2: { acc: "#8877B5", lt: "#E8E1F2", dk: "#544477" },
  C1: { acc: "#BD8D52", lt: "#F2E5D4", dk: "#785329" },
  C2: { acc: "#9A657F", lt: "#EDDEE6", dk: "#633F53" },
};

// Re-theme the whole app for one CEFR level (sets <html data-level>).
export function setThemeLevel(id) {
  try { if (LEVEL_PALETTE[id]) document.documentElement.dataset.level = id; } catch { /* no DOM */ }
}
