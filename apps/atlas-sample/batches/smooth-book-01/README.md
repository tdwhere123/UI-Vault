# SmoothUI · original Stripe Book demo

Fixed source: https://github.com/educlopez/smoothui/blob/c45420a8523ec60a92f7724a2418ab83edaa1425/packages/smoothui/components/book/index.tsx
Original default demo: apps/docs/examples/book.tsx, StripeDemo, title “The art of smooth interfaces”. One existing `smoothui:book` entry, not several color/variant entries.

This is a decorative CSS book-cover showcase, not a reader, checkout or fake clickable product. The original complete default StripeDemo and Book JSX/styles/geometry are retained: width196px, perspective900px, original container-relative depth/title sizing, colored stripe, spine shading, front/back and page edges, and hover rotateY/scale/translation. It has no original button or keyboard action; none is invented. System sans-serif fallback replaces no downloaded font because no font resource is shipped. No pictures, remote assets or backend.

## Minimal disclosed adaptation
Book's two imports resolve original cn locally and use a local reduced-motion subscription hook instead of Motion's shared hook. This is explicitly a lifecycle/preference fix, not a claim the original Motion hook is unchanged. The local useSyncExternalStore hook reacts to preference changes, unregisters per-instance listeners on hide/unmount, and removes a partially registered listener if subscription throws. Motion is not bundled; all Book JSX, CSS class strings and numeric geometry otherwise remain byte-identical to source. Original demo exports remain local source, but only default StripeDemo renders.

Tailwind4.1.18 compiles original classes with neutral light tokens and system font. The host only adds padding, safe failure handling and lifecycle ownership. Hidden pages unmount; visible pages restore the same default book. Final pagehide/atlas:dispose removes precisely recorded React root delegation/global handlers and media subscriptions. Old retained nodes or media callbacks cannot revive it. Initialization/render/MediaQueryList errors display a terminal fallback rather than an imitation rendering. No network, storage, timers, clipboard, downloads, Worker or eval.

## Verification and limits
`node ui-smooth-pair-local/book/build.mjs`
`node ui-smooth-pair-local/book/test.mjs`
`python ui-smooth-pair-local/book/pack.py`

Actual ui-vault-541 composePreview and unchanged CSP are used. Seven modes cover normal/initial reduced motion, early disposal, initial div creation failure, late actual render failure on visible remount, matchMedia constructor failure and partially successful media subscription failure. Normal and initial-reduced runs each perform100 preference/hidden cycles. DOM tests inspect original title, perspective/width and actual hover-class removal/restoration; all EventTarget registrations, timers and RAF end at zero. Original source equality is checked after reversing only import changes. No-network/storage/eval/Function/Worker traps remain untouched.

JSDOM does not rasterize hover transforms, gradients, container queries, shadows, browser font metrics or narrow-screen geometry. These are not pixel/visual-acceptance tests; no screenshot or cover exists. This is honestly a static/hover design. Native pointer hover appearance and real browser CSP enforcement remain unverified.

Complete original MIT and all actual runtime dependency licenses are in LICENSE.txt; build-time Tailwind and the original local hook/host MIT are separately labeled. SOURCE.json records exact versions and hashes. Seven public text files only; original/build/test source retained locally, not falsely advertised as a public download.
