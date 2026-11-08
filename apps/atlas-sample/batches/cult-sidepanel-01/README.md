# Cult SidePanel context summary

Cult revision d71b1428b811c2779d46ea41b7ef8c9f9c9991c2, MIT. Existing cult:side-panel ID upgrade. Exact source/demo paths are archive-internal, not assumed GitHub repository paths. Original full SidePanel and ResizablePanel definitions retained, plus original official video demo for provenance only.

Original component design retained: 44px asymmetric right corners, closed160px/mobile and260px/desktop, open97%, original useMeasure height spring and MotionConfig/ResizablePanel. Minimal source change adds width var(--side-panel-closed-width) to closed variant; CSS variable mirrors original responsive proportions so closing restores width. Other visual structure/animation unchanged. No imaginary missing ResizablePanel: original file defines it later; prior screening read error was corrected.

Host uses original renderButton/children API for an original local document summary, explicitly replacing official YouTube content. No react-player or fake video/audio; no real connected document or backend. Not a modal drawer or execution workflow. Trigger aria-expanded/controls and Escape/Return support focus restoration. Local host offers unmount/remount and pagehide root cleanup.

Tests exercise repeated open/Return/Escape cycles, section existence, expanded state, open97% style, focus restore, no modal, remount closed and disposal. ResizeObserver/geometry mocked: tests do not prove actual160/260px closed pixel width, responsive height, interpolation or visual layout. Browser visual review pending.

Build npm ci --ignore-scripts; node build.mjs; node node_modules/@tailwindcss/cli/dist/index.mjs -i styles.css -o delivery/runtime.css --minify. External JSDOM location in test.mjs. Complete original/adapted source and notices included locally, no claim of public downloadable source. No network/storage/API.
