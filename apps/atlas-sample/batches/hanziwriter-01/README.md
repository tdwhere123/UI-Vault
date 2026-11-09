# Hanzi Writer · 原版笔顺与描红练习

旧 ID hanziwriter:stroke-practice-scene。固定官方 83a762374e2344f2fb8cceca4a2ac5dfeca386f5，源包3.0.0。保留原demo标题/换字输入/Show-hide/Outline/Animate/Quiz四按钮、400×400白色描红框和原SVG渲染、笔顺匹配与动画实现。不是另画汉字或把正确结果写死。

离线范围明确：默认原“我”，另外内置原“人”“永”，共3字/原完整笔画数据。输入未内置字只提示并保留当前字，不联网，不宣称全字库。原我7笔、人2笔、永5笔。默认不自动播放；正常模式保原动画速度，reduced-motion时Animate直接显示全字并明确提示，显隐即时变化。原CSS可选Raleway没有下载，沿原sans-serif回退，无图片或二进制字体。

许可分开：David Chanin引擎MIT；字形/笔顺源自Make Me a Hanzi提取Arphic字体，来自正式 hanzi-writer-data@2.0.1，完整遵循 Arphic Public License，不能根MIT覆盖。保持3个原JSON逐字不改，公开在data目录，原ARPHICPL.TXT逐字单列。运行包仅把这些原JSON聚合为离线对象，原几何/中线未改；runtime头注释明确聚合日期/方式，网页启动可见Arphic版权、无担保、许可与再分发提示。版权与原数据无需依赖未公开ZIP。

源码审查后的局部适配：utils.ts的HEX解析分支注明基于未核StackOverflow片段，已完全移除；原RGB解析分支保留，默认4色与radical绿改为数值完全一致的rgb字面量。没有重写识别、字形、笔顺或动画。其余StackOverflow链接是touch事件现象参考，不含复制算法。完整修改后的utils/defaultOptions文本在SOURCE，未核HEX原片段不进入公开源或runtime。

原demo每次只清空innerHTML、没有destroy，并在window暴露writer/hash。本适配取消旧Quiz与RenderState、销毁原SVG renderer，逐实例撤销原document mouseup/touchend和SVG输入监听；旧加载Promise标记失效，退出后不挂载。隐藏暂停动画/定时器，恢复继续；换字取消旧动画，保留上限固定的监听数量。移除外部polyfill、hash读写和全局writer。补可见错误/正确笔画/完成状态及初始化失败提示。原初始showCharacter:false对应的显隐标志修正为false。

actual564 compose测试：原我路径逐条核DOM，重复换字监听稳定；人字以原medians换算鼠标轨迹，实际原识别器先验证错误轨迹，再两笔正确至完成；非伪造quiz结果。显隐/轮廓/动画启动、hidden暂停/恢复、early退出、SVG初始化失败和旧节点事件均测。退出全部监听/timer/RAF为0，网络尝试0。JSDOM 400×400 bounds是明确几何fixture；真实视觉、触屏/笔设备精度与字体呈现未验。browserVisualQA:not-run。

公开11文本：标准7文件 + 原ARPHICPL.TXT + data/我.json、人.json、永.json。完整构建/测试及原仓仅本地，没有假源码ZIP。原引擎零外部运行依赖；源码和数据版本/摘要/聚合方式可追溯。
