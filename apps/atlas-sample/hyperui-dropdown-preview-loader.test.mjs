import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {adaptCandidate} from './candidate-adapter.mjs';
import {localizeItem} from './display-names.mjs';
import {createPreviewLoader} from './preview-runtime.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const catalog = JSON.parse(readFileSync(join(here, 'candidate-catalog.json'), 'utf8'));
const source = catalog.find((x) => x.id === 'hyperui:application-dropdown');

function frame() {
  return {
    isConnected: true,
    dataset: {},
    ownerDocument: {defaultView: {addEventListener() {}, removeEventListener() {}}},
    contentWindow: {},
    removeAttribute(k) { delete this[k]; },
  };
}

async function mountOfficialSrcdoc() {
  assert.ok(source, 'hyperui:application-dropdown missing from candidate-catalog');
  const item = localizeItem(adaptCandidate(source));
  const requested = [];
  const errors = [];
  const cache = {
    async get(url) {
      requested.push(url);
      return readFileSync(join(here, url), 'utf8');
    },
  };
  const f = frame();
  const loader = createPreviewLoader({cache});
  await loader.mount(f, item, {onError: (e) => errors.push(e.message)});
  const srcdoc = f.srcdoc || '';
  loader.release(f);
  return {item, requested, errors, srcdoc};
}

function csp(srcdoc) {
  return srcdoc.match(/<meta http-equiv="Content-Security-Policy"[^>]+>/)?.[0] || '';
}

test('official candidate loader must fetch and inline the dropdown preview adapter into srcdoc', async () => {
  const {item, requested, errors, srcdoc} = await mountOfficialSrcdoc();
  assert.equal(errors.length, 0);
  assert.ok(item.runtime, 'adapted item must carry a runtime record');
  assert.deepEqual(item.runtime.scripts, ['runtime.js', 'dropdown-menu-preview.js']);
  assert.ok(requested.includes(item.runtime.css));
  assert.ok(requested.some((url) => url.endsWith('/runtime.js')));
  assert.ok(requested.some((url) => url.endsWith('/dropdown-menu-preview.js')));
  assert.ok(requested.some((url) => url.endsWith('application-dropdown.html')));
  assert.ok(srcdoc.includes('function bindDropdownMenuPreview'));
  assert.ok(srcdoc.includes('root.bindDropdownMenuPreview = bindDropdownMenuPreview') || srcdoc.includes('bindDropdownMenuPreview = bindDropdownMenuPreview'));
  assert.doesNotMatch(srcdoc, /<script\b[^>]*\bsrc="/);
  assert.match(csp(srcdoc), /default-src 'none'/);
  assert.match(csp(srcdoc), /script-src 'unsafe-inline'/);
  assert.match(csp(srcdoc), /connect-src 'none'/);
  assert.doesNotMatch(csp(srcdoc), /script-src[^"]*https:/);
  assert.doesNotMatch(csp(srcdoc), /allow-same-origin/);
});

test('official srcdoc keeps shared intercept ahead of the inlined adapter and does not leave a rejected script src', async () => {
  const {srcdoc} = await mountOfficialSrcdoc();
  const intercept = srcdoc.search(/e\.target\.closest\('a, input\[type="file"\]'\)/);
  const adapter = srcdoc.indexOf('function bindDropdownMenuPreview');
  assert.ok(intercept >= 0, 'shared runtime intercept missing from srcdoc');
  assert.ok(adapter >= 0, 'adapter definition missing from srcdoc');
  assert.ok(intercept < adapter, 'adapter must be packed after the shared intercept in the official srcdoc');
  assert.equal([...srcdoc.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)].map((m) => m[1]).length, 0);
  assert.match(srcdoc, /<script>/);
});
