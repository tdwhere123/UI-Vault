# Diff2Html · 多文件变更阅读

恢复既有 `diff2html:multi-file-patch-reader`，一个多文件阅读族，不把三个文件或格式选项计新增条目。

## 原版来源和版本
https://github.com/rtfpessoa/diff2html/tree/72331ff5d13a8d4d1f11256a7b554dd0d69d7014
直接构建此固定源码（根 package.json 版本字段 3.0.0-beta.1），不是声称使用对应 npm diff2html 成品。使用原 TS parser/renderers、原 UI、高亮和 19 个 Mustache。保留官方 Demo 的版面与六种配置控件；上方中文标题和三文件补丁是本地宿主示例，不是上游真实 PR 或远程仓库内容。

## 可实际操作
原多文件摘要、文件锚点/焦点、逐文件 Viewed 折叠、左右同步滚动、逐行/并排格式、light/dark/auto、摘要开关、词/行/无匹配、阈值和比较次数配置。增加空补丁/重置供边界查看。只是读取补丁，不编辑、应用、执行或提交代码。

## 安全与改动
移除官方 Demo 的远程 URL 加载、history 查询参数和外部帮助链接。无网络、账户、剪贴板、存储或下载操作。固定本地补丁包含 HTML 注入测试文字，原渲染器进行转义。
Hogan 模板仅构建期预编译，浏览器只使用 runtime Template；自定义 raw/compiled templates 拒绝，Template 没有 compiler，固定参数不是 lambda。默认 CSP 不变，无 eval/worker/远程字体。原 UI 对子节点事件增加 ledger 和 destroy，重绘和 pagehide 都移除；无持续动画或异步队列。

## 许可
主源码 MIT；运行依赖 diff MIT、Bulma MIT、highlight.js BSD-3-Clause、Hogan Apache-2.0。原五个 SVG 与 Octicons 4.4.0 SVG 规范化路径一致，保留 GitHub MIT。未使用 Octicons 字体/OFL 或任何二进制资源。完整原文见 LICENSE.txt 和 THIRD-PARTY-NOTICES.txt，精确版本与逐文件证据见 SOURCE-EVIDENCE.json。无公开源码 ZIP 下载，原件仅本地保存，不伪造附件。

## 验证边界
生产 IIFE 在 JSDOM 测真实三文件解析、高亮、HTML 转义、配置重绘、原左右滚动状态、折叠、摘要导航、空补丁、数值上限、重复切换，以及旧节点和退出清理。scrollIntoView 为可观测 stub；DOM scrollLeft/Top 可赋值，未验真实浏览器滚动几何。没有浏览器像素、原生文本选择、触摸/窄屏布局或完整无障碍验收。没有截图或封面改动。
