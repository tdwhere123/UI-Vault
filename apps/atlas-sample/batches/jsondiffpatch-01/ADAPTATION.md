# jsondiffpatch · 结构比较与可逆补丁

## 来源与新价值
jsondiffpatch0.7.7，固定官方发布commit ce76b39942891bbbeb60bf6a2ab3b7cbdb758923，完整MIT。原引擎和formatter文件未改写，以子类安全接入。外围输入、验证操作台与示例由本适配编写，不声称整个界面来自上游。

对照465，已有代码/文本diff、JSON编辑和对比卡片。本项直接展示原结构delta（对象字段增删改、按id识别数组移动），使用原patch把delta应用到旧版本副本，再用reverse产生逆向delta还原，两个方向都通过原diff校验。这不是简单行比较或另一个编辑器变体。计一个完整工具，不按操作模式扩增数量。

## 安全与适配
原HTML formatter在移动箭头处会生成内联script字符串及自动布局计时器。本适配继承原HtmlFormatter，只覆盖rootEnd和format_moved，不输出script或箭头，保留明确“移动至索引”标记；所有普通键/值的HTML转义、结构布局仍为原formatter。未调用带动画计时器的showUnchanged；改切换原CSS class。因此没有放宽CSP，无动态脚本和计时器。

使用基本jsondiffpatch入口，不导入with-text-diffs。可选依赖@dmsnell/diff-match-patch虽随npm安装，但metafile验证未进入运行包；长字符串整体替换，明确不承诺字符级diff。无其他打包运行依赖，完整主MIT即可覆盖本次原引擎/formatter/CSS。

JSON每边最多100000字符，10000节点、20层、每数组200项。递归拒绝__proto__/constructor/prototype键与非有限数字；启用id模式时拒绝同数组重复的稳定id。没有外部delta导入，补丁仅由本地受限JSON生成。键和值包含script/onerror/javascript链接字串时由原formatter安全转义。输入变化会立刻废弃session并禁用补丁，必须重新比较，不能对陈旧输入误应用。

所有应用均是内存副本，不执行真实部署、提交、上传或写回。pagehide置disposed、丢弃session与DOM。无联网、浏览器存储、Worker、eval或权限变更。

## 验证
16项状态/安全测试通过：原formatter挂载、真实array move delta和标记、patch严格等于新结构、reverse恢复旧结构、输入编辑使旧补丁失效、相同/primitive/nested数据、原型污染防护、键/值HTML注入、错误JSON/重复id/深度/数组/非有限限制、id开关后仍可逆、未变项切换、pagehide清理。禁eval/Function/fetch/XHR/Worker/storage/动态script/setTimeout/setInterval测试均无调用。

未运行真实浏览器视觉或辅助技术验收，JSDOM结果不等于视觉通过。来源与原件hash、源码和lock保留，源码ZIP仅本地不挂虚假下载。默认iframe/CSP，按详情加载，JS32557B（gzip10854B）、CSS7305B。
