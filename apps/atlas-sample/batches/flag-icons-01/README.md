# Flag Icons 完整原旗帜系列

lipis/flag-icons 固定 ac7e0eb3259eb62aa6100c435607e2fe03896a97，MIT，Copyright (c) 2013 Panayiotis Lipiridis。271 个原代码 × 4x3/1x1 = 542 个原始 SVG，同族一条，不按比例拆计。全系列从固定官方归档获取，仅提取 UTF-8 SVG、country.json 与根源码说明/许可；没有图片二进制、截图或外部字体。

原创轻量浏览器用于检索原件，不是上游交互页面：名称/代码搜索、24格分页、4:3/1:1切换、详情精确原 SVG 与 SHA256。名称来自原 country.json，未用到的首都/洲字段不作本页面地理断言。源文件及细节原样保留，不重画、不重配色。旗帜/名称涉及国家、地区、组织及其他代码，271不是国家数量；不代表主权判断、官方认可、外交立场或使用所有旗帜/标志的法律许可。代码MIT不能排除各地旗帜使用规范及商标限制。

全部542原XML构建审计：无DTD/entity、script/image/foreignObject/外链，ID唯一、所有本地#引用闭合；少量原Inkscape字体元数据与style为原件，不含text节点、不会请求字体。运行时对实际显示每图再校验namespace/tag/style和引用，用百分号原SVG img隔离，详情用textContent。没有任意SVG输入、下载或网络。退出abort所有监听、清空图src/DOM/数据缓存，旧事件无作用。无timer/observer。

原图文字保存在 flags-01.js…flags-07.js 的完整逐record顶层声明，最后runtime.js。每文件独立合法JS，最大648370字节，小于650KiB；不跨字符串或函数切片、不编码二进制。manifest runtime.scripts和HTML严格同序，9个资源入口依次加载（7数据+1运行脚本；HTML另计）。完整原文都在公开数据片，SOURCE提供每个原路径/哈希便于恢复核对。

actual554 compose验证分页、Japan搜索、比例切换、详情原文与img解码逐字相等、退出及旧事件；每分片独立parse/大小检测。XML结构与DOM不是视觉验收，旗帜像素与布局未截图未视觉验收。完整原件本地upstream，构建/采集/测试文件在项目根。
