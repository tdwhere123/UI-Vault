# OriDomi · 可拖动的纸面折叠

旧 ID oridomi:folded-dom-scenes，一项独立交互族；方向/折法不另计数量。原固定源码/完整许可见 SOURCE-EVIDENCE.json 和 LICENSE.txt。

## 真实实现与改动
- 保留原 clone/mask/panel/shader、角度与透视公式、accordion/stairs/reveal 和原拖动算法，不用截图/手画几何替代。
- 所有原 setTimeout/defer 与原事件注册改为库作用域登记；代次取消防止旧回调继续；不改 window 全局调度器。
- 原 destroy 依赖异步 freeze/unfold/CSS transition，本适配改同步关闭触摸、取消自身任务/监听、恢复 clone 内容；避免隐藏/退出时永久等待动画。
- 原图片/字体/标志不载入；原创纯 HTML/CSS 纸面与颜色纹理透明替代。折页效果来自原引擎，非素材伪装。
- hidden/touchcancel 销毁重建，pagehide 删除原注入style；reduced 使用 speed=0 并禁拖动，按钮仍实际调用原折叠方法。

## 验证与界限
生产 runtime 在 JSDOM 中执行，无 runtime mock/测试 API。正常、减少运动、隐藏/恢复、触摸取消、立即退出和注入初始化失败检查；OriDomi 另测不支持 CSS3D。验证实际原样式变换、面板数量/非零旋转、状态及销毁。Meny 验四边、章节内容/焦点；OriDomi 验原合成 mouse 拖动产生变换及待 transition/defer 退出后旧节点不再更新。
应用新增监听及定时器最终为0；fetch/XHR/Worker/open/eval/Function/存储写入/clipboard 尝试计数0。无远程素材/字体/音视频；不改变宿主默认 CSP。
这不是像素验收。Meny 测试显式给定800×500几何；OriDomi 的 CSS 支持检测为JSDOM实现，切换步骤测试人工派发 transitionend，不冒称原生CSS事件完成。真实透视合成、折页遮挡、可用触摸/窄屏和屏幕阅读器完整性均待用户浏览器验收。初始错误注入是测试，不是生产代码开关。
JSDOM 自身选择器的 mouseover/out 与 Window load 通过明确源码栈排除，不称浏览器本身全部监听为0。宿主隐藏时主动卸载/恢复重新创建，OriDomi折叠状态复位而非保留。

交付只 index.html/runtime.js/runtime.css/LICENSE.txt/THIRD-PARTY-NOTICES.txt/SOURCE-EVIDENCE.json/README.md 七个文本文件；无源码ZIP或封面。只本地制作，未发布。
