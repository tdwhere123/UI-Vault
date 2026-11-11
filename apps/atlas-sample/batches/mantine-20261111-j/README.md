# Mantine UI 待测预览批（collection-20261111-j）

共 52 个此前未保存的完整官方示例，取自 mantinedev/ui.mantine.dev 固定修订 963b955c5cef4bcc6008d40a0431e46ef771c254。已排除本库已收的 AuthenticationForm / GetInTouch / HeaderMegaMenu，以及配色变体、输入/按钮/滑块原语、薄布局网格，和带远程原图的条目。

原件未改。预览使用内存配色管理与系统字体，不读取 localStorage，不拉取远程字体或图片。独立 ZIP 含原件、预览入口、预构建 runtime 与构建配方；重建依赖已有缓存，不能称为自包含离线安装包。Mantine 标志等商标未获额外授权。未做浏览器验收，无封面，不计入已核库存。不能把源码身份初筛称为目标完成。

每个独立 ZIP 的 package.json 只声明该条目 esbuild metafile 中的直接外部依赖；许可证与锁定图来自实际传递编译闭包，不是全批固定名单。重建必须按该包声明名单解析已缓存版本，不能借上游工作树额外 node_modules 自动补齐。

本批按 esbuild metafile `outputs[runtime.js|runtime.css].inputs.bytesInOutput` 区分：源码配方/编译图声明的依赖，与实际进入 runtime 的包分开标记。全批共 33 个包至少在一条 runtime 中有非零输出；`detect-node-es`、`react-number-format`、`tabbable` 在全部 52 条编译图被读取但从未进入 runtime。`react-remove-scroll-bar@2.3.8` 只在 double-header、header-menu、header-search、header-simple 四条的 runtime.js 被发出（各 2229 字节：constants.js / component.js / utils.js）；其余 48 条只读取未输出。该包 npm tarball 不含许可证文件，也不得把当前 LICENSE 说成旧 release 的附带文件，更不得把 2.3.8 映射为 2.3.7。适用文本取自官方已授权 commit `8ca9ba5ea52de03308fe8ced94f7b159a44d28ff` 根 LICENSE（SHA256 a79aae0c…，Copyright (c) 2025 Anton Korzunov），因该 commit 的 src 与现用 2.3.8 dist/es2015 是同一实现。未改依赖、未重建 runtime。npm 原包仍作原件保留。未知包已空。这不是已核独立，也不能称为目标完成，更不是全量法律通过或 500 合格。见各包 SOURCE.json / LICENSE-PROVENANCE.json。
