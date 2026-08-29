/*
 * French ("fr") coverage scanner.
 * Goal: guarantee that a French user NEVER sees a Kurdish/other fallback.
 * Because the render helpers fall back to the ku/base field when the fr field
 * is missing (tC → item.fr || item.ku, tEx → item.exfr || item.exku,
 * tF → item[field+'Fr'] || item[field]), every translatable record must carry
 * its fr / exfr / <field>Fr value.
 *
 * Usage:  node scripts/check-fr.cjs           (summary counts)
 *         node scripts/check-fr.cjs --list    (list every missing field)
 * Exit code 1 if any gap is found (suitable for CI).
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP = path.join(ROOT, 'src', 'App.jsx');
const LIST = process.argv.includes('--list');

const counts = {};
let problems = 0;
function report(bucket, detail) {
  problems++;
  counts[bucket] = (counts[bucket] || 0) + 1;
  if (LIST && counts[bucket] <= 40) console.log('  ✗', bucket, detail || '');
}

// ---- pull a top-level literal out of App.jsx by balanced brackets ----
const src = fs.readFileSync(APP, 'utf8');
function extractLiteral(marker, openChar) {
  const start = src.indexOf(marker);
  if (start === -1) return null;
  const oc = openChar || '{';
  const cc = oc === '{' ? '}' : oc === '[' ? ']' : ')';
  const bs = src.indexOf(oc, start);
  let d = 0, i = bs, st = null, esc = false;
  for (; i < src.length; i++) {
    const c = src[i];
    if (st) { if (esc) { esc = false; continue; } if (c === '\\') { esc = true; continue; } if (c === st) st = null; continue; }
    if (c === "'" || c === '"' || c === '`') { st = c; continue; }
    if (c === oc) d++; else if (c === cc) { d--; if (d === 0) { i++; break; } }
  }
  let lit = src.slice(bs, i);
  if (oc === '(') lit = lit + '()';
  const tmp = path.join(require('os').tmpdir(), 'ukblk_' + Math.random().toString(36).slice(2) + '.cjs');
  fs.writeFileSync(tmp, 'module.exports = (' + lit + ');', 'utf8');
  try { return require(tmp); }
  finally { try { fs.unlinkSync(tmp); } catch {} }
}

(async () => {
  console.log('French coverage scan\n');

  // ---- src/data modules ----
  const lessons = (await import('file://' + path.join(ROOT, 'src/data/lessons.js').replace(/\\/g, '/'))).LESSONS;
  lessons.forEach((l) => {
    ['titleFr', 'grammarFr'].forEach((f) => { if (!l[f]) report('LESSONS meta', 'lesson ' + l.id + ' missing ' + f); });
    (l.words || []).forEach((w) => {
      if (!w.fr) report('LESSONS words', l.id + ' "' + (w.de || '') + '" missing fr');
      if (w.ex && !w.exfr) report('LESSONS words.ex', l.id + ' "' + w.de + '" missing exfr');
    });
  });

  const VERBS = (await import('file://' + path.join(ROOT, 'src/data/verbs.js').replace(/\\/g, '/'))).VERBS;
  Object.keys(VERBS).forEach((lv) => VERBS[lv].forEach((cat) => {
    if (!cat.titleFr) report('VERBS meta', 'cat ' + cat.id + ' missing titleFr');
    (cat.words || []).forEach((w) => {
      if (!w.fr) report('VERBS words', cat.id + ' "' + (w.de || '') + '" missing fr');
      if (w.ex && !w.exfr) report('VERBS words.ex', cat.id + ' "' + w.de + '" missing exfr');
    });
  }));

  const FLASHCARDS = (await import('file://' + path.join(ROOT, 'src/data/flashcards.js').replace(/\\/g, '/'))).FLASHCARDS;
  Object.keys(FLASHCARDS).forEach((lv) => FLASHCARDS[lv].forEach((w) => {
    if (!w.fr) report('FLASHCARDS', lv + ' "' + (w.de || '') + '" missing fr');
    if (w.ex && !w.exfr) report('FLASHCARDS.ex', lv + ' "' + w.de + '" missing exfr');
  }));

  const gmod = await import('file://' + path.join(ROOT, 'src/data/grammar.js').replace(/\\/g, '/'));
  Object.keys(gmod.GRAMMAR).forEach((lv) => gmod.GRAMMAR[lv].forEach((t) => {
    ['fr', 'expFr'].forEach((f) => { if (!t[f]) report('GRAMMAR topic', lv + ' "' + t.de + '" missing ' + f); });
    (t.ex || []).forEach((e, i) => { if (!e.fr) report('GRAMMAR ex', lv + ' "' + t.de + '" ex[' + i + ']'); });
    // article groups (label uk, rulesFr, and each example word's 8th element = fr)
    (t.groups || []).forEach((g) => {
      if (!g.fr) report('GRAMMAR group', lv + ' "' + t.de + '" group ' + g.art + ' missing fr');
      if (!g.rulesFr) report('GRAMMAR group.rules', lv + ' "' + t.de + '" group ' + g.art + ' missing rulesFr');
      (g.words || []).forEach((w) => { if (!w[8]) report('GRAMMAR group.words', lv + ' "' + t.de + '" ' + w[0] + ' missing fr'); });
    });
  }));
  Object.keys(gmod.GTABLES).forEach((k) => {
    ['headersFr', 'rowsFr'].forEach((f) => { if (!gmod.GTABLES[k][f]) report('GTABLES', '"' + k + '" missing ' + f); });
  });

  // ---- in-file App.jsx blocks ----
  const MASALS = extractLiteral('const MASALS = {');
  Object.keys(MASALS).forEach((lv) => MASALS[lv].forEach((s) => {
    if (!s.fr) report('MASALS title', s.id);
    s.paragraphs.forEach((p, i) => { if (!p.fr) report('MASALS para', s.id + ' [' + i + ']'); });
  }));

  const bookDict = extractLiteral('const BOOK_DICT = {');
  Object.entries(bookDict).forEach(([k, e]) => {
    if (!e.fr) report('BOOK_DICT', k);
    if (e.ex && !e.ex_fr) report('BOOK_DICT.ex', k);
  });

  const storyDict = extractLiteral('const STORY_DICT = ', '(');
  const seen = new Set();
  Object.entries(storyDict).forEach(([k, e]) => {
    const sig = JSON.stringify(e); if (seen.has(sig)) return; seen.add(sig);
    if (!e.fr) report('STORY_DICT', k);
    if (e.ex && !e.ex_fr) report('STORY_DICT.ex', k);
  });

  [['LESSON_DIALOGS', 'const LESSON_DIALOGS = {'], ['EXTRA_DIALOGS', 'const EXTRA_DIALOGS = {']].forEach(([name, m]) => {
    const D = extractLiteral(m);
    const iter = name === 'LESSON_DIALOGS' ? Object.values(D) : Object.values(D).flat();
    iter.forEach((dlg) => (dlg.lines || []).forEach((ln, i) => { if (!ln.fr) report(name, (dlg.id || dlg.theme) + ' line[' + i + ']'); }));
  });

  // ---- Word Match examples (A1-C2, verbs/nouns/adjectives) ----
  ['FIIL_DATA', 'ISIM_DATA', 'SIFAT_DATA'].forEach((name) => {
    const rows = extractLiteral('const ' + name + ' = [', '[');
    rows.forEach((row, i) => Object.keys(row).filter((key) => /^ex(?:_(?:b1|b2|c1|c2))?_tr$/.test(key)).forEach((key) => {
      const frKey = key.replace(/_tr$/, '_fr');
      if (!row[frKey]) report('WORDMATCH examples', name + ' row[' + i + '] missing ' + frKey);
    }));
  });
  // ---- Games and LiD ----
  ['SATZ_DATA', 'ARTIKEL_DATA'].forEach((name) => {
    const rows = extractLiteral('const ' + name + ' = [', '[');
    rows.forEach((row, i) => { if (row.en && !row.fr) report(name, 'row[' + i + '] missing fr'); });
  });
  const lid = extractLiteral('const LID_T = {');
  if (!lid.fr) report('LID_T', 'missing fr locale');
  else Object.keys(lid.en).forEach((key) => { if (!lid.fr[key]) report('LID_T', 'missing fr.' + key); });

  // ---- All Journey stories (scene locations and lines) ----
  const storyConsts = [...src.matchAll(/const\s+([A-Z0-9_]+_STORY)\s*=\s*\[/g)].map((m) => m[1]);
  storyConsts.forEach((name) => {
    const arr = extractLiteral('const ' + name + ' = [', '[');
    if (!arr) return;
    arr.forEach((scene, si) => {
      if (scene.place && !scene.place_fr) report('JOURNEY place', name + ' scene[' + si + ']');
      (scene.lines || []).forEach((ln, i) => {
        if (ln.s && !ln.s_fr) report('JOURNEY line', name + ' scene[' + si + '] line[' + i + ']');
      });
    });
  });
  console.log('--- missing fr fields by bucket ---');
  const buckets = Object.keys(counts).sort();
  if (buckets.length === 0) console.log('  ✓ none');
  else buckets.forEach((b) => console.log('  ' + b.padEnd(22), counts[b]));
  console.log('---');
  if (problems === 0) console.log('✓ French fully covers every record — no Kurdish/base fallback possible.');
  else console.log('✗ ' + problems + ' field(s) missing fr.');
  process.exit(problems === 0 ? 0 : 1);
})().catch((e) => { console.error('scan failed:', e); process.exit(2); });
