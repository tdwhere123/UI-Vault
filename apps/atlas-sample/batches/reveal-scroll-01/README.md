# Reveal.js · 滚动文本与形变章节

这是原 scroll.html 的**无媒体章节节选**：完整保留前7页（标题、渐进列表、背景反转、3页形变、代码逐行高亮）和结尾，共8页。排除原2页远程图片/视频及其外层分组，没有替图或假装完整媒体演示。

原 Reveal 滚动引擎、Fragments、AutoAnimate、Highlight/行号机制实际运行。中文章节菜单调用原导航API；代码页的React代码只作原样高亮文本，不执行。没有摄像头、音频、网络、存储、笔记窗口或postMessage入口。滚动位置仅当前预览内存，隐藏暂停，退出destroy并清除owned任务/监听。

移除原主题内嵌WOFF，使用原Helvetica/sans-serif回退；关闭的外部预览overlay中3个嵌入图标/加载GIF声明也不打包。没有将二进制改编码。保留章节使用的原CSS/图形，高亮只注册本页JavaScript和JSX所需XML语言。

固定Reveal6.0.2源码 MIT，fitty2.4.2 MIT，highlight.js11.11.1 BSD-3-Clause，原嵌入行号插件2.8.0 MIT，完整全文及原作者署名在LICENSE.txt。SOURCE.json有固定来源及逐文件hash。原行号banner2018与npm LICENSE2017均保留，不臆改年份。

actual569 compose 测试原8页/代码行号、高亮、滚动触发3步列表、形变页激活、章节导航、hidden保留、reduced、提前退出和缺节点失败；最终全部监听/任务/网络为0。测试提供JSDOM尺寸与初始CSS值fixture，真实滚动几何、动画平滑度和字体像素未浏览器验收，原生产形变算法未为测试改写。

公开七文本；完整源码、构建和测试仅本地，无虚构源码ZIP。媒体页仍是明确未接入范围。
