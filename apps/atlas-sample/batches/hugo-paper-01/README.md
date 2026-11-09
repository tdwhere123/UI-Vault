# Hugo Paper · 原 Emoji Support 阅读页

nanxiaobei/hugo-paper 固定 f7ed52a1da04aa2c536a9c075354191dc10152f8。原完整 Emoji Support 文章（lee.so），保原字体说明、三个Unicode表情、CSS代码块及内联样式。原Paper模板生成标题/日期/标签/页头页脚，深浅主题与菜单处理沿用原代码，仅存储改为当前预览内存。原theme.svg采用官方monoDarkIcon选项，非自画图；默认PNG未使用。

使用官方Hugo0.148.2extended真实编译，未手工重绘HTML替代模板。运行仅原静态内容加原菜单/主题处理的可清理适配；新增Enter/Space可触发原role按钮。无网络、存储、后台或发布服务。

- Real Hugo0.148.2extended templates; only .Site.Language.Locale→.Site.Language.Lang compatibility edit in baseof, original English lang output retained.
- Original complete emoji-support article with its inline styles and Hugo highlight shortcode; no invented prose.
- Original configured monoDarkIcon=true uses original static/theme.svg lossless percent SVG; unused PNG CSS declaration removed.
- Original dark/menu handlers retained, localStorage replaced by private per-preview memory; 10ms readiness timer and listeners tracked for cleanup.
- HLJS disabled using upstream disableHLJS configuration; article code highlighted by real Hugo build.
- No avatar/social/disqus config; global external links non-navigable, readable attribution retained.

actual554 compose：完整文章文本、原菜单/主题、早退、缺控件失败、退出旧事件均通过；owned监听、计时器和网络/存储访问0。不是浏览器几何/像素验收，视觉未验，无截图。

公开七文本，原作者/主题归属与完整许可保留。Hugo编译器/完整私有源码和测试脚本未上传，未提供ZIP。
