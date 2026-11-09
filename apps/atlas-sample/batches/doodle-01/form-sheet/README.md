# DoodleCSS · 原手绘表单

恢复已有 `doodlecss:handdrawn-form-sheet`，一族。固定 chr15m/DoodleCSS b49ca7604aa2deb71fd9f9458ced277001d51b10，MIT ©2021 Chris McCormick，LICENSE与NOTICES有完整原文。零第三方runtime依赖。

## 原实现
完整取原index.html Form区，不是另画一组手绘壳。保留原text/email/number/search/tel/url/color/date/time/month/week、select/multi-select、textarea、radio/checkbox与按钮的HTML结构、原全部doodle.css和7个SVG绘图。原SVG通过border-image/背景装饰决定不规则线条；checkbox/radio依旧原CSS伪元素与原生checked状态。
与Plop步骤进度及PaperCSS折叠阅读不同，这是完整原生输入类型的原样式展示。均属手绘方向，不声称新增手绘类别。原datetime已经是旧HTML类型，浏览器可按text退化，未冒称独立原生日期时间组件。

原label存在number/search拼写错误及重复check3 ID，适配仅修正这些对应关系。保留password/file视觉字段但明确禁用，不收凭据、不选文件。Google Short Stack远程字体不加载，沿用原cursive fallback与原字号/窄屏断点，字形可能与原站不同。

## 本地交互而非后台
原表单没有实际业务或校验提交逻辑。宿主仅给按钮加本地validity反馈、无害点击反馈和原生reset说明，前台明确nothing sent/saved。不会回显输入值，也不存储/上传任何内容。不新增required业务要求，只有用户输入不符合原type=email/url等约束时提示。提交按钮变type=button避免导航，额外拦截implicit submit。原按钮尺寸、边框画法保留，不称真实任务表单服务。

Form默认inert，全部初始化完成才启用；早期output创建异常和交互output写入异常均清理监听/禁用并移除控件、显示真实不可用状态。hidden不换DOM，字段选择保留，恢复可继续；退出永久停用，旧按钮/reset/visibility不复活。原无RAF/定时动画；CSS在hidden/reduced时禁过渡。不扩权限。

## 7个SVG文本资产
border.svg、button.svg、bq.svg、caret.svg、checkbox.svg、hr.svg、radio.svg从固定原仓库直接取。CSS引用转换为percent-encoded UTF-8 data:image/svg+xml，每个解码后原字节/hash一致。它们是组件原源码绘图，不是截图或封面；没有base64/二进制包装。使用图库已有img-src data支持，未修改CSP。SVG仅svg/path/g节点，无script/事件/href外链。

## 测试
normal/reduced/failure/early生产IIFE：原类型约束、有效/无效email反馈、文本HTML不解析、label关联/唯一ID、原radio/checkbox、多选、hidden保留、reset原默认值、原按钮本地反馈、退出旧按钮/旧reset/visibility惰性、实际output创建与setter失败，以及记录监听/禁用API零残留。源码SVG roundtrip完整性另外静态核验。
JSDOM测试不等于SVG border-image光栅、native日期/颜色/文件控件、字体排版、原生焦点/完整无障碍或像素验收；reduced为CSS规则检查，非媒体光栅仿真。前台没有泛化QA标签。
