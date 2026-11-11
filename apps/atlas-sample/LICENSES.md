# 素材与依赖许可

每个条目的来源、原始版本和下载包独立记录，不能用仓库根目录的许可证覆盖第三方素材。

- **Looseleaf**：[MIT 原文](featured/Looseleaf-MIT.txt)。纸张、手绘界面和 Kevin Sans 字体保留上游许可。原件与演示适配分别存放。
- **Magic UI**：[MIT 原文](featured/MagicUI-MIT.txt)。注册表中的原组件与动画规则一起保存；演示中的文案、轨道符号等适配不冒充上游品牌资产。
- **Motion Primitives**：[MIT 原文](batches/motion-source/LICENSE.md)。原组件、官方示例与依赖闭包见对应源码包。
- **Solid Glass**：[MIT 原文](batches/solidglass-01/LICENSE)。Agent run 由推理、工具步骤和差异展示组成，只计一个素材，不把内部依赖拆开充数。
- **Kokonut UI**：官方 MIT 原文与构建依赖通知保存在各批次的源码 ZIP 内，条目提供准确下载链接。
- **Bencho**：官方 MIT、第三方通知与构建依赖信息保存在各批次源码 ZIP 内。原件与本地演示包装分开。
- **AI Elements（Vercel）**：[Apache-2.0 全文](batches/ai-elements-01/APACHE-2.0.txt)，保留原件、上游版权与修改说明，不标为MIT。官方未提供独立NOTICE；每批源码包附依赖许可和本地演示适配说明。
- **Animata**：官方MIT与所需依赖许可位于各批次源码包。演示中的本地SVG替换、系统字体及尺寸适配均独立说明。
- **HyperUI**：20 件保留基础素材遵循 [MIT](originals/HYPERUI-LICENSE.txt)。2026-11-11 待测预览批的 MIT 原文见 [`batches/hyperui-20261111/LICENSE.txt`](batches/hyperui-20261111/LICENSE.txt)，Chart.js 4.5.1 许可在对应源码包内；该批尚未计入已核库存。
- **IBM Plex Mono**：本地字体遵循 [SIL OFL 1.1](featured/IBM-Plex-Mono-OFL.txt)。
- **React、Motion 及其他打包依赖**：版本、锁文件、许可通知在对应源码包中。源码下载不包含 node_modules，也不等于无需安装构建工具。

前端为独立实现，没有复制 LeiBox 受限制代码。React Bits 等限制组件再分发的来源未作为可公开下载素材纳入。候选网站、不同配色和框架版本不直接增加已收录数量。

## 新增来源

- **Tailark**：MIT，原文与内部组件闭包见 `batches/tailark-curated-01/LICENSE.txt` 和源码包。只采用免费开源区块；远程照片以本地自制SVG适配，未复制付费模板。
- **Lucide**：[ISC＋Feather派生部分MIT原文](batches/icon-series/lucide-LICENSE.txt)，完整原包及许可在该系列源码ZIP。商标图形的商标权不因开源许可转让。
- **Tabler Icons**：[MIT原文](batches/icon-series/tabler-LICENSE.txt)，完整原包及许可在该系列源码ZIP。商标图形的商标权不因开源许可转让。
- **Phosphor Icons**：[MIT原文](batches/icon-series/ph-LICENSE.txt)，完整原包及许可在该系列源码ZIP。商标图形的商标权不因开源许可转让。
- **Heroicons**：[MIT原文](batches/icon-series/heroicons-LICENSE.txt)，完整原包及许可在该系列源码ZIP。商标图形的商标权不因开源许可转让。
- **Octicons**：[MIT原文](batches/icon-series/octicon-LICENSE.txt)，完整原包及许可在该系列源码ZIP。商标图形的商标权不因开源许可转让。
- **Bootstrap Icons**：[MIT原文](batches/icon-series/bi-LICENSE.txt)，完整原包及许可在该系列源码ZIP。商标图形的商标权不因开源许可转让。

