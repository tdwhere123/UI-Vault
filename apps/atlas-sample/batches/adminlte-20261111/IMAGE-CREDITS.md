# 图片、字体与第三方许可说明（不宣称权利齐）

AdminLTE 代码为 MIT。官方 README 的 Image credits 列出 Pixeden、Graphicsfuel、Pickaface、Unsplash、Uifaces、Unavatar，但没有把这些来源对应到具体文件，也不是再分发许可证据。
因此：用户头像、产品图、相册照片等不明原图已复制到工作区私有目录 `pending-upstream-images/adminlte/` 待核，不随候选包再分发；候选预览改用明确标明“自有占位，不是原图复刻”的占位图，不冒称视觉复刻。
AdminLTELogo / AdminLTEFullLogo 仅作为该官方模板的产品识别保留，并注明商标，不把徽标说成已获再分发许可。
Source Sans 3：SIL OFL 1.1。Bootstrap Icons：按官方 LICENSE 为 MIT（图标字体文件按该许可）。Bootstrap、Popper、OverlayScrollbars、Chart.js 4.5.1、FullCalendar 7.1.1、SortableJS 1.15.7 为 MIT。Quill 2.0.3 为 BSD-3-Clause。
未做浏览器验收，无封面，不计入已核库存。

## 2026-11-12 OverlayScrollbars 与样式接线
批内 `vendor/LICENSE-OVERLAYSCROLLBARS.txt` 已换成 KingSora/OverlayScrollbars 标签 v2.16.0 官方 MIT 正文（不再用 171 字节字段声明）。calendar / compose / dashboard 的预览去掉失效 `adminlte.css` preload 之前，已核 `runtime.css`（720333 字节级）含 AdminLTE/Bootstrap/OverlayScrollbars/Source Sans 3/Bootstrap Icons 签名，且预览本就有 `rel=stylesheet` 指向它。原件改为同样接入 `runtime.css`，官方 CDN 链接保留作出处。runtime.css 不含 FullCalendar；`adminlte:calendar` 的插件样式若仍依赖官方 CDN，该缺口未闭合，不宣称日历视觉已齐。
