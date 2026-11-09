# Three CSS3D · 原元素空间布局

恢复旧 ID `threejs:spatial-element-table`，一族四种空间布局，不计118组件。保留固定上游完整118元素数据、table/sphere/helix/grid几何公式、青色半透明元素样式、CSS3DRenderer、TrackballControls与Tween动画。数据是原示例，包括原质量数字，未校订科学准确性；不是化学模拟。

## 适配
原demo系统字体，无外部图片/模型。删远程网站链接/OG截图和importmap，离线打包同SHA Three core、两个原addons及原Tween23.1.1。Three.js MIT及Tween完整MIT（含Penner声明）保留。未包含WebGL renderer，不要求GPU上下文或二进制资产。构建用esbuild，仅构建工具不进入runtime。

补充原生按钮焦点/选中状态、可读元素列表及重置视角，恢复viewport缩放。所有布局和原鼠标/触控控件仍使用上游实现，不另画静态假效果。减动模式duration0、禁惯性、无持续RAF，仅输入/布局动作更新；正常模式保留动画循环，hidden停RAF并清Tween/控件监听，恢复重置相机并保留所选布局。退出清监听/帧/对象与容器；异常明确不可用并停止，不以空白冒充成功。拖动中隐藏释放pointer capture和待处理指针，避免重新连接带旧拖动状态。

## 验证
独立生产包9模式：normal/reduced/early/hidden-early/failure/latefailure/missing-container/click-failure/resize-failure。118真实DOM、原CSS matrix3d随四布局改变、固定800×600几何synthetic pointer、5次隐藏恢复、拖动中断、零尺寸clamp无NaN、旧节点与退出、原初始化/帧中写transform/点击状态/resize写入异常安全停止、无容器退出。应用listener与RAF退出0；仅明确排除JSDOM内部nwsapi/dom-selector/Window监听，不称真实浏览器全局0。fetch/XHR/Worker/WebSocket/open/eval/Function实际调用陷阱0。
真实ui-vault-534 composePreview组合运行118元素并pagehide清空；exact无defer runtime.js/css标签与原CSP保持。JSDOM不执行浏览器CSP强制检查；无浏览器像素、3D遮挡、真实触控/窄屏视觉验收，也不声称原生pointer测试通过。正常动画主动循环只在当前可见详情；减少运动静止0帧。

## 重建
本地审计源在本交付工作目录upstream及src；python prepare.py（从已有固定原demo生成）后node build.mjs，再python package.py。SOURCE-EVIDENCE包含所有固定文件SHA256，公开7个文本资产无外部请求或二进制包装。MIT不要求发布整个工具链，源链接和原版权保留。
