# Exodus animated icon family

## Provenance and honest counts

- Original: https://github.com/pqoqubbw/icons, fixed revision `4662fff2b60fdcf4751b32013606756caf7c4c26`.
- All **468 original TSX implementations** are preserved byte-for-byte under `../src/icons` and in the source archive. Animated wrappers are MIT © pqoqubbw 2024–2026.
- Lucide ISC and Feather MIT shape notices are retained in `THIRD_PARTY_NOTICES.txt`. Brand symbols retain their owners' trademark rights and are not endorsements.
- Conservative geometry audit found **466 base glyph contours**: `lock-open` shares its base paths with `lock`, and `lock-keyhole-open` shares paths with `lock-keyhole`. Their open state is achieved by a shorter drawn path length. Both pairs are grouped as selectable states on one base glyph card. The audit deliberately ignores stroke trimming when counting base shapes; the open-state appearance is preserved.
- **One icon family**, not 466 or 468 Agent pages. These are animated variants of the Lucide vocabulary, not automatically new designs compared with an already collected static Lucide family. Color/size/state changes add zero to the base-glyph count.

## Interaction and resource behavior

- The outer atlas should load this IIFE only when opening its detail. The gallery itself mounts at most **36 SVGs per page** across 13 pages.
- Default view prioritizes **76 Exodus-related base glyphs**. English and Chinese keyword search includes bots, reasoning, workflow/network, messages, voice, files/folders, terminal, completion, permissions and progress. No nonexistent `network` glyph is invented: workflow/router/route/webhook provide those meanings.
- A single central active name starts the original imperative animation on hover or keyboard focus. Leaving/blur stops it. Paging, search, visibility/page-hide and disabling motion clear active state. At most one icon is active, not 468 autoplaying animations.
- OS reduced-motion preference starts the gallery in static mode. Users can toggle motion explicitly. Colors and size are not separate catalog entries.
- Selecting a card opens its component name and fixed-revision original source link. Lock families expose closed/open state selectors there. Copy failure does not pretend success.
- No API, account, telemetry, web font or image fetch is required. The only external navigation is an explicit original-source link.

## Implementation

Original glyph TSX and `cn` helper are unchanged. The gallery shell, search/pagination model and small CSS are new. CSS includes the small `relative`, alignment and overflow utility set used by the original wrappers. No upstream Next.js site, prebuild font downloader or analytics dependency was run.

Runtime dependencies match the upstream declared versions used here: React/React DOM 19.2.9, Motion 13.1.1, clsx 2.1.1, tailwind-merge 3.6.0. esbuild 0.28.2 bundles the standalone IIFE. Exact lock is included in source archive. `npm run build` rebuilds runtime files.

## Verification and limits

- All 468 original source files byte-match the fixed upstream revision.
- All 468 components server-render into actual SVG; the base-contour audit is saved separately.
- Browser-runtime JS parses; DOM test covers all 466 cards over 13 pages, <=36 SVG and <=1 active state at every checkpoint, English/Chinese search, empty/reset behavior, focus/blur, hover, motion toggle, hiding and grouped lock states.
- Reduced-motion test passes.
- Tests are JSDOM/structural checks with browser-API and path-length stubs. They are **not browser visual or animation-quality acceptance**. Real-browser visual QA remains pending.

`manifest.json` records raw/gzip sizes and SHA-256. The roughly 1.05 MB JS bundle (about 210 KB gzip) includes every animation implementation but creates only a bounded page of live SVG/component instances. It is not preloaded by the main catalog.
