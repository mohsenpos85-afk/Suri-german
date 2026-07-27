/*
 * Data-integrity / i18n coverage check.
 * Verifies every content record carries all "complete" UI languages (ku, tr, en, ar)
 * for the fields that are supposed to be translated, across both the src/data/*
 * modules and the large in-file data blocks inside src/App.jsx.
 *
 * Usage:  node scripts/check-i18n.cjs
 * Exit code 1 if any gaps are found (suitable for CI).
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP = path.join(ROOT, 'src', 'App.jsx');
const LANGS = ['ku', 'tr', 'en', 'ar'];

let problems = 0;
const report = (label, detail) => { problems++; if (problems <= 60) console.log('  ✗', label, detail || ''); };

// ---- helpers to pull a top-level literal out of App.jsx by balanced brackets ----
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
  if (oc === '(') lit = lit + '()'; // IIFE (STORY_DICT): captured (() => {...}), now call it
  const tmp = path.join(require('os').tmpdir(), 'i18nblk_' + Math.random().toString(36).slice(2) + '.cjs');
  fs.writeFileSync(tmp, 'module.exports = (' + lit + ');', 'utf8');
  try { return require(tmp); }
  finally { try { fs.unlinkSync(tmp); } catch {} }
}

function checkWord(w, ctx, exReq) {
  LANGS.forEach((l) => { if (l !== 'ku' && !w[l]) report(ctx + ' word "' + (w.de || '') + '" missing ' + l); });
  if (!w.ku) report(ctx + ' word "' + (w.de || '') + '" missing ku');
  if (exReq && w.ex) {
    ['extr', 'exen', 'exar', 'exku'].forEach((f) => { if (!w[f]) report(ctx + ' "' + w.de + '" missing ' + f); });
  }
}

(async () => {
  console.log('i18n coverage check — languages:', LANGS.join(', '));

  // ---- src/data modules ----
  const lessons = (await import('file://' + path.join(ROOT, 'src/data/lessons.js').replace(/\\/g, '/'))).LESSONS;
  console.log('LESSONS:', lessons.length, 'lessons');
  lessons.forEach((l) => {
    ['titleTr', 'titleEn', 'titleAr', 'grammarTr', 'grammarEn', 'grammarAr'].forEach((f) => { if (!l[f]) report('LESSON ' + l.id + ' missing ' + f); });
    (l.words || []).forEach((w) => checkWord(w, 'LESSON ' + l.id, true));
  });

  const verbsMod = (await import('file://' + path.join(ROOT, 'src/data/verbs.js').replace(/\\/g, '/'))).VERBS;
  Object.keys(verbsMod).forEach((lv) => verbsMod[lv].forEach((cat) => {
    ['titleTr', 'titleEn', 'titleAr'].forEach((f) => { if (!cat[f]) report('VERB cat ' + cat.id + ' missing ' + f); });
    (cat.words || []).forEach((w) => checkWord(w, 'VERB ' + cat.id, true));
  }));

  const fc = (await import('file://' + path.join(ROOT, 'src/data/flashcards.js').replace(/\\/g, '/'))).FLASHCARDS;
  Object.keys(fc).forEach((lv) => fc[lv].forEach((w) => checkWord(w, 'FLASHCARD ' + lv, true)));

  const gmod = await import('file://' + path.join(ROOT, 'src/data/grammar.js').replace(/\\/g, '/'));
  Object.keys(gmod.GRAMMAR).forEach((lv) => gmod.GRAMMAR[lv].forEach((t) => {
    ['tr', 'en', 'ar', 'expTr', 'expEn', 'expAr'].forEach((f) => { if (!t[f]) report('GRAMMAR ' + lv + ' "' + t.de + '" missing ' + f); });
    (t.ex || []).forEach((e, i) => LANGS.forEach((l) => { if (!e[l]) report('GRAMMAR ' + lv + ' "' + t.de + '" ex[' + i + '] missing ' + l); }));
  }));
  Object.keys(gmod.GTABLES).forEach((k) => {
    ['headersTr', 'headersEn', 'headersAr', 'rowsTr', 'rowsEn', 'rowsAr'].forEach((f) => { if (!gmod.GTABLES[k][f]) report('GTABLE "' + k + '" missing ' + f); });
  });

  // ---- in-file App.jsx blocks ----
  const MASALS = extractLiteral('const MASALS = {');
  Object.keys(MASALS).forEach((lv) => MASALS[lv].forEach((s) => {
    ['tr', 'en', 'ar'].forEach((f) => { if (!s[f]) report('MASAL ' + s.id + ' title missing ' + f); });
    s.paragraphs.forEach((p, i) => LANGS.forEach((l) => { if (!p[l]) report('MASAL ' + s.id + ' para[' + i + '] missing ' + l); }));
  }));

  const bookDict = extractLiteral('const BOOK_DICT = {');
  Object.entries(bookDict).forEach(([k, e]) => {
    ['tr', 'ku', 'en', 'ar'].forEach((f) => { if (!e[f]) report('BOOK_DICT "' + k + '" missing ' + f); });
    if (e.ex) ['ex_tr', 'ex_ku', 'ex_en', 'ex_ar'].forEach((f) => { if (!e[f]) report('BOOK_DICT "' + k + '" missing ' + f); });
  });

  const storyDict = extractLiteral('const STORY_DICT = ', '(');
  const seen = new Set();
  Object.entries(storyDict).forEach(([k, e]) => {
    const sig = JSON.stringify(e); if (seen.has(sig)) return; seen.add(sig);
    ['tr', 'ku', 'en', 'ar'].forEach((f) => { if (!e[f]) report('STORY_DICT "' + k + '" missing ' + f); });
    if (e.ex) ['ex_tr', 'ex_ku', 'ex_en', 'ex_ar'].forEach((f) => { if (!e[f]) report('STORY_DICT "' + k + '" missing ' + f); });
  });

  [['LESSON_DIALOGS', 'const LESSON_DIALOGS = {'], ['EXTRA_DIALOGS', 'const EXTRA_DIALOGS = {']].forEach(([name, m]) => {
    const D = extractLiteral(m);
    const iter = name === 'LESSON_DIALOGS' ? Object.values(D) : Object.values(D).flat();
    iter.forEach((dlg) => (dlg.lines || []).forEach((ln, i) => LANGS.forEach((l) => { if (!ln[l]) report(name + ' "' + (dlg.id || dlg.theme) + '" line[' + i + '] missing ' + l); })));
  });

  console.log('---');
  if (problems === 0) console.log('✓ All content records fully cover ku/tr/en/ar.');
  else console.log('✗ ' + problems + ' gap(s) found' + (problems > 60 ? ' (showing first 60)' : '') + '.');
  process.exit(problems === 0 ? 0 : 1);
})().catch((e) => { console.error('check failed:', e); process.exit(2); });
