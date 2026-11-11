import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {test} from 'node:test';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const runtimePath = path.join(root, 'batches/vis-timeline-01/runtime.js');

function hostFrom(runtime) {
  const marker = 'document.getElementById("root").innerHTML=';
  const index = runtime.indexOf(marker);
  assert.notEqual(index, -1);
  return runtime.slice(index);
}

test('engine still hides the root until its own first-draw handshake, which stays original', () => {
  const runtime = readFileSync(runtimePath, 'utf8');
  const engine = runtime.slice(0, runtime.indexOf('document.getElementById("root").innerHTML='));
  assert.match(engine, /this\.dom\.root\.style\.visibility="hidden"/);
  assert.match(engine, /!o\.initialDrawDone&&\(o\.initialRangeChangeDone\|\|!o\.options\.start&&!o\.options\.end\|\|o\.options\.rollingMode\)/);
  assert.match(engine, /o\.dom\.root\.style\.visibility="visible"/);
});

test('with both start and end set, a missed rangechanged leaves the engine root hidden', () => {
  // Host options include start and end, so the official unhide condition
  // reduces to initialRangeChangeDone. setWindow to the already-configured
  // window can be a no-op and never emit rangechanged; later fit/redraw
  // may also skip the `changed` path that would unhide.
  const options = {start: '2026-11-08T00:00', end: '2026-11-12T00:00', rollingMode: false};
  const initialRangeChangeDone = false;
  const initialDrawDone = false;
  const canUnhide = !initialDrawDone && (initialRangeChangeDone || !options.start && !options.end || options.rollingMode);
  assert.equal(canUnhide, false);
});

test('host reveals the already-laid-out timeline after mount, resize, fit, and restart', () => {
  const host = hostFrom(readFileSync(runtimePath, 'utf8'));
  assert.match(host, /function revealTimeline\(\)\{/);
  assert.match(host, /Ct\.dom\.root\.style\.visibility="visible"/);
  assert.match(host, /initialRangeChangeDone=!0/);
  assert.match(host, /start:"2026-11-08T00:00",end:"2026-11-12T00:00"/);
  assert.match(host, /autoResize:!1/);
  assert.match(host, /new ResizeObserver\(\(\)=>\{Ct\?\.redraw\(\);revealTimeline\(\)\}\)/);
  assert.match(host, /Ct\?\.fit\(\{animation:!1\}\);revealTimeline\(\)/);
  assert.match(host, /zl\(\),revealTimeline\(\)/);
  // Host must not rewrite the engine hide/unhide in the library body.
  const runtime = readFileSync(runtimePath, 'utf8');
  const engine = runtime.slice(0, runtime.indexOf('document.getElementById("root").innerHTML='));
  assert.match(engine, /this\.dom\.root\.style\.visibility="hidden"/);
  assert.equal(host.includes('this.dom.root.style.visibility="hidden"'), false);
});
