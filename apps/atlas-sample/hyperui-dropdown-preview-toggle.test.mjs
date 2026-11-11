import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createContext, runInContext} from 'node:vm';
import {createRequire} from 'node:module';

const here = dirname(fileURLToPath(import.meta.url));
const batch = join(here, 'batches/hyperui-20261111');
const originalPath = join(batch, 'originals/application-dropdown.html');
const previewPath = join(batch, 'application-dropdown.html');
const adapterPath = join(batch, 'dropdown-menu-preview.js');
const runtimePath = join(batch, 'runtime.js');
const zipPath = join(batch, 'bundles/application-dropdown.zip');
const officialOriginalSha256 = '8b603bf4e33335e0042ee62a2f5842fdca1b894c64a2a6cc01f751f013543060';

function sha256(buf) {
  return createHash('sha256').update(buf).digest('hex');
}

function el(tag, attrs = {}) {
  const node = {
    tagName: String(tag).toUpperCase(),
    attrs: Object.fromEntries(Object.entries(attrs).map(([k, v]) => [k, String(v)])),
    children: [],
    parentNode: null,
    ownerDocument: null,
    listeners: {},
    hidden: false,
    href: attrs.href,
    get id() {
      return this.attrs.id || '';
    },
    set id(v) {
      this.attrs.id = String(v);
    },
    setAttribute(k, v) {
      this.attrs[k] = String(v);
      if (k === 'hidden') this.hidden = true;
    },
    getAttribute(k) {
      return Object.hasOwn(this.attrs, k) ? this.attrs[k] : null;
    },
    removeAttribute(k) {
      delete this.attrs[k];
      if (k === 'hidden') this.hidden = false;
    },
    hasAttribute(k) {
      return Object.hasOwn(this.attrs, k);
    },
    appendChild(child) {
      child.parentNode = this;
      child.ownerDocument = this.ownerDocument || this;
      this.children.push(child);
      return child;
    },
    contains(other) {
      if (other === this) return true;
      return this.children.some((c) => c.contains(other));
    },
    addEventListener(type, fn) {
      (this.listeners[type] ||= []).push(fn);
    },
    closest(sel) {
      let n = this;
      while (n) {
        if (matches(n, sel)) return n;
        n = n.parentNode;
      }
      return null;
    },
    querySelector(sel) {
      return this.querySelectorAll(sel)[0] || null;
    },
    querySelectorAll(sel) {
      const found = [];
      const walk = (n) => {
        for (const c of n.children) {
          if (matches(c, sel)) found.push(c);
          walk(c);
        }
      };
      walk(this);
      return found;
    },
  };
  Object.defineProperty(node, 'hidden', {
    get() {
      return this._hidden === true;
    },
    set(v) {
      this._hidden = Boolean(v);
      if (this._hidden) this.attrs.hidden = '';
      else delete this.attrs.hidden;
    },
    configurable: true,
  });
  node.hidden = false;
  return node;
}

function matches(node, sel) {
  if (!node || !node.tagName) return false;
  const parts = sel.split(',').map((s) => s.trim());
  return parts.some((part) => matchOne(node, part));
}

function matchOne(node, sel) {
  const attrEq = sel.match(/^([a-z]+)?\[([a-z-]+)="([^"]*)"\]$/i);
  if (attrEq) {
    const [, tag, name, value] = attrEq;
    if (tag && node.tagName !== tag.toUpperCase()) return false;
    return node.getAttribute(name) === value;
  }
  const attrOnly = sel.match(/^\[([a-z-]+)="([^"]*)"\]$/i);
  if (attrOnly) return node.getAttribute(attrOnly[1]) === attrOnly[2];
  if (sel === 'a' || sel === 'button') return node.tagName === sel.toUpperCase();
  return false;
}

function pathOf(target) {
  const path = [];
  let n = target;
  while (n) {
    path.push(n);
    n = n.parentNode;
  }
  return path;
}

function dispatch(target, type, init = {}) {
  const ev = {
    type,
    target,
    currentTarget: null,
    key: init.key,
    defaultPrevented: false,
    preventDefault() {
      this.defaultPrevented = true;
    },
    stopPropagation() {
      this._stopped = true;
    },
  };
  for (const node of pathOf(target)) {
    ev.currentTarget = node;
    for (const fn of node.listeners[type] || []) fn.call(node, ev);
    if (ev._stopped) break;
  }
  return ev;
}

