# Assistant-ui Elements batch 3 · 18 distinct families
MIT assistant-ui/assistant-ui revision eb65bd4558b769550093003c95e5867ad0ec8eba.

Actual original component and demo source kept in source/originals; src changes import resolution/host and explicitly disables thread rename in this sandbox. Fixtures are upstream demos, not newly drawn lookalikes. No model runtime, external form navigation, microphone, API calls, real authorization or scheduling. Source URL strings are display data. External anchor navigation is blocked. All HTMLs share standalone runtime.js/runtime.css.

Build from source/: npm ci --ignore-scripts; node build.cjs; npx @tailwindcss/cli -i styles.css -o runtime.css --minify. Put resulting assets beside HTMLs. Tests reference the local workspace/JSDOM dependency; change paths when rerunning elsewhere.

18 DOM mounts passed. Detailed interaction results in source/interaction-results.json. Thread rename button is explicitly disabled with a visible host notice and title, because native prompt is unavailable in the iframe sandbox. Tests confirm clicking cannot call prompt. Visual/keyboard/touch quality are not verified. JSDOM geometry/observer stubs do not stand in for visual review. Browser visual review pending. Scripted collaboration/progress/research displays and static shared conversation are explicitly identified, not claimed as live backend tools. Buttons with upstream no-op/unbound callbacks are listed in manifest. Model fixture names/prices are illustrative, not verified facts. Exact per-item boundaries are in manifest.
