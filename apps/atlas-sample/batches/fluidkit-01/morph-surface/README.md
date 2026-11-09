# Fluidkit · Morph Surface

恢复已有 `fluidkit:morph-surface`，一族。固定 runvendo/fluidkit b1e6e6109e14c31ed43a99e2a373f4727c867ecb，原 MIT ©2026 Yousef Hindy。直接构建该版本源码，不假称某 npm release 完整文档站。

## 原机制与宿主
原 MorphSurface 使用圆角矩形、两滴卫星以及 TensionField 的真实贝塞尔融合桥，共同合成 CSS path clip。六路原 Motion springs 分别驱动宽高、卫星位置与半径，保留原标准弹簧配置、pull/shrink、center/top、原 specular 与 glass/flat 材质。文字只按原逻辑淡入，不把文本拉伸，也不是以圆角 crossfade 代替几何。geometry/tension/useMotionSprings/specular 原件逐字保持。

本地便签、标题、背景、控件和文案是原创展示壳，不称上游完整成品，也不连接真实聊天、生成或金融服务。原组件通过外部原生按钮切换 open、通过 select 修改原 props；没有假发送和下载。无图片或自定义字体，采用系统字体；没有改封面。

## 最小生命周期适配
原 useAnimationFrame 即使静止也持续调度；替为仅 animating && settling 时注册的 RAF，内部原 buildMorphScene 回调不变，实际样式写入失败停止并让宿主卸载原面板/显示不可用。原 open effect 在 reduced/offscreen 变化时补 snapTo/清计时器与 settling，避免后台 spring 残留。减动订阅改为同样 static-safe 语义的原生可移除 matchMedia，允许动态变更。

隐藏时卸载显示子树，持续父组件保留 open/material/absorption/anchor，恢复继续同一状态；pagehide 永久卸载，旧按钮/旧事件不再生效。Motion 原 spring stop 保留，宿主仅管理自己的隔离 window/document 监听。普通按钮为浏览器原生键盘可操作；JSDOM 不模拟浏览器原生 Space 生成 click。

## 功能范围与许可
仅 glass/flat。LiquidRenderer 的可选 caustics WebGL 分支及 barrel 导出从适配副本移除；原件证据仍保留。LiquidMetal/PaperShaders 从未纳入依赖/构建。Refraction 关闭，不调用 displacement map 生成。不扩 CSP，无网络/backend/storage/clipboard/音频/worker。完整根许可与实际 bundled runtime 许可见 LICENSE.txt / NOTICES.txt，逐项版本/hash 见 SOURCE-EVIDENCE.json。构建依赖 esbuild、测试依赖 JSDOM 不属于运行包。

## 验证边界
生产 IIFE normal/reduced/failure：原路径闭态、真实 spring 中间态和终态差异、重复快速反向、材质/融合/锚点参数、隐藏中断并保留所有选择、旧节点惰性、动态 reduced 停止 spring/RAF、真实原 renderer clipPath setter 注入异常、反复退出后 RAF/timer/记录监听归零、网络/eval/存储等陷阱零调用。
这是 JSDOM 的真实数学/状态/DOM 写入验证，不是浏览器 CSS clip/backdrop/rasterization/像素或完整无障碍验收；没有给未经验证的效果贴“视觉通过”。实际CSS支持差异沿用原材质fallback，像素待用户设备验证。

## 同名已收项去重
Cult morph-surface 原固定源码 d71b1428b811c2779d46ea41b7ef8c9f9c9991c2 的真实构建源与528原ZIP逐字匹配。它是单矩形 width/height/borderRadius 动画和反馈表单/成功勾选，layoutId圆点迁移；没有卫星或贝塞尔桥。此 Fluidkit 原件是六路弹簧+两卫星合并的多层path材质，保留pull/shrink两种吸收模式。二者折叠展开概念重叠，本项仅恢复一个独立有机材质族，不声称新任务能力或做过原生像素比较。
