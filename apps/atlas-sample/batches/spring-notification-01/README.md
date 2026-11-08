# 消息各有寿命

恢复旧 ID `spring:notification-hub`，一族，不把通知数量视为新组件。原 pmndrs/react-spring 官方 notification-hub，固定 `eb09c7914721c2e5957c4bc817d7abddf317576c`。原 MIT 见 LICENSE.txt；18 个实际运行包全文（包含 tslib 独立 CopyrightNotice.txt 原版权通知）见 THIRD-PARTY-NOTICES.txt（MIT / tslib 0BSD），另保留 Feather glyph MIT 原始版权。

## 原版与适配
原 styles.ts 的布局、灰蓝消息底色、青绿渐变寿命条、关闭图标均保留；原 useTransition 的高度弹簧进入、3000ms 寿命、淡出及高度塌缩序列继续使用。正常模式保留 tension125/friction20/precision0.1。这与逐项出现列表或手动卡片栈不同，但仍是通知领域的一种原实现，不宣称全新任务功能。

React18.3.1/react-feather2.0.10 同原 sandbox；Spring 从通配符固定为9.7.5；styled-components5.3.11 → 6.1.19 属明确兼容适配（不是原环境重建）。原 lorem-ipsum 换成本地中文示例，宿主标题、手动添加按钮和最多6条活动消息为适配新增，离场动画可能短暂叠加（可见 DOM 数短暂超过6）。不会后台自动新增，不请求浏览器通知权限，不关联系统事件、服务器或任务执行。寿命条不是任务完成率。

关闭按钮显式移除对应消息并取消其 async next。失焦/隐藏通过卸载并重挂空队列来停止旧 Controller/async 序列，不在后台继续寿命动画；退出页面卸载整个根。减少动态模式无寿命倒计时，保留静态消息并手动关闭；离场用 immediate 对象而非异步 leave 数组，避免残留。初始 reduced 偏好读取，动态系统偏好切换尚未实现。

原始完整 App.tsx / styles.ts 与固定 raw 对比仅归档额外末尾换行；原件保存在独立本地工作目录，未声称已发布源码 ZIP。公开 SOURCE-EVIDENCE.json 记录 hash 和依赖。

## 验证边界
normal / reduced / production 三分支测试真实 React、Spring Controller 和 DOM 状态：同时添加8次限6条活动消息；关闭后立即新增保留离场动画，DOM可短暂为7条、独立key、删除后添加、自动到期、blur/hidden 清空、隐藏不能添加、退出中断、重复退出，实际寿命条插值/关闭淡出，最终 RAF0/timeout0/禁止网络调用0。测试将 offsetHeight 模拟为70/110，不能据此声称原生排版/动画像素或窄屏视觉验收。实际浏览器渲染仍待用户查看。

默认 iframe/CSP 不扩张，无 fetch/XHR/worker/eval/外部图片/存储/下载/剪贴板。此包为 UTF-8 静态 JS/CSS/HTML，无二进制包装。
