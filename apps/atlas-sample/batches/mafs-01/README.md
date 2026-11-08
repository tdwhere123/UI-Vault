# Mafs Bézier construction

Original engine and official docs/components/guide-examples/examples/BezierCurves.tsx at commit e74a3ef465f4ddc98704814d2ae18b73a6cd9dae. MIT. One scene, not separate variants.

Retained original four useMovablePoint controls, vector lerp construction, Bernstein polynomial, Plot.Parametric curve and remaining dashed segment, useStopwatch/easing. Adds local y sliders for keyboard accessibility (original setPoint), explicit Play construction and Stop, numeric t readout, mount/unmount and pagehide teardown. Removes original unsolicited 500ms autoplay timer. Running flag prevents stopwatch reset from overwriting user slider t. Stop keeps displayed t but resets underlying stopwatch, so Play restarts rather than resumes. No fake pause claim. Original SVG point keyboard controls remain available.

Original upstream core.css only; no font.css, LaTeX or external fonts. Direct export barrel avoids unused components. One import-only adaptation in vendor/debug/ViewportInfo.tsx changes import of vec from parent barrel to ../vec, avoiding a cyclic root import that pulled in unused KaTeX. The engine implementation is otherwise unchanged. Actual bundle metafile confirms no KaTeX, computer-modern, binary font or network resource. The delivered runtime excludes these; installed build-time packages are documented separately.

Build: npm ci --ignore-scripts; node build.mjs. Test uses JSDOM path listed in test.mjs. Tests verify original Plot paths change with t/control values and original movable circle cx changes on ArrowRight; playback, slider interruption, stop, unmount and pagehide cleanup. SVG bounds/ResizeObserver mocked; real pointer/touch dragging and pixel quality remain visually unverified.

No formula eval, model, network calls, audio, backend or persisted data. Published runtime and complete dependency notices accompany this preview. Complete originals, adapted source, tests, manifest and checksums are retained in the local work directory; no hosted source ZIP is claimed.
