# Cuicui · actual bottom action menu example

Original fixed revision c7db00f2e98753c277f1aec6e316520038f4e0a0, damien-schneider/cuicui, `packages/ui/cuicui/application-ui/action-menu/advanced-bottom-action-menu/default.variant.tsx` and `custom-tabs-content.tsx`. All original source and root license Git blobs match the official fixed tree. One existing `cuicui:advanced-bottom-action-menu`.

Actual default source renders Account and Password triggers plus explanatory content and close buttons. It does NOT run the large MenuRoot/Vercel toolbar that appears only as commented code. We preserve its full actual JSX/state and original Radix/Motion tabs rather than enabling that unrelated commented design. No account fields, password entry, authentication, saving, backend or profile edits. The Chinese frontend clearly calls this local navigation only. Original unused icon arrays/imports were removed; no Lucide glyph is emitted or counted as a runtime dependency.

Close really returns the original two triggers, so no invented reopen feature is needed. Original automatic activation on focus is retained: focusing a trigger opens it and removes both triggers until Close. Therefore this is not claimed to behave like a persistent two-tab keyboard strip; native Tab/Space/Enter default activation and post-Close focus restoration are not browser verified. Close is tested by DOM click, not mislabeled native keyboard.

Original class strings and motion animation (opacity/translateY,200ms) remain. Tailwind4 compiles them with explicit neutral background/foreground/muted/ring tokens, so no undefined semantic colors; system sans font only, no remote media/fonts. A local reduced-preference subscription wraps the original scene in MotionConfig. Reduced mode disables transform animation, not necessarily opacity; changing preference remounts default triggers. Hidden unmount also resets the example. These small host behavior changes are disclosed, not represented as original UI functionality.

## Lifecycle
Original Motion shared reduced-preference listener and document projection resize listener outlive the last component. Two narrowly scoped source patches remove their exact callbacks on pagehide/atlas:dispose/terminal failure, without changing animation algorithms or indiscriminately removing iframe listeners. Root delegation and selectionchange registrations are recorded precisely at createRoot and removed at final exit, not temporary hide. Local matchMedia subscription handles partially successful add failures. Existing callbacks and old nodes cannot restore a disposed tree. No network, storage, clipboard, Worker or eval.

## Verification
`node ui-cuicui-pair-local/advanced/build.mjs`
`node ui-cuicui-pair-local/advanced/test.mjs`
`python ui-cuicui-pair-local/advanced/pack.py`

Actual ui-vault-545 composePreview/currentCSP. Seven modes: normal, initially reduced, early disposal, actual initial DOM failure, late real render failure after hidden, matchMedia construction failure and partial subscription failure. Normal/reduced each exercise100 alternating Account/Password openings with Close, original Radix focus activation, preference remount, hidden/old node paths, and terminal open-content disposal. All tracked EventTarget registrations, timers and RAF settle to zero; blocked API attempts remain zero. Selectors/style internals are initialized before listener accounting so JSDOM housekeeping is not misclassified as application registration.

DOM and source checks do not verify native keyboard defaults, actual animation pixels, CSS narrow layout or browser enforcement of CSP. Browser visual QA not run; no screenshot or cover. Complete root MIT and exact positive-emission package notices in LICENSE.txt; Motion reexport wrapper and unused imports are not falsely counted as runtime. Tailwind and local host/hook notices separate. Seven public text files; originals/patches/build/tests stay local, no public-source ZIP promised.
