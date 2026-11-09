# Codrops 原Collaborators章节
固定ac0fe97a4e4f786ef5d514d7030b6eb5855da05b，原第11章完整双文字块（段落＋ONE WORD）及Replay，1场景族。不是整页19章/Hero，不把预设拆成多条。

原Collaborators逐字时间抖动、按词/行分配、光标坐标、文字新鲜色、移动和结束闪烁保留。每块最多3个本地脚本光标，ONE WORD原只有2个活跃writer；不是联网多人、真实Agent或麦克风字幕。原章节正文不改。

保shared滚动触发、离屏reset、点击块/replay和屏幕阅读隐藏文本。省去整站pager/Smoother/hero及其他variations。PlusJakartaSans/HostGrotesk字体未分发，删除font-face而使用原systemfallback，字形/换行/测量将不同。移除全页grain.png装饰噪点覆盖，原底色与光标样式保留，不提供伪造纹理。

GSAP/SplitText/ScrollTrigger3.15.0，原vendored头也是3.15.0；完整Standard许可与原版权头保留，不是MIT。未打包Flip/Smoother。Canvas2D原measureText使用真实浏览器指标；不可用时显式失败，不用伪指标蒙混。

隐藏清理原timeline、SplitText、scrolltrigger及监听，取消未完成fonts.ready初始化，显示重新挂载；reduced走原show静态完整文字、停ticker。退出资源清理，旧节点不重建。

## 验证界限
`node test.cjs normal|reduced|early|missingroot|failure|nullctx|second-null`，actual577生产loader/CSP/cache，原字符从部分到全部可见、原caret transform、Replay后隐藏中断、重挂/旧按钮/早退/首个或第二个Canvas测字失败与退出资源。能力调用0、RAF/timer/observer/应用listener0。
测试用固定DOM几何与Canvas测字指标替身，证明算法状态/真实DOM命令，不是原生字体像素/滚动观感/光标位置视觉验收。未native截图。

构造半途失败亦会回收此前已构造的块、保存的SplitText和共享refresh监听；第二块测字不可用注入通过，未将部分空白当正常成功。
