# Shiki Magic Move code evolution

Original upstream v1.3.0 commit 1df35024cb01f02cdec6f8cb69f69fc8b6c66519; annotated tag e7b3e545eb4eb8a22c0a485a6a12dbb8cdc2cc1e. MIT ©2022 Anthony Fu. Main v1.4 is now an alias, deliberately not used as implementation provenance. Original src and official playground demo retained in the local delivery source/originals, not a hosted source archive.

Actual original React ShikiMagicMovePrecompiled, syncTokenKeys and MagicMoveRenderer retain token matching and CSS transform/enter/leave interpolation. No substitute animation or hand-redrawn code renderer. Host adds one original four-step TypeScript loop-to-reduction walkthrough, previous/next/reset, autoplay/stop and mount controls. Examples are display-only, never evaluated.

Build-time Shiki 3.13.0 creates local token steps. Runtime bundle does not contain Shiki highlighter, WASM, language grammars, network fetching or eval. Build steps: npm ci --ignore-scripts; node prepare.mjs; node build.mjs. source/test.mjs specifies external JSDOM dependency path.

Minimal cleanup adaptation: renderer.dispose cancels active DOM animations, resolves previous transition promises and clears retained map; React wrapper calls dispose on unmount and suppresses post-unmount onEnd callback. Host cancels playback interval and pagehide unmounts root. Original renderer itself uses CSS transitions/getAnimations, not timer/RAF scheduling.

DOM tests cover all four steps, boundaries, previous/reset, playback/stop, rapid navigation, unmount during playback and pagehide. getAnimations and animation.finished are mocked, so no claim of pixel, actual CSS motion, GPU or browser visual acceptance. Animation is real original implementation; visual review remains pending.

All runtime dependency notices and build token-generator notices included. No services or files uploaded. The local delivery retains originals, adapted code, token fixtures and scripts. This published directory provides actual runtime assets, test evidence and full license notices; it does not claim a source ZIP download.
