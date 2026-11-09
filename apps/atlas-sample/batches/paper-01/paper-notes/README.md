# PaperCSS · 原四段折叠示例

恢复已有 `papercss:paper-disclosure-notes`，一族。固定 papercss/papercss b341c1606fca5b3880307d779414f43a5ccbc9b6，版本字段1.9.2。原根许可实际 **ISC**，不是MIT；完整全文见LICENSE.txt/NOTICES.txt。

## 原件与差异
使用 docs/content/docs/components/collapsible.md 的第一个完整HTML显示示例，只取一次，不把后续代码块再渲染。保留First/Second/Third/Fourth及原Bacon占位文本，明确是官方示例，不假装真实Agent输出。原.checkbox/label/同级body结构与原dist/paper.css全部保留，除远程Google Fonts import一行。展开依旧由原 :checked 选择器、235ms opacity/max-height/padding决定，没有重画手绘壳或用JS height动画替代。原CSS的多种不规则圆角/纸面/边界规则仍在。

Plop已收项是 sequential status timeline、current步骤、原Lettering字形噪声/Sticker按压，本例是多段可独立同时开合的阅读披露。均有手绘风格，不宣称新风格类别；原机制与完整示例不同，不是Plop换色。未做native像素对比。

## 宿主增强
原input display:none，单靠label无法键盘聚焦。适配为label增加tabindex、role=button、Enter/Space触发原input.click()，change同步aria-expanded/aria-hidden；不声称完整辅助技术验收。两个示例可独立存在，ID/name隔离且保留原选择器必需collapsible前缀。新增第二张/全部收起/标题是原创宿主控件，非官方原示例功能。
隐藏保留整个DOM和checked状态，仅关CSS transition/animation；恢复继续原状态。减动CSS同样禁transition。无RAF/timer/网络/存储/clipboard/backend。pagehide清除全部宿主监听并移除内容，旧节点/事件不复活。实际DOM append异常清理并显示失败，而不是用静态内容冒充成功。

## 资源与许可
整个PaperCSS dist没有引入运行JS依赖；零runtime第三方JS包。dist内嵌normalize.css v7.0.0 reset，原头明确MIT；已从该精确上游tag补完整MIT许可，版权Nicolas Gallagher和Jonathan Neal，NOTICES包含全文，故综合license为ISC AND MIT，不将CSS内嵌组件忽略。原Google Neucha/Patrick Hand SC远程字体不载入，沿用CSS声明的sans-serif fallback，不伪称字形完全等同自定义字体。系统中文也依赖本地fallback，几何CSS保持。原CSS中data:image/svg+xml为原有百分号编码SVG文本，未新加二进制/base64；不是截图或封面。没有修改CSP。

## 测试
生产IIFE normal/failure：原四段内容、实际label默认行为与checkbox状态、独立Enter/Space/重复键过滤、全部aria同步、隐藏保留、第二实例唯一ID与原前缀、重复新增封顶、全部重置、实际append失败、退出旧节点/重复事件和监听归零，eval/Function/网络/存储/RAF/timer陷阱零调用。
JSDOM不验证CSS纸面像素、展开高度/过渡/减动媒体实际光栅、系统字体、浏览器native键盘焦点和完整辅助技术；这些保留未验边界。前台不堆泛化QA警示。
