# Plop UI · 手绘状态时间线

恢复已有 `plop:ink-status-timeline`，一个族，不新增来源。固定 Snorlark/plop-ui 63dcae0935c3a4fc224d24b841c5a53546968c92，MIT ©2026 Lark Sigmuond Babao。

原件：packages/react/src/StatusTimeline/StatusTimeline.tsx；原示例 apps/storybook/stories/StatusTimeline.stories.tsx 的 InteractiveDemo。保留四步 Sketched/Inked/Colored/Shipped、Next step、Start over 与原原生Button。不是将画面截图或重新画成假时间线。

## 原设计与交互
原StatusTimeline、Lettering字母seed抖动、原Sticker按钮按压/释放、SVG tick/arrow、PlopFilters的纸墨噪声、原CSS module与token调色/纸面/不规则边框全部使用固定源码。原代码文件未改，token CSS由原emit-css生成器生成。仅本地进度演示，不是Agent/物流/后台真实状态。

宿主加入标题与layout选择（auto/horizontal/vertical）替代Storybook的外部框架控制。原InteractiveDemo的Next和StartOver转换逻辑与原组件组合保留，current状态上移宿主持久层以支持隐藏后继续；不声称完整Storybook/文档站已搬入。

原默认surface/filters用同属性和原PlopFilters安装，原PlopContext配置sound=false、haptics=false，因此不会创建音频或振动。没有开启burst/buddy/toaster。动态减动沿用原hook/CSS，并由宿主同步data-plop-motion。hidden卸载显示子树停止CSS动画和按钮定时任务，但顶层保留current与布局；visible继续原步骤与布局。window blur释放当前聚焦按钮的按压；pagehide永久卸载并恢复本隔离预览添加的window/document监听方法。错误边界展示实际失败，而非静态成功替身。

## 字体与许可
不加载Sketchpop/Patrick Hand字体文件，沿用原tokens声明的本地fallback（Chalkboard SE、Comic Sans MS、system-ui等）。不同系统字体可能改变手写字形与排版，未伪称完全等同自定义字体。
原纸纹是tokens源码生成的UTF-8 SVG feTurbulence文本，不是图片下载、截图或二进制base64包装。默认CSP不扩展，无远程资源。
根与react/tokens workspace MIT、实际运行React19.2.9/react-dom19.2.9/scheduler0.27.0完整MIT见 LICENSE.txt / NOTICES.txt，逐件hash见 SOURCE-EVIDENCE.json。esbuild仅构建、JSDOM仅测试。无假ZIP/下载、无封面修改。

## 测试边界
normal/reduced/failure三分支运行生产IIFE：四步/全部完成/重复Next封顶/重置字形确定性、原orientation prop、Space按压释放、pointercancel、blur、Enter待释放计时器期间hidden、visible重挂保留步骤/布局且旧节点无效、动态减动、实际DOM创建异常的ErrorBoundary、退出RAF/timer/记录全局监听归零以及网络/存储/音频/振动等陷阱零调用。
键盘测试验证原事件与按压状态，不冒称JSDOM完成浏览器原生Space生成click。CSS噪声/boil光栅化、container query窄屏几何、原生字体排版与浏览器像素/完整无障碍仍未验，不在前台堆泛化QA警示。
