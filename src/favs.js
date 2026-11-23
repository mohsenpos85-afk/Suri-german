// Favourites are always shown in their base form: verbs as infinitive, nouns as "article + singular".
// Data-driven (lessons + verb lists) with a small rule set for conjugated / plural forms.
import { LESSONS } from "./data/lessons";
import { VERBS } from "./data/verbs";

const PREPS = new Set("an auf aus bei mit nach von vor zu für über um in gegen durch unter ohne bis zwischen neben hinter".split(" "));
const ARTICLES = new Set(["der", "die", "das"]);

// form → infinitive for common irregular verbs
const IRREG = {};
`sein: bin bist ist sind seid war warst waren wart gewesen
haben: habe hast hat habt hatte hattest hatten hattet gehabt
werden: werde wirst wird werdet wurde wurdest wurden wurdet geworden worden
gehen: gehe gehst geht ging gingst gingen gingt gegangen
kommen: komme kommst kommt kam kamst kamen kamt gekommen
sehen: sehe siehst sieht sah sahst sahen saht gesehen
essen: esse isst ist aß aßen gegessen
trinken: trank tranken getrunken
geben: gebe gibst gibt gab gaben gegeben
nehmen: nehme nimmst nimmt nahm nahmen genommen
sprechen: spreche sprichst spricht sprach sprachen gesprochen
lesen: lese liest las lasen gelesen
schreiben: schrieb schrieben geschrieben
fahren: fahre fährst fährt fuhr fuhren gefahren
laufen: laufe läufst läuft lief liefen gelaufen
schlafen: schlafe schläfst schläft schlief schliefen geschlafen
finden: finde findest findet fand fanden gefunden
bleiben: bleibe bleibst bleibt blieb blieben geblieben
stehen: stehe stehst steht stand standen gestanden
liegen: liege liegst liegt lag lagen gelegen
sitzen: sitze sitzt saß saßen gesessen
wissen: weiß weißt wusste wussten gewusst
können: kann kannst konnte konnten gekonnt
müssen: muss musst musste mussten gemusst
wollen: will willst wollte wollten gewollt
sollen: soll sollst sollte sollten gesollt
dürfen: darf darfst durfte durften gedurft
mögen: mag magst mochte mochten gemocht
tun: tue tust tut tat taten getan
bringen: bringe bringst bringt brachte brachten gebracht
denken: denke denkst denkt dachte dachten gedacht
kennen: kenne kennst kennt kannte kannten gekannt
nennen: nenne nennst nennt nannte nannten genannt
rufen: rufe rufst ruft rief riefen gerufen
helfen: helfe hilfst hilft half halfen geholfen
treffen: treffe triffst trifft traf trafen getroffen
vergessen: vergesse vergisst vergisst vergaß vergaßen vergessen
beginnen: beginne beginnst beginnt begann begannen begonnen
gewinnen: gewinne gewinnst gewinnt gewann gewannen gewonnen
schwimmen: schwimme schwimmst schwimmt schwamm schwammen geschwommen
singen: singe singst singt sang sangen gesungen
ziehen: ziehe ziehst zieht zog zogen gezogen
fliegen: fliege fliegst fliegt flog flogen geflogen
halten: halte hältst hält hielt hielten gehalten
lassen: lasse lässt ließ ließen gelassen
fallen: falle fällst fällt fiel fielen gefallen
tragen: trage trägst trägt trug trugen getragen
waschen: wasche wäschst wäscht wusch wuschen gewaschen
werfen: werfe wirfst wirft warf warfen geworfen
sterben: sterbe stirbst stirbt starb starben gestorben
verstehen: verstehe verstehst versteht verstand verstanden
bekommen: bekomme bekommst bekommt bekam bekamen
gefallen: gefalle gefällst gefällt gefiel gefielen`
  .split("\n").forEach((l) => { const [inf, forms] = l.split(":"); (forms || "").trim().split(/\s+/).forEach((f) => { if (f && !IRREG[f] && f !== inf) IRREG[f] = inf; }); });
// words that are also nouns/adjectives must not be read as verb forms

let _idx = null;
function clean(de) {
  let s = String(de || "").replace(/\s+/g, " ").trim();
  s = s.split("→")[0].trim();           // "machen → gemacht" → "machen"
  s = s.replace(/\s*\([^)]*\)\s*/g, " ").trim();   // "alt (gebraucht)" → "alt"
  s = s.split(" / ")[0].trim();          // "arm an / reich an" → "arm an"
  s = s.replace(/[.!?,;:]+$/g, "").trim();
  return s;
}
function index() {
  if (_idx) return _idx;
  const byKey = new Map(), verbs = new Set(), nouns = new Map(); // nouns: bare lowercase → "der Tisch"
  const add = (raw, e, isVerb) => {
    const c = clean(raw); if (!c) return;
    const k = c.toLowerCase();
    if (!byKey.has(k)) byKey.set(k, e);
    const m = c.match(/^(der|die|das) (\S+)$/i);
    if (m) { const bare = m[2].toLowerCase(); if (!nouns.has(bare)) nouns.set(bare, `${m[1].toLowerCase()} ${m[2]}`); }
    else if (isVerb && /^[a-zäöüß]+(en|ern|eln|n)$/.test(k)) verbs.add(k);
  };
  try { Object.values(VERBS).forEach((cats) => cats.forEach((c) => c.words.forEach((w) => add(w.de, w, true)))); } catch { /* data */ }
  try { LESSONS.forEach((l) => (l.words || []).forEach((w) => add(w.de, w, false))); } catch { /* data */ }
  _idx = { byKey, verbs, nouns };
  return _idx;
}

