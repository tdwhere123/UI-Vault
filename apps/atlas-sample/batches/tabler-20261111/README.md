# Tabler 待测预览批

共 29 个条目，取自官方 core+preview 构建（修订 977102f79cc633074d5518fe1a288fa2ae7fbe27）。两步验证已合并。图像权利按原条款分项披露，不明原图不随包再分发。未做浏览器验收，无封面，不计入已核库存。


## Preview adaptation (theme URL and opaque Storage)

Official `originals/` and each ZIP `original.html` still call `window.history.pushState` at the Tabler theme settings site. That official write is unchanged.

Preview HTML (or the `page-*.js` companion when the theme script lives there) and the matching ZIP `preview.html` / `page-*.js` handle only that theme URL write: if the preview is in an opaque / `about:srcdoc` frame, `history.pushState` cannot persist the theme in the URL. Local theme display state (document attributes plus the in-memory Storage fallback) remains the only result. This is not a business-success claim for URL persistence. Same-origin `pushState` is unchanged. Unexpected `SecurityError` still throws. There is no History wrapper in `preview-adapters.mjs`, `runtime.js`, or `opaque-storage-adapter.js`. Those generated files come from a single `PREVIEW_ADAPTER_BOOTSTRAP` source and only install Storage + media-address adapters.

The host preview is not a self-contained offline package: it depends on the host media bridge and the opaque Storage fallback. Do not describe the packaged preview as complete without the host.
