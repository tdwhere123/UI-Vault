# 请求编辑与文字响应

固定 usebruno/bruno@1982a7b1bfa865194292bd08d0fa9e090ae89b4a 的 HTTP 本地子流程，恢复既有条目，不是完整桌面 Bruno。保原 QueryParams、RequestHeaders、RequestBody 纯文字分支、EditableTable/虚拟行、原 MultiLineEditor/SingleLineEditor/CodeEditor（CodeMirror5）、BulkEditor、TextPreview 与各 StyledWrapper。宿主只提供一个本地 collection/request、选定页签与双栏，复用原 ResponsePane 标签样式和原 light theme/global CSS，不称原 RequestTabPanel 所有布局/协议都接入。

真实可用：参数与 Header 名值/描述、启用开关、删除、新行及 Bulk Edit，原表格排序/重排机制保留；参数编辑经原 reducer 更新本地 URL；文字 Body 经原 CodeMirror 回调更新本地请求，切页签保留编辑。右侧只显示明确固定文字响应，不来自请求，不能真实发送、执行脚本/断言/测试、保存或连接服务。

## 源码抽取与界限
原 collections 的 setQueryParams/moveQueryParam/updatePathParam/setRequestHeaders/moveRequestHeader/updateRequestBody/updateItemSettings 七函数保持逻辑；原 query serializer、splitOnFirst、uuid、formatSize 直接摘录。单层固定 collection 的查找器、tabs 宽度/焦点状态是明确宿主适配，不宣称整个桌面 Redux。Host fixture 是虚构数据。

原编辑器视觉/编辑回调/搜索和折叠代码保留。未启用变量、AI补全/变量操作、外链打开与持久化连接点以显式空能力适配；示例没有变量，brunovariables 模式委托原 CodeMirror 当前文字模式。原 localStorage 视图存储被隔离禁用，usePersistedState 仅组件内存。JSON/JS/GraphQL模式不开放，相关lint/GraphQL初始化与原lint PNG CSS删除；不把禁用lint声称校验成功。原Header继承逻辑对本地无文件夹fixture返回空祖先，默认header说明仍是原展示，不实际发送。

React19.0.0，CM5.65.2；其余实际版本逐项列出。原最新版组件与公开发行兼容依赖版本明确保留，不把整个仓库当已构建。原CodeEditor的GraphQL作者头、BrunoMIT、Tabler原SVG MIT及全部实际依赖版权/条款在NOTICES。know-your-http-well直接导入同包headers.json替代无关AMD入口，保原数据。原styles/global及Tailwind3.4.1编译，所有字体只系统fallback；无字体下载/图片/二进制包装，CSS无url资源。

宿主拦系统copy/cut/paste/drop与链接打开，保存/发送action明示不可用不伪成功。隐藏卸载，恢复重置本地fixture；退出或早晚失败释放监听、RAF、interval、timeout、observer和动画。没有后台、Electron/IPC、凭据或网络依赖。

## 验证范围
actual571 compose normal/reduced/early/failure/production 五模式通过；原CM setValue经原onChange/reducer更新参数URL/Header/Body，checkbox启用过滤、Bulk增加参数及原表格删除、页签保值、隐藏重置/旧回调、早期模块和晚期失败/退出账本归零；禁止API调用0。真实loader加载/缓存重挂/释放在现有8MiB预算内。几何/ResizeObserver采用受控JSDOM桩使原react-virtuoso正常计算行，未改生产虚拟表算法；不等同原生键盘输入/拖拽/像素验收。原MaskedEditor本身有重复类方法，编译器警告已记录，未为测试改写算法。

重建使用已保存 src/adapters/main/build.mjs + package-lock；prepare.py是早期抽取脚本记录，不应用它覆盖最终适配文件。原完整源码/修改差异保存在工作区，不提供假源码ZIP。
