import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=dirname(fileURLToPath(import.meta.url));
const EXPECTED_SHA='25d698c61ceea4d42107ef85ef37d4449f1169ca24c7ee288db434688071e1e3';
const EXPECTED_BYTES=1066;
const REVISION='88d827d7ec342917ca06f6894e5add65fabbe5d8';
const REPO='https://github.com/ui-layouts/uilayouts';
const LICENSE_URL=`${REPO}/blob/${REVISION}/LICENSE`;
const BATCHES=['uilayout-next-01','uilayout-next-02','uilayout-next-03'];
const LOCAL_REFERENCES=[
 'batches/trading-01/price-flow/LICENSE.txt',
 'batches/uilayout-direct-01/liquid-glass-system/LICENSE',
 'batches/uilayout-direct-01/tree-code-viewer/LICENSE',
];
const IDS=[
 'uilayout:drag-drag-items',
 'uilayout:swapy-swapy-handle',
 'uilayout:scroll-animation-sticky-hero-scroll',
 'uilayout:scroll-animation-repeat-scroll',
 'uilayout:timeline-animation-index',
 'uilayout:mac-genie-effect',
 'uilayout:linear-modal-standalone-version',
 'uilayout:image-reveal-image-reveal',
 'uilayout:drawer-nested-vaul-drawer',
 'uilayout:drawer-responsive-header',
 'uilayout:footers-animated-logo-footer',
 'uilayout:card-product-card4',
 'uilayout:color-picker-raws-color-picker',
];

function sha256(buf){
 return createHash('sha256').update(buf).digest('hex');
}

test('already-imported local UI Layouts LICENSE originals match the frozen-revision digest',()=>{
 for(const rel of LOCAL_REFERENCES){
  const buf=readFileSync(join(root,rel));
  assert.equal(buf.byteLength,EXPECTED_BYTES,rel);
  assert.equal(sha256(buf),EXPECTED_SHA,rel);
  assert.equal(buf.toString('utf8').startsWith('MIT License\n\nCopyright (c) 2024 UI LAYOUT\n'),true,rel);
 }
});

test('uilayout-next-01/02/03 LICENSE files are the same verified original text',()=>{
 const reference=readFileSync(join(root,'batches/trading-01/price-flow/LICENSE.txt'));
 for(const batch of BATCHES){
  const buf=readFileSync(join(root,'batches',batch,'LICENSE'));
  assert.deepEqual(buf,reference,batch);
  assert.equal(sha256(buf),EXPECTED_SHA,batch);
  const ev=JSON.parse(readFileSync(join(root,'batches',batch,'SOURCE-LICENSE.json'),'utf8'));
  assert.equal(ev.repository,REPO);
  assert.equal(ev.revision,REVISION);
  assert.equal(ev.sha256,EXPECTED_SHA);
  assert.equal(ev.bytes,EXPECTED_BYTES);
  assert.equal(ev.copyright,'Copyright (c) 2024 UI LAYOUT');
  assert.equal(ev.spdx,'MIT');
  assert.equal(ev.upstreamLicenseUrl,LICENSE_URL);
 }
});

const COMPOUND={
 'uilayout:drag-drag-items':'MIT; GPL-3.0; 0BSD',
 'uilayout:swapy-swapy-handle':'MIT; GPL-3.0; 0BSD',
 'uilayout:scroll-animation-sticky-hero-scroll':'MIT; GPL-3.0; 0BSD',
 'uilayout:scroll-animation-repeat-scroll':'MIT; GPL-3.0; 0BSD',
 'uilayout:timeline-animation-index':'MIT; ISC; 0BSD',
 'uilayout:mac-genie-effect':'MIT; ISC; 0BSD',
 'uilayout:linear-modal-standalone-version':'MIT; ISC; 0BSD',
 'uilayout:image-reveal-image-reveal':'MIT; ISC; 0BSD',
 'uilayout:drawer-nested-vaul-drawer':'MIT; ISC; 0BSD',
 'uilayout:drawer-responsive-header':'MIT; ISC; Apache-2.0; 0BSD',
 'uilayout:footers-animated-logo-footer':'MIT; ISC; Apache-2.0; 0BSD',
 'uilayout:card-product-card4':'MIT; ISC; Apache-2.0; 0BSD',
 'uilayout:color-picker-raws-color-picker':'MIT; ISC; Apache-2.0; 0BSD',
};

test('catalog root evidence stays on the frozen LICENSE, and license lists verified runtime SPDX',()=>{
 const catalog=JSON.parse(readFileSync(join(root,'candidate-catalog.json'),'utf8'));
 for(const id of IDS){
  const item=catalog.find(x=>x.id===id);
  assert.ok(item,id);
  assert.equal(item.license,COMPOUND[id],id);
  assert.equal(item.repository,REPO);
  assert.equal(item.revision,REVISION);
  assert.equal(item.licenseEvidence?.url,LICENSE_URL);
  assert.equal(item.licenseEvidence?.sha256,EXPECTED_SHA);
  assert.match(item.licenseEvidence?.scope||'',/Root original UI Layouts LICENSE only/);
  assert.match(item.licenseEvidence?.scope||'',/does not make the whole bundle complete/);
  assert.match(item.upstream,new RegExp(`${REVISION}/apps/ui-layout/registry/components/`));
 }
});

