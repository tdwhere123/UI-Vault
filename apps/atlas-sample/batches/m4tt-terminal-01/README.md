# M4TT72 · 原版可输入命令导航站

旧条目 m4tt72:command-navigation-site。固定官方 95f8cb488c56d492d8ec216e149f4cbfbd33c27d（原包3.6.0），Yassine Fathi / MIT。保留原 Svelte App、提示符、History/Input 布局、ASCII banner、全部原主题数据与本地命令实现，不是另画一个终端壳。History/Ps1、calc递归解析器与convert换算器逐字未改；原逻辑不使用eval/Function，也不是操作系统shell。

原 help、banner、hostname/whoami/date、echo、clear、theme、calc、convert、todo，以及 vi/vim/emacs 文本回应均本地运行。Enter执行、上下方向历史、Tab补全与Ctrl+L保留。主题改变原面板颜色，todo增删/完成/列出均真实内存状态；不代表任何远端任务/系统设置。hostname来自iframe当前地址，在srcdoc可能为空，不冒称真实机器身份。

范围与必要改动：weather/curl/repo/email/donate/sudo 明确返回“离线演示，未执行”，原网络/打开外链代码移除；不作假联网结果/假成功。统计脚本与事件跟踪移除。原localStorage读写由私有内存Map替代，不访问用户存储。退出清空；无跨会话持久化。每次输入最多512字符、历史最多100条、todo最多100条；输入期间互斥，IME组合键不执行，Ctrl+L清屏重置历史游标防止旧索引越界，Object.hasOwn拒绝原命令对象原型路径。原await完成后检查生命周期，退出中断无晚到追加。

原 CascadiaCode.ttf 未复制或编码，明确系统等宽字体回退。原favicon未加载；原页面没有必需插图。原Tailwind工具类真实编译，保留源视觉结构。小段中文范围说明是适配壳，不冒充原内容。完整原theme色值名称为固定仓数据，不拆变体条目。

actual560 compose验证：原banner、help/Tab、计算及除零错误、温度换算、todo、主题切换、历史上下键、clear、重复Enter、IME、隐藏保持、恶意输入只作文字、105次命令触发100历史边界；本地异步提交后立刻退出不会追加。缺根/部分初始化focus异常/后期focus异常显示失败状态；退出移除全部实际监听，旧input事件不可复活，timers/RAF均0；fetch/storage/open/Worker/eval/Function被测试拒绝且正常本地交互通过。JSDOM不是视觉/实际字体或滚动焦点验收，browserVisualQA: not-run。

公开仅7个文本：index.html/runtime.js/runtime.css/README.md/LICENSE.txt/SOURCE.json/VERIFICATION.json。SOURCE保存固定输入hash/Git blob、版本/完整修改模块与包范围；原归档、构建/测试、lock完整仅本地，不虚构ZIP或已发布完整仓。Svelte运行MIT、Tailwind编译CSS MIT；附构建工具原全文，不以这些工具的许可覆盖原代码。
