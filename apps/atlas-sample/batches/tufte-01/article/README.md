# Tufte CSS · 旁注式研究札记

升级原ID `tuftecss:margin-note-essay`，一个完整文章场景，不计段落或边注为独立UI。

原来源：edwardtufte/tufte-css，固定 b5d7b7bbe5ce9c4c50fcfad4f19ee3646cfd7ae1。原MIT全文在 LICENSE.txt，详细原件hash及改动在 SOURCE.json。保留原CSS的正文宽度、题记、自动编号旁注、无编号边注、图注/全宽图和760px窄屏label-checkbox展开机制。没有改写为卡片模板。

明确替换：本文中文短文、数字与两幅inline SVG均为本演示原创MIT fixture；不含原站历史图片、第三方引文或真实用户数据。删除原ET Book @font-face，使用系统Palatino/Georgia衬线字体，中文fallback依设备。不是原字体的视觉等价复刻。没有字体/图片二进制、CDN、模型或远程资源。

新增：label可用Tab及Enter/空格激活，原生checkbox仍负责CSS显示；ARIA状态同步。pagehide移除全部适配器监听并禁用输入，旧节点不再改变状态；初始化关联失效显示明确不可用提示。没有定时器、observer、storage、fetch、Worker、eval或后台。保持宿主原allow-scripts/CSP，不扩大权限；主题仅跟随原CSS系统深浅色偏好。

公开仅7件UTF8运行/说明文件，完整固定原文和测试源码只在本地研究目录，不承诺已发布源码ZIP。DOM/资源/原规则保留/重复键盘与label/失败和退出验证见VERIFICATION.json。JSDOM不验证窄屏实际位置、中文字体、折行、屏幕阅读器或SVG像素；真实浏览器视觉待验。未截图或制作封面。
