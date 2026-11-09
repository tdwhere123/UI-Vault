# System.css 黑白控件完整文档

Sakun Acharige 原项目 MIT，固定 c95b95428021361eaa411ccb08fa3b1050cc606d；原文档 25 组完整示例、13 inputs，保完整布局与原生控件，无 React。原作者声明大多图形自行重绘、受 98.css 启发；保留作者 MIT 以及 Jordan Scales 98.css 派生通知。Apple 名称/原像素标识仅原项目说明，不代表 Apple 授权或背书，不赋予商标权。原 Apple HI Guidelines 简短引文保出处页码，不分发整本手册。

移除 style.css 四个与 docs.css 两个 font-face，未打包 Chicago/Monaco/ChiKareGo/FindersKeepers 字体；系统 Arial 回退，不能声称精确复刻原字形。16 个实际使用 SVG 保原 XML，percent-escaped CSS 内嵌。原 git 树没有 checkmark-disabled.svg，且原完整文档无禁用勾选示例，仅删除该未用断资源规则；没有造替代图。icon/button.png 未使用且不公开。

原文档无 JavaScript，package 的 draggabilly 未被任何运行入口调用，未装入运行包；窗口关闭/缩放等只原样式，不造窗口管理器。轻宿主仅阻止原示例 form 默认提交，外部链接禁导航；atlas:dispose/pagehide 后删除 owned 监听、禁用控件及锚点。无真实提交/保存/后台、网络、定时器、观察器。EJS/dedent/highlight.js 仅借用独立 desktop 构建依赖，未进入运行JS。

actual550 compose 验证 25 原例、复选/单选/文本/选择/details、表单阻止提交、退出精确监听0与旧表单无owned回调；未视觉验收，不把 DOM 当像素或断点验收。原件本地 upstream，构建/测试留项目根。公开七文本。
