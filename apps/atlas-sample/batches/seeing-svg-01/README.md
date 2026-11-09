# Seeing SVG Filter · fixed original fixture

Upstream 9am/seeing-svg-filter is MIT, fixed revision `58cdcc6ecd09320d7299824be03830275f301129`. Runtime includes separately licensed D3 and Prettier dependencies; complete distributed license texts are in LICENSE.txt, including Prettier bundled-dependency notices. Original logo filter credits Dirk Weber (https://codepen.io/DirkWeber/pen/EjNEaE); retain that attribution. The public original Pen and CodePen official public-Pen MIT policy were verified; copyright year is not inferred.

## Original implementation retained
Original grid, SVG logo, Parse button, Sankey layout (1280×800), per-node shadow SVG preview, dependency hover highlighting, source selection and parser/preview graph algorithms retained. Upstream's remote D3 and dynamic Prettier imports replaced with fixed local bundled packages. The original background SVG is embedded as a local data URI. No images were invented or fetched.

This edition intentionally accepts only the original complete fixture. The textarea is read-only; parsing uses the trusted bundled constant, not its value. File input/import/drop listeners are removed. Strict XML parsing, forbidden active/resource elements, attribute references, fixed style text, and prior-stage input references are checked before Parse becomes usable. CLICK_NODE accepts only frozen payload objects registered in the current draw’s private WeakSet, also matching its SVG and graph identities. Prior-Parse real payloads and forged active/resource-bearing SVG payloads are rejected. Source stages now show their actual generated preview SVG and matrix rather than leaving the original blank code pane.

## Lifecycle and tests
Actual ui-vault-538 composePreview, unchanged CSP, exact runtime.js/runtime.css markers. 26 reachable original graph nodes, all selection panes tested, 100 real repeated Parse operations (constant 10 owned listeners), retained old node clicks inert, hidden Parse/selection paused, resume, pagehide/atlas:dispose cleanup. Real late rect attribute setter failure, early module throw, and partial module customElements.define failure show a visible stop fallback and remove owned listeners. No timers, rAF, workers, network, eval or dynamic Function dependency. Reduced-motion disables CSS transitions, hidden/exit also disable them.

After final exit all application listeners are removed including detached graph delegates. JSDOM-internal nwsapi document listeners are identified by allocation stack, not broadly exempted by event type. Custom-element registration itself lives for the iframe document lifetime; it has no timers/global listeners and disappears with the iframe.

## Limits
DOM and filter-reference structure checks do not verify rendered filter pixels, typography, or responsive visual appearance. Browser visual QA not run. The original effect is not a simulated raster screenshot. This is one full fixed-fixture inspector, not a general SVG editor.
