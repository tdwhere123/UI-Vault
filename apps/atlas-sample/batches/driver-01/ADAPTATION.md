# Driver.js spatial anchor explainer
Source https://github.com/nilbuild/driver.js/tree/a75736ab1c375b4a14276105da9ad2aab04ff67e/packages/driver/src
Original driver/overlay/highlight/stage/popover/event implementation and CSS bundled unchanged. MIT notice retained.

This is intentionally not another sequential onboarding form. Existing Cult intro-disclosure renders a Dialog/Drawer of slides; this source computes the actual target getBoundingClientRect and an SVG cutout, positions a nearby explanation and tracks target geometry. Added original local brief/evidence/decision fixture, muted theme and three direct anchor choices inside each popover. There are no Next/Back steps, remote tour service or completion analytics. Highlighted text input, review checkbox and local action remain usable. Local approval means only a visible local state change, never a real submission.

No external fonts/images/network, eval/new Function, encoded binary or dependencies. System fonts. Runtime should only mount on an opened detail; main gallery uses a static cover. pagehide destroys the active engine/overlay.

Verification: JS parse, real-runtime JSDOM with deterministic geometry stubs: real active-element class, SVG hole, direct anchor change moves the hole, resize recomputes hole, live text/checkbox/action inside highlight, Escape/close/pagehide removes overlay and active classes. errors=[] and fetch=0. Synthetic geometry is not real visual or hit-test validation. Actual browser responsive alignment, scrolling geometry, animation feel, focus trap and mobile accessibility remain pending.
