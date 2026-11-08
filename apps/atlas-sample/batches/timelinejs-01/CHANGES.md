# Source changes from TimelineJS3.9.13

- src/js/timeline/Timeline.js: remove remote ConfigFactory import, URL branch and exportJSON; local destroy/async-disposal guard, retained global handlers/IntersectionObserver; correct keyboard instance current_id.
- src/js/core/Util.js: remove general slugify after restricting ID assignment to fixed fixture IDs, not replace it with another slug algorithm.
- src/js/core/TimelineConfig.js: replace automatic ID generation/normalization paths with explicit fixture-ID validation and duplicate checks.
- src/js/date/TLDate.js: remove optional arbitrary string parseDate, parseISODate and ISO regular expressions. Original object/date-scale logic remains.
- src/js/media/MediaType.js: remove external media-provider registry; this edition rejects supplied media URLs and provides no external media feature.
- src/js/media/Media.js: remove default legacy API-key options.
- src/js/slider/Slide.js: omit document-wide inert polyfill; modern native inert required.
- src/js/animation/Animate.js: preserve Morpheus engine, add tracked frame cancellation/queue disposal for a single isolated scene.
- src/less/icons/Icons.less: replace mixed icon-font rules with local verified SVG icon styling. src/less/slider/TL.SlideNav.less and timenav/TL.TimeNav.less remove font character codes. selected-icons.json supplies only verified original glyph paths.
- No source with stripped keys, excluded ISO/slug code, arbitrary remote media or full mixed icon set is included as an original/reverse patch. Fixed upstream links identify the original work, while the publicly provided modified source is the actual build input.
