# SmoothUI original full chat template

One existing candidate: smoothui:chat-template. MIT source revision c45420a8523ec60a92f7724a2418ab83edaa1425, educlopez/smoothui. Original template, components and data retained in source/originals. Not a re-created lookalike or separately counted component gallery.

Build from source/: npm ci --ignore-scripts; node build.cjs; npx @tailwindcss/cli -i styles.css -o runtime.css --minify. Place JS/CSS beside the HTML. The original same-revision SmoothUI theme was recovered from the sibling source archive. Tests use workspace/JSDOM paths that need adjustment outside this environment.

## Local functionality
Original fixed-script chat supports transcript selection/search, new thread, input, thinking/tool/stream/final phases, stop, suggestions, prelisted attachment add/remove, source/tool disclosures, price-change approval state, code artifact tabs, local votes and theme. Any input receives the same scripted reply. No model calls, real tools, uploads, payment, permissions or account actions occur. Switching thread remounts it and drops unsaved local messages, cancelling its timers. Token meter is illustrative estimation, not API usage.

## Minimal adaptation
Remote profile replaced by original local SVG plus explicit Local Demo identity. copyText props and unbound retry callback omitted so unsupported clipboard/retry controls do not pretend to work. Settings/Sign out menu entries disabled; theme toggle remains real local UI. Source links/form navigation blocked. Host labels synthetic fixtures. No APIs/microphone, eval/Function, workers or fetch present in runtime. All assets self-contained; HTML has explicit head for host CSP and works with allow-scripts sandbox, without storage/clipboard privileges.

## Validation
JS parse, static CSS/asset closure and DOM mount passed. Tests cover send through thinking/tool/stream/final, stop, attachments, thread switch timer cancellation, search/collapse, local approval, theme and two mobile drawer open/close cycles. Functional tests request reduced motion; browser visual layout, touch, full keyboard behavior and actual motion are not verified. No fake backend success is claimed. All named shops, sales, documents and user profile are demo fixtures.
