# Nutshell · 原内联层叠解释

恢复已有 `nutshell:expandable-explanation-essay` 一族。固定 ncase/nutshell d91469e1b2c9be8294d30542bf50f317953a9d01，源码版本v1.0.8。原Nicky Case内容/核心CC0；内嵌DOMPurify2.3.6另为双选Apache-2.0或MPL-2.0，本分发选Apache-2.0，完整文本见NOTICES，不将整个bundle称CC0。

## 保留的原核心
原冒号链接转expandable、标点和原句接续、按标题提取片段、原bubble/overflow层、箭头/圆点、300ms高度过渡、嵌套递归、内层关闭返回上下文、close all仍来自原源码。不是用details或普通accordion重画。演示采用原文What is Nutshell/Recursion/Interruption的文字摘选；删除GIF、iframe及远程章节，原文摘选略缩写，中文标题与说明是宿主原创。不是完整原官网或任意网站查看器。

## 离线与权限边界
只允许内置可信fixture。没有任意HTML、URL输入或上传，也没有真实AI。原start默认iframe会向父postMessage；本适配强制原本地处理分支，不增加sandbox权限。虚拟本地base仅用于about:srcdoc中链接解析，绝不请求。远程Wikipedia/YouTube/CORS iframe resolver整体移除，当前文档cache之外返回明确错误。embed/分享UI及PNG base64图标移除。默认CSP不变。

可选URL before/after Markdown注解不在本fixture，明确禁用并移除其未标版本的嵌入Marked。未删除核心标题/段落/递归解释能力。DOMPurify原2.3.6内嵌段逐字不改；它较旧，不能因此声称通用不可信HTML安全。本包只展示固定可信文本，运行时无开放内容源。

## 生命周期修改
原计时器由局部适配器托管，hidden暂停原任务且保留DOM/阅读深度，visible继续收尾。pagehide永远停止、清理监听/定时任务/内容并中和旧链接。原旧close延迟回写会覆盖新open，已加仍关闭判断；关闭子bubble时退休其监听，重复open/close幂等；close all延迟计数改按实际open计。异步section完成检查存活，实际DOM创建异常进入失败提示并清理。键盘Space增强原anchor.click，Enter保持native；没有宣称完整辅助技术验收。

## 许可
根CC0全文；DOMPurify精确2.3.6 tag LICENSE保存双选声明、版权和MPL全文，同时从Apache官网下载补全Apache2完整条款。选择Apache路线。该tag根NOTICE路径404，未编造NOTICE。原带Marked已从runtime剔除，其原版权仍在私有原件。无npm runtime安装、无二进制/字体/图片包装。来源与修改清单见SOURCE-EVIDENCE。

## 验证
生产IIFE在JSDOM about:srcdoc：真实原section解析/两层递归/内层关闭、Space键、快速关开旧动画不覆盖、新异步内容中隐藏暂停/恢复、远程拒绝、缺失章节原错误、pagehide旧链接无跳转与监听/timer归零；实际异步span创建失败捕获并清理。网络/eval/Function/外部窗口/postMessage陷阱零调用。
测试使用明确innerText兼容shim、JSDOM零布局bounds；没有验证浏览器真实字体/高度插值/箭头定位/滚动/减动光栅或像素。前台不加泛化QA标记。
