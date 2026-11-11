import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync, existsSync} from 'node:fs';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {dirname, join} from 'node:path';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import vm from 'node:vm';
import {createPreviewLoader, composePreview} from './preview-runtime.mjs';
import {PREVIEW_ADAPTER_BOOTSTRAP, generatedAdapterFile, resolveAtlasAsset, resolveCssImageValue, installPreviewAdapters, MEDIA_SINK_COVERAGE} from './preview-adapters.mjs';
import {collectionAccountingFrom, loadCollectionAccounting} from './collection-accounting.mjs';
import {readFile} from 'node:fs/promises';

const root = dirname(fileURLToPath(import.meta.url));
const fixtures = join(root, 'test-fixtures');

function readFixtureText(rel) {
  return readFileSync(join(fixtures, rel), 'utf8');
}

function readZipText(fsPath, member) {
  return execFileSync('python3', ['-c', 'import sys,zipfile; z=zipfile.ZipFile(sys.argv[1]); sys.stdout.write(z.read(sys.argv[2]).decode())', fsPath, member], {maxBuffer: 16 * 1024 * 1024}).toString();
}

function listZipFile(fsPath) {
  return execFileSync('python3', ['-c', 'import sys,zipfile; print("\\n".join(zipfile.ZipFile(sys.argv[1]).namelist()))', fsPath]).toString().split(/\n/).filter(Boolean);
}

function readZipBytes(fsPath, member) {
  return execFileSync('python3', ['-c', 'import sys,zipfile; sys.stdout.buffer.write(zipfile.ZipFile(sys.argv[1]).read(sys.argv[2]))', fsPath, member], {maxBuffer: 16 * 1024 * 1024});
}

function packageNameFromNmPath(path) {
  const parts = String(path).replaceAll('\\', '/').split('/');
  const idx = parts.lastIndexOf('node_modules');
  if (idx < 0) return null;
  const rest = parts.slice(idx + 1);
  if (!rest[0]) return null;
  if (rest[0].startsWith('@') && rest[1]) return `${rest[0]}/${rest[1]}`;
  return rest[0];
}

function isNodeModulesPath(path) {
  const norm = String(path).replaceAll('\\', '/');
  return norm.includes('/node_modules/') || norm.startsWith('node_modules/');
}

function directPackagesFromMetafile(meta) {
  const direct = new Set();
  for (const [path, info] of Object.entries(meta.inputs || {})) {
    if (isNodeModulesPath(path)) continue;
    for (const imp of info.imports || []) {
      const name = packageNameFromNmPath(imp.path || '');
      if (name) direct.add(name);
    }
  }
  return [...direct].sort();
}

function sha256(buf) {
  return createHash('sha256').update(buf).digest('hex');
}


function securityError(message = 'The operation is insecure.') {
  return Object.assign(new Error(message), {name: 'SecurityError'});
}

function throwingStorage() {
  const boom = () => { throw securityError(); };
  return {get length() { boom(); }, key: boom, getItem: boom, setItem: boom, removeItem: boom, clear: boom};
}

function recipeOverwritesCss(source) {
  return /tailwindcss[\s\S]*-o[\s\S]*runtime\.css/.test(source) && !/componentCss|runtime\.esbuild\.css|runtime\.tailwind\.css/.test(source);
}

function recipeMergesComponentCss(source) {
  return source.includes('runtime.tailwind.css') && /componentCss|esbuildCss/.test(source) && source.includes('runtime.css');
}

test('old unique recipe overwrites component CSS; new unique recipe merges it, using flower-menu and content-scan', () => {
  const oldFlower = readFixtureText('css-recipe/overwrite-flower-menu-build.mjs');
  const oldScan = readFixtureText('css-recipe/overwrite-content-scan-build.mjs');
  assert.ok(recipeOverwritesCss(oldFlower), 'old flower-menu recipe overwrote runtime.css with Tailwind only');
  assert.ok(recipeOverwritesCss(oldScan), 'old content-scan recipe overwrote runtime.css with Tailwind only');
  const flower = join(root, 'batches/animata-20261111-04/bundles/flower-menu.zip');
  const scan = join(root, 'batches/animata-20261111-05/bundles/content-scan.zip');
  const flowerCss = readZipText(flower, 'src/animata/fabs/flower-menu.css');
  const scanCss = readZipText(scan, 'src/animata/feature-cards/content-scan.css');
  assert.match(flowerCss, /\.flower-petal/);
  assert.match(scanCss, /\.scanned-text/);
  const currentGlobal = readZipText(flower, 'src/global.css');
  assert.doesNotMatch(currentGlobal, /\.flower-petal|\.scanned-text|\.highlight\.active/);

  const newFlowerBuild = readZipText(flower, 'build.mjs');
  const newScanBuild = readZipText(scan, 'build.mjs');
  assert.ok(recipeMergesComponentCss(newFlowerBuild), 'new flower-menu recipe must merge component CSS into the unique runtime.css');
  assert.ok(recipeMergesComponentCss(newScanBuild), 'new content-scan recipe must merge component CSS into the unique runtime.css');
  assert.ok(!recipeOverwritesCss(newFlowerBuild));
  assert.ok(!recipeOverwritesCss(newScanBuild));
  assert.match(readZipText(flower, 'src/animata/fabs/flower-menu.css'), /\.flower-petal/);
  assert.match(readZipText(scan, 'src/animata/feature-cards/content-scan.css'), /\.scanned-text/);
});

test('rebuild products of the triggering packages keep their unique rules (old recipe products would not)', () => {
  const oldF = readFixtureText('css-recipe/overwrite-flower-menu-runtime.css');
  const newF = readFixtureText('css-recipe/merge-flower-menu-runtime.css');
  const oldS = readFixtureText('css-recipe/overwrite-content-scan-runtime.css');
  const newS = readFixtureText('css-recipe/merge-content-scan-runtime.css');
  assert.doesNotMatch(oldF, /\.flower-petal/, 'old recipe product must lack flower-menu rules');
  assert.match(newF, /\.flower-petal/, 'new recipe product must contain flower-menu rules');
  assert.doesNotMatch(oldS, /\.scanned-text|\.highlight\.active/, 'old recipe product must lack content-scan rules');
  assert.match(newS, /\.scanned-text/);
  assert.match(newS, /\.highlight\.active/);
});

