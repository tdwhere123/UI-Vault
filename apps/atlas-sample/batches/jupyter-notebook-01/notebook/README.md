# 本地单元笔记本

固定 JupyterLab 1c917ab158ef862c86630291ecd0771f0b6de8ba 官方 examples/notebook/src/index.ts 与 commands.ts 的本地文档编辑子流程。原 NotebookModel、Notebook、CodeMirror 配置、Jupyter 工具栏/单元类型选择、Lumino 命令面板与原单元动作保留；不是整个服务端 NotebookPanel 示例，不包含执行内核、保存、会话、服务端补全、搜索扩展或协作。宿主提供两格明确虚构文档，代码绝不执行，输出是已有固定文字，不伪称计算结果。

保留原插入、删除、拆分、合并、上下选择、撤销重做和编辑/命令模式动作；原对应快捷键摘录保留，命令 ID 为隔离宿主统一命名。原 CellType 组件接真实 Notebook content，仅无服务 Panel 外层被宿主 SplitPanel/Panel 替代。不仿造 ServiceManager/SessionContext。原示例 CodeMirror 创建逻辑保持，MathJax 与内核补全不引入。

纯文字/Markdown 输出；保留原 sanitizer，并收紧 Markdown 标签/属性，不允许用户 HTML 脚本、图片或链接资源。图像/富媒体输出、系统剪贴板/外部拖入/外链操作禁用。Jupyter 系统剪贴板可选探测改为 undefined，使用原不可用路径；lib0 强制原内存 fallback，避免 opaque origin 的存储探测。无网络权限、账户、文件上传或执行环境。

原 CSS 与 SVG 图标保留，webpack ~ CSS 导入解析为真实 npm 文件；CSS 中原 SVG 使用 UTF8 percent-encoded data:image/svg+xml，不是二进制包装、截图或重画。系统字体，无下载字体。源码中的通用 base64 解码/图像帮助函数仍可能存在，但本地允许的 MIME factories 不提供图像，交付不含编码二进制素材。

隐藏卸载并重置；返回新建本地文档。pagehide/atlas:dispose、早期初始化异常与晚期失败释放宿主/框架所有被跟踪监听、RAF、计时器及观察器。模块对 IntersectionObserver 的原包装也在退出恢复。无真实后台行为。

## 来源、版本与许可
实际 Notebook/CodeMirror 4.7.0-beta.1（部分同版 monorepo 包自有版本，详列），安装的 notebook/src/panel.ts 与 widget.ts 对固定 Git 原件逐字一致。npm metadata 无 gitHead，不虚构映射。120 个实际 JS/CSS 发出包路径逐项列许可；Jupyter/Lumino/FAST 等 npm 缺 LICENSE 的采用官方固定根全文，保留版本元数据。Lumino 固定44aea979…对应14包当前版本逐项匹配，但不声称每个源字节已与发布包重构对比。Jupyter Ydoc 与 UI Toolkit 用实际对应版本 tag 固定commit根许可；FAST 用各精确 npm gitHead 根许可。BSD/MIT/ISC/0BSD 原文完整保留。品牌或项目名称仅来源标识，不声称背书。

## 测试范围
actual571 compose：normal/reduced/early/failure/production；实际原工具栏点击增删、原 CellType 选择、原命令 insert/delete/undo/redo、隐藏恢复、旧回调、失败与退出账本归零；禁止 API 调用计数0。真实 createPreviewLoader 加载/缓存命中/释放通过，总 UTF16 缓存7058678 B（不扩8MiB限制）。Range/布局/Observer 为 JSDOM 控制桩，不代表原生键盘选区、IME、拖拽/缩放或像素验收。内置 Yjs 可能产生上游未集成类型警告，实测模型与单元变化及清理正常；不把警告隐藏为视觉通过。
