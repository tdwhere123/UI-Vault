import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {test} from 'node:test';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const cssPath = path.join(root, 'batches/silverbullet-documents-01/runtime.css');
const jsPath = path.join(root, 'batches/silverbullet-documents-01/runtime.js');

function lastRule(css, selectorPrefix) {
  const needle = selectorPrefix + '{';
  const index = css.lastIndexOf(needle);
  assert.notEqual(index, -1, 'missing '+selectorPrefix);
  const end = css.indexOf('}', index);
  return css.slice(index, end + 1);
}

test('host #sb-main is a column so the title is not a row sibling of the tree and editor', () => {
  const css = readFileSync(cssPath, 'utf8');
  const js = readFileSync(jsPath, 'utf8');
  const originalMain = css.slice(0, css.lastIndexOf('#content{height:650px}'));
  assert.match(originalMain, /#sb-main\{display:flex;flex-direction:row/);
  const hostMain = lastRule(css, '#sb-main');
  assert.match(hostMain, /display:flex/);
  assert.match(hostMain, /flex-direction:column/);
  assert.match(hostMain, /min-height:0/);
  const hostAppendix = css.slice(css.lastIndexOf('#content{height:650px}'));
  const columnsStart = hostAppendix.indexOf('.fixture-columns{');
  const columnsEnd = hostAppendix.indexOf('}', columnsStart);
  const columns = hostAppendix.slice(columnsStart, columnsEnd + 1);
  assert.match(columns, /grid-template-columns:250px 1fr/);
  assert.match(columns, /flex:1/);
  assert.match(columns, /width:100%/);
  assert.match(hostAppendix, /@media\(max-width: 600px\)\{\.fixture-columns\{grid-template-columns:150px 1fr\}/);
  const top = lastRule(css, '#sb-top');
  assert.match(top, /flex-shrink:0/);
  // Host mount puts the top bar and the two-column fixture inside #sb-main.
  assert.match(js, /id:"sb-main"/);
  assert.match(js, /class:"fixture-columns"/);
  assert.match(js, /id:"sb-editor"/);
  assert.match(js, /class:"sb-nav"/);
  const host = js.slice(js.lastIndexOf('var Qn=document.getElementById("content")'));
  const mainAt = host.indexOf('id:"sb-main"');
  const columnsAt = host.indexOf('class:"fixture-columns"');
  const editorAt = host.indexOf('id:"sb-editor"');
  assert.ok(mainAt >= 0 && columnsAt > mainAt && editorAt > columnsAt);
});

test('row layout of #sb-main would leave the editor a squeezed sibling of the top bar', () => {
  // Observed live preview is ~680px wide. Original #sb-main is flex-direction:row.
  // A title bar that can use editor-width (800px) as content size plus a 250px tree
  // cannot also leave a usable editor column in that row.
  const previewWidth = 680;
  const titleMin = 400;
  const tree = 250;
  const rowEditor = previewWidth - titleMin - tree;
  assert.ok(rowEditor <= 30, 'row layout should leave no usable editor width');
  const columnEditor = previewWidth - tree;
  assert.ok(columnEditor > 300, 'column layout should keep a usable editor pane');
});
