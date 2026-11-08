# SpatialBoard adaptation
Upstream: https://github.com/hishamk/spatialboard
Pinned commit: 50f098aeceeb09cf55e27f2ba0fd0611bc461cda
License: MIT; upstream notice retained in LICENSE. Runtime dependency notices retained separately.

Original SpatialBoard engine, nodes and example fixtures are bundled, not a redrawn mock. Added only a minimal host for the official whiteboard exemplar. All board images are original inline SVG fixture art.
Session-only: custom-node persistence removed; canvas-preference storage now safely catches opaque-origin storage access. Cross-tab transport disabled; collab uses two independent original Yjs peers on one page, with original simulated latency/offline/reconnect and malformed-edge example. No actual server or multi-user service is contacted. Removed unavailable tab-sync instructions and external example navigation. Tools requiring external/persistent content omitted from toolbar.
Remote Google Fonts and binary Excalifont disabled; system sans-serif fallback changes typography. The original hand-drawn shapes/ink are retained. Added initial fit-to-content for custom dataflow and whiteboard.

Validation: successful production IIFE build, node --check; JSDOM opaque-origin mount without React/runtime errors or fetch; original number + button propagates 24 to 28 and reset restores 24; whiteboard reset restores official fixture; collaboration offline/reconnect and malformed-edge refusal validated. DOM uses canvas/geometry stubs, not pixel verification. No real browser visual QA, pointer drawing/drag geometry, export or accessibility audit. These remain unverified.