function cssDeclarationFixture() {
  class CSSStyleDeclaration {
    constructor() { this._backgroundImage = ''; this._background = ''; }
  }
  Object.defineProperty(CSSStyleDeclaration.prototype, 'backgroundImage', {
    configurable: true,
    enumerable: true,
    get() { return this._backgroundImage; },
    set(v) { this._backgroundImage = String(v); },
  });
  Object.defineProperty(CSSStyleDeclaration.prototype, 'background', {
    configurable: true,
    enumerable: true,
    get() { return this._background; },
    set(v) { this._background = String(v); },
  });
  CSSStyleDeclaration.prototype.setProperty = function (name, value) {
    const n = String(name).toLowerCase();
    if (n === 'background-image') this.backgroundImage = value;
    else if (n === 'background') this.background = value;
  };
  class ImageElement {
    constructor() { this.attrs = {}; this.style = new CSSStyleDeclaration(); }
    setAttribute(k, v) { this.attrs[k] = String(v); }
    getAttribute(k) { return this.attrs[k] ?? null; }
  }
  Object.defineProperty(ImageElement.prototype, 'src', {
    configurable: true,
    enumerable: true,
    get() { return this.attrs.src ?? ''; },
    set(v) { this.attrs.src = String(v); },
  });
  const remote = 'https://images.unsplash.com/photo-1675285410608-ddd6bb430b19?q=80&w=2938';
  const context = {
    HTMLImageElement: ImageElement,
    CSSStyleDeclaration,
    __atlasAssets: {
      'placeholder.jpg': 'blob:review42/placeholder',
      'second.jpg': 'blob:review42/second',
      [remote]: 'blob:review42/placeholder',
      'https://images.unsplash.com/photo-1675285410608-ddd6bb430b19': 'blob:review42/placeholder',
    },
    history: {
      pushState() { throw securityError('opaque about:srcdoc'); },
      replaceState() { throw securityError('opaque about:srcdoc'); },
    },
    document: {documentElement: {getAttribute() { return null; }}},
  };
  context.window = context;
  for (const key of ['localStorage', 'sessionStorage']) {
    Object.defineProperty(context, key, {configurable: true, get() { throw securityError('opaque origin'); }});
  }
  vm.createContext(context);
  return {ImageElement, CSSStyleDeclaration, context, remote};
}

test('production bootstrap: prior CSS, named-property, and remote mapping fail; current tip and Tabler currentValue pass', async () => {
  const prior = await import(pathToFileURL(join(fixtures, 'preview-adapters/prior-preview-adapters.mjs')).href);
  const oldBoot = prior.PREVIEW_ADAPTER_BOOTSTRAP;
  const {ImageElement, context: oldContext, remote} = cssDeclarationFixture();
  vm.runInContext(oldBoot, oldContext);
  const oldImage = new ImageElement();
  oldImage.src = 'assets/placeholder.jpg?w=200&h=200';
  assert.equal(oldImage.src, 'blob:review42/placeholder', 'existing img.src+query bridge on the old tip must stay valid');
  oldImage.style.backgroundImage = 'url("assets/placeholder.jpg")';
  assert.equal(oldImage.style.backgroundImage, 'url("assets/placeholder.jpg")', 'old production IIFE does not remap CSS backgroundImage');
  oldContext.localStorage.setItem('tabler-theme', 'dark');
  assert.notEqual(oldContext.localStorage['tabler-theme'], 'dark', 'old memory Storage lacks named-property reads');
  assert.equal(resolveAtlasAsset(remote, {'placeholder.jpg': 'blob:review42/placeholder'}), remote, 'resolver without aliases does not invent a mapping');

  const fresh = cssDeclarationFixture();
  vm.runInContext(PREVIEW_ADAPTER_BOOTSTRAP, fresh.context);
  const image = new fresh.ImageElement();
  image.src = 'assets/placeholder.jpg?w=200&h=200';
  assert.equal(image.src, 'blob:review42/placeholder');
  image.setAttribute('src', 'assets/second.jpg?size=2');
  assert.equal(image.getAttribute('src'), 'blob:review42/second');
  image.style.backgroundImage = 'url("assets/placeholder.jpg")';
  assert.equal(image.style.backgroundImage, 'url("blob:review42/placeholder")');
  image.style.setProperty('background-image', 'url("assets/second.jpg")');
  assert.equal(image.style.backgroundImage, 'url("blob:review42/second")');
  image.style.backgroundImage = `url("${fresh.remote}")`;
  assert.equal(image.style.backgroundImage, 'url("blob:review42/placeholder")');
  fresh.context.localStorage.setItem('tabler-theme', 'dark');
  assert.equal(fresh.context.localStorage.getItem('tabler-theme'), 'dark');
  assert.equal(fresh.context.localStorage['tabler-theme'], 'dark');

  const page = readFileSync(join(root, 'batches/tabler-20261111/page-email-inbox.js'), 'utf8');
  const match = page.match(/var currentValue = function \(key\) \{([\s\S]*?)\n          \};/);
  assert.ok(match, 'real Tabler currentValue extraction');
  vm.runInContext('var themeDefaults={theme:"auto"};var currentValue=function(key){' + match[1] + '};', fresh.context);
  assert.equal(vm.runInContext('currentValue("theme")', fresh.context), 'dark');
  assert.throws(
    () => fresh.context.history.pushState({}, '', 'about:srcdoc?theme=dark'),
    (err) => err && err.name === 'SecurityError',
    'production bootstrap must not swallow History SecurityError for arbitrary consumers'
  );
  image.style.background = 'url("assets/placeholder.jpg")';
  assert.equal(image.style.background, 'url("assets/placeholder.jpg")', 'style.background shorthand is uncovered and must not be silently remapped');
  image.style.setProperty('background', 'url("assets/second.jpg")');
  assert.equal(image.style.background, 'url("assets/second.jpg")', "setProperty('background') shorthand is uncovered");
});