Remix Icon当前官方许可限制独立图标集合的再分发，未纳入本库；未依据旧元数据替它声明Apache许可。

站壳 `shell-icons.mjs` 使用Lucide原生SVG子集，适用上方ISC及派生MIT许可；不是凭外观描摹第三方图标。导航与Tab语义参考本库已保存的HyperUI MIT原件，界面排版与性能逻辑独立实现。

- **Meraki UI**：MIT 原文见 [`batches/merakiui-20261111/LICENSE.txt`](batches/merakiui-20261111/LICENSE.txt) 与后续待测批 [`batches/merakiui-20261111-b/LICENSE.txt`](batches/merakiui-20261111-b/LICENSE.txt)。待测预览批不计入已核库存；字体或远程图片不因代码 MIT 一并授权，缺授权处用原创中性占位并逐项说明，未保存原图。

- **Mamba UI**：MIT 原文见 [`batches/mambaui-20261111/LICENSE.txt`](batches/mambaui-20261111/LICENSE.txt)。待测预览批不计入已核库存；远程照片无授权处用原创中性占位并逐项说明，未保存原图。预览为静态解析，不等于原 Angular 运行时验收。
- **Tailblocks**：MIT 原文见 [`batches/tailblocks-20261111/LICENSE.txt`](batches/tailblocks-20261111/LICENSE.txt)。待测预览批不计入已核库存；演示图无授权处用原创中性占位并逐项说明，未保存原图。预览由 JSX 转静态 HTML，不等于原 React 运行时验收。

- **Flowbite**：MIT 原文见 [`batches/flowbite-20261111/LICENSE.txt`](batches/flowbite-20261111/LICENSE.txt)，预览脚本许可在对应源码包内。待测预览批不计入已核库存；远程图片或二维码图无授权处用原创中性占位并逐项说明，未保存原图。预览内置本线保存的Flowbite脚本，不等于源交互验收。
- **Tailwind Starter Kit**：MIT 原文见 [`batches/tsk-20261111/LICENSE.txt`](batches/tsk-20261111/LICENSE.txt)。待测预览批不计入已核库存；远程照片无授权处用原创中性占位并逐项说明，未保存原图。预览为静态组装，不等于原文档站点验收。
- **Windmill Dashboard**：MIT 原文见 [`batches/windmill-20261111/LICENSE.txt`](batches/windmill-20261111/LICENSE.txt)，Alpine 2.8.2 许可在对应源码包内。待测预览批不计入已核库存；办公场景照片无授权处用原创中性占位并逐项说明，未保存原图。预览内置Alpine本地脚本，并已接入官方 Chart.js 2.9.3 与仓库图表脚本。深色主题依赖未在真实浏览器验证。办公场景照片已按官方仓库原件保存。

- **Oxbow UI**：MIT 原文见 [`batches/oxbow-20261111/LICENSE.txt`](batches/oxbow-20261111/LICENSE.txt)，Alpine 3.15.12 许可在对应源码包内。待测预览批取自官方 `astro build` 的 iframe 产物，不计入已核库存。官方构建点阵图已按相对路径保存；未引入官方文档页的大型高亮脚本。
- **Notus Tailwind JS**：MIT 原文见 [`batches/notus-20261111/LICENSE.txt`](batches/notus-20261111/LICENSE.txt)。Font Awesome Free 按官方原文分项（图标 CC BY 4.0、字体 SIL OFL 1.1、其余非字体非图标代码 MIT），原文见 [`batches/notus-20261111/FONTAWESOME-LICENSE.md`](batches/notus-20261111/FONTAWESOME-LICENSE.md)；Popper 与 Chart.js 2.9.3 为 MIT。待测预览批不计入已核库存。仓库人像已保存；Unsplash 图仍用占位。依赖 Google Maps API 密钥的地图页未收录。

