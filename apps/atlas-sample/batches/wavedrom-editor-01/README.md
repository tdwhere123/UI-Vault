# WaveDrom timing editor

Existing `wavedrom:timing-diagram-editor`. Fixed official editor, exact original CodeMirror3.11+ distribution and four original skins. Actual WaveDrom3.7.0 rendering core, safe JSON5 timing data, original clock/dat/req/ack specimen. Original Rotate Layout and Proportions helpers unchanged except isolated memory storage. Menu text retained without unavailable raster icon files. No empty substitute waveform, static screenshot or fake export.

Real CodeMirror change redraws original SVG; invalid input preserves previous valid SVG and reports the error. 50k characters/64 top-level lanes/200 wave symbols and bounded object complexity, plain labels, no custom SVG/HTML/function expressions. Standard CSP unchanged, no eval or Function permission.

Tests: actual ui-vault-547 composePreview, visible five-lane original waveform, real change redraw, malicious expression and SVG-label rejection, rotate/proportions, hidden deferral/resume, terminal old callback replay and full EventTarget/timeout/interval/RAF cleanup. CodeMirror focused during testing to exercise polling/blink lifetime.

- Controlled JSDOM SVG getBBox/DOM geometry, not native font metrics or visual pixel verification.
- Original default timing signal editor retained; advanced custom SVG/HTML labels and non-signal reg/assign DSL are deliberately not supported by the safe JSON5 input gate.
- Local view only; no file import/export, URL sharing, storage, network or service worker. Raster menu icons omitted in favor of explicit text buttons; system monospace font.
