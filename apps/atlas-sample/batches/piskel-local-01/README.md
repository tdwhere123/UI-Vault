# Piskel original local pixel animation workspace

Original complete local Piskel editor initializes its real model, tool/controller pipeline, 32×32 blank drawable canvas, frame/layer lists, color picker/palette, transformations, history, original embedded FPS animation preview and preferences/resize. Blank initial artwork is the original editable state, not a placeholder canvas. Single family/scene, not one item per tool or frame.

No cloud account, uploads, external image import, clipboard read, file downloads/export, persistent storage/backup or separate popup. Original file/storage startup services are not initialized; file-related settings/palette controls are gated; original preferences/palette state uses explicit in-memory storage. Existing drawing data is lost on close.

Original PNG/dataURL serialization is used solely for in-memory undo snapshots generated from the user-drawn canvas. No downloaded image/binary is encoded or uploaded; no PNG assets are shipped. This is original internal editor functionality, not a binary transport workaround.

Original root Apache-2.0 does not cover every asset/library. Shipped vendored runtime: jQuery1.8.0 with Sizzle(MIT), custom jQueryUI1.10.3(MIT), TinyPubSub0.7(MIT option), Bootstrap2.1.1 tooltip/popover(Apache2), Spectrum1.1.2 plus embedded TinyColor0.9.16(MIT). Exact available upstream texts/AUTHORS are preserved; TinyPubSub missing standalone terms are explicitly supplemented from its original MIT declaration, retaining actual original copyright.

No original PNG sprite sheets, IcoMoon fonts, Noun Project artwork or external fonts are shipped. Transparent authored system-text button symbols replace original icon assets, retaining original tools and tooltips; visual/icon/font fidelity is not claimed. Original UI structure/styles remain; binary CSS URLs are disabled and checkerboard is CSS.

Original current-color worker scan is executed locally with the original function and explicit context, no Worker/blob-script/eval. Only frame-colors is permitted by this adapter. History limited to80 states, frame creation to24 and layer creation to8; original maximum default dimensions constrained to128. Original painting/frame/layer/animation algorithms are retained.

Fixed upstream history serializer underallocated hidden-frame metadata, truncating PNG tails. The recorded minimal patch adds the missing field/data bytes; paired string accumulation/offset bugs are fixed. Actual PNG snapshot undo is tested, not replaced with a fake history engine. DrawingLoop gains cancellable stop; asynchronous snapshot completion/palette result and saved core methods cannot revive a disposed scene.

Actual570 composePreview and adapter/createPreviewLoader/default cache passed: 1549642 UTF16 bytes / 3 entries under unchanged8MiB. One natural standalone script below700KiB; original inert text/html template script elements remain intact, so no unnecessary chunk declaration. No CSP/sandbox permission expansion.

Lean production tests: real original mouse drawing changes pixel model; original PNG snapshot restores transparent pixels on undo; original frame/layer buttons and preview FPS frame selection; hidden/restore; disabled export; full EventTarget/task ledger and retained old-button/late callbacks after exit. Controlled early Canvas failure and initial-hidden branches passed. CPU Canvas via test-only @napi-rs/canvas bridges JSDOM; no native browser, screenshot, visual/IME/pointer ergonomics acceptance claimed.
