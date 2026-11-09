# Formity · 条件循环访谈

恢复 `formity:branching-loop-interview` 旧候选，一族，不按页面或选项计数。

原源：https://github.com/martiserra99/formity/tree/3d4dab433b8c3040f9727ae3e4bba0044e146ce9
使用原 apps/react/src/flow.tsx、App、FormControls、所有显示控件，以及该固定源码 packages/react 与 packages/system（版本字段 3.0.0）。不是另一套原创问卷替身，也不是声称已连接 Exodus。

## 原交互
深色居中单焦点访谈；姓名/年龄校验、是否开发者条件、多选语言、按所选语言逐项追问、回退修改选择与结果分支、原 JSON 展示和 Start Again。填虚构资料即可；所有输入仅当前内存，不上传、不保存，无 AI/后台调用。其价值是依选择循环追问与回退改变范围，不宣称一般问卷功能首次出现。

## 适配
保留原流程和组件；去掉 App 原 onYield console.log，防止将输入写入控制台。用原页面主流程替换多路 BrowserRouter 入口，加入中文说明与隔离 iframe 生命周期清理。所有 library 注册到本 iframe window/document 的监听仅在本预览退出时移除，恢复 addEventListener；没有更改主图库全局。原 Tailwind 3 配置与样式编译，无远程字体或图片。
不使用 expry，实际流程本来就是原生已写好的回调函数，不需要 eval。没有网络/存储/剪贴板/下载或新 CSP 权限。无截图、封面或假源码下载。

## 许可
原 root/react/system MIT 保留原版权；实际23运行包 MIT/Apache-2.0，以及内嵌 Prism 1.29 MIT 与 Tailwind CSS 生成器 MIT 全文在 notices。React Aria 原 Adobe copyright headers 保留于 notice；实际包没有单独 NOTICE 文件。逐文件hash、运行依赖版本见 SOURCE-EVIDENCE.json。

## 测试与边界
生产 IIFE 在 JSDOM 验证空姓名和年龄错误、原多选循环、回退删选择后不残留旧语言结果、条件 false 分支与原 Listbox 选择、重启清空、旧节点无效与退出清理。另测 Listbox 打开时退出，portal、记录的全局监听、RAF/计时器均清除。
测试用了 matchMedia/ResizeObserver/scrollIntoView stub，未验证真实浏览器像素、浮层定位、原生输入法、移动端或完整无障碍。保留原英文正文与原视觉布局，不宣称视觉已验。
