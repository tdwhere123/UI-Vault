# Meny · 页面背后的折叠目录

旧 ID meny:folded-page-navigation，一项独立交互族；方向/折法不另计数量。原固定源码/完整许可见 SOURCE-EVIDENCE.json 和 LICENSE.txt。

## 真实实现与改动
- 原 menuAngle/contentsAngle 改局部变量以避免隐式全局。
- 保留原四方向变换、遮罩、边缘/触摸算法；只跟踪自身 bindEvent/once，旧 transitionend 回调以最新为准，销毁时停 fallback 动画并解绑 pending touchmove。
- 宿主正文与章节为本地原创，原 demo 配色/样式保留，原内嵌 PNG 纹理改 CSS 条纹；移除 Google 字体、社交控件、图像及任意 URL iframe。
- hidden 时销毁、回显重建并保留当前篇章；touchcancel 重建；reduced 仅按钮导航且原 transitionDuration=0s。

## 验证与界限
生产 runtime 在 JSDOM 中执行，无 runtime mock/测试 API。正常、减少运动、隐藏/恢复、触摸取消、立即退出和注入初始化失败检查；OriDomi 另测不支持 CSS3D。验证实际原样式变换、面板数量/非零旋转、状态及销毁。Meny 验四边、章节内容/焦点；OriDomi 验原合成 mouse 拖动产生变换及待 transition/defer 退出后旧节点不再更新。
应用新增监听及定时器最终为0；fetch/XHR/Worker/open/eval/Function/存储写入/clipboard 尝试计数0。无远程素材/字体/音视频；不改变宿主默认 CSP。
这不是像素验收。Meny 测试显式给定800×500几何；OriDomi 的 CSS 支持检测为JSDOM实现，切换步骤测试人工派发 transitionend，不冒称原生CSS事件完成。真实透视合成、折页遮挡、可用触摸/窄屏和屏幕阅读器完整性均待用户浏览器验收。初始错误注入是测试，不是生产代码开关。
JSDOM 自身选择器的 mouseover/out 与 Window load 通过明确源码栈排除，不称浏览器本身全部监听为0。宿主隐藏时主动卸载/恢复重新创建，OriDomi折叠状态复位而非保留。

交付只 index.html/runtime.js/runtime.css/LICENSE.txt/THIRD-PARTY-NOTICES.txt/SOURCE-EVIDENCE.json/README.md 七个文本文件；无源码ZIP或封面。只本地制作，未发布。
