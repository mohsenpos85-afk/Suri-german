const fs = require('fs');
const parser = require('@babel/parser');

const source = fs.readFileSync('src/App.jsx', 'utf8');
const ast = parser.parse(source, { sourceType: 'module', plugins: ['jsx'] });
const languages = ['ku', 'en', 'ar', 'uk', 'fa', 'es', 'fr', 'ja'];
const translatedLineTypes = new Set(['n', 'i', 'sms']);
const value = node => node && (
  node.type === 'StringLiteral' || node.type === 'NumericLiteral'
    ? node.value
    : node.type === 'Identifier' ? node.name : undefined
);

const stats = Object.fromEntries(languages.map(lang => [lang, {
  requiredLines: 0,
  translatedLines: 0,
  requiredPlaces: 0,
  translatedPlaces: 0,
  incompleteStories: [],
}]));

for (const statement of ast.program.body) {
  if (statement.type !== 'VariableDeclaration') continue;
  for (const declaration of statement.declarations) {
    const storyName = declaration.id?.name;
    if (!storyName?.endsWith('_STORY') || declaration.init?.type !== 'ArrayExpression') continue;

    const storyMissing = Object.fromEntries(languages.map(lang => [lang, 0]));
    for (const scene of declaration.init.elements || []) {
      if (scene?.type !== 'ObjectExpression') continue;
      const fields = Object.fromEntries(scene.properties.map(prop => [value(prop.key), value(prop.value)]));

      if (fields.place) {
        for (const lang of languages) {
          stats[lang].requiredPlaces++;
          if (fields[`place_${lang}`]) stats[lang].translatedPlaces++;
          else storyMissing[lang]++;
        }
      }

      const linesProperty = scene.properties.find(prop => value(prop.key) === 'lines');
      if (linesProperty?.value.type !== 'ArrayExpression') continue;
      for (const line of linesProperty.value.elements || []) {
        if (line?.type !== 'ObjectExpression') continue;
        const lineFields = Object.fromEntries(line.properties.map(prop => [value(prop.key), value(prop.value)]));
        if (!translatedLineTypes.has(lineFields.t)) continue;
        for (const lang of languages) {
          stats[lang].requiredLines++;
          if (lineFields[`s_${lang}`]) stats[lang].translatedLines++;
          else storyMissing[lang]++;
        }
      }
    }

    for (const lang of languages) {
      if (storyMissing[lang]) stats[lang].incompleteStories.push(`${storyName} (${storyMissing[lang]} missing)`);
    }
  }
}

let failed = false;
console.log('Journey localization audit (German dialogue/system lines intentionally excluded)');
for (const lang of languages) {
  const item = stats[lang];
  const required = item.requiredLines + item.requiredPlaces;
  const translated = item.translatedLines + item.translatedPlaces;
  const missing = required - translated;
  if (missing) failed = true;
  console.log(`${lang.padEnd(2)} ${String(translated).padStart(4)} / ${required} translated; missing ${missing}; incomplete stories ${item.incompleteStories.length}`);
  if (process.argv.includes('--list') && item.incompleteStories.length) {
    console.log(`  ${item.incompleteStories.join(', ')}`);
  }
}

if (process.argv.includes('--strict') && failed) process.exit(1);
