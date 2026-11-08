import test from 'node:test';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {galleryAssets} from './export-gallery.mjs';

// Independent requirement, not imported from the admission policy or generated registry.
const expectedArcSlugs=`accordion tree-table calendar cookie-consent checkbox code-block combobox command-palette dialog drawer dropdown-menu empty-state expandable-card expandable-text input shortcut-recorder inline-edit json-viewer line-chart pagination image-compare radio-group rating reorderable-list resizable-panels scroll-area select signature-pad rich-text-editor sortable-data-table color-picker swipe-actions switch tag-input time-picker timeline toast tree-view bar-chart activity-heatmap donut-chart streamgraph ridgeline treemap waffle-chart slope-chart countdown icon-morph onboarding-checklist filter-toolbar`.split(' ');
const root=fileURLToPath(new URL('../../../',import.meta.url));
test('all fifty additional families have reachable download and text browsing assets without new previews',async()=>{
 const assets=await galleryAssets(root);
 const arcs=[...assets.keys()].filter(x=>/^source-arcui-.*\.tar\.gz$/.test(x));
 assert.equal(arcs.length,50,'fifty additional Arc source downloads must exist, independently of the seven preview cards');
 for(const slug of expectedArcSlugs){
  assert(assets.has(`source-arcui-${slug}.tar.gz`));
  assert(assets.has(`source-arcui-${slug}.json`),'original text asset missing: '+slug);
 }
 assert.equal(JSON.parse(assets.get('gallery-data.json')).length,7);
});
test('public download identity includes the Arc cohort rather than retitling existing Agent entries',async()=>{
 const assets=await galleryAssets(root),data=JSON.parse(assets.get('source-downloads.json'));
 const collections=data.collections??[data];
 assert.equal(collections.filter(x=>x.sourceId==='arcui').length,1,'exact Arc source identity must be admitted');
 const arc=collections.find(x=>x.sourceId==='arcui');
 assert.deepEqual(arc.items.map(x=>x.canonicalId).sort(),expectedArcSlugs.map(x=>'arcui:'+x).sort());
 assert.equal(collections.find(x=>x.sourceId==='agent-elements').items.length,26);
});

import {readFile,mkdtemp,mkdir,copyFile,writeFile} from 'node:fs/promises';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {createHash} from 'node:crypto';
import {gzipSync} from 'node:zlib';
import {validateSourceDownloads,sourceDownloadAssets} from './source-downloads.mjs';
import {readSourceTar,verifySourcePackage} from './source-package.mjs';
import {projectGalleryDownloads,sourceDownloadCounts,sourceForPreview} from './gallery-model.mjs';
import {renderSourceFiles,selectBrowsableSource} from './source-view.js';
const directory=join(root,'apps/explorer/gallery');
const arc=JSON.parse(await readFile(join(directory,'arc-source-downloads.json')));
const agent=JSON.parse(await readFile(join(directory,'source-downloads.json')));
const combined={formatVersion:2,collections:[agent,arc]};
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const sample=arc.items.find(x=>x.slug==='accordion');
const archive=await readFile(join(directory,'downloads',sample.file));

