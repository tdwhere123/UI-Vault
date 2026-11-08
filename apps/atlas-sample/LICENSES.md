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
- **HyperUI**：20 件保留基础素材遵循 [MIT](originals/HYPERUI-LICENSE.txt)。
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
