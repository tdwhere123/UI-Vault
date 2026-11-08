# MiniSearch 本地全文资料检索工作台

## 来源与差异
原引擎 MiniSearch7.2.0，官方v7.2.0 annotated tag解引用为固定commit3d239d1c3ae7aef1bf5d8945dd7b5f0709f646f5。发布模块原样打包，完整MIT，零运行依赖。esbuild metafile确认只有该原引擎与适配入口，无隐藏框架或远程服务。引擎原件与源码SHA-256已记录。

本项不是声称整个界面来自上游：外围工作台、8篇中英示例语料、编辑表单和文本高亮是本适配编写；倒排索引、词项匹配、相关性评分、标题权重、前缀匹配、模糊匹配、自动补全与索引修改使用原始MiniSearch，不是数组substring过滤假冒检索。

对照461，已有搜索结果/检索片段/会话搜索展示，本项提供可加入自己的纯文本文档并真正索引的本地引擎工作台。只计一个完整工具，不把搜索模式/分类变体计数。

## 交互和边界
资料新增使用engine.add，替换使用engine.replace，删除使用engine.discard；检索从原引擎真实结果生成卡片，评分不是可信度或概率。OR/AND、前缀、最多20%拼写距离容错及分类过滤可切换。autoSuggest建议来自原引擎。标题权重2，正文权重默认。所有结果以安全textContent节点呈现，命中标记用DOM mark节点，不拼接用户HTML。

通过浏览器Intl.Segmenter('zh', word)分词，兼顾中英文；缺该API时回退Unicode字母数字切分，中文分词效果较弱，不承诺旧浏览器中文精度。不做LLM生成、向量嵌入、云检索、文件上传或事实核验。

最多100篇，标题150字符/正文20000字符，查询截断300字符。只在当前页面内存中处理，刷新或退出清空。pagehide取消待执行的120ms检索debounce、清除引擎索引/语料和DOM。默认CSP与allow-scripts即可，不需额外权限。

## 验证
17项JSDOM/状态测试通过：8篇挂载；真实评分和标题优先；前缀及建议；deploymnet拼写容错开关；分类；AND/OR；中文“来源”；增改删同步及旧词消失；HTML/onerror字串仅文本；空输入拒绝；JSON语料一致；重置；debounce；pagehide有待执行计时器时退出后DOM仍清空；禁eval/Function/fetch/XHR/Worker/storage/动态脚本，无调用。

未进行真实浏览器视觉、移动端或辅助技术验收。不是把状态测试冒称视觉通过。源码ZIP只本地保存，不提供虚构下载。独立详情JS28505B，gzip10112B，CSS3538B。
