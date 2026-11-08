# Fancy remaining families: standalone previews

Original Fancy Components revision `f9f62c61207b2dd3210476dd98af3c9a5be24094`, MIT © Daniel Petho. Original files are preserved in `../upstream`; adaptations in `../src2`.

- `physics-attractor-system`: original cursor attractor and gravity implementations, with controls selecting original attractor and original draggable-gravity demos plus a remount/reset button. The attractor example uses 48 rather than 150 bodies for bounded CPU work. Physics forces, collision, pointer and drag algorithms are unchanged.
- `parallax-floating`: original component and pointer-depth animation unchanged. Eight original demo image references now use locally authored inline geometric SVGs. The nonfunctional "Download" text in the original demo is replaced with "移动鼠标", not made into a fake download.
- Necessary bundler adaptation only: `require("poly-decomp")` becomes an imported `decomp` namespace in both physics component files. All other implementation bytes match upstream.
- Added official registry dependencies: matter-js 0.20.0, lodash 4.17.21, poly-decomp 0.3.0, svg-path-commander 2.1.10 (plus its dependency). They were installed using `--ignore-scripts`; dependency lock is `/tmp/ui-fancy-deps/package-lock.json`. Licenses included in THIRD_PARTY_NOTICES.
- Exact runtime is a local IIFE + compiled Tailwind CSS. No remote assets/account/network calls are required. System fonts replace unavailable web fonts.
- Build: `vite build --config vite2.config.mjs` from the parent folder. This build config uses local dependency aliases; a fresh portable install was not independently verified.

Build, JS parsing, dependency/resource checks and JSDOM mount checks passed. Physics JSDOM uses a stub canvas drawing context and does NOT validate physics appearance or canvas rendering. Real browser visual and pointer QA remains pending. Use detail-only lazy loading and release its iframe when leaving the detail.
