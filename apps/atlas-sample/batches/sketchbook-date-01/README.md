# Sketchbook · original Controlled DatePicker
Fixed original source: https://github.com/SarthakRawat-1/sketchbook-ui/tree/1377765abf1f67afb72b05104b6d1946e9136cc1

The original Controlled Story's stateful picker and selected-date readout are retained, with original DatePicker, useCalendar, SketchProvider paper/noise SVG, sketch primitives and original global CSS. No new imitation calendar. Root MIT and five actual runtime dependency notices are complete in LICENSE.txt.

## Local-only scope
Dates use the browser's local calendar, not UTC. Initial state is today's local date, exactly as upstream Controlled. No calendar event, server, storage, network or account connection. Font remains the original `Caveat, cursive` stack, but no Caveat font is fetched; device cursive fallback will differ. Original local SVG filters remain; no image/font binary or encoded binary is bundled.

This Controlled example has no min/max bounds. The upstream hook compares Date timestamps directly (not normalized calendar days); Today bypasses bounds if a separate bounded example is configured. We do not include that bounded story or claim it is corrected. Adjacent-month cells are originally disabled. No Arrow-key roving date-grid navigation exists upstream. Escape closes and returns focus. The original inline × span is not keyboard focusable; the popover's native Clear button is available. Native browser Enter/Space default activation and tab order remain unverified, not inferred from JSDOM clicks.

## Minimal disclosed adaptations
Narrow the barrel to actual used modules and remove Storybook-only imports. Add a small scope notice, visible focus outlines and reduced-motion CSS overriding popover/hover motion, without redrawing the calendar. ResizeObserver callbacks ignore notifications after cleanup; partial observe initialization failure disconnects the observer before rethrowing; genuine callback exceptions propagate via state into the error boundary. An outer synchronous bootstrap boundary catches module-evaluation errors before the host initializes, removes precisely tracked EventTarget registrations made during evaluation (including root delegates), restores native registration methods, and renders a paragraph fallback without creating a div. This is not a blanket asynchronous resource tracker. Initialization/render failure uses a single terminal cleanup path with visible fallback; listeners are removed and no hidden-page event can revive a failed tree. Missing host also yields a visible failure rather than an invisible exception.

Hidden pages unmount and reset to today's date on return; this is explicitly not persistent selection. Final pagehide/atlas:dispose clears the tree, observers and listeners. The exact React selectionchange callback registered during createRoot is removed on final close/failure, never on temporary hide. System theme or font preferences are not stored.

## Verification
Commands from workspace root:
`node ui-sketchbook-datepicker-adapt/build.mjs`
`node ui-sketchbook-datepicker-adapt/test.mjs`
`python ui-sketchbook-datepicker-adapt/pack.py`

Test uses actual ui-vault-535 composePreview, not a reconstructed substitute. Real DOM checks cover local February 2028 leap day, previous/next and December year crossing, disabled adjacent day, onChange readout, clear/today, Escape focus, outside click, repeated open-close, hidden reset, early disposal, post-dispose ResizeObserver callbacks, actual early module createElement(div) failure with injected window/document/root listener cleanup, real observer-constructor render failure, partial observe initialization failure and late callback failure. Test-only date and ResizeObserver fixtures are isolated from production. Global target/type/callback/capture listener ledger (all targets additionally checked in early-module failure), timers and RAF settle to zero; network/Worker/eval/Function/storage traps are untouched. Local date scenarios also run at local 00:05 under America/Los_Angeles and Asia/Kolkata (CLOCK_HOUR=0 CLOCK_MINUTE=5). Exact clock/TZ evidence is retained locally in midnight-*.json.

JSDOM is not browser visual or physical keyboard acceptance. Handdrawn filter pixels, actual element measurement, narrow-screen popover placement and exact glyphs are unverified. Source and local modifications/build/test evidence are retained locally, not falsely advertised as a public ZIP. No screenshot or cover created.