- **AdminLTE**：MIT 原文见 [`batches/adminlte-20261111/LICENSE.txt`](batches/adminlte-20261111/LICENSE.txt)。Source Sans 3 为 SIL OFL 1.1；Bootstrap Icons 按官方 LICENSE 为 MIT；Bootstrap、Popper、OverlayScrollbars、Chart.js 4.5.1、FullCalendar 7.1.1、SortableJS 1.15.7 为 MIT；Quill 2.0.3 为 BSD-3-Clause。官方 README Image credits 只列出来源名单、没有逐文件授权映射，署名不是再分发许可证据。不明原图留私有原件待核，候选用明确披露的自有占位，不冒称视觉复刻；AdminLTE 徽标仅作产品识别并注明商标。Unknown 已单独列明，不宣称权利齐。待测预览批不计入已核库存。
- **Tabler**：MIT 原文见 [`batches/tabler-20261111/LICENSE.txt`](batches/tabler-20261111/LICENSE.txt)。官方构建产物已本地保存。未收录依赖 ApexCharts 的页面（官方说明其不再是单纯 MIT）。官方免费插画六张按上游免费清单保留。头像/照片/封面等不明原图留私有原件待核，候选用明确披露的自有占位，不冒称视觉复刻。品牌、支付、浏览器等 SVG 以及支付图标样式中的商标图形为商标/Unknown，不是再分发许可，不宣称权利齐。另含官方第三方库：signature_pad、List.js、Dropzone、Driver.js、SortableJS、HugeRTE 1.0.14（MIT；其捆绑的 DOMPurify 为 MPL-2.0 与 Apache-2.0 双许可）、FullCalendar 6.1.22（MIT）。两步验证已合并为一个候选。HugeRTE 官方皮肤 CSS 已内联进运行时样式，所用官方模型/主题/图标/插件已列入运行时脚本分片。待测预览批不计入已核库存。

- **daisyUI**：MIT 原文见 [`batches/daisyui-20261111/LICENSE.txt`](batches/daisyui-20261111/LICENSE.txt)。预览取自官方文档完整示例 HTML，样式经官方 `packages/daisyui` 库构建产物与已有 Tailwind 编译。远程演示图已换自有占位，不冒称视觉复刻。待测预览批不计入已核库存。

- **Tailwind CSS v4.3.3**：上述 Flowbite、HyperUI、daisyUI 预览实际在线分发的编译 CSS 适用 [官方 MIT 全文](licenses/tailwindcss-v4.3.3/LICENSE.txt)（Copyright (c) Tailwind Labs, Inc.；SHA256 `60e0b68c0f35c078eef3a5d29419d0b03ff84ec1df9c3f9d6e39a519a5ae7985`，1071 字节）。编译器短 banner 不是这份全文通知。具名绑定如下三组在线样式：
  - Flowbite 在线 CSS [`batches/flowbite-20261111/runtime.css`](batches/flowbite-20261111/runtime.css)，SHA256 `0c5effb39a6f8107f1d190c902b93b21b61d98bf9872c52f8b59d2c448e17047`（49628 字节）。下载包 drawer 与 mega-menu 内的 `runtime.css` 为不同字节（SHA256 `4565be2988b00093e432de0a16a8a203a51ff5cd0ebe9099111a56fc3ee5d981`，40753 字节），其官方全文与 CSS hash 通知绑在对应源码 ZIP 内，不能与这条在线样式当作同一文件。
  - HyperUI 在线 CSS [`batches/hyperui-20261111/runtime.css`](batches/hyperui-20261111/runtime.css)，SHA256 `97e0a9ac533a2fe8853abf5d41e943354142485d0590606712966750ad484a0a`（43708 字节）。
  - daisyUI 在线 CSS [`batches/daisyui-20261111/runtime.css`](batches/daisyui-20261111/runtime.css)，SHA256 `d05b5c0fe8e8a71d3f91c3b60a733cf45d964156b44f2416b9d32d8d79b79927`（133360 字节）。
  下载包内另有同一权威全文与所含 CSS hash 的绑定通知。本轮另在下列 7 个源码包内写入同一权威全文与该包 `runtime.css` hash 的绑定通知：`batches/hyperui-20261111/bundles/marketing-footers.zip`、`batches/hyperui-20261111/bundles/marketing-feature-grids.zip`、`batches/hyperui-20261111/bundles/application-stats.zip`、`batches/hyperui-20261111/bundles/application-empty-states.zip`、`batches/daisyui-20261111/bundles/footer.zip`、`batches/daisyui-20261111/bundles/hero.zip`、`batches/daisyui-20261111/bundles/steps.zip`。这不授权或关闭图像、Chart.js、Logo 或其他素材缺口。`batches/flowbite-20261111/bundles/list-features.zip` 仍无该官方全文，其 CSS/全文缺口仍为 partial，本轮未改该包。本条目只覆盖所绑定的 Tailwind 生成 CSS，不授权或关闭 Flowbite 运行脚本中的 Popper 或其他第三方 JavaScript。

