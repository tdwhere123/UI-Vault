# Bytesize · 全101原始图标

恢复旧ID `bytesize-icons:official-series`，一个系列，不按单枚计数。固定 danklammer/bytesize-icons@210d2f81c340c838053eed4c5a0385fbf2a033e9 的 `dist/icons/*.svg` 全部101个，非未来版本全集。没有排除图形。

## 原件与许可
全部101件正规fixed raw获取，逐文件对固定未截断Git tree的Git blob SHA1及新SHA256核验，完整MIT LICENSE也验证Git blob。每个原UTF-8文本逐字留在ORIGINALS.json和运行包，不是base64/二进制包装，没有重画路径。PROVENANCE记录清单、固定来源、hash及XML审查。XML仅svg/path/circle/ellipse，无脚本、事件、style、远程引用或defs/use内部资源。原width/height=32；99通用图形为描边，GitHub/Twitter两原件是64×64 viewBox中的currentColor填充路径，非描边。各自stroke/fill等原属性保留；尺寸/颜色是CSS预览，不写回图形源码。禁止将Maki填充覆盖样式施加到这些描边图形。

GitHub/Twitter两个品牌标记按原件保留，在详情单独说明品牌来源/非背书。MIT版权许可不等同商标授权；图标浏览不代表服务集成、品牌批准或官方关系。不是99非品牌子集，不能把两枚品牌计成新系列。

## 浏览器及边界
浏览外壳复用UI-Vault原创Maki安全浏览逻辑与布局，不声称是Bytesize官方网站UI。搜索英文名称、每页30（4页末11）、选中放大、32/48/64px、颜色、空查询重置。选中详情含原path/hash。只固定grid委托监听，无逐tile监听。隐藏时延后绘制，visible同步最后请求并限制页码，退出abort监听、清DOM和缓存。缺少app时body显示明确失败；统一安全事件dispatch覆盖paint之前的tile.setAttribute、size/color.style.setProperty异常。初始危险SVG/运行期createElement或importNode失败明确停止，不残留旧控件或继续重试。无复制/下载、网络、计时器、RAF、Worker、存储或位置请求。

测试使用实际ui-vault-536 composePreview合成，原CSP与精确无defer runtime.js/css标签不变。`node test.mjs`验证17项：所有101原文和DOM树、全部页、搜索/品牌归属、尺寸/色值、恶意与空查询、100循环固定10应用监听/0tile监听/0脱离DOM监听目标、hidden恢复、pagehide与初始/交互错误清理。`node boundary.mjs`补初始hidden立即退出、100个hidden翻页请求恢复clamp、旧节点、atlas:dispose+pagehide重复退出。全测试实际禁用请求/定时器等能力，尝试数0。

JSDOM不是实际浏览器CSP强制执行、像素、原生触屏或可访问性验收，未截图/封面。图标SVG保真不等于视觉验收。系统字体仅为原创浏览壳文本，无外部字体依赖。

## 重建与公开范围
七资产：index.html/runtime.js/runtime.css/ORIGINALS.json/PROVENANCE.json/LICENSE.txt/README.md。无第三方运行库，完整原MIT在LICENSE.txt；宿主也是MIT。私有构建证据：collect.py正规取源+核blob，build.py逐XML审查并打包原件，package.py写七文件manifest/hash；test.mjs与boundary.mjs只测试不进入公开包。

## 宿主MIT
Copyright (c) 2026 UI-Vault viewer contributors.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
