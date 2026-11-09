# Chirpy · 原版侧栏长文与响应式目录

一个旧条目：chirpy:longform-knowledge-site。官方固定 ae1057257b3927d6474deb549bdfafa71244e080 的完整《Writing a New Post》与原 post/default/侧栏/目录模板，由真实 Jekyll 4.4.1 + Liquid/Kramdown/Rouge 生成，不是手写仿版。正文约 440 行，代码示例中提到的图片/视频仅是原文章代码文本，没有伪造媒体。

原 Cotes Chung 文章完整保留（CC BY 4.0）；Chirpy 原设计/代码 MIT。原侧栏展开/遮罩关闭、原 Tocbot 生成的多级目录与移动 dialog 布局/事件逻辑保留。标题锚点可本地导航。系统字体替代原远程 Source Sans Pro/Lato；原 FontAwesome 7 图标类别由正式 7.3.0 包的 SVG 几何替代字体表示，保留原外形而不打包字体。原图标 CC BY 4.0，完整混合版权与署名见 LICENSE.txt。版权不表示品牌背书。

预览是单篇原完整阅读场景，不是整站服务器。原配置选择浅色，未启评论/统计/PWA/社交分享；搜索、复制与非本篇链接禁用并有中文说明，不调用剪贴板/账号/后台。没有头像替身，按原配置将可选 avatar 留空。原日期是静态 Jekyll 输出，不加载 Day.js 相对时间。CSS 使用原 SCSS 真正 Sass 编译与 Bootstrap 5.3.8 原 CSS，非复刻皮肤。

适配改动：原移动目录在 reduced-motion 时立即关闭，缺 active item 时可空跳过；初始化失败/原生 dialog 抛错显示可见失败状态。原移动目录的 IntersectionObserver 纳入退出/隐藏清理，animationend 注册纳入生命周期，隐藏暂停 Tocbot 并关闭弹层，重新可见恢复原目录。原模块 direct handlers 加退出/失败保护，定时器封在 bundle 内而不永久改浏览器 API。回顶保留原简单行为。删除最终 HTML 的 CDN/preload/font/favicon/script 注入，仅运行本地脚本；原文章正文未删。

真实 actual560 compose 测试桌面目录、移动打开/关闭、reduced-motion、侧栏、回顶、隐藏恢复、缺控件与 late dialog failure，以及保留旧节点退出后无法复活。退出 listeners/timers/observers 均为 0。JSDOM 的几何、matchMedia、IntersectionObserver 与 dialog 是明确测试适配，不代表浏览器布局、焦点、滚动位置或视觉验收。browserVisualQA: not-run。

7 个公开文本：index.html/runtime.js/runtime.css/README.md/LICENSE.txt/SOURCE.json/VERIFICATION.json。完整原仓、构建工具、测试、lock 与脚本仅本地，不声称有已公开 ZIP。Ruby 3.3.8/libyaml 0.2.5 从正规源在独立目录编译，未改系统权限；不属于运行资产。公开 SOURCE 有原正文及固定源输入校验，外层网站可提供上游正常链接，沙箱内不声称外链已可打开。
