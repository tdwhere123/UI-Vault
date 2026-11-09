# Puck 原组件页面编辑器（原无媒体配置选段）
原 Puck UI、字段、层级大纲、History、组件画布与 PointerSensor 保留。选用官方 Heading/Text/Grid/Flex/Space 五组件，示例初始中文正文是本地原创占位内容，不是上游整站或云端服务。无发布、上传、持久保存、外部媒体；隐藏重开重置会话数据。iframe.enabled=false 是官方支持模式。系统字体替代远程 Inter。运行官方 npm 0.24.0，不声称等于参考仓库 commit 构建。

## 已验证与未验证
clean ui-vault-570 原 createTextCache/createPreviewLoader 获取全部 4 普通 JS 脚本后一次 compose；默认 CSP 不变，缓存低于 8 MiB。生产模式不含测试 API。
原 Outline 选择、文本字段真实更新、Duplicate 插入、Delete 删除、Undo/Redo 状态变化通过；原指针 sensor 开始/结束也走真实代码，但合成几何 drop 没有插入，**原生拖放排序/嵌套/屏幕像素尚未验收**。不以自造 dispatch 假称拖放通过。原库此入口只有 PointerSensor，未新增键盘拖放。静态原 Grid Slot 嵌套可见。
隐藏卸载/重开、旧按钮与晚 RAF、pagehide 清理、missing-root/早退/晚异常分支检查；能力陷阱 fetch/XHR/Worker/eval/Function/open/storage 为零。测试是 JSDOM DOM/真实原状态而非浏览器像素：固定几何、Resize/IntersectionObserver、scrollIntoView、getAnimations/animate 接口替身。JSDOM 不支持的现代 CSS 解析警告单列，不作为原生视觉成功。
减少运动通过 CSS 禁非必要 transition/animation，并传原 matchMedia；并非已验证全部原生拖放动画。

## 修改与构建
独立宿主只做会话隔离、明确未发布状态与生命周期；SOURCE.json 记录原 17 文件 Git blob/SHA、实际运行包/嵌入依赖许可证据。原图标保持 Lucide 0.468.0 ISC + Feather MIT。包内嵌依赖额外保留许可，不能只看 esbuild 文件边界。
build.cjs 用 esbuild 原源码/官方 npm 源打包后，Acorn 按完整顶层语句分片；顶层函数改为匿名函数表达式并全部置前以保留外层重赋值与提前可调用语义。剩余语句顺序不变。独立 iframe 普通 script 按 manifest 顺序加载；无运行时编译/unsafe-eval。
react-remove-scroll-bar 2.3.8 缺包内 LICENSE，采用同官方仓库完整补充 MIT 条款，明确不是精确 2.3.8 包原件；已核 24 个 dist 文件与既审 2.3.8/2.3.7 字节相同。
