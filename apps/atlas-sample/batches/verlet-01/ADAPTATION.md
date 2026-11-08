# Translucent cloth / Verlet.js

Fixed source: https://github.com/subprotocol/verlet-js/tree/3293d409aafe3adfd56811849b9168cb84599c28

One independent material-interaction family, not 400 separate components. The 20×20 particle cloth uses the original Verlet engine, distance/pin constraints and original examples/cloth.html renderer. Local pull changes patch color and opacity; the original red/blue fabric appearance is retained. The entire upstream engine is kept unchanged, except removal of its inline base64 source map. It has no network runtime dependencies. No website scripts, advertisements, remote fonts or binary assets are used.

Original adaptation: cream/dark local stage, responsive layout, pause/resume/reset/tug controls, arrow-key center tug, pointer bridge for touch and responsive coordinate conversion. Four pins and fabric particles use the original nearest-entity/drag/constraint logic. State is memory-only; no backend or actual fabric/engineering model. This is a material design reference, not a claimed Exodus productivity feature.

Lifecycle: initial reduced-motion preference starts paused; manual resume is available. Hidden documents cancel RAF; visibility resumes only if not manually paused. Pagehide cancels RAF and removes input/listener handlers. Preview is intended for lazy-loaded detail only, not continuous catalog cards. While paused, keyboard/button tug advances a single relaxation step; resume for live dragging.

Verification: node --check; actual delivered runtime inserted in opaque-origin JSDOM. Canvas drawing is mocked and bounding rectangle fixed, not a screenshot/browser test. Asserted 400 particles, original 361-cell fill loop, gravity movement, center tug, original pin dragging via synthetic pointer events, pause, arrow key tug, reset, resume, hidden-stop/visible-resume and pagehide cleanup. No script errors or fetch calls. This checks live physical state and scheduling, not pixel quality. Real browser visuals, real hit testing/scaling, touch capture and frame performance remain UNVERIFIED.

Integration adjustment: explicit <head> wrapper added to the published entry for the atlas CSP-injection contract. Runtime JavaScript/CSS unchanged.
