# miniPaint · isolated original local painting workspace

- Original miniPaint local painting, layer model, tool/dialog UI and undo/redo are retained. Blank initial canvas is drawable. No upload, download/export, clipboard import, cloud/media search or persistent storage; in-memory work is lost on close. Original file/help services are not started.

- Original default brush pressure=false uses an explicitly authored midpoint-quadratic smoothing helper instead of the unclosed StackOverflow-derived smoothing helper. Stroke appearance can differ. Original input sampling, layer/history pipeline and pressure=true variable-width drawing remain original. Standard viewport affine math, color conversions and throttle helpers are independently replaced; removed ambiguous helper bodies are NOT redistributed.

- Original bitmap icons/background assets and external fonts are not shipped. System text/symbols replace functional icons and image elements; CSS image URLs are removed. Original UI structure and tooltips remain, but original icon/font/visual fidelity is not claimed.

- Combined isolated preview is GPL-3.0-only due to actual AlertifyJS 1.14.0 GPL3 dependency; this does not relicense all UI-Vault. Original miniPaint MIT and other component notices remain applicable. Full editable corresponding source is supplied as natural UTF8 JSON parts plus extractor/build files. Standard MIT supplemental text for explicitly MIT-declared Quantize is transparently marked, not represented as an original standalone LICENSE.

- Pica uses original JS resize/unsharp math only; WebWorker/WASM backend registration disabled. Hermite original single-thread resize retained with unused Worker-Blob creation removed. Original glfx WebGL effects remain but depend on real browser WebGL; CPU fixture does not validate them. WebFont requests are replaced by inactive callbacks with system fonts.

- Each runtime chunk consists of complete statements and independently parses. Top-level function declarations are promoted to equivalent var/function bindings before module execution, then each script is guarded with fail-closed try/catch to clean early module failures and skip later scripts. No eval, binary encoding transport, CSP or sandbox expansion.

- Lean actual570 production compose tests cover original brush drawing, pressure toggle, undo/redo, insert/duplicate layers, hidden/resume, old nodes/late callbacks and complete EventTarget/task cleanup. Early Canvas failure is caught. CPU Canvas/JSDOM layout fixture only, no native browser, screenshots, visual/touch/IME or whole-tool-matrix acceptance.

- Actual default createPreviewLoader/cache all-or-nothing failure/retry/remount tested under unchanged8MiB budget; correspondence-source downloads are not inserted into runtime cache. No external model, backend or account is simulated.

## Corresponding source
Run `python extract-sources.py ./source-output` alongside all source parts/index. Install build tools esbuild 0.25.0 and acorn 8.14.0 in extracted directory, then `npm run build`. Runtime dependency source files/package metadata and complete Alertify src/LESS/Gruntfile are included; no network runtime is needed. The original supplied minified glfx matches its official hosted build after removing comment/whitespace/export adapter; preferred official glfx source and build.py are included. Build-output mangled local variable names can differ after sanitizing unused upstream API-key fields; no original API keys are distributed.

Copyrights/full terms: NOTICES.txt. Source origin and exact file hashes: SOURCE.json and source-index.json. Public source packs are UTF8 source text, not encoded binary assets.

## Post-575 preventive binding correction
Top-level function promotion now uses anonymous expressions assigned to their original outer variable, preserving self-rebinding semantics. All20 miniPaint functions were checked and none self-rebind; the failure found in a different application was not reproduced here. Core drawing/pressure/history/cleanup and final source rebuild tests pass. This corrects the existing575 item, not a new item.