test('runtime notices include official tarball texts and do not treat a root LICENSE as completeness',()=>{
 const n1=readFileSync(join(root,'batches/uilayout-next-01/THIRD_PARTY_NOTICES.txt'),'utf8');
 const n2=readFileSync(join(root,'batches/uilayout-next-02/THIRD_PARTY_NOTICES.txt'),'utf8');
 const n3=readFileSync(join(root,'batches/uilayout-next-03/THIRD_PARTY_NOTICES.txt'),'utf8');
 assert.match(n1,/GNU GENERAL PUBLIC LICENSE/);
 assert.match(n1,/swapy@1\.0\.5/);
 assert.doesNotMatch(n2,/swapy@1\.0\.5/);
 assert.doesNotMatch(n3,/swapy@1\.0\.5/);
 assert.match(n2,/lucide-react@1\.70\.0/);
 assert.match(n3,/lucide-react@1\.70\.0/);
 assert.match(n3,/class-variance-authority@0\.7\.1/);
 assert.doesNotMatch(n1,/class-variance-authority@0\.7\.1/);
 assert.doesNotMatch(n2,/class-variance-authority@0\.7\.1/);
 assert.match(n2,/react-remove-scroll-bar@2\.3\.8/);
 assert.match(n2,/License text: Unknown for this exact published tarball/);
 assert.doesNotMatch(n1,/react-remove-scroll-bar@2\.3\.8/);
 const ev=JSON.parse(readFileSync(join(root,'batches/uilayout-next-01/SOURCE-RUNTIME.json'),'utf8'));
 const swapy=ev.lockClosurePackages.find(x=>x.name==='swapy');
 assert.equal(swapy.version,'1.0.5');
 assert.equal(swapy.spdxFromLock,'GPL-3.0');
 assert.equal(swapy.licenseText,'official-tarball');
 assert.equal(typeof swapy.licenseSha256,'string');
 assert.equal(swapy.licenseSha256.length,64);
 assert.match(n1,new RegExp(swapy.licenseSha256));
});

test('production runtimes do not load upstream remote photos, the Noto GIF, or noise.gif',()=>{
 for(const batch of BATCHES){
  const js=readFileSync(join(root,'batches',batch,'runtime.js'),'utf8');
  const css=readFileSync(join(root,'batches',batch,'runtime.css'),'utf8');
  const all=js+css;
  assert.equal(all.includes('unsplash'),false,batch);
  assert.equal(all.includes('fonts.gstatic'),false,batch);
  assert.equal(all.includes('noise.gif'),false,batch);
  assert.equal(all.includes('macos.jpg'),false,batch);
  assert.match(js,/data:image\/svg\+xml/);
 }
});

import {execFileSync} from 'node:child_process';

function zipNames(zipPath){
 return execFileSync('unzip',['-Z','-1',zipPath],{encoding:'utf8'}).split(/\n/).filter(Boolean);
}
function zipRead(zipPath,name){
 return execFileSync('unzip',['-p',zipPath,name]);
}

test('downloadable source zips ship license materials and leave originals unchanged',()=>{
 const repo=join(root,'..','..');
 const expectedOriginals={
  'uilayout-next-01':[
   'originals/drag/drag-items.tsx',
   'originals/swapy/swapy-handle.tsx',
   'originals/scroll-animation/sticky-hero-scroll.tsx',
   'originals/scroll-animation/repeat-scroll.tsx',
  ],
  'uilayout-next-02':[
   'originals/timeline-animation/index.tsx',
   'originals/mac/genie-effect.tsx',
   'originals/linear-modal/standalone-version.tsx',
   'originals/image-reveal/image-reveal.tsx',
   'originals/drawer/nested-vaul-drawer.tsx',
  ],
  'uilayout-next-03':[
   'originals/drawer/responsive-header.tsx',
   'originals/footers/animated-logo-footer.tsx',
   'originals/card/product-card4.tsx',
   'originals/color-picker/raws-color-picker.tsx',
  ],
 };
 for(const batch of BATCHES){
  const ev=JSON.parse(readFileSync(join(root,'batches',batch,'SOURCE-RUNTIME.json'),'utf8'));
  const zipPath=join(repo,ev.sourceZip.path);
  const zipBuf=readFileSync(zipPath);
  assert.equal(sha256(zipBuf),ev.sourceZip.sha256,batch);
  assert.equal(zipBuf.byteLength,ev.sourceZip.bytes,batch);
  assert.match(ev.sourceZip.previousSha256BeforeLicensePack,/^[a-f0-9]{64}$/);
  assert.notEqual(ev.sourceZip.previousSha256BeforeLicensePack,ev.sourceZip.sha256);
  assert.equal(ev.licenseMaterialsInDownloadableSourceZip.present,true);
  const names=zipNames(zipPath);
  for(const need of ['LICENSE','THIRD_PARTY_NOTICES.txt','LICENSE-PACK.md','SOURCE-LICENSE.json','package-lock.json']){
   assert.equal(names.includes(need),true,`${batch} missing ${need}`);
  }
  const notices=zipRead(zipPath,'THIRD_PARTY_NOTICES.txt').toString('utf8');
  const pack=zipRead(zipPath,'LICENSE-PACK.md').toString('utf8');
  if(batch==='uilayout-next-01'){
   assert.match(notices,/swapy@1\.0\.5/);
   assert.match(notices,/GNU GENERAL PUBLIC LICENSE/);
   assert.match(pack,/GPL-3\.0/);
   assert.match(pack,/It is not .MIT only/);
   assert.match(pack,/does not license the\nwhole bundle/);
  }else{
   assert.doesNotMatch(notices,/swapy@1\.0\.5/);
  }
  if(batch!=='uilayout-next-01'){
   assert.match(notices,/react-remove-scroll-bar@2\.3\.8/);
   assert.match(notices,/License text: Unknown for this exact published tarball/);
  }
  for(const orig of expectedOriginals[batch]){
   assert.equal(names.includes(orig),true,`${batch} missing ${orig}`);
   const data=zipRead(zipPath,orig);
   assert.ok(data.byteLength>0,orig);
  }
  const evd=JSON.parse(readFileSync(join(root,'batches',batch,'BUILD-EVIDENCE.json'),'utf8'));
  assert.equal(evd.npmCiExit,0,batch);
  assert.equal(evd.buildExit,0,batch);
  assert.equal(evd.thisRebuild.jsEqualsProduction,false,batch);
 }
});

