import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {test} from 'node:test';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const runtimePath = path.join(root, 'batches/minipaint-workspace-01/runtime.js');
const part1Path = path.join(root, 'batches/minipaint-workspace-01/source-part-01.json');

function renderFunction(runtime) {
  const start = runtime.indexOf('render(e){');
  assert.notEqual(start, -1, 'render(e) missing');
  // The method is compact; take through the trailing rAF reschedule unique to this render.
  const marker = 'this._atlasRaf=requestAnimationFrame(function(){t.render(e)})';
  const end = runtime.indexOf(marker, start);
  assert.notEqual(end, -1, 'render rAF reschedule missing');
  return runtime.slice(start, end + marker.length);
}

test('non-force render() must not cancel the composite loop before the dirty-flag return', () => {
  const fn = renderFunction(readFileSync(runtimePath, 'utf8'));
  const dirtyReturn = fn.indexOf('if(e!==true){n.need_render=true;return}');
  const cancel = fn.indexOf('if(this._atlasRaf)cancelAnimationFrame(this._atlasRaf)');
  const hidden = fn.indexOf('if(window.__miniDead||document.hidden)return');
  assert.ok(dirtyReturn >= 0, 'dirty-flag early return missing');
  assert.ok(cancel > dirtyReturn, 'cancelling rAF before the non-force return kills the composite loop');
  assert.ok(hidden > dirtyReturn, 'hidden return must not precede the dirty-flag path');
});

test('source adapter injects the hidden/cancel guards after the official non-force return', () => {
  const build = JSON.parse(readFileSync(part1Path, 'utf8'))['build.mjs'];
  assert.match(build, /src\/js\/core\/base-layers\.js/);
  assert.match(build, /force !== true/);
  assert.match(build, /this\._atlasRaf\)cancelAnimationFrame/);
  // The old adapter injected the guards at `render(force) {`, which runs before
  // the official dirty-flag return and cancelled the in-flight rAF.
  assert.doesNotMatch(
    build,
    /replace\(\/\(render\\?\(force\[\^\)\]\*\\?\) \\?\{\)/
  );
});

test('cancelling rAF on a dirty-flag render leaves strokes uncomposited; keeping the loop paints them', () => {
  function run(cancelOnDirtyCall) {
    let queued = false, need = false, painted = 0;
    function render(force) {
      if (cancelOnDirtyCall) queued = false;
      if (force !== true) {
        need = true;
        return;
      }
      if (need) {
        painted += 1;
        need = false;
      }
      queued = true;
    }
    render(true); // startup loop
    render(); // brush/pencil dirty the layer
    if (queued) render(true); // next animation frame
    return {painted, queued, need};
  }
  const broken = run(true);
  assert.equal(broken.painted, 0);
  assert.equal(broken.queued, false);
  assert.equal(broken.need, true);
  const fixed = run(false);
  assert.equal(fixed.painted, 1);
  assert.equal(fixed.queued, true);
  assert.equal(fixed.need, false);
});
