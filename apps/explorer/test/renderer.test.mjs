import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';

class Element {
  constructor(tag, text = '') { this.tag = tag; this.textContent = text; this.children = []; this.events = {}; this.attributes = {}; this.value = ''; }
  append(...items) { this.children.push(...items); }
  replaceChildren(...items) { this.children = items; this.textContent = ''; }
  setAttribute(name, value) { this.attributes[name] = value; }
  addEventListener(name, handler) { this.events[name] = handler; }
}
const settle = () => new Promise(resolve => setImmediate(resolve));
const walk = element => [element, ...element.children.flatMap(walk)];
async function renderer(fetch) {
  const ids = Object.fromEntries(['filters', 'query', 'category', 'source', 'status', 'list', 'detail', 'tag', 'dependency', 'framework', 'language', 'styling', 'assetKind', 'licenseStatus', 'availability'].map(id => [id, new Element('div')]));
  const document = { getElementById: id => ids[id], createElement: tag => new Element(tag) };
  class Option extends Element { constructor(text, value) { super('option', text); this.value = value; } }
  runInNewContext(await readFile(new URL('../public/app.js', import.meta.url), 'utf8'), { document, Option, fetch, URLSearchParams, encodeURIComponent });
  await settle(); return ids;
}
function catalog() {
  return { sources: [{ id: 'source', name: 'Source' }], components: [{ assetKind: 'source', availability: 'source_snapshot', restoreStatus: 'not_checked', id: 'source:button', name: '<img src=x onerror=alert(1)>', category: 'button', sourceId: 'source', tags: ['keyboard'], upstreamUrl: 'https://example.invalid/', upstreamCommit: 'a'.repeat(40), license: { status: 'allowed', evidencePath: 'archive/LICENSE', noticePaths: [] }, dependencies: { react: '19.0.0' }, snapshotPath: 'archive/button', files: [{ path: 'button.tsx', size: 9, sha256: 'b'.repeat(64) }], limitations: ['Closure not proven'] }] };
}
const response = body => ({ ok: true, json: async () => body });
test('renderer displays upstream markup as text and sends filtering to shared catalog API', async () => {
  const data = catalog(); const requests = [];
  const ids = await renderer(async url => { requests.push(url); return response(url === '/api/catalog' ? data : data.components); });
  assert.equal(ids.list.children[0].textContent, `源码登记 · ${data.components[0].name} (source) · button · allowed · ${data.components[0].availability}`);
  ids.list.children[0].events.click();
  assert.equal(ids.detail.children[0].textContent, `${data.components[0].name} · source`);
  assert.ok(walk(ids.detail).some(item => item.textContent === 'Closure not proven'));
  ids.query.value = 'keyboard'; ids.category.value = 'button';
  ids.filters.events.submit({ preventDefault() {} }); await settle();
  assert.ok(requests.includes('/api/components?query=keyboard&category=button&sourceId='));
});
test('renderer source is inert text and stale replies cannot overwrite a newer file selection', async () => {
  const data = catalog(); let finish;
  const ids = await renderer(async url => {
    if (url.startsWith('/api/source')) return new Promise(resolve => { finish = resolve; });
    return response(url === '/api/catalog' ? data : data.components);
  });
  ids.list.children[0].events.click();
  const select = walk(ids.detail).find(item => item.tag === 'select');
  const pre = walk(ids.detail).find(item => item.tag === 'pre');
  select.value = 'button.tsx'; const pending = select.events.change();
  select.value = ''; await select.events.change();
  finish(response({ text: '<script>evil()</script>' })); await pending;
  assert.equal(pre.textContent, '请选择文件。');
  select.value = 'button.tsx'; const second = select.events.change();
  finish(response({ text: '<script>evil()</script>' })); await second;
  assert.equal(pre.textContent, '<script>evil()</script>');
  assert.equal(pre.children.length, 0);
});
test('renderer does not turn a failed search into legitimate empty results', async () => {
  let fail = false; const data = catalog();
  const ids = await renderer(async url => {
    if (fail) throw new Error('offline');
    return response(url === '/api/catalog' ? data : data.components);
  });
  ids.list.children[0].events.click(); fail = true;
  ids.filters.events.submit({ preventDefault() {} }); await settle();
  assert.equal(ids.list.children.length, 0);
  assert.match(ids.status.textContent, /读取失败.*offline/);
  assert.match(ids.detail.children[0].textContent, /搜索失败/);
});
test('reference entries are visibly separate, label inference and never expose a source picker', async () => {
  const data = catalog();
  data.components = [{ ...data.components[0], assetKind: 'reference', availability: 'reference', upstreamCommit: null, snapshotPath: null, files: [], dependencies: {},
    publicUrl: 'https://example.invalid/reference', isInference: true, screenshotUrls: ['https://example.invalid/screenshot'],
    interactionFlow: ['展开', '提交'], visualNotes: { layout: '两列', colors: '灰色', typography: '无衬线', motion: '淡入' },
    useCases: ['反馈'], implementationNotes: '<script>inferred()</script>', localAssetPaths: ['inventory/legal.png'] }];
  const requests = [];
  const ids = await renderer(async url => { requests.push(url); return response(url === '/api/catalog' ? data : data.components); });
  assert.match(ids.list.children[0].textContent, /^审美\/交互参考/);
  ids.list.children[0].events.click();
  const elements = walk(ids.detail);
  assert.ok(elements.some(item => item.textContent === '审美/交互参考 · 不含可导出源码'));
  assert.ok(elements.some(item => item.textContent === '推测，未经内部实现验证'));
  assert.ok(elements.some(item => item.textContent === '<script>inferred()</script>'));
  assert.ok(elements.some(item => item.textContent === '两列'));
  assert.ok(elements.some(item => item.href === data.components[0].publicUrl));
  assert.ok(!elements.some(item => item.tag === 'pre' || item.tag === 'select' || item.tag === 'img' || item.tag === 'iframe'));
  assert.ok(!requests.some(url => url.startsWith('/api/source')));
});
test('recorded facets combine into one request and unknown stack is not inferred from dependencies', async () => {
  const data = catalog(); const component = data.components[0];
  component.availability = 'source_snapshot'; component.restoreStatus = 'not_checked';
  component.techStack = { frameworks: null, languages: [], styling: ['Tailwind CSS'] };
  const requests = [];
  const ids = await renderer(async url => { requests.push(url); return response(url === '/api/catalog' ? data : data.components); });
  assert.match(ids.list.children[0].textContent, /source/);
  assert.ok(!ids.framework.children.some(item => item.textContent === 'React'));
  const html = await readFile(new URL('../public/index.html', import.meta.url), 'utf8');
  assert.match(html, /value="null">未知（未登记）/);
  ids.list.children[0].events.click();
  const text = walk(ids.detail).map(item => item.textContent).join('\n');
  assert.match(text, /未知（未登记）/); assert.match(text, /明确无/);
  assert.match(text, /source_snapshot/); assert.match(text, /未实测 \/ not_checked/);
  ids.query.value = 'keyboard'; ids.source.value = 'source'; ids.category.value = 'button'; ids.tag.value = 'keyboard';
  ids.dependency.value = 'react'; ids.framework.value = 'null'; ids.language.value = ''; ids.styling.value = JSON.stringify('Tailwind CSS');
  ids.assetKind.value = 'source'; ids.licenseStatus.value = 'allowed'; ids.availability.value = 'source_snapshot';
  ids.filters.events.submit({ preventDefault() {} }); await settle();
  const query = new URLSearchParams(requests.at(-1).split('?')[1]);
  assert.equal(query.get('framework'), 'null'); assert.equal(query.get('styling'), '"Tailwind CSS"');
  for (const key of ['sourceId', 'category', 'tag', 'dependency', 'assetKind', 'licenseStatus', 'availability']) assert.ok(query.has(key), key);
  assert.equal(query.has('language'), false);
});
