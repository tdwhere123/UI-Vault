# 分节研究画布

原全文/单节切换、右侧章节缩略导航、标题与 Markdown 正文编辑、参考文献区完整保留。数据只在当前预览内存；本地按钮明确模拟新增章节，不调用模型、搜索、数据库或后台。编辑后的状态可切换阅读，隐藏/返回不丢失。

原 DocumentsView 在已经进入 Edit 后开始运行仍可能保持可编辑，本适配仅补 `editMode && !running`，并拒绝运行中旧输入回调，模拟完成才恢复人工编辑。没有将模拟生成宣称为真实 Agent 结果。

保留原完整组件/样式，实际编译原 Tailwind 配置。未加载 Noto/Lato 字体文件，使用原系统回退。Markdown 保留格式与GFM表格；禁止原始HTML、图片/媒体，链接显示为文本，避免编辑内容向外请求或跳转。无真实引用和个人数据。

LICENSE.txt 包含原 CopilotKit MIT及实际依赖 MIT/ISC/Apache-2.0/0BSD 全文。Radix遗漏的包LICENSE复用同版本官方固定原MIT证据，react-remove-scroll-bar补充来源明确，不假称npm原包附带。SOURCE.json 区分实际emitted、parsed-only和CSS编译依赖；React18替原19预发行版本，版本明列。

actual569 compose 实测全文/单节Radix菜单、缩略选节、标题/正文写回、恶意Markdown无图片外链、模拟流式章节/编辑锁、旧输入不写回、重置、隐藏/退出/提前退出/缺根节点失败。已检查owned/global/connected及detached ledger均归零。真实浏览器布局、滚动与像素未验。

公开仅七文本，完整源/构建与测试仅本地，无虚构ZIP。不是完整联网Research Canvas应用，只是原章节阅读编辑工作区。