test('only the exact fifty source families and response-hash provenance are admitted',()=>{
 assert.doesNotThrow(()=>validateSourceDownloads(combined));
 const mutations=[
  x=>x.items.pop(),x=>x.items.push(structuredClone(x.items[0])),
  x=>{x.items[0].slug='textarea';x.items[0].canonicalId='arcui:textarea';},
  x=>{x.items[0].canonicalId='arcui:accordion-alias';},
  x=>{x.items[0].sourceId='agent-elements';},
  x=>{x.items[0].sourceUrl='https://agent-elements.21st.dev/docs/accordion';},
  x=>{x.items[0].status='held';},x=>{x.items[0].runtime='ready';},
  x=>{x.items[0].restore=null;},x=>{x.provenanceKind='git_ref';},
  x=>{x.upstreamRef='8302b52ed9dc79ae7ca699b158a98dfdf09656f7';},
  x=>{x.license.bytes=1065;},x=>{x.license.copyright='Somebody else';},
  x=>{x.items[0].originalFiles.pop();},
  x=>{x.items[0].originalFiles[0].path='../escape';},
  x=>{x.items[0].originalFiles[0].sha256='0'.repeat(64);},
  x=>{x.items[0].browseFile='https://other.invalid/source.json';},
  x=>{x.items[0].title='<script>alert(1)</script>';},
  x=>{x.items[0].responseSha256=null;}
 ];
 for(const mutate of mutations){const copy=structuredClone(arc);mutate(copy);assert.throws(()=>validateSourceDownloads(copy));}
 const unknown=structuredClone(combined);unknown.collections[1].sourceId='other';assert.throws(()=>validateSourceDownloads(unknown));
 const renamed=structuredClone(arc);renamed.items[0].title='Accordion source';renamed.items.reverse();assert.doesNotThrow(()=>validateSourceDownloads(renamed));
});
test('source and canonical and URL stay independent of matching titles or slugs across sources',()=>{
 const one={...sample,sourceId:'agent-elements',canonicalId:'agent-elements:accordion',sourceUrl:'https://agent-elements.21st.dev/docs/accordion'};
 const registry={items:[one,sample]},preview={id:'arcui:accordion',title:one.title,sourceUrl:sample.sourceUrl};
 assert.equal(sourceForPreview(preview,registry),sample);
 assert.equal(sourceForPreview({...preview,sourceUrl:one.sourceUrl},registry),undefined);
 assert.equal(sourceForPreview({...preview,id:'another:accordion'},registry),undefined);
 assert.equal(selectBrowsableSource(combined,'agent-elements','arcui:accordion'),undefined);
 assert.equal(selectBrowsableSource(combined,'arcui','arcui:accordion-alias'),undefined);
 assert.equal(selectBrowsableSource(combined,'arcui','arcui:accordion'),sample);
 const images=[]; // No preview exists for this source cohort.
 assert.deepEqual(sourceDownloadCounts(combined,images),{available:70,held:6,withPreview:0,withoutPreview:70});
});

test('all original text views preserve bytes, retain MIT, disclose partial gaps and stay reachable without images',async()=>{
 const {assets,registry}=await sourceDownloadAssets(directory);let sourceBytes=0,files=0;
 for(const slug of expectedArcSlugs){
  const item=arc.items.find(x=>x.slug===slug),view=JSON.parse(assets.get(item.browseFile));
  assert.equal(view.sourceId,'arcui');assert.equal(view.canonicalId,'arcui:'+slug);
  assert.equal(view.provenance.kind,'registry_response_sha256');assert.equal(view.provenance.sha256,item.responseSha256);
  assert.equal(view.runtime,'not_tested');assert.equal(view.restore,'not_tested');assert.equal(view.closure,'partial');
  assert(view.unbundledRequirements.includes('registry/foundation.css'));
  const original=verifySourcePackage(assets.get(item.file),item,arc);
  for(const file of view.files){
   assert.equal(file.bytes,Buffer.byteLength(file.content));assert.equal(hash(file.content),file.sha256);assert.equal(file.content,original.get(file.path).toString());
   if(file.path!=='LICENSE'){files++;sourceBytes+=file.bytes;}
   else {assert.equal(file.bytes,1069);assert.equal(file.sha256,'1b73a3fbab233cb995e6e9b6a63d302f91975c74c1629919c8e9820902820dde');assert.match(file.content,/Copyright \(c\) 2026 Elia Kuratli/);}
  }
 }
 assert.equal(files,101);assert.equal(sourceBytes,1127717);
 const previews=JSON.parse(await readFile(join(directory,'items.json')));
 assert.deepEqual(sourceDownloadCounts(registry,previews),{available:70,held:6,withPreview:2,withoutPreview:68});
 assert.equal(projectGalleryDownloads(previews,registry).filter(x=>x.downloadAvailable).length,2);
 const html=(await galleryAssets(root)).get('index.html').toString();
 for(const slug of expectedArcSlugs){assert(html.includes(`download="source-arcui-${slug}.tar.gz"`));assert(html.includes(`canonical=arcui%3A${slug}`));assert(html.includes(`id="download-arcui-${slug}"`));}
});

