# Two real local Exodus workbenches

## CodeMirror Merge

MIT, original fixed source `codemirror/merge` @ `3bc269331394691dcce9784ba8c93b318d15535f` (package source version6.12.1). Original TypeScript files are directly compiled unchanged, not a screenshot or recreated diff algorithm. Other CodeMirror and Lezer packages are pinned in package-lock. Native MergeView provides both editable documents, change chunks and individual revert buttons. New wrapper adds a JSON fixture, apply-all, reverse direction, draft undo/redo, and paste-input panel. The default sample is not an executing Agent config. Editor content is never executed, uploaded or persisted. Both sides can be edited in place; normal CodeMirror JSON syntax highlighting does not require a Worker.

## JSONEditor

Apache-2.0, ©2011–2026 Jos de Jong; LICENSE and NOTICE retained. Original official npm `jsoneditor@10.4.3` minimalist distribution used unchanged; source repository snapshot `85dfeee8129f2a47ca67d8475327f9e3716797d5` also version10.4.3. Source snapshot and npm bundle are separate provenance entries: no claim that the npm distribution is a byte-reproducible build of this snapshot. Original distribution SHA256 and registry integrity are recorded.

Official minimalist variant excludes Ace code editor, AJV schema compiler and color picker. Selected modes are **tree**, **text**, **preview**, with search, sort, history and JSON syntax checking. No JSON Schema validation, code-mode promise or AI feature. Transformation wizard is disabled to keep a compact, well-tested surface. Schema data never added. New wrapper handles invalid input without discarding the current model; reset installs valid text before changing mode, avoiding an upstream mode-switch error on invalid JSON. All mutations remain in current-page memory. Copy action selects text for manual Ctrl/Cmd+C; no clipboard permission needed.

The original SVG icon sprite is a text SVG, retained in source. Build inlines its escaped text in one CSS custom property and replaces local relative sprite references. This is a local textual resource adaptation, not a wrapped binary upload or externally fetched image. Fonts are system fonts. Original editor layout receives a scoped light green shell, but all library editor interactions are original.

## License accounting

Full primary licenses and Apache NOTICE are included. Direct runtime dependencies and licenses are listed. JSONEditor's vendor bundle contains nested dependencies; these are explicitly listed even when invisible to esbuild. License-bearing original distribution comments include Ajax.org BSD attribution. `javascript-natural-sort@0.7.1` ships an explicit MIT source header+package declaration but no standalone LICENSE: original Jim Palmer/Dave Koelle attribution is retained, with the standard MIT terms labeled as supplied terms, not fabricated upstream text. Dependency license-source versions are not falsely claimed as exact versions embedded in a prebuilt bundle.

## Excluded spreadsheet

Jspreadsheet CE was researched, not delivered. Its `@jspreadsheet/formula@2.0.2` executes `new Function(...)`; formulas cannot run under host's default CSP. It was removed from package dependencies. No unsafe-eval permission, alternate execution path, fake formula result or disabled formula sheet was substituted.

## Host / validation

Complete explicit head/body, exact runtime.css/runtime.js tags, independent IIFEs, default allow-scripts iframe and default CSP. No media permissions, same-origin, popup, Worker, network, filesystem, backend, persistent storage or dynamic-code permission required for tested modes. Only mount chosen detail. User-entered URLs may be displayed as text/links by JSONEditor; the host's sandbox/CSP remains responsible for blocking external navigation, and this wrapper does not initiate any network action.

Tests disable page eval, Function constructor, Worker and fetch while the actual built IIFEs run. Both mount with zero blocked calls. Merge individual chunk action, apply-all, undo/redo, draft editing via paste panel, reverse direction and reset pass. JSON tree value mutation+undo, text/preview modes, invalid JSON handling, formatting, search, result synchronization and text selection pass. CodeMirror geometric Range APIs are stubbed for JSDOM. These are structural/state tests, **not** browser CSP enforcement, actual key input/IME, caret/scroll quality, mobile layout or pixel acceptance. Browser visual QA has not run.

Source ZIP contains originals, wrapper sources, exact package lock and build/tests. It is local only until published; do not attach a fake download link. Nothing was written to main atlas or remote.
