# TensorFlow Playground · 原本地神经网络实验

固定官方完整页面与NN/D3/数据代码，保留二维数据选择、特征开关、隐藏层/神经元、学习率/激活/正则/批大小、逐步训练与播放暂停，以及损失/决策边界显示。是实际原小网络数值训练，不是预制曲线，也不是远程TensorFlow/LLM服务或真实用户数据准确率。

## 离线差异
- 不读取/写入URL hash、不加载analytics、不分享或跳出外链；训练状态仅当前实例。GA调用本地无操作。
- 取消远程Roboto/Material Icons字体与favicon。原按钮位置保留，字体图标改可读系统符号；字形不声称原版像素相同。原说明页保留，分享链接不可用。GitHub角标删除，不声称品牌赞助。
- MDL原CSS内现成SVG文本由base64解码后转UTF8 percent data URI，图形路径未重画；不是二进制字体/图片包装。MDL无需的旧Date/RAF polyfill不分发，依赖现代浏览器原生RAF。
- seedrandom仅取global的间接eval改globalThis，原随机算法不变；静态导入原seedrandom.js而非其他随机算法。D3本场景未使用的CSV动态编译入口明确禁用，原图表/scale/DOM算法不变。
- 隐藏立即暂停训练及调度；恢复保持暂停，需用户主动播放。退出销毁MDL控件、清DOM/监听/RAF/timeout/observer、恢复Math.random。失败显示不可用，不留伪曲线。
- 原损失历史随主动训练累积，长时间运行的性能尚未真实设备验收，可Pause/Reset；不宣称无限训练性能有界。

## 真实验证边界
actual563 compose，已断言注入CSP meta并含 connect-src none，运行生产JS。原HTML的 head lang 属性已移到 html，保持宿主精确 head 协议；早版未注入CSP的组装测试不作为CSP证据。真实原NN训练12步使有限loss及主热图RGBA哈希改变；层增减重置、学习率、主动训练、隐藏、旧callback和退出通过。normal/reduced/early/unsupported/failure五关键模式通过，退出监听/RAF/timeout/observer0，动态执行/网络/Worker/open尝试0，Math.random恢复且无遗留canvas。
Canvas createImageData/putImageData、几何/Range/SVG路径长度/observer是测试替身，实际NN/数据/MDL/D3与像素数组计算是真的。未做原生光栅、鼠标命中、移动端或视觉验收。nn.ts和dataset.ts与原件逐字相同；不声称数学全域正确性由这些有限测试证明。

复建：私有目录 npm ci --ignore-scripts；python adapt.py；node build.mjs；node test.cjs normal（另reduced/early/unsupported/failure）。node package.py生成七文本及manifest。公开白名单不含私有构建脚本，不冒称它们已公开。
