# Timeline 可见性修复

仅 `timeline-animation-index`：原等待 IntersectionObserver 的动画容器新增 `data-timeline-visible-first`，配合本 demo 作用域 CSS 保持 opacity:1/filter:none。IO 进入后不撤销保护，避免正文重新消失等待错峰动画。原内容、位移及延迟保持；淡入与模糊被有意取消，不宣称视觉完全相同。其它四个同批场景不应用此规则。

修改前 runtime.js SHA256：6b066a383be8557449bb0c2517373717b75e13eb547d0c6852c352059bd313bd。
修改后：3ae54b2446ed47169843131c6f40d8c15c6214bdaf77377f6dd17ef95a8aa1de。

实际 compose 的 DOM/状态测试覆盖无 IO 通知、进入后立即与全部错峰结束。选择器/重要声明及 11 个容器状态通过，不等于原生浏览器的级联、光栅或视觉验收。没有确认历史截图空白的唯一原因；原媒体适配差异仍存在。未放宽 CSP、未新增依赖或资源。
