import {readFile,writeFile} from 'node:fs/promises';
const root=new URL('../apps/atlas-sample/',import.meta.url);
const items=JSON.parse(await readFile(new URL('items.json',root),'utf8'));
const keys=['id','title','category','kind','format','source','description','keywords','technology','featured','thumbnail','styleTags','interactionTags','purposeTags'];
const catalog=items.map(item=>Object.fromEntries(keys.filter(k=>item[k]!==undefined).map(k=>[k,item[k]])));
await writeFile(new URL('catalog.json',root),JSON.stringify(catalog)+'\n');
console.log(`Lightweight catalog: ${catalog.length} entries, ${Buffer.byteLength(JSON.stringify(catalog))} bytes`);
