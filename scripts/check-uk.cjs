/*
 * Ukrainian ("uk") coverage scanner.
 * Goal: guarantee that a Ukrainian user NEVER sees a Kurdish/other fallback.
 * Because the render helpers fall back to the ku/base field when the uk field
 * is missing (tC → item.uk || item.ku, tEx → item.exuk || item.exku,
 * tF → item[field+'Uk'] || item[field]), every translatable record must carry
 * its uk / exuk / <field>Uk value.
 *
 * Usage:  node scripts/check-uk.cjs           (summary counts)
 *         node scripts/check-uk.cjs --list    (list every missing field)
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
  console.log('Ukrainian (uk) coverage scan\n');

  // ---- src/data modules ----
  const lessons = (await import('file://' + path.join(ROOT, 'src/data/lessons.js').replace(/\\/g, '/'))).LESSONS;
  lessons.forEach((l) => {
    ['titleUk', 'grammarUk'].forEach((f) => { if (!l[f]) report('LESSONS meta', 'lesson ' + l.id + ' missing ' + f); });
    (l.words || []).forEach((w) => {
      if (!w.uk) report('LESSONS words', l.id + ' "' + (w.de || '') + '" missing uk');
      if (w.ex && !w.exuk) report('LESSONS words.ex', l.id + ' "' + w.de + '" missing exuk');
    });
  });

  const VERBS = (await import('file://' + path.join(ROOT, 'src/data/verbs.js').replace(/\\/g, '/'))).VERBS;
  Object.keys(VERBS).forEach((lv) => VERBS[lv].forEach((cat) => {
    if (!cat.titleUk) report('VERBS meta', 'cat ' + cat.id + ' missing titleUk');
    (cat.words || []).forEach((w) => {
      if (!w.uk) report('VERBS words', cat.id + ' "' + (w.de || '') + '" missing uk');
      if (w.ex && !w.exuk) report('VERBS words.ex', cat.id + ' "' + w.de + '" missing exuk');
    });
  }));

  const FLASHCARDS = (await import('file://' + path.join(ROOT, 'src/data/flashcards.js').replace(/\\/g, '/'))).FLASHCARDS;
  Object.keys(FLASHCARDS).forEach((lv) => FLASHCARDS[lv].forEach((w) => {
    if (!w.uk) report('FLASHCARDS', lv + ' "' + (w.de || '') + '" missing uk');
    if (w.ex && !w.exuk) report('FLASHCARDS.ex', lv + ' "' + w.de + '" missing exuk');
  }));

  const gmod = await import('file://' + path.join(ROOT, 'src/data/grammar.js').replace(/\\/g, '/'));
  Object.keys(gmod.GRAMMAR).forEach((lv) => gmod.GRAMMAR[lv].forEach((t) => {
    ['uk', 'expUk'].forEach((f) => { if (!t[f]) report('GRAMMAR topic', lv + ' "' + t.de + '" missing ' + f); });
    (t.ex || []).forEach((e, i) => { if (!e.uk) report('GRAMMAR ex', lv + ' "' + t.de + '" ex[' + i + ']'); });
    // article groups (label uk, rulesUk, and each example word's 6th element = uk)
    (t.groups || []).forEach((g) => {
      if (!g.uk) report('GRAMMAR group', lv + ' "' + t.de + '" group ' + g.art + ' missing uk');
      if (!g.rulesUk) report('GRAMMAR group.rules', lv + ' "' + t.de + '" group ' + g.art + ' missing rulesUk');
      (g.words || []).forEach((w) => { if (!w[5]) report('GRAMMAR group.words', lv + ' "' + t.de + '" ' + w[0] + ' missing uk'); });
    });
  }));
  Object.keys(gmod.GTABLES).forEach((k) => {
    ['headersUk', 'rowsUk'].forEach((f) => { if (!gmod.GTABLES[k][f]) report('GTABLES', '"' + k + '" missing ' + f); });
  });

  // ---- in-file App.jsx blocks ----
  const MASALS = extractLiteral('const MASALS = {');
  Object.keys(MASALS).forEach((lv) => MASALS[lv].forEach((s) => {
    if (!s.uk) report('MASALS title', s.id);
    s.paragraphs.forEach((p, i) => { if (!p.uk) report('MASALS para', s.id + ' [' + i + ']'); });
  }));

  const bookDict = extractLiteral('const BOOK_DICT = {');
  Object.entries(bookDict).forEach(([k, e]) => {
    if (!e.uk) report('BOOK_DICT', k);
    if (e.ex && !e.ex_uk) report('BOOK_DICT.ex', k);
  });

  const storyDict = extractLiteral('const STORY_DICT = ', '(');
  const seen = new Set();
  Object.entries(storyDict).forEach(([k, e]) => {
    const sig = JSON.stringify(e); if (seen.has(sig)) return; seen.add(sig);
    if (!e.uk) report('STORY_DICT', k);
    if (e.ex && !e.ex_uk) report('STORY_DICT.ex', k);
  });

  [['LESSON_DIALOGS', 'const LESSON_DIALOGS = {'], ['EXTRA_DIALOGS', 'const EXTRA_DIALOGS = {']].forEach(([name, m]) => {
    const D = extractLiteral(m);
    const iter = name === 'LESSON_DIALOGS' ? Object.values(D) : Object.values(D).flat();
    iter.forEach((dlg) => (dlg.lines || []).forEach((ln, i) => { if (!ln.uk) report(name, (dlg.id || dlg.theme) + ' line[' + i + ']'); }));
  });

  // ---- Journey stories (array literals of scene objects with .lines[].s_uk) ----
  const storyConsts = ['ANKUNFT_STORY','BOLUM2_STORY','BOLUM3_STORY','BOLUM4_STORY','BOLUM6_STORY','BOLUM7_STORY','BOLUM8_STORY','BOLUM9_STORY','BOLUM10_STORY','BOLUM_ARBEITSSUCHE_STORY'];
  storyConsts.forEach((name) => {
    const arr = extractLiteral('const ' + name + ' = [', '[');
    if (!arr) return;
    arr.forEach((scene, si) => (scene.lines || []).forEach((ln, i) => {
      // narration lines carry .s (German/base); need .s_uk. Dialogue lines with .de are learning-words (stay German).
      if (ln.s && !ln.s_uk) report('JOURNEY ' + name, 'scene[' + si + '] line[' + i + ']');
    }));
  });

  console.log('--- missing uk fields by bucket ---');
  const buckets = Object.keys(counts).sort();
  if (buckets.length === 0) console.log('  ✓ none');
  else buckets.forEach((b) => console.log('  ' + b.padEnd(22), counts[b]));
  console.log('---');
  if (problems === 0) console.log('✓ Ukrainian fully covers every record — no Kurdish/base fallback possible.');
  else console.log('✗ ' + problems + ' field(s) missing uk.');
  process.exit(problems === 0 ? 0 : 1);
})().catch((e) => { console.error('scan failed:', e); process.exit(2); });
