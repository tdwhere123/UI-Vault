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

test('catalog MIT assertions for these items now point at the verified frozen LICENSE',()=>{
 const catalog=JSON.parse(readFileSync(join(root,'candidate-catalog.json'),'utf8'));
 for(const id of IDS){
  const item=catalog.find(x=>x.id===id);
  assert.ok(item,id);
  assert.equal(item.license,'MIT');
  assert.equal(item.repository,REPO);
  assert.equal(item.revision,REVISION);
  assert.equal(item.licenseEvidence?.url,LICENSE_URL);
  assert.equal(item.licenseEvidence?.sha256,EXPECTED_SHA);
  assert.match(item.licenseEvidence?.scope||'',/Root original LICENSE only/);
  assert.match(item.upstream,new RegExp(`${REVISION}/apps/ui-layout/registry/components/`));
 }
});
