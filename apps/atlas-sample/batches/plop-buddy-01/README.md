# PlopUI · 手绘助手伙伴

一个原版角色体系：Pip、Bix、Snooze、Confetti、Specs、Hum，分别表达 success/error/stale/congrats/preview/thinking。六角色、三尺寸不是六个独立条目。

保留固定官方 Buddy 原 SVG 路径、CSS 动画、PlopFilters 手绘滤镜及原 token 生成器。TheCast/Sizes 使用原 Storybook 两段布局；Playground 选择器是明确本地展示控制，可切换原 mood/size/hands 属性并暂停动态。不执行发送、同步、剪贴板或后台业务。不是完整 Storybook，也不宣称包含 Toast/Callout 的其他展示故事。

原 poster/light 表面与滤镜属性保留。未打包 Sketchpop 等二进制字体，使用原 token 中既有系统回退；手绘字形可能与官网不同。无图片替身、外部资源、音效、震动、存储、Worker 或网络调用。

官方源码 MIT，实际 React/ReactDOM/scheduler 完整 MIT 全文在 LICENSE.txt。SOURCE.json 记录精确 revision、逐文件 Git blob、SHA256 和差异；原角色/CSS 未修改。公开仅七个文本文件；完整源码、构建与测试仅本地，无虚构源码下载。

actual567 compose 的六状态、尺寸、双手、无障碍标签、暂停/隐藏保留状态、提前退出、缺根节点失败及退出后旧节点已测试。资源退出归零。JSDOM 不渲染真实 SVG 滤镜和动画像素，视觉未验；系统 reduced-motion 用原 CSS 规则，不宣称已做真实浏览器像素检查。
