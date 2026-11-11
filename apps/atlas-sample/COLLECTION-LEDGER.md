# 本线采集分账（F1/F2/F8）

记录时区：Asia/Taipei（UTC+8）。基线 `56d4a215487cf1ea3a07d1a50ae612d33e93cc3b`。工程 review 冻结 tip 为 `7be468859b88b31926148cf6f5775a75276f0ce6`。本文件在共因修复后更新，不把旧日志改名当作新绑定。

## 四项计数

| 分账 | 数量 | 说明 |
| --- | ---: | --- |
| 新增接站 | 554 | 本线写入 `candidate-catalog.json` 的新 ID，不等于新原件，更不是已核独立 UI |
| 旧源补接 | 22 | 基线已有源码包仅补目录接站（Animata 10、Kokonut 4、Magic UI 2、Motion 5、HyperUI 1），不计本轮新增原件 |
| 重复排除 | 1 | `oxbow:signin-password` 与 `oxbow:signin-magic-link` 字节相同，只保留一个原件身份；文件与目录条目均保留 |
| 闭包缺口 / 新原件身份上限 | 531 | 554 − 22 − 1，仅为身份上限，不是已核独立或闭包合格数 |

已核新增独立 UI = 0。封面 = 0。实测 / 真实浏览器验收 = 0。已核库存仍为 241。

## 本轮不做什么

禁止继续扩数。不碰阿衡树，不 push / 发布 / 网络探针，不物理删除原件或条目，不用改几个字的已有源码重新计数。

## 本轮已修的闭包（仍非视觉验收）

- Kokonut 新包改为真实单项入口，并保留完整 Vite/lock/UI 依赖。
- Animata 新包补齐构建工程、官方 story 挂载与内部 CSS/模块源码，不只提供 compiled runtime。
- 预览适配实际消费 `window.__atlasAssets`（含查询后缀），不改 CSP。
- Tabler 不透明沙箱 `localStorage` 走单一内存降级适配，不加 `allow-same-origin`，不把平台判成功。
- 实际编译依赖保存完整原许可证；字体/图/商标 Unknown 保留。
- 21 个旧源补接批次补了与包/源码/运行绑定的真实 manifest。
