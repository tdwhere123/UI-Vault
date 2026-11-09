# AI Canvas · 模拟兑换面板

保留官方完整 CryptoSwap 原组件（未改组件源码）：卖出输入、8 币种选择、Max、双向互换、汇率反转、详情、滑点和模拟成功动画。价格随机漂移、余额与成功状态都是原本地演示，不连接钱包、不交换货币、不提供实时行情或投资建议。币种标识不代表商标授权或项目背书。

中文宿主仅补充范围说明、隐藏暂停、退出清理和失败提示。保留原 CSS/矢量/布局逻辑，使用 Tailwind 3.4.10 编译本组件用到的 utility（原站声明 Tailwind 4）；运行 React 19.3.1、Framer Motion 12.43.0，实际版本与 7 个 JS 包完整 MIT 及 CSS 构建包在 SOURCE/ LICENSE 中列明。默认系统字体，无远程字体、图片、存储、API、Worker或动态 eval。

原币图形来自 spothq/cryptocurrency-icons，固定提交的 8 个彩色 SVG 共 14 段 path d 与组件逐字一致；CC0 全文另附，AI Canvas 已做的 JSX 属性适配保留。项目 MIT 与 CC0 各自适用，不以 MIT 覆盖标识或商标权。

实际570 compose 测试验证输入、选择、互换、Max、滑点、原模拟状态、隐藏暂停及退出。JSDOM仅提供几何/matchMedia/scrollTo边界，未验证真实像素、弹层定位或运动流畅度。所有资源保持原默认 CSP，不要求放宽。

公开 7 个文本：index.html、runtime.js/css、README.md、LICENSE.txt、SOURCE.json、VERIFICATION.json。完整构建/测试工具和上游原件留在本地，不声称源码 ZIP 已发布。
