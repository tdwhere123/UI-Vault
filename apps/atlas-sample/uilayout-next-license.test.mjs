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
