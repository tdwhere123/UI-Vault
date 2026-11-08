# Cara · 几何视差项目简报

恢复旧 `leko:cara-complete-site`，一个完整页面家族，不把四章节/五屏/七种几何图形分别计数。

原 LekoArts Cara 5.1.7：Hero/Projects/About/Contact、五屏offset0/1/3/4与Projects factor2、原斜切色块/波浪路径、几何SVG位置/颜色、项目卡渐变、Theme UI主题和Footer暗亮切换保留。不是重新画一套相似界面。

固定来源：[LekoArts/gatsby-themes](https://github.com/LekoArts/gatsby-themes/tree/0ee600732beb88a49135760df9ed6f4d419fde2e/themes/gatsby-theme-cara)。[主题原MIT](LICENSE-MIT.txt)、[示例与SVG原0BSD](LICENSE-EXAMPLE-0BSD.txt)、[实际34个运行包完整许可证](THIRD-PARTY-NOTICES.txt)、[来源与版本证据](SOURCE-EVIDENCE.json)。原七符号sprite从固定 examples/cara/static/icons.svg 恢复并内联引用，公开原件 [original-icons.svg](original-icons.svg)。没有二进制包装。

## 构建/内容适配
这里是独立React浏览器预览，不是完整 Gatsby 网站：移除SEO/GraphQL/filesystem构建路径，原MDX章节换成明确虚构的本地Exodus项目简报 JSX，仍使用原Themed文字与ProjectCard布局。没有MDX实时编译或任意代码执行。

新增顶端四段导航调用原 Parallax.scrollTo。项目卡保留原视觉，改为本地About滚动，不伪造作者文章/跳转成功。Contact只说明展示，不发送邮件或提交。原外链作者PNG标记移除，保留文字LekoArts/Theme归属与许可证，不用未核媒体代替。Theme UI关闭localStorage/系统配色读取，暗亮选择仅当前内存；system-ui字体，无远程字体。

原Parallax 9.7.5 / web 9.7.5；theme-ui 0.15.3部分内部包按上游范围解析0.15.7，实际版本全部列证据与lock，非谎称全0.15.3。34包中hoist-non-react-statics是BSD-3-Clause，其余MIT。

## 动态与清理
原浮动/波浪为CSS动画；blur/hidden暂停CSS与所有Parallax控制器。恢复可通过导航；减少动态偏好在本次挂载读取，禁CSS动画/过渡，层speed=0、导航即时定位。字体或系统动态偏好运行中变更没有专门浏览器验收。

原 Parallax.resize 使用未清理的150ms timer、raf回调，layer controller销毁也未stop。本次补丁仅归属/取消这些任务、卸载停止原层controller；不重写滚动算法。pagehide卸载React，停止动画与原事件，恢复进入前html class。

## 测试范围
normal/reduced/narrow/production四支通过。原Parallax真实space/current/layer集合、scrollTo至1800、原滚动事件更新current、卡片本地跳段、原Light/Dark切换、反复导航/blur、滚动中hidden暂停、resize定时尚未完成与导航中pagehide。最终RAF/timeout为0，fetch/XHR/Worker/open/localStorage调用0。七原symbols、超过50个use引用、没有img/远程媒体、四真实项目卡。生产分支读最终runtime，无测试API。

JSDOM仅提供600px高度、320/1000px宽度等几何；不会真正合成视觉。真实滚动手感、波浪CSS path兼容性、窄屏换行/溢出与像素还未验收。不能将状态测试视作浏览器视觉验收。源码/补丁/测试/lock本地保留，无公开ZIP下载承诺。
