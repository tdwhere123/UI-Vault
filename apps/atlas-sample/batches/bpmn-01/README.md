# Local BPMN Modeler

Original bpmn-js Modeler UI: BPMN palette, context-pad appending, sequence flows, direct label editing and command history. A small original toolbar calls the original undo/redo/fit/import APIs; it is not an upstream demo-page reproduction. The original synthetic review diagram is a local non-executable BPMN process, not an automation engine. No execution, uploads, downloads, external XML or backend. Model edits stay in memory.

## Fixed upstream and license
bpmn-js 18.31.1, npm gitHead `e7b7435ed60f662b3d80caaefe5dccba5d3a4c75`, https://github.com/bpmn-io/bpmn-js/tree/e7b7435ed60f662b3d80caaefe5dccba5d3a4c75 . The root license is **custom bpmn.io license, NOT MIT**, Camunda Services GmbH. Complete license included.

Protected BaseViewer project-logo source and util/PoweredByUtil.js are byte-for-byte unchanged from the npm package. Visible logo, original hrefs, click handler and local attribution lightbox are preserved. No external-link click capture is installed. The existing host iframe sandbox may prevent new windows; no permissions are expanded and successful external navigation is not claimed. Website attribution: https://bpmn.io/ . Pagehide invokes the lightbox's original backdrop click to close it, without changing protected code.

## Text-only original glyph adaptation
BPMN palette/context icons originally use bpmn-font 0.13.0 (npm gitHead `f2e373668b4ea1473d651d08b51fe234717dac9c`). Its exact **SVG-font text** matches the bpmn-js bundled SVG byte-for-byte. It is not an upstream collection of independent SVG icons. The 109 original glyph path `d` strings are unchanged; a format adapter uses the original advance-width and `translate(0 850) scale(1 -1)` to convert font coordinates into ordinary SVG mask coordinates. URI escaping applies to readable SVG text, not binary data. No WOFF/TTF/EOT or base64 assets are bundled.

Font derivative and original glyph source remain **SIL Open Font License 1.1**, Camunda Services GmbH. No reserved font name is specified by its license; no new font is shipped. Original SVG-font text is provided as glyph-source.svg; complete OFL and attribution are in notices/bpmn-font. asset-results.json maps all 109 CSS icon names/codepoints to original glyph names and exact path hashes. This is source/geometry verification, not a pixel comparison.

## Dependencies and source
19 actual runtime npm packages identified from nonzero esbuild output contributions; exact lockfile and complete LICENSE/NOTICE files retained. path-intersection has MIT package license **and** an Adobe Snap.svg Apache-2.0 derivation notice; both apply. The complete standard Apache-2.0 text is separately included alongside its original NOTICE, copied from the htm package's complete standard text, not falsely described as a path-intersection package file.

The core Modeler is not changed. Host lifecycle adaptation cancels original snapping._asyncHide debounce on disposal. Pending local importXML is allowed to settle before one original destroy() call, while the host is immediately hidden and controls/listeners are stopped; late results cannot update status. Reentrant reset is ignored while a local import is pending. No catches pretend a failed render succeeded.

## Verified and not verified
`node test.mjs`: original import, context-pad task+flow append, Undo/Redo, label editing/Enter and Escape, palette placement/Escape, repeated reset, unchanged attribution lightbox, teardown mid-placement. `node test-interrupt.mjs` and `CASE=reset node test-interrupt.mjs`: pagehide during initial import and rapid repeat reset import, then no late model DOM or active tracked resources. Runtime eval/Function/network/Worker/storage/clipboard/Image.src traps observe zero calls. Required attribution links are deliberately retained and not navigated by tests.
SVG matrices, getBBox, canvas text measurement, elementFromPoint and observers are mocked. Actual browser pointer geometry, rendering, icon appearance, keyboard focus and pixels remain visually unverified. No claim of successful workflow execution or exact rendering follows from DOM tests.

Complete adapted source/build/fixture/tests/lockfile and original package source exist locally under source, not as a promised public ZIP or source download. Public glyph-source.svg is explicitly provided for transparent font-path attribution; this statement does not imply all local source has been uploaded.
