# wallabag · 本地文章精读与主题侧栏

固定原 Twig 阅读模板真实继承渲染，原文章、信息栏、标签和侧栏布局。正文为原创虚构文章，原无附件/零批注分支，不是外部抓取或真实账户。使用 Twig.js 兼容解释器进行构建，不声称完整 Symfony/PHP 服务运行。

原 Materialize 侧栏/折叠菜单与 Stimulus 主题控制器真实工作：桌面展开主题，亮/暗/自动；窄屏打开/关闭侧栏。主题仅实例内存，不写 cookie 或 storage。阅读进度保留原算法并补零高度与0..100边界。无批注发送、保存、抓取、同步、账号、分享或导出；对应不适用入口禁用，不显示假成功。

原 CSS/SCSS 与菜单布局保留。为不打包未闭合字体文件，Material功能字形明确换为已核 Lucide 原 SVG，形状有差异，逐图源与映射在 SOURCE.json；字体系统回退。未使用 IcoMoon/社交媒体图片规则、空动作浮钮与 Polymer 预加载样式排除，不留空图片占位。

完整 wallabag/Materialize/Stimulus/cash/Anime/Normalize/Waves MIT 与 Lucide ISC/Feather MIT 条款见 LICENSE.txt。Materialize 同版本 Anime2.2.0 改用官方未压缩原实现，未重写动画。完整来源、变更与依赖版本在 SOURCE.json。

actual571 compose 六模式通过：正常/reduced/移动侧栏/打开中退出/提前退出/缺root。原折叠与主题重复操作、移动开关、进度边界、hidden与旧节点退出检查；退出监听/计时器/RAF/网络0，不读写存储/cookie。JSDOM不是像素或原生手势验收，视觉仍未验。

公开7文本；完整原件、构建与测试仅本地，不声称源码ZIP已上传。
