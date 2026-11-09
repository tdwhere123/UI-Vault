# CindyJS / CindyGL: original Julia explanation

Fixed CindyJS/CindyJS c5b87a373e574c0da6137cc95fbe48a8d6e534c5, original examples/cindygl/08_julia_explanation.html. Original init/draw CindyScript strings are byte-for-byte retained and passed to the original scripts object, rather than extra non-JavaScript HTML script elements. Original Free point C, 500x500 port and visibleRect are retained.

Build follows original make/sources.js order and tools/cat.js Babel remove-import-export behavior. CSNumber/Json TypeScript are transpiled; original empty cssrc list becomes empty csAssets. The generated version identifies the fixed commit. Original CindyGL module order and complete GLSL resource table are retained. Esbuild minification replaces build-time Closure Compiler, not the original runtime interpreter/compiler.

This is a modern offline Julia-only build, NOT the general CindyJS distribution. Unused Clipper geometry-boolean library, ES6-shim, iphone-inline-video, and SVG/PDF export RenderBackends are omitted. Original Julia uses none of those operations. The javascript$1 external JavaScript operator explicitly errors rather than calling new Function. Dynamic plugin loading is disabled; bundled CindyGL registers normally. The unused commonButton implementation is replaced with an explicit unsupported error because it embeds a PNG baseline spacer. Julia has no HTML geometry controls. No binary/base64 asset is shipped. No general script editor or service is exposed.

Each mount creates a fresh original CindyJS/CindyGL scope. Hidden scenes shut down and release resources; return rebuilds the original example. Reduced motion disables original autoplay, while pointer input may invalidate static frames. Original shutdown runs before host finally cleanup of GL allocations, RAF/timers, listeners and hidden GL canvases. Initial WebGL failure, compile error, runtime draw exception or context loss shows an explicit stopped state, never a blank canvas declared successful. Neither original Julia arithmetic, drag mathematics nor shader generation is replaced.

The root has full Apache-2.0 text but no NOTICE file in this fixed archive. Events.js explicitly attributes its ResizeSensor to Marc J. Schmidt/css-element-queries; full official MIT at bfa9a7f is included. Build-time Babel/esbuild are not browser runtime libraries. No npm CindyJS release is substituted for the fixed source.

The whole shipped GLSL snippet table is hashed in SOURCE, including snippets not used by Julia. Source review found no mod289/permute/taylorInvSqrt/snoise/Ashima/Stefan/Quilez implementation. Unused does not mean undistributed. Root-license evidence is not claimed to establish every historical provenance beyond known source attributions.

Production validation uses actual ui-vault-554 composePreview, original CindyJS interpreter/geometry, original CindyGL generation/ShaderProgram, and recorded Canvas2D/WebGL commands. Original pointer drag moves C's drawing coordinates from [181.5,247.6] to [221.5,267.6] and emits 60 additional original trajectory-line commands. Normal includes hidden remount and canceled old callbacks. Reduced, unsupported, shaderfail, latefail, contextlost, missingroot, earlyexit and initialhidden have focused results. Final GL allocations/deletions, RAF/timers/observers/EventTarget listener ledgers balance.

WebGL functions and compile-status responses, 2D methods, and dimensions are mocked. This is NOT native GPU compilation, native hit testing, screenshot or pixel acceptance. Original orbit code iterates 30 times and can grow or overflow outside stable regions; no claim that all trajectory points are finite. Original fixed-size port is not a new responsive design. No screenshots/native browser bypass were attempted.

Build: npm ci --ignore-scripts; node build.mjs; node bundle.mjs.
Test: node test.cjs normal julia (other focused modes named above).
Public seven files are runnable built text assets with source/attribution evidence, not a promise that the private build workspace is published.
