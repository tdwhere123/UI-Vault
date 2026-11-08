# TimelineJS · A local research story

One original TimelineJS narrative-reading interface, not a task planner. Original title/story slide layout, dated markers, time scale, zoom, next/previous, first/last and keyboard navigation remain. The research notebook is original fictional text, not personal history. No media, photos, audio, external data, upload or persistence.

## Source and public source offer
@knight-lab/timelinejs 3.9.13, npm gitHead `bdc928fe8cbf621575c8e335b197aadb0cfe1526`, https://github.com/NUKnightLab/TimelineJS3/tree/bdc928fe8cbf621575c8e335b197aadb0cfe1526 . Main license MPL-2.0, Northwestern University Knight Lab. This is a **restricted local text-story edition**, not the complete arbitrary-input TimelineJS API/distribution.

All actual covered JS/JSON inputs and required modified LESS source are publicly provided under [public-source/](public-source/), itemized with hashes in [PUBLIC-SOURCE.json](PUBLIC-SOURCE.json). Original notices remain. The same directory includes main.js, selected-icons.json, build.mjs, assets.mjs, package-lock.json and package.json: install locked build dependencies, run `node build.mjs` and `node assets.mjs` to rebuild the original UI with the documented changes. No local ZIP stands in for the MPL source offer. Changed-file descriptions are in [CHANGES.md](CHANGES.md); deleted uncertain-license code and embedded upstream keys are not included as reverse patches.

## Restricted inputs and source changes
Only the fixture's explicit unique IDs intro/observe/prototype/trial/revisit are accepted; missing/duplicate IDs fail instead of generating slugs. Dates are supplied as original year/month/day objects; the original TLDate/time-scale engine remains, but arbitrary date-string parsing is removed. URL/Google/CSV import/export paths and media dispatch are removed; a supplied media URL is rejected, not rendered as a placeholder. Default legacy API-key fields are removed. Fonts and themes cannot auto-load in this configuration; official Georgia/Helvetica system-font LESS is compiled locally. Analytics/Soundcite settings are explicitly off, with no observed network requests.

The scene requires modern browser **native inert**. The global wicg-inert polyfill import is omitted, not misrepresented as retained. Original keydown instance lookup is corrected from global self.current_id. Added destroy() retains/removes global listeners, disconnects IntersectionObserver, clears preloading/tick timers and cancels the original Morpheus animation queue; asynchronous initialization checks the disposed flag. Original core animation/scale algorithms are not replaced.

## Icons and other licenses
Only five original selected SVG-path records are shipped, not the mixed icon font or its unverified brand glyphs. IcoMoon Free zoom-in/out/circle-up paths match official source exactly; CC BY4.0 selected with full terms and attribution. Google Material left/right chevrons are original Timeline integer-grid derivatives: compared with official24px outlines scaled1024/24, vertical offsets−22/−10 and maximum per-axis vertex discrepancy2/3 unit. Historical IcoMoon import release is unknown, not claimed exact. Original Timeline path geometry is preserved; no font binary conversion/base64 is used.

Full licenses in notices/INDEX.md include DOMPurify, Morpheus, Penner/KeySpline, Leaflet, LazyLoad and Zepto, not merely root MPL. Browser.js says based on Leaflet but gives no release; official0.7.7 BSD text is supplemental provenance, not a claim of exact source match. Morpheus official README states MIT without a separate full LICENSE; supplied standard MIT text is explicitly supplementary.

## Verification and limitations
Tests exercise real original DOM controls, active/inert slide state, marker selection, zoom width change/restore, keyboard, repeated navigation, a150px content-width resize change, and pagehide mid-animation. A separate test exits before local asynchronous initialization resolves. Runtime eval/Function/network/Worker/storage/clipboard/resource-tag attempts are trapped; zero observed. Global listener accounting distinguishes target/type/callback/capture. No surviving tracked observers/timers/listeners.

JSDOM layout/offsets/observers/native inert are mocked. Real layout, SVG icons, touch behavior, focus navigation, frame appearance and pixels **have not been visually accepted**. No AI-generated recommendation or real research claim is made.

`node test-negative.mjs` directly bundles the actual adapted validation modules and verifies missing/duplicate IDs yield invalid config/no duplicate append, and media URLs are rejected. This does not expose arbitrary input in the public scene.