test('next-02/03 downloadable src includes proven runtime fixes; originals stay unpatched',()=>{
 const repo=join(root,'..','..');
 const ev2=JSON.parse(readFileSync(join(root,'batches/uilayout-next-02/SOURCE-RUNTIME.json'),'utf8'));
 const ev3=JSON.parse(readFileSync(join(root,'batches/uilayout-next-03/SOURCE-RUNTIME.json'),'utf8'));
 const zip2=join(repo,ev2.sourceZip.path);
 const zip3=join(repo,ev3.sourceZip.path);
 assert.equal(sha256(readFileSync(zip2)),ev2.sourceZip.sha256);
 assert.equal(sha256(readFileSync(zip3)),ev3.sourceZip.sha256);
 assert.equal(ev2.sourcePatchesInDownloadableZip.present,true);
 assert.equal(ev3.sourcePatchesInDownloadableZip.present,true);
 assert.equal(ev2.sourcePatchesInDownloadableZip.verifiedRebuild.jsEqualsProduction,false);
 assert.equal(ev3.sourcePatchesInDownloadableZip.verifiedRebuild.jsEqualsProduction,false);
 assert.equal(ev2.sourcePatchesInDownloadableZip.verifiedRebuild.npmCiExit,0);
 assert.equal(ev3.sourcePatchesInDownloadableZip.verifiedRebuild.buildExit,0);

 const genie=zipRead(zip2,'src/demos/mac/genie-effect.tsx').toString('utf8');
 const genieOrig=zipRead(zip2,'originals/mac/genie-effect.tsx').toString('utf8');
 assert.match(genie,/data-genie-snapshot-error/);
 assert.match(genie,/snapshots could not be prepared/);
 assert.doesNotMatch(genie,/if \(!cancelled\) onReady\(\[\]\);/);
 assert.match(genieOrig,/if \(!cancelled\) onReady\(\[\]\);/);
 assert.doesNotMatch(genieOrig,/data-genie-snapshot-error/);

 const tl=zipRead(zip2,'src/components/ui/timeline-animation.tsx').toString('utf8');
 const css=zipRead(zip2,'src/styles.css').toString('utf8');
 assert.match(tl,/data-timeline-visible-first=\{isInView \? 'entered' : 'waiting'\}/);
 assert.match(css,/body\[data-demo="timeline-animation-index"\] \[data-timeline-visible-first\]/);
 assert.match(css,/opacity:1!important;filter:none!important/);

 const color=zipRead(zip3,'src/demos/color-picker/raws-color-picker.tsx').toString('utf8');
 const colorOrig=zipRead(zip3,'originals/color-picker/raws-color-picker.tsx').toString('utf8');
 assert.match(color,/async function copyToClipboard/);
 assert.match(color,/Copy unavailable/);
 assert.match(color,/Select the HEX field and copy manually/);
 assert.match(colorOrig,/function copyToClipboard\(\) \{\n    navigator\.clipboard\.writeText\(hexValue\);/);
 assert.doesNotMatch(colorOrig,/Copy unavailable/);

 const names2=zipNames(zip2);
 const names3=zipNames(zip3);
 assert.equal(names2.includes('SOURCE-PATCHES.md'),true);
 assert.equal(names2.includes('THIRD_PARTY_NOTICES.txt'),true);
 assert.equal(names3.includes('SOURCE-PATCHES.md'),true);
 assert.equal(names3.includes('THIRD_PARTY_NOTICES.txt'),true);
});
