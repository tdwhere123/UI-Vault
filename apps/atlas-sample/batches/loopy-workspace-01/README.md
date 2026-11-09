# LOOPY local feedback-system editor

Original ncase/loopy v1.1 editor and two-node fixture, fixed 2d8e13f0a006f4024f27ad1712d7f9c2c1ad7cd9. Node/edge/label editing, original pen/drag/eraser tools, Play/Stop/Reset, original feedback propagation and speed controls. No server.

- Canvas geometry/draw-command fixture only; no native pixels, real pointer handwriting recognition or performance acceptance.
- Original PNG toolbar/slider/control glyphs replaced by authored text and CSS, custom cursor/balloon tooltip skin omitted. Original system font unchanged.
- URL/file import, file download, save-link/history, external examples/howto/GIF and embeds disabled; no remote simulation, AI or persistence.
- Original two-node/positive-negative relationship fixture, drawing/dragging/erase/label tools and model signal propagation retained. Automated tests exercise actual input handlers and original model methods, not a full native drawing gesture.
- Hidden pauses original update+draw loops while retaining model; disposal clears frame resources and DOM handlers. Reduced-motion CSS removes transitions; explicit Play still runs the original simulation.

Licensing: root CC0-1.0; embedded MinPubSub carries its own 2011 Daniel Lamb MIT header and official complete MIT text, not covered merely by root CC0. balloon.css is not emitted. No npm runtime dependencies.
