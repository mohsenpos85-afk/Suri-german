import { jsxDEV as _jsxDEV, Fragment } from "react/jsx-dev-runtime";
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
export function jsxDEV(type, props, key, isStatic, source, self) { return _jsxDEV(type, fix(type, props), key, isStatic, source, self); }
