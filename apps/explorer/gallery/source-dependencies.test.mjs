import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {gzipSync} from 'node:zlib';
import {readSourceTar,verifySourcePackage} from './source-package.mjs';
const registry=JSON.parse(await readFile(new URL('./arc-source-downloads.json',import.meta.url)));
const item=registry.items.find(x=>x.slug==='activity-heatmap');
const archive=await readFile(new URL('./downloads/'+item.file,import.meta.url));
const prefix='arcui-activity-heatmap/',members=readSourceTar(archive),metadata=JSON.parse(members.get(prefix+'SOURCE.json'));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
function pack(files){
 const blocks=[];
 for(const [name,data] of files){const h=Buffer.alloc(512);h.write(name,0,100);h.write('0000644\0',100);h.write('0000000\0',108);h.write('0000000\0',116);h.write(data.length.toString(8).padStart(11,'0')+'\0',124);h.write('00000000000\0',136);h.fill(32,148,156);h[156]=48;h.write('ustar\0',257);h.write('00',263);h.write(h.reduce((a,b)=>a+b,0).toString(8).padStart(6,'0')+'\0 ',148);blocks.push(h,data,Buffer.alloc((512-data.length%512)%512));}
 blocks.push(Buffer.alloc(1024));return gzipSync(Buffer.concat(blocks));
}
test('heatmap JSX motion labels do not become declared source imports',()=>{
 // Six actual TS imports, stated independently of the production parser.
 assert.deepEqual(metadata.moduleEdges.map(x=>x.specifier),['react','react','motion/react','motion/react','../lib/motion-tokens','./activity-heatmap.module.css']);
 assert(!metadata.externalRequirements.includes(' animate='));
});
test('package admission rejects fabricated JSX dependencies even when envelope and sums are recomputed',()=>{
 const copy=new Map(members),meta=structuredClone(metadata);
 if(!meta.moduleEdges.some(x=>x.specifier===' animate=')){
  meta.moduleEdges.push(...[1,2].map(()=>({file:item.entry,specifier:' animate=',status:'external_npm_or_host_alias_not_bundled'})));
  meta.externalRequirements.push(' animate=');meta.unbundledRequirements.push(' animate=');
 }
 const source=Buffer.from(JSON.stringify(meta));copy.set(prefix+'SOURCE.json',source);
 const sums=[...copy].filter(([p])=>!p.endsWith('/SHA256SUMS')).sort(([a],[b])=>a<b?-1:a>b?1:0).map(([p,b])=>hash(b)+'  '+p.slice(prefix.length)+'\n').join('');copy.set(prefix+'SHA256SUMS',Buffer.from(sums));
 const bad=pack(copy),descriptor={...item,bytes:bad.length,sha256:hash(bad),sourceManifestSha256:hash(source)};
 assert.throws(()=>verifySourcePackage(bad,descriptor,registry),/module|dependenc/i);
});

