# Fancy Components · standalone previews

Upstream revision `f9f62c61207b2dd3210476dd98af3c9a5be24094`, MIT © Daniel Petho. The six component implementations and their local hooks remain byte-identical to the archived upstream; CSS box/carousel is one family with a two-tab demo shell.

- Preserved original ElasticLine, CSSBox, BoxCarousel, ElementAlongPath, Screensaver and MediaBetweenText interaction logic.
- Original source and original examples remain in `../upstream`. Adapted source is in `../src`.
- Demo photography is replaced with four locally authored inline SVG geometric studies. No third-party photos are redistributed. Remote fonts use system fonts.
- Media demo link is inert and its wording now says "shape" to match the replacement artwork.
- Two decorative debug icons in the carousel demo use plain circle glyphs instead of Lucide, avoiding a missing optional dependency. Debug toggling behavior is unchanged.
- Tailwind CSS is compiled locally; React and Motion are bundled into one IIFE. No account, API, analytics or remote asset connection is required. All five HTML entry points use the same runtime assets.
- Build via `npm run build` from the parent directory. Exact installed dependency versions are in package.json; a fresh dependency installation was not tested. Browser rendering/interaction QA is NOT complete.

Scopes: elastic-line (pointer stretch and spring release); css-box-carousel (draggable 3D cube, carousel controls); svg-path-motion (path-based movement and hover slowdown); screensaver (bouncing image bounds); media-between-text (hover reveal). Original browser APIs and viewport behavior remain; resource checks are not visual acceptance.
