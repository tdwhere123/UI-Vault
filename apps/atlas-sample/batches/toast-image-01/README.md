# TOAST UI local image studio

One original complete TOAST UI Image Editor interface. Upstream release v3.15.3 commit **270f31e45f789699c680d496076c3267218240f2**; installed npm source imageEditor.js, ui.js and default.svg match release files byte for byte (release-evidence). The research HEAD is not represented as the package revision. Actual dependencies are locked: Fabric4.2.0, tui-code-snippet2.3.3, tui-color-picker2.2.6. No substitute editing engine or newly drawn tool shell.

The still-life image is original SVG source text at source/src/sample.svg, loaded as a UTF-8 SVG data URI, not encoded raster media. A small original text-only TOAST UI brand label replaces the default external brand-image request; NHN copyright and attribution remain. Configured original menus and their tool logic remain. Load/file input and Download controls are visibly disabled and their handlers are not attached; no export success is claimed. usageStatistics:false is supplied and propagated to original child color pickers. No remote galleries, external fonts, telemetry or network. No paid service.

Crop internally uses original canvas.toDataURL -> Image processing. This is a local native runtime pixel operation, not pre-encoding an existing binary into source for upload. No PNG fixture is bundled or published. Canvas-test mock URLs are test-only sentinels, not valid pixel images and never included in runtime. The active CSP does not need expansion beyond its existing local data-image allowance.

## Original UI adaptations and lifecycle fixes
- Preserve original menu SVG geometry; load original SVG text directly instead of its build-time base64 wrapper.
- Preserve compiled upstream editor/color-picker CSS. Replace original embedded tiny PNG checkmark/dropdown/transparent-grid helper images with local CSS glyphs/gradient. No other UI redesign. Remove legacy CSS behavior directive; CSS has no URL/import/font requests.
- Original theme styleLoad generated a data:text/css link. It now inserts identical CSS text into a style element, compatible with existing inline-style CSP, and removes owned styles on exit.
- Omit legacy IE/svgxuse polyfill entry: modern native browser APIs required; avoids its persistent resize/MutationObserver and external SVG-use fallback. The unmodified original polyfill remains in local upstream originals, not runtime.
- Original cropzone bound keyboard handlers without retaining references. Store those references and remove them on crop end, preventing two handlers per repeated crop.
- Original Graphics.destroy only cleared canvas and detached DOM. Now detach original zoom handlers, exit any active IText editing/abort cursor animation, and call original Fabric Canvas.dispose. No Fabric source or algorithm is modified.
- Named host click handler is removed on pagehide; destroy original editor, remove owned icons/styles. Constructor failure attempts destroy when an instance exists. Missing Canvas2D produces explicit unsupported fallback rather than simulated image. Partially failed constructors are not claimed comprehensively covered. Initial-image and crop-reload interruption races are explicitly covered by additional tests described below.

## Asynchronous image interruption fix
The original ImageLoader load continuation accessed destroyed canvas dimensions when a delayed Image.onload completed after pagehide. Both initial load and crop reload failures were reproduced against the preceding artifact; baseline error reports are preserved locally. The adapter still uses the original Fabric.Image.fromURL decoder, but checks a per-graphics disposed flag BEFORE assigning its result to canvas; pending promises are rejected on destroy with AbortError, and a late decoded Fabric image is disposed. A second guard protects the load continuation. Only AbortError is suppressed at original initial-load/crop UI boundaries; other errors are not disguised as success. This is not just an exception-catching workaround: the destroyed canvas is never mutated by the late callback. No Fabric file was changed. Tests hold a real pending Image.onload callback, destroy, then release it for both cases; errors/listeners/timers remain zero. Canvas/image decode are still mocked, so this proves lifecycle/state handling, not pixels.

## Verification and limits
Eight original-control tests cover +30 rotation three times to90, Undo60/Redo90, grayscale+Undo/Redo, crop enter/cancel three times, square/apply original rasterization/reload control flow, flip/history round-trip, and actual text-object creation through canvas events observed with original getObjectProperties. Also run the unmodified original Fabric applyTo2d algorithms: RGBA[30,60,90,255] -> grayscale[60,60,60,255] -> invert[195,195,195,255]. This numerical array result is real algorithm computation, NOT proof of rendered canvas pixels.

JSDOM Canvas2D/Image decode are mocks; no screenshot, native pixels, responsive layout, actual pointer geometry or visual acceptance. Tests count runtime eval/Function/Worker/fetch/XHR/WebSocket calls and Image.src attempts; only original local SVG and test-marked runtime canvas results are permitted. Parsed image src attributes are inspected too. Function is trapped with a Proxy retaining its prototype so legitimate instanceof tests remain valid. All tracked global key/pointer/resize handlers and timeout/interval/RAF counts reach zero after pagehide, including active text-edit cursor cleanup. Separate Canvas-unavailable test verifies an honest fallback. No live network is needed.

## Licenses and actual public covered source
The root application is MIT; this does **not** override embedded licenses. Color-picker's full license includes Chris Kempson's Base16 palette MIT terms. ImageTracer1.2.4 retains its Unlicense notice. Fabric's top-level MIT is accompanied by a specific MPL-2.0 notice in **src/util/path.js**, for SVG arc code adapted from Mozilla by Andrea Bogazzi. Fabric source is UNMODIFIED. Do not describe the entire combined bundle as MIT-only.

The following real UTF-8 source files are published alongside this preview:
- [Fabric4.2.0 preferred path source, with original Mozilla/Andrea/MPL notice](public-source/fabric/src/util/path.js)
- [Complete unmodified Fabric4.2.0 browser source](public-source/fabric/fabric.js)
- [MPL-2.0 full text](public-source/fabric/MPL-2.0.txt)
- [Fabric MIT notice](public-source/fabric/LICENSE-MIT.txt)

Fabric4.2.0 npm gitHead was independently verified as bddb9449adab5416333c7f16a143f7a7dff1dda4. Exact original preferred source is also available at https://github.com/fabricjs/fabric.js/blob/bddb9449adab5416333c7f16a143f7a7dff1dda4/src/util/path.js . These public copies are an actual covered-source offer, not a hypothetical missing ZIP. They are source/reference text, not extra runtime assets or new catalog components. No Fabric modifications require separate changed-source disclosure. All full notices are in notices/ and LICENSE.txt and must travel with the application. The original source form including notices is preserved; do not replace it by a function excerpt.

Other original/editor adaptation source, lockfile, patch and tests are available only in the local source/ handoff; no public download of those is implied. That local-only statement expressly excludes the public MPL-covered files linked above.

Build npm ci --ignore-scripts, node build.mjs (official esbuild platform binary required). Test node test.mjs, node test-unsupported.mjs, node test-interrupt.mjs, and CASE=crop node test-interrupt.mjs. Package python package_delivery.py. The framework UI is original; host fixture and explanatory text are adaptation. Visual review pending.
