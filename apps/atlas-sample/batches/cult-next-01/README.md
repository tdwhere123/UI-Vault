# Cult next · 3 interaction families

Original Cult UI, MIT, revision d71b1428b811c2779d46ea41b7ef8c9f9c9991c2. Existing candidates cult:onboarding, cult:prompt-library and cult:intro-disclosure are upgraded, not duplicated. Full original component/demo files are retained in source/originals.

## Boundaries and exact adaptations
- Onboarding uses the original full headless demo: feature slides, role/goal selection, tips and completion. It does not create an account or download an app.
- Prompt library retains original search, category grouping, create dialog and selection logic. Clipboard call is removed; selected text appears in the existing result panel with an honest local-selection label. Lucide Library/Plus replace Hugeicons.
- IntroDisclosure retains step, completion, skip and responsive flow. localStorage is explicitly replaced with a module-local Map and a local change notification, so hide/reset work without allow-same-origin. No settings survive reload. Original debug labels corrected to temporary memory and actual false=hidden semantics. Fixed an upstream mobile Skip-all wiring bug by invoking the existing close handler rather than only its notification callback. Router refresh is a no-op because the local change notification refreshes state. Navigation is blocked. Toasts render into a local status element.
- Missing product screenshots replaced by original geometric SVG artwork, explicitly labeled as replacements in the host. No remote images, workers or data requests. Next Image uses a local img adapter. Browser/OS permissions are not requested.

Build from source/: npm ci --ignore-scripts; node build.cjs; npx @tailwindcss/cli -i styles.css -o runtime.css --minify. Put assets beside HTML files. All HTML includes explicit head for CSP. Tests reference current workspace/JSDOM and should have their paths adjusted elsewhere.

DOM validation is not a browser visual review. Motion geometry, touch/swipe, actual layout and complete accessibility remain pending. Tests trap network, clipboard and localStorage access. Full state-transition results are in source/interaction-results.json. No external form submissions, account changes, saved preferences, model API or GitHub writes.
