# 本地双向链接知识花园

恢复既有Quartz v4条目，固定jackyzha0/quartz@d25a6eabf96751ffca56f8a8139272def7a65041。原PageTitle/Search/Explorer/ArticleTitle/TagList/Graph/TableOfContents/Backlinks/Darkmode/OverflowList组件，保原renderPage左右侧栏/正文结构及原SCSS。原静态发布内容层换为明确三篇中文虚构笔记fixture，原索引类型和引用关系不变；不是个人知识库、网络发布器或整个QuartzCLI。正文样例由宿主提供，不称上游作者文章。

真实原Explorer目录、FlexSearch搜索含本地正文预览、反向链接、文内导航、目录及明暗主题。原Graph的D3力导向/Pixi节点文字/连线/拖拽/缩放/全局图逻辑保留，不改画为静态假图；当前无GPU环境只实测原渲染器不可用分支明确提示。原生GPU渲染成功、拖拽几何/像素未验，不能将失败提示称图谱已经渲染。

## CSP与源码适配
原Explorer默认sort/filter/map三函数从原源码静态编译替代new Function，不允许DOM自定义函数字符串执行；仅原默认函数，保原Trie/filter/map/sort。搜索fetchContent改读固定本地SSR正文，不fetch，不接受远程URL/任意HTML。原spaNavigate映射固定三页，网络链接不打开；local/sessionStorage改实例内存，不持久化。System字体替Google字体。

Pixi8.15.0官方pixi.js/unsafe-eval扩展的名字不是授予unsafe-eval权限：lib/unsafe-eval/init.mjs注册generateShaderSyncPolyfill、generateUniformsSyncPolyfill、generateUboSyncPolyfillSTD40/WGSL等非eval解释实现，原shader/geometry不改。实际宿主CSP完全保持，未加unsafe-eval/wasm。Graph选择原支持WebGL后端，不请求WebGPU权限；API不可用时停止D3并显示明确失败。生产仍可能含树摇未除的动态编译函数定义，但已用官方替代实现，实测默认无GPU分支eval/Function陷阱0；尚不能把未跑GPU路径称CSP全图形验收。

生命周期补丁：Graph init失败/迟到初始化停止simulation并destroy；资源在init之前即登记幂等disposer；全局图关闭立即dispose并使token失效，迟到init成功必须销毁，init后Text/Graphics构造异常也走同disposer；导航代次/容器token挡旧回调，隐藏/退出cleanup，theme渲染重入避免旧实例；原search匿名removeListener修为同引用，迟到搜索/Explorer初始化检查导航代次。隐藏保留当前页slug与内存偏好，卸页面/图谱，恢复原页；退出监听/RAF/interval/timeout/observer清零。reduced仅CSS静止，原图谱物理仍保留，未宣称reduced静态GPU。

## 许可与验证
完整原根MIT与实际23个运行包全文见NOTICES；D3大多ISC、d3-ease/tiny-lru BSD3、FlexSearch Apache2，其余MIT。@pixi/colord2.9.6包metadata明确MIT但漏全文，附官方上游master完整MIT并明确是补充文本，不冒称精确fork历史文件。原Lucide标记内联SVG附ISC/FeatherMIT家族版权，不声称某npm版本是Quartz原版本。Preact/Sass构建器附全文。原HTML模板由原组件SSR生成，不带React或Preact客户端替代UI。

actual571 compose normal/reduced/early/failure/production：实际目录跳转、FlexSearch检索并进入结果、回链、主题、隐藏恢复/旧RAF与旧节点、初始内容失败与晚期失败通过；禁止API0、资源账本0。JSDOM布局/观察器/可见性为桩，GPUunsupported是真实失败，不提供假Canvas成功。另一个明确test-only Pixi init/构造注入包保原D3 simulation：成功init后Text构造抛错验证stop/destroy；global init pending时Escape关闭再resolve，验证无canvas/无draw/无RAF，所有simulation停止。该测试不代表GPU成功或像素。真实createPreviewLoader缓存/重挂/释放小于8MiB。

固定源167份与SHA保留，原件来自固定codeload。prepare.py为初次生成，不可覆盖后续已修src；重建使用最终src/render/main/build与package-lock。无截图、字体或二进制包装、假ZIP。
