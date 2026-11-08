# Kibo · 8 compound interaction families

MIT source shadcnblocks/kibo at 3d63cdb15b79d972e3dc38a10997987672f9b263. Existing candidate IDs kibo:calendar/deck/dialog-stack/tree/table/gantt/image-crop/editor are upgraded, not duplicated.

Original packages and official examples retained in source/originals. Actual source components render the previews; no lookalike reimplementation. Build: from source, npm ci --ignore-scripts; node build.cjs; npx @tailwindcss/cli -i styles.css -o runtime.css --minify. Place generated assets beside HTMLs. Test paths refer to local workspace/JSDOM and need adjustment elsewhere.

## Adaptations
- Workspace imports resolved to bundled originals, docs-only Fumadocs styles removed, original theme retained with standalone host. Next Image changed to img for self-contained rendering.
- Calendar/table/gantt use seeded synthetic Faker data, never real people. Remote avatar/deck placeholders replaced by original geometric SVGs. Crop starts with the same original SVG, and supports user-selected local files.
- Deck gets previous/next buttons via original controlled index API, retaining original swipe mechanics. Calendar/crop get missing accessible labels.
- Gantt unbound create/marker/view/link actions removed or disabled. Task move and remove retain original local-state handlers; no clipboard/navigation or real project effects.
- Crop keeps original ReactCrop and canvas pipeline. Fixed upstream scaling recursion to actually reduce canvas dimensions; data-URL fetch replaced with pure in-memory byte-size measurement. No external fetch, upload, download or persistence.
- Editor retains original Tiptap document and tools. Default content has no remote media. Links and forms cannot navigate externally.
- Two legacy lodash Function("return this") global fallbacks replaced with globalThis in reproducible build step for strict CSP. No eval, remote worker or importScripts dependency. All HTML has explicit head for host CSP insertion; allow-scripts sandbox is sufficient, no extra privileges requested.

## Validation boundaries
Build, JS parse, dependency asset closure and eight DOM mounts passed. Per-family interaction evidence is in source/interaction-results.json. Pointer drag geometry, animated composition, complete keyboard behavior and actual canvas output pixels remain unverified visually. Image crop DOM test only proves local image load initializes a selection, not that raster pixels are correct. ProseMirror test uses real document transactions; toolbar placement and full editor features require browser review. Do not represent these limits as a visual pass. No backend functions are implied.
