# Bubbly · 漂浮气泡表面

恢复已有 `bubbly:ambient-bubble-surface`，一族。固定 tipsy/bubbly-bg 8783742f0940f76e374240526b90a7ea5296f521，package版本字段1.0.0，Apache-2.0原全文见LICENSE/NOTICES。零第三方runtime依赖。

## 原机制和示例范围
原docs/index.html configs[1]的#111→#422渐变、红色随机半透明泡、白色glow完整沿用，原bubble对象、圆弧/填色、速度角度、边界回绕算法保留。用原配置API把泡数限24，不收图片生成预设。宿主不是整套Vue预设网页，但实际原效果完整运行。原cancelAnimationFrame(draw)参数是函数而非ID，改为私有requestId调度与start/stop/drawOnce/dispose，暂停保留bubbleArray，重启明确重新随机。Apache要求的修改说明在此保留；固定源码目录未找到NOTICE文件，没有编造上游NOTICE。

两个族并非同一配色变体：SiriWave是多层数学波峰/荧光曲线随振幅速度变化；Bubbly是独立圆泡粒子运动、叠色与边界回绕。均明确为本地数学/装饰演示，不代表真实Agent状态、采音、识别或生成。宿主Pause/Resume/Restart及参数控件为原创隔离层，不冒称搬入完整dat.GUI/Vue文档站。

## 隔离与生命周期
只向私有stage放Canvas，DPR固定1、实测宽度最大900、310px高。零尺寸不创建/停已有loop，恢复尺寸后可继续；不把全站body当背景。hidden立即停RAF，无后台draw；visible尊重手动暂停与reduced设置、保留控件参数。reduced只画原算法一帧，无持续RAF。重复restart每次销毁旧实例，只留一个canvas/调度链。退出清理原实例、observer、所有宿主事件，旧控件/旧observer/media不复活，重启会先清除旧canvas contextlost监听避免旧实例误杀新实例。空2D context/初始绘制失败/后续原draw异常都显示实际不可用并停资源，不用静态图片冒充成功。

无网络/字体/图片/二进制/存储/clipboard/麦克风/AudioContext/真实数据，无新CSP或sandbox权限。来源版权完整，未做截图或修改封面。

## 测试
normal/reduced/zero/early/initialdraw/failure/contextlost七模式运行生产IIFE：真实原draw命令、参数/暂停恢复、反复restart单canvas、hidden无draw、动态减动停RAF、零尺寸延后及恢复、实际getContext(null)早期失败、首帧原draw throw、原Canvas方法后期throw、实际contextlost事件停帧、退出旧事件惰性、记录RAF/监听/observer零残留、禁用API零调用。Canvas只是命令记录桩，尺寸/RAF/observer明确受控；没有渲染像素、没有浏览器GPU/Canvas raster/高DPR/帧率性能验收，也不将命令验证称可听或语音测试。
