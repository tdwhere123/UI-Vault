# Cult forms · 2 original interaction families

MIT nolly-studio/cult-ui revision d71b1428b811c2779d46ea41b7ef8c9f9c9991c2. Original source and demos are retained. Only three AI-instruction icons are replaced with Lucide equivalents (Settings, SquareCheck, Plus); component state and interactions are unchanged. Hugeicons is no longer a runtime dependency. The host selects the official CustomViewsExample for family-drawer (one family, not five separately counted demos). Local profile fixtures are synthetic. Save/Update returns to menu and does not persist input. AI instructions modify local state, not actual model instructions.

Build from source/: npm ci --ignore-scripts; node build.cjs; npx @tailwindcss/cli -i styles.css -o runtime.css --minify. Copy assets beside the HTML files. HTML contains explicit head for host CSP. Runtime requires no eval, Function constructor, remote worker or imported media. External links and native form navigation are prevented without interrupting React local handlers.

Verified: two DOM mounts; AI instruction selection changes active count, custom instruction creation completes and is searchable; FamilyDrawer opens, enters Settings, returns, closes, and repeats twice. After each close there is no dialog or Vaul overlay node, body pointer-events is not none, and body overflow is not hidden. Tests stub browser geometry/ResizeObserver, so they do not prove visual animation, actual pointer dragging or all accessibility. Browser visual review remains pending. Test harness paths reference the current workspace/JSDOM dependency.

Package includes original MIT, bundled dependency notices and package metadata. No account access, real form submission, backend, upload or persistent settings. No GitHub writes were performed.
