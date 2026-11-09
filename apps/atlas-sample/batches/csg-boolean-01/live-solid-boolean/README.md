# React Three CSG · Updating

Original official Updating story + Setup + exact fixed CSG source, not a new boolean/editor UI. Box[1,1,1] at z-.5, subtraction sphere[.45,64,64], rotation .5*delta, every-frame evaluator.update, meshNormalMaterial, original camera(-5,4,4)/fov55/lights/OrbitControls retained.

Original CSG catch-console changed to propagate real evaluation failure into host failure boundary, not silently draw empty geometry.

Reduced preference pauses original rotation/update after initial Boolean evaluation, uses demand frames and no Orbit damping; native pointer drag still invalidates original camera rendering.

Pinned original declared React19.0/Fiber9.0.4/drei10.0.3/Three.172; original dependencies three-bvh-csg0.0.16 and three-mesh-bvh0.6.8. Remaining compatible transitive versions recorded, not claimed exact original lock.

Fiber default synchronous GL configure is awaited by original Canvas; added alive/catch around that async continuation to avoid late render/rejection on disposal.

Fiber500ms unmount cleanup changed to microtask, explicit renderer.dispose, and last inactive root cancels/resets global render loop to permit correct remount after host-owned cancellation.

Host owns GPU allocations/contextloss/compile/link failures and RAF/timers/listeners/observers; hidden and zero-size release then rebuild; unsupported GL shows real error without substitute visual.

Normal plain-text module split runtime-three.js then runtime.js via existing runtime.scripts loader, no binary encoding/CSP change. No images, external fonts, Workers, backend or remote imports.

Tests use actual554 compose and production text files, original CSG evaluator and original Three rendering code. Actual finite nontrivial geometry buffers are uploaded; successive rotation updates create new buffers. At reduced static geometry, synthetic pointer down/move/up runs original OrbitControls and changes submitted model-view matrices. Real CPU Boolean evaluation is not replaced by a stub. WebGL methods, shader status, size geometry, ResizeObserver and pointer capture are mocked; no native raster, GPU compilation or native pointer hit-testing claim. Hidden/zero recovery must draw again, canceled callbacks cannot draw; GL allocations, listeners/observers, timers/RAF release on exit. Original64 subdivision may be expensive on real devices; no performance benchmark claim. No new model editing controls or real task backend.

Local: npm ci --ignore-scripts; node build.mjs; node test.cjs normal (also reduced/unsupported/shaderfail/contextlost/earlyexit/missingroot). Two normal JS modules must keep runtime.scripts order. Standalone HTML contains the same ordinary script tags. Public eight assets include complete licenses and source evidence; private build workspace is not promised as public source.
