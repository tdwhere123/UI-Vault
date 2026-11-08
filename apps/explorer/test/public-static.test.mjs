import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, readdir, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';
import { join, resolve } from 'node:path';
import { createServer } from 'node:http';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { once } from 'node:events';
import { validateCatalog, searchCatalog, getComponentAvailability } from '../../../dist/packages/core/src/index.js';
import { exportStatic, projectPublicCatalog, auditStatic } from '../static-export.mjs';
import { searchPublicCatalog, validatePublicCatalog } from '../public-catalog.mjs';

const root = resolve(import.meta.dirname, '../../..');
const original = JSON.parse(await readFile(join(root, 'catalog.json'), 'utf8'));
const review = JSON.parse(await readFile(join(root, 'apps/explorer/public-review.json'), 'utf8'));
const sha = execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();
const ids = values => values.map(x => x.id);
const project = c => projectPublicCatalog(c, review);

test('explicit reviewed projection excludes private text, file paths, pictures and demo links', () => {
  const c = structuredClone(original);
  const ref = c.components.find(x => x.assetKind === 'reference');
  ref.implementationNotes = 'PRIVATE_CANARY /workspace/private/key';
  ref.localAssetPaths = ['evidence/PRIVATE_CANARY.png'];
  ref.screenshotUrls = ['https://private.example/PRIVATE_CANARY'];
  ref.demoUrls = ['https://private.example/PRIVATE_CANARY'];
  const out = project(c);
  assert.equal(out.components.filter(x => x.assetKind === 'source').length, 20);
  assert.equal(out.components.filter(x => x.assetKind === 'reference').length, 6);
  assert.equal(JSON.stringify(out).includes('PRIVATE_CANARY'), false);
  assert.equal(searchPublicCatalog(out, {query:'PRIVATE_CANARY'}).length, 0);
  assert.equal(searchCatalog(c, {query:'PRIVATE_CANARY'}).length, 1);
  for (const x of out.components) {
    assert.equal(x.restoreStatus, 'not_checked');
    assert.equal(x.availability, getComponentAvailability(c.components.find(y => y.id === x.id)));
    for (const key of ['files','snapshotPath','limitations','implementationNotes','demoUrls','screenshotUrls','upstreamCommit']) assert.equal(key in x, false);
  }
  const bad = structuredClone(c); bad.components[0].name = '/workspace/private/key';
  assert.throws(() => project(bad), /Unsafe public text/);
  bad.components[0].name='PRIVATE_CANARY';
  assert.throws(() => project(bad), /review/i);
  const url = structuredClone(review); url.sources[0].upstreamUrl = 'https://unreviewed.example/';
  assert.throws(() => projectPublicCatalog(c, url), /review/i);
  const extra = structuredClone(out); extra.components[0].files = [];
  assert.throws(() => validatePublicCatalog(extra));
  extra.components[0] = {...out.components[0], name:'/workspace/private/key'};
  assert.throws(() => validatePublicCatalog(extra));
});

