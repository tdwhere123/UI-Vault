import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {existsSync, readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {Script} from 'node:vm';
import {adaptCandidate} from './candidate-adapter.mjs';
import {legacyFeaturedCandidateIds} from './legacy-featured-candidates.mjs';
import {composePreview,validateScriptNames,MAX_SCRIPT_BYTES} from './preview-runtime.mjs';
const read=p=>readFile(new URL(p,import.meta.url),'utf8');
const qualifiedInventoryIds=JSON.parse(readFileSync(new URL('test-fixtures/curation/qualified-inventory-scopes.json',import.meta.url),'utf8')).qualified.map(x=>x.id);
test('source baseline is preserved; new families have previews or explicit reviewed source-only status',async()=>{
 const a=JSON.parse(await read('candidate-catalog.json')).map(adaptCandidate),b=JSON.parse(await read('items.json'));
 const baseline=JSON.parse(await read('candidate-baseline-ids.json'));assert.equal(baseline.length,185);assert(baseline.every(id=>a.some(x=>x.id===id)));assert(a.filter(x=>!baseline.includes(x.id)).every(x=>x.preview||(x.previewStatus==='source-only'&&x.sourceCollectionReady===true&&x.runtimeRedistributionAuditComplete===false&&x.completedPreviewCount===0&&/^[a-f0-9]{40}$/.test(x.revision)&&/^https:\/\/github\.com\//.test(x.licenseEvidence?.url||'')&&/^[a-f0-9]{64}$/.test(x.licenseEvidence?.sha256||''))));assert.deepEqual(a.filter(x=>b.some(y=>y.id===x.id)).map(x=>x.id).sort(),[...qualifiedInventoryIds].sort());assert.equal(new Set([...a,...b].map(x=>x.id)).size,a.length+b.length-qualifiedInventoryIds.length);
 const categories=['Agent与对话','输入与选择','导航与组织','数据与状态','展示与媒体','产品与营销','视觉与动效','图标系列'];assert(a.every(x=>x.pending&&categories.includes(x.category)));
 assert(a.filter(x=>x.preview&&legacyFeaturedCandidateIds.has(x.id)).every(x=>x.featured));assert(a.filter(x=>x.preview&&!legacyFeaturedCandidateIds.has(x.id)&&!x.editorialApproval).every(x=>!x.featured));assert(a.filter(x=>!x.preview).every(x=>!x.featured));
 assert(a.filter(x=>x.format==='图标家族').every(x=>x.kind==='图标系列'));
 assert(a.filter(x=>x.batch==='batch-002').every(x=>!x.bundle));
});
test('every local preview has parseable self-contained runtime assets',async()=>{
 const a=JSON.parse(await read('candidate-catalog.json')).map(adaptCandidate).filter(x=>x.preview);assert(a.length>=22);
 for(const x of a){const names=x.runtime.scripts?validateScriptNames(x.runtime.scripts):[x.runtime.scriptSrc],dir=x.runtime.js.slice(0,-x.runtime.scriptSrc.length);const [html,css,parts]=await Promise.all([read(x.preview),read(x.runtime.css),Promise.all(names.map(n=>read(dir+n)))]);for(const text of parts){new Script(text);if(x.runtime.scripts)assert(Buffer.byteLength(text,'utf8')<MAX_SCRIPT_BYTES)}const js=parts.join('\n;\n');new Script(js);const composed=composePreview(html,css,js,x.runtime);assert(composed.includes("connect-src 'none'"));assert(!composed.includes('src="runtime.js"'));assert(css.length>0);}
});

test('family search preserves supplied glyph names and multilingual labels',()=>{const x=adaptCandidate({id:'test:icons',title:'Icons',keywords:['robot','机器人']});assert(x.keywords.includes('robot'));assert(x.keywords.includes('机器人'));});

test('local audio previews opt in only to blob media while all network stays blocked',()=>{const h='<head><link rel="stylesheet" href="runtime.css"></head><script src="runtime.js"></script>';const r={cssHref:'runtime.css',scriptSrc:'runtime.js'};const normal=composePreview(h,'body{}','',r),audio=composePreview(h,'body{}','',{...r,allowLocalMedia:true});assert(!normal.includes('media-src'));assert(audio.includes('media-src blob:;'));assert(audio.includes("connect-src 'none'"));assert(audio.includes("default-src 'none'"));assert(!audio.includes('media-src https:'));});

test('reviewed source-only additions stay outside the runnable gallery and claim no runtime or ZIP',async()=>{const raw=JSON.parse(await read('candidate-catalog.json'));for(const x of raw.filter(x=>x.sourceCollectionReady)){assert.equal(x.previewStatus,'source-only');assert.equal(x.runtimeRedistributionAuditComplete,false);assert.equal(x.publicationReady,false);assert.equal(x.completedPreviewCount,0);assert(!x.preview&&!x.thumbnail&&!x.archive);const y=adaptCandidate(x);assert.equal(y.runtime,null);assert.equal(y.bundle,'');assert(y.adaptation.length>0);assert(!raw.filter(z=>z.preview).some(z=>z.id===x.id));}});

test('normal presentation removes generic QA badges without changing audit facts or limitations',()=>{const raw={id:'test:card',title:'卡片',source:'Test',preview:'batches/test/card.html',description:'源码已归档；视觉效果与交互尚未完成本轮验证。',buildStatus:'not visually verified',gaps:['真实封面及最终浏览器验收未完成','仅本地模拟，不发送消息。'],browserVisualQA:'pending'};const before=JSON.stringify(raw),x=adaptCandidate(raw);assert.equal(x.description,'Test · 卡片');assert.equal(x.kind,'组件');assert.equal(x.adaptation,'仅本地模拟，不发送消息。');assert.equal(x.buildStatus,raw.buildStatus);assert.equal(x.browserVisualQA,'pending');assert.equal(x.pending,true);assert.equal(JSON.stringify(raw),before);});

const CATALOG_ROOT = dirname(fileURLToPath(import.meta.url));
function posterSha(buf){return createHash('sha256').update(buf).digest('hex')}

/** Dimensions from the WebP bitstream itself, independent of the content hash. */
function webpDimensions(buf) {
  if (buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') throw new Error('not a WebP file');
  let off = 12;
  while (off + 8 <= buf.length) {
    const tag = buf.toString('ascii', off, off + 4);
    const size = buf.readUInt32LE(off + 4);
    const data = off + 8;
    if (tag === 'VP8X' && size >= 10) {
      const width = 1 + buf[data + 4] + (buf[data + 5] << 8) + (buf[data + 6] << 16);
      const height = 1 + buf[data + 7] + (buf[data + 8] << 8) + (buf[data + 9] << 16);
      return { width, height };
    }
    if (tag === 'VP8L' && size >= 5) {
      if (buf[data] !== 0x2f) throw new Error('invalid VP8L signature');
      const bits = buf[data + 1] | (buf[data + 2] << 8) | (buf[data + 3] << 16) | (buf[data + 4] << 24);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    off = data + size + (size & 1);
  }
  throw new Error('WebP dimensions not found');
}

/** Selected-poster contract: file bytes and, when declared, bitstream width/height. Hash match is not treated as visual completeness. */
function assertSelectedPoster(id, buf, expect) {
  assert.equal(buf.byteLength, expect.bytes, id);
  assert.equal(posterSha(buf), expect.sha256, id);
  if (expect.width != null || expect.height != null) {
    const dim = webpDimensions(buf);
    assert.equal(dim.width, expect.width, id);
    assert.equal(dim.height, expect.height, id);
  }
}

const SUPERSEDED_FEATURES_CARDS_POSTER_SHA256 = 'fb08487dc0ff0ce082971123a22e4bfa88e2389dbb5afae00dd461c9beeef788';
const SUPERSEDED_FEATURES_CARDS_POSTER_COMMIT = 'd5f3dbd04ba04288cd2f609807b5fa7a062278b9';
const REPO = join(CATALOG_ROOT, '../..');

const SELECTED_POSTERS = {
  "mantine-ui:actions-grid": { rel: "thumbnails/mantine-ui--actions-grid.webp", sha256: "9c1e1df391fb7e55763c05ed2146dc9111c734d338c087d74c99b8a3a3032928", bytes: 20028 },
  "mantine-ui:card-gradient": { rel: "thumbnails/mantine-ui--card-gradient.webp", sha256: "b70d1eac3fc629174c5fb0cd31b34549d7899d12a5db068f0e32794d282da32f", bytes: 29000 },
  "mantine-ui:cookies-banner": { rel: "thumbnails/mantine-ui--cookies-banner.webp", sha256: "53fc5d8f22eae6319e7d8e91c4f37cb7294e20c16f0d2d1552fb822304201156", bytes: 8968 },
  "mantine-ui:features-asymmetrical": { rel: "thumbnails/mantine-ui--features-asymmetrical.webp", sha256: "aab442b62fab65b540d59609ab46510ce7a803e30fca37954bf19fc56375a6b0", bytes: 46376 },
  "mantine-ui:features-cards": { rel: "thumbnails/mantine-ui--features-cards.webp", sha256: "dcbda4f17a25cdfd96fa9210168e0dd264b90e09e3e93db26a6e7c82d59f0dbe", bytes: 70640, width: 1056, height: 520 },
  "mantine-ui:features-grid": { rel: "thumbnails/mantine-ui--features-grid.webp", sha256: "f63a4b281bddbb2bcc7d697b3913345c165a8ddf95d6007ca54d7249d976697e", bytes: 17782 },
  "mantine-ui:features-images": { rel: "thumbnails/mantine-ui--features-images.webp", sha256: "cc75e22e376871ee8bbf9c858a7564fe67f972967ddbb981d97fa6afde61360e", bytes: 24034 },
  "mantine-ui:features-title": { rel: "thumbnails/mantine-ui--features-title.webp", sha256: "743baed93909f820d3f8adc3ff6896d0851ed95aff3c446e2651203c170c7ee5", bytes: 41070 },
  "mantine-ui:footer-centered": { rel: "thumbnails/mantine-ui--footer-centered.webp", sha256: "05f4d28cc22c0715a7f0c0c35c4cab792e32b6154248da4ebe7e68e59e3ca464", bytes: 3708 },
  "mantine-ui:footer-simple": { rel: "thumbnails/mantine-ui--footer-simple.webp", sha256: "eea4b4087bf59f9f879b122c35ad170ad60f15a14596c7af1b612bdc263aaab9", bytes: 5812 },
  "mantine-ui:footer-social": { rel: "thumbnails/mantine-ui--footer-social.webp", sha256: "892a48b04eed70a9916ca18f7c78c5ea3ab12316d2c1c6334c29c2cf4fe3ed14", bytes: 1690 },
  "mantine-ui:header-menu": { rel: "thumbnails/mantine-ui--header-menu.webp", sha256: "5ed874a174b64288faad0058317e32514a666ff6d1308053a0a2e04e51f352a5", bytes: 4510 },
  "mantine-ui:header-search": { rel: "thumbnails/mantine-ui--header-search.webp", sha256: "44abe11a0f66a5cf008303e80bb75a3e4a4eca2ba0adae0a41b90144269fc504", bytes: 3572 },
  "mantine-ui:header-simple": { rel: "thumbnails/mantine-ui--header-simple.webp", sha256: "2be127d655708907ebd8a1b84865f8f41406999d9d281474e2dbf08477f49c98", bytes: 8226 },
  "mantine-ui:hero-text": { rel: "thumbnails/mantine-ui--hero-text.webp", sha256: "93ce50b0cab711a44dac8fc118fbb46500c69603cbe80c9e264949be95a1a35d", bytes: 43582 },
  "mantine-ui:hero-title": { rel: "thumbnails/mantine-ui--hero-title.webp", sha256: "50c24a4c9f3e6dac61ae225c71c4fd65afbd91c21657a5a90dea761b8ca43677", bytes: 60696 },
  "mantine-ui:navbar-links-group": { rel: "thumbnails/mantine-ui--navbar-links-group.webp", sha256: "51dbbf92b7ff8c6689fc5eba4e7dd5607761e49ff560e02692afc56d1109505a", bytes: 3462 },
  "mantine-ui:navbar-minimal": { rel: "thumbnails/mantine-ui--navbar-minimal.webp", sha256: "a77ff44c391914603b3ba170826d178b2b11c438a25242525910db683d055e1e", bytes: 5706 },
  "mantine-ui:navbar-segmented": { rel: "thumbnails/mantine-ui--navbar-segmented.webp", sha256: "ed5b52e5feb5772fbb1d89d4f78aa57fbe207cbfb029abd3138cf4733f364c24", bytes: 18250 },
  "mantine-ui:navbar-simple": { rel: "thumbnails/mantine-ui--navbar-simple.webp", sha256: "39255003768a4dacecc01ef444d6e3e2e37cd1c57a99ebdb58e5d0a3b977ce1d", bytes: 16790 },
  "mantine-ui:not-found-title": { rel: "thumbnails/mantine-ui--not-found-title.webp", sha256: "c531c258d6738cdd8ea3d33acbce873431bdc7513032bd40f10f533ef312824d", bytes: 26716 },
  "mantine-ui:nothing-found-background": { rel: "thumbnails/mantine-ui--nothing-found-background.webp", sha256: "ec17a0a12b86c950d81ceaf58f0f1a149bc0554717650cd2c533d82f8e17ef41", bytes: 41644 },
  "mantine-ui:progress-card": { rel: "thumbnails/mantine-ui--progress-card.webp", sha256: "95f401a3bf530393a66a7eb1c8204e7e39b34b227b2429e0fd2cc206a856d5a8", bytes: 4788 },
  "mantine-ui:authentication-title": { rel: "thumbnails/mantine-ui--authentication-title.webp", sha256: "2d89146f2a9bdc91608fc53c1c3abe096f2c347b1c5d218dd7ab8230229dc027", bytes: 24018 },
  "mantine-ui:contact-us": { rel: "thumbnails/mantine-ui--contact-us.webp", sha256: "cd43a1a3694171c9743d4e2ed28ef46105fdb73a04443f0feeb9d2d11c07e0a7", bytes: 134412 },
  "mantine-ui:dropzone-button": { rel: "thumbnails/mantine-ui--dropzone-button.webp", sha256: "a88e747d3baf3538e2f2bc11ad50f7f185af16e23ac6863d2a29ae6c88d94672", bytes: 6138 },
  "mantine-ui:forgot-password": { rel: "thumbnails/mantine-ui--forgot-password.webp", sha256: "87acc489299599657f8a9437e77c958b46d9a1215f0bc9da09d2531f5096a4cd", bytes: 18998 },
  "mantine-ui:get-in-touch-simple": { rel: "thumbnails/mantine-ui--get-in-touch-simple.webp", sha256: "d7f02efba5f56c1144a47c93db79ab9679f3b30e7985552980338510a1b60ab9", bytes: 5616 },
  "mantine-ui:server-error": { rel: "thumbnails/mantine-ui--server-error.webp", sha256: "58164c6ffb086d6f1e591b36be0cd980c328426ebcb594fd3b795a4ab45993ea", bytes: 13980 },
  "mantine-ui:server-overload": { rel: "thumbnails/mantine-ui--server-overload.webp", sha256: "249b0ca680cf5e52ed4f5800b6031f3f2449eadead62cacea070476595f71a62", bytes: 20890 },
  "mantine-ui:stats-card": { rel: "thumbnails/mantine-ui--stats-card.webp", sha256: "e5e486cb8aa2839d20c7a23ca2f97218fc2872d7af6433df6db9cc19412c4507", bytes: 14552 },
  "mantine-ui:stats-controls": { rel: "thumbnails/mantine-ui--stats-controls.webp", sha256: "2f40c4b4b4825f9c96ae6cf0d6bc196ef964f56d98ef1b0ad65074478a0413f8", bytes: 24810 },
  "mantine-ui:stats-grid": { rel: "thumbnails/mantine-ui--stats-grid.webp", sha256: "039af37241a7cc21a3711ed7e017b9ac59384ab4cfbc557fbc394d7ea7bdf319", bytes: 6600 },
  "mantine-ui:stats-grid-icons": { rel: "thumbnails/mantine-ui--stats-grid-icons.webp", sha256: "35a6289090a26ed78ede421f1fa06f8887917cd6343b31cc2ad3524a7dc8baf5", bytes: 20186 },
  "mantine-ui:stats-group": { rel: "thumbnails/mantine-ui--stats-group.webp", sha256: "c6ff01aebf3ea3881950a691e4a2112538e94239d804f6a9249ebe27f1bc4aba", bytes: 76856 },
  "mantine-ui:stats-ring": { rel: "thumbnails/mantine-ui--stats-ring.webp", sha256: "cc8413f04f858c62bf6b7d81cf683e49a8e8433800f568a91448575d9dbe4d54", bytes: 19608 },
  "mantine-ui:stats-ring-card": { rel: "thumbnails/mantine-ui--stats-ring-card.webp", sha256: "16d7727fdaf925efa6680892c4a9800ee1522d36382845de957d61aa714bc72c", bytes: 15974 },
  "mantine-ui:stats-segments": { rel: "thumbnails/mantine-ui--stats-segments.webp", sha256: "9131f3793f7e04ab9b6e1c3fbb6fded22a1f2c4f3e899792ed184f93e20fb988", bytes: 20588 },
  "mantine-ui:switches-card": { rel: "thumbnails/mantine-ui--switches-card.webp", sha256: "ae0ac088fdfc61aa36812d376b9b845bc4a88d5809f8cf067ed1c3ce159993d3", bytes: 10036 },
  "mantine-ui:dnd-list": { rel: "thumbnails/mantine-ui--dnd-list.webp", sha256: "440b37ab3caf3b483a5d3663bbfc93a1aab930b69c792eed6cab871b8f31fa95", bytes: 4924 },
  "mantine-ui:dnd-list-handle": { rel: "thumbnails/mantine-ui--dnd-list-handle.webp", sha256: "5520fe57230e7b8d37aa0506c31528aa96d7c26df076f2b9046b89d42d5424fd", bytes: 5072 },
  "mantine-ui:dnd-table": { rel: "thumbnails/mantine-ui--dnd-table.webp", sha256: "9128484745e3e321ee75b000381ea3464013548b6659c16b35e1e4caea9afc40", bytes: 4622 },
  "mantine-ui:table-of-contents": { rel: "thumbnails/mantine-ui--table-of-contents.webp", sha256: "b82fa6a7662dd9d6ea186de695f1875f625c90044528409c8d5c9a752be8dfed", bytes: 11720 },
  "mantine-ui:table-of-contents-floating": { rel: "thumbnails/mantine-ui--table-of-contents-floating.webp", sha256: "036babe5d93cdcb8471d0ef012f9a2029141dbb64dc72bed0ddccf7230abf4bf", bytes: 10934 },
  "mantine-ui:table-reviews": { rel: "thumbnails/mantine-ui--table-reviews.webp", sha256: "ff1659e52ad74925cc9d22184199774799d9c929ea8b312508f3b9045ea1a974", bytes: 50858 },
  "mantine-ui:table-scroll-area": { rel: "thumbnails/mantine-ui--table-scroll-area.webp", sha256: "021cb518f17fecf4eccbc2ee6b361b5b5e986c38c8a4225c3d85e7bec5238b4d", bytes: 26102 },
  "hyperui:marketing-footers": { rel: "thumbnails/hyperui--marketing-footers.webp", sha256: "0a7874dc98bc3e6ca216d73c359794fed000f08cc498fa7d2d704f9ca8e86270", bytes: 18596 },
  "hyperui:marketing-feature-grids": { rel: "thumbnails/hyperui--marketing-feature-grids.webp", sha256: "731052e1d24e6bf9104909607317785dd3339db6003a0534184dd00cf78dfd78", bytes: 16972 },
  "hyperui:application-stats": { rel: "thumbnails/hyperui--application-stats.webp", sha256: "06d2475eea3bedebd507044e3ce82b9966dd0e095569f37ec2f436af5c106f54", bytes: 4972 },
  "hyperui:application-empty-states": { rel: "thumbnails/hyperui--application-empty-states.webp", sha256: "4fa1a4b1160dce640328e13d9038affaf70ab796f0faeccf627db2f392d270c1", bytes: 7500 },
  "daisyui:footer": { rel: "thumbnails/daisyui--footer.webp", sha256: "d7a70ae41baa1a5e77dbcc88febbcd9fb22d7f0294fa70d7e445a2cc46300627", bytes: 4936 },
  "daisyui:hero": { rel: "thumbnails/daisyui--hero.webp", sha256: "639831758697d6bc3a567fd718d68477f3ce821ba659b656d1f6b91d2cad184d", bytes: 7856 },
  "daisyui:steps": { rel: "thumbnails/daisyui--steps.webp", sha256: "407fdb8862de5f19fd769cc7eec6893981960421849f8ab1d027d09fe5f257f5", bytes: 3334 },
  "flowbite:list-features": { rel: "thumbnails/flowbite--list-features.webp", sha256: "40e9a82a6d3810f0c5d79930870409293a9b8eeea4420bfc284f162a8248be3c", bytes: 6274 },
};
const NO_NORMAL_COVER_ID = 'mantine-ui:double-header';
const PARTIAL_POSTER_GAPS = {
  'mantine-ui:features-grid': '本封面为底部滚动单帧，不含主标题，不能当作完整全页。',
  'hyperui:marketing-footers': '本封面为上部单帧，不含 copyright 行，不能当作完整页脚。',
  'mantine-ui:navbar-links-group': '本封面中第三子项被截断，不能视为三项完整。',
  'mantine-ui:server-error': '本封面背景下沿不完整，不能当作完整全页。',
  'mantine-ui:server-overload': '本封面背景下沿不完整，不能当作完整全页。',
  'mantine-ui:contact-us': '本封面背景下沿不完整，不能当作完整全页。',
  'mantine-ui:dropzone-button': '本封面没有原生文件选择器画面，不能证明选择器或取消路径。',
  'mantine-ui:double-header': '因页头文字连写，未提供正常实拍封面。',
};

test('candidate posters are the selected crop bytes, double-header stays without a normal cover, and they are not counted as covers or acceptances', () => {
  const catalog = JSON.parse(readFileSync(join(CATALOG_ROOT, 'candidate-catalog.json'), 'utf8'));
  const ledger = JSON.parse(readFileSync(join(CATALOG_ROOT, 'COLLECTION-LEDGER.json'), 'utf8'));
  const items = JSON.parse(readFileSync(join(CATALOG_ROOT, 'items.json'), 'utf8'));
  assert.equal(Object.keys(SELECTED_POSTERS).length, 54);
  assert.equal(ledger.accounts.covers, 0);
  assert.equal(ledger.accounts.browserVisualQA, 0);
  assert.equal(ledger.accounts.verifiedNewIndependentUIs, 40);
  assert.equal(items.length, 276);
  assert.deepEqual(items.filter(x=>SELECTED_POSTERS[x.id]).map(x=>x.id).sort(),[...qualifiedInventoryIds].sort());
  assert.equal(items.some(x=>x.id===NO_NORMAL_COVER_ID),false);
  for (const [id, expect] of Object.entries(SELECTED_POSTERS)) {
    const entry = catalog.find((x) => x.id === id);
    assert.ok(entry, id);
    assert.equal(entry.thumbnail, expect.rel, id);
    const buf = readFileSync(join(CATALOG_ROOT, expect.rel));
    assertSelectedPoster(id, buf, expect);
    assert.match(expect.rel, /^thumbnails\/[a-zA-Z0-9_-]+\.webp$/);
    const joined = (entry.gaps || []).join('\n');
    const special = PARTIAL_POSTER_GAPS[id];
    if (special) assert.match(joined, new RegExp(special.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), id);
    else assert.match(joined, /列表封面为有限实拍裁切，不是完整全页或已核验收。/, id);
    assert.doesNotMatch(joined, /也没有真实运行页封面/);
  }
  const featuresCardsExpect = SELECTED_POSTERS['mantine-ui:features-cards'];
  const supersededFeaturesCardsPoster = execFileSync('git', ['show', `${SUPERSEDED_FEATURES_CARDS_POSTER_COMMIT}:apps/atlas-sample/thumbnails/mantine-ui--features-cards.webp`], { cwd: REPO, maxBuffer: 32 * 1024 * 1024 });
  assert.equal(posterSha(supersededFeaturesCardsPoster), SUPERSEDED_FEATURES_CARDS_POSTER_SHA256);
  assert.throws(() => assertSelectedPoster('mantine-ui:features-cards', supersededFeaturesCardsPoster, featuresCardsExpect), { name: 'AssertionError' });
  const none = catalog.find((x) => x.id === NO_NORMAL_COVER_ID);
  assert.ok(none);
  assert.equal(none.thumbnail, undefined);
  assert.equal(existsSync(join(CATALOG_ROOT, 'thumbnails/mantine-ui--double-header.webp')), false);
  assert.match((none.gaps || []).join('\n'), /因页头文字连写，未提供正常实拍封面。/);
});
