# Tailwind Blog · 原阅读与标签归档场景

固定 timlrx/tailwind-nextjs-starter-blog b45bef66b40c63b6f57c15ee8cd090682238df4c。两个既有ID共享一次构建/许可与运行资源，reader.html从原PostLayout阅读页进入，archive.html从原ListLayoutWithTags归档进入。

完整原code-sample.mdx和nested-route/introducing-multi-part-posts-with-nested-routing.mdx用真实MDX3.1.1及原声明rehype-prism-plus2.0.2编译，不自写文章替身。两篇都无图片，保留代码高亮/嵌套路由文章全文。原作者Tails Azimuth为上游虚构样例，保其名字/元数据，仅不提供avatar可选字段，未把未闭PNG改画代替。

保原React布局和ScrollTopAndComment的回顶状态，原日期格式来自实际Pliny0.4.1发布chunk。原Next路径hook/Link适配为内存路径，仅两篇、实际标签、每页1篇以展示原分页组件，非完整Next站点；没有网络/存储/历史导航。原第三方评论配置关闭，讨论/编辑/文章外链只读不可导航，不提供假评论或后端。用户可从原标题、标签、上下篇及分页往返两原页面。新增中文说明与“文章列表”入口为宿主，不冒称原模板。

原Tailwind4.1.18与表单/typography插件、Prism CSS保留；未加载Space Grotesk，透明系统sans回退。Prism NightOwl原Sarah Drasner等署名与全文MIT补充保留，所有实际emitted React/Scheduler/GitHub Slugger以及Pliny、CSS许可齐。

actual554 compose验证阅读全文、原token高亮/回顶、上下篇、标签过滤、分页、早退、缺宿主失败、退出后旧链接/scroll无复活；测试connected/global监听0且本轮无detached残留。无截图，JSDOM不等于排版/像素验收。公开8文本，完整源工程/依赖lock/构建及测试仅本地，无假ZIP。
