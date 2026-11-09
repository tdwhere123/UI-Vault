# SiriWave · 荧光数学曲线

恢复已有 `siriwave:fluorescent-voice-wave`，一族。固定 kopiro/siriwave 744cb00235b7900733efff25dc73b4d1ab77c92d，package版本字段2.4.0，MIT原全文见LICENSE/NOTICES。零第三方runtime依赖。

## 原机制和示例范围
原ios9完整荧光曲线来自固定src/ios9-curve.ts，classic-curve.ts原件也保留为本地模块，不展示iOS13未完成效果。原iOS9曲线draw、随机出生/消退/叠色算法逐字保持。宿主用原setAmplitude/setSpeed调节，不是真实语音强度；运行时保持lerp，静止/减动时直接落到控件目标，仅页面可见且Canvas尺寸为正才画一帧；隐藏或零尺寸输入仍保留新参数但不绘制。原index调度改为可单帧drawOnce、run守卫、异常清理；pause/start不重置phase。原曲线仍使用Date.now出生时间，隐藏恢复可能刷新自然曲线，不声称确定性时间冻结。名称仅标来源，不用Apple/Siri logo、不暗示授权。

两个族并非同一配色变体：SiriWave是多层数学波峰/荧光曲线随振幅速度变化；Bubbly是独立圆泡粒子运动、叠色与边界回绕。均明确为本地数学/装饰演示，不代表真实Agent状态、采音、识别或生成。宿主Pause/Resume/Restart及参数控件为原创隔离层，不冒称搬入完整dat.GUI/Vue文档站。

## 隔离与生命周期
只向私有stage放Canvas，DPR固定1、实测宽度最大900、310px高。零尺寸不创建/停已有loop，恢复尺寸后可继续；不把全站body当背景。hidden立即停RAF，无后台draw；visible尊重手动暂停与reduced设置、保留控件参数。reduced只画原算法一帧，无持续RAF。重复restart每次销毁旧实例，只留一个canvas/调度链。退出清理原实例、observer、所有宿主事件，旧控件/旧observer/media不复活，重启会先清除旧canvas contextlost监听避免旧实例误杀新实例。空2D context/初始绘制失败/后续原draw异常都显示实际不可用并停资源，不用静态图片冒充成功。

无网络/字体/图片/二进制/存储/clipboard/麦克风/AudioContext/真实数据，无新CSP或sandbox权限。来源版权完整，未做截图或修改封面。

## 测试
normal/reduced/zero/early/initialdraw/failure/contextlost七模式运行生产IIFE：真实原draw命令、参数/暂停恢复、反复restart单canvas、hidden无draw、动态减动停RAF、零尺寸延后及恢复、实际getContext(null)早期失败、首帧原draw throw、原Canvas方法后期throw、实际contextlost事件停帧、退出旧事件惰性、记录RAF/监听/observer零残留、禁用API零调用。Canvas只是命令记录桩，尺寸/RAF/observer明确受控；没有渲染像素、没有浏览器GPU/Canvas raster/高DPR/帧率性能验收，也不将命令验证称可听或语音测试。