function makeDocument() {
  const document = el('document');
  document.ownerDocument = document;
  const body = el('body', {'data-demo': 'application-dropdown'});
  body.ownerDocument = document;
  const wrap = el('div');
  const product = el('button', {type: 'button'});
  const menuBtn = el('button', {type: 'button', 'aria-label': 'Menu'});
  const menu = el('div', {role: 'menu'});
  const storefront = el('a', {href: '#', role: 'menuitem'});
  const deleteBtn = el('button', {type: 'button'});
  const outside = el('div');
  menu.appendChild(storefront);
  menu.appendChild(deleteBtn);
  wrap.appendChild(product);
  wrap.appendChild(menuBtn);
  wrap.appendChild(menu);
  body.appendChild(wrap);
  body.appendChild(outside);
  document.appendChild(body);
  document.body = body;
  document.readyState = 'complete';
  return {document, body, product, menuBtn, menu, storefront, deleteBtn, outside};
}

function loadAdapter(document) {
  const code = readFileSync(adapterPath, 'utf8');
  const sandbox = {document, globalThis: null};
  sandbox.globalThis = sandbox;
  const ctx = createContext(sandbox);
  runInContext(code, ctx, {filename: 'dropdown-menu-preview.js'});
  return ctx;
}

test('official HyperUI dropdown original stays a static open menu with a stable hash', () => {
  const buf = readFileSync(originalPath);
  assert.equal(sha256(buf), officialOriginalSha256);
  const html = buf.toString('utf8');
  assert.match(html, /role="menu"/);
  assert.doesNotMatch(html, /aria-expanded/);
  assert.doesNotMatch(html, /dropdown-menu-preview/);
  const menuOpen = html.indexOf('role="menu"');
  const menuTag = html.slice(menuOpen, html.indexOf('>', menuOpen) + 1);
  assert.doesNotMatch(menuTag, /(?:^|\s)hidden(?:\s|=|>)/);
  assert.match(menuTag, /overflow-hidden/);
});

test('preview adapter starts the menu closed and toggles it from the Menu button', () => {
  const fixture = makeDocument();
  const ctx = loadAdapter(fixture.document);
  assert.equal(typeof ctx.bindDropdownMenuPreview, 'function');
  ctx.bindDropdownMenuPreview(fixture.document);
  assert.equal(fixture.menu.hidden, true);
  assert.equal(fixture.menuBtn.getAttribute('aria-expanded'), 'false');
  assert.equal(fixture.menuBtn.getAttribute('aria-haspopup'), 'menu');
  assert.ok(fixture.menuBtn.getAttribute('aria-controls'));
  dispatch(fixture.menuBtn, 'click');
  assert.equal(fixture.menu.hidden, false);
  assert.equal(fixture.menuBtn.getAttribute('aria-expanded'), 'true');
  dispatch(fixture.menuBtn, 'click');
  assert.equal(fixture.menu.hidden, true);
  assert.equal(fixture.menuBtn.getAttribute('aria-expanded'), 'false');
});

test('preview adapter closes on Escape, outside click, and a chosen item, without changing link hrefs', () => {
  const fixture = makeDocument();
  const ctx = loadAdapter(fixture.document);
  ctx.bindDropdownMenuPreview(fixture.document);
  dispatch(fixture.menuBtn, 'click');
  assert.equal(fixture.menu.hidden, false);
  dispatch(fixture.document, 'keydown', {key: 'Escape'});
  assert.equal(fixture.menu.hidden, true);
  dispatch(fixture.menuBtn, 'click');
  dispatch(fixture.outside, 'click');
  assert.equal(fixture.menu.hidden, true);
  dispatch(fixture.menuBtn, 'click');
  const hrefBefore = fixture.storefront.href;
  dispatch(fixture.storefront, 'click');
  assert.equal(fixture.menu.hidden, true);
  assert.equal(fixture.storefront.href, hrefBefore);
  assert.equal(fixture.storefront.href, '#');
});

