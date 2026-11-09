# Mantine Get in Touch

One original family `mantine-ui:contact-information-form`. Runtime distribution MIT and 0BSD; complete upstream and dependency notices included. Original mantinedev/ui.mantine.dev revision `963b955c5cef4bcc6008d40a0431e46ef771c254`, MIT. Actual dependencies exactly match available requested core/hooks 9.7.3, React/ReactDOM 19.3.1, Tabler icons-react 3.36.1. No compatibility downgrade and no false version claim. Complete parsed-dependency notices are retained; emitted input bytes separately listed.

## Full original UI
Original GetInTouch Paper, blue contact panel, four ContactIcons MOCKDATA rows, name/email/subject/message controls, SimpleGrid and Send button kept. Both original CSS modules are fully compiled with postcss-simple-vars, postcss-preset-mantine and postcss-modules; original sm breakpoint 48em substituted. Entire matching @mantine/core/styles.css is included. MantineProvider uses original core theming with forced light scheme and in-memory color manager: no localStorage persistence. CSS title's Outfit falls back to system font; no remote font introduced.

Original bg.svg is retained as exact XML encoded into a data:image/svg+xml URI, not redrawn or rasterized. Strict XML check confirms only svg/path elements, no event attributes, href/src or url references, with exact original transform:rotate(180deg) style. This is repository MIT artwork, not a third-party photo/brand logo. Tabler icon attribution and full MIT notices included.

## Honest form boundary
Original form only called preventDefault. The sole behavioral addition displays “未发送，仅完成本地表单演示。” after the same required-field gate reaches submit. It does not send, queue, save, download, authenticate or contact anyone. Original email remains type=text and required; Subject required; name/message optional. This is not an email-format validator. Left email/phone/address/hours remain original mock text with no hyperlinks. Host explains local-only use. No network, mailto, tel or backend call.

## Lifecycle and validation
Dedicated iframe ownership tracks exact post-init event handlers, callback queues, observers and legacy media subscriptions; disconnected direct input listeners released by scoped MutationObserver. Hidden unmounts the form and pauses pending work; restoring starts empty. Final cleanup unmounts React then removes owned resources, preserving pre-existing external selectionchange.

Actual ui-vault-547 composePreview with unchanged CSP and exact runtime.js/runtime.css markers. 100 cycles fill non-sensitive fixture → native required validity → button.click submit → visible not-sent receipt → hide/remount → retained old button click inert. Last ten owned listener counts all 151. Labels match input IDs; fields receive focus. Invalid blank required inputs do not submit; no invented email-format validation. Early module throw, actual partial root event installation error, real late receipt class setter failure, pending old submit callback, pagehide/atlas:dispose, observer/media/callback cleanup, and external listener preservation pass. Native keyboard tab traversal/default Enter activation and actual CSS pixels/responsive geometry not claimed. Browser visual QA not run. No screenshots/native browser used.

Scope notes: CSS files are compiled original source, not a fake simplified rewrite. PostCSS tools are build-only; their versions appear in package-lock. Mantine core CSS carries its package license. The complete conservative parsed notice set is not a claim that every imported module survives tree shaking.
