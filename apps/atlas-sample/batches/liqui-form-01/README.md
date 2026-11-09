# Liqui 原版玻璃表单

固定 leefanv/liqui-design@546bb7e121b08152caf895b76e253b73293abfbf，原 FormDemo、Button、Field、Form、cn 与完整 LiquiGlass/filterRegistry/theme/tokens/CSS。原 UI 和 Base UI 字段错误机制保留。输入 admin，500ms 后显示原本地模拟错误；修改输入清除；其他非空名称不显示错误，不表示注册、后台接受或保存。空值由原 required/Base UI 机制处理。无网络/API/真实账号操作。

唯一行为适配：原 await 500ms 改为同延时可取消 timer，卸载即取消，避免晚到回调；宿主提供自然中文说明与原创渐变背景。隐藏卸载并取消待提交，恢复重新挂载/字段重置。退出卸载、取消 owned tasks/listeners/observers、清空原玻璃缓存和 filter host。原受控错误逻辑、表单层次、按钮与光学算法不重画。前台字体 Arial 系统回退，不加载文档站字体或 Fumadocs 页面壳。

玻璃保原自动能力检测：支持的 Chromium 使用原本地 Canvas 生成折射/高光图，其他环境用原 frost 层；这些是原算法运行时生成，不是上传二进制、远程图片或截图替代。公开文件没有编码图片资产。原滤镜/图缓存只在本 iframe 使用，退出清空。DOM 测试运行原 frost 能力回退，未验证 Canvas/refraction 像素或浏览器视觉，不把状态测试冒充光学效果验收。

使用原声明范围内固定版本 React/DOM19.2.8、Base UI1.7.0、cva0.7.1、clsx2.1.1、tailwind-merge3.6.0、Tailwind4.3.3；玻璃来自固定工作区源码而非另一个 npm 版本。完整实际解析依赖通知附 LICENSE，parsed 和 emitted scope 分别记录。无需等待视觉验收，但此交付不声称已验。

actual550 compose 测试：admin pending→原错误、编辑清除、非保留名称无错误且无请求、待500ms时退出后无复活、退出 owned events/timers/observers=0。JSDOM CSS.supports false 正常走原 frost，未对折射画布造桩声称通过。原件在 upstream，适配 main/prefix/glass/adapted/build/test 在本地独立目录。七公开文本。