import {parseSourceDependencies,analyzeSourceModules,moduleEdgesFor,externalRequirementsFor,unbundledRequirementsFor} from './source-dependencies.mjs';
test('module syntax distinguishes type, side effect, re-export, import type and literal dynamic dependencies',()=>{
 const source=[
  `import Default, {type Hidden, real} from 'mixed';`,
  `import type { Shape } from './types';`,
  `import { type Only } from './only';`,
  `import './side.css';`,
  `export {thing} from './re-export';`,
  `export type { A } from './exports';`,
  `export type * from './type-star';`,
  `import Service = require('./service');`,
  `import type Alias = require('./type-service');`,
  `type Lazy = import('./lazy').Value;`,
  `type Query = typeof import('./query');`,
  `const a=import('./runtime');`,
  'const b=import(`./literal-template`);',
  `const c=import(('./options'),{with:{type:'json'}});`,
  `const element=<div initial="from" animate="to" exit="gone">{import('./inside-jsx')}</div>;`,
  `const text="import('ghost') from 'nope'";`,
  `// import imaginary from 'comment';`,
  `/* export * from 'comment-too'; */`,
  `declare module 'ambient-not-a-dependency' { export const n:number; }`,
  `namespace N {export const Thing=1;} import AliasLocal = N.Thing;`,
 ].join('\n');
 const parsed=parseSourceDependencies('widget.tsx',source);
 assert.equal(parsed.state,'static');assert.deepEqual(parsed.unknown,[]);
 assert.deepEqual(parsed.references.map(({specifier,syntax,typeOnly})=>[specifier,syntax,typeOnly]),[
  ['mixed','import',false],['./types','import',true],['./only','import',true],['./side.css','side-effect-import',false],
  ['./re-export','re-export',false],['./exports','re-export',true],['./type-star','re-export',true],
  ['./service','import-equals',false],['./type-service','import-equals',true],['./lazy','import-type',true],['./query','import-type',true],
  ['./runtime','dynamic-import',false],['./literal-template','dynamic-import',false],['./options','dynamic-import',false],['./inside-jsx','dynamic-import',false]
 ]);
});
test('dynamic expressions and unestablished require bindings remain explicit unknown rather than legal empty',()=>{
 const parsed=parseSourceDependencies('dynamic.ts',`const one=import('./'+name); const two=import(\`./\${name}.ts\`); const three=require('./maybe');`);
 assert.equal(parsed.state,'unknown');assert.deepEqual(parsed.references,[]);assert.equal(parsed.unknown.length,3);
 assert.deepEqual(parsed.unknown.map(x=>[x.specifier,x.status,x.syntax,x.reason]),[
  [null,'unknown_dynamic_dependency','dynamic-import','non_literal_module_expression'],
  [null,'unknown_dynamic_dependency','dynamic-import','non_literal_module_expression'],
  [null,'unknown_dynamic_dependency','require-call','runtime_binding_not_statically_established']
 ]);
 const edges=moduleEdgesFor(parsed,new Map());assert.equal(edges.length,3);assert(edges.every(x=>x.status==='unknown_dynamic_dependency'));
 assert(unbundledRequirementsFor(edges,[]).every(x=>x.startsWith('unknown ')));
});
test('valid empty source and parse failure are not conflated',()=>{
 assert.deepEqual(parseSourceDependencies('empty.ts','// import("not real")\nconst value=1;'),{state:'static',references:[],unknown:[]});
 for(const source of ['import value from ;','const value = ;','export const component=<div>;'])assert.throws(()=>parseSourceDependencies('broken.tsx',source),SyntaxError);
 assert.throws(()=>parseSourceDependencies('x.ts',null),TypeError);
});
test('shared resolution distinguishes bundled files, missing paths, type dependencies and explicit unknown',()=>{
 const files=new Map([['src/widget.tsx',Buffer.from(`import type {X} from './types'; import './style.css'; export * from './other'; const later=import(which);`)],['src/style.css',Buffer.from('body{}')]]);
 const analysis=analyzeSourceModules(files),edges=moduleEdgesFor(analysis,files);
 assert.equal(analysis.state,'unknown');assert.deepEqual(edges.slice(0,3),[
  {file:'src/widget.tsx',specifier:'./types',status:'unmaterialized',expectedPath:'src/types'},
  {file:'src/widget.tsx',specifier:'./style.css',status:'included',expectedPath:'src/style.css',savedPath:'src/style.css'},
  {file:'src/widget.tsx',specifier:'./other',status:'unmaterialized',expectedPath:'src/other'}
 ]);
 assert.equal(edges[3].status,'unknown_dynamic_dependency');
 assert.deepEqual(externalRequirementsFor(analysis,['react']),['react']);
});
function reboundSource(text,edges=[]) {
 const copy=new Map(members),meta=structuredClone(metadata),bytes=Buffer.from(text),originals=item.originalFiles.map(x=>({...x}));
 const changed=originals.find(x=>x.path===item.entry);changed.bytes=bytes.length;changed.sha256=hash(bytes);
 copy.set(prefix+item.entry,bytes);meta.files=originals;meta.moduleEdges=edges;
 const source=Buffer.from(JSON.stringify(meta));copy.set(prefix+'SOURCE.json',source);
 copy.set(prefix+'SHA256SUMS',Buffer.from([...copy].filter(([p])=>!p.endsWith('/SHA256SUMS')).sort(([a],[b])=>a<b?-1:a>b?1:0).map(([p,b])=>hash(b)+'  '+p.slice(prefix.length)+'\n').join('')));
 const output=pack(copy);return {output,descriptor:{...item,originalFiles:originals,bytes:output.length,sha256:hash(output),sourceManifestSha256:hash(source)}};
}
test('syntax-recovered or dynamic-unknown source cannot be admitted with an empty dependency claim',()=>{
 const broken=reboundSource('export const component=<div>;');
 assert.throws(()=>verifySourcePackage(broken.output,broken.descriptor,registry),/Source dependency parse failed/);
 const dynamic=reboundSource('const loader=import(which); export const component=<div/>;');
 assert.throws(()=>verifySourcePackage(dynamic.output,dynamic.descriptor,registry),/syntax module dependencies/);
});

test('host-specific module resolution operations are unknown rather than an empty module graph',()=>{
 const parsed=parseSourceDependencies('host.ts',`const a=import.meta.resolve('./module'); const b=import.meta.glob('./*.ts'); const c=require.resolve('./other');`);
 assert.equal(parsed.state,'unknown');assert.deepEqual(parsed.references,[]);assert.equal(parsed.unknown.length,3);
 assert(parsed.unknown.every(x=>x.syntax==='module-resolution-call'&&x.reason==='host_or_binding_resolution_not_established'));
});
