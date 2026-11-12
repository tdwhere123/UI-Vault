# Notus Tailwind JS 2026-11-11 待测预览批

共 5 个独立条目。未计入已核库存，无封面，未做浏览器验收。地图页因需要 Google API 密钥未收录。

## 字体与图片许可

- Font Awesome Free 按官方原文分项，不是一律 MIT：图标（SVG/JS）为 CC BY 4.0，字体文件（含本批 woff2）为 SIL OFL 1.1，其余非字体非图标代码为 MIT。原文见 `FONTAWESOME-LICENSE.md` 与 `fonts/LICENSE-FONTAWESOME-FREE.txt`。
- 仓库人像等点阵图随 Notus 的 MIT 发行树提供；落地页中未保存的 Unsplash 远程图仍用占位，不把第三方图片自动说成没有权利问题。
- `assets/team-4-470x470.png` 为官方原件（超过站内媒体清单 1MB 上限），已保留。`assets/team-4-470x470.display.jpg` 是其本地优化展示派生，仅用于清单边界内的组合预览，不是替换原件，也不放宽安全上限。详见 `assets/DERIVATIONS.md`。

## 2026-11-12 许可文本位置与 Unsplash 披露更正
dashboard 的 ZIP 内本就有 Chart.js 2.9.3 与 @popperjs/core v2.11.8 官方 MIT 正文；独立核验按批内工作树记为未随包。现将同一正文放到批目录 `chart.js-2.9.3/LICENSE.md` 与 `popper/LICENSE.md`，ZIP 未改。
关于 Unsplash：此前 README 写「落地页中未保存的 Unsplash 远程图仍用占位」。经核，`landing` 与 `profile` 的预览与原件仍含 `images.unsplash.com` 外链（landing 预览 1、原件 3；profile 预览与原件各 1），并没有完成占位替换。该外链图权利未核，保留原件/预览差异与外链事实披露，本轮不把这些图改成虚构已许可资源，也不删除原件外链。不得用批 MIT 概括这些远程图。
