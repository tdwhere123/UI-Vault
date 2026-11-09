# 波形与声效实验

恢复旧 pizzicato:audio-effect-playground。同固定官方site/index.html精选四段原完整控件：Waveform、Attack/Release、Delay、Low-Pass Filter，保原HTML区块、参数滑杆、播放/暂停/停止图形CSS与原Pizzicato声图/包络/延迟/滤波算法。一族而非四条，不称整个音乐/麦克风演示都已收。

原前两段原本是合成波形；后两原音乐文件未纳入，明确改用本地220Hz sine/sawtooth测试音驱动原effect与原控制器参数，不冒充原音乐内容。未引入无许可Dolby检测、音频文件、卷积脉冲、白噪声、麦克风、品牌图片、Google字体、GA、GitHub外部脚本、Prism/Modernizr。系统字体；原CSS只取作者自定义及响应式段，排除HTML5Boilerplate通用前后段。代码示例是原静态显示，不执行编辑器内容。

原site segment绑定逻辑被透明改为用户点击才初始化，保原play/pause/stop事件与参数赋值。master音量限0.3、各段默认0.15且滑杆上限0.3，和原音量1有差异。播放一段时停止其他段；若有release尾音仍遵从原包络。固定库IIFE转静态factory，不用eval；传入受控Context工厂与定时器，用于收集原节点和晚回调。原AudioNode.connect补丁在关闭时恢复。没有fetch、文件、录音、存储/系统剪贴板、真实后台。

隐藏或窗口失焦：停止所有节点、断连、关闭AudioContext并取消原release定时器；恢复可继续调控参数但不自动有声，下一次点击重新建context。退出移除所有宿主监听；resume迟到成功/失败有代次与context身份守卫，不可影响新context。构造/连接/不支持/运行异常明确失败关闭，不显示假成功。reduced-motion CSS静止，声音仍必须用户主动操作。

## 验证范围
七模式actual571 compose：normal/production/early/unsupported/failure/late/reduced。原Sound/Delay/LowPass代码实际运行，在受控WebAudio节点/AudioParam API桩上验证播放/暂停、参数值、声图连接、隐藏恢复、旧计时器、旧resume拒绝、失败断连、全部Context关闭与监听/计时器清零。尚无真实设备可听输出/音色、浏览器AudioParam精确时间或像素验收，API桩不等同声学验证。无交互前Context数量为0，禁止API调用为0。真实loader缓存/释放在8MiB预算内。

runtime无npm依赖，原MIT全文公开。原源码固定Gitblob及SHA保留，修改后的engine/main/build与测试私有保存，不声称源码ZIP发布。
