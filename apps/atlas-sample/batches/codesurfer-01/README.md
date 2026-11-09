# CodeSurfer 原纯代码选段（一个族）

固定 pomber/code-surfer@948452f7c1c8adaf019e29600d7d158747a91a90 的 demo.mdx。
保留单栏 4 步与双栏 5 步：原代码 diff、行/词焦点、弹簧过渡、缩放滚动以及两列比较。不是可执行代码环境，示例中的 Lorem Ipsum 代码不执行。末段 ImageComponent 四个照片步骤完全未接入，无占位；标题 logo 与结束外链亦未接入。这里是“原纯代码选段”，不是含图整套 deck。

## 原件与改造
原四个 packs 直接编译，mdx-deck 3.0.10 的 App/Context/useSteps/Slide/Wrapper/键盘与 swipe 行为来自同版官方 gatsby-theme-mdx-deck 原源。Gatsby URL 路由改为本地 index，未安装/伪造 Gatsby 服务。原前后步骤与注册元数据机制保留。新增可见前后按钮/进度便于 iframe；关闭打印、外部 presenter、持久存储、头部远程字体等。系统字体代替原字体，真实排版像素尚待验。

原主题来源及完整补充许可见 NOTICES。本选段只打包原 base/nightOwl/vsDark；未使用主题从导出 barrel 去除。Formidable/Sarah Drasner/VS Code 完整官方 MIT 归属保留，不将未发布 Oceanic 历史样式列为实际依赖。无原照片、图标字体或二进制包装。

减少运动在本次挂载时读取系统偏好，原目标步骤直接显示，不运行弹簧；偏好变化需重开。隐藏卸载并暂停，返回从首步重开，不自动播放。退出彻底释放；缺 root 或运行故障显示明确不可用，不显示替代效果。异步过渡/旧节点在退出后不能复活。

## 实际验证与边界
`node test.cjs normal|reduced|early|missingroot|failure` 五分支（分别调用）。真实 clean ui-vault-567 composePreview/default CSP，MDX 编译而不是 runtime eval。DOM 实测原 0:0→0:1→0:2→0:3→1:0→1:1→1:2→1:3→1:4 九步，前后与键盘回退，原代码/行焦点样式变化、双列真实生成；隐藏重开/旧按钮与晚 RAF 无复活；早退出、缺 root、晚故障闭合。退出 RAF/timer/全应用 EventTarget ledger 均 0，fetch/XHR/Worker/Function/eval/open 调用均 0。

测试 DOM 几何为固定替身，只证明原解析、状态与样式数值，不是 native 浏览器字体/像素/触摸/swipe/响应式视觉验收。没有截图或声称视觉通过。

本地复建：deps 内 `npm ci --ignore-scripts --legacy-peer-deps`，根 `node build.cjs`（使用保留的实际 src 改后首选源；prepare.py 是早期取材脚本，不作为最终复建入口）。所有 7 个发布文件为 UTF-8 文本。
