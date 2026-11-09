# Tone / p5 原包络合成与视觉场景
旧 ID tonejs:envelope-visual-scene，固定 Tonejs/Tone.js 105c04cc00289caf49684ac5c7621bce8a042c4c，examples/funkyShape.html，原作者 polyrhythmatic。保留原 p5 正弦 kick 波形、noise 驱动 bass 圆和 bleep 方块，原 Filter/NoiseSynth/PulseOscillator/Amplitude/FrequencyEnvelope、Part/Loop 与四组参数抽屉。无音频文件、预制曲线或 CSS 替身。

## 版本与许可
原 CDN p5 1.0.0 未压缩文件与官方 npm1.0.0 字节相同，但原 banner 写 v0.10.2 (2020-02-29)。保留此历史不一致。本包使用同 npm1.0.0 官方生产 p5.min.js（排除 debug reference JSON），不是随意升级。首选源为 npm gitHead f503b0b81aa86671e8ea900133985b3d26556dac。
p5 LGPL-2.1 及全部嵌入条款见 NOTICES/P5-LGPL-2.1；Tone MIT，实际宿主依赖另有 BSD/Apache-2/0BSD，SOURCE列发射字节。测试 WebAudioEngine 不在生产包。

## 离线适配
- 固定 Tone TS 与原 examples/ui Lit/Material 控件直接构建。去其他示例导航、远程字体、复制/外链；Material字体图标替换本地文字/Unicode，字形不同。保原完整参数抽屉。
- Context 用公开 clockSource:'timeout'，不使用 Worker。初始Destination静音且原mute默认静音，主动播放才解除静音并运行声音；停止/隐藏停 Transport 并 suspend Context，可见恢复不自动播放。
- p5两处环境探测 Function('return this') 改 globalThis，未用JSONP module24明确unsupported。原 Canvas/噪声/包络数学未改；无 p5.sound。
- p5与host独立脚本可替换。隐藏暂停RAF/timer，退出删除p5/组件并dispose原节点、关闭context。异步参数图离场完成有guard。失败显示不可用，不显示假画面。

## 已验边界
clean ui-vault-565 composePreview，检查实际CSP connect-src none。原 Tone 合成在测试用 JS WebAudioEngine 中产生非零PCM，原p5 kick点位随真实包络改变。不是 native 音频设备/浏览器光栅验收；Canvas为命令记录替身。
normal/reduced/early/unsupported/failure五分支，主动开关与隐藏不自动播放，退出contexts closed；RAF/timeout/interval/observer/全应用EventTarget ledger清零；fetch/XHR/Worker/eval/Function/open实际尝试0。Reduced初始静止，主动播放允许必要音画动画。未验真实音色、原生触摸与像素。

## LGPL首选源、复原与替换
PUBLIC-SOURCE.json/source-XX.json是实际UTF-8首选源和构建输入，不是私有ZIP或二进制编码。
运行 node restore-source.mjs restored-source；进入该目录 npm ci --ignore-scripts --cache ../npm-cache；node build.mjs。
本轮验证复原与本机已安装锁定依赖下runtime字节一致，不声称全新机器联网安装已验。

p5-source含官方完整src/tasks/translations/Gruntfile/package/lock/Babel配置及LGPL。原生产任务 browserify:min 明确exclude docs/reference/data.json、ignore translations，不要求生成debug文档JSON。自行修改p5源码，可在兼容旧工具链的Node环境 npm ci 后 npx grunt browserify:min uglify。本轮没有执行旧全部Grunt工具链，不声称首选源重新编译已成功。
生成替代库后使用 P5_REPLACEMENT=/path/to/your/p5.min.js node build.mjs 重新链接兼容库，仍需离线验证。公开 p5-local.min.js 为实际改后库输入，bootstrap/main/build/完整宿主src/锁文件一起公开。宿主通过window.p5正常API调用，不限制用户替换或调试LGPL库。
