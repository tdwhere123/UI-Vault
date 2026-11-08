# AstryX: recovered original templates, independent previews

## Provenance and exact version boundary

- Repository: https://github.com/meta/astryx
- Original 21 page templates and their doc files restored at `b9ad7bf521a057bed914d2d85dc249314d937328`. Immutable original checkout: `../../upstream`; recovery manifest: `../../candidates.json` (paths and SHA-256).
- MIT © 2026 Meta Platforms, Inc. LICENSE accompanies each preview.
- That repository snapshot declares package version **0.7.12**. The npm registry returned 404 for core 0.7.12 and reported latest 0.7.11 at retrieval. These previews deliberately use **published core/theme/build 0.7.11** as a compatibility adaptation, with original 0.7.12-snapshot page source. Do not label this a fully version-identical reproduction.
- Official `astryxStylex()` compiles the actual component source and page-level StyleX. No substitute UI or screenshot simulation was created.

## Adaptations

- Canvas's single `/template-assets/moody-scene-vertical-1.png` photograph is replaced with an authored inline SVG landscape. The editor, layers, inspectors, SVG controls, document tabs and state logic remain original.
- AI chat, AI landing, IDE and Kanban page implementations are copied unchanged. A small standalone Theme/LayerProvider shell is derived from the official template-viewer structure.
- Figtree web fonts are not downloaded. Theme fallback system fonts apply. There are no remote CSS imports, external CSS URLs or external image references at initial mount.
- Original static demo text such as “Saved” does NOT mean data is saved. There is no backend, account, model call or filesystem execution.

## Actual interaction scope and limits

- Canvas: original editing controls and document state; DOM check confirms New document adds a tab. Pixel rendering, drag coordinates and export still require browser verification.
- AI chat: original messages, composer, artifact/document panels, menus. Original `onSubmit={() => {}}` is a demo no-op, not an AI assistant.
- AI landing: original chips/category choices/suggestions; DOM check confirms Writing opens suggestions. Send is the original no-op demo handler.
- IDE: original panels, file selections and tabs; DOM check confirms History switches content. It does not execute code or provide a real filesystem.
- Kanban: original pointer drag and move-to-column menu code. Add task, sort/filter/search and two menu actions are upstream demo placeholders, not completed features.

## Loading and measured sizes

Each template has an independent subdirectory and its own `runtime.js` / `runtime.css`. Open only the chosen template; no need to load the other four. `bundle-sizes.json` reports exact raw/gzip sizes:

- Canvas: JS 1,155,161 B (357,558 gzip), CSS 189,736 B.
- AI chat: JS 1,129,146 B (354,015 gzip), CSS 185,356 B.
- AI landing: JS 854,679 B (265,936 gzip), CSS 166,129 B.
- IDE: JS 853,917 B (265,626 gzip), CSS 173,318 B.
- Kanban: JS 846,876 B (263,306 gzip), CSS 158,878 B.
- Theme + LayerProvider + React baseline alone: JS 307,861 B (94,773 gzip), CSS 117,119 B. Thus the baseline is not itself 1 MB.

The prior all-five combined bundle was 1,526,670 B JS; it is retained only in `../delivery` for comparison, not this publishable set. Baseline measurement output is outside this directory.

## Verification

All five builds, JavaScript parsing and JSDOM mounts pass. Three representative state interactions pass. JSDOM uses observer/media-query stubs; this is not a real-browser visual or pointer acceptance test. Real visual QA remains pending. Keep lazy detail-only loading and release the iframe on exit.

Reproduce from the parent preview folder with `DEMO=canvas-editor npm run build` (change slug for the others). Exact dependency lock is `../package-lock.json`. Install scripts were disabled during dependency retrieval; no copied upstream lifecycle script was blindly run.