function pack(members) {
 const blocks=[];
 for(const [name,data] of members){
  const header=Buffer.alloc(512);header.write(name,0,100);header.write('0000644\0',100);header.write('0000000\0',108);header.write('0000000\0',116);
  header.write(data.length.toString(8).padStart(11,'0')+'\0',124);header.write('00000000000\0',136);header.fill(32,148,156);header[156]=48;header.write('ustar\0',257);header.write('00',263);
  const sum=header.reduce((a,b)=>a+b,0);header.write(sum.toString(8).padStart(6,'0')+'\0 ',148);blocks.push(header,data,Buffer.alloc((512-data.length%512)%512));
 }
 blocks.push(Buffer.alloc(1024));return gzipSync(Buffer.concat(blocks));
}
function checkMutation(members,descriptor=sample) {
 const bytes=pack(members);return ()=>verifySourcePackage(bytes,{...descriptor,bytes:bytes.length,sha256:hash(bytes)},arc);
}
test('archive boundaries reject missing originals, byte edits, license loss, invalid paths and mismatched response provenance',()=>{
 const members=[...readSourceTar(archive)];
 for(const row of sample.originalFiles){
  assert.throws(checkMutation(members.filter(([p])=>!p.endsWith('/'+row.path))),/file set/);
  const changed=members.map(([p,b])=>[p,p.endsWith('/'+row.path)?Buffer.concat([b,Buffer.from('!')]):b]);
  assert.throws(checkMutation(changed),/Original source byte mismatch/);
 }
 assert.throws(checkMutation([...members,['../escape',Buffer.from('x')]]),/identity|Unsafe/);
 const wrongResponse={...sample,responseSha256:'0'.repeat(64)};
 assert.throws(()=>verifySourcePackage(archive,wrongResponse,arc),/response provenance/);
 const wrongIdentity={...sample,canonicalId:'agent-elements:accordion'};
 assert.throws(()=>verifySourcePackage(archive,wrongIdentity,arc),/identity/);
 const sourcePath='arcui-accordion/SOURCE.json',meta=JSON.parse(members.find(([p])=>p===sourcePath)[1]);
 meta.provenance.kind='git_ref';const changedMeta=Buffer.from(JSON.stringify(meta));
 assert.throws(checkMutation(members.map(([p,b])=>[p,p===sourcePath?changedMeta:b]),{...sample,sourceManifestSha256:hash(changedMeta)}),/response provenance/);
});
test('script-like source is rendered literally using text nodes, never markup or executable nodes',()=>{
 const created=[];let htmlWrites=0;
 const document={createElement(tag){created.push(tag);return {tag,children:[],textContent:'',append(...x){this.children.push(...x);},set innerHTML(_value){htmlWrites++;throw new Error('HTML parsing forbidden');}};}};
 const host={ownerDocument:document,children:[],replaceChildren(){this.children=[];},append(x){this.children.push(x);}};
 const text='</pre><script>globalThis.EXECUTED=true</script><img src=x onerror=alert(1)>';
 renderSourceFiles(host,{files:[{path:'example.tsx',bytes:Buffer.byteLength(text),sha256:hash(text),content:text}]});
 assert.equal(host.children[0].children[1].textContent,text);assert.deepEqual(created,['section','h2','pre']);assert.equal(htmlWrites,0);assert.equal(globalThis.EXECUTED,undefined);
});
test('missing or damaged Arc package cannot silently fall back to only Agent downloads',async()=>{
 const temp=await mkdtemp(join(tmpdir(),'vault-multi-source-'));await mkdir(join(temp,'downloads'));
 await copyFile(join(directory,'source-downloads.json'),join(temp,'source-downloads.json'));
 await assert.rejects(()=>sourceDownloadAssets(temp),/ENOENT/);
 await copyFile(join(directory,'arc-source-downloads.json'),join(temp,'arc-source-downloads.json'));
 for(const item of [...agent.items.filter(x=>x.status==='available'),...arc.items].filter(x=>x.file!==sample.file))await copyFile(join(directory,'downloads',item.file),join(temp,'downloads',item.file));
 await assert.rejects(()=>sourceDownloadAssets(temp),/directory files/);
 await writeFile(join(temp,'downloads',sample.file),'corrupt');await assert.rejects(()=>sourceDownloadAssets(temp),/byte mismatch/);
});
