# Poline · 原交互调色盘

恢复已有条目（id见manifest），一个族。固定 meodai/poline c0bf44b06d549eb7bd5ecc1ac84cd3c58eb296cc，package版本0.13.1，MIT ©2023 David Aerne，完整原许可见LICENSE/NOTICES。零第三方runtime依赖；原engine src/index.ts逐字保留，webcomponent与官方dist/picker.html为实际原实现，不是另画壳套算法。

## 保留原示例
完整原picker场景的控件、CSS、色轮SVG、锚点/插值点、连接线、饱和度外环、Steps、Invert Lightness、Closed Loop、X/Y/Z position函数、Randomize、P新增、Delete删除、左右键色相移动均保留。Allow Add Points仍沿原示例隐藏标签（键盘P可新增）。与已收单色Omni惯性选色不同，这是多锚点跨区间的调色板生成与原旋转饱和度交互，不拆出配色变体计数。

原组件colorCSSoklch/lch明确只是HSL线性近似，不是正确色彩空间转换。公开H2与说明已明确approximate，不更换原算法而冒称原版。Google Fonts链接移除，沿用原sans-serif fallback，布局与所有原样式仍在；文字字形可能与网页字体不同。

## 最小行为修复
原core drag没有capture，pointercancel/失焦可能留currentPoint。现所有有效pointerdown使用capture，并在cancel/lostcapture/blur/hidden/disconnect释放capture与原drag/ring状态；不改变pointToHSL、插值、旋转角度算法。组件和宿主pointer坐标计算均对零宽高早退，addPoint同样拒绝零尺寸。

原示例全局快捷键会在表单内同时shift hue，适配跳过input/select/textarea/contenteditable、repeat和hidden。host pointerdown改capture阶段，让原shadow pointerdown stopPropagation前能记录原选择点。监听统一托管，异常时卸载并显示不可用。custom element构造attachShadow与connected render各自捕获初始化异常并记录initializationError，host在upgrade后显式检查该持久标记；初始化与setPoline流程整体try/catch，不能依赖平台吞掉的CE异常冒泡。
隐藏保持整个原DOM/model/控件选择，只取消当前拖拽；恢复无需重新生成模型。原组件没有RAF、timeout或自动播放，reduced没有持续动画需要停止。pagehide永远卸载原custom element，执行原disconnectedCallback清理，加清宿主监听。没有网络/存储/剪贴板/后台/新权限或二进制素材。

## 测试边界
生产IIFE normal/reduced/failure/early/early-shadow：真实原model/色板/插值控件、P增点/Delete减点、输入框方向键不误触色相、原SVG指针拖点、外环旋转真实改变饱和度、cancel/lostcapture/blur/hidden清理且恢复状态、零尺寸无NaN、实际交互中createElementNS异常、首次upgrade前createElementNS异常与constructor attachShadow异常均无未捕获事件并清理，pagehide旧SVG/键盘无效、记录所有监听与capture归零，eval/Function/网络/RAF/timer陷阱零调用。
指针测试明确使用400px rect/clientWidth/clientHeight与pointer-capture桩；原代码真实计算，但不是浏览器原生拖动/布局、色彩光栅、字体、触屏或像素验收。reduced只改变媒体查询桩；组件本来没有动画loop。前台无泛化QA警示。
