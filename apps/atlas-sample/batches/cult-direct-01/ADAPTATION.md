# Cult UI standalone batch

Five existing candidate families, using archived MIT upstream revision d71b1428b811c2779d46ea41b7ef8c9f9c9991c2. Original component files are unchanged. Official examples are used except the MorphSurface wrapper which shows one original component instead of the multi-example documentation page. No backend, login, financial account, message transmission or real security check is connected. Visible sample figures are upstream synthetic demo data.

Original global theme tokens preserved; documentation-only Tailwind plugins (dither/typography/animate) omitted. System fonts replace site fonts. No external images/fonts/media used. Compiled CSS includes actual original component utilities and inline styles.

Build: esbuild 0.25.12 IIFE + Tailwind 4.3.0, React/ReactDOM 19.3.1, motion 12.38.0, lucide-react 0.475.0, clsx 2.1.1, tailwind-merge 3.6.0. These are the installed compatible preview build versions, not claimed upstream lock reproduction.

Checks passed: JS parse; CSS no remote imports/URLs; all HTML entries reference runtime.js/runtime.css; all five actual React components mounted in JSDOM without runtime errors. This is not visual browser QA. Clipboard action requires browser support and is not validated. SecurityCheckpoint is only a decorative synthetic UI, not a live CAPTCHA/security mechanism.
