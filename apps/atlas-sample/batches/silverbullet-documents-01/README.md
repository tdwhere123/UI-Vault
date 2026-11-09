# 本地文档导航与编辑

恢复原候选 silverbullet:document-navigation-workspace。固定 SilverBullet e91de8698f711cc2c87d35264ce5610ebf36598f（package 2.12.1）。这是原组件与原文本编辑分支的本地子流程，不是完整 MainUI、服务端或 Space Lua 知识插件运行。宿主三份虚构 Markdown 文档保存在当前预览内存；编辑、切换目录、文件重命名、撤销/重做真实可用，不同步/持久保存/运行插件。

原 TopBar/PageNameEditor、TreeView/buildTree、原主题/editor/top/navigator SCSS 完整使用。TreeView 自身折叠/选择是真实原逻辑，宿主把选择接到三份文档；禁止文件拖入/外部拖出，非真实文件管理器。原图片、字体、账号、网络、全部 MainUI 辅助窗口及空间插件未启用。没有把空后端状态冒称功能完成。

原 editor_state.ts 按真实 text-document 分支提取：共享 theme/indent/history/dropCursor/closeBrackets/键盘输入处理、文本 language/autocomplete/folding，以及原 update handler/command binding 函数。保原保存回调，只把 Client.save 接到内存 Map；删除未启用的 page/live-preview/Space Lua、Vim和只读插件依赖，固定可编辑文本模式。Markdown 语言来自原依赖的官方 CodeMirror，不是自造 textarea，也不声称完整 SilverBullet wiki-link 实时装饰。原用户插件命令列表为空；宿主撤销/重做按钮调用原 CM commands。原图形不引入 Material 包（配置无 Material icons），Feather/preact-feather 与 CSS 原文字 SVG 保留并附 MIT 署名。

字体删除原二进制 font-face，仅系统字体回退，原字号/主题 tokens 保留；外框两栏是固定宿主，不冒称原整站布局。原零宽状态下 TopBar 使用自身 observer。隐藏卸载视图并暂停资源，保内存文档/当前路径；恢复重建原控件，退出逐资源尽力释放。

## 验证
实际571兼容 composePreview，normal/reduced/early/missing/failure/production 六分支：原 CM transaction 修改保存到本地文档、原目录行点击切换、原名称 Input Enter 重命名，隐藏恢复文本，早期/缺根/晚期失败与退出全部资源清理、禁止 API 调用为0；真实 createPreviewLoader 缓存/释放通过。JSDOM布局/observer为测试桩，不是原生像素、触屏或输入法验收。

所有实际发出 npm 依赖版本与许可证逐项列于 SOURCE/NOTICES。原package固定版本与本次按照其依赖范围安装到的patch版本分别记录，不假称完整原锁版本。完整源头固定 URL/hash、适配源码 hash可审；不提供假源码 ZIP，不加载外部素材或服务。
