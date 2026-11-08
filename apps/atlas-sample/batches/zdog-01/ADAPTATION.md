# Two little houses / Zdog

Source: https://github.com/metafizzy/zdog/tree/dde8684be686bc6d3cbedb6be49875c0a03a14c0

One spatial illustration interaction family. The original official houses model, geometry, palette, pseudo-3D SVG projection engine and drag-rotation implementation are retained. No sphere, globe, carousel or task-grid reinterpretation. This is a visual/spatial design reference, not a functional architecture planner.

The original engine dist/zdog.dist.js is included unchanged. The houses model is kept in its original source order; original fullscreen/autospin loop is replaced with a local responsive SVG host and event-driven redraw. There is no RAF, timer or background rendering at all. Local additions: Front / Reverse / Perspective presets, elevation slider and arrow-key rotation. Native engine drag events still compute model rotation; user actions update actual projected SVG path data, not a replacement screenshot. No downloaded imagery, binary assets, fonts, network service, persistence or eval.

Lifecycle: hidden documents end active dragging; pagehide removes original drag start/move/end handlers, keyboard/control handlers and local resize/visibility/cancel listeners. Host detail should lazy-load this runtime, with a static cover in the main catalog. HTML has an explicit head for host CSP injection.

License qualification: upstream explicitly declares MIT in package, README and dist header, but no standalone complete LICENSE is shipped even in its official npm package. Full standard MIT terms are supplied transparently with original Metafizzy copyright; see THIRD_PARTY_NOTICES.txt. This is not represented as an upstream LICENSE file. The original generic house drawing contains no external artwork or separately credited/licensed character/material.

Verification: delivered runtime parses and is inserted into opaque-origin JSDOM. Real SVG renderer creates 54 paths. Tests assert changed actual SVG geometry for native drag and view presets, elevation numeric rotation, keyboard rotation, resize dimensions, drag release/hidden-stop, pagehide cleanup and zero RAF/network calls. Geometry is fixed in tests. No browser screenshot/pixels, actual pointer hit-testing, touch behavior or aesthetic/visual acceptance is claimed. Visual status remains UNVERIFIED.
