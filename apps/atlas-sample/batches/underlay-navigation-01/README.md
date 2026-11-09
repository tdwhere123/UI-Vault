# 原 Underlay Navigation 组件＋原创文字槽
固定 Motion Core 74ad6e66d50cc9b1849a505fcd1b352704920745。实际源入口是 packages/motion-core/src/lib/components/underlay-navigation/UnderlayNavigation.svelte；原完整导航组件、GSAP/CustomEase曲线、前景平移缩放圆角、两条菜单线与文字切换、分阶段链接渐入均保留。

不是原照片Demo。原Demo的sample-image-6.webp缺独立媒体权利证据，本次不分发；也没有空白图片或伪造照片。使用原公开children/brand插槽加入原创可阅读文字内容。6主链接/5页脚链接仍来自原Demo的#占位配置，只给本地选择回执，不是真实路由/网站。

原MotionCore主题token保持，Tailwind真实编译组件utility。未引原专用字体，使用system-ui/本地Georgia，所以字形与原站不同。增加最小Escape关闭、闭合panel inert/aria-hidden、reduced直接定位原timeline端点，不声称完整focus trap/模态可访问；原按钮语义与aria-expanded保留。

隐藏卸载并重置，显示重新挂载；退出撤销GSAP并停ticker，释放任务与监听。系统减弱动态偏好每次开关读取。GSAP3.15与CustomEase是Standard许可而非MIT；完整原header和正式条款见runtime/NOTICES，不承诺任意下游动画编辑器使用。

## 验证界限
`node test.cjs normal|reduced|early|missingroot|failure`，clean576真实loader/cache/CSP。验证原6+5链接、GSAP前景transform变化、Escape关闭、多次反向切换、本地链接回执、隐藏期间旧按钮不重挂、重新挂载闭合、早退/构造故障/退出全资源计数及外部能力调用0。
JSDOM固定几何/模拟滚动，不是原生键盘激活、真实视口排版、触控或像素验收。按钮click及Escape为真实DOM事件，未把synthetic keydown当浏览器原生Enter自动click。无截图/native浏览器。
