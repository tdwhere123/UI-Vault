# Milkdown Crepe document workspace

One existing `milkdown:crepe-document-workspace`. Fixed official Empty story at 0655111f3bb8393e959ce3f3d107c83edce29c3a supplies the full Crepe editor, basicLight CodeMirror theme, readonly=false, CodeMirror=true, TopBar=false, AI=false. Public npm 7.23.0 matches fixed source package version. No synthetic editor replacement: real ProseMirror, Crepe slash/format/table/list and CodeMirror mechanisms run locally. Original story is empty; the small heading/list/code sample is original UI-Vault demonstration text and identified as such, not a lyric/wiki fixture. Storybook container becomes normal isolated DOM; raw Markdown uses textContent rather than interpreted HTML.

All language parsers retained and bundled; no dynamic network import. Original AI/provider/BYOK story branch is not imported or enabled. Original feature defaults otherwise retained. Image handling deliberately disallows remote source/file uploading. Clipboard paste is plaintext only, capped at 50000 chars. Links do not navigate. No account connection or storage. Standard sandbox and CSP unchanged.

Published common/classic CSS and basicLight retained. Font-face declarations omitted, using system fonts. This includes KaTeX fonts: mathematical typography is not claimed correct. No binary asset encoding or images/covers. Five natural complete-statement UTF-8 JS files support host loader and direct index in the same order.

Lifecycle: serialized create/destroy, generation guard for late create, immediate hidden/visible reconciliation, terminal cleanup of captured exact iframe listener registrations and pending timers/RAF. Native observers are destroyed by editor plugins, checked by tests. No indiscriminate global event-type removal outside this isolated frame. Dependencies are unmodified; host hooks are local adaptations.

Complete 171 emitted package notices retained (170 MIT plus DOMPurify dual notice, selecting Apache-2.0). Package paths/versions and original full text hashes in SOURCE. Missing npm LICENSE for remark-math and two UIW themes supplied by exact official npm gitHead roots with saved registry responses. Root original MIT included. No claim that root MIT alone covers transitive runtime.

Limitations:
- JSDOM controlled geometry/observer fixtures; no native pixel, IME, drag selection or narrow-layout QA.
- Local text editing and live Markdown only: no cloud persistence, sharing, collaboration, AI or credentials. Original Empty story is populated with a small UI-Vault-authored demo, not upstream lyrics/Wikipedia content.
- System fonts replace unavailable font files. KaTeX typography uses fallback without bundled math fonts; precise mathematical layout not verified.
- File uploads/drop disabled; remote image URL resolving blocked; paste accepts plaintext only up to 50000 characters. No rich HTML paste or remote-image claim.
- Hidden destroys editor then restores local Markdown; final exit clears it. Full language parsers are bundled locally.
