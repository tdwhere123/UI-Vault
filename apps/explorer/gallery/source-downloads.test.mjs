import test from 'node:test';
import assert from 'node:assert/strict';
import {resolve} from 'node:path';
import {galleryAssets} from './export-gallery.mjs';
const root=resolve(import.meta.dirname,'../../..');
test('static gallery supplies source downloads only for identical source and canonical UI',async()=>{
 const assets=await galleryAssets(root);
 const items=JSON.parse(assets.get('gallery-data.json'));
 assert.equal(items.find(x=>x.id==='agent-elements:send-button').downloadAvailable,true);
 assert.equal(items.find(x=>x.id==='agent-elements:attachment-button').downloadAvailable,true);
 assert.equal(items.filter(x=>x.downloadAvailable).length,2);
 assert.equal(items.filter(x=>x.id.startsWith('shadcn-')&&x.downloadAvailable).length,0);
 const downloads=JSON.parse(assets.get('source-downloads.json'));
 assert.equal(downloads.items.filter(x=>x.status==='available').length,20);
 assert.equal(downloads.items.filter(x=>x.status==='held').length,6);
});

const {readFile,mkdtemp,mkdir,writeFile,copyFile,symlink}=await import('node:fs/promises');
const {join}=await import('node:path');
const {tmpdir}=await import('node:os');
const {createHash}=await import('node:crypto');
const {gzipSync,gunzipSync}=await import('node:zlib');
const {validateSourceDownloads,sourceDownloadAssets}=await import('./source-downloads.mjs');
const {readSourceTar,verifySourcePackage}=await import('./source-package.mjs');
const {projectGalleryDownloads,sourceDownloadRows,sourceDownloadCounts}=await import('./gallery-model.mjs');
const directory=join(root,'apps/explorer/gallery');
const registry=JSON.parse(await readFile(join(directory,'source-downloads.json')));
const previews=JSON.parse(await readFile(join(directory,'items.json')));
const sha=bytes=>createHash('sha256').update(bytes).digest('hex');
const sample=registry.items.find(x=>x.slug==='send-button');
const archive=await readFile(join(directory,'downloads',sample.file));
const repack=members=>{
 const blocks=[];
 for(const [name,data,type='0'] of members) {
  const h=Buffer.alloc(512);h.write(name,0,100,'utf8');
  for(const [offset,size,value] of [[100,8,420],[108,8,0],[116,8,0],[124,12,data.length],[136,12,0]])h.write(value.toString(8).padStart(size-1,'0')+'\0',offset,size,'ascii');
  h.fill(32,148,156);h.write(type,156);h.write('ustar\0',257);h.write('00',263);
  const checksum=h.reduce((a,b)=>a+b,0);h.write(checksum.toString(8).padStart(6,'0')+'\0 ',148,8,'ascii');
  blocks.push(h,data,Buffer.alloc((512-data.length%512)%512));
 }
 blocks.push(Buffer.alloc(1024));return gzipSync(Buffer.concat(blocks));
};
const rebound=bytes=>({...sample,bytes:bytes.length,sha256:sha(bytes)});

test('download admission rejects duplicate, cross-source, held, missing and inconsistent descriptors',()=>{
 validateSourceDownloads(registry);
 const mutations=[
  x=>{x.items[1]=structuredClone(x.items[0]);},
  x=>{x.items[0].sourceId='other';},
  x=>{x.items[0].canonicalId='other:attachment-button';},
  x=>{x.items[0].sourceUrl='https://ui.shadcn.com/docs/components/base/button';},
  x=>{x.items[0].file='source-agent-elements-send-button.tar.gz';},
  x=>{delete x.items[0].sha256;}, x=>{x.items[0].sha256='';},
  x=>{x.items[0].bytes=null;}, x=>{x.items[0].bytes=0;},
  x=>{x.items[0].runtime='ready';}, x=>{x.items[0].downloadAvailable=true;},
  x=>{x.items[0].entry='lib/agent-ui/components/image-lightbox.tsx';},
  x=>{x.items.find(v=>v.status==='held').status='available';},
  x=>{x.items.find(v=>v.status==='held').file='hidden.tar.gz';},
  x=>{x.items.pop();}, x=>{x.excludedSourcePaths=[];},
  x=>{x.excludedSourcePaths[0]='lib/agent-ui/components/unrelated.tsx';}
 ];
 for(const mutate of mutations){const copy=structuredClone(registry);mutate(copy);assert.throws(()=>validateSourceDownloads(copy));}
});

