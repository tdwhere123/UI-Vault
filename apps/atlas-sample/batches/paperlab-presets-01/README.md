# Paperlab 原纯纸六预设选段
固定原 Presets 卡片/代码 details 与 Paper/PaperMesh 几何、纸张材质、原 GSAP 动画保留。receipt-unroll / letter-fold / hero-peel / page-flip / crumpled-note / paper-ribbon 是一族代表子集，不是完整19项目录。没有动画编辑器、导出、媒体导入、剪贴板或云服务。peeling-sticker多品牌图形不选；photo-print/postage-stamp本来就是作者故意留空的底材，本次不选，不把它们说成缺图错误。
WebGL不可用时明确显示“GPU不可用”，原文字fallback不冒充原纸渲染。隐藏卸载停止动画，重开重新开始；reduced使用原减少运动机制与按需静态帧。构建启用Zod官方jitless避免CSP探测eval；图鉴CSP/sandbox不变。
Three shader/render/contextlost错误显式失败；正常dispose前移除contextlost处理，避免把主动销毁误报故障。Renderer ownership在隐藏/退出同步清理，不能依靠被暂停的R3F延迟定时器。探测WebGL上下文也释放。

## 验证边界
实际clean572 loader正常取得全部分片。生产无GPU路径检查六原卡/details/明确fallback、隐藏重开及退出；另test-only Three renderer接口替身走原R3F成功分支、真实Three场景/geometry有限数值和渲染调用，错误/销毁可测，不是原生GL编译/光栅化。
独立CPU测试逐六原behavior，在原progressParam的0/0.5/1写289顶点，有限且至少两个状态不同；不是预制图片/空canvas或CSS替代。未运行原生GPU、字体像素、视觉质量验收。
Production不包含test-three替身；源/依赖与差异见SOURCE，完整原Apache LICENSE/NOTICE及实际17包许可见NOTICES。

## GSAP限制
GSAP3.15.0属于Standard License，绝非MIT/Apache。保留原2008–2026 GreenSock版权头、许可URL以及完整当前正式条款。本演示仅固定预设查看，不提供竞争Webflow的动画构建/导出产品，不承诺任意下游用途都被许可。官方 https://gsap.com/standard-license ，其引入的 https://webflow.com/legal/terms 。其他使用需独立判断该条款。原根Apache不能覆盖GSAP。

最终生产fallback、early/missingroot、test-only成功GPU/静态reduced/shaderfail/renderfail均通过；reduced成功场景静置绘制计数不增长。原usePrefersReducedMotion hook把偏好同步传给Paper与frameloop，非每次渲染固定读值。暂未单独模拟运行期间系统偏好事件。
原R3F9.7延迟500ms清理会被隐藏暂停取消，因此宿主在隐藏/退出同步完成原events/xr/scene清理并移除_roots登记，再幂等释放renderer；两次挂载退出created=disposed，hidden真实roots=0。生产测试不含renderer替身，test-only包只本地且不在发布白名单。
未在实际输出Paperlab shader中发现Ashima/simplex整段（crumple明确自有小整数jitter Voronoi场），Three/three-stdlib实际源码及完整MIT均保留。没有把函数名相似当许可证明；实际输出依赖按包及原头归属审查，非根Apache一概覆盖。

异常清理边界：逐项尝试每个 scene/events/xr/renderer 的释放，即使第一项抛出仍删除全部 roots 并尝试余下资源；完成后汇总错误。宿主同样保证 GSAP timeline/ticker、DOM 与暂停步骤被尝试，显示“清理异常”而不宣称正常成功。独立原模块注入首个 renderer.dispose / scene.dispose 抛错均验证其余3项尝试释放、roots=0、重复清理无复活；这不证明故障资源自身释放成功。
