# Cult UI direct batch 02

Four existing candidate families: Floating Panel, Dynamic Island, 3D Carousel, Collab Toolbar. Original component logic retained. ThreeDCarousel changes only its source of image URLs, replacing remote stock photos with locally authored geometric SVG data URIs. Floating Panel example placeholder and Collab Toolbar example avatars use the same original SVG art. No remote image/font requests remain. UI primitives are the original archived Cult button and badge. Original sources remain in originals/, adapted build sources in src/.

Official demos are used. Toolbar buttons and floating panel quick actions remain upstream demonstration actions, not connected applications. No real account, data submission or backend service. System fonts replace website fonts. Docs-only Tailwind dither/typography/animate plugins are omitted; original theme tokens and component classes are compiled.

Checks: IIFE parsing/build, CSS build, four JSDOM React mounts without errors, Floating Panel click opens its textarea, Carousel image click opens an enlarged-image overlay, all image sources are local SVG data URIs. No browser visual/animation/accessibility acceptance is claimed. Dynamic Island auto-animation and closed/reopened transitions still need browser checking.