test('preview HTML loads shared runtime intercept then the local dropdown adapter; runtime intercept text is unchanged', () => {
  const preview = readFileSync(previewPath, 'utf8');
  const runtime = readFileSync(runtimePath, 'utf8');
  assert.match(preview, /data-demo="application-dropdown"/);
  assert.match(preview, /<script src="runtime\.js"><\/script>/);
  assert.match(preview, /<script src="dropdown-menu-preview\.js"><\/script>/);
  assert.ok(preview.indexOf('runtime.js') < preview.indexOf('dropdown-menu-preview.js'));
  assert.doesNotMatch(preview, /allow-same-origin|unsafe-eval|Content-Security-Policy/);
  assert.match(runtime, /if \(e\.target\.closest\('a, input\[type="file"\]'\)\) \{\s*e\.preventDefault\(\)/);
  assert.match(runtime, /document\.addEventListener\('submit', \(e\) => \{\s*e\.preventDefault\(\)/);
  assert.doesNotMatch(runtime, /bindDropdownMenuPreview|application-dropdown/);
  const adapter = readFileSync(adapterPath, 'utf8');
  assert.doesNotMatch(adapter, /allow-same-origin|sandbox|Content-Security-Policy|unsafe-eval/);
});

test('traceable dropdown zip keeps the official original and ships the preview adapter beside unchanged intercept runtime', () => {
  const require = createRequire(import.meta.url);
  const {readFileSync: readZip, unzipSync} = loadZip();
  const buf = readFileSync(zipPath);
  const entries = unzipSync(buf);
  const names = Object.keys(entries).map((n) => n.replace(/^\.\//, ''));
  for (const need of ['original.html', 'preview.html', 'runtime.css', 'runtime.js', 'LICENSE.txt', 'README.txt', 'dropdown-menu-preview.js']) {
    assert.ok(names.includes(need), `missing ${need}`);
  }
  assert.equal(sha256(entries['original.html']), officialOriginalSha256);
  assert.equal(Buffer.compare(entries['original.html'], readFileSync(originalPath)), 0);
  assert.equal(Buffer.compare(entries['preview.html'], readFileSync(previewPath)), 0);
  assert.equal(Buffer.compare(entries['runtime.js'], readFileSync(runtimePath)), 0);
  assert.equal(Buffer.compare(entries['dropdown-menu-preview.js'], readFileSync(adapterPath)), 0);
  assert.equal(Buffer.compare(entries['LICENSE.txt'], readFileSync(join(batch, 'LICENSE.txt'))), 0);
  const readme = entries['README.txt'].toString('utf8');
  assert.match(readme, /original\.html为未改动原件/);
  assert.match(readme, /静态展开菜单/);
  assert.match(readme, /dropdown-menu-preview\.js/);
  assert.match(readme, /演示链接已拦截/);
});

function loadZip() {
  // zlib-based unzip without new dependencies: Node 22 has no built-in unzip;
  // use the system python one-off only if needed. Prefer ffLate? Instead parse via
  // child_process is messy. Use unzip from python in a helper? Keep tests self-contained.
  // Implementation: use node:zlib against local zip by invoking a tiny parser below.
  return unzipWithZlib();
}

function unzipWithZlib() {
  const {inflateRawSync} = requireZlib();
  return {
    unzipSync(buf) {
      return readZipEntries(buf, inflateRawSync);
    },
    readFileSync,
  };
}

function requireZlib() {
  return createRequire(import.meta.url)('node:zlib');
}

function readZipEntries(buf, inflateRawSync) {
  const entries = {};
  let offset = 0;
  while (offset + 30 <= buf.length) {
    const sig = buf.readUInt32LE(offset);
    if (sig !== 0x04034b50) break;
    const method = buf.readUInt16LE(offset + 8);
    const compSize = buf.readUInt32LE(offset + 18);
    const uncompSize = buf.readUInt32LE(offset + 22);
    const nameLen = buf.readUInt16LE(offset + 26);
    const extraLen = buf.readUInt16LE(offset + 28);
    const name = buf.subarray(offset + 30, offset + 30 + nameLen).toString('utf8');
    const dataStart = offset + 30 + nameLen + extraLen;
    const data = buf.subarray(dataStart, dataStart + compSize);
    if (name.endsWith('/')) {
      offset = dataStart + compSize;
      continue;
    }
    if (method === 0) entries[name] = Buffer.from(data);
    else if (method === 8) entries[name] = inflateRawSync(data);
    else throw new Error(`unsupported zip method ${method} for ${name}`);
    if (uncompSize && entries[name].length !== uncompSize) {
      throw new Error(`zip size mismatch for ${name}`);
    }
    offset = dataStart + compSize;
  }
  return entries;
}
