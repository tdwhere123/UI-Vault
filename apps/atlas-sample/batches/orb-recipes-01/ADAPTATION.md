# Orb UI local interaction recipes

Source: https://github.com/exprmntl/orb-ui at f3b96072c14b6f814f0edd20f5fd73063963d773, MIT. Three substantive interaction recipes, not three color variants: push-to-talk composition, reversible guided setup, and document questions with local citations. Original recipe TSX and library render/state logic are preserved.

No provider adapters, credential config, server/API routes, audio files or network libraries were included. These are official fixture-based simulations. The UI explicitly labels simulated microphone/transcript/response states. No recording, speech synthesis, paid model call, account creation or external message send occurs.

Adaptations: standalone host, headings, original recipe CSS minus its docs/blog stylesheet import, a restrained background and centered orb. System font fallback; no external assets. Library and recipes are included as text source.

Verification: IIFE build and JS parse, metadata confirms no adapter/API/server modules, no CSS imports or remote URLs. Real React transitions tested in JSDOM while microphone/getUserMedia, fetch, WebSocket, XHR and AudioContext were instrumented to throw: zero calls. Tested sample dictation, cancellation, local add message, error; onboarding listening/speaking/thinking/local apply/undo; fixture answer/citation/stop/no-delayed-overwrite/error.

Visual limitation: radial canvas drawing uses a mock context during DOM tests; actual pixel rendering, animation quality, reduced motion, keyboard/pointer capture and responsive appearance need browser verification. The circle theme uses its original CSS/DOM renderer. No screenshot or visual acceptance is claimed.

Build dependencies: React/ReactDOM 19.3.1 (upstream peer supports >=18), esbuild 0.25.12. Build using npm install then npm run build. Original complete upstream lock is not reproduced; exact preview dependency versions are listed.
