// Kurmanji (Latin script) layer. The app's base Kurdish text is Sorani; every Sorani string that has a
// Kurmanji equivalent is listed here as  "Sorani text": "Kurmanji text".  Missing entries fall back to Sorani.
// Parts are split by content area so they can be extended and reviewed independently.
import other from "./other.json";

import lessons from "./lessons.json";

const KMJ = { ...lessons, ...other };

let _raw = null, _on = false;
function isKurmanji() {
  try {
    const raw = localStorage.getItem("ob_data");
    if (raw !== _raw) { _raw = raw; _on = !!raw && JSON.parse(raw).kuDialect === "kurmanji"; }
    return _on;
  } catch { return false; }
}

/** Returns the Kurmanji text for a Sorani string when Kurmanji is active, else the string itself. */
export function kmj(s) {
  if (typeof s !== "string" || !s || !isKurmanji()) return s;
  const t = KMJ[s] ?? KMJ[s.trim()];
  return t === undefined ? s : t;
}
export const kmjCount = () => Object.keys(KMJ).length;
