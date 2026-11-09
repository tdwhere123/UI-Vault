# BeepBox 原格点乐曲编排器（一个族）

固定 `johnnesky/beepbox@355e510099d230d066d95074c16d748d59fe054c` 原 `editor/SongEditor.ts`，不是重新绘制的壳。保留原空白乐曲、SVG 音符谱格、分轨/小节、音色/节奏/速度、原撤销重做与合成试听。没有导入第三方歌曲；用户可以直接绘制音符再播放。

## 离线原合成，不依赖 unsafe-eval
原 3 个 `new Function` 生成器在构建期完整穷举：FM 13 算法 ×18 反馈=234，拨弦1/2声部=2，效果7布尔位=128，合364函数。普通静态 JS 函数表是原生成函数体，非预录声音、CSS替代或重新写振荡器。全部函数规范化语法等价；362个完整原/静态FM与效果乐曲CPU PCM比较逐样本相同，1,482,156个非零样本。该PCM矩阵未独立构造EQ-on参数或每一拨弦声部的音频输入；这两部分有完整函数体等价检查，不把它冒称全音色硬件听验。

两份 runtime-functions 分片先于 runtime.js。清洁 ui-vault-569 的真实 createTextCache（默认8MiB）及 createPreviewLoader 取齐全部脚本后单次 compose，实际缓存约3.24MB（UTF16计费），每片UTF8严格小于700KiB。任意一片失败时不执行半套函数表。默认CSP原样，无网络/worker/eval能力增加。

## 明确未开放
文件导入/导出、URL分享/播放器跳转/嵌入、外部剪贴板、浏览器网址同步、持久保存/历史歌曲恢复、外MIDI、录制、SW、自动播放均未开放。菜单与快捷键背后入口一起关闭；本地pattern/instrument复制粘贴和100步内存undo保留，不称为持久保存。所有数据仅此预览会话，退出清空。解释链接不外跳。

原SVG符号为上游可读文本，无base64二进制；原MIT与imperative-html完整MIT、SFXR派生滤波器官方完整MIT见NOTICES。

## 交互/生命周期证据
`node test-precompile.cjs` 执行构建期原newFunction与静态表函数等价和原CPU PCM对比（该测试/构建器不会进入浏览器）。
`node test.cjs production`：真实delivery所有字节经569 loader挂载，断言生产无test API，原谱格pointer事件改变SVG、原Play输出非零PCM、隐藏停音与旧音频回调/旧Play无复活、退出全清理，缓存限额/缺片failclosed/CSP验证。
其他 `normal/reduced/early/missingroot/unsupported/nodefail/disconnectfail/failure` 使用严格分离pilot，仅多一个内部editor引用用于模型断言。实测原pointer创建Note、原undo/redo改变/恢复Song、tempo控件改变真实模型，文件快捷键与Shift+I复制旁路不触外部能力，Ctrl+Space及原录制按钮不改变录制/播放/乐曲状态，音频不可用/节点初始失败/断开失败/晚故障有明确错误态。退出应用listener、RAF、timer为0，fetch/XHR/Worker/eval/Function/open/storage/history/MIDI/SW/clipboard尝试为0。

测试使用JSDOM固定几何/DOMMatrix与PointerEvent接口替身；WebAudio仅接口替身让原生产CPU synth写出真实PCM，不是假装原生浏览器出声。没有native像素、真实触摸/响应式排版或硬件听觉验收，等待用户自行查看。减少运动关闭非必要CSS动画/transition与原连续playhead轮询（用户编辑事件更新仍保留），主动音频播放仍保留；隐藏关闭context，回来不自动播放。

本地构建：`deps/npm ci --ignore-scripts`，根 `node analyze-precompile.cjs` 再 `node build.cjs`。实际改后首选源码在src；早期adapt.py为取材起点，不是最终复建入口。运行时无构建器、原动态编译路径或测试API。
