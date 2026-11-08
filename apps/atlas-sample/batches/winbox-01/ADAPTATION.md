# WinBox local task-room adaptation
Fixed upstream: https://github.com/nextapps-de/winbox/tree/bbb453aca2c3c5122c06ae0c6446eea1730d9142
Version 0.2.82. Apache-2.0 full license and attribution retained.

Original src/js/winbox.js, template.js and helper.js are bundled unmodified. Original src/css/winbox.css forms the base; local theme adds rounded windows and a muted backdrop. Original src/img/{min,max,close}.svg icons are inserted directly as SVG markup into window controls; stylesheet image URLs removed, fullscreen browser-permission control hidden. Added labels/keyboard activation to standard window controls. No remote assets, iframe pages, evaluation, base64 or binary wrapping.

Task-room host, checklist, filterable reference shelf and scratchpad are original local fixtures, not claimed as official WinBox examples. They demonstrate the real window manager, not a static mock. State is in memory only, survives individual window close/reopen and is lost on page reload. No actual task system, file system or service is connected. Closing page invokes window cleanup. Only load runtime for an opened detail; catalog cover must remain static.

Verified: production IIFE bundle, node --check; JSDOM real-runtime mount with geometry stubs; three windows, checklist update, reference filtering, minimize/restore/maximize/unmaximize/close/reopen, scratchpad retention, synthetic mouse drag and corner resize, and pagehide cleanup. errors=[] and zero fetch requests. Geometry stubs and synthetic input do not certify actual pointer hit regions, mobile behavior, visual polish or accessibility. Real browser visual acceptance is pending.
