# 虚构评价轮播

恢复原候选 eldora:testimonal-01（上游拼写如此）。固定原完整7条评价、姓名、职务、Section和Carousel/Button布局，真实 Embla8.6.0 前后滑动、左右键盘、边界禁用状态。没有真实客户或背书；原评价文字为演示原件，并不对其网络安全产品宣传作真实性保证。

原7个远端公司Logo版权未闭，不请求它们、不称Eldora根MIT覆盖。Logo在这里是辅助身份图形，并非评价核心；透明替换为各条原虚构姓名的文字initials，保40px图形区域与原整体布局，非照片/图库占位。原“客户评价”标题替换为中文“本地示例，非真实客户或品牌背书”。原quote功能字形从react-icons的Material换为已有Lucide Quote原SVG，明确非原字形，Lucide ISC及Feather MIT完整保留。

原cn/button样式语义保持；原next/image与companies远程表不进入bundle。系统字体回退，原Tailwind主题与响应式类保留；原移动端隐藏按钮，仍保原Embla拖动实现，但未声称原生触屏拖拽验证。减动模式仅设原Embla支持的duration0，不改变正常滚动物理；原API on(reInit)漏off已补，同select一起清理。宿主隐藏卸载，恢复原第0项；退出/失败逐资源释放，旧按钮不影响恢复后的新实例。没有网络、保存、登录、自动播放或假购买功能。

## 验证
actual571兼容compose六模式normal/reduced/early/missing/failure/production；7原条目、Next按钮实际selectedScrollSnap0→1、ArrowRight→2、Previous→1、边界状态、隐藏清理/恢复0、旧按钮回送无影响；所有事件/RAF/计时器/observer归零，禁止API调用0。布局桩明确固定600px宽/各slide offset，margin默认0用于原Embla测量；不是原生拖拽/像素验收。真实createPreviewLoader缓存/释放通过。12实际emitted包完整许可另附两编译CSS包。Embla npm8.6.0缺全文，从官方对应v8.6.0根MIT补原件；Radix compose-refs1.1.2以官方npm映射gitHead根MIT补齐，均非假称npm自带。

另features-01原3步右半区共用远端block-preview-dark.png，截图为核心展示，不在本包以文字/空白冒充完成，保留后续正常媒体交付与版权核验。
