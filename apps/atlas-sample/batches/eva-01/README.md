# Eva Icons · 原始双风格完整系列

恢复旧ID `eva-icons:official-series`，一个系列，不按单枚或风格分拆。固定 akveo/eva-icons@70d2471ff88ab1385d3310b93a406243377b53d5 的 package/icons/fill/svg 全246件 + outline/svg 全244件，合490个SVG；这是该固定目录完整范围，不声称所有未来版本。

## 正规来源与许可
通过官方固定SHA codeload源码归档取得，仅读取490原UTF-8 SVG与原LICENSE，未执行归档脚本或打包二进制。逐件原Git blob SHA1与固定未截断tree一致，SHA256、来源路径、下载URL与归档hash记于PROVENANCE。全部原文字节保留在ORIGINALS.json和runtime数据，不重画、不改路径或色彩。完整原MIT逐字公开于LICENSE.txt，并核Git blob。

含Facebook/GitHub/Google/LinkedIn/Twitter各fill/outline，共10个原品牌图形，在详情分别标记出处与非背书。没有排除，不能说480通用子集；MIT版权许可不等同商标许可或品牌批准，不代表服务集成或官方关系。

## 原样式安全与隔离
490SVG均含defs/style及重复cls/id。全量XML审查只有svg/defs/style/title/g/path/rect/circle/polyline/polygon，无事件、脚本、href、外链或资源引用。内嵌style严格只允许实际审核的四种固定fill/opacity规则（完整字符串清单见PROVENANCE），其他样式和DOCTYPE/ENTITY拒绝。

每个原UTF-8 SVG使用 `data:image/svg+xml;charset=utf-8,` + encodeURIComponent 显示为独立img，因此重复id/class不会互相污染，也不会污染页面样式。不是base64、字体或二进制包装。原24×24、#231f20/白色/透明度语义不改，不提供伪造重新着色。CSS只控制显示尺寸。放大图也解码为同一原件；490个源文本与呈现URL全部逐字比对。

## 浏览与生命周期
原创UI-Vault安全浏览壳复用已修Bytesize/Maki，不冒称Eva官方网站。名称搜索（保留原名并加fill-/outline-唯一前缀）、全部/填充246/线框244筛选、每页30共17页末10、选中放大、24/36/48px、空结果与重置。一个系列一条，不按页数、风格或glyph计数。

固定grid事件委托；100轮搜索/风格/分页/选择/重置，10应用监听有界、0tile listener、0脱离DOM监听目标，最多31张img。hidden延后绘制，visible恢复最新过滤/请求并限制页码。pagehide/atlas:dispose中止所有监听并清DOM/cache。缺root直接body明确错误；所有回调统一捕获，tile属性写入/size样式写入/渲染失败清理，旧节点不能重启。

## 验证范围
`node test.mjs` 11项检查包含490原文件和MIT、真实ui-vault-537 composePreview、全部风格/分页、所有原img URL解码/完整XML、10品牌标记、100轮资源有界、隐藏/退出、missing-root和预paint/paint故障；`node boundary.mjs`补初始隐藏早退出、100次隐藏翻页恢复限制、旧节点/重复退出。危险onload与未审核@import样式注入均初始失败，0监听和图形。真实请求/存储/定时器/RAF/Worker/open/剪贴板/位置尝试0。精确无defer runtime标签和默认CSP不变，img data本就允许。

JSDOM不实际解码渲染图像像素或强制浏览器CSP。图像URL和XML保真是源码/逻辑验证，不冒称onload/原生触摸/窄屏/视觉验收已通过；没有截图或封面。真实像素待用户查看。

## 交付与重建
七文本资产：index.html/runtime.js/runtime.css/ORIGINALS.json/PROVENANCE.json/LICENSE.txt/README.md。无第三方运行库，宿主MIT如下；原SVG另遵守完整原MIT。私有collect.py官方取源并核blob，build.py全量XML审核与打包，package.py生成七文件hash和manifest。公开不包含源码归档、网络获取脚本或测试注入代码。

## 宿主MIT
Copyright (c) 2026 UI-Vault viewer contributors.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