test('twenty source entries stay reachable without inflating seven previews or cross-binding title/slug',async()=>{
 const projected=projectGalleryDownloads(previews,registry);
 assert.deepEqual(sourceDownloadCounts(registry,projected),{available:20,held:6,withPreview:2,withoutPreview:18});
 assert.equal(sourceDownloadRows(registry,projected).filter(x=>x.status==='available').length,20);
 assert.equal(sourceDownloadRows(registry,[]).filter(x=>x.previewStatus==='not_collected').length,26);
 const sameTitle={...previews[5],id:'other:attachment-button'};
 assert.equal(projectGalleryDownloads([sameTitle],registry)[0].downloadStatus,'not_collected');
 const wrongUrl={...previews[5],sourceUrl:previews[6].sourceUrl};
 assert.equal(projectGalleryDownloads([wrongUrl],registry)[0].downloadAvailable,false);
 assert.equal(projectGalleryDownloads([{...previews[5],id:'agent-elements:agent-chat',sourceUrl:'https://agent-elements.21st.dev/docs/agent-chat'}],registry)[0].downloadStatus,'held');
 const assets=await galleryAssets(root),html=assets.get('index.html').toString();
 const links=[...html.matchAll(/href="\.\/(source-agent-elements-[a-z-]+\.tar\.gz)" download=/g)].map(x=>x[1]);
 assert.equal(new Set(links).size,20);
 assert.deepEqual(links.sort(),registry.items.filter(x=>x.status==='available').map(x=>x.file).sort());
 assert.equal([...html.matchAll(/ · 未配预览</g)].length,18);
 assert.equal([...html.matchAll(/ · 已配同身份参考截图/g)].length,2);
 for(const item of registry.items.filter(x=>x.status==='held'))assert(!html.includes(`download="source-agent-elements-${item.slug}.tar.gz"`));
});

test('all package members verify, and every original-byte mutation is rejected independently of envelope hash',async()=>{
 let originals=0;
 for(const item of registry.items.filter(x=>x.status==='available')) {
  const bytes=await readFile(join(directory,'downloads',item.file));
  const files=verifySourcePackage(bytes,item,registry),meta=JSON.parse(files.get('SOURCE.json'));
  for(const row of meta.files) {
   const members=[...readSourceTar(bytes)].map(([name,data])=>[name,name.endsWith('/'+row.path)?Buffer.concat([data,Buffer.from('!')]):data]);
   const bad=repack(members),descriptor={...item,bytes:bad.length,sha256:sha(bad)};
   assert.throws(()=>verifySourcePackage(bad,descriptor,registry),/Original source byte mismatch/);originals++;
  }
 }
 assert.equal(originals,135);
});

test('safe package reader rejects path escape, links, duplicate, missing, excluded, extra, and corrupt content',()=>{
 const members=[...readSourceTar(archive)],prefix='agent-elements-send-button/';
 const variants=[
  [...members,['../escape',Buffer.from('bad')]],
  [...members,['/absolute',Buffer.from('bad')]],
  [...members,[prefix+'link',Buffer.from('target'),'2']],
  [...members,[prefix+'hardlink',Buffer.from('target'),'1']],
  [...members,members[0]],
  members.filter(([p])=>!p.endsWith('/LICENSE')),
  ...registry.excludedSourcePaths.map(path=>[...members,[prefix+path,Buffer.from('bad')]]),
  [...members,[prefix+'unlisted.ts',Buffer.from('bad')]],
  members.map(([p,b])=>[p.replace(prefix,'agent-elements-other/'),b])
 ];
 for(const variant of variants){const bytes=repack(variant);assert.throws(()=>verifySourcePackage(bytes,rebound(bytes),registry));}
 assert.throws(()=>verifySourcePackage(archive.subarray(0,-8),rebound(archive.subarray(0,-8)),registry));
 const corrupt=Buffer.from(gunzipSync(archive));corrupt[0]^=1;
 assert.throws(()=>readSourceTar(gzipSync(corrupt)),/checksum/);
 const truncated=gzipSync(gunzipSync(archive).subarray(0,513));
 assert.throws(()=>readSourceTar(truncated),/Truncated/);
 assert.throws(()=>verifySourcePackage(Buffer.concat([archive,Buffer.from('!')]),sample,registry),/byte mismatch/);
});

test('export admission refuses missing archive, corrupt bytes, unexpected files and symbolic links',async()=>{
 const temp=await mkdtemp(join(tmpdir(),'vault-source-admission-'));
 await mkdir(join(temp,'downloads'));
 await writeFile(join(temp,'source-downloads.json'),JSON.stringify(registry));
 for(const item of registry.items.filter(x=>x.status==='available'&&x.file!==sample.file))await copyFile(join(directory,'downloads',item.file),join(temp,'downloads',item.file));
 await assert.rejects(()=>sourceDownloadAssets(temp),/directory files/);
 await writeFile(join(temp,'downloads',sample.file),'corrupt');
 await assert.rejects(()=>sourceDownloadAssets(temp),/byte mismatch/);
 await copyFile(join(directory,'downloads',sample.file),join(temp,'downloads',sample.file));
 await writeFile(join(temp,'downloads','unexpected.tar.gz'),'bad');
 await assert.rejects(()=>sourceDownloadAssets(temp),/directory files/);
 const linked=await mkdtemp(join(tmpdir(),'vault-source-link-'));
 await mkdir(join(linked,'downloads'));await writeFile(join(linked,'source-downloads.json'),JSON.stringify(registry));
 for(const item of registry.items.filter(x=>x.status==='available'))await symlink(join(directory,'downloads',item.file),join(linked,'downloads',item.file));
 await assert.rejects(()=>sourceDownloadAssets(linked),/Non-file/);
});


