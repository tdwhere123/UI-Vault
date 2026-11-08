# Assistant-ui Elements batch 2 · 20 distinct families
MIT assistant-ui/assistant-ui revision eb65bd4558b769550093003c95e5867ad0ec8eba.

Actual original component and demo source kept in source/originals; src changes only import resolution/host. Fixtures are upstream demos, not newly drawn lookalikes. No model runtime, external form navigation, microphone, API calls, real authorization or scheduling. Source URL strings are display data. External anchor navigation is blocked. All HTMLs share standalone runtime.js/runtime.css.

Build from source/: npm ci --ignore-scripts; node build.cjs; npx @tailwindcss/cli -i styles.css -o runtime.css --minify. Put resulting assets beside HTMLs. Tests reference the local workspace/JSDOM dependency; change paths when rerunning elsewhere.

20 DOM mounts passed. Detailed interaction results in source/interaction-results.json. Clipboard copying (terminal after completion) and visual/keyboard/touch quality are not verified. JSDOM geometry/observer stubs do not stand in for visual review. Browser visual review pending. Scripted terminal/retrieval outputs and static message attachments are explicitly identified, not claimed as live tools. Attachment buttons do not open/upload real files. Model fixture names/prices are illustrative, not verified facts. Exact per-item boundaries are in manifest.