test('shared predicates preserve null, absent, empty, source identity and internal reference search', () => {
  const c = structuredClone(original);
  const a=c.components[0], b=c.components.find(x=>x.sourceId==='bencho'), d=c.components[2];
  a.name = b.name = 'Same name';
  a.techStack = {frameworks:null,languages:null,styling:null};
  delete b.techStack;
  d.techStack = {frameworks:[],languages:[],styling:[]};
  const r = structuredClone(review);
  c.sources[0].name=c.sources[1].name='Same source name';
  for(const source of c.sources)r.sources.find(x=>x.id===source.id).name=source.name;
  for (const x of [a,b,d]) {
    const entry = r.components.find(y => y.id === x.id);
    entry.name = x.name;
    if (x.techStack) entry.techStack = x.techStack; else delete entry.techStack;
  }
  // Review updates are explicit local test inputs, not a production approval bypass.
  const out = projectPublicCatalog(c, r);
  for (const q of [{framework:null},{language:null},{styling:null},{framework:'React'}, {}, {sourceId:a.sourceId,query:'Same name'}, {sourceId:'bencho'}, {availability:'source_snapshot'}, {licenseStatus:'unknown'}, {assetKind:'reference'}, {category:a.category,tag:a.tags[0]}]) {
    assert.deepEqual(ids(searchPublicCatalog(out,q)),ids(searchCatalog(c,q)));
  }
  assert(searchPublicCatalog(out,{framework:null}).some(x=>x.id===a.id));
  assert(searchPublicCatalog(out,{framework:null}).some(x=>x.id===b.id));
  assert(!searchPublicCatalog(out,{framework:null}).some(x=>x.id===d.id));
  assert.throws(()=>searchPublicCatalog(out,{framework:42}));
  assert.throws(()=>searchPublicCatalog(out,{extra:'x'}));
  const ref = c.components.find(x=>x.assetKind==='reference');
  ref.implementationNotes='INTERNAL_ONLY_TOKEN';
  assert.equal(searchCatalog(c,{query:'INTERNAL_ONLY_TOKEN'})[0].id,ref.id);
  assert.equal(searchPublicCatalog(out,{query:'INTERNAL_ONLY_TOKEN'}).length,0);
  const illegal=structuredClone(c); illegal.components.find(x=>x.assetKind==='source').snapshotPath='../escape';
  assert.throws(()=>validateCatalog(illegal));
  assert.throws(()=>searchCatalog(illegal,{}));
});

