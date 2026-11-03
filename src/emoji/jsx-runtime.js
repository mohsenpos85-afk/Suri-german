import { jsx as _jsx, jsxs as _jsxs, Fragment } from "react/jsx-runtime";
import { swapEmoji } from "./swap.js";

const SKIP = new Set(["option", "textarea", "title", "text", "tspan", "style", "script", "input"]);
function fix(type, props) {
  try {
    if (typeof type === "string" && !SKIP.has(type) && props && props.children !== undefined) {
      const next = swapEmoji(props.children);
      if (next !== props.children) return { ...props, children: next };
    }
  } catch { /* never break rendering */ }
  return props;
}
export { Fragment };
export function jsx(type, props, key) { return _jsx(type, fix(type, props), key); }
export function jsxs(type, props, key) { return _jsxs(type, fix(type, props), key); }
