# ReactGrid 与 formBuilder 两个本地完整工具

这是两个工具家族，不是新增图标/配色/页面变体。来源固定 revision 见 manifest。源码包仅保存在 workspace，未托管下载。

## 验证
原始组件实际运行于 JSDOM。ReactGrid 验证原生 F2 编辑和值提交、指针范围选择回调、批量赋值、添加、撤销/重做、JSON 输出。formBuilder 验证正向属性 label 编辑、添加/重置、schema 同步、实际 formRender 填写、必填校验、本地答案、错误 JSON 和插件拒绝。原生拖放实现保留，但没有真实浏览器拖放手感、像素、移动端、IME 验收。

测试在初始加载后将 Function/eval/Worker/fetch/XMLHttpRequest 和动态 script 插入设为抛错，测试中无调用。JSDOM 不等于真实 CSP 浏览器测试，几何、PointerEvent、ResizeObserver 有桩。

## 安全适配
formBuilder 原始默认不启用 sanitizer。本适配强制 DOMPurify，禁资源标签/事件属性/URL属性；用户属性字段的尖括号先变成全角可见字符，schema 导入拒绝 HTML，只接受已知字段及属性。script/onerror/javascript URL 同时注入 label 与 description 测试通过，动态 script 插入也受测试监测。仅本地普通表单，不含文件、上传、富文本插件、服务调用。导入上限 30 字段，每字段 30 选项。预览提交仅显示本地对象。

原 formBuilder 二进制 icon font 移除，保留原组件/字段/排序逻辑，图标改文字符号。CSS 中原有两个 Bootstrap Icons 文本 SVG 保留并附 MIT。已内置英文语言字典标记为 loaded，避免原库重复 XHR。无额外 iframe 权限。

## 许可边界
ReactGrid、React、React DOM、scheduler 的完整原始 MIT 已附。ReactGrid 固定源码 package metadata 为 4.1.15，但 npm 4.1.17 gitHead 正是固定 revision，非自行改称版本。

formBuilder 主库完整 MIT，jQuery/jQuery UI 完整 MIT，DOMPurify 原始全文是 Apache-2.0 OR MPL-2.0（本适配选择 Apache-2.0）。其预捆绑 lodash 版本在固定源码 lock 为 4.18.1，但 npm dist 内无法独立证实 exact version；保留 lodash MIT 条款，不把本地安装的 4.17.21 谎称预捆绑版本。mi18n npm 0.4.8 元数据声明 MIT，dist 头显示 0.4.7 并保留作者 Kevin Chappell；包及上游当前 revision a09dd25f63272ddffe76eedcacfc704c5c72fbcd 均未提供 LICENSE 全文。已定点核对下载的 mi18n 0.4.8 发布包 SHA-512 integrity 与固定 formBuilder 源码 lock 完全一致，其 package.json 明确 MIT，内嵌作者与 0.4.7 头一致，未见相反限制。按集成方确认口径保留声明/作者证据并附显式标注的标准 MIT 补充条款，允许集成，但不声明全链条上游原始全文齐全。Axios 是 mi18n 预捆绑依赖（其 package 声明 ^0.18.0，exact 内嵌版本未独立证实）；附原始 v0.18.0 MIT。

无公式引擎。ReactGrid 普通数字加总不是表格公式；approval checkbox 是本地示例数据，不进行实际授权审批。

formBuilder npm 包/源码元数据为 3.23.2，但其 dist 注释头仍显示 3.23.1；这也是上游发布物版本头差异，未自行改写。
