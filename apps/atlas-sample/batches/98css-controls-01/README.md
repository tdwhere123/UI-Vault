# 98.css 原版桌面控件完整展示

原项目 Jordan Scales，MIT；固定 b1d7a907371bbe523d6f64e3af97f714fdbd6d6a。完整官方 EJS 文档 37 组示例，不是自绘桌面或窗口管理器。复选框、单选、文本、选择、滑块、details 为原生控件；原互动表格保留原选行逻辑，增加点击表头无行时的空值保护。原 Tab/窗口按钮未接 JavaScript，不宣称可切页/关闭应用。

删除未闭合分发许可的 MS Sans Serif font-face 与字体文件，保留系统 Arial/monospace 回退，故字体像素非原 Windows 字体。22 个 SVG 是固定仓库 icon/ 原始矢量控件资源，适用项目 MIT，保留原几何，直接 percent-escaped XML 嵌入 CSS（无二进制或截图）；不是分发操作系统图标包。移除外部徽章/favicon/OG 图片；外部链接仅保留原出处 data-original-href，不发出导航。CSS 变量与 calc 使用浏览器原生，不复制字体。

唯一运行脚本来自原互动表格，附精确监听清理；atlas:dispose/pagehide 后禁用控件并清理监听，旧行不会再切换。无 React/第三方 JS 运行库、定时器、观察器、网络、下载、数据保存。EJS/dedent/highlight.js 只在构建期生成 HTML（高亮后的 CSS 类不携带其运行代码），构建锁文件留本地。

实际 ui-vault-550 compose 验证 37 例、原生值/勾选、表格切换和表头保护、退出清理/旧节点；视觉与响应布局未验，DOM 不等于像素验收。单次关键路径测试，无重复矩阵。原件与 build/test 脚本在本地 upstream/ 与项目根；SOURCE 含实际全部原件与哈希用于审计。公开仅七文件。
