# 波形区间审阅

恢复旧条目 `wavesurfer:audio-region-review`。保留固定官方 Regions 完整示例的五个原区间/标记、原配色算法、循环、拖动选择、拖动寻位与缩放，以及原 WaveSurfer 渲染器、Regions 和 WebAudioPlayer 播放算法。外层中文说明和生成/停止按钮为本地适配，不冒称上游完整音乐工作站。

## 音频范围
原 `/examples/audio/audio.wav` 未获独立素材许可，本包不请求、不编码、不复制它。按钮手势后在浏览器内用数字公式生成 24 秒原创合成测试声，低音量播放；不是原音乐、用户录音或真实任务素材。不访问麦克风、硬件 MIDI、存储、上传或服务器。默认不创建 AudioContext、不播放。点击彩色区间才试音，停止按钮随时暂停；页面隐藏会完整销毁并关闭 AudioContext，返回后须重新点击生成，区间编辑随之重置。

## 精确改动
- 原 WebAudioPlayer 增加明确 `setLocalBuffer(AudioBuffer)` 本地入口，接收同一合成 PCM；不走原 URL/fetch 路径。原 playback/seek/loop/stopAt 算法不重写。`ws.load('', [samples], 24)` 使用原无网络数据渲染分支。
- 原 Renderer.render 内没有 await，却声明 async，原调用处不接 Promise，Canvas 错误会逃逸；仅去掉该 async，让错误走现有 load/宿主异常处理，不改变绘制算法。
- 原演示监听纳入清理，播放 Promise 捕获失败。原控制文字/五段内容保留；去 console 输出和外部文档导航，来源仍在公开 metadata。
- 不传原音频二进制、无 Base64/Blob 音频资源、无 CSS/字体/远程图片，默认 CSP 不改。浏览器原生 Canvas/WebAudio 为必要能力，失败显示可见不可用提示，绝不拿静态波形替代成功。

## 验证与边界
生产实际 compose、五区间、DOM pointer 拖动（固定几何）、区间配置/点击原播放链、暂停、缩放、拖动选择开关、隐藏重建/退出、Canvas 失败、AudioContext 不可用、resume 未完成就退出都验证通过。默认 AudioContext 数量0，退出 context 全关闭；window/document 应用监听、RAF、timer、ResizeObserver 都归零；禁用 network/storage/eval/Function/Worker 检查无调用。JSDOM 内 Canvas 与 AudioContext 为测试桩，确认原算法实际调用与 PCM 数值/区间状态，不是音频可听、波形像素、触屏或设备兼容验收。生产包不含测试桩或 `__REGIONS` 调试入口。

实际 loader UTF16 缓存144342字节，3资产请求、命中及释放通过。原库运行依赖0，官方 BSD-3-Clause 全文保留；构建器 esbuild 不进入产物。完整原件、修改后的源码、构建脚本和测试只保存在本地工作目录，公开为七文本运行包/证据，不提供未上传 ZIP。
