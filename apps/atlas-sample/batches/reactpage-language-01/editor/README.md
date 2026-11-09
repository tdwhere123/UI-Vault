# 多语言单元内容编辑器

原 ReactPage 5.4.6 languageSwitch 官方示例的文字与自定义单元范围，固定源码 7a1039347284ce4f654b78b23ed82ccc3502c64c；实际两个 ReactPage npm 包 gitHead 对应此版本。不是带媒体主页全套。

保留原英语/德语独立内容、添加/删除单元、Slate 文字编辑器、自定义内容与 Styling 自动表单、移动/缩放/预览模式。宿主只做隔离与明确本地演示。原可选图片插件不纳入；无保存、发布、网络服务，系统剪贴板、外部拖入和链接打开禁用。隐藏卸载并在返回时重置示例，不声称跨隐藏保存。系统字体。

## CSP 与原校验
原 Ajv.compile 在运行时需要 Function，不能在默认 CSP 使用。构建阶段按原 Ajv 8.20.0 allErrors/useDefaults/uniforms 配置生成独立验证函数；生产仅允许该固定示例实际可达的四种 schema（custom-data/custom-styling/slate-link/slate-anchor）。保存 SHA256 标识，并按完整规范化约束字符串严格匹配，不是运行时计算 SHA256。仅 uniforms UI 注释不参与约束键；原 UI 注释和 JSONSchemaBridge 保留。未知 schema 或非法约束类型拒绝，不开放任意插件/schema。52 个等价检查核原 Ajv 与生成函数的返回值、默认值修改及有序错误记录。

原 languageSwitch 仅删除 image/未使用示例导入，保留原 customContentPlugin；react/jsx-runtime.js 兼容导入别名指向 React 自身 jsx-runtime。React 18.3.1。新增宿主、初始化失败处理和所有隔离资源退出清理。测试状态 API 仅 TEST 构建，生产删除。

## 许可与验证
85 个实际 emitted 包路径实例（含嵌套版本）逐项列出。Ajv 编译器及生成验证代码另列，Google 图形 Apache-2.0 与包装器 MIT 分开。两枚旧 @icons/material glyph 与官方 MDI 7.4.47 对应 SVG 路径逐字相同、原 metadata 作者 Google；不是凭 wrapper MIT 推断图形许可。五个缺历史 LICENSE 文件的精确发布包按其明确 MIT 元数据附标准条款补充，并显式标明非找回上游原件；两个 ReactDnd 包采用精确 npm gitHead 根许可证。

actual571 compose 的 normal/reduced/early/failure/production 五模式通过，验证原自动表单、语言独立值、Slate 插入删除、模式切换、隐藏重置与旧节点、权限陷阱及退出资源归零。真实 createPreviewLoader 的加载、缓存命中、释放、总 UTF16 预算检查通过。JSDOM Range 几何为受控桩，不代表原生拖拽/缩放、IME/选区编辑或像素验收。没有截图或主库写入。
