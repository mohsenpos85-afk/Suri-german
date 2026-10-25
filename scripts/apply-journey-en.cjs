const fs=require('fs'),parser=require('@babel/parser'),translations=require('./journey-en-translations.cjs');
const file='src/App.jsx',source=fs.readFileSync(file,'utf8');
const ast=parser.parse(source,{sourceType:'module',plugins:['jsx']});
const value=n=>n&&(n.type==='StringLiteral'||n.type==='NumericLiteral'?n.value:n.type==='Identifier'?n.name:undefined);
const insertions=[],used=new Set();
for(const statement of ast.program.body){
 if(statement.type!=='VariableDeclaration')continue;
 for(const declaration of statement.declarations){
  if(!declaration.id?.name?.endsWith('_STORY')||declaration.init?.type!=='ArrayExpression')continue;
  for(const scene of declaration.init.elements||[]){
   if(scene?.type!=='ObjectExpression')continue;
   const sf=Object.fromEntries(scene.properties.map(p=>[value(p.key),value(p.value)]));
   if(sf.place&&!sf.place_en&&translations[sf.place]){
    insertions.push({at:scene.end-1,text:`, place_en: ${JSON.stringify(translations[sf.place])}`});used.add(sf.place);
   }
   const lines=scene.properties.find(p=>value(p.key)==='lines')?.value;
   if(lines?.type!=='ArrayExpression')continue;
   for(const line of lines.elements||[]){
    const lf=Object.fromEntries((line?.properties||[]).map(p=>[value(p.key),value(p.value)]));
    if(['n','i','sms'].includes(lf.t)&&!lf.s_en&&translations[lf.s]){
     insertions.push({at:line.end-1,text:`, s_en: ${JSON.stringify(translations[lf.s])}`});used.add(lf.s);
    }
   }
  }
 }
}
let output=source;
for(const item of insertions.sort((a,b)=>b.at-a.at))output=output.slice(0,item.at)+item.text+output.slice(item.at);
fs.writeFileSync(file,output);
console.log(`Applied ${insertions.length} English fields from ${used.size} unique translations.`);
