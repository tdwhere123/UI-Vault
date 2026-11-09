# Codrops 原滚动文字场景 Set 1
固定源 af28d61d1f8d3d117f5d1e9b09d5209e20a1a212，完整 Set 1 的15组原拆字/透视/滚动编排与文字，一族而非15条。Set 2未纳入。原 scroll() 编排逐字保留，不以CSS伪效果替换。

原 Typekit 字体不分发，也不外联加载。保原CSS系统fallback，因此字形、字宽、换行与原站有明显差异；原变形/渐变/场景正文仍保留。正文是上游设计文本，非科学或医疗说明。删除原外站导航、广告赞助/遥测、远程WebFont。

依赖Lenis0.2.28、Splitting1.0.6及两内部MIT包；GSAP3.15.0满足原^3.11.4范围但不是原历史锁定包。GSAP是Standard许可，不是MIT，原copyright/header和完整当前条款随附，不能据此承诺任意动画编辑器再分发。Lenis旧npm包缺独立LICENSE，其README明确MIT，补充标准全文与真实作者信息已明确标为补充而非原文件。

reduced-motion初次加载时不启动GSAP/Lenis，显示完整静态文字；系统偏好变化请重开。隐藏时销毁场景并停任务，重新显示从初始状态恢复。销毁按资源逐项执行，单项抛错仍尝试其余清理并显示错误，不冒称失败资源一定释放。

## 验证
`node test.cjs normal|reduced|early|missingroot|failure|cleanup`：clean ui-vault-575真实createTextCache/createPreviewLoader及默认CSP；15标题/字符完整，固定几何下原GSAP transform随滚动改变；隐藏重建/早退/构造故障/销毁异常后RAF、timer、observer和应用listener归零，fetch/XHR/Worker/eval/Function/open/storage调用0。
JSDOM几何与滚动接口模拟，不是原生浏览器像素验收；未验证实际字体排版、真实惯性触控/滚动观感。没有截图或GPU/native浏览器运行。
