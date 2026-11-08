# Annotorious · 图像区域批注工作台

## 原件与职责
新来源 Annotorious，npm @annotorious/annotorious3.9.5 和 @annotorious/core3.9.5，固定官方发布 revision f780879410ff4f2d4fd0b2cb1ae1bd596a40fe65。完整 BSD-3-Clause 及运行依赖 MIT/ISC/BSD notices 附在 LICENSES。两个发布模块保持原样，无改写绘制、空间索引、选择、编辑或坐标逻辑。

本适配新写外围工作台、列表、备注表单、本地文件选择、JSON查看，明确不是声称整个工作台来自上游样例。核心矩形/多边形绘制、移动、控制点编辑、真实标注 store 与 SVG 叠加层均为原始组件。切换绘图工具会取消旧区域选择，多边形启用原库 click 模式，矩形用原库 drag 模式。

底图是本适配原创抽象风景 SVG，标明 ORIGINAL SVG STUDY / LOCAL SAMPLE；作为百分号转义的文本 SVG data URL 在运行时加载，不是编码二进制包装。没有外部图片/字体/服务。可选 PNG/JPEG/WebP 本地文件，用临时 blob URL 交给浏览器，不上传。限10MB和1600万像素；不接收用户SVG/HTML。切图清空标注，错误类型保持当前数据。解码失败回到示例。重载详情不保留内容。

## 与现有条目的差别
对照 ui-vault-457，图片裁剪、划词引用、普通评论线程已存在；本项是图像几何区域锚点批注，含多边形与可移动边界，不是裁剪工具或评论排版变体。只计一个完整工具，矩形/多边形不另计家族。

## 验证
JSDOM 实际加载打包组件，原生指针矩形绘制并核对170×90几何；原生选中拖动并核对坐标变化；多边形点击闭合并核对真实 store；备注保存/删除、选择同步、恢复示例与JSON反映真实数据均通过。输入 script/onerror 字串只以 textContent 显示，不生成元素或执行。

本地文件验证测试使用伪文件与模拟 image load，只验证类型拒绝、状态切换、标注清空，不代表PNG解码或可见画面通过。测试对 ResizeObserver、SVG布局/指针捕获、image自然尺寸使用桩。没有真实浏览器视觉、触控、拖拽手感或不同分辨率对齐验收。

测试禁 Function/eval/fetch/XHR/Worker/动态script插入，均未调用。默认 allow-scripts iframe与原CSP足够，img-src data: blob: 已由原主图鉴允许；不需media-src、unsafe-eval、额外sandbox权限。

## 依赖审计
发布 sourcemap 确认 Svelte、dequal、rbush、quickselect、simplify-js、uuid、nanostores、nanoid、nanoevents 预捆绑来源；版本与固定上游 package-lock 对齐，附原始全文，不靠仅扫描esbuild入口误漏预捆绑依赖。

源码 ZIP仅本地保存，不声称有线上下载。详情按需单独加载，JS109,393B，gzip35,558B，CSS7,869B。
