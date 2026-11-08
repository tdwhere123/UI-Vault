# Jodie · 非对称设计图集与项目阅读

恢复旧 `leko:jodie-complete-site`，只计一个完整页面家族。不是按6项目、7图、路由或CSS布局分别计数。

原版 Jodie 5.1.9：非对称首页divisor分组、modifyGrid、响应式item-list CSS、GridItem悬停/焦点、侧栏Logo与Navigation、Projects索引、Project详情、Page/About、Footer与SkipNav组件保留。510比对：Cara是纵向视差叙事，Jodie是网格导航到独立项目阅读，不是Cara换色；现有图像gallery是组件，不具有这一整套原站结构。

固定来源：https://github.com/LekoArts/gatsby-themes/tree/0ee600732beb88a49135760df9ed6f4d419fde2e/themes/gatsby-theme-jodie

[原MIT](LICENSE.txt)、[26个实际运行包完整通知](THIRD-PARTY-NOTICES.txt)、[固定来源/实际版本](SOURCE-EVIDENCE.json)。hoist-non-react-statics BSD-3-Clause，其余运行包MIT。原grid CSS与modifyGrid适配副本逐字未变；固定官方raw Homepage/grid/modifyGrid与归档比较仅末尾换行差异，原件保留。

## 明确替换和运行范围
不是完整 Gatsby 执行：移除SEO/GraphQL图片查询与head输出，Gatsby Link改白名单内存路由，GatsbyImage改普通img薄适配。原模板、polished颜色逻辑、Theme UI样式不重画。

六个独立设计主题：建筑拱门、植物叶片、折纸色面、轨道、纸片节奏、夜窗；另一本地About封面。它们是本次原创SVG，不是原作者摄影，不是模型输出，不是用同一占位图反复复制。实际纯文本源码及哈希公开在[ARTWORKS.json](ARTWORKS.json)。原摄影/外链媒体未加载，不编码二进制。

新增顶部适配说明和“返回上一页”。本地路由后将焦点移至标题、滚动回顶；返回恢复前页滚动位置及触发卡片焦点。没有浏览器历史写入/真实外站/持久化。作者Theme/LekoArts归属文字保留，外链改静态文字。Logo仍为原MIT源组件，不暗示作者认可这些虚构项目。

ThemeUI禁localStorage/系统配色读取，system字体。图像失败明确显示“未能显示”，不静态截图冒充。没有任务提交/上传/下载、网络、后台、凭据、eval或CSP扩展。

## 验证边界
normal/narrow/reduced/image-error/production五支通过：原首页7项div7、7不同SVG、原Projects6项、项目模板标题/图片、About、导航aria-current、返回滚动/触发卡片焦点、反复导航、同步快速切两个项目最终状态、未知路径拒绝、导航尚在React提交时pagehide及重复退出。最终RAF/timeout0，fetch/XHR/Worker/open/localStorage0。生产分支读取最终runtime。

原响应式CSS已固定源码比对，**narrow测试只模拟innerWidth=320，不代表浏览器真实CSS排版验收**。window.scrollTo/scrollY为JSDOM替代；真实图像解码、键盘/指针浏览器行为、网格比例与手机像素未验。没有真实浏览器视觉通过的声明。

publicFiles严格白名单只包含8公开文件；本地manifest、测试/锁/原件/构建工具与验证日志不自动上传。没有虚假源码ZIP链接。
