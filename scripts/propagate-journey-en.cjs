const fs = require('fs');
const parser = require('@babel/parser');
const file = 'src/App.jsx';
const source = fs.readFileSync(file, 'utf8');
const ast = parser.parse(source, { sourceType: 'module', plugins: ['jsx'] });
const value = node => node && (
  node.type === 'StringLiteral' || node.type === 'NumericLiteral'
    ? node.value
    : node.type === 'Identifier' ? node.name : undefined
);
const stories = [];
const lineMap = new Map();
const placeMap = new Map();
for (const statement of ast.program.body) {
  if (statement.type !== 'VariableDeclaration') continue;
  for (const declaration of statement.declarations) {
    if (!declaration.id?.name?.endsWith('_STORY') || declaration.init?.type !== 'ArrayExpression') continue;
    stories.push(declaration.init);
    for (const scene of declaration.init.elements || []) {
      if (scene?.type !== 'ObjectExpression') continue;
      const fields = Object.fromEntries(scene.properties.map(p => [value(p.key), value(p.value)]));
      if (fields.place && fields.place_en) placeMap.set(fields.place, fields.place_en);
      const lines = scene.properties.find(p => value(p.key) === 'lines')?.value;
      if (lines?.type !== 'ArrayExpression') continue;
      for (const line of lines.elements || []) {
        const lf = Object.fromEntries((line?.properties || []).map(p => [value(p.key), value(p.value)]));
        if (lf.s && lf.s_en) lineMap.set(lf.s, lf.s_en);
      }
    }
  }
}
const insertions = [];
for (const story of stories) for (const scene of story.elements || []) {
  if (scene?.type !== 'ObjectExpression') continue;
  const fields = Object.fromEntries(scene.properties.map(p => [value(p.key), value(p.value)]));
  if (fields.place && !fields.place_en && placeMap.has(fields.place)) {
    insertions.push({ at: scene.end - 1, text: `, place_en: ${JSON.stringify(placeMap.get(fields.place))}` });
  }
  const lines = scene.properties.find(p => value(p.key) === 'lines')?.value;
  if (lines?.type !== 'ArrayExpression') continue;
  for (const line of lines.elements || []) {
    const lf = Object.fromEntries((line?.properties || []).map(p => [value(p.key), value(p.value)]));
    if (['n', 'i', 'sms'].includes(lf.t) && lf.s && !lf.s_en && lineMap.has(lf.s)) {
      insertions.push({ at: line.end - 1, text: `, s_en: ${JSON.stringify(lineMap.get(lf.s))}` });
    }
  }
}
let output = source;
for (const item of insertions.sort((a, b) => b.at - a.at)) {
  output = output.slice(0, item.at) + item.text + output.slice(item.at);
}
fs.writeFileSync(file, output);
console.log(`Propagated ${insertions.length} existing English translations.`);
