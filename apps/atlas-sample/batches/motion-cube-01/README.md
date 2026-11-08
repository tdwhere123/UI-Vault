# Motion Core · 层转动微光材质

恢复既有 `motioncore:rubiks-cube`，一个家族，不按27块方块计数。

原版 Svelte Scene 的圆角几何、27 cubelets、随机选9块一层、缓动转轴、commit 的位置/四元数与重新挂载，以及暗色/橙色 Fresnel 着色器、OGL Orbit 视角控制均保留。它是装饰性思考/等待材质，不是可解魔方游戏，也不反映真实 Agent 任务进度。

固定源：https://github.com/kaltwrk/motion-core/tree/74ad6e66d50cc9b1849a505fcd1b352704920745/packages/motion-core/src/lib/components/rubiks-cube

原 Scene 与 color helper、MIT 原件与固定官方 raw 对照（旧 ZIP 有额外末尾换行，保留原始两份）。[原许可](LICENSE.txt)、[全部实际运行依赖通知](THIRD-PARTY-NOTICES.txt)、[精确来源与哈希](SOURCE-EVIDENCE.json)。只选 Scene + helper，不编译完整库 barrel。整库列出的 GSAP/MediaPipe 未安装、未导入、未打包。

实际 Svelte 5.39.6 / clsx 2.1.1 / esm-env 1.2.2 MIT；OGL 1.0.11 Unlicense，全文来自实际 npm README。所有源码、构建补丁、测试与 lock 本地保留，未假称有公开源码 ZIP。

## 透明适配
- 宿主标题、文字、暂停/恢复为本次新增；未重绘原视觉机制。无任何外部图片/字体/网络/二进制包装，无 CSP 权限扩展。
- 暂停、blur、hidden、pointer/touch cancel 停止 RAF；恢复从新时刻继续，避免累积大delta。减少动态只绘静态帧，不持续 RAF，也禁用Orbit。
- 原 OGL Orbit 加 cancel 方法，仅调用原 mouseup 移除临时全局监听、清除惯性/待目标；原鼠标数学不变。退出原 orbit.remove。
- 原 cleanup geometry/material 之外显式删除两枚 shader（OGL Program.remove 只删 program）。监听 canvas webglcontextlost，立即停止/释放并明确报上下文丢失，不自动恢复；销毁移除监听。初始化失败按已创建资源回收；检查 shader compile/link 状态，失败显示不可用，不用静态图冒充。渲染中异常也停止并回收。
- pagehide 卸载 Svelte，清理 RAF/Orbit/几何/材质，重复退出安全。

## 验证边界
normal/reduced/unsupported/shader-fail/init-draw-fail/render-fail/context-lost/production 八支。真实原 OGL math、rounded geometry、27块唯一位置、每层9块、commit位置变化、Orbit合成拖动改变camera、反复暂停恢复、hidden、拖动中blur及退出运行。另派发上下文丢失事件后断言 RAF0、显示错误、恢复按钮禁用，重复派发及推进帧不再渲染，事件监听销毁为0。正常分支8个 GL资源创建/8个删除；shader失败7/7；无WebGL0/0；最终 RAF 与宿主/Orbit mousemove/mouseup/blur监听为0，网络API调用0。排除的JSDOM内部selector鼠标监听有注册来源栈证据，不宣称所有框架全局监听均清空。

WebGL函数/成功状态及 DOM几何为测试stub。真实原渲染循环调用被记录，不等于着色器真正编译、GPU输出或滤镜像素通过。没有真实浏览器/GPU、原生触摸、移动端或视觉验收。页面与manifest都标视觉待验；无法创建上下文时诚实报错。
