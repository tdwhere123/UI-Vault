# Fluidkit LiquidMenu · 原官方菜单页

恢复旧ID `fluidkit:liquid-menu`，不是新增来源，也不把方向/材质计成不同条目。固定 b1e6e6109e14c31ed43a99e2a373f4727c867ecb 的官方完整 LiquidMenu Page、PageLayout/Stage/Controls/Snippet与原 LiquidButton、LiquidMenu 和液态引擎。保留原官方页文案、布局、弹簧与玻璃/平面参数，不重画为普通菜单。

与已上线 MorphSurface 不同：这里是从按钮边缘倾注的 portal 下拉菜单，真实上下/起末对齐、空间不足翻转、Arrow/Home/End 跳过禁用项、Escape回焦点、outside pointer关闭及onSelect反馈。只有一个菜单族。Rename/Duplicate/Delete仅更新原demo selected文字，不操作文件；copy按钮明确禁用。

原CSS无需字体或图片资产。仅删未使用caustics WebGL分支与相关barrel；PaperShaders/LiquidMetal不在构建图。原Motion springs保留，原useAnimationFrame回调改为只在动画settling时调度；异常停止并显示不可用。reduced-motion改同原static-safe语义的可移除原生媒体监听。无网络/存储/模型/付费服务/Worker/动态eval。

hidden时卸载菜单及portal，回显重建。**原参数和selected文字会重置**，不声称保存用户工作。pagehide和atlas:dispose永久卸载并撤销该隔离运行期注册的window/document监听；无主页面共享目标。初始/React渲染失败和实际clipPath写入失败会卸载并显示不可用。

实际使用 `ui-vault-534/apps/atlas-sample/preview-runtime.mjs` 的 composePreview 注入CSS/JS及默认CSP，index使用精确无defer标签。测试执行生产包，覆盖原菜单键盘/disabled skip/选择、参数、mocked几何定位与flip-to-fit、隐藏中断、早退出、atlas退出、真实渲染/clipPath异常，退出观察器/全局监听/任务归零。JSDOM不会证明实际玻璃像素、透视/触控、字体、窄屏或读屏通过。无截图/封面。

MIT全文与实际运行依赖各完整许可见LICENSE.txt/NOTICES.txt；原件与改动、精确版本/hash见SOURCE-EVIDENCE.json。完整源码/测试仅本地留存，不假称ZIP已发布。公开8个文本文件包含VERIFICATION.json，manifest/hash清单在父目录供接入。
