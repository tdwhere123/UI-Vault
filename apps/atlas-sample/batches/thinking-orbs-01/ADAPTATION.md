# Thinking Orbs state explorer

MIT © Jakub Antalik. Source revision de85557ca220332586d070d8788c0e1d6e877a0d. All original orb engine, presets, theme and React component files unchanged. A new local demo shell selects the nine original states, pauses/resumes and switches theme; both official 64px and 20px presets are shown. Counted as one multi-state family, not nine entries. No microphone, model, account or network connection. The original offscreen/hidden pause, reduced-motion logic and DPR cap remain.

Build uses local esbuild and React. JS parsing and all nine state transitions checked in JSDOM with a Canvas stub; this verifies DOM/runtime control flow, not actual Canvas pixels or browser visual fidelity. Visual review pending. Canvas rendering uses the real original engine in the delivered runtime, not the test stub.
