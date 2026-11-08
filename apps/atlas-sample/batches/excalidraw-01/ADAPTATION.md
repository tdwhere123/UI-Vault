# Excalidraw — offline local board

One original editor family, not separate counts for shapes/tools. Source: official Excalidraw v0.17.6, commit `0dbd2a39319d41fda37b2945dea0dcbd58d6a564`. The npm release metadata gitHead and Git tag resolve to this same SHA. Original MIT license is reproduced in LICENSE. Dependency versions and their full terms are in THIRD_PARTY_NOTICES.txt; production graph includes some tree-shaken source. No original Excalidraw images, fonts, or user documents are shipped.

## Original implementation and local changes

The original Excalidraw editor, rough drawing/geometry, scene model, selection/property UI, text, arrow bindings, freehand, grouping, history, canvas navigation and rendering implementation remain. The thin host adds a local object counter, explanatory header, and cream canvas initial state. User drawings exist only in the current iframe memory, not a real shared board or saved document. Closing/reloading loses them. No backend, collaboration, account, persistent storage or network integration.

This deliberately restricted edition disables image/scene import, export/download, system clipboard, embedded content, links, libraries, Mermaid, external help and non-system fonts. Those features are **not claimed as working**. Internal copy/paste styles remain because they use editor memory, not system clipboard.

Changes to original source:
- Set default and sole font selector to system Helvetica (fallback Arial/sans-serif). Original handwritten Virgil/Cascadia font binaries are not included; this is visibly different typography.
- Keep original UIOptions to turn off image/load/export/save actions. Add action-manager gates for loadScene, saveToActiveFile, saveFileToDisk, saveAsImage, copyAsPng, copyAsSvg, copy, copyText, cut, paste, addToLibrary, toggleShortcuts and hyperlink, including keyboard/programmatic/render paths. ContextMenu now checks the same isActionEnabled gate.
- Remove library sidebar trigger and Mermaid/embeddable menu entries; refuse embeddable tool activation. Mermaid module is a local disabled message, image-resize entry throws a specific disabled-feature error, i18n resolves bundled English only. This removes corresponding dynamic module paths.
- Capture system clipboard/drop events and direct import/export/clipboard shortcuts. Prevent onLinkOpen and native anchor clicks. No reliance on sandbox alone to suppress user-facing actions.
- Remove dormant font-face URLs from SVG-export helper. Replace original base64 raster checkerboard tiles with pure CSS repeating-conic-gradient; no encoded binary resources are shipped. Other original icon SVGs remain readable text.
- On pagehide unmount React and remove host handlers. A scoped iframe listener ledger removes remaining original module-level window/document listeners, then restores the original add/remove methods. This cleanup wrapper is intended only for this standalone preview, not arbitrary embedding in a shared document.

Original source remains copyright its authors. Local host prose/background and these restrictions are adaptations, not an official Excalidraw distribution or a fidelity claim. react-remove-scroll-bar 2.3.8 declares MIT but omits the full text in its npm package; its notice transparently supplements the author's full official repository MIT text at fixed commit 8ca9ba5ea52de03308fe8ced94f7b159a44d28ff, not a claimed original package LICENSE. That repository commit still labels its package 2.3.7; its text is a same-project official supplement to the 2.3.8 npm MIT declaration, not proof of an exact 2.3.8 source match. Additionally, all 24 files in the official npm 2.3.7 dist tree were independently compared against installed 2.3.8 dist and are byte-identical (SHA-256 per-file evidence retained with build records). This does not change the recorded installed version. Pako's zlib notice is included in addition to its package MIT license. No NOTICE files are present in the bundled Apache package distributions.

## Loading and verification boundary

Three runtime files load offline as UTF-8. HTML has explicit head and the exact runtime.css/runtime.js loader contract. No CSP expansion: use host default CSP (connect-src none, no workers or unsafe-eval; img-src data: blob: was already allowed). No remote assets, font binaries or binary-wrapping workaround. Tested production bundle is an IIFE, with no test-only API exposure.

**Visual acceptance pending.** No real browser canvas rasterization, pixel comparison, native pointer/touch drawing, text-input IME, mobile gestures or actual geometry hit testing was available. Tests use JSDOM with fixed element rectangles, Canvas2D/Path2D stand-ins, and observer/font APIs. These are explicit substitutes, not a rendered canvas test. The original pointer drawing algorithms are preserved, but synthetic drawing under these substitutes was not reliable and is not reported as passing.

What did pass: real original scene conversion/API state insertion and undo/redo keyboard actions; dimension retention; rectangle/ellipse/text/arrow fixture bindings; group/ungroup keyboard state; Helvetica-only property UI; forbidden shortcut and actual text context-menu exclusion; blocked paste and link actions; production original toolbar mount without test globals. The scene insertion tests exercise the real model/history, **not native drawing gestures**.

Instrumented fetch, XHR, Worker, eval, Function, window.open, clipboard read/write and browser storage attempts counted zero on tested paths, including attempts whose errors might be swallowed. After pagehide and 2.2 seconds, pending tracked timeouts/intervals/RAF, active observers and added global listeners were all zero; no JSDOM/runtime error events. This demonstrates the exercised paths, not an exhaustive proof of every upstream branch. Static bundle scans and package notices supplement, not replace, native browser acceptance.

No external action, upload, real schedule, financial transaction, clipboard transfer or persistence is performed. Disabled entry points are intentionally unavailable. Do not represent this restricted preview as a full Excalidraw installation.