// Expected UI identities are independently stated here, never imported from admission policy.
const expectedHeldCanonicalIds=[
 'agent-elements:agent-chat','agent-elements:message-list','agent-elements:input-bar',
 'agent-elements:user-message','agent-elements:file-attachment','agent-elements:spiral-loader'
];
const expectedExcludedPaths=[
 'lib/agent-ui/components/agent-chat.tsx','lib/agent-ui/components/image-lightbox.tsx',
 'lib/agent-ui/components/input-bar.tsx','lib/agent-ui/components/input/file-attachment.tsx',
 'lib/agent-ui/components/message-list.tsx','lib/agent-ui/components/spiral-loader-data.ts',
 'lib/agent-ui/components/spiral-loader.tsx','lib/agent-ui/components/user-message.tsx','lib/agent-ui/index.ts'
];
test('admission preserves distinct held UI and excluded source sets without freezing display metadata',()=>{
 assert.deepEqual(registry.items.filter(x=>x.status==='held').map(x=>x.canonicalId).sort(),[...expectedHeldCanonicalIds].sort());
 assert.deepEqual([...registry.excludedSourcePaths].sort(),[...expectedExcludedPaths].sort());
 const copy=structuredClone(registry);copy.items.reverse();copy.excludedSourcePaths.reverse();
 copy.items.find(x=>x.canonicalId==='agent-elements:agent-chat').title='Agent chat source';
 assert.doesNotThrow(()=>validateSourceDownloads(copy));
});
for(const canonicalId of expectedHeldCanonicalIds) {
 test(`admission rejects replacing held ${canonicalId} with an excluded supporting file`,()=>{
  const copy=structuredClone(registry),held=copy.items.find(x=>x.canonicalId===canonicalId);
  Object.assign(held,{canonicalId:'agent-elements:image-lightbox',slug:'image-lightbox',title:'ImageLightbox',sourceUrl:'https://agent-elements.21st.dev/docs/image-lightbox'});
  assert.deepEqual(copy.excludedSourcePaths,registry.excludedSourcePaths);
  assert.deepEqual(copy.items.filter(x=>x.status==='available'),registry.items.filter(x=>x.status==='available'));
  assert.equal(copy.items.length,26);
  assert.throws(()=>validateSourceDownloads(copy),/held|identity/i);
 });
}
test('admission rejects omission, alias, and available promotion of each fixed held canonical identity',()=>{
 for(const canonicalId of expectedHeldCanonicalIds) {
  const missing=structuredClone(registry);missing.items=missing.items.filter(x=>x.canonicalId!==canonicalId);
  assert.throws(()=>validateSourceDownloads(missing));
  const alias=structuredClone(registry),item=alias.items.find(x=>x.canonicalId===canonicalId);
  const slug=item.slug+'-alias';Object.assign(item,{canonicalId:'agent-elements:'+slug,slug,sourceUrl:'https://agent-elements.21st.dev/docs/'+slug,title:'Alias'});
  assert.throws(()=>validateSourceDownloads(alias),/held.*identity/i);
  const promoted=structuredClone(registry),index=promoted.items.findIndex(x=>x.canonicalId===canonicalId),held=promoted.items[index];
  promoted.items[index]={...sample,canonicalId:held.canonicalId,slug:held.slug,title:held.title,sourceUrl:held.sourceUrl,
   entry:expectedExcludedPaths.find(p=>p.endsWith('/'+held.slug+'.tsx')),file:'source-agent-elements-'+held.slug+'.tar.gz'};
  assert.throws(()=>validateSourceDownloads(promoted),/held.*identity/i);
 }
});
test('admission rejects replacing each exact excluded source path while held UI identities stay fixed',()=>{
 for(const path of expectedExcludedPaths) {
  const copy=structuredClone(registry);copy.excludedSourcePaths=copy.excludedSourcePaths.map(p=>p===path?'lib/agent-ui/components/placeholder.tsx':p);
  assert.deepEqual(copy.items.filter(x=>x.status==='held').map(x=>x.canonicalId).sort(),[...expectedHeldCanonicalIds].sort());
  assert.throws(()=>validateSourceDownloads(copy));
 }
});
