# FieldPlay · 原速度场探索器（离线限定版）

保留固定上游原 Vue 控制面板、CodeMirror GLSL 输入、解析器错误提示、Randomize、暂停/恢复、粒子数与速度场/颜色参数、pan/zoom，以及原 WebGL 粒子状态纹理、积分和绘制管线。不是自制 CSS 粒子替身，也不连接真实 Agent 数据。

## 明确差异
- 分享、URL 持久化、录制/导出、图片/视频输入、音频/SoundCloud、远程 GLSL include 全部关闭或不打包。原主页外链变为无导航锚点，离线提示可见；不声称这些原功能在此可用。
- 原依赖 glsl-hsv2rgb 的许可未闭合，未分发它的原函数或反向补丁。颜色转换用独立标准 HSV 六扇区公式替换，保持主要速度场/积分/粒子渲染机制。21620 个数学样本对 Python colorsys 最大误差约 1.12e-16；不是 GPU 数值或像素验证。
- CodeMirror 自带 1 像素 GIF 拖动代理换为透明文字 span，不嵌入二进制。字体走原系统 fallback，不下载字体。
- GLSL parser 固定上游 Git 版本静态打包，保留算法；不使用运行时 JavaScript 编译。远程 include 明确报错并保留最后有效速度场。
- 减少运动偏好下仅绘制原静态首帧，默认暂停。隐藏时卸载 Vue 与 GL 场景，清内部 bus 订阅，恢复时新建原场景；退出释放资源/监听/计时，异步旧编译不能回写。
- 不支持 WebGL、编译/链接/帧缓冲或运行中绘制失败时显示不可用错误，不画伪效果。

## 许可边界
根 MIT 不覆盖所有嵌入部分。NOTICES 含实际输出依赖及 Mapbox ISC、Ashima MIT、GLSL 编辑模式与配色 MIT、Font Awesome 4 图形 SIL OFL 1.1，以及 Craig Gidney 浮点编码/解码的 CC BY-SA 3.0。
CC BY-SA 浮点三文件以可读首选源码一并公开，标明原作者和 JS 移植差异；其余原 UI 主体依原许可。未授权 HSV 原函数仅保留源 URL/hash 记录，不公开原文。

## 验证与边界
实际 ui-vault-558 composePreview + 原 CSP，在 JSDOM 中运行生产包。真实 Vue/CodeMirror/GLSL parser 状态：有效编辑、错误提示及恢复、Randomize、暂停/恢复、粒子数变更、隐藏后重建和旧 callback 无效。检查 reduced、缺 root、无 GL、shader/link/FBO 失败、运行中绘制失败、contextlost、初始退出；退出 GL 分配/删除匹配，监听/RAF/timer/observer 为零。
WebGL 命令、编译状态及浏览器布局/Range/observer 有测试替身。未进行原生 GPU 编译、原生指针手势、像素、真实设备性能验收。测试不是视觉通过证明。

本地复建：本工作目录 npm ci --ignore-scripts 后 node build.mjs；测试 node test.cjs normal（或 reduced/unsupported/shaderfail/linkfail/fbofail/missingroot/earlyexit/contextlost/latefail）。build 使用已经记录修改的 src，不重新应用迁移脚本。
