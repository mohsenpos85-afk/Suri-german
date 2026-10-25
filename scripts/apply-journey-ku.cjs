const fs = require('fs');
const parser = require('@babel/parser');
const translations = require('./journey-ku-translations.cjs');

const file = 'src/App.jsx';
const source = fs.readFileSync(file, 'utf8');
const ast = parser.parse(source, { sourceType: 'module', plugins: ['jsx'] });
const value = node => node && (
  node.type === 'StringLiteral' || node.type === 'NumericLiteral'
    ? node.value
    : node.type === 'Identifier' ? node.name : undefined
);
const insertions = [];
const used = new Set();

for (const statement of ast.program.body) {
  if (statement.type !== 'VariableDeclaration') continue;
  for (const declaration of statement.declarations) {
    if (!declaration.id?.name?.endsWith('_STORY') || declaration.init?.type !== 'ArrayExpression') continue;
    for (const scene of declaration.init.elements || []) {
      if (scene?.type !== 'ObjectExpression') continue;
      const sceneFields = Object.fromEntries(scene.properties.map(prop => [value(prop.key), value(prop.value)]));
      if (sceneFields.place && !sceneFields.place_ku && translations[sceneFields.place]) {
        insertions.push({ at: scene.end - 1, text: `, place_ku: ${JSON.stringify(translations[sceneFields.place])}` });
        used.add(sceneFields.place);
      }
      const linesProperty = scene.properties.find(prop => value(prop.key) === 'lines');
      if (linesProperty?.value.type !== 'ArrayExpression') continue;
      for (const line of linesProperty.value.elements || []) {
        if (line?.type !== 'ObjectExpression') continue;
        const fields = Object.fromEntries(line.properties.map(prop => [value(prop.key), value(prop.value)]));
        if (!['n', 'i', 'sms'].includes(fields.t) || fields.s_ku || !translations[fields.s]) continue;
        insertions.push({ at: line.end - 1, text: `, s_ku: ${JSON.stringify(translations[fields.s])}` });
        used.add(fields.s);
      }
    }
  }
}

const unused = Object.keys(translations).filter(key => !used.has(key));
if (unused.length) {
  console.log(`Already applied or currently unused: ${unused.length}`);
}
let output = source;
for (const insertion of insertions.sort((a, b) => b.at - a.at)) {
  output = output.slice(0, insertion.at) + insertion.text + output.slice(insertion.at);
}
fs.writeFileSync(file, output);
console.log(`Applied ${insertions.length} Sorani fields from ${used.size} unique translations.`);
