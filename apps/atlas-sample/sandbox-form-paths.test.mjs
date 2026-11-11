import assert from 'node:assert/strict';
import {execSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
import {test} from 'node:test';

const BASE = '56d4a215487cf1ea3a07d1a50ae612d33e93cc3b';

function old(path) {
  return execSync(`git show ${BASE}:${path}`, {encoding: 'utf8', maxBuffer: 20 * 1024 * 1024});
}

function neu(path) {
  return readFileSync(path, 'utf8');
}

test('formity Next uses a button click path instead of native submit', () => {
  const prev = old('apps/atlas-sample/batches/formity-01/interview/runtime.js');
  const next = neu('apps/atlas-sample/batches/formity-01/interview/runtime.js');
  assert.match(prev, /function xa\(\{className:e,\.\.\.t\}\)\{return\(0,Gb\.jsx\)\("button",\{"data-cy":"button",className:/);
  assert.doesNotMatch(prev, /function xa\(\{className:e,\.\.\.t\}\)\{return\(0,Gb\.jsx\)\("button",\{"data-cy":"button",type:"button"/);
  assert.match(next, /function xa\(\{className:e,\.\.\.t\}\)\{return\(0,Gb\.jsx\)\("button",\{"data-cy":"button",type:"button"/);
  assert.match(prev, /onSubmit:r\.handleSubmit\(o\)/);
  assert.match(next, /onClick:s=>\{let i=s\.target\.closest\('button\[data-cy="button"\]'\)/);
});

test('resume upload is a type=button click, not native submit', () => {
  const prev = old('apps/atlas-sample/batches/resume-local-01/resume/runtime.js');
  const next = neu('apps/atlas-sample/batches/resume-local-01/resume/runtime.js');
  assert.match(prev, /type:"submit",disabled:l\|\|!i/);
  assert.doesNotMatch(prev, /type:"button",disabled:l\|\|!i,onClick:/);
  assert.match(next, /type:"button",disabled:l\|\|!i,onClick:/);
});

test('pdfjs search no longer depends only on form submit', () => {
  const prevHtml = old('apps/atlas-sample/batches/pdfjs-01/text-reader.html');
  const nextHtml = neu('apps/atlas-sample/batches/pdfjs-01/text-reader.html');
  const prevJs = old('apps/atlas-sample/batches/pdfjs-01/runtime.js');
  const nextJs = neu('apps/atlas-sample/batches/pdfjs-01/runtime.js');
  assert.match(prevHtml, /<button>Search<\/button>/);
  assert.doesNotMatch(prevHtml, /id="search-go"/);
  assert.match(nextHtml, /<button type="button" id="search-go">Search<\/button>/);
  assert.doesNotMatch(prevJs, /ns\("#search-go"\)\.onclick/);
  assert.match(nextJs, /ns\("#search-go"\)\.onclick=\(\)=>i5\(\)/);
  assert.match(nextJs, /ns\("#query"\)\.addEventListener\("keydown"/);
});

test('ai-elements prompt submit does not call requestSubmit', () => {
  const prev = old('apps/atlas-sample/batches/ai-elements-05/runtime.js');
  const next = neu('apps/atlas-sample/batches/ai-elements-05/runtime.js');
  const prevTsx = old('apps/atlas-sample/batches/ai-elements-05/prompt-input.tsx');
  const nextTsx = neu('apps/atlas-sample/batches/ai-elements-05/prompt-input.tsx');
  assert.match(prev, /t\?\.requestSubmit\(\)/);
  assert.doesNotMatch(next, /t\?\.requestSubmit\(\)/);
  assert.match(next, /__promptInputSubmit/);
  assert.match(prev, /type:c&&i\?`button`:`submit`/);
  assert.match(next, /type:`button`/);
  assert.match(prevTsx, /form\?\.requestSubmit\(\);/);
  assert.doesNotMatch(nextTsx, /form\?\.requestSubmit\(\);/);
  assert.match(nextTsx, /__promptInputSubmit/);
});

test('peel control is a real button with click, not only onTap/onKeyDown', () => {
  const prev = old('apps/atlas-sample/batches/aicanvas-direct-02/peel-corner-reveal/runtime.js');
  const next = neu('apps/atlas-sample/batches/aicanvas-direct-02/peel-corner-reveal/runtime.js');
  assert.match(prev, /ne\.div,\{role:"button",tabIndex:0/);
  assert.match(prev, /onTap:Be,onKeyDown:un/);
  assert.match(next, /ne\.button,\{type:"button"/);
  assert.match(next, /onClick:Be/);
  assert.doesNotMatch(next, /onTap:Be,onKeyDown:un/);
});

test('vis-timeline container has a definite size and delayed redraw', () => {
  const prevCss = old('apps/atlas-sample/batches/vis-timeline-01/runtime.css');
  const nextCss = neu('apps/atlas-sample/batches/vis-timeline-01/runtime.css');
  const prevJs = old('apps/atlas-sample/batches/vis-timeline-01/runtime.js');
  const nextJs = neu('apps/atlas-sample/batches/vis-timeline-01/runtime.js');
  assert.doesNotMatch(prevCss, /#timeline\{[^}]*min-height:350px/);
  assert.match(nextCss, /#timeline\{[^}]*min-height:350px/);
  assert.match(nextCss, /html,body,#root\{width:100%/);
  assert.doesNotMatch(prevJs, /function redrawWhenSized/);
  assert.match(nextJs, /function redrawWhenSized/);
});

test('astryx library thumbs are local data fixtures, not template-assets paths', () => {
  const prev = old('apps/atlas-sample/batches/astryx-next-01/library/runtime.js');
  const next = neu('apps/atlas-sample/batches/astryx-next-01/library/runtime.js');
  const nextTsx = neu('apps/atlas-sample/batches/astryx-next-01/library/page.tsx');
  assert.match(prev, /imageUrl:`\/template-assets\//);
  assert.doesNotMatch(next, /\/template-assets\//);
  assert.doesNotMatch(nextTsx, /\/template-assets\//);
  assert.equal((next.match(/data:image\/svg\+xml,/g) || []).length, 30);
  assert.doesNotMatch(next, /https:\/\/[^"'` ]*template-assets/);
});

test('uilayout display title matches the official FAQ catalog demo', () => {
  const prev = old('apps/atlas-sample/display-names.mjs');
  const next = neu('apps/atlas-sample/display-names.mjs');
  assert.match(prev, /"uilayout:timeline-animation-index": "滚动时间线"/);
  assert.match(next, /"uilayout:timeline-animation-index": "常见问题区块滚动显现"/);
});

test('kanban arrow clicks stop parent drag and drop allows unset dataTransfer', () => {
  const prev = old('apps/atlas-sample/featured/featured.js');
  const next = neu('apps/atlas-sample/featured/featured.js');
  const arrowHook = 'onMouseDown:t=>t.stopPropagation(),onPointerDown:t=>t.stopPropagation(),onClick:()=>n(e.id,o.id,`back`)';
  const skipDrag = 't.target.closest?.(`button,[data-move]`)';
  const oldOver = 'onDragOver:e=>{i&&(e.preventDefault()';
  const newOver = 'onDragOver:e=>{e.preventDefault();try{e.dataTransfer.dropEffect=`move`}catch{}';
  assert.equal(prev.includes(arrowHook), false);
  assert.equal(next.includes(arrowHook), true);
  assert.equal(next.includes(skipDrag), true);
  assert.equal(prev.includes(oldOver), true);
  assert.equal(next.includes(newOver), true);
});

test('fancy elastic-line stroke is visible without pathLength 0 intro', () => {
  const prev = old('apps/atlas-sample/batches/fancy-next-01/runtime.js');
  const next = neu('apps/atlas-sample/batches/fancy-next-01/runtime.js');
  assert.match(prev, /initial:\{pathLength:0\},style:\{pathLength:j\}/);
  assert.doesNotMatch(next, /initial:\{pathLength:0\},style:\{pathLength:j\}/);
  assert.match(next, /stroke:"#171717",strokeWidth:Math\.max\(o,2\)/);
});