test('compose keeps CSP, and the CSS url helper remaps placeholder and declared remotes', () => {
  const assets = {'placeholder.jpg': 'blob:atlas/placeholder', 'https://images.unsplash.com/photo-1675285410608-ddd6bb430b19': 'blob:atlas/placeholder'};
  assert.equal(resolveCssImageValue('url("assets/placeholder.jpg?w=200")', assets), 'url("blob:atlas/placeholder")');
  assert.equal(resolveAtlasAsset('https://images.unsplash.com/photo-1675285410608-ddd6bb430b19?q=80&w=2938', assets), 'blob:atlas/placeholder');
  const html = '<html><head><link rel="stylesheet" href="a.css"></head><body><script src="a.js"></script></body></html>';
  const runtime = {css: 'a.css', js: 'a.js', cssHref: 'a.css', scriptSrc: 'a.js'};
  const composed = composePreview(html, 'body{}', 'consume()', runtime, assets);
  assert.match(composed, /img-src data: blob:/);
  assert.doesNotMatch(composed, /allow-same-origin/);
  const policy = composed.match(/Content-Security-Policy" content="([^"]+)"/)[1];
  assert.equal(policy, "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; font-src data:; img-src data: blob:; connect-src 'none'; form-action 'none'");
});

test('generated Tabler adapter products match the single bootstrap source; old helpers are not a second authority', () => {
  const product = generatedAdapterFile();
  const adapter = readFileSync(join(root, 'batches/tabler-20261111/opaque-storage-adapter.js'), 'utf8');
  assert.equal(adapter, product);
  const runtime = readFileSync(join(root, 'batches/tabler-20261111/runtime.js'), 'utf8');
  assert.ok(runtime.startsWith(product), 'runtime.js prefix must be generated from the same source');
  assert.equal((runtime.match(/function createMemoryStorage/g) || []).length, 1, 'runtime must not keep a competing handwritten copy');
});

test('export and count consumers read ledger marks; Oxbow duplicate no longer claims a different password interaction', async () => {
  const acc = await loadCollectionAccounting({
    atlasDir: root,
    readFile: (name) => readFile(join(root, name), 'utf8'),
  });
  assert.equal(acc.newCatalogConnects, 554);
  assert.equal(acc.oldSourceReconnects, 22);
  assert.equal(acc.duplicateOriginalExclusions, 1);
  assert.equal(acc.novelSourceIdentityUpperBound, 531);
  assert.notEqual(acc.catalogRecordCount, 531);
  assert.equal(acc.verifiedNewIndependentUIs, 0);
  assert.equal(acc.covers, 0);
  const catalog = JSON.parse(readFileSync(join(root, 'candidate-catalog.json'), 'utf8'));
  const password = catalog.find((x) => x.id === 'oxbow:signin-password');
  const magic = catalog.find((x) => x.id === 'oxbow:signin-magic-link');
  assert.equal(password.collectionAccounting.thisRoundRole, 'duplicate-excluded');
  assert.equal(magic.collectionAccounting.countsAsIndependentOriginal, true);
  assert.doesNotMatch(password.title, /密码登录/);
  assert.doesNotMatch(password.behavior, /填写密码/);
  assert.ok(!password.gaps.some((g) => /不是同一交互|密码登录区块/.test(g)));
  assert.match(password.behavior, /邮箱|魔法链接/);
});

test('reconnect packageEntry values are real zip members, not descriptive sentences', () => {
  const ids = [
    'animata:email-feature-card',
    'animata:integration-pills',
    'animata:notes',
    'animata:shopping-list',
    'animata:reminder-widget',
    'animata:sibling-focus-nav',
    'animata:fibonacci-lines',
    'animata:interactive-grid',
    'animata:gauge-chart',
    'animata:commit-graph',
  ];
  for (const id of ids) {
    const batch = {
      'animata:email-feature-card': 'animata-01',
      'animata:integration-pills': 'animata-01',
      'animata:notes': 'animata-02',
      'animata:shopping-list': 'animata-02',
      'animata:reminder-widget': 'animata-03',
      'animata:sibling-focus-nav': 'animata-03',
      'animata:fibonacci-lines': 'animata-03',
      'animata:interactive-grid': 'animata-04',
      'animata:gauge-chart': 'animata-04',
      'animata:commit-graph': 'animata-04',
    }[id];
    const man = JSON.parse(readFileSync(join(root, 'batches', batch, 'manifest.json'), 'utf8'));
    const item = man.items.find((x) => x.id === id);
    assert.ok(item, id);
    assert.equal(typeof item.packageEntry, 'string');
    assert.doesNotMatch(item.packageEntry, /shared source\.zip|component file/);
    const members = listZipFile(join(root, item.bundle || item.archive));
    assert.ok(members.includes(item.packageEntry), `${id} packageEntry ${item.packageEntry} must exist in ${item.bundle || item.archive}`);
  }
});

function extractWriteThemeUrl(source) {
  const start = source.indexOf('function writeThemeUrl');
  assert.ok(start >= 0, 'preview theme call site must define writeThemeUrl');
  const end = source.indexOf('const themeDefaults', start);
  assert.ok(end > start, 'writeThemeUrl must sit at the Tabler theme URL write IIFE');
  return source.slice(start, end);
}

function themeUrlContext({origin, href, pushImpl}) {
  const context = {
    origin,
    location: {href},
    window: null,
    history: {pushState: pushImpl, replaceState: pushImpl},
  };
  context.window = context;
  vm.createContext(context);
  return context;
}

test('theme URL writes degrade only at Tabler call sites; unexpected SecurityError still throws; official originals stay raw', () => {
  const preview = readFileSync(join(root, 'batches/tabler-20261111/tabs.html'), 'utf8');
  const inbox = readFileSync(join(root, 'batches/tabler-20261111/page-email-inbox.js'), 'utf8');
  const original = readFileSync(join(root, 'batches/tabler-20261111/originals/tabs.html'), 'utf8');
  const helper = extractWriteThemeUrl(preview);
  assert.equal(extractWriteThemeUrl(inbox), helper, 'page companion and HTML preview share the same call-site helper');
  assert.match(helper, /window\.history\.pushState\(\{\}, "", url\)/);
  assert.doesNotMatch(helper, /try \{\s*writeThemeUrl\(url\);/);
  assert.doesNotMatch(PREVIEW_ADAPTER_BOOTSTRAP, /installHistoryFallback/);
  assert.doesNotMatch(PREVIEW_ADAPTER_BOOTSTRAP, /__atlasOpaqueHistory/);
  assert.doesNotMatch(original, /function writeThemeUrl/);
  assert.match(original, /window\.history\.pushState\(\{\}, "", url\);/);
  const zipOrig = readZipText(join(root, 'batches/tabler-20261111/bundles/tabs.zip'), 'original.html');
  const zipPrev = readZipText(join(root, 'batches/tabler-20261111/bundles/tabs.zip'), 'preview.html');
  assert.doesNotMatch(zipOrig, /function writeThemeUrl/);
  assert.match(zipPrev, /function writeThemeUrl/);
  const inboxZipPage = readZipText(join(root, 'batches/tabler-20261111/bundles/email-inbox.zip'), 'page-email-inbox.js');
  assert.match(inboxZipPage, /function writeThemeUrl/);

  const opaquePushes = [];
  const opaque = themeUrlContext({
    origin: 'null',
    href: 'about:srcdoc',
    pushImpl() { throw securityError('opaque about:srcdoc'); },
  });
  opaque.history.pushState = function (state, title, url) {
    opaquePushes.push(url);
    throw securityError('opaque about:srcdoc');
  };
  vm.runInContext(helper + 'writeThemeUrl("?theme=dark");', opaque);
  assert.equal(opaquePushes.length, 1, 'opaque path still attempts the official URL write');
  assert.equal(opaque.location.href, 'about:srcdoc', 'opaque / about:srcdoc cannot persist the theme URL');

  const sameOriginCalls = [];
  const sameOrigin = themeUrlContext({
    origin: 'https://example.com',
    href: 'https://example.com/tabs.html',
    pushImpl(state, title, url) { sameOriginCalls.push(url); },
  });
  vm.runInContext(helper + 'writeThemeUrl("?theme=dark");', sameOrigin);
  assert.deepEqual(sameOriginCalls, ['?theme=dark'], 'same-origin theme URL writes still reach history.pushState');

  const unexpected = themeUrlContext({
    origin: 'https://example.com',
    href: 'https://example.com/tabs.html',
    pushImpl() { throw securityError('unexpected same-origin failure'); },
  });
  assert.throws(
    () => vm.runInContext(helper + 'writeThemeUrl("?theme=dark");', unexpected),
    (err) => err && err.name === 'SecurityError' && /unexpected same-origin failure/.test(err.message),
    'unexpected SecurityError on a same-origin path must still throw'
  );
});

test('media coverage only declares proven sinks; style.background stays uncovered without a broader monkey-patch', () => {
  assert.deepEqual(MEDIA_SINK_COVERAGE.supported, [
    'HTMLImageElement.prototype.src',
    "HTMLImageElement.prototype.setAttribute('src')",
    'CSSStyleDeclaration.backgroundImage',
    "CSSStyleDeclaration.setProperty('background-image')",
  ]);
  assert.ok(MEDIA_SINK_COVERAGE.uncovered.some((x) => /style\.background/.test(x)));
  assert.doesNotMatch(PREVIEW_ADAPTER_BOOTSTRAP, /n === "background-image" \|\| n === "background"/);
  assert.match(PREVIEW_ADAPTER_BOOTSTRAP, /n === "background-image"/);
  const coverage = JSON.parse(readFileSync(join(root, 'MEDIA-SINK-COVERAGE.json'), 'utf8'));
  assert.deepEqual(coverage.supported, MEDIA_SINK_COVERAGE.supported);
  assert.equal(coverage.cspUnchanged.includes('img-src data: blob:'), true);

  const carousel = readZipText(join(root, 'batches/animata-20261111-04/bundles/image-carousel.zip'), 'original.tsx');
  assert.match(carousel, /backgroundImage:\s*`url\(\$\{item\.image\}\)`/);
  assert.doesNotMatch(carousel, /style\.background\s*=/);
  const sleep = readZipText(join(root, 'batches/animata-20261111-01/bundles/sleep-tracker.zip'), 'original.tsx');
  assert.match(sleep, /<img[\s\S]*src=\{image\}/);
  assert.doesNotMatch(sleep, /style\.background\s*=/);
});

test('the latest Mantine preview batch adds 52 new official originals with source and package members', () => {
  const catalog = JSON.parse(readFileSync(join(root, 'candidate-catalog.json'), 'utf8'));
  const items = catalog.filter((x) => x.batch === 'collection-20261111-j');
  assert.equal(items.length, 52);
  const existing = new Set(['mantine-ui:authentication-flow', 'mantine-ui:contact-information-form', 'mantine-ui:responsive-mega-navigation']);
  for (const item of items) {
    assert.equal(item.source, 'Mantine UI');
    assert.equal(item.collectionAccounting.thisRoundRole, 'new-original');
    assert.ok(!existing.has(item.id), item.id + ' must not reuse an already collected identity');
    assert.doesNotMatch(item.id, /navbar-minimal-colored|navbar-simple-colored|progress-card-colored|navbar-nested|navbar-search/);
    const members = listZipFile(join(root, item.archive));
    assert.ok(members.includes('src/entry.tsx'), item.id);
    assert.ok(members.includes(item.packageOfficialComponent || `src/official/${item.id.split(':')[1]}.tsx`) || members.some((m) => m.startsWith('src/official/') && m.endsWith('.tsx')));
    assert.ok(members.includes('originals/' + item.sourcePath.split('/').slice(2).join('/')) || members.some((m) => m.startsWith('originals/') && m.endsWith('.tsx')));
    assert.ok(members.includes('LICENSE.txt'));
    assert.ok(members.includes('build.mjs'));
    assert.ok(members.includes('runtime.js'));
    assert.ok(members.includes('ADAPTATION.md'));
    assert.ok(existsSync(join(root, item.preview)));
    assert.ok(existsSync(join(root, item.code)));
  }
  const cookies = readZipText(join(root, 'batches/mantine-20261111-j/bundles/cookies-banner.zip'), 'originals/CookiesBanner.tsx');
  assert.match(cookies, /Allow cookies/);
  const images = listZipFile(join(root, 'batches/mantine-20261111-j/bundles/features-images.zip'));
  assert.ok(images.includes('originals/images/accountants.svg'));
  const featuresRuntime = readZipText(join(root, 'batches/mantine-20261111-j/bundles/features-images.zip'), 'runtime.js');
  assert.match(featuresRuntime, /data:image\/svg\+xml;base64/);
  const verification = JSON.parse(readFileSync(join(root, 'batches/collection-20261111-j/VERIFICATION.json'), 'utf8'));
  assert.equal(verification.newOriginalCatalogIdsThisBatch, 52);
  assert.equal(verification.oldSourceReconnects, 0);
  assert.equal(verification.covers ?? verification.realWebPCovers, 0);
});

test('hero-title official source imports @mantinex/dev-icons; a package.json that omits it is incomplete; the current zip metafile declares the locked package', () => {
  const zip = join(root, 'batches/mantine-20261111-j/bundles/hero-title.zip');
  const official = readZipText(zip, 'originals/HeroTitle.tsx');
  assert.match(official, /import \{ GithubIcon \} from '@mantinex\/dev-icons'/);
  const oldPkg = JSON.parse(readFixtureText('packaging/incomplete-hero-title-package.json'));
  assert.equal(oldPkg.dependencies['@mantinex/dev-icons'], undefined);
  const pkg = JSON.parse(readZipText(zip, 'package.json'));
  const meta = JSON.parse(readZipText(zip, 'metafile.json'));
  const direct = directPackagesFromMetafile(meta);
  assert.deepEqual(Object.keys(pkg.dependencies).sort(), direct);
  assert.equal(pkg.dependencies['@mantinex/dev-icons'], '2.0.0');
  assert.equal(pkg.dependencies['@mantine/dropzone'], undefined);
  assert.ok(direct.includes('@mantinex/dev-icons'));
});

test('dropzone compile graph keeps react-dropzone, attr-accept, and file-selector notices byte-for-byte at the real versions', () => {
  const zip = join(root, 'batches/mantine-20261111-j/bundles/dropzone-button.zip');
  const official = readZipText(zip, 'originals/DropzoneButton.tsx');
  assert.match(official, /from '@mantine\/dropzone'/);
  const lock = JSON.parse(readZipText(zip, 'dependency-lock.json'));
  const graph = Object.fromEntries(lock.compileGraph.map((g) => [`${g.name}@${g.version}`, g]));
  const third = readZipText(zip, 'THIRD-PARTY-LICENSES.md');
  const batchThird = readFileSync(join(root, 'batches/mantine-20261111-j/THIRD-PARTY-LICENSES.md'), 'utf8');
  const expected = {
    'react-dropzone@20.1.2': {
      sha: '7b93b62069ec28d00cc7cf3696b5d243ad9887517f8e709dce4811747f0e2dc2',
      copyright: 'Copyright (c) 2018 Param Aggarwal',
    },
    'attr-accept@4.0.0': {
      sha: 'd75a1dcd7216692931683668052a2801767bdd0ca19711633098ce87ebade863',
      copyright: 'Copyright (c) 2015 Andrey Okonetchnikov',
    },
    'file-selector@5.0.1': {
      sha: '01949dbb7502b2f1a424c53a043892db5e842bf6bb9201efab5d96ffeac15f1e',
      copyright: 'Copyright (c) 2020 Roland Groza',
    },
  };
  for (const [id, info] of Object.entries(expected)) {
    assert.ok(graph[id], id + ' missing from compile graph derived from this zip metafile');
    const [name, version] = id.startsWith('@')
      ? [id.replace(/@[^@]+$/, (m) => '') || id.slice(0, id.lastIndexOf('@')), id.slice(id.lastIndexOf('@') + 1)]
      : id.split('@');
    const member = `licenses/${name.replaceAll('/', '__')}@${version}.txt`;
    const bytes = readZipBytes(zip, member);
    assert.equal(sha256(bytes), info.sha, member);
    assert.ok(third.includes(info.copyright), info.copyright);
    assert.ok(third.includes(bytes.toString('utf8').trim()));
    assert.ok(batchThird.includes(info.copyright), 'batch notice missing ' + info.copyright);
    assert.equal(graph[id].role, 'transitive');
  }
  assert.equal(JSON.parse(readZipText(zip, 'package.json')).dependencies['@mantine/dropzone'], '9.7.3');
});

test('every zip in the Mantine preview batch declares the direct packages from its own metafile and keeps that graph\'s license files', () => {
  const manifest = JSON.parse(readFileSync(join(root, 'batches/mantine-20261111-j/manifest.json'), 'utf8'));
  assert.equal(manifest.itemCount, manifest.items.length);
  assert.equal(manifest.items.length, 52);
  assert.equal(manifest.packaging.sharedFixedLicenseList, false);
  assert.equal(manifest.packaging.perItemPackageJson, true);
  const seenDirect = new Set();
  for (const item of manifest.items) {
    const zip = join(root, item.bundle);
    const members = listZipFile(zip);
    assert.ok(members.includes('metafile.json'), item.id);
    assert.ok(members.includes('dependency-lock.json'), item.id);
    const pkg = JSON.parse(readZipText(zip, 'package.json'));
    const meta = JSON.parse(readZipText(zip, 'metafile.json'));
    const lock = JSON.parse(readZipText(zip, 'dependency-lock.json'));
    const third = readZipText(zip, 'THIRD-PARTY-LICENSES.md');
    const direct = directPackagesFromMetafile(meta);
    assert.deepEqual(Object.keys(pkg.dependencies).sort(), direct, item.id);
    assert.deepEqual(Object.keys(lock.declaredDirect).sort(), direct, item.id);
    for (const name of direct) seenDirect.add(name);
    for (const g of lock.compileGraph) {
      if (!g.tarballHasLicenseFile) continue;
      const member = `licenses/${g.name.replaceAll('/', '__')}@${g.version}.txt`;
      assert.ok(members.includes(member), item.id + ' missing ' + member);
      for (const copy of g.copyrights || []) {
        assert.ok(third.includes(copy), item.id + ' missing rights holder ' + copy);
      }
    }
  }
  // The 52 products are not still sharing one fixed dependency list:
  // at least one item declares @mantinex/dev-icons and at least one does not.
  const withIcons = manifest.items.filter((item) => {
    const pkg = JSON.parse(readZipText(join(root, item.bundle), 'package.json'));
    return pkg.dependencies['@mantinex/dev-icons'] === '2.0.0';
  });
  const withDropzone = manifest.items.filter((item) => {
    const pkg = JSON.parse(readZipText(join(root, item.bundle), 'package.json'));
    return pkg.dependencies['@mantine/dropzone'] === '9.7.3';
  });
  assert.deepEqual(withIcons.map((x) => x.id), ['mantine-ui:hero-title']);
  assert.deepEqual(withDropzone.map((x) => x.id), ['mantine-ui:dropzone-button']);
  assert.ok(seenDirect.has('@mantinex/dev-icons'));
  assert.ok(seenDirect.has('@mantine/dropzone'));
});

test('official notices cover tarball-missing and lowercase license files; scroll-bar 2.3.8 uses an official licensed-commit LICENSE for the same implementation; only four runtimes emit it; originals and runtimes stay byte-identical to the recorded protected member digests', () => {
  const digests = JSON.parse(readFixtureText('packaging/protected-member-digests.json')).members;
  const hero = join(root, 'batches/mantine-20261111-j/bundles/hero-title.zip');
  assert.equal(sha256(readZipBytes(hero, 'runtime.js')), digests['hero-title.zip']['runtime.js']);
  assert.equal(sha256(readZipBytes(hero, 'originals/HeroTitle.tsx')), digests['hero-title.zip']['originals/HeroTitle.tsx']);
  const src = JSON.parse(readZipText(hero, 'SOURCE.json'));
  const prov = JSON.parse(readZipText(hero, 'LICENSE-PROVENANCE.json'));
  const manifest = JSON.parse(readFileSync(join(root, 'batches/mantine-20261111-j/manifest.json'), 'utf8'));
  assert.equal(src.compileGraphLicenseComplete, true);
  assert.equal(src.packaging.licenseCompleteAndUsable, true);
  assert.deepEqual(src.unknownPackages, []);
  assert.equal(manifest.packaging.licenseCompleteAndUsable, true);
  assert.deepEqual(manifest.packaging.unknownPackages, []);
  const deps = Object.fromEntries(src.runtimeDependencies.map((d) => [`${d.name}@${d.version}`, d]));
  const dev = deps['@mantinex/dev-icons@2.0.0'];
  assert.equal(dev.noticeStatus, 'resolved-from-official-source');
  assert.equal(dev.licenseSHA256, '61c765e625bc25d55143f14de7554685c52f21d9e671d3d204304691a163d06a');
  assert.equal(dev.licenseOrigin.npmGitHead, '229680f7dd0949fbc5e3da03733a8a17f757c46c');
  assert.equal(
    sha256(readZipBytes(hero, 'licenses/@mantinex__dev-icons@2.0.0.txt')),
    '61c765e625bc25d55143f14de7554685c52f21d9e671d3d204304691a163d06a',
  );
  const clsx = deps['clsx@2.1.1'];
  assert.equal(clsx.noticeStatus, 'resolved-from-tarball-and-official-source');
  assert.equal(clsx.licenseSHA256, '9a9edad7baae52622bddf3c15b2ef8a33d2c89f2d25408ad13e8a7481c6b0c97');
  assert.equal(clsx.licenseOrigin.npmGitHead, '925494cf31bcd97d3337aacd34e659e80cae7fe2');
  const bar = deps['react-remove-scroll-bar@2.3.8'];
  assert.equal(bar.noticeStatus, 'resolved-from-official-source');
  assert.equal(bar.license, 'MIT');
  assert.equal(bar.licenseSHA256, 'a79aae0c0f21990d9d963bb3c5a79cdcea9a46f8523ba55c58d7fe776b6ebc84');
  assert.equal(bar.tarballHasLicenseFile, false);
  assert.equal(bar.emittedInBundle, false);
  assert.equal(bar.bytesInRuntimeJs, 0);
  assert.equal(bar.licenseOrigin.npmGitHead, 'b3b1287aad81def2e2ae707274b74531b61ddbaf');
  assert.equal(bar.licenseOrigin.officialLicensedCommit, '8ca9ba5ea52de03308fe8ced94f7b159a44d28ff');
  assert.match(String(bar.licenseOrigin.notAVersionMapping), /not a claim that 2\.3\.8 equals 2\.3\.7/);
  assert.equal(
    sha256(readZipBytes(hero, 'licenses/react-remove-scroll-bar@2.3.8.txt')),
    'a79aae0c0f21990d9d963bb3c5a79cdcea9a46f8523ba55c58d7fe776b6ebc84',
  );
  const third = readZipText(hero, 'THIRD-PARTY-LICENSES.md');
  assert.doesNotMatch(third, /Unknown official notices/);
  assert.match(third, /Copyright \(c\) 2025 Anton Korzunov/);
  const heroEmitted = third.slice(third.indexOf('Packages emitted in this runtime'), third.indexOf('Compile-graph packages read but not emitted'));
  const heroReadOnly = third.slice(third.indexOf('Compile-graph packages read but not emitted'));
  assert.doesNotMatch(heroEmitted, /react-remove-scroll-bar/);
  assert.match(heroReadOnly, /react-remove-scroll-bar@2\.3\.8/);
  assert.equal(prov.packages['react-remove-scroll-bar@2.3.8'].status, 'resolved');
  assert.equal(prov.packages['react-remove-scroll-bar@2.3.8'].officialLicensedCommit, '8ca9ba5ea52de03308fe8ced94f7b159a44d28ff');

  const logoZip = join(root, 'batches/mantine-20261111-j/bundles/header-simple.zip');
  const logoSrc = JSON.parse(readZipText(logoZip, 'SOURCE.json'));
  const logo = logoSrc.runtimeDependencies.find((d) => d.name === '@mantinex/mantine-logo');
  assert.equal(logo.noticeStatus, 'resolved-from-official-source');
  assert.equal(logo.licenseOrigin.npmGitHead, '345808e2a258142b12c0b9b145e7c982f4c34d1e');
  assert.equal(logo.licenseSHA256, '61c765e625bc25d55143f14de7554685c52f21d9e671d3d204304691a163d06a');
  const logoBar = logoSrc.runtimeDependencies.find((d) => d.name === 'react-remove-scroll-bar');
  assert.equal(logoBar.emittedInBundle, true);
  assert.equal(logoBar.bytesInRuntimeJs, 2229);
  assert.equal(logoBar.licenseSHA256, 'a79aae0c0f21990d9d963bb3c5a79cdcea9a46f8523ba55c58d7fe776b6ebc84');
  const logoThird = readZipText(logoZip, 'THIRD-PARTY-LICENSES.md');
  const logoEmitted = logoThird.slice(logoThird.indexOf('Packages emitted in this runtime'), logoThird.indexOf('Compile-graph packages read but not emitted'));
  assert.match(logoEmitted, /react-remove-scroll-bar@2\.3\.8/);

  const formZip = join(root, 'batches/mantine-20261111-j/bundles/get-in-touch-simple.zip');
  const formSrc = JSON.parse(readZipText(formZip, 'SOURCE.json'));
  const klona = formSrc.runtimeDependencies.find((d) => d.name === 'klona');
  assert.equal(klona.noticeStatus, 'resolved-from-tarball-and-official-source');
  assert.equal(klona.licenseSHA256, '9a9edad7baae52622bddf3c15b2ef8a33d2c89f2d25408ad13e8a7481c6b0c97');
  assert.equal(klona.licenseOrigin.npmGitHead, '6ad153073b7529769010ddbde1938372e1702f5b');

  // bytesInOutput, not compile-graph membership, decides which items distribute this code.
  const emitExpected = ['double-header', 'header-menu', 'header-search', 'header-simple'];
  const emitActual = [];
  for (const item of manifest.items) {
    const srcItem = JSON.parse(readZipText(join(root, item.bundle), 'SOURCE.json'));
    assert.equal(srcItem.licenseCompleteAndUsable ?? srcItem.packaging.licenseCompleteAndUsable, true, item.id);
    assert.deepEqual(srcItem.unknownPackages, [], item.id);
    const itemBar = srcItem.runtimeDependencies.find((d) => d.name === 'react-remove-scroll-bar');
    assert.equal(itemBar.noticeStatus, 'resolved-from-official-source', item.id);
    assert.equal(itemBar.tarballHasLicenseFile, false, item.id);
    if (itemBar.emittedInBundle) emitActual.push(item.id.replace('mantine-ui:', ''));
  }
  assert.deepEqual(emitActual, emitExpected);
});


function emissionFromMetafile(meta) {
  const stats = {};
  for (const [outName, out] of Object.entries(meta.outputs || {})) {
    const kind = String(outName).endsWith('.js') ? 'js' : String(outName).endsWith('.css') ? 'css' : 'other';
    for (const [path, info] of Object.entries(out.inputs || {})) {
      const name = packageNameFromNmPath(path);
      if (!name) continue;
      const rec = stats[name] || {bytesInRuntimeJs: 0, bytesInRuntimeCss: 0};
      const nbytes = Number((info && info.bytesInOutput) || 0);
      if (kind === 'js') rec.bytesInRuntimeJs += nbytes;
      else if (kind === 'css') rec.bytesInRuntimeCss += nbytes;
      stats[name] = rec;
    }
  }
  return stats;
}

test('union of 52 metafiles is 33 emitted packages and 3 read-only packages; four pages emit scroll-bar at 2229 bytes; unknown packages stay empty; package bodies stay byte-identical to the recorded protected member digests', () => {
  const manifest = JSON.parse(readFileSync(join(root, 'batches/mantine-20261111-j/manifest.json'), 'utf8'));
  const digests = JSON.parse(readFixtureText('packaging/protected-member-digests.json')).members;
  const emittedUnion = new Map();
  const readUnion = new Set();
  const barEmitted = [];
  const protectedMembers = ['runtime.js', 'runtime.css', 'package.json', 'metafile.json', 'build.mjs'];
  for (const item of manifest.items) {
    const slug = item.id.replace('mantine-ui:', '');
    const zipPath = join(root, 'batches/mantine-20261111-j/bundles', `${slug}.zip`);
    const expected = digests[`${slug}.zip`];
    assert.ok(expected, 'missing recorded digest for ' + slug);
    const meta = JSON.parse(readZipText(zipPath, 'metafile.json'));
    const src = JSON.parse(readZipText(zipPath, 'SOURCE.json'));
    const emission = emissionFromMetafile(meta);
    for (const name of Object.keys(meta.inputs || {})) {
      const pkg = packageNameFromNmPath(name);
      if (pkg) readUnion.add(pkg);
    }
    for (const [name, rec] of Object.entries(emission)) {
      if (rec.bytesInRuntimeJs + rec.bytesInRuntimeCss > 0) {
        const cur = emittedUnion.get(name) || [];
        cur.push({slug, ...rec});
        emittedUnion.set(name, cur);
      }
    }
    const bar = emission['react-remove-scroll-bar'] || {bytesInRuntimeJs: 0, bytesInRuntimeCss: 0};
    if (bar.bytesInRuntimeJs + bar.bytesInRuntimeCss > 0) {
      barEmitted.push({slug, bytesInRuntimeJs: bar.bytesInRuntimeJs, bytesInRuntimeCss: bar.bytesInRuntimeCss});
    }
    const srcBar = src.runtimeDependencies.find((d) => d.name === 'react-remove-scroll-bar');
    assert.equal(srcBar.noticeStatus, 'resolved-from-official-source', item.id);
    assert.equal(srcBar.licenseOrigin.officialLicensedCommit, '8ca9ba5ea52de03308fe8ced94f7b159a44d28ff', item.id);
    assert.deepEqual(src.unknownPackages, [], item.id);
    for (const member of protectedMembers) {
      assert.equal(sha256(readZipBytes(zipPath, member)), expected[member], `${item.id} ${member} changed`);
    }
    const originalNames = listZipFile(zipPath).filter((n) => n.startsWith('originals/'));
    for (const member of originalNames) {
      assert.equal(sha256(readZipBytes(zipPath, member)), expected[member], `${item.id} ${member} changed`);
    }
  }
  const emittedNames = [...emittedUnion.keys()].sort();
  const readOnly = [...readUnion].filter((name) => !emittedUnion.has(name) && name !== 'esbuild').sort();
  assert.equal(emittedNames.length, 33);
  assert.deepEqual(readOnly, ['detect-node-es', 'react-number-format', 'tabbable']);
  assert.deepEqual(barEmitted.map((x) => x.slug), ['double-header', 'header-menu', 'header-search', 'header-simple']);
  for (const row of barEmitted) {
    assert.equal(row.bytesInRuntimeJs, 2229, row.slug);
    assert.equal(row.bytesInRuntimeCss, 0, row.slug);
  }

  const third = readFileSync(join(root, 'batches/mantine-20261111-j/THIRD-PARTY-LICENSES.md'), 'utf8');
  assert.match(third, /batch union of 52 items/);
  assert.match(third, /union: 33/);
  assert.match(third, /union: 3/);
  assert.doesNotMatch(third, /none besides the preview entry itself/);
  const emittedSec = third.slice(third.indexOf('Packages emitted in at least one runtime'), third.indexOf('read but never emitted'));
  const readSec = third.slice(third.indexOf('read but never emitted'));
  assert.match(emittedSec, /react-remove-scroll-bar@2\.3\.8/);
  assert.match(emittedSec, /double-header \(2229 JS, 0 CSS\)/);
  assert.match(emittedSec, /header-menu \(2229 JS, 0 CSS\)/);
  assert.match(emittedSec, /header-search \(2229 JS, 0 CSS\)/);
  assert.match(emittedSec, /header-simple \(2229 JS, 0 CSS\)/);
  assert.doesNotMatch(readSec, /react-remove-scroll-bar@2\.3\.8/);
  for (const name of emittedNames) {
    assert.match(emittedSec, new RegExp('`' + name.replace('/', '\\/') + '@'));
  }
  for (const name of readOnly) {
    assert.match(readSec, new RegExp('`' + name + '@'));
    assert.doesNotMatch(emittedSec, new RegExp('`' + name.replace('/', '\\/') + '@'));
  }
  assert.match(third, /Build tool \(esbuild, not part of the browser runtime\)/);

  for (const rel of [
    'batches/mantine-20261111-j/VERIFICATION.json',
    'batches/collection-20261111-j/VERIFICATION.json',
  ]) {
    const ver = JSON.parse(readFileSync(join(root, rel), 'utf8'));
    assert.equal(ver.licenseCompleteAndUsable, true, rel);
    assert.deepEqual(ver.unknownCompilePackages, [], rel);
    assert.equal(ver.enteredVerifiedInventory, false, rel);
    assert.equal(ver.realWebPCovers, 0, rel);
    assert.equal(ver.browserVisualQA, 'not_run', rel);
    assert.deepEqual(ver.emittedPackageUnion, emittedNames, rel);
    assert.deepEqual(ver.readButNeverEmittedPackageUnion, readOnly, rel);
    assert.match(ver.licenseCompleteAndUsableNote, /8ca9ba5ea52de03308fe8ced94f7b159a44d28ff/);
    assert.match(ver.licenseCompleteAndUsableNote, /not a full legal pass or a 500-goal completion/);
    assert.ok(ver.notClaimed.includes('goal complete because source-identity screening is >= 500'));
  }

  const indexReadme = readFileSync(join(root, 'batches/collection-20261111-j/README.md'), 'utf8');
  const batchReadme = readFileSync(join(root, 'batches/mantine-20261111-j/README.md'), 'utf8');
  assert.equal(indexReadme, batchReadme);
  assert.match(indexReadme, /全批共 33 个包/);
  assert.match(indexReadme, /各 2229 字节/);
  assert.doesNotMatch(indexReadme, /都不能称为「许可齐全可用」/);
  assert.match(indexReadme, /不是全量法律通过或 500 合格/);
});
