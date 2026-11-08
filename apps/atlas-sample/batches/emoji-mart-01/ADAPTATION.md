# Emoji Mart 本地表情检索与消息草稿

## 来源与计数
新来源 Missive Emoji Mart。452 已有 Bencho 表情反应条，但没有这个完整分类/搜索/肤色选择器；只计一个工具家族，不把数据中的 1,870 个基础记录或肤色/组合变体计作新图标、页面。Unicode 数据记录不等于独立可见字形数量。

运行组件 emoji-mart 5.6.0 对应官方 npm gitHead `8af68308851a0585c5224fb16f574ca92f4f578c`，数据 @emoji-mart/data 1.2.1 对应 `16978d04a766eec6455e2e8bb21cd8dc0b3c7436`。两者分别固定，未混称为同一发布版本。原始源码、npm原件、SHA-256、锁文件本地保留。

## 实现与适配
真正使用 Emoji Mart 的原始 HTML 自定义元素、Shadow DOM、Preact 渲染、分类、搜索、肤色/原生 Unicode 逻辑。外围草稿插入/撤销/本地预览是本适配新编写的实际逻辑，不是声称上游自带完整聊天系统。

只改上游发布模块的两处 localStorage 引用为隔离的内存对象，保留频繁使用与肤色状态在当前详情生命周期内，不访问浏览器存储。vendor 适配审计记录原/改文件哈希。草稿仅内存，采用 textContent 显示，不发送、不上传、不联网、不请求剪贴板。

数据与中文界面文本直接本地打包。强制 native set；不分发 Apple/Google/Twitter/Facebook 表情图像或精灵图，不加载远程字体。不同设备的字体和支持版本会影响 emoji 外观，未提供图片回退。关键词检索主要是数据原有英文关键词，不承诺任意中文词语搜索。

## 许可
Emoji Mart 和数据完整 MIT；预捆绑 Preact 10.6.4 完整 MIT。保留原生支持检测代码来源 is-emoji-supported 的 Koala Interactive MIT。数据构建输入 emoji-datasource15.0.1、emojilib3.0.10、unicode-emoji-json0.4.0 的 MIT 全文附上。仅 native Unicode 元数据，没有移入这些项目的第三方表情艺术图片。

## 验证边界
构建/JS解析、真实 Shadow DOM 挂载、选择插入/光标插入、撤销清空恢复、rocket 搜索、空结果、分类原生滚动处理、肤色提交及带 modifier 插入、本地预览均测试。禁 eval/Function/fetch/XHR/Worker/localStorage/动态脚本调用，实际测试无调用。

JSDOM 的 IntersectionObserver 使用桩，分类滚动确认原生处理器改变 scrollTop，不冒称像素滚动/滚动高亮验收。未运行真实浏览器视觉验收，未验证设备 emoji 字体覆盖或真实屏幕阅读器体验。上游保持其列表渲染策略，测试桩让所有行可见，不能把 JSDOM DOM 数当作浏览器虚拟化/帧率结果。

默认 allow-scripts iframe 与既有 CSP 即可，不增加权限。独立详情按需加载 JS 约515KB（gzip112KB）。源码 ZIP 只在本地保留，不伪装线上下载。
