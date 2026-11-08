# Blode 实用曲线交互：两个独立家族

来源 mblode/experiments 固定 d4baef572c4e692dcfe5f3a1e424e641d6013b18，原始文件及 SHA-256 见 source-index.json。完整 MIT 与运行依赖 notices 已附。图库 ui-vault-444 去重后，未选已有状态岛、章节索引和通知同类，最终只交付 timed-undo 与 omni-color-picker，不计控件子状态/颜色/图标为新页面。

## 原始实现与改动
- Timed Undo 原始文件未改，保留 Motion 字母切换、倒计时与限时撤销状态机。只增加外围本地演示提示和柔和背景。按钮写 Delete Account 是上游示例文案，不会删除账户或数据；上游从10递减至0，再下一 tick 完成，约11秒后退出并自动重置。
- Omni 原始 color-grid-panel.tsx 与 color-math.ts 未改，保留 Oklch 算法、二维投影、惯性、键盘循环步进、方向按钮、reduced-motion 分支和主题变量同步。仅在外围卡片替换 Next Image/个人头像为本地原创抽象 SVG，个人资料改示例说明、删除外链。没有替换核心为自绘假预览。
- 原 blode-icons-react 图标实现实际打包；npm0.4.1明确MIT，完整原始MIT来自官方仓库固定392b923a78c19efe245f0debd731a0eb1f73c3f7。仅打包实际使用图标，不新增glyph计数。
- 样式由 Tailwind4.2.1 编译保留原始utility类。没有远程字体、图片、SVG资源或二进制发布依赖。

## 验证与边界
独立 IIFE 可解析，显式 head 和精确 runtime 引用。JSDOM 测试禁 Function/eval/fetch/XHR/Worker/动态脚本插入，均无调用。
Timed Undo：开始/秒数减少/撤销回初始/超时退出与重置均通过真实组件状态测试。
Omni：真实 ArrowRight 色相步进、ArrowDown 明度步进、方向按钮变化、静止 HEX 公告更新及无外链资产通过。
ResizeObserver 与布局尺寸使用桩，测试启用 reduced-motion。没有真实浏览器视觉、惯性手感、移动触控或键盘长按验收。未将 DOM 测试称为视觉验收。

运行仅按详情加载，两个独立 JS 不互载；默认 sandbox allow-scripts，不加权限，不上传、不存储、不联网。源码 ZIP 仅本地保存，不提供不存在的线上下载。
