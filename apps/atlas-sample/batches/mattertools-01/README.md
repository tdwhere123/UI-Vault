# MatterTools 原物理场景检查台（离线限定）

一族，旧ID mattertools:physical-scene-inspector。原固定源码 a7a20e1de3c8a819a9a924f5cf56aa5c0beafe15。不是简化自制壳，无真实服务/文件传输。

## 适配与能力边界

- Preserves original docs/demo/example.js Basic: 50 randomly generated rectangle/polygon bodies, four walls, real Matter Engine/Runner/Render/MouseConstraint. Basic2 is the same init and omitted, not a second family.
- Uses original Demo/Gui/Inspector/JSTree/dat.gui layouts and behavior. Explicit source entry docs/demo/demo.js plus docs/demo/example.js; original sourceLink docs/examples/basic.js is erroneous and not used.
- Original Inspector buttonGroup was built but never attached to topPanel. Minimal append restores original Pause/Help controls; no replacement inspector drawn.
- Session-only Memory API replaces browser storage; inspector and GUI use same store, cleared on teardown. Load retains world/gravity identity so Inspector and GUI remain bound after original Engine.merge. Save/Clear/Load genuinely works locally, not persistence.
- Resurrect indirect global eval replaced by globalThis; decoder constructors restricted to Date/RegExp/Number, prototype resolution to pure built-ins; DOM/Function/arbitrary constructor restoration rejects. Original circular graph/reference algorithm retained. Linked SO constructor hack and navigation handler replaced with independently written narrow logic.
- No external capabilities: import/export routines disabled, no download/file picker, full-screen disabled, hash/source/title external navigation removed, jstree Worker disabled and force_text enabled, jquery DOMEval rejects and ajax XMLHttpRequest transport unavailable. No remote script loader.
- Text-only assets: dat.gui inline GIF, Matter GUI GIF and JSTree bitmap assets removed. Local CSS triangles/diamond and selected background replace tree/folder affordances, not original bitmap pixel fidelity. No external fonts/media, no base64.
- Reduced-motion initializes real static scene and uses input/click-triggered refresh; dat.gui listening RAF suppressed. Explicit local play button opts into original Matter loops. Hidden suspends scheduler with generation guards; pagehide destroys original tools, clears engine/memory and all recorded timers/listeners.
- The unused original Vertices.isConvex implementation is omitted and throws unsupported if called; current fixed scene and tested original operations do not call it. No Paul Bourke implementation is redistributed.
- JSTree queued Promise callbacks check original tree element still connected before completion, preventing late destroyed-tree mutation. Demo pending 500ms tool initialization is cancelled on switch/reset/exit. Partial/missing-root/context failure exits safely and displays explicit unavailable text rather than fake scene.

## 验证
实际 clean ui-vault-558 composePreview/CSP 组装，生产 bundle 在 JSDOM 执行。Canvas 2D 方法为命令记录替身，未运行 native rasterizer/真实浏览器命中，不能称像素验收。原 Matter 数学和引擎、dat.GUI、Inspector/JSTree 状态代码真实运行。
normal/reduced/early/missingroot/unsupported/failure 六模式通过；原工具500ms后实际挂载。生产UI Inspector树展开54个身体、Add Body后55；Save→Clear降数量→Load恢复55，Pause/Play文本/树选择；hidden停止/恢复、旧回调不复活、退出无RAF/timeout/应用监听。外联、浏览器storage、Worker尝试均0。reduced静态分支无RAF。
test-serializer.cjs验证循环引用还原、Date/RegExp/Number值及拒绝Function/Node/XMLHttpRequest等任意构造。
这些是有限关键范围测试，不承诺全部原控件、触摸手势或native布局已验。

## 复建
私有工作目录 npm ci --ignore-scripts（使用可写cache），python adapt.py，node build.mjs，node test.cjs normal；其余mode如上，node test-serializer.cjs。node package.py生成许可证/来源/哈希。build与adapt脚本哈希见SOURCE（本轮公开白名单为7文本资产，不宣称这些私有构建脚本已公开）。

## 许可
根MIT；dat.gui Apache-2.0 + 原copyright banner；jQuery/JSTree/keymaster/Matter MIT；Resurrect原UNLICENSE。Matter自带Minko MIT完整保留；单独署名的Paul Bourke isConvex实现已剔除，替换明确unsupported抛错，关键场景/GUI测试不调用。原出处/hash仅做审计，不重分发该代码，也不把use-permitted扩张为独立授权。没有品牌或专业资质背书。
