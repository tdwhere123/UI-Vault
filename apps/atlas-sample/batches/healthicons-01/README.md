# Healthicons · 完整四规格医学信息图形

恢复旧ID `healthicons:clinical-research-symbol-family`，一族，不按单枚/四规格计数。固定 resolvetosavelives/healthicons@2080c1b40e4829f2f4217e03bc22908b4e402f6b 的 public/icons/svg 四目录：filled 776、outline 776、filled-24px 288、outline-24px 288，共2128原SVG。非所有未来版本全集，无排除。

## 原源与权利
全部原件经正规官方固定raw路径读取，逐件对固定未截断Git tree核Git blob SHA1与SHA256。完整原LICENSE逐字保留并核blob；其明确图标CC0、网站代码MIT两部分。本交付图形依据CC0，不把网站MIT当图标许可，也没有引入网站实现。自主浏览壳独立MIT如下。

14个带来源标志的原件涉及HL7v2/FHIR/dhis2/Excel/OpenMRS/Simple六个名称，四规格分布不等，具体路径见PROVENANCE。详情显式非背书。CC0不等于商标或专利授权。所有图形仅作医学信息设计参考，不构成诊断、治疗建议、医疗资质、认证或服务背书。

## 真实文本分片
原SVG本身共4,828,396 bytes，不能伪称一份小运行包。按原style/category顺序、整记录自然分组为runtime-data-NN.js；每片严格小于700KiB，不切断SVG，不压缩/加密/base64，不把二进制包成文本。片内是可直接审查JSON原UTF8 SVG字符串和来源/hash，常规JavaScript数组赋值，无eval/远程请求。

runtime.scripts及js-order.json给出精确顺序，最后runtime.js为短bootstrap。HTML同序普通script标签，可在正常静态服务直接打开；图鉴宿主必须全取齐后一次组合inline，不允许先显示部分数据。bootstrap捕获并删除临时global数组，核2128唯一记录、四规格精确数量及XML后才绑定事件/显示；缺片或重复片整体失败。PROVENANCE的dataParts记录每片来源范围、个数、大小与hash。每个原件文字和几何保留，未删减路径。

## 图形与UI
全量XML白名单仅svg/path及尺寸、viewBox、fill、fill-rule、clip-rule、d，无脚本、样式、id、外链、事件或引用。每件原UTF8 SVG以percent-encoded data:image/svg+xml独立img显示，无base64/外部字体；原24或48尺寸、fill/透明度语义不变。浏览壳来自本地Eva/Bytesize安全实现，不声称Healthicons官网原页面：搜索原名/类别、四规格筛选、30项分页、选择放大、显示尺寸，原品牌/医学限制明确。

100轮过滤/搜索/翻页/选择/重置固定10应用监听，无逐tile或脱离DOM监听目标，最多31图片；静止无timer/RAF。hidden延后绘制，退出abort监听清DOM/cache；缺root正文明确错误；回调prepaint属性/样式错误及渲染错误停止，旧节点不能复活。保留所有原图形，不按每枚计数。

## 验证与未完成边界
已针对干净生产 ui-vault-540 的真实 adaptCandidate/composePreview/createPreviewLoader 测试：全13文本（11JS+CSS+HTML）获取成功后只提交一段inline脚本，缓存有界；任一分片失败只显示宿主错误，无部分执行。直接HTML同序脚本亦运行。分片支持已在生产main c9b8a4111e2e9800e21851523c1489242035dd68实现。本交付标publicationReady=true表示资产和该加载契约可接入，不代表候选已经发布或可计入线上数量，仍由根集成并核验部署。

测试全2128原文/Gitblob/SHA，所有图片URL解码及XML保真、四规格/全部页、14标志、100循环资源、hidden/早退/旧节点、missing-root、危险SVG、回调failclosed、缺/重复片整体失败。源码级完整性不等同真实浏览器像素；JSDOM不加载/解码实际图像像素或强制浏览器CSP，没有onload/原生触屏/视觉通过声明。未截图、未修改主库/CSP、未发布，也未绕浏览器安全限制。

公开范围为index/runtime/css/LICENSE/README/PROVENANCE及所有声明data片，不能只传短bootstrap。测试与原获取脚本不在公开白名单。无第三方运行依赖，无网络、存储、账户、剪贴板或真实医疗数据。

## 宿主MIT
Copyright (c) 2026 UI-Vault viewer contributors.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
