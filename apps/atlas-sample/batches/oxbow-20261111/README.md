# Oxbow UI 2026-11-11 待测预览批

共 33 个独立条目，来自官方 astro build 的 iframe 预览。静态文件可打开不等于视觉或交互验收通过，也没有真实封面，不计入已核库存。

## 2026-11-12 资源与 Alpine 许可
bento-grid / category-preview 预览原先引用站点根路径 `/images/oxbow/oxbowLogo.png`、`/widgets/calendar.svg`、`/store/shoes/airmax/3.png`、`/store/backpacks/3.jpeg`、`/store/jackets/1.png`，本批未收这些文件。现已从已落盘官方树 `/workspace/ui-vault-collection-20261111-work/src/oxbow` 冻结修订 `26dca641b305a5ee93f57e57a1888a3807c0c273` 的 `public/`（与 `dist/` 字节相同）拷入 `assets/`，并只改预览与相应 ZIP 的 preview.html。原件仍保留官方绝对路径。Oxbow 上游 README 声明网站内容以 MIT 提供；Air Max 等品牌外观仍是商标，不构成商标许可。
批内补入 Alpine.js 3.15.12 官方 MIT 正文（`alpinejs/LICENSE.md`）。首波四条 ZIP 一并写入该正文；其中原已带 Alpine 文本的包，版权年份为 2.8.2 的 2019-2021，已改为与实际 runtime 3.15.12 对应的 2019-2025 官方文本。
