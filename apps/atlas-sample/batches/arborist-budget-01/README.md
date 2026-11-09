# React Arborist · original Budget Tree
Original controlled budget demo from jameskerr/react-arborist, fixed demo commit b44e01af4907cab7cf0738288e25d09acdd0c4d0. Original CSS, 15 fictional rows, recursively derived USD folder totals and immutable move algorithm retained. Total is $3,175. No account, finance integration, storage or backend.

## Adapter differences
- Replace Next Link with offline explanation; preserve original Tree/Node and CSS Modules.
- Add labelled keyboard-accessible source/destination move, cancel-selection and reset controls. These use the same original move algorithm, but are clearly adapter additions, not upstream demo controls.
- Guard unknown or leaf parents, duplicate IDs, nested selections, negative index and destination inside dragged subtree. Invalid input returns original data rather than dropping nodes. Original Tree also rejects descendant drops.
- Minimal upstream DefaultContainer patch clears its module-level 600ms typeahead timeout on unmount. No algorithm reimplementation.
- Hidden documents unmount and **reset to original budget on return**. This preview does not preserve edits across hide or close. Final pagehide/atlas:dispose prevents remount, unmounts root and clears host. The exact React document selectionchange callback installed during createRoot is captured briefly and removed only on final disposal, never on temporary hide. Other listeners use original library cleanup.
- createRoot/initial rendering errors show explicit local failure text; React error boundary removes failed tree. No fake successful operation.

## Verification
node ui-arborist-budget-adapt/test.mjs
node ui-arborist-budget-adapt/test-failure.mjs

Original HTML5 DnD backend receives DOM dragstart/dragenter/dragover/drop/dragend events: Streaming moves into Entertainment ($35), and dragging Housing into descendant Utilities is rejected without losing rows or changing $3,175. Test-only rectangle and DataTransfer fixtures are used. This is not native drag/pixel validation.
Actual DOM also verifies close/reopen, ArrowDown selection, Escape dispatch, accessible movement/reset/cancel, hidden during drag, repeated re-mount, and final stale-control inertness. Pure-function guard tests separately verify invalid moves and immutable input. Final timers/RAF and global event ledger are zero. eval/Function/network/storage/Worker traps remain unused.
Five separate modes verify actual baseline composePreview embedding, early atlas:dispose, injected createRoot failure, render failure and move failure. Faults only exist in test bundles, never production. JSDOM does not enforce real browser CSP or prove geometry/pixels. Browser visual QA not run.

## Provenance and license
MIT root demo license plus complete actual bundled dependency notices are in LICENSE.txt; SOURCE.json lists exact versions and license origins. The fixed demo identifies react-arborist 4.0.1, while npm 4.0.1 has gitHead a4c7805719df5b5ec2d33aa49d27be18b42a08c4: these are explicitly separate sources, not a falsely matching SHA. 15 bundled runtime packages are tracked by esbuild input graph. No external image/font media; original emoji use device fonts. Native DnD, pointer geometry, small-screen width and visual rendering remain unverified.

Original files, patched source, build/test scripts, dependency lock, input graph and diffs remain local, not falsely advertised as a public source download. No screenshot or cover generated.