function verbLemma(w, verbs) {
  const k = w.toLowerCase();
  if (verbs.has(k)) return k;
  if (IRREG[k]) return IRREG[k];
  const stems = [];
  let m;
  if ((m = k.match(/^ge(.+)t$/))) stems.push(m[1] + "en", m[1] + "n");
  if ((m = k.match(/^ge(.+)en$/))) stems.push(m[1] + "en");
  if ((m = k.match(/^(.+?)(te|test|ten|tet)$/))) stems.push(m[1] + "en", m[1] + "n");
  if ((m = k.match(/^(.+?)(est|et|st|t|e)$/))) stems.push(m[1] + "en", m[1] + "n");
  if ((m = k.match(/^(.+?)en$/))) stems.push(m[1] + "en");
  return stems.find((c) => verbs.has(c)) || null;
}
const unUmlaut = (s) => s.replace(/äu/g, "au").replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u");
function nounLemma(w, nouns) {
  const k = w.toLowerCase();
  if (nouns.has(k)) return nouns.get(k);
  const base = [];
  for (const suf of ["nen", "en", "n", "e", "er", "s"]) if (k.endsWith(suf) && k.length > suf.length + 2) base.push(k.slice(0, -suf.length));
  for (const b of [...base]) base.push(unUmlaut(b));
  base.push(unUmlaut(k));
  for (const b of base) if (nouns.has(b)) return nouns.get(b);
  return null;
}

/**
 * @returns {{ de: string, kind: "verb"|"noun"|"adj"|"other", prep: string|null, entry: object|null }}
 *  de = base form shown to the learner (infinitive / "der Tisch" / adjective), prep = fixed preposition if the data has one.
 */
export function lemmatize(raw) {
  const { byKey, verbs, nouns } = index();
  let s = clean(raw);
  if (!s) return { de: String(raw || ""), kind: "other", prep: null, entry: null };
  // "ich gehe" → "gehe"
  s = s.replace(/^(ich|du|er|sie|es|wir|ihr) (?=\S+$)/i, "");
  const lower = s.toLowerCase();
  const parts = s.split(" ");

  // article + noun
  if (ARTICLES.has(parts[0].toLowerCase()) && parts.length === 2) {
    const lem = nounLemma(parts[1], nouns) || `${parts[0].toLowerCase()} ${parts[1]}`;
    return { de: lem, kind: "noun", prep: null, entry: byKey.get(lem.toLowerCase()) || null };
  }
  // adjective (or verb) + fixed preposition: "gut in", "warten auf"
  if (parts.length === 2 && PREPS.has(parts[1].toLowerCase()) && !ARTICLES.has(parts[0].toLowerCase()) && parts[0].toLowerCase() !== "sich") {
    const head = parts[0];
    const vl = verbLemma(head, verbs);
    if (vl && /^[a-zäöüß]+$/.test(head) && (verbs.has(head.toLowerCase()) || IRREG[head.toLowerCase()])) return { de: vl, kind: "verb", prep: parts[1].toLowerCase(), entry: byKey.get(vl) || null };
    return { de: head, kind: "adj", prep: parts[1].toLowerCase(), entry: byKey.get(lower) || byKey.get(head.toLowerCase()) || null };
  }
  if (parts.length === 1) {
    const w = parts[0];
    const exact = byKey.get(lower);
    if (/^[a-zäöüß]+$/.test(w) || /^[A-ZÄÖÜ]/.test(w)) {
      if (!/^[A-ZÄÖÜ]/.test(w)) {
        const vl = verbLemma(w, verbs);
        if (vl) return { de: vl, kind: "verb", prep: null, entry: byKey.get(vl) || exact || null };
        return { de: w, kind: "adj", prep: null, entry: exact || null };
      }
      // capitalised single word → noun
      const lem = nounLemma(w, nouns);
      if (lem) return { de: lem, kind: "noun", prep: null, entry: byKey.get(lem.toLowerCase()) || null };
      return { de: w, kind: exact ? "noun" : "other", prep: null, entry: exact || null };
    }
  }
  // "sich freuen" and other multi-word entries: keep, but still a verb if it ends like one
  if (parts[0].toLowerCase() === "sich") return { de: s, kind: "verb", prep: null, entry: byKey.get(lower) || null };
  return { de: s, kind: "other", prep: null, entry: byKey.get(lower) || null };
}

export const baseKey = (de) => lemmatize(de).de.toLowerCase();