test('root and subdirectory static HTTP expose only audited files, same core filtering and verifiable hashes', async () => {
  for (const basePath of ['/', '/UI-Vault/']) {
    const out=await mkdtemp(join(tmpdir(),'vault-public-'));
    await exportStatic({root,output:out,basePath,sha});
    const audit=await auditStatic(out);
    const delivered=await import(pathToFileURL(join(out,'public-catalog.js')));
    const deliveredData=JSON.parse(await readFile(join(out,'catalog.json'),'utf8'));
    assert.equal(delivered.searchPublicCatalog(deliveredData,{assetKind:'source'}).length,20);
    assert.equal(delivered.searchPublicCatalog(deliveredData,{assetKind:'reference'}).length,6);
    for(const module of ['app.js','public-catalog.js','query-view.js','query-validator.js','source-view.js','gallery-model.js']) {
      const code=await readFile(join(out,module),'utf8');
      assert(!code.includes('sourceMappingURL')); assert(!code.includes('require('));
      for(const match of code.matchAll(/from ['"]([^'"]+)['"]/g)) {
        assert(match[1].startsWith('./'));
        assert((await readdir(out)).includes(match[1].slice(2)));
      }
    }
    assert.equal(audit.files.length,145);
    const files=await readdir(out);
    assert.deepEqual(files.sort(),["app.js", "catalog.json", "gallery-04-button.png", "gallery-06-badge.png", "gallery-10-tabs.png", "gallery-11-progress.png", "gallery-12-skeleton.png", "gallery-LICENSE.txt", "gallery-THIRD-PARTY.txt", "gallery-agent-01-attachment-button.png", "gallery-agent-02-send-button.png", "gallery-data.json", "gallery-model.js", "gallery-neiki.css", "gallery-neiki.js", "index.html", "manifest.json", "public-catalog.js", "query-validator.js", "query-view.js", "style.css", "version.json", "source-downloads.json", "source-view.html", "source-view.js", ...`accordion tree-table calendar cookie-consent checkbox code-block combobox command-palette dialog drawer dropdown-menu empty-state expandable-card expandable-text input shortcut-recorder inline-edit json-viewer line-chart pagination image-compare radio-group rating reorderable-list resizable-panels scroll-area select signature-pad rich-text-editor sortable-data-table color-picker swipe-actions switch tag-input time-picker timeline toast tree-view bar-chart activity-heatmap donut-chart streamgraph ridgeline treemap waffle-chart slope-chart countdown icon-morph onboarding-checklist filter-toolbar`.split(' ').flatMap(slug=>[`source-arcui-${slug}.tar.gz`,`source-arcui-${slug}.json`]), ...["attachment-button","bash-tool","edit-tool","error-message","generic-tool","markdown","mcp-tool","mode-selector","model-picker","plan-tool","question-prompt","question-tool","search-tool","send-button","subagent-tool","suggestions","text-shimmer","thinking-tool","todo-tool","tool-group"].map(id=>`source-agent-elements-${id}.tar.gz`)].sort());
    const server=createServer(async(req,res)=>{
      try {
        const pathname=new URL(req.url,'http://localhost').pathname;
        const file=pathname===basePath?'index.html':pathname.startsWith(basePath)?pathname.slice(basePath.length):'';
        if (!files.includes(file)) {res.writeHead(404);res.end();return;}
        res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.html')?'text/html':file.endsWith('.png')?'image/png':'application/json');
        res.end(await readFile(join(out,file)));
      } catch {res.writeHead(404);res.end();}
    }).listen(0,'127.0.0.1');
    await once(server,'listening');
    const origin=`http://127.0.0.1:${server.address().port}`;
    try {
      const page=await fetch(origin+basePath);
      assert.equal(page.headers.get('content-type'),'text/html');
      const html=await page.text();
      assert.match(html,/仅参考截图/);
      assert.match(html,/源码下载 · 与截图分账/);
      assert.equal([...html.matchAll(/download="source-agent-elements-/g)].length,20);
      assert.match(html,/Content-Security-Policy/);
      for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
        const url=new URL(match[1],origin+basePath);
        if(url.origin!==origin){assert.equal(url.href,'https://github.com/neikiri/neiki-gallery');continue;}
        assert(url.pathname.startsWith(basePath));
        assert.equal((await fetch(url)).status,200);
      }
      const data=await (await fetch(origin+basePath+'catalog.json')).json();
      assert.equal(searchPublicCatalog(data,{assetKind:'source'}).length,20);
      assert.equal(searchPublicCatalog(data,{assetKind:'reference'}).length,6);
      const manifest=await (await fetch(origin+basePath+'manifest.json')).json();
      for(const file of manifest.files) {
        const bytes=Buffer.from(await (await fetch(origin+basePath+file.path)).arrayBuffer());
        assert.equal(bytes.length,file.bytes);
        assert.equal(createHash('sha256').update(bytes).digest('hex'),file.sha256);
      }
      for (const path of ['api/source','archive/x.tsx','evidence/x','catalog.ts','source.map','screenshot.png','demo/']) assert.equal((await fetch(origin+basePath+path)).status,404);
    } finally { await new Promise(resolve=>server.close(resolve)); }
    await writeFile(join(out,'extra.txt'),'canary');
    await assert.rejects(()=>auditStatic(out),/file/i);
    // A separate complete output avoids the extra-file rejection masking content checks.
    const altered=await mkdtemp(join(tmpdir(),'vault-altered-'));
    await exportStatic({root,output:altered,basePath,sha});
    const bad=JSON.parse(await readFile(join(altered,'catalog.json'),'utf8'));bad.components[0].name='PRIVATE_CANARY';
    const content=JSON.stringify(bad);
    await writeFile(join(altered,'catalog.json'),content);
    const forged=JSON.parse(await readFile(join(altered,'manifest.json'),'utf8'));
    const row=forged.files.find(x=>x.path==='catalog.json');
    row.bytes=Buffer.byteLength(content);row.sha256=createHash('sha256').update(content).digest('hex');
    await writeFile(join(altered,'manifest.json'),JSON.stringify(forged));
    await assert.rejects(()=>auditStatic(altered),/Unapproved bytes: catalog.json/);
    const changedText=await mkdtemp(join(tmpdir(),'vault-source-text-altered-'));
    await exportStatic({root,output:changedText,basePath,sha});
    const viewName='source-arcui-accordion.json',view=JSON.parse(await readFile(join(changedText,viewName)));
    view.files[0].content='forged source';const viewBytes=JSON.stringify(view);
    await writeFile(join(changedText,viewName),viewBytes);
    const viewManifest=JSON.parse(await readFile(join(changedText,'manifest.json'))),viewRow=viewManifest.files.find(x=>x.path===viewName);
    viewRow.bytes=Buffer.byteLength(viewBytes);viewRow.sha256=createHash('sha256').update(viewBytes).digest('hex');
    await writeFile(join(changedText,'manifest.json'),JSON.stringify(viewManifest));
    await assert.rejects(()=>auditStatic(changedText),/Unapproved bytes: source-arcui-accordion.json/);
    const broken=await mkdtemp(join(tmpdir(),'vault-package-altered-'));
    await exportStatic({root,output:broken,basePath,sha});
    const archive='source-agent-elements-send-button.tar.gz',badArchive=Buffer.from('broken package');
    await writeFile(join(broken,archive),badArchive);
    const forgedArchive=JSON.parse(await readFile(join(broken,'manifest.json'),'utf8'));
    const descriptor=forgedArchive.files.find(x=>x.path===archive);
    descriptor.bytes=badArchive.length;descriptor.sha256=createHash('sha256').update(badArchive).digest('hex');
    await writeFile(join(broken,'manifest.json'),JSON.stringify(forgedArchive));
    await assert.rejects(()=>auditStatic(broken),/Unapproved bytes: source-agent-elements-send-button/);
  }
});

test('generated query validator stays identical to core schema and base paths reject traversal', async () => {
  const {compileQueryValidator}=await import('../compile-query-validator.mjs');
  const {validateCatalogQuery}=await import('../../../dist/packages/core/src/catalog.js');
  assert.equal(await readFile(join(root,'apps/explorer/query-validator.mjs'),'utf8'),compileQueryValidator());
  const out=project(original);
  for(const q of [{framework:undefined},{framework:null},{framework:[]},{framework:''},{framework:'😀'},null,[],{query:1},{availability:'ready'},{query:''},{sourceId:''}]) {
    let internal=true,external=true;
    try {validateCatalogQuery(q);}catch{internal=false;}
    try {searchPublicCatalog(out,q);}catch{external=false;}
    assert.equal(external,internal,JSON.stringify(q));
  }
  const output=await mkdtemp(join(tmpdir(),'vault-base-'));
  for(const basePath of ['/../','/x/../../','//evil.example/','/x?secret/','/x#secret/','https://evil.example/']) await assert.rejects(()=>exportStatic({root,output,basePath,sha}),/base path/);
  assert.throws(()=>validateCatalog(out));
});

test('review lock rejects arbitrary text in each projected string-bearing container', () => {
  const mutations=[
    c=>{c.components[0].name='PRIVATE_CANARY';},
    c=>{c.components[0].category='PRIVATE_CANARY';},
    c=>{c.components[0].tags.push('PRIVATE_CANARY');},
    c=>{c.components[0].dependencies.react='9.9.9';},
    c=>{c.components[0].techStack={frameworks:['PRIVATE_CANARY'],languages:null,styling:[]};},
    c=>{c.sources[0].name='PRIVATE_CANARY';}
  ];
  for(const mutate of mutations) {
    const input=structuredClone(original);mutate(input);
    assert.throws(()=>project(input),/review/i);
  }
  const safe=project(original);
  for(const mutate of [c=>{c.extra='x';},c=>{c.sources[0].internalPath='x';},c=>{c.components[0].extra='x';},c=>{c.components[0].techStack={frameworks:[],languages:[],styling:[],extra:'x'};}]) {
    const input=structuredClone(safe);mutate(input);
    assert.throws(()=>validatePublicCatalog(input));
  }
});
