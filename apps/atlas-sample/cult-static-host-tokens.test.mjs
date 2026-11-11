import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {test} from 'node:test';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const batches = path.join(root, 'batches');

const LIGHT_TOKENS = {
  '--background': 'oklch(100% 0 0)',
  '--foreground': 'oklch(20.5% 0 0)',
  '--card': 'oklch(100% 0 0)',
  '--card-foreground': 'oklch(14.5% 0 0)',
  '--muted': 'oklch(97% 0 0)',
  '--muted-foreground': 'oklch(51% 0 0)',
  '--border': 'oklch(94% 0 0)',
  '--destructive': 'oklch(57.7% .245 27.325)'
};

const AFFECTED = [
  'cult-static-01/illustration-graph',
  'cult-static-01/fluid-ai-workloads',
  'cult-static-02/illustration-fluid-rendering'
];

const SHARED_COPIES = [
  'cult-static-01/apple-keyboard',
  'cult-static-02/illustration-card-grid'
];

const REGRESSION = [
  'cult-direct-01',
  'cult-direct-02',
  'cult-direct-03',
  'cult-forms-01',
  'cult-glass-01',
  'cult-next-01'
];

function firstRootBlock(css) {
  const start = css.indexOf(':root{');
  assert.notEqual(start, -1, 'missing :root');
  let depth = 0;
  for (let i = start; i < css.length; i++) {
    if (css[i] === '{') depth++;
    else if (css[i] === '}') {
      depth--;
      if (depth === 0) return css.slice(start, i + 1);
    }
  }
  assert.fail('unclosed :root');
}

function tokenMap(block) {
  const map = {};
  for (const match of block.matchAll(/--([A-Za-z0-9-]+):([^;]+);/g)) {
    const name = '--' + match[1];
    if (!(name in map)) map[name] = match[2];
  }
  return map;
}

function hostAppendix(css) {
  const needle = 'body{margin:0;background:#f7f7f8;color:#24242a;font-family:system-ui,sans-serif;padding:20px}';
  const index = css.lastIndexOf(needle);
  assert.notEqual(index, -1, 'missing host body rule');
  // Include the :root immediately before the host body, if present.
  const root = css.lastIndexOf(':root{', index);
  return css.slice(root >= 0 && index - root < 600 ? root : index);
}

test('official Cult light :root tokens are the source for the static host fill-in', () => {
  const official = firstRootBlock(readFileSync(path.join(batches, 'cult-direct-01/runtime.css'), 'utf8'));
  const tokens = tokenMap(official);
  for (const [name, value] of Object.entries(LIGHT_TOKENS)) {
    assert.equal(tokens[name], value, name);
  }
  // The official interactive Cult runtimes already agreed on this light theme.
  for (const dir of REGRESSION) {
    const css = readFileSync(path.join(batches, dir, 'runtime.css'), 'utf8');
    const found = tokenMap(firstRootBlock(css));
    for (const [name, value] of Object.entries(LIGHT_TOKENS)) {
      assert.equal(found[name], value, dir + ' ' + name);
    }
  }
});

test('without a host :root, official SVG fills that use theme variables cannot resolve', () => {
  // Counterexample: illustration-graph / fluid-rendering / fluid-ai-workloads
  // default fills are var(--muted-foreground), var(--foreground), var(--card-foreground).
  // An undefined custom property leaves the SVG fill invalid, which matches the
  // desktop closeups (hardcoded strokes visible, labels and axes missing).
  const defined = new Set();
  function resolve(value) {
    const match = /^var\((--[A-Za-z0-9-]+)\)$/.exec(value);
    if (!match) return value;
    return defined.has(match[1]) ? 'resolved' : 'unresolved';
  }
  assert.equal(resolve('var(--muted-foreground)'), 'unresolved');
  assert.equal(resolve('#0070F3'), '#0070F3');
  for (const name of Object.keys(LIGHT_TOKENS)) defined.add(name);
  assert.equal(resolve('var(--muted-foreground)'), 'resolved');
  assert.equal(resolve('var(--foreground)'), 'resolved');
  assert.equal(resolve('var(--card-foreground)'), 'resolved');
});

test('the three static illustrations keep official SVG variable fills and gain the light host tokens', () => {
  const uses = {
    'cult-static-01/illustration-graph': ['--muted-foreground', '--card-foreground', '--card', '--border', '--destructive'],
    'cult-static-01/fluid-ai-workloads': ['--muted-foreground', '--foreground', '--card', '--border', '--muted', '--background'],
    'cult-static-02/illustration-fluid-rendering': ['--muted-foreground', '--foreground', '--card-foreground', '--card', '--border', '--muted']
  };
  for (const dir of AFFECTED) {
    const css = readFileSync(path.join(batches, dir, 'runtime.css'), 'utf8');
    const js = readFileSync(path.join(batches, dir, 'runtime.js'), 'utf8');
    const appendix = hostAppendix(css);
    const tokens = tokenMap(firstRootBlock(appendix));
    for (const [name, value] of Object.entries(LIGHT_TOKENS)) {
      assert.equal(tokens[name], value, dir + ' ' + name);
    }
    // Official paths and hardcoded brand strokes stay; fills are still variables.
    assert.match(js, /var\(--muted-foreground\)/);
    for (const token of uses[dir]) {
      assert.match(js, new RegExp('var\\(' + token.replace(/-/g, '\\-') + '\\)'));
    }
    // Host page chrome colors are unchanged.
    assert.match(appendix, /body\{margin:0;background:#f7f7f8;color:#24242a/);
  }
});

test('shared static host CSS copies stay in sync; official interactive Cult CSS is untouched', () => {
  const graph = readFileSync(path.join(batches, 'cult-static-01/illustration-graph/runtime.css'));
  const workloads = readFileSync(path.join(batches, 'cult-static-01/fluid-ai-workloads/runtime.css'));
  const keyboard = readFileSync(path.join(batches, 'cult-static-01/apple-keyboard/runtime.css'));
  assert.deepEqual(graph, workloads);
  assert.deepEqual(graph, keyboard);
  const fluid = readFileSync(path.join(batches, 'cult-static-02/illustration-fluid-rendering/runtime.css'));
  const grid = readFileSync(path.join(batches, 'cult-static-02/illustration-card-grid/runtime.css'));
  assert.deepEqual(fluid, grid);
  for (const dir of SHARED_COPIES) {
    const js = readFileSync(path.join(batches, dir, 'runtime.js'), 'utf8');
    assert.equal(js.includes('var(--muted-foreground)'), false);
  }
  for (const dir of REGRESSION) {
    const css = readFileSync(path.join(batches, dir, 'runtime.css'), 'utf8');
    assert.equal(css.includes('body{margin:0;background:#f7f7f8;color:#24242a'), false);
    const found = tokenMap(firstRootBlock(css));
    for (const [name, value] of Object.entries(LIGHT_TOKENS)) {
      assert.equal(found[name], value, dir + ' ' + name);
    }
  }
});