- **Kokonut UI（本线扩收）**：MIT 原文见各 `batches/kokonut-20261111-*/LICENSE.txt` 与对应源码包；官方修订 `a16d64c0d99ab5c6304ebcb88860d8d8bf201fd0`。预览用已有 Vite 配方编译官方默认导出组件。`vaul`、`@radix-ui/react-dropdown-menu` 等构建依赖许可在源码包 `third-party-licenses/`。Unsplash 等未知第三方原图不随包再分发，预览已换自有占位，不冒称视觉复刻；originals/ 保留官方源文件。此前已编译但未入目录的 `card-field` / 焦散/墨水/垂幕背景仍按 2026-11-08 既有源码包接站。Kokonut UI Pro 未收录。
- **Animata（本线扩收）**：MIT 原文见各 `batches/animata-20261111-*/LICENSE.md` 与既有 `animata-0*` 源码包；官方修订 `25c27e5a874c60a56dcc1609df3b2c4f5f8456f8`。演示入口来自官方 Storybook Primary。未知第三方原图已换自有占位，不冒称视觉复刻。因缺少可闭合本地依赖而未收入的条目（如 `video-chat` 的公共照片模块路径、部分商标图）未凑数收录。
- **Magic UI（本线扩收）**：MIT 原文见既有 `batches/magicui-0*` 源码包。`dither-field` 与 `globe` 为既有官方 Vite 编译预览接站，不等于新视觉验收。未重试需额外媒体/API 或未闭合依赖的条目（如 tweet-card）。
- **Motion Primitives（本线扩收）**：MIT 原文见官方 `LICENCE.md`（已写入对应批次 `LICENSE.md` 与源码包）。预览沿用既有编译运行时，原件按官方仓库 `120f64f6ca60348e251f929e9c81f11ccbe45eda` 补入。与 Magic UI 等来源的同名组件跨源视觉去重待核。
- **Tabler（本线扩收）**：仍适用上方 Tabler 分项。本批只收不依赖 ApexCharts 的完整页面/组件（ApexCharts 官方产物超过运行时分片体积上限，且上游已说明不再是单纯 MIT，故未收看板/图表等页）。不明原图继续用自有占位。
- **Oxbow UI（本线扩收）**：仍适用上方 Oxbow 分项。本批只各收此前未收录族的一条完整官方区块（分页、标志云、通讯 CTA、密码登录）。
- **Animate UI**：官方 LICENSE 为 MIT + Commons Clause，禁止以原形式单独或打包再分发组件，已跳过。
- **Indie UI**：LICENSE.md 为 MIT，但 README Terms of Use 明确写明不可再分发教程与演示，已跳过。
- **Aceternity UI**：未能在公开 GitHub 以 `aceternity/ui` 取得官方仓库（仓库不存在），未收录。
