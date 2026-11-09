# Color picker copy feedback minimal correction

Current text adaptation; original source archive retained as history. Shared runtime uilayout-next-03 also contains responsive-header, animated-logo-footer and product-card4; their code bytes are untouched. HTML/CSS, HSV/HEX and pointer algorithm unchanged. No permission grant, native clipboard call, remote write, screenshot or new dependency.

`patch.py` checks exactly one production minified handler and replaces only that handler. `raws-color-picker.tsx` contains the matching preferred-source correction, taken from the published source archive. This is a precise production patch, NOT a claimed full reproducible rebuild of the historical bundle. Integrator must publish the source correction/diff with changed runtime.

`node test.mjs`: exact handler extracted from patched production runtime, unavailable clipboard / rejected Promise / resolved Promise. Success notification occurs only after resolve, errors give manual HEX-field copying instructions. VM syntax parses entire runtime. These are production-handler unit tests, NOT full DOM/native clipboard or visual verification. No unhandled rejection in tested branches. Host teardown during an in-flight clipboard request is not newly lifecycle-tested.
