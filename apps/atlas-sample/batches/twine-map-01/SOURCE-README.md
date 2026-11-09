# GPL对应首选源
python restore-source.py还原到restored-source，npm ci --ignore-scripts后node build.cjs构建。
source-part JSON为UTF8文件名到源文本映射，无压缩/二进制包装，包含改后实际源码、构建/宿主、精确直接依赖与安装lock快照。无Electron开发依赖或字体二进制。package-lock.json完整锁定实际运行及构建工具esbuild0.25.12/acorn8.15.0。
原Twine固定SHA2c3b80144ba6f1fe9d8a4e5e11a2349ba55fc310，package2.12.1但原lock root2.12.0，保留上游差异。发布/格式执行/App入口排除；仅本地纯文本StoryFormat。删除持久化middleware，原reducer不变；格式扩展hooks不加载执行。宿主隔离与隐藏卸载；Lodash全局对象Function回退改globalThis。分片按完整语句，顶层函数匿名赋值提升保序，无运行时编译。
第三方依赖分发/源码的精确位置与integrity见SOURCE.json每一runtimePackages.artifact，不泛称所有第三方代码受根GPL许可。React生产构建的官方首选源码、固定tag及构建位置在DEPENDENCY-SOURCES.json，逐官方位置获取验证；未声称重跑React历史发行工具链。React-is原tag内package字段滞后如实列明。

已实际restore并使用安装的精确47运行依赖+esbuild0.25.12/acorn8.15.0复建，全部3JS/CSS/index字节相同。没有宣称从零网络npm ci或复建React上游发行工具链。electron/shared只有原story文件名等纯共享函数为实际编译所需而公开，不含Electron运行/桌面服务。

公开build仅对codemirror/lib/codemirror.js以限定正则匹配一次原透明GIF拖动ghost，替换原创透明1px SVG percent URI；不嵌入原base64数据。原npm上游仍是独立完整正规来源，此补丁随对应源提供。
