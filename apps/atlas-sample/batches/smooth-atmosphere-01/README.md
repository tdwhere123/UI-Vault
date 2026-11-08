# SmoothUI atmosphere · 2 distinct families
Source educlopez/smoothui at c45420a8523ec60a92f7724a2418ab83edaa1425, MIT. Existing candidates smoothui:orbital-image-wheel and smoothui:switchboard-card are upgraded, not new variants or duplicate IDs.

The original orbital physics, snapping, keyboard controls and light-state transitions are preserved. Orbit artwork is original local SVG rather than downloaded scene photography. The original switchboard scene shows one random light card and one fixed NEXT pattern, counted together as one family; responsive classes are relaxed so the moving light card remains visible on narrow previews. Neither is presented as a backend tool: these are spatial motion and ambient lighting designs.

Host adds stop/start/reset and pagehide unmount. Tests verify keyboard rotation, item snapping, real random light-state DOM progression, stop/start, and zero remaining interval/RAF after pagehide. Pointer inertia, rendered SVG artwork, lighting quality and browser responsive geometry remain visually unverified. No network, remote assets, eval, Worker, clipboard or account state.

Original sources, adapted source, dependency licenses and lockfile included. Rebuild from source/: npm ci --ignore-scripts; node build.cjs; npx @tailwindcss/cli -i styles.css -o runtime.css --minify. Put assets beside HTMLs. Tests reference this workspace and an existing JSDOM package; adjust local paths elsewhere.
