# Assistant-ui Elements · 18 distinct component families

Source: assistant-ui/assistant-ui, MIT, revision eb65bd4558b769550093003c95e5867ad0ec8eba. Actual upstream component/demo sources and dependency primitives retained in source/originals, adapted versions in source/src.

## Build
From source/: npm ci --ignore-scripts; node build.cjs; npx @tailwindcss/cli -i styles.css -o runtime.css --minify. Copy runtime.js/runtime.css beside the HTML files. Host selects demo via body data-demo; no source rewriting into a lookalike.

## Adaptations and boundaries
Standalone React host, neutral sand theme, original animation/shimmer styles, Base UI primitive import paths. Gallery screenshots replaced with clearly labelled original local SVG artwork. Memory demo gets local forgotten-ID state (upstream callback was no-op). Other selected demos preserve upstream fixture logic. Network anchors and form navigation blocked; React local form events remain functional. No AI/model/tool execution, real publishing, auth permission, microphone, or external form side effects. Approval text is synthetic. No arbitrary HTML/network assets loaded.

Comparison is a static rich display. Artifact, plan, todo, file tree are upstream scripted state displays, not real backend actions. Conversation search uses fixed hits. Document reference has no actual PDF. Model pricing is upstream fixture data, not verified current information.

## Verification
18 mounts passed; 13 interaction checks passed (see source/interaction-results.json). Network/mic entrypoints were trapped in DOM tests and zero calls occurred. JS parse, CSS self-containment, HTML asset checks passed. JSDOM tests stub browser geometry/observers; they do not verify visual appearance, touch, all accessibility, or every branch. Browser visual review remains pending.

Tests currently reference the local workspace and existing JSDOM package; adapt paths to rerun elsewhere. Every demo has a reset button. Runtime is shared but each HTML is independently loadable; embedding via srcdoc requires rewriting relative runtime asset paths as usual.
