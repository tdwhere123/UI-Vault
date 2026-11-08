# RecogitoJS · Local report annotations

One text-annotation scene, not an image annotator, rewrite menu, or new editor implementation. Original RecogitoJS selection/highlighting and original Recogito client-core popup/comment/tag UI and default CSS are preserved. The short report and surrounding reading-room shell are original synthetic fixtures. No real personal data or account.

Select words, add a comment and tag, save, click the highlight, use the original comment Edit menu, revise or delete. Clear removes local annotations. Data exists only in memory. Relation-mode UI, remote annotation loading, authentication and sharing are not exposed. There is no document search feature or persistence claim. The read-only JSON shows actual W3C quote/position annotation data.

## Exact source
- @recogito/recogito-js 1.8.4, npm gitHead `de87f14d0d4bf6c4be5939d5c843cb722080b22a`, https://github.com/recogito/recogito-js/tree/de87f14d0d4bf6c4be5939d5c843cb722080b22a . npm `src/index.jsx` and root LICENSE exactly match fixed raw source.
- @recogito/recogito-client-core 1.7.9, npm gitHead `fd65c890d147f68f95fdf9d18522f71de450ad2a`. npm Icons.jsx exactly matches fixed source. Both projects BSD-3-Clause, Pelagios Network.
- Rebuilt from original source using official Preact compatibility aliases. Dependencies satisfy original ranges but are locked to the actual package-lock; this is not the historical upstream prebuilt dependency graph. 53 actual runtime packages identified from nonzero esbuild output contributions, with full notices. Core is vendored and listed separately.
- Main package's original default compiled CSS is copied unchanged (20,114 bytes); no font face, URL or import resources. No Google Fonts from upstream development page.

## Minimal adaptations
- Core Editor: retain original MutationObserver reference and disconnect on unmount (upstream only disconnected ResizeObserver).
- SelectionHandler/enableTouch: remove mouse/touch/selectionchange listeners and cancel pending selection timeout on unmount.
- RelationsLayer: retain/remove original resize handler, cancel queued RAF and initial recomputation timer, destroy connections. Relation mode is not exposed, but layer initializes in the original component and must be cleaned.
- TextAnnotator unmount delegates these lifecycle disposals. Original highlighting/selection/editor logic unchanged.
- No dynamic evaluator or remote assets in selected runtime path. The unused original `loadAnnotations` API contains fetch but is not called/exposed by the scene. No specious network-free-source claim.

## Icons and attribution
Original SVG geometry unchanged. `ChevronDownIcon`, `CloseIcon`, `CheckIcon` are IcoFont `simple-down`, `close`, `verification-check`, explicitly attributed and CC BY 4.0 in fixed core Icons.jsx; official https://icofont.com/license corroborates that SVG icons (not font files) are CC BY 4.0. Original upstream does not identify the historical IcoFont release version; no precise release is asserted. IcoFont / Ollyo attribution retained.
`TrashIcon` path exactly matches Font Awesome Free 5.15.4 `svgs/regular/trash-alt.svg`, Fonticons, Inc. Official 5.15.4 LICENSE applies CC BY 4.0 to SVG icons. Full CC BY 4.0 and official Font Awesome license included in notices/icons. No font binaries included. The default theme and icons are not all BSD merely because the core package is BSD.

## Verification and limits
`node test.mjs`: actual DOM Range + original mouseup -> original popup, comments/tag create/edit/delete, hostile literal text, exact existing-range re-selection preserves ID, cancellation, repeated open and cleanup. `node test-interrupt.mjs` and `CASE=touch node test-interrupt.mjs`: pagehide before pending selection render / delayed touch selection completes, zero surviving observers/global listeners/timers. Saved evaluator bootstraps bundle while runtime eval, Function, network, Worker, storage, clipboard and Image.src are trapped. No such calls observed.
Range rectangles, ResizeObserver and layout are mocks. Real pointer drag-selection, popup geometry, touch device behavior and pixels have not been visually accepted. Tests prove original handlers/state, not browser layout. Generated quote/position anchors verified; persisted reloading/restoring annotations is not exposed or claimed.

Complete original npm source, adapted source, lockfile, build/tests and evidence are in the local source directory, not a promised public source download. Public notices accompany this preview. No ZIP link is offered.
