export default [
  {
    "id": "chatui:rich-service-conversation",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "富文字客服会话与快捷短语",
    "reason": "虚构原回复；隐藏重置。可参考文字消息，不能代表完整富媒体客服体验",
    "deliveredScope": "文字会话、快捷短语、5技能卡、评价和固定延时回复；移除商品选择/图片/头像/录音，卡片原无handler按钮禁用",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/chatui-service-01/chat/README.md",
      "ui-vault-581/apps/atlas-sample/batches/chatui-service-01/chat/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "quartz-v4:linked-knowledge-garden",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "笔记目录搜索与双向链接",
    "reason": "知识阅读信息结构有用，但图谱是关键卖点且不能拿模拟renderer证明可看",
    "deliveredScope": "原SSR结构+搜索/目录/回链，3篇宿主笔记；原Pixi/D3图谱仅实际测unsupported及测试renderer清理",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/quartz-garden-01/garden/README.md",
      "ui-vault-581/apps/atlas-sample/batches/quartz-garden-01/garden/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "bruno:request-response-workspace",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "请求参数编辑与文字响应",
    "reason": "参数编辑有参考价值；固定响应不体现真实请求工具，虚拟表和CM输入只有几何桩",
    "deliveredScope": "抽取Params/Headers/纯文本Body、原CM5与reducers；宿主固定collection双栏，响应固定文字，不发请求",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/bruno-workspace-01/workspace/README.md",
      "ui-vault-581/apps/atlas-sample/batches/bruno-workspace-01/workspace/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "silverbullet:document-navigation-workspace",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "文档树导航与本地编辑",
    "reason": "与一般CM文档树高度重叠，SilverBullet独特知识机制没有展示",
    "deliveredScope": "原TopBar/TreeView+text-document分支，宿主3文档两栏；移除page-live-preview、SpaceLua/Vim/插件/同步",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/silverbullet-documents-01/README.md",
      "ui-vault-581/apps/atlas-sample/batches/silverbullet-documents-01/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "bookstack:shelf-book-organization",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "书架双列表编排",
    "reason": "原目标本就书架组织，双列表有用；不要说知识库完成。拖拽只有逻辑证据",
    "deliveredScope": "原shelf-sort双列表、排序搜索/菜单；排除名称说明/封面/标签/权限/提交、章节阅读",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/bookstack-shelf-01/README.md",
      "ui-vault-581/apps/atlas-sample/batches/bookstack-shelf-01/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "githistory:file-version-time-travel",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "代码版本历史漫游",
    "reason": "代码结果对比适合Exodus；关键动画像素与滚轮效果仍未经native",
    "deliveredScope": "原差异高亮、虚拟行、弹簧、键盘导航，3固定提交，无头像外链/更多加载",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/git-history-01/README.md",
      "ui-vault-581/apps/atlas-sample/batches/git-history-01/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "pizzicato:audio-effect-playground",
    "recommendation": "review",
    "layer": "experiment",
    "scopeLabel": "合成波形与声效参数面板",
    "reason": "声效反馈可参考，但实际可听完全未验且不是语音或原音乐演示",
    "deliveredScope": "精选Waveform/Attack-Release/Delay/LowPass四段；后两音乐改合成测试音，其他段不收",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/pizzicato-effects-01/audio/README.md",
      "ui-vault-581/apps/atlas-sample/batches/pizzicato-effects-01/audio/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "jupyterlab:notebook-document-scene",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "本地笔记本文档与单元编辑",
    "reason": "单元编辑有独立价值，但7.06MB UTF16较重、用户可能期待执行代码，隐藏丢编辑",
    "deliveredScope": "原Notebook/CM/单元动作+工具栏命令面板；宿主Panel替服务Panel，2格样例无内核/保存/补全",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/jupyter-notebook-01/notebook/README.md",
      "ui-vault-581/apps/atlas-sample/batches/jupyter-notebook-01/notebook/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "react-page:multilingual-cell-editor",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "多语言单元内容编辑器",
    "reason": "适合内容编排，主卖点移动/缩放和IME未native验，隐藏重置",
    "deliveredScope": "真实双语/Slate/custom单元/样式表单/模式；去image，4固定schema预编译",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/reactpage-language-01/editor/README.md",
      "ui-vault-581/apps/atlas-sample/batches/reactpage-language-01/editor/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "blocknote:document-comments-workspace",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "文档编辑与评论线程",
    "reason": "Exodus批注价值高；多数评论深操作用test-only API验证，真实用户选区建评论仍需检查",
    "deliveredScope": "原编辑器/CommentsExtension/YjsThreadStore，本地Y.Doc、线程回复解决重开/角色；无远程协作/媒体",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/blocknote-comments-01/comments/README.md",
      "ui-vault-581/apps/atlas-sample/batches/blocknote-comments-01/comments/SOURCE-EVIDENCE.json",
      "ui-vault-581/apps/atlas-sample/batches/blocknote-comments-01/comments/SOURCE-PATCHES.json"
    ]
  },
  {
    "id": "copilotkit:presentation-coauthor",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "文字幻灯片与讲稿编辑",
    "reason": "作为简单文字slide可用，但与原视觉展示差距大，生成协作主价值未展示",
    "deliveredScope": "原正文/讲稿编辑、增删导航，照片栏收起，生成研究朗读禁用",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/presentation-text-01/editor/README.md",
      "ui-vault-581/apps/atlas-sample/batches/presentation-text-01/editor/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "copilotkit:a2ui-document-surfaces",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "协议驱动文档结果面板",
    "reason": "协议动态UI有独立参考价值，不能把3行数据说成PDF分析",
    "deliveredScope": "原SurfaceCanvas/catalog+真实协议renderer；宿主3文档和绑定动作，无PDF/AI",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/a2ui-surfaces-01/surfaces/README.md",
      "ui-vault-581/apps/atlas-sample/batches/a2ui-surfaces-01/surfaces/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "copilotkit:resume-job-match",
    "recommendation": "review",
    "layer": "experiment",
    "scopeLabel": "简历样例校验与职位结果",
    "reason": "几乎只能看固定提交态；职位匹配属于假结果，适配价值低于完整原流程",
    "deliveredScope": "原表单/结果表，真实picker禁用；内造File经原校验，300ms模拟返回2职位",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/resume-local-01/resume/README.md",
      "ui-vault-581/apps/atlas-sample/batches/resume-local-01/resume/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "copilotkit:connected-tool-results",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "工具执行结果富卡片",
    "reason": "静态富消息本就是原职责，适合Exodus，不必要求执行邮件才有价值",
    "deliveredScope": "原7导出卡/解析/数量上限保留，宿主虚构props，href移除",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/tool-results-01/results/README.md",
      "ui-vault-581/apps/atlas-sample/batches/tool-results-01/results/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "copilotkit:repo-doctor-tool-approval",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "工具请求审批与文件差异",
    "reason": "Exodus审批人机交互直接相关；本地Approved不得误解为实际执行",
    "deliveredScope": "原批准拒绝备注/失败重试/真实Shiki差异，宿主3虚构请求与Promise",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/repo-approval-01/approval/README.md",
      "ui-vault-581/apps/atlas-sample/batches/repo-approval-01/approval/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "copilotkit:research-artifact-workspace",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "研究任务与产物阅读工作区",
    "reason": "研究产物阅读结构有价值，不是研究服务或真实证据",
    "deliveredScope": "完整Workspace/Section/Todo/File/Source/Modal，虚构Markdown；下载与引用外跳禁用",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/research-workspace-01/workspace/README.md",
      "ui-vault-581/apps/atlas-sample/batches/research-workspace-01/workspace/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "copilotkit:research-sections-canvas",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "分节研究报告编辑画布",
    "reason": "富内容人工修改价值明确；流状态为演示不应当真实研究",
    "deliveredScope": "原全文/单节/缩略导航与标题Markdown编辑，虚构内容和模拟流状态",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/research-sections-01/README.md",
      "ui-vault-581/apps/atlas-sample/batches/research-sections-01/SOURCE.json"
    ]
  },
  {
    "id": "copilotkit:discourse-evidence-report",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "论点分布与引用阅读报告",
    "reason": "结果设计适合Exodus；原数据非真实，不能把比例作可信度证据",
    "deliveredScope": "原双列支持比例与引用阅读，虚构讨论，首字母fallback、无外链",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/discourse-report-01/README.md",
      "ui-vault-581/apps/atlas-sample/batches/discourse-report-01/SOURCE.json"
    ]
  },
  {
    "id": "aicanvas:ai-job-cards",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "职位叠卡轮换与收藏",
    "reason": "视觉叠卡有参考价值但不是招聘工具；动画/手势native未验",
    "deliveredScope": "原9卡/品牌SVG/书签/轮换/拖阈值；原View无动作改禁用，招聘是虚构",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/ai-jobs-01/job-cards/README.md",
      "ui-vault-581/apps/atlas-sample/batches/ai-jobs-01/job-cards/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "cossui:group-chat-demo",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Coss UI · 本地完整群聊状态演示",
    "reason": "Exodus对话交互价值高；Motion布局、抽屉触摸、mention IME仍未native验",
    "deliveredScope": "原Drawer/回复/反应/回执/成员/mention/失败重试/模拟发送；停剪贴板",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/coss-chat-01/README.md",
      "ui-vault-581/apps/atlas-sample/batches/coss-chat-01/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "cossui:event-type-ordering",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "事件目录排序与撤销",
    "reason": "排序撤销可复用；业务按钮大量不可用但原也无实现，不宜硬造",
    "deliveredScope": "完整5行原排序/撤销/显隐；原菜单noop及路由禁用",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/coss-events-01/events/README.md",
      "ui-vault-581/apps/atlas-sample/batches/coss-events-01/events/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "eldora:logo-cloud-04",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "错峰品牌轨道",
    "reason": "装饰反馈非Exodus任务工具；替换轮廓破坏原视觉平衡可能性未验",
    "deliveredScope": "原3列时序/弹簧，原6品牌全部换为有授权6技术品牌SVG",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/eldora-logos-01/README.md",
      "ui-vault-581/apps/atlas-sample/batches/eldora-logos-01/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "astryx:library",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "AstryX · 素材库浏览与筛选",
    "reason": "iframe CSP 阻断预览图，卡片预览区破图/空白，核心视觉缺失，不做封面",
    "evidence": [
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/records/astryx--library.json",
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/final-closeout-summary.json"
    ],
    "evidenceStatus": "historical-render-failure",
    "historicalCapture": {
      "status": "failed",
      "reason": "iframe CSP 阻断预览图，卡片预览区破图/空白，核心视觉缺失，不做封面",
      "newBrowserVerification": false,
      "resourceContinuity": "same-581-bytes",
      "currentFailureConfirmed": false,
      "note": "历史截图记录，不是本轮原生复验；相同资产不保证不同宿主/视口/时机的结果相同。",
      "resources": [
        {
          "path": "apps/atlas-sample/batches/astryx-next-01/library/index.html",
          "captureSHA256": "6e24039b24fe033e6b41a9a1f7c69932a15d2b923afb6ae5a10c2f7fb9261e2d",
          "snapshot581SHA256": "6e24039b24fe033e6b41a9a1f7c69932a15d2b923afb6ae5a10c2f7fb9261e2d",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/astryx-next-01/library/runtime.css",
          "captureSHA256": "55fef27d9cf782bd7cd2637a5db7b14706a6e3fc7164269149bf6d6be596ae0a",
          "snapshot581SHA256": "55fef27d9cf782bd7cd2637a5db7b14706a6e3fc7164269149bf6d6be596ae0a",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/astryx-next-01/library/runtime.js",
          "captureSHA256": "fa3c6f404ff432c2c307a626a0174f0a7d0df0d675e8dee19fbd40b4bc9893dd",
          "snapshot581SHA256": "fa3c6f404ff432c2c307a626a0174f0a7d0df0d675e8dee19fbd40b4bc9893dd",
          "sameBytes": true
        }
      ]
    }
  },
  {
    "id": "fancy:screensaver",
    "recommendation": "review",
    "layer": "experiment",
    "scopeLabel": "fancy:screensaver",
    "reason": "原404屏保实验自身显示 page not found；动画、尺寸与参考价值待复核，不能据此判定路由404或当前渲染失败。",
    "evidence": [
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/records/fancy--screensaver.json",
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/final-closeout-summary.json"
    ],
    "evidenceStatus": "historical-failure-disputed",
    "historicalCapture": {
      "status": "failed",
      "reason": "The iframe explicitly renders “page not found” instead of the screensaver component.",
      "newBrowserVerification": false,
      "resourceContinuity": "same-581-bytes",
      "currentFailureConfirmed": false,
      "note": "保留历史 failed 原记录；原JSX反证说明 page not found 是设计文案，不是路由404。待复核动画/尺寸/参考价值，无本轮原生复验。",
      "resources": [
        {
          "path": "apps/atlas-sample/batches/fancy-next-01/screensaver.html",
          "captureSHA256": "139719649c285e0962ce641bcbb6300eebe5f7d64320623e0bd6ed2305d5ee0a",
          "snapshot581SHA256": "139719649c285e0962ce641bcbb6300eebe5f7d64320623e0bd6ed2305d5ee0a",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/fancy-next-01/runtime.css",
          "captureSHA256": "cce34d3a24574ca7548b9e424b9e8c848648fdb91dbc859d2b56e067de165dd5",
          "snapshot581SHA256": "cce34d3a24574ca7548b9e424b9e8c848648fdb91dbc859d2b56e067de165dd5",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/fancy-next-01/runtime.js",
          "captureSHA256": "0992e28dc6c0c5e8779b168b7359e691e309ef7a9a4704a74bee4ac076c35f75",
          "snapshot581SHA256": "0992e28dc6c0c5e8779b168b7359e691e309ef7a9a4704a74bee4ac076c35f75",
          "sameBytes": true
        }
      ],
      "counterEvidence": {
        "source": "audit_formity source/registry review relayed by parent",
        "registryResolution": "gD matched screensaver entry",
        "originalJSX": "Original demo h1 contains page not found and bouncing image",
        "interpretation": "Original designed 404 screensaver text, not evidence of missing route. Historical Grok failed record retained, inference disputed.",
        "routeFailureInferred": false
      }
    }
  },
  {
    "id": "smoothui:pixel-brush-canvas",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "像素画板与撤销",
    "reason": "本地笔画仍为空（0 painted pixels），空画布不算成品封面",
    "evidence": [
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/records/smoothui--pixel-brush-canvas.json",
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/final-closeout-summary.json"
    ],
    "evidenceStatus": "historical-render-failure",
    "historicalCapture": {
      "status": "failed",
      "reason": "本地笔画仍为空（0 painted pixels），空画布不算成品封面",
      "newBrowserVerification": false,
      "resourceContinuity": "same-581-bytes",
      "currentFailureConfirmed": false,
      "note": "历史截图记录，不是本轮原生复验；相同资产不保证不同宿主/视口/时机的结果相同。",
      "resources": [
        {
          "path": "apps/atlas-sample/batches/smooth-direct-01/pixel-brush-canvas.html",
          "captureSHA256": "dd7842e5a860a959b741ce042a7ef1d6cb85d774cd4bcd4de147874715938d7f",
          "snapshot581SHA256": "dd7842e5a860a959b741ce042a7ef1d6cb85d774cd4bcd4de147874715938d7f",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/smooth-direct-01/runtime.css",
          "captureSHA256": "8ab6a6ab0edd0c31408e5a3cceef0ec4fe90d563e49e4e51d0c2e0c0e35ee241",
          "snapshot581SHA256": "8ab6a6ab0edd0c31408e5a3cceef0ec4fe90d563e49e4e51d0c2e0c0e35ee241",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/smooth-direct-01/runtime.js",
          "captureSHA256": "80c05a741bcb1c1edab67a1969bb0d2fcc54c1760dcf0b8b618847a2b6cbb6eb",
          "snapshot581SHA256": "80c05a741bcb1c1edab67a1969bb0d2fcc54c1760dcf0b8b618847a2b6cbb6eb",
          "sameBytes": true
        }
      ]
    }
  },
  {
    "id": "uilayout:timeline-animation-index",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "timeline-animation-index",
    "reason": "Iframe screenshot is blank despite some accessibility text being present.",
    "evidence": [
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/records/uilayout--timeline-animation-index.json",
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/final-closeout-summary.json"
    ],
    "evidenceStatus": "historical-render-failure",
    "historicalCapture": {
      "status": "failed",
      "reason": "Iframe screenshot is blank despite some accessibility text being present.",
      "newBrowserVerification": false,
      "resourceContinuity": "same-581-bytes",
      "currentFailureConfirmed": false,
      "note": "历史截图记录，不是本轮原生复验；相同资产不保证不同宿主/视口/时机的结果相同。",
      "resources": [
        {
          "path": "apps/atlas-sample/batches/uilayout-next-02/timeline-animation-index.html",
          "captureSHA256": "e69a33b1b694fa4a3723ac1adf40544b4ee0b2746f71f767d0aaaf594e43f461",
          "snapshot581SHA256": "e69a33b1b694fa4a3723ac1adf40544b4ee0b2746f71f767d0aaaf594e43f461",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/uilayout-next-02/runtime.css",
          "captureSHA256": "49ac10fb226d12bb57164f9e591ca75592e91aa888e6d7a6248ade5ad7a2938f",
          "snapshot581SHA256": "49ac10fb226d12bb57164f9e591ca75592e91aa888e6d7a6248ade5ad7a2938f",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/uilayout-next-02/runtime.js",
          "captureSHA256": "6b066a383be8557449bb0c2517373717b75e13eb547d0c6852c352059bd313bd",
          "snapshot581SHA256": "6b066a383be8557449bb0c2517373717b75e13eb547d0c6852c352059bd313bd",
          "sameBytes": true
        }
      ]
    }
  },
  {
    "id": "vis-timeline:local-task-planner",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "可编辑任务时间轴 · 分组时序计划",
    "reason": "Timeline plot region blank after Fit all tasks; no usable #demo subject for cover.",
    "evidence": [
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/records/vis-timeline--local-task-planner.json",
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/final-closeout-summary.json"
    ],
    "evidenceStatus": "historical-render-failure",
    "historicalCapture": {
      "status": "failed",
      "reason": "Timeline plot region blank after Fit all tasks; no usable #demo subject for cover.",
      "newBrowserVerification": false,
      "resourceContinuity": "unknown-no-recorded-hashes",
      "currentFailureConfirmed": false,
      "note": "历史失败无记录资源hash，不能推断当前版本必坏。",
      "resources": []
    }
  },
  {
    "id": "aicanvas:stack-tower",
    "recommendation": "review",
    "layer": "experiment",
    "scopeLabel": "Stack Tower · 错相字层动态雕塑",
    "reason": "partial_content_overflow",
    "evidence": [
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/records/aicanvas--stack-tower.json",
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/final-closeout-summary.json"
    ],
    "evidenceStatus": "needs-recapture",
    "historicalCapture": {
      "status": "needs_recapture",
      "reason": "partial_content_overflow",
      "newBrowserVerification": false,
      "resourceContinuity": "same-581-bytes",
      "currentFailureConfirmed": false,
      "note": "历史截图记录，不是本轮原生复验；相同资产不保证不同宿主/视口/时机的结果相同。",
      "resources": [
        {
          "path": "apps/atlas-sample/batches/aicanvas-tower-01/index.html",
          "captureSHA256": "6e5640994465d0345ecdf9f96a1aed370371f656d6c752deaa1ba1112b44d7fc",
          "snapshot581SHA256": "6e5640994465d0345ecdf9f96a1aed370371f656d6c752deaa1ba1112b44d7fc",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/aicanvas-tower-01/runtime.css",
          "captureSHA256": "fc582931e3e923a19bffc68b34935cdae7c2db62d479de13add542ae47187209",
          "snapshot581SHA256": "fc582931e3e923a19bffc68b34935cdae7c2db62d479de13add542ae47187209",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/aicanvas-tower-01/runtime.js",
          "captureSHA256": "ee4e4874d1252218f5d3d0d4d82b5e1827a67926e81a25d3a897b8dd8e7b7a0b",
          "snapshot581SHA256": "ee4e4874d1252218f5d3d0d4d82b5e1827a67926e81a25d3a897b8dd8e7b7a0b",
          "sameBytes": true
        }
      ]
    }
  },
  {
    "id": "blode:dnd-grid",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "实体面板 · 拖动缩放网格",
    "reason": "DnD grid after scroll; upper tile A still truncated at iframe top.",
    "evidence": [
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/records/blode--dnd-grid.json",
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/final-closeout-summary.json"
    ],
    "evidenceStatus": "needs-recapture",
    "historicalCapture": {
      "status": "needs_recapture",
      "reason": "DnD grid after scroll; upper tile A still truncated at iframe top.",
      "newBrowserVerification": false,
      "resourceContinuity": "same-581-bytes",
      "currentFailureConfirmed": false,
      "note": "历史截图记录，不是本轮原生复验；相同资产不保证不同宿主/视口/时机的结果相同。",
      "resources": [
        {
          "path": "apps/atlas-sample/batches/blode-spatial-01/dnd-grid/index.html",
          "captureSHA256": "ff0f949d7f0f30784fb72a4efba96f5f93928c7cf35b5b6018d61add91ec01ba",
          "snapshot581SHA256": "ff0f949d7f0f30784fb72a4efba96f5f93928c7cf35b5b6018d61add91ec01ba",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/blode-spatial-01/dnd-grid/runtime.css",
          "captureSHA256": "fbbbe2789790369b56e597b94b9979be3488d8153c013325004cb9a4a912d445",
          "snapshot581SHA256": "fbbbe2789790369b56e597b94b9979be3488d8153c013325004cb9a4a912d445",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/blode-spatial-01/dnd-grid/runtime.js",
          "captureSHA256": "657028a43d075b943e69f6a9dd56b0252873a8d5b591807236509f3931e2344e",
          "snapshot581SHA256": "657028a43d075b943e69f6a9dd56b0252873a8d5b591807236509f3931e2344e",
          "sameBytes": true
        }
      ]
    }
  },
  {
    "id": "blode:omni-color-picker",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "Omni 二维惯性主题颜色选择器",
    "reason": "partial_content_overflow",
    "evidence": [
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/records/blode--omni-color-picker.json",
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/final-closeout-summary.json"
    ],
    "evidenceStatus": "needs-recapture",
    "historicalCapture": {
      "status": "needs_recapture",
      "reason": "partial_content_overflow",
      "newBrowserVerification": false,
      "resourceContinuity": "same-581-bytes",
      "currentFailureConfirmed": false,
      "note": "历史截图记录，不是本轮原生复验；相同资产不保证不同宿主/视口/时机的结果相同。",
      "resources": [
        {
          "path": "apps/atlas-sample/batches/blode-practical-01/omni/index.html",
          "captureSHA256": "bd6ddb60aeda53e881865ef24c14010ee5343b246eb13735fdab7c4a7b54260c",
          "snapshot581SHA256": "bd6ddb60aeda53e881865ef24c14010ee5343b246eb13735fdab7c4a7b54260c",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/blode-practical-01/omni/runtime.css",
          "captureSHA256": "aeab130e3191fc2cd1c0577b509541c0fcf257f02a6426736b54999939c8e9a9",
          "snapshot581SHA256": "aeab130e3191fc2cd1c0577b509541c0fcf257f02a6426736b54999939c8e9a9",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/blode-practical-01/omni/runtime.js",
          "captureSHA256": "e7320c7a53cc828d37e58f0d1eb9263ba29a90f7dcb3b9cb28f0bb1865c9c1a8",
          "snapshot581SHA256": "e7320c7a53cc828d37e58f0d1eb9263ba29a90f7dcb3b9cb28f0bb1865c9c1a8",
          "sameBytes": true
        }
      ]
    }
  },
  {
    "id": "smoothui:image-metadata-preview",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "图片元数据展开卡",
    "reason": "Image+metadata preview after upward scroll; illustration/meta still partially clipped.",
    "evidence": [
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/records/smoothui--image-metadata-preview.json",
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/final-closeout-summary.json"
    ],
    "evidenceStatus": "needs-recapture",
    "historicalCapture": {
      "status": "needs_recapture",
      "reason": "Image+metadata preview after upward scroll; illustration/meta still partially clipped.",
      "newBrowserVerification": false,
      "resourceContinuity": "same-581-bytes",
      "currentFailureConfirmed": false,
      "note": "历史截图记录，不是本轮原生复验；相同资产不保证不同宿主/视口/时机的结果相同。",
      "resources": [
        {
          "path": "apps/atlas-sample/batches/smooth-direct-01/image-metadata-preview.html",
          "captureSHA256": "566fd1ede7c61f9a2bc0ec0543dd70afc14584ed1955c8e4ee13bed009d38259",
          "snapshot581SHA256": "566fd1ede7c61f9a2bc0ec0543dd70afc14584ed1955c8e4ee13bed009d38259",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/smooth-direct-01/runtime.css",
          "captureSHA256": "8ab6a6ab0edd0c31408e5a3cceef0ec4fe90d563e49e4e51d0c2e0c0e35ee241",
          "snapshot581SHA256": "8ab6a6ab0edd0c31408e5a3cceef0ec4fe90d563e49e4e51d0c2e0c0e35ee241",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/smooth-direct-01/runtime.js",
          "captureSHA256": "80c05a741bcb1c1edab67a1969bb0d2fcc54c1760dcf0b8b618847a2b6cbb6eb",
          "snapshot581SHA256": "80c05a741bcb1c1edab67a1969bb0d2fcc54c1760dcf0b8b618847a2b6cbb6eb",
          "sameBytes": true
        }
      ]
    }
  },
  {
    "id": "uppy:local-attachment-preparation",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "批量附件准备与元数据编辑",
    "reason": "原准备流程保留度高，壳导航/配色为宿主。禁止上传符合本条local-attachment目标，不应单因无后台降级；图像文件仅类型图标，不能称媒体预览。",
    "deliveredScope": "原文件卡/列表、逐项元数据编辑、移除、数量/格式限制；2个内造File，无上传器/provider/图像缩略图",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/uppy-01/ADAPTATION.md",
      "ui-uppy-local/preview/main.js"
    ]
  },
  {
    "id": "surveyjs:project-decision-survey",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "条件校验问卷本地示例",
    "reason": "题目是宿主原创而非官方成品；真实原引擎和完整默认视觉，无自造替身。作为问卷范式参考价值清晰，不把JSONfixture冒称官方业务调查。",
    "deliveredScope": "原Survey与Model渲染宿主3页项目JSON，动态矩阵/条件/跨字段校验/本地完成结果",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/surveyjs-01/README.md",
      "ui-survey-adapt/src/main.jsx"
    ]
  },
  {
    "id": "excalidraw:local-board",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "受限本地绘图画布",
    "reason": "主要绘图机制仍完整，不是静态壳；Helvetica代Virgil明显改变手绘气质。禁保存不等于无交互价值，但不应叫完整Excalidraw服务。",
    "deliveredScope": "原绘图/选择/几何/文本/箭头/历史/画布导航；禁导入导出、媒体、库、嵌入、链接和协作",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/excalidraw-01/ADAPTATION.md",
      "ui-excalidraw-local/build/main.tsx"
    ]
  },
  {
    "id": "puck:official-visual-page-builder",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "原版页面构建器本地示例",
    "reason": "原Puck与5官方无媒体组件、字段编辑/复制/删除/历史保留；核心指针拖入/排序/嵌套的验收尚未闭合，合成几何测试未插入成功，不据此断言当前原生拖放已坏。",
    "deliveredScope": "原Puck与5官方无媒体blocks、Outline/字段/复制删除/历史；iframe官方关闭，宿主内容、无发布",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/puck-editor-01/README.md",
      "ui-puck-editor-local/src/main.tsx",
      "ui-vault-581/apps/atlas-sample/batches/puck-editor-01/SOURCE.json",
      "ui-puck-editor-local/src/main.tsx"
    ]
  },
  {
    "id": "formity:branching-loop-interview",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "条件循环访谈页面",
    "reason": "保留完整原演示页面及真实流程，不依赖虚构后端成功。原示例本就是本地问卷，范围与目标一致；布局未native不是单独降级依据。",
    "deliveredScope": "原flow/App/控件、条件追问/多选循环/回退/校验/结果重启；本地数据",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/formity-01/interview/README.md",
      "ui-formity-local/main.tsx",
      "ui-vault-581/apps/atlas-sample/batches/formity-01/interview/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "copilotkit:trip-intake-itinerary",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "虚构行程需求与结果卡",
    "reason": "原表单与结果结构保留，真正状态闭环；结果不是规划算法。Exodus富结果参考有价值，但不能称实际推荐或预订。",
    "deliveredScope": "原1–7天/1–15人/预算/必填校验，原Itinerary/MealItem；宿主同步虚构行程餐厅",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/copilot-trip-01/trip-intake/README.md",
      "ui-trip-demo-local/main.tsx",
      "ui-vault-581/apps/atlas-sample/batches/copilot-trip-01/trip-intake/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "milkdown:crepe-document-workspace",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "块式文档本地编辑",
    "reason": "整体不是窄壳，主要编辑价值高；但默认数学等功能可达时字体缺失是实质内容完整性风险，不是泛泛native未验。171包体量也需实际输入响应确认。 源码进一步确认：Crepe defaultFeatures[latex]=true，宿主未关闭；build.mjs显式移除所有@font-face。是可达默认数学特性与排版资产不完整的矛盾，不是单凭未做native测试。",
    "deliveredScope": "原ProseMirror/Crepe slash/格式/表格/代码，AI关闭，图片上传/远程关闭；KaTeX CSS保留而数学字体去除",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/milkdown-crepe-01/README.md",
      "ui-milkdown-workspace-local/src/main.js",
      "ui-vault-581/apps/atlas-sample/batches/milkdown-crepe-01/SOURCE.json",
      "ui-milkdown-workspace-local/node_modules/@milkdown/crepe/lib/esm/index.js",
      "ui-milkdown-workspace-local/build.mjs"
    ]
  },
  {
    "id": "novel:selection-writing-workspace",
    "recommendation": "review",
    "layer": "experiment",
    "scopeLabel": "预录回应的选区写作演示",
    "reason": "原编辑器真实，但选项语义不同却返回同文是高模拟边界；媒体不可用文字与缺KaTeX字体影响原整文档观感。不能作为智能写作效果样本。",
    "deliveredScope": "原advanced editor、选区菜单与替换/插入/丢弃；所有AI选项同一预录结果，原媒体替不可用文字",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/novel-workspace-01/README.md",
      "ui-novel-workspace-local/main.tsx",
      "ui-vault-581/apps/atlas-sample/batches/novel-workspace-01/SOURCE.json",
      "ui-novel-workspace-local/app/components/tailwind/generative/ai-selector.tsx"
    ]
  },
  {
    "id": "copilotkit:flight-choice-confirmation",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "虚构航班选择与确认卡",
    "reason": "原可复用状态链与设计保真较高；预订未接不是缩水成静态图。必须避免Confirm/CONFIRMED被当实际预订。",
    "deliveredScope": "原3组件完整交互，2个虚构航班，本地setBooked，不含服务",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/copilot-flight-01/flight-choice/README.md",
      "ui-flight-demo-local/main.tsx",
      "ui-vault-581/apps/atlas-sample/batches/copilot-flight-01/flight-choice/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "actual:budget-automation-editor",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "预算规则表单本地编辑",
    "reason": "九表单并非无价值，原视觉保留；但原自动化用途最关键的规则效果反馈完全缺，且壳为宿主，不能等同BudgetAutomationsModal。",
    "deliveredScope": "原AutomationEditorPane与9表单/校验/reducer，宿主规则列表+JSON；无dry-run、贡献金额、余额、保存",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/actual-automation-01/README.md",
      "ui-actual-local/main.tsx",
      "ui-vault-581/apps/atlas-sample/batches/actual-automation-01/SOURCE.json",
      "ui-actual-local/main.tsx"
    ]
  },
  {
    "id": "memos:personal-knowledge-timeline",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "便笺时间线与标签阅读",
    "reason": "目标入口本为阅读卡，原组件不是Home空壳；读范围对知识引用有价值。不能把知识timeline文字说成完整笔记编辑器。",
    "deliveredScope": "原MemoHeader/Body/Markdown、长文展开、标签过滤/单条导航，3文；无编辑发布附件评论",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/memos-reader-01/README.md",
      "ui-memos-timeline-local/src/main.tsx",
      "ui-vault-581/apps/atlas-sample/batches/memos-reader-01/SOURCE.json"
    ]
  },
  {
    "id": "chainlit:execution-message-tree",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "公开执行步骤富消息树",
    "reason": "原目标就是富消息显示而非整站，后台未接不影响原组件价值。排除代码高亮/LaTeX会缩小富内容种类，须保标签。",
    "deliveredScope": "原递归步骤/折叠/运行错误完成态、受限Markdown；本地fixture开关，无agent",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/chainlit-tree-01/README.md",
      "ui-chainlit-tree-local/src/main.tsx",
      "ui-vault-581/apps/atlas-sample/batches/chainlit-tree-01/SOURCE.json"
    ]
  },
  {
    "id": "drawdb:relational-schema-workspace",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "本地关系模型编辑页面",
    "reason": "主工作区而非替壳，原关系编辑仍有实质价值。数据取官方模板而非空模型；禁保存需要清楚，不伪成功。",
    "deliveredScope": "原Editor/provider/Workspace/SidePanel/Canvas/关系/历史/布局，原Blog5表5关系；禁持久化/SQL导入导出等",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/drawdb-workspace-01/README.md",
      "ui-drawdb-workspace-local/entry.jsx",
      "ui-vault-581/apps/atlas-sample/batches/drawdb-workspace-01/SOURCE.json"
    ]
  },
  {
    "id": "miniflux:feed-reading-workspace",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "本地订阅列表与全文阅读",
    "reason": "原阅读主体与布局完整，数据替换有意义而无媒体空框。无抓取不应让整个阅读参考失去资格。",
    "deliveredScope": "真实原Go模板，列表/收藏/历史/全文/键盘/标记；3虚构文章，本地路由",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/miniflux-reader-01/README.md",
      "ui-miniflux-local/src/main.js",
      "ui-vault-581/apps/atlas-sample/batches/miniflux-reader-01/SOURCE.json"
    ]
  },
  {
    "id": "wallabag:saved-article-reading",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "文章精读与主题侧栏",
    "reason": "阅读页面核心完整，图标替Lucide、字体系统回退有视觉差异但非核心缺失。Exodus资料深阅可参考。",
    "deliveredScope": "真实原Twig阅读主体，Materialize侧栏/主题/进度，虚构文章；无保存批注抓取",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/wallabag-reader-01/README.md",
      "ui-wallabag-local/src/main.js",
      "ui-vault-581/apps/atlas-sample/batches/wallabag-reader-01/SOURCE.json"
    ]
  },
  {
    "id": "twine:branching-story-map",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "分支故事地图与段落编辑",
    "reason": "地图+结构编辑主要机制保留，textarea是官方支持分支不是新造替代；缺故事播放与全应用明确。",
    "deliveredScope": "原StoryEditRoute/PassageMap/reducer/undo/段落链接创建，原textarea偏好模式；3本地分支，无播放发布",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/twine-map-01/README.md",
      "ui-twine-map-local/src/app.tsx",
      "ui-vault-581/apps/atlas-sample/batches/twine-map-01/SOURCE.json"
    ]
  },
  {
    "id": "reactive-resume:paper-design-editor",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "简历模板 HTML 本地预览",
    "reason": "是实际原HTML引擎但不是原PDF页、分页/字体或完整builder表单；更换分支后的目标错位是硬证据，不能按原paper-design完成口径。",
    "deliveredScope": "改选官方HTML sharing分支，18模板原渲染，宿主4字段编辑/颜色/手机宽度；ShadowDOM代iframe",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/reactive-html-01/README.md",
      "ui-reactive-html-local/entry.ts",
      "ui-vault-581/apps/atlas-sample/batches/reactive-html-01/SOURCE.json",
      "ui-reactive-html-local/entry.ts"
    ]
  },
  {
    "id": "tambo:form",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "任务字段表单组件",
    "reason": "原动态表单可用，数据非官方完整应用；SDK替身不代表Agent联动。对生成式UI可参考但不是首创表单。",
    "deliveredScope": "原组件不改，宿主6字段与payload；SDK状态明确替本地React state",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/tambo-01/form/ADAPTATION.md",
      "ui-tambo-adapt/build/form.tsx"
    ]
  },
  {
    "id": "tambo:elicitation",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "澄清回应与确认组件",
    "reason": "组件本身作用就是收集用户回应，本地fixture合理，不必连真实MCP才展示价值。",
    "deliveredScope": "原validation primitives/accept/decline/提交态，宿主props与结果",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/tambo-01/elicitation/ADAPTATION.md",
      "ui-tambo-adapt/build/elicitation.tsx"
    ]
  },
  {
    "id": "tambo:graph",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "多类型图表结果组件",
    "reason": "原结果组件范围较准，不因普通图表或虚构数据直接降级；图表悬停响应仍需查但非已知故障。",
    "deliveredScope": "原bar/pie/line一个族，宿主数据与切换控制，无数据查询",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/tambo-01/graph/ADAPTATION.md",
      "ui-tambo-adapt/build/graph.tsx"
    ]
  },
  {
    "id": "hyperui:application-accordions",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "折叠问答（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。点击展开问题答案",
    "deliveredScope": "点击展开问题答案",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-accordions",
      "previews/application-accordions.html",
      "originals/application-accordions.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-toggles",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "设置开关（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。原生复选框驱动状态切换",
    "deliveredScope": "原生复选框驱动状态切换",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-toggles",
      "previews/application-toggles.html",
      "originals/application-toggles.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-radio-groups",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "选项卡片（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。原生单选组",
    "deliveredScope": "原生单选组",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-radio-groups",
      "previews/application-radio-groups.html",
      "originals/application-radio-groups.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-range-inputs",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "范围滑块（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。拖动或键盘调整",
    "deliveredScope": "拖动或键盘调整",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-range-inputs",
      "previews/application-range-inputs.html",
      "originals/application-range-inputs.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-checkboxes",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "勾选控件（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。原生勾选状态",
    "deliveredScope": "原生勾选状态",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-checkboxes",
      "previews/application-checkboxes.html",
      "originals/application-checkboxes.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-inputs",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "文本输入（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。输入与焦点样式",
    "deliveredScope": "输入与焦点样式",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-inputs",
      "previews/application-inputs.html",
      "originals/application-inputs.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-selects",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "下拉选择（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。原生选择控件",
    "deliveredScope": "原生选择控件",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-selects",
      "previews/application-selects.html",
      "originals/application-selects.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-quantity-inputs",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "数量输入（原组件参考）",
    "reason": "原生数字输入保留；图鉴适配为原两侧按钮补充本地 stepDown/stepUp，并在组件内明确标注本地步进演示。退出时移除监听并禁用按钮，不冒称上游原有行为。",
    "deliveredScope": "数字可直接编辑，两侧按钮执行本地加减步进；步进为明确标注的图鉴适配。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-quantity-inputs",
      "previews/application-quantity-inputs.html",
      "originals/application-quantity-inputs.html",
      "ui-local-action-next-fix/VERIFICATION.json",
      "ui-local-action-next-fix/HANDOFF.md"
    ],
    "nativeVerified": false,
    "requiresPatch": "ui-local-action-next-fix/FILES.json"
  },
  {
    "id": "hyperui:application-tables",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "数据表格（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。静态表格样式，无后台数据",
    "deliveredScope": "静态表格样式，无后台数据",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-tables",
      "previews/application-tables.html",
      "originals/application-tables.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-details-list",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "信息明细（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。静态键值信息",
    "deliveredScope": "静态键值信息",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-details-list",
      "previews/application-details-list.html",
      "originals/application-details-list.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-progress-bars",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "进度指示（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。静态进度值",
    "deliveredScope": "静态进度值",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-progress-bars",
      "previews/application-progress-bars.html",
      "originals/application-progress-bars.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-timelines",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "时间线（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。静态事件时间线",
    "deliveredScope": "静态事件时间线",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-timelines",
      "previews/application-timelines.html",
      "originals/application-timelines.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-vertical-menu",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "纵向导航（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。展示导航样式，演示链接不跳转",
    "deliveredScope": "展示导航样式，演示链接不跳转",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-vertical-menu",
      "previews/application-vertical-menu.html",
      "originals/application-vertical-menu.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-tabs",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "标签导航（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。静态导航外观，不宣称面板切换",
    "deliveredScope": "静态导航外观，不宣称面板切换",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-tabs",
      "previews/application-tabs.html",
      "originals/application-tabs.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-button-groups",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "分组按钮（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。静态按钮外观",
    "deliveredScope": "静态按钮外观",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-button-groups",
      "previews/application-button-groups.html",
      "originals/application-button-groups.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:marketing-stats",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "指标区块（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。完整静态指标区块",
    "deliveredScope": "完整静态指标区块",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:marketing-stats",
      "previews/marketing-stats.html",
      "originals/marketing-stats.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:marketing-newsletter-signup",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "邮件订阅区块（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。本地表单演示，不提交数据",
    "deliveredScope": "本地表单演示，不提交数据",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:marketing-newsletter-signup",
      "previews/marketing-newsletter-signup.html",
      "originals/marketing-newsletter-signup.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:marketing-contact-forms",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "联系表单（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。本地表单演示，不提交数据",
    "deliveredScope": "本地表单演示，不提交数据",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:marketing-contact-forms",
      "previews/marketing-contact-forms.html",
      "originals/marketing-contact-forms.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:marketing-announcements",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "公告栏（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。静态公告区块",
    "deliveredScope": "静态公告区块",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:marketing-announcements",
      "previews/marketing-announcements.html",
      "originals/marketing-announcements.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:marketing-polls",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "投票表单（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。原生选项演示，不发送投票",
    "deliveredScope": "原生选项演示，不发送投票",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:marketing-polls",
      "previews/marketing-polls.html",
      "originals/marketing-polls.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "looseleaf:peel-corner",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "可揭角优惠券（原组件参考）",
    "reason": "保留原受控揭角组件；复制处理等待 clipboard 写入成功才显示 Copied，能力缺失或拒绝显示 Copy unavailable 并捕获异常，不增加剪贴板权限或替代通道。",
    "deliveredScope": "揭角优惠券交互；复制成功才显示成功状态，不可用或被拒绝时显示失败提示。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#looseleaf:peel-corner",
      "batches/looseleaf-02/peel-corner.tsx",
      "batches/looseleaf-02/source.zip",
      "ui-looseleaf-action-fix/VERIFICATION.json",
      "ui-looseleaf-action-fix/HANDOFF.md"
    ],
    "nativeVerified": false,
    "requiresPatch": "ui-looseleaf-action-fix/FILES.json"
  },
  {
    "id": "bencho:voice-note",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "语音手势波形演示（交互实验）",
    "reason": "原声明A CONCEPT NOT A RECORDER，standIn数值波形+录制手势/播放游标。目录已写模拟/不申请麦克风，保留手势参考，不能宣称可听录音。",
    "deliveredScope": "长按模拟录音、左滑丢弃、松手回放波形；不申请真实麦克风。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#bencho:voice-note",
      "batches/bencho-01/voice-note.tsx",
      "batches/bencho-01/source.zip"
    ],
    "nativeVerified": false
  },
  {
    "id": "looseleaf:profile-page",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "纸张个人主页（本地页面场景）",
    "reason": "原个人主页场景含Activity/Notebooks/Stickers三Tab和本地following，保留页面主体参考价值；onMessage可选，不能默认可发送。",
    "deliveredScope": "已验证奖励贴纸标签切换；资料和成就均为本地示例。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#looseleaf:profile-page",
      "batches/looseleaf-03/profile-page.tsx",
      "batches/looseleaf-03/source.zip"
    ],
    "nativeVerified": false
  },
  {
    "id": "looseleaf:checkout-01",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "纸张结账页面（本地页面场景）",
    "reason": "保留原本地结账表单、数量与总价、校验及收据布局；操作和完成文案明确为模拟，不再声称已付款或发送确认邮件。收据图形是演示，不连接支付、订单或邮件服务。",
    "deliveredScope": "本地商品数量、总价、表单校验与模拟收据展示；仅使用虚构资料，不产生付款、订单或邮件。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#looseleaf:checkout-01",
      "batches/looseleaf-04/checkout-01.tsx",
      "batches/looseleaf-04/source.zip",
      "ui-local-action-next-fix/VERIFICATION.json",
      "ui-local-action-next-fix/HANDOFF.md"
    ],
    "nativeVerified": false,
    "requiresPatch": "ui-local-action-next-fix/FILES.json"
  },
  {
    "id": "looseleaf:pricing-01",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "纸张定价方案（原组件参考）",
    "reason": "原月年切换+三价格卡+FAQ区块；period驱动数据，选择仅setChosen/onChoose可选，目录不发起订阅说明准确。不是完整支付服务。",
    "deliveredScope": "已验证年付切换同步价格与计费说明；不发起订阅。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#looseleaf:pricing-01",
      "batches/looseleaf-04/pricing-01.tsx",
      "batches/looseleaf-04/source.zip"
    ],
    "nativeVerified": false
  },
  {
    "id": "looseleaf:newsletter-01",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "纸张订阅区（原组件参考）",
    "reason": "保留原信纸订阅表单及本地完成、信封状态；完成文案明确没有发送邮件或创建订阅，不冒称邮件服务成功。",
    "deliveredScope": "本地订阅表单及完成状态演示；不发送邮件、不创建订阅。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#looseleaf:newsletter-01",
      "batches/looseleaf-05/newsletter-01.tsx",
      "batches/looseleaf-05/source.zip",
      "ui-looseleaf-action-fix/VERIFICATION.json",
      "ui-looseleaf-action-fix/HANDOFF.md"
    ],
    "nativeVerified": false,
    "requiresPatch": "ui-looseleaf-action-fix/FILES.json"
  },
  {
    "id": "looseleaf:dashboard-analytics",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "手绘数据仪表盘（本地页面场景）",
    "reason": "保留原样例图表与日期范围切换；CSV 按钮已禁用并明确提示隔离预览不提供下载，无可触发导出处理，不扩展宿主权限。",
    "deliveredScope": "本地样例指标和图表随日期范围切换；CSV 下载在此预览中明确禁用。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#looseleaf:dashboard-analytics",
      "batches/looseleaf-05/dashboard-analytics.tsx",
      "batches/looseleaf-05/source.zip",
      "ui-local-action-next-fix/VERIFICATION.json",
      "ui-local-action-next-fix/HANDOFF.md"
    ],
    "nativeVerified": false,
    "requiresPatch": "ui-local-action-next-fix/FILES.json"
  },
  {
    "id": "bencho:generate",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "玻璃下图像显影（交互实验）",
    "reason": "原单幅生成动效实验，说明已写仅本地动画；Generate/pct用本地动画，不当模型生成工具或完整页面。",
    "deliveredScope": "点击生成，观察图像从粗到细浮现；仅本地动画。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#bencho:generate",
      "batches/bencho-03/generate.tsx",
      "batches/bencho-03/source.zip"
    ],
    "nativeVerified": false
  },
  {
    "id": "ai-elements:web-preview",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent生成网页预览（原组件参考）",
    "reason": "原WebPreview组合组件，实际demo提供本地静态srcDoc、refresh版本号与主题，非浏览器/网站生成器。原源码默认宽sandbox被demo sandbox空字符串覆盖；外层策略不放宽。",
    "deliveredScope": "刷新按钮递增本地草稿版本，主题按钮切换实际iframe内容底色；使用本地srcDoc且sandbox为空，不加载外站、不执行生成JS。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#ai-elements:web-preview",
      "batches/ai-elements-05/web-preview.tsx",
      "batches/ai-elements-05/source.zip"
    ],
    "nativeVerified": false
  },
  {
    "id": "animata:vpn-widget",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "VPN连接状态卡（交互实验）",
    "reason": "原210px级模拟状态小组件，controlled/internalConnected+switch；没有VPN服务，目录准确为模拟状态，不按全应用。",
    "deliveredScope": "切换模拟连接状态",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#animata:vpn-widget",
      "batches/animata-03/vpn-widget.tsx",
      "batches/animata-03/source.zip"
    ],
    "nativeVerified": false
  },
  {
    "id": "pdfjs:local-text-reader",
    "recommendation": "review",
    "layer": "experiment",
    "scopeLabel": "真实PDF.js解析/提取+原创文字阅读壳",
    "reason": "可作文本解析实验；原版精致UI筛选应暂待复核，勿当原PDF页面展示。",
    "deliveredScope": "真实PDF.js解析/提取+原创文字阅读壳，不是原官方PDFViewer。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/pdfjs-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/pdfjs-01/VERIFICATION.json"
    ]
  },
  {
    "id": "pannellum:synthetic-space-viewer",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原全景viewer/yaw/pitch/热点",
    "reason": "保留为合成空间交互实验，非摄影全景；实际GPU/纹理解码未验。",
    "deliveredScope": "原全景viewer/yaw/pitch/热点，六张明确原创方向SVG立方贴图。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/pannellum-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/pannellum-01/ADAPTATION.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/pannellum-01/VERIFICATION.json"
    ]
  },
  {
    "id": "react-pdf-highlighter:local-evidence-notes",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "实际PDFViewer+原文本/区域批注层；三页原创ASCII PDF",
    "reason": "保留本地批注组件；不是任意PDF兼容/文档管理产品。",
    "deliveredScope": "实际PDFViewer+原文本/区域批注层；三页原创ASCII PDF，宿主侧栏明确自制。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/pdf-evidence-01/ADAPTATION.md"
    ]
  },
  {
    "id": "minipaint:original-layered-paint-workspace",
    "recommendation": "review",
    "layer": "page",
    "scopeLabel": "原画笔/图层/历史完整",
    "reason": "真实可画不等于原版外观；广泛资产改动可能显著影响工具可读性，优先原生复验。",
    "deliveredScope": "原画笔/图层/历史完整，但功能图标/位图/字体全部改系统文字符号，默认平滑helper也有透明替换。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/minipaint-workspace-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/minipaint-workspace-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/minipaint-workspace-01/VERIFICATION.json"
    ]
  },
  {
    "id": "mermaid-live:diagram-authoring-workspace",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "官方MobileEditor CodeMirror+原flowchart/Dagre/配置/缩放",
    "reason": "保留移动分支编辑场景，非桌面Monaco全站/全格式。",
    "deliveredScope": "官方MobileEditor CodeMirror+原flowchart/Dagre/配置/缩放，原创外围按钮。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/mermaid-mobile-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/mermaid-mobile-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/mermaid-mobile-01/VERIFICATION.json"
    ]
  },
  {
    "id": "plate:document-revisions",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "固定官方源码完整版本历史demo",
    "reason": "本地20快照上限，无云协作；组件价值未因无后台消失。",
    "deliveredScope": "固定官方源码完整版本历史demo，真实异步diff/比较/恢复。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/plate-revisions-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/plate-revisions-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/plate-revisions-01/VERIFICATION.json"
    ]
  },
  {
    "id": "plate:structured-stream-replay",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "原默认columns流式场景真实；公开说明可选远程图/embed无法加载",
    "reason": "需厘清现有可选控件失败表现及冷加载，不能泛称所有场景可预览。",
    "deliveredScope": "原默认columns流式场景真实；公开说明可选远程图/embed无法加载，体积11568078 UTF16。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/plate-stream-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/plate-stream-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/plate-stream-01/VERIFICATION.json"
    ]
  },
  {
    "id": "vanta:spatial-network-field",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原NET点线/相机跟随和材质数学保留",
    "reason": "是环境动效非真实Agent拓扑；GL桩不等于GPU通过，但不能仅因此降级。",
    "deliveredScope": "原NET点线/相机跟随和材质数学保留，无图片缺口。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/spatial-gpu-02/vanta-net/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/spatial-gpu-02/vanta-net/SOURCE.json"
    ]
  },
  {
    "id": "react-three-csg:live-solid-boolean",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Updating故事Box减Sphere/逐帧布尔+Orbit；CPU真实布尔非假几何。",
    "reason": "保留几何实验；原64细分逐帧计算有具体性能优先复验点，非完整建模器。",
    "deliveredScope": "原Updating故事Box减Sphere/逐帧布尔+Orbit；CPU真实布尔非假几何。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/csg-boolean-01/live-solid-boolean/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/csg-boolean-01/live-solid-boolean/SOURCE.json"
    ]
  },
  {
    "id": "jsoncrack:structured-data-atlas",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "官方Chrome扩展Raw/Graph+节点详情",
    "reason": "保留结构查看场景，不称官网Monaco全编辑器；同步布局输入上限与冷启动需关注。",
    "deliveredScope": "官方Chrome扩展Raw/Graph+节点详情，原解析与ELK，本地输入明确宿主。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/jsoncrack-extension-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/jsoncrack-extension-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/jsoncrack-extension-01/VERIFICATION.json"
    ]
  },
  {
    "id": "piskel:pixel-animation-workspace",
    "recommendation": "review",
    "layer": "page",
    "scopeLabel": "原画笔/帧/图层/撤销可运行；PNG sprite/IcoMoon/Noun图标全去",
    "reason": "完整本地像素编辑有价值；大量原视觉资产替换需实看工具可辨识性，不能算原视觉复刻。",
    "deliveredScope": "原画笔/帧/图层/撤销可运行；PNG sprite/IcoMoon/Noun图标全去，改系统字样。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/piskel-local-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/piskel-local-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/piskel-local-01/VERIFICATION.json"
    ]
  },
  {
    "id": "beepbox:pattern-song-composer",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原SongEditor谱格/音色/节奏/撤销及真实静态合成函数表。",
    "reason": "空白乐曲是可创作合法初始状态；非假空壳。音频设备/原生指针未验。",
    "deliveredScope": "原SongEditor谱格/音色/节奏/撤销及真实静态合成函数表。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/beepbox-local-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/beepbox-local-01/SOURCE.json"
    ]
  },
  {
    "id": "fieldplay:vector-flow-explorer",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Vue/CodeMirror GLSL/粒子积分/WebGL管线",
    "reason": "保留可编程速度场，非数据应用；真实shader/性能优先复验。",
    "deliveredScope": "原Vue/CodeMirror GLSL/粒子积分/WebGL管线，独立HSV有限替换已披露。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/fieldplay-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/fieldplay-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/fieldplay-01/VERIFICATION.json"
    ]
  },
  {
    "id": "tonejs:envelope-visual-scene",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Tone包络合成与p5波形/形状",
    "reason": "主动播放才音画，停音静帧不是空壳；PCM逻辑证据非硬件听验。",
    "deliveredScope": "原Tone包络合成与p5波形/形状，四参数抽屉。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/tone-envelope-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/tone-envelope-01/SOURCE.json"
    ]
  },
  {
    "id": "netron:model-structure-explorer",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原.netron JSON reader、图/属性/搜索/缩放",
    "reason": "保留模型图查看器，不推理、不支持全格式或冒称官方模型样本。",
    "deliveredScope": "原.netron JSON reader、图/属性/搜索/缩放，原创4算子模型。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/netron-local-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/netron-local-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/netron-local-01/VERIFICATION.json"
    ]
  },
  {
    "id": "cindyjs:julia-orbit-explanation",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Julia CindyScript/Free点C/CindyGL shader",
    "reason": "固定尺寸数学交互实验，非响应式整站；原生GPU/拖点几何需实看。",
    "deliveredScope": "原Julia CindyScript/Free点C/CindyGL shader，500×500固定端口。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/cindy-julia-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/cindy-julia-01/SOURCE.json"
    ]
  },
  {
    "id": "astryx-core:button",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "官方button文档实例",
    "reason": "独立按钮状态展示是有效组件，不称发送邀请服务。",
    "deliveredScope": "官方button文档实例，实挂4按钮，有静态邀请语义但无业务handler。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-01/button/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-01/button/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "astryx:table-page",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原完整数据表模板及本地fixture/state；原Export等无handler。",
    "reason": "保留页面参考，静态业务按钮须维持示范说明，非后端表管理。",
    "deliveredScope": "原完整数据表模板及本地fixture/state；原Export等无handler。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-02/table-page/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-02/table-page/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "astryx-core:icon",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Icon语义SVG选择",
    "reason": "保留语义图标组件，不把它叫完整图标美术库，也不拆glyph计数。",
    "deliveredScope": "原Icon语义SVG选择，host最小API fixture，无外部图片。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-search-01/icon/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-search-01/icon/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "astryx-core:thumbnail",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "真实Thumbnail只给label/alt/onRemove",
    "reason": "原Thumbnail无图fallback与删除/恢复有价值，当前明确标题为占位示例。review只针对原Thumbnail正常src图像展示核心路径未交付；不是资源加载错误，也不否定该fallback组件，应保留可搜索访问。",
    "deliveredScope": "真实Thumbnail只给label/alt/onRemove，没有src，始终原no-image fallback。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-data-01/thumbnail/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-data-01/thumbnail/SOURCE-EVIDENCE.json",
      "ui-astryx-data-local/src/thumbnail.tsx"
    ]
  },
  {
    "id": "astryx-core:table",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Table配两列两行",
    "reason": "保留原表格API组件，非排序/后台CRUD/完整工作台。",
    "deliveredScope": "原Table配两列两行，host本地添加/重置，实测tr由3增至4。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-data-01/table/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-data-01/table/SOURCE-EVIDENCE.json",
      "ui-astryx-data-local/src/table.tsx"
    ]
  },
  {
    "id": "astryx-core:app-shell",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原AppShell/SideNav/TopNav；host切换仅改变一个h2标题",
    "reason": "原AppShell/SideNav/TopNav与本地标题切换是有效布局导航组件示例；不宣称完整业务工作流，示例内容简单不是降级理由。",
    "deliveredScope": "原AppShell/SideNav/TopNav；host切换仅改变一个h2标题，主体只有一段说明。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-layout-01/app-shell/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-layout-01/app-shell/SOURCE-EVIDENCE.json",
      "ui-astryx-layout-local/src/app-shell.tsx"
    ]
  },
  {
    "id": "astryx-core:carousel",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Carousel仅四个240px文本框Alpha/Beta/Gamma/Delta",
    "reason": "原Carousel真实滚动/导航API用文字内容示例，有效基础组件；不是完整图片轮播页面。四文本框不构成降级理由，原生scroll snap几何尚未验。",
    "deliveredScope": "原Carousel仅四个240px文本框Alpha/Beta/Gamma/Delta，无图内容，host计数按钮。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-layout-01/carousel/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-layout-01/carousel/SOURCE-EVIDENCE.json",
      "ui-astryx-layout-local/src/carousel.tsx"
    ]
  },
  {
    "id": "astryx-core:chat",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原ChatMessageList/Bubble/Composer",
    "reason": "保留聊天输入组件，不生成AI回复/附件上传；无后台不应一律降级。",
    "deliveredScope": "原ChatMessageList/Bubble/Composer，本地用户文本append，固定assistant示例。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-layout-01/chat/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-layout-01/chat/SOURCE-EVIDENCE.json",
      "ui-astryx-layout-local/src/chat.tsx"
    ]
  },
  {
    "id": "astryx-core:lightbox",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Lightbox+固定同库两SVG标志",
    "reason": "是有效查看器组件，图像解码/原生缩放未验，商标不代表授权。",
    "deliveredScope": "原Lightbox+固定同库两SVG标志，真实open/index/close；DOM实际打开。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-lightbox-01/lightbox/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-lightbox-01/lightbox/SOURCE-EVIDENCE.json",
      "ui-astryx-lightbox-local/src/lightbox.tsx"
    ]
  },
  {
    "id": "astryx:dashboard",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "完整原分析页",
    "reason": "固定数据可作为完整页面参考；Reload无handler不冒称实时。",
    "deliveredScope": "完整原分析页，指标/用户线/人口条/页面事件表固定数据。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-dashboard-01/dashboard/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-dashboard-01/dashboard/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "astryx:login-sso",
    "recommendation": "review",
    "layer": "page",
    "scopeLabel": "原email-domain分支/密码失败；原SSO Continue只进入loading而无完成。",
    "reason": "具体悬置交互需明示不可连接或禁用，不把无限loading当成功流程；素材中性占位已披露。",
    "deliveredScope": "原email-domain分支/密码失败；原SSO Continue只进入loading而无完成。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-flow-fallback-01/login-sso/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-flow-fallback-01/login-sso/SOURCE-EVIDENCE.json",
      "ui-astryx-flow-fallback-local/src/login-sso.tsx:207"
    ]
  },
  {
    "id": "astryx:checkout-wizard",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原四步购物车/优惠/金额/地址校验/付款格式/本地完成fixture。",
    "reason": "保留完整流程模板，非实际收款；仅虚构输入，原辅助图片中性占位不冒充摄影。",
    "deliveredScope": "原四步购物车/优惠/金额/地址校验/付款格式/本地完成fixture。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-flow-fallback-01/checkout-wizard/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-flow-fallback-01/checkout-wizard/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "astryx:detail-page",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原完整订单详情/活动侧栏/折叠",
    "reason": "保留完整信息结构；tab仅选中不滤内容、业务动作无handler不能当真实订单操作。",
    "deliveredScope": "原完整订单详情/活动侧栏/折叠，五辅助缩略图官方中性占位。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-order-detail-01/detail-page/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-order-detail-01/detail-page/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "astryx:contact-form",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原完整联系申请表",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原完整联系申请表；姓名/邮箱/公司/电话/目标/时间/预算本地必填校验，提交仅标记校验、不发送。",
    "evidence": [
      "ui-astryx-batch-local/src/contact-form.tsx",
      "ui-astryx-batch-local/src/entry-contact-form.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-01/contact-form/README.md"
    ]
  },
  {
    "id": "astryx:documentation-technical",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原技术文档页、代码块、目录定位/活跃项",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原技术文档页、代码块、目录定位/活跃项；复制按钮禁用、opaque iframe的history写入移除，滚动保留。",
    "evidence": [
      "ui-astryx-batch-local/src/documentation-technical.tsx",
      "ui-astryx-batch-local/src/entry-documentation-technical.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-01/documentation-technical/README.md"
    ]
  },
  {
    "id": "astryx:settings-sidebar",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原设置侧栏/移动主从、编辑行、Save/Cancel、语言币种时区与隐私开关",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原设置侧栏/移动主从、编辑行、Save/Cancel、语言币种时区与隐私开关；仅内存状态，不改真实账户。",
    "evidence": [
      "ui-astryx-batch-local/src/settings-sidebar.tsx",
      "ui-astryx-batch-local/src/entry-settings-sidebar.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-01/settings-sidebar/README.md"
    ]
  },
  {
    "id": "astryx:dashboard-scorecard",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原KPI/OKR/趋势/叙事评审页",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原KPI/OKR/趋势/叙事评审页；WoW/MoM/QoQ切换原fixture指标与文案，非真实企业数据。",
    "evidence": [
      "ui-astryx-batch-local/src/dashboard-scorecard.tsx",
      "ui-astryx-batch-local/src/entry-dashboard-scorecard.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-01/dashboard-scorecard/README.md"
    ]
  },
  {
    "id": "astryx:table-grouped",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原任务分组/折叠/行详情与可调侧栏",
    "reason": "原分组表格与详情主体保留；图鉴透明接通原筛选器的五字段本地 AND 比较，状态/优先级精确匹配、标题/指派人/项目按文字包含。只处理本地示例行，不连接后台。",
    "deliveredScope": "原分组表、折叠、详情及五字段本地筛选/清空/零结果；不是实际工单服务。",
    "evidence": [
      "ui-astryx-batch-local/src/table-grouped.tsx",
      "ui-astryx-batch-local/src/entry-table-grouped.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-01/table-grouped/README.md"
    ],
    "requiresPatch": "ui-grouped-filter-fix"
  },
  {
    "id": "astryx:form-wizard",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原四步工作区/邀请/方案/复核向导",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原四步工作区/邀请/方案/复核向导，逐步校验与本地价格推导；不发邀请或购买。",
    "evidence": [
      "ui-astryx-batch-local/src/form-wizard.tsx",
      "ui-astryx-batch-local/src/entry-form-wizard.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-01/form-wizard/README.md"
    ]
  },
  {
    "id": "astryx-core:card",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原三张支付/退款/调整Card+Grid例",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原三张支付/退款/调整Card+Grid例，长ID截断及静态金额，非支付操作。",
    "evidence": [
      "ui-astryx-core-local/src/card.tsx",
      "ui-astryx-core-local/src/entry-card.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-01/card/README.md"
    ]
  },
  {
    "id": "astryx-core:segmented-control",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原四段Workspace view与SUMMARY内容切换",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原四段Workspace view与SUMMARY内容切换，非团队后台。",
    "evidence": [
      "ui-astryx-core-local/src/segmented-control.tsx",
      "ui-astryx-core-local/src/entry-segmented-control.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-01/segmented-control/README.md"
    ]
  },
  {
    "id": "astryx-core:calendar",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原波斯历useCalendarNavigation/useCalendarDays完整月份导航例",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原波斯历useCalendarNavigation/useCalendarDays完整月份导航例，非预订/通用日期输入。",
    "evidence": [
      "ui-astryx-core-local/src/calendar.tsx",
      "ui-astryx-core-local/src/entry-calendar.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-01/calendar/README.md"
    ]
  },
  {
    "id": "astryx-core:popover",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Recent files Popover完整示例",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Recent files Popover完整示例，两个文件名ListItem；不是文件下载器。",
    "evidence": [
      "ui-astryx-core-local/src/popover.tsx",
      "ui-astryx-core-local/src/entry-popover.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-01/popover/README.md"
    ]
  },
  {
    "id": "astryx-core:drawer",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Drawer/DrawerHeader/Layout开关示例",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Drawer/DrawerHeader/Layout开关示例，明确Escape/scrim/close语义；原生焦点层未验。",
    "evidence": [
      "ui-astryx-core-local/src/drawer.tsx",
      "ui-astryx-core-local/src/entry-drawer.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-01/drawer/README.md"
    ]
  },
  {
    "id": "astryx-core:field",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原OrdersFilterBar TextInput+3Selector",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原OrdersFilterBar TextInput+3Selector，局部值可变；无订单数据集过滤承诺。",
    "evidence": [
      "ui-astryx-core-next-local/src/field.tsx",
      "ui-astryx-core-next-local/src/entry-field.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-02/field/README.md"
    ]
  },
  {
    "id": "astryx-core:layout",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原AppShell内Layout header/end/content分区例",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原AppShell内Layout header/end/content分区例，订单说明静态、导航无业务handler。",
    "evidence": [
      "ui-astryx-core-next-local/src/layout.tsx",
      "ui-astryx-core-next-local/src/entry-layout.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-02/layout/README.md"
    ]
  },
  {
    "id": "astryx-core:markdown",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Markdown inline例+明确宿主固定heading/list",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Markdown inline例+明确宿主固定heading/list，不接受任意用户Markdown。",
    "evidence": [
      "ui-astryx-core-next-local/src/markdown.tsx",
      "ui-astryx-core-next-local/src/entry-markdown.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-02/markdown/README.md"
    ]
  },
  {
    "id": "astryx-core:timer",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原elapsed/clock/inherit三个Timer组合成一族",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原elapsed/clock/inherit三个Timer组合成一族，隐藏卸载重启计时，不是任务引擎。",
    "evidence": [
      "ui-astryx-core-next-local/src/timer.tsx",
      "ui-astryx-core-next-local/src/entry-timer.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-02/timer/README.md"
    ]
  },
  {
    "id": "astryx-core:banner",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原异步结果Banner+useAnnounce",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原异步结果Banner+useAnnounce；宿主补本地成功/失败模拟并明示nothing saved。",
    "evidence": [
      "ui-astryx-core-next-local/src/banner.tsx",
      "ui-astryx-core-next-local/src/entry-banner.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-02/banner/README.md"
    ]
  },
  {
    "id": "astryx-core:avatar",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原AvatarGroup/overflow+本地样本首字母fallback",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原AvatarGroup/overflow+本地样本首字母fallback；无真人照片，无头像加载成功承诺。",
    "evidence": [
      "ui-astryx-core-third-local/src/avatar.tsx",
      "ui-astryx-core-third-local/src/entry-avatar.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-03/avatar/README.md"
    ]
  },
  {
    "id": "astryx-core:bottom-sheet",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原BottomSheet open/onOpenChange",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原BottomSheet open/onOpenChange，宿主checkbox FilterControls/Close；无服务器过滤。",
    "evidence": [
      "ui-astryx-core-third-local/src/bottom-sheet.tsx",
      "ui-astryx-core-third-local/src/entry-bottom-sheet.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-03/bottom-sheet/README.md"
    ]
  },
  {
    "id": "astryx-core:checkbox",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原CheckboxList rich-label/Badge例+受控多选及output",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原CheckboxList rich-label/Badge例+受控多选及output；非订阅或方案提交。",
    "evidence": [
      "ui-astryx-core-third-local/src/checkbox.tsx",
      "ui-astryx-core-third-local/src/entry-checkbox.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-03/checkbox/README.md"
    ]
  },
  {
    "id": "astryx-core:dialog",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Dialog/DialogHeader/Layout与明确宿主开关/关闭内容",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Dialog/DialogHeader/Layout与明确宿主开关/关闭内容；不保存真实设置。",
    "evidence": [
      "ui-astryx-core-third-local/src/dialog.tsx",
      "ui-astryx-core-third-local/src/entry-dialog.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-03/dialog/README.md"
    ]
  },
  {
    "id": "astryx-core:indicator",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Checkbox/Radio/Check三个装饰指示器+宿主state选择",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Checkbox/Radio/Check三个装饰指示器+宿主state选择；不冒称独立交互表单控件。",
    "evidence": [
      "ui-astryx-core-third-local/src/indicator.tsx",
      "ui-astryx-core-third-local/src/entry-indicator.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-03/indicator/README.md"
    ]
  },
  {
    "id": "astryx-core:power-search",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原PowerSearch可配置过滤条件构建器",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原PowerSearch可配置过滤条件构建器，Status enum/Title string本地schema与输出；无搜索结果服务。",
    "evidence": [
      "ui-astryx-core-third-local/src/power-search.tsx",
      "ui-astryx-core-third-local/src/entry-power-search.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-03/power-search/README.md"
    ]
  },
  {
    "id": "astryx-core:number-input",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原NumberInput数量0–10步长1+受控输出",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原NumberInput数量0–10步长1+受控输出，独立输入组件。",
    "evidence": [
      "ui-astryx-controls-local/src/number-input.tsx",
      "ui-astryx-controls-local/src/entry-number-input.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/number-input/README.md"
    ]
  },
  {
    "id": "astryx-core:radio",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原RadioList Draft/Review受控单选示例。",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原RadioList Draft/Review受控单选示例。",
    "evidence": [
      "ui-astryx-controls-local/src/radio.tsx",
      "ui-astryx-controls-local/src/entry-radio.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/radio/README.md"
    ]
  },
  {
    "id": "astryx-core:selector",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Selector Draft/Review/Complete受控选项示例。",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Selector Draft/Review/Complete受控选项示例。",
    "evidence": [
      "ui-astryx-controls-local/src/selector.tsx",
      "ui-astryx-controls-local/src/entry-selector.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/selector/README.md"
    ]
  },
  {
    "id": "astryx-core:slider",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Slider强度0–100步长10与文本值显示",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Slider强度0–100步长10与文本值显示，原生pointer几何未验。",
    "evidence": [
      "ui-astryx-controls-local/src/slider.tsx",
      "ui-astryx-controls-local/src/entry-slider.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/slider/README.md"
    ]
  },
  {
    "id": "astryx-core:switch",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Switch本地布尔偏好切换",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Switch本地布尔偏好切换，不改变用户真实设置。",
    "evidence": [
      "ui-astryx-controls-local/src/switch.tsx",
      "ui-astryx-controls-local/src/entry-switch.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/switch/README.md"
    ]
  },
  {
    "id": "astryx-core:text-area",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原TextArea本地文字及80字符上限、输出",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原TextArea本地文字及80字符上限、输出，不发送。",
    "evidence": [
      "ui-astryx-controls-local/src/text-area.tsx",
      "ui-astryx-controls-local/src/entry-text-area.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/text-area/README.md"
    ]
  },
  {
    "id": "astryx-core:text-input",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原TextInput受控本地标题及输出",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原TextInput受控本地标题及输出，不发送。",
    "evidence": [
      "ui-astryx-controls-local/src/text-input.tsx",
      "ui-astryx-controls-local/src/entry-text-input.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/text-input/README.md"
    ]
  },
  {
    "id": "astryx-core:time-input",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原TimeInput 09:30初始本地时间值及输出",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原TimeInput 09:30初始本地时间值及输出，不创建日程。",
    "evidence": [
      "ui-astryx-controls-local/src/time-input.tsx",
      "ui-astryx-controls-local/src/entry-time-input.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/time-input/README.md"
    ]
  },
  {
    "id": "astryx-core:pagination",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Pagination 95项/pageSize10本地页码",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Pagination 95项/pageSize10本地页码，非远程数据分页。",
    "evidence": [
      "ui-astryx-controls-local/src/pagination.tsx",
      "ui-astryx-controls-local/src/entry-pagination.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/pagination/README.md"
    ]
  },
  {
    "id": "astryx-core:progress-bar",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原ProgressBar 25起始/手动+25/Reset",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原ProgressBar 25起始/手动+25/Reset，明确模拟非真实后台进度。",
    "evidence": [
      "ui-astryx-controls-local/src/progress-bar.tsx",
      "ui-astryx-controls-local/src/entry-progress-bar.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/progress-bar/README.md"
    ]
  },
  {
    "id": "astryx-core:badge",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Badge neutral/success/error/purple属性展示",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Badge neutral/success/error/purple属性展示，宿主select仅切样式。",
    "evidence": [
      "ui-astryx-display-local/src/badge.tsx",
      "ui-astryx-display-local/src/entry-badge.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/badge/README.md"
    ]
  },
  {
    "id": "astryx-core:blockquote",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Blockquote与明确虚构文字/cite切换",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Blockquote与明确虚构文字/cite切换，不冒用真实名人引语。",
    "evidence": [
      "ui-astryx-display-local/src/blockquote.tsx",
      "ui-astryx-display-local/src/entry-blockquote.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/blockquote/README.md"
    ]
  },
  {
    "id": "astryx-core:breadcrumbs",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Breadcrumbs本地路径选择与current项",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Breadcrumbs本地路径选择与current项，非外部网站导航。",
    "evidence": [
      "ui-astryx-display-local/src/breadcrumbs.tsx",
      "ui-astryx-display-local/src/entry-breadcrumbs.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/breadcrumbs/README.md"
    ]
  },
  {
    "id": "astryx-core:code",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原内联Code npm install/build文字切换",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原内联Code npm install/build文字切换，不执行命令。",
    "evidence": [
      "ui-astryx-display-local/src/code.tsx",
      "ui-astryx-display-local/src/entry-code.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/code/README.md"
    ]
  },
  {
    "id": "astryx-core:divider",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Divider分节label切换",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Divider分节label切换，基础排版组件。",
    "evidence": [
      "ui-astryx-display-local/src/divider.tsx",
      "ui-astryx-display-local/src/entry-divider.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/divider/README.md"
    ]
  },
  {
    "id": "astryx-core:empty-state",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原EmptyState两种明确样本文案",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原EmptyState两种明确样本文案，不伪装请求结果。",
    "evidence": [
      "ui-astryx-display-local/src/empty-state.tsx",
      "ui-astryx-display-local/src/entry-empty-state.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/empty-state/README.md"
    ]
  },
  {
    "id": "astryx-core:kbd",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Kbd键字符串显示",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Kbd键字符串显示，不注册快捷键或执行系统命令。",
    "evidence": [
      "ui-astryx-display-local/src/kbd.tsx",
      "ui-astryx-display-local/src/entry-kbd.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/kbd/README.md"
    ]
  },
  {
    "id": "astryx-core:skeleton",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Skeleton尺寸例与宿主内容toggle",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Skeleton尺寸例与宿主内容toggle，明确样本非真实loading任务。",
    "evidence": [
      "ui-astryx-display-local/src/skeleton.tsx",
      "ui-astryx-display-local/src/entry-skeleton.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/skeleton/README.md"
    ]
  },
  {
    "id": "astryx-core:spinner",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Spinner md/lg尺寸切换",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Spinner md/lg尺寸切换，无后台任务声明。",
    "evidence": [
      "ui-astryx-display-local/src/spinner.tsx",
      "ui-astryx-display-local/src/entry-spinner.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/spinner/README.md"
    ]
  },
  {
    "id": "astryx-core:status-dot",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原StatusDot neutral/success/warning/error/accent",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原StatusDot neutral/success/warning/error/accent，非服务健康监控。",
    "evidence": [
      "ui-astryx-display-local/src/status-dot.tsx",
      "ui-astryx-display-local/src/entry-status-dot.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/status-dot/README.md"
    ]
  },
  {
    "id": "astryx:documentation-design",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原设计组件文档页/示例tab/Dialog/目录定位",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原设计组件文档页/示例tab/Dialog/目录定位；复制/history关闭但原本地展示完整。",
    "evidence": [
      "ui-astryx-pages-next-local/src/documentation-design.tsx",
      "ui-astryx-pages-next-local/src/entry-documentation-design.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-02/documentation-design/README.md"
    ]
  },
  {
    "id": "astryx:table-collapsible",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原账户分组折叠与时间窗口趋势/净值信息",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原账户分组折叠与时间窗口趋势/净值信息，固定fixture，不接银行。",
    "evidence": [
      "ui-astryx-pages-next-local/src/table-collapsible.tsx",
      "ui-astryx-pages-next-local/src/entry-table-collapsible.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-02/table-collapsible/README.md"
    ]
  },
  {
    "id": "astryx:table-comparison",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原模型对比slots、分组折叠、最佳值highlight",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原模型对比slots、分组折叠、最佳值highlight，固定原比较数据非实时benchmark。",
    "evidence": [
      "ui-astryx-pages-next-local/src/table-comparison.tsx",
      "ui-astryx-pages-next-local/src/entry-table-comparison.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-02/table-comparison/README.md"
    ]
  },
  {
    "id": "astryx:dashboard-alert-rail",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原服务健康页时间窗/环境/区域改变fixture指标及主机行",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原服务健康页时间窗/环境/区域改变fixture指标及主机行，告警非真实监控。",
    "evidence": [
      "ui-astryx-pages-next-local/src/dashboard-alert-rail.tsx",
      "ui-astryx-pages-next-local/src/entry-dashboard-alert-rail.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-02/dashboard-alert-rail/README.md"
    ]
  },
  {
    "id": "astryx:dashboard-cohort-funnel",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原漏斗/掉落步骤/转化趋势/队列表",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原漏斗/掉落步骤/转化趋势/队列表，segment/window真实局部推导，导出按钮原无业务handler。",
    "evidence": [
      "ui-astryx-pages-next-local/src/dashboard-cohort-funnel.tsx",
      "ui-astryx-pages-next-local/src/entry-dashboard-cohort-funnel.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-02/dashboard-cohort-funnel/README.md"
    ]
  },
  {
    "id": "astryx:form-wizard-dialog",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原isInline三步报告/周期日期/收件人向导",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原isInline三步报告/周期日期/收件人向导，完成toast/reset；不是可打开modal，也不真的发报告。",
    "evidence": [
      "ui-astryx-pages-third-local/src/form-wizard-dialog.tsx",
      "ui-astryx-pages-third-local/src/entry-form-wizard-dialog.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-03/form-wizard-dialog/README.md"
    ]
  },
  {
    "id": "astryx:form-wizard-inline",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原六步CI局部simulation",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原六步CI局部simulation，真实timer检查/内存不足failure/retry及返回配置，不连接仓库或执行CI。",
    "evidence": [
      "ui-astryx-pages-third-local/src/form-wizard-inline.tsx",
      "ui-astryx-pages-third-local/src/entry-form-wizard-inline.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-03/form-wizard-inline/README.md"
    ]
  },
  {
    "id": "astryx:dashboard-progress",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原项目阶段过滤Gantt/工作流/风险列表、任务环/燃尽图",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原项目阶段过滤Gantt/工作流/风险列表、任务环/燃尽图，固定本地数据非项目服务。",
    "evidence": [
      "ui-astryx-pages-third-local/src/dashboard-progress.tsx",
      "ui-astryx-pages-third-local/src/entry-dashboard-progress.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-03/dashboard-progress/README.md"
    ]
  },
  {
    "id": "assistant-elements:elicitation-form",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原文本/选择/toggle与required禁用检查，accept/decline本地回执；组件承诺与边界匹配，不因非MCP服务降级。",
    "scopeLabel": "工具前字段确认组件",
    "deliveredScope": "原文本/选择/toggle与required禁用检查，accept/decline本地回执；组件承诺与边界匹配，不因非MCP服务降级。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/elicitation-form.html",
      "ui-assistant-elements/src/components/demo/elements/elicitation-form.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/elicitation-form.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:question-flow",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原3步单选/多选minSelections约束、onComplete收集答案并回执；自动重置明确，本地组件完整。",
    "scopeLabel": "多步单多选组件",
    "deliveredScope": "原3步单选/多选minSelections约束、onComplete收集答案并回执；自动重置明确，本地组件完整。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/question-flow.html",
      "ui-assistant-elements/src/components/demo/elements/question-flow.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/question-flow.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:option-list",
    "recommendation": "retain",
    "layer": "component",
    "reason": "单选处理方案及异步本地确认。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "单选处理方案及异步本地确认。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/option-list.html",
      "ui-assistant-elements/src/components/demo/elements/option-list.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/option-list.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:reviewable-diff",
    "recommendation": "retain",
    "layer": "component",
    "reason": "保留/丢弃代码块，全部决定后本地应用并重置。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "保留/丢弃代码块，全部决定后本地应用并重置。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/reviewable-diff.html",
      "ui-assistant-elements/src/components/demo/elements/reviewable-diff.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/reviewable-diff.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:image-gallery",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原画廊组件和灯箱；图片为明确标注的原创几何SVG替代素材。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原画廊组件和灯箱；图片为明确标注的原创几何SVG替代素材。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/image-gallery.html",
      "ui-assistant-elements/src/components/demo/elements/image-gallery.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/image-gallery.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:artifact-card",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版脚本展示写入状态到产物元数据；不打开实际文档。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版脚本展示写入状态到产物元数据；不打开实际文档。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/artifact-card.html",
      "ui-assistant-elements/src/components/demo/elements/artifact-card.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/artifact-card.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:approval-card",
    "recommendation": "retain",
    "layer": "component",
    "reason": "允许/拒绝仅演示状态，绝不运行命令或保存授权。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "允许/拒绝仅演示状态，绝不运行命令或保存授权。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/approval-card.html",
      "ui-assistant-elements/src/components/demo/elements/approval-card.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/approval-card.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:comparison-card",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版静态方案对照富显示，不虚构交互。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版静态方案对照富显示，不虚构交互。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/comparison-card.html",
      "ui-assistant-elements/src/components/demo/elements/comparison-card.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/comparison-card.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:memory-chips",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版动态记忆标签，添加本地遗忘状态。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版动态记忆标签，添加本地遗忘状态。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/memory-chips.html",
      "ui-assistant-elements/src/components/demo/elements/memory-chips.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/memory-chips.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:agent-plan",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版脚本驱动执行进度，不运行Agent。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版脚本驱动执行进度，不运行Agent。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/agent-plan.html",
      "ui-assistant-elements/src/components/demo/elements/agent-plan.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/agent-plan.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:todo-list",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版脚本驱动待办状态，不执行任务。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版脚本驱动待办状态，不执行任务。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/todo-list.html",
      "ui-assistant-elements/src/components/demo/elements/todo-list.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/todo-list.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:file-tree",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版脚本驱动变更文件展示，不访问文件系统。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版脚本驱动变更文件展示，不访问文件系统。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/file-tree.html",
      "ui-assistant-elements/src/components/demo/elements/file-tree.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/file-tree.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:checkpoint-history",
    "recommendation": "retain",
    "layer": "component",
    "reason": "恢复仅切换本地检查点选中态。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "恢复仅切换本地检查点选中态。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/checkpoint-history.html",
      "ui-assistant-elements/src/components/demo/elements/checkpoint-history.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/checkpoint-history.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:message-queue",
    "recommendation": "retain",
    "layer": "component",
    "reason": "移除排队消息；最后一项移除后原例自动重置。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "移除排队消息；最后一项移除后原例自动重置。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/message-queue.html",
      "ui-assistant-elements/src/components/demo/elements/message-queue.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/message-queue.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:conversation-search",
    "recommendation": "retain",
    "layer": "component",
    "reason": "现description已明确固定命中/非全文检索；原结果导航有用，不按未实现搜索服务降级。标题及输入框仍易误解，建议可见提示“任意非空输入展示相同预置命中”，或另授权加本地filter；不要默称已真搜索。",
    "scopeLabel": "固定命中导航示例",
    "deliveredScope": "现description已明确固定命中/非全文检索；原结果导航有用，不按未实现搜索服务降级。标题及输入框仍易误解，建议可见提示“任意非空输入展示相同预置命中”，或另授权加本地filter；不要默称已真搜索。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/conversation-search.html",
      "ui-assistant-elements/src/components/demo/elements/conversation-search.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/conversation-search.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:data-table",
    "recommendation": "retain",
    "layer": "component",
    "reason": "列排序和趋势展示，模型与价格是原例静态示例，不保证现实准确。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "列排序和趋势展示，模型与价格是原例静态示例，不保证现实准确。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/data-table.html",
      "ui-assistant-elements/src/components/demo/elements/data-table.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/data-table.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:document-reference",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地页码引用选择，无实际PDF读取。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地页码引用选择，无实际PDF读取。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/document-reference.html",
      "ui-assistant-elements/src/components/demo/elements/document-reference.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/document-reference.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:edit-message",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版消息编辑保存/取消，本地状态，不发出消息。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版消息编辑保存/取消，本地状态，不发出消息。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/edit-message.html",
      "ui-assistant-elements/src/components/demo/elements/edit-message.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/edit-message.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:feedback-dialog",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原因多选、备注和本地发送回执。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原因多选、备注和本地发送回执。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/feedback-dialog.html",
      "ui-assistant-elements/src2/components/demo/elements/feedback-dialog.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/feedback-dialog.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:command-palette",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地命令筛选和选中，不创建线程或执行命令。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地命令筛选和选中，不创建线程或执行命令。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/command-palette.html",
      "ui-assistant-elements/src2/components/demo/elements/command-palette.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/command-palette.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:model-picker",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地模型选择；名称与价格是原例假设fixture，不保证真实存在或准确。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地模型选择；名称与价格是原例假设fixture，不保证真实存在或准确。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/model-picker.html",
      "ui-assistant-elements/src2/components/demo/elements/model-picker.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/model-picker.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:reasoning-effort",
    "recommendation": "retain",
    "layer": "component",
    "reason": "推理预算选择与脚本驱动消耗展示，不改变模型参数。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "推理预算选择与脚本驱动消耗展示，不改变模型参数。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/reasoning-effort.html",
      "ui-assistant-elements/src2/components/demo/elements/reasoning-effort.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/reasoning-effort.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:message-branches",
    "recommendation": "retain",
    "layer": "component",
    "reason": "三份真实不同文本分支切换，不调用模型。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "三份真实不同文本分支切换，不调用模型。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/message-branches.html",
      "ui-assistant-elements/src2/components/demo/elements/message-branches.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/message-branches.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:draft-restore",
    "recommendation": "retain",
    "layer": "component",
    "reason": "description已明确两动作都隐藏且不写编辑器。保留原提示组件，建议按钮附近明示仅预览提示状态，恢复内容不是已交付功能。",
    "scopeLabel": "草稿恢复提示状态示例",
    "deliveredScope": "description已明确两动作都隐藏且不写编辑器。保留原提示组件，建议按钮附近明示仅预览提示状态，恢复内容不是已交付功能。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/draft-restore.html",
      "ui-assistant-elements/src2/components/demo/elements/draft-restore.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/draft-restore.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:quote-reply",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原例模拟文本选区，引用动作生成本地引用，不是系统级划词。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原例模拟文本选区，引用动作生成本地引用，不是系统级划词。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/quote-reply.html",
      "ui-assistant-elements/src2/components/demo/elements/quote-reply.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/quote-reply.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:prompt-library",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地提示词搜索与内容选择，不发出prompt。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地提示词搜索与内容选择，不发出prompt。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/prompt-library.html",
      "ui-assistant-elements/src2/components/demo/elements/prompt-library.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/prompt-library.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:settings-panel",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地模型、系统提示、温度和开关设置，不持久化任何配置。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地模型、系统提示、温度和开关设置，不持久化任何配置。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/settings-panel.html",
      "ui-assistant-elements/src2/components/demo/elements/settings-panel.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/settings-panel.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:permission-grant",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地权限范围选择和回执，不授予真实权限。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地权限范围选择和回执，不授予真实权限。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/permission-grant.html",
      "ui-assistant-elements/src2/components/demo/elements/permission-grant.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/permission-grant.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:mcp-server-panel",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地服务展开及模拟授权状态，不连接任何MCP。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地服务展开及模拟授权状态，不连接任何MCP。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/mcp-server-panel.html",
      "ui-assistant-elements/src2/components/demo/elements/mcp-server-panel.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/mcp-server-panel.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:composer-attachments",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地输入、移除/恢复预置附件、模拟上传进度，发送只清空输入，不打开文件选择器、不上传。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地输入、移除/恢复预置附件、模拟上传进度，发送只清空输入，不打开文件选择器、不上传。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/composer-attachments.html",
      "ui-assistant-elements/src2/components/demo/elements/composer-attachments.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/composer.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:message-attachment",
    "recommendation": "retain",
    "layer": "component",
    "reason": "description明确no-op/无预览下载，原附件布局可参考。可逆改善为禁用无handler点击或标只读，非必须替换整组件。",
    "scopeLabel": "只读附件元数据组件",
    "deliveredScope": "description明确no-op/无预览下载，原附件布局可参考。可逆改善为禁用无handler点击或标只读，非必须替换整组件。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/message-attachment.html",
      "ui-assistant-elements/src2/components/demo/elements/message-attachment.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/message-attachment.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:tool-call",
    "recommendation": "retain",
    "layer": "component",
    "reason": "PHASES2200/1400/3000/0按单次推进；用户展开会takeOver脚本。Grok运行中截图不是功能失败，不因无真工具降级。",
    "scopeLabel": "工具请求结果折叠组件",
    "deliveredScope": "PHASES2200/1400/3000/0按单次推进；用户展开会takeOver脚本。Grok运行中截图不是功能失败，不因无真工具降级。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/tool-call.html",
      "ui-assistant-elements/src2/components/demo/elements/tool-call.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/tool-call.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:tool-error",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地错误重试计数，不请求文本中的远程地址。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地错误重试计数，不请求文本中的远程地址。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/tool-error.html",
      "ui-assistant-elements/src2/components/demo/elements/tool-error.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/tool-error.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:tool-group",
    "recommendation": "retain",
    "layer": "component",
    "reason": "2400ms后原running工具转换完成；真实open切换。历史中间帧只说明截图时机，不能自动降级。",
    "scopeLabel": "多工具状态折叠组件",
    "deliveredScope": "2400ms后原running工具转换完成；真实open切换。历史中间帧只说明截图时机，不能自动降级。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/tool-group.html",
      "ui-assistant-elements/src2/components/demo/elements/tool-group.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/tool-group.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:terminal-block",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原5条本地LINES逐条可见，最终done；不运行终端已披露，复制权限不等于日志显示失败。",
    "scopeLabel": "终端日志状态组件",
    "deliveredScope": "原5条本地LINES逐条可见，最终done；不运行终端已披露，复制权限不等于日志显示失败。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/terminal-block.html",
      "ui-assistant-elements/src2/components/demo/elements/terminal-block.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/terminal-block.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:retrieval-chunks",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版脚本驱动检索片段与分数，不检索真实文档。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版脚本驱动检索片段与分数，不检索真实文档。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/retrieval-chunks.html",
      "ui-assistant-elements/src2/components/demo/elements/retrieval-chunks.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/retrieval-chunks.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:sources",
    "recommendation": "retain",
    "layer": "component",
    "reason": "来源列表展开，外链点击被阻止避免离开图鉴。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "来源列表展开，外链点击被阻止避免离开图鉴。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/sources.html",
      "ui-assistant-elements/src2/components/demo/elements/sources.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/sources.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:schedule-card",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地暂停/恢复状态，不创建真实定时任务。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地暂停/恢复状态，不创建真实定时任务。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/schedule-card.html",
      "ui-assistant-elements/src2/components/demo/elements/schedule-card.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/schedule-card.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:agent-card",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地连接回执及能力说明，不实际连接Agent。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地连接回执及能力说明，不实际连接Agent。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/agent-card.html",
      "ui-assistant-elements/src3/components/demo/elements/agent-card.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/agent-card.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:agent-handoff",
    "recommendation": "retain",
    "layer": "component",
    "reason": "脚本驱动交接状态与携带资料说明，不执行委派。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "脚本驱动交接状态与携带资料说明，不执行委派。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/agent-handoff.html",
      "ui-assistant-elements/src3/components/demo/elements/agent-handoff.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/agent-handoff.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:background-inbox",
    "recommendation": "retain",
    "layer": "component",
    "reason": "description及host caveat明确收取no-op，任务分组/状态为原组件价值；建议无动作按钮disabled/说明，不以无真实任务管理直接降级。",
    "scopeLabel": "后台任务状态列表",
    "deliveredScope": "description及host caveat明确收取no-op，任务分组/状态为原组件价值；建议无动作按钮disabled/说明，不以无真实任务管理直接降级。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/background-inbox.html",
      "ui-assistant-elements/src3/components/demo/elements/background-inbox.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/background-inbox.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:job-progress",
    "recommendation": "retain",
    "layer": "component",
    "reason": "脚本驱动分阶段进度，取消冻结本地状态，不执行CI。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "脚本驱动分阶段进度，取消冻结本地状态，不执行CI。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/job-progress.html",
      "ui-assistant-elements/src3/components/demo/elements/job-progress.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/job-progress.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:onboarding",
    "recommendation": "retain",
    "layer": "component",
    "reason": "下一步与跳过本地引导，不配置真实项目。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "下一步与跳过本地引导，不配置真实项目。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/onboarding.html",
      "ui-assistant-elements/src3/components/demo/elements/onboarding.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/onboarding.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:regenerate-menu",
    "recommendation": "retain",
    "layer": "component",
    "reason": "description及host明确选择只关闭菜单；原菜单选择展示仍可留。可增加选择回执但非现有承诺的模型调用。",
    "scopeLabel": "本地模型重生成菜单示例",
    "deliveredScope": "description及host明确选择只关闭菜单；原菜单选择展示仍可留。可增加选择回执但非现有承诺的模型调用。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/regenerate-menu.html",
      "ui-assistant-elements/src3/components/demo/elements/regenerate-menu.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/regenerate-menu.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:recommendation-card",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地采纳回执，不修改代码或真实设置。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地采纳回执，不修改代码或真实设置。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/recommendation-card.html",
      "ui-assistant-elements/src3/components/demo/elements/recommendation-card.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/recommendation-card.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:thread-list",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地会话选中/删除；重命名按钮已明确禁用并提示沙箱不支持原生prompt，不读改真实会话。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地会话选中/删除；重命名按钮已明确禁用并提示沙箱不支持原生prompt，不读改真实会话。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/thread-list.html",
      "ui-assistant-elements/src3/components/demo/elements/thread-list.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/thread-list.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:thread-search",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原threads.filter按query真实过滤，选择更新Open thread文字，和固定命中conversation-search有实质区别。",
    "scopeLabel": "本地会话搜索组件",
    "deliveredScope": "原threads.filter按query真实过滤，选择更新Open thread文字，和固定命中conversation-search有实质区别。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/thread-search.html",
      "ui-assistant-elements/src3/components/demo/elements/thread-search.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/thread-search.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:shared-conversation",
    "recommendation": "retain",
    "layer": "component",
    "reason": "title/description/host已称只读且Continue不创建聊天，完整共享会话阅读结构可留；无绑定Continue建议disabled或局部文字说明。",
    "scopeLabel": "共享会话只读组件",
    "deliveredScope": "title/description/host已称只读且Continue不创建聊天，完整共享会话阅读结构可留；无绑定Continue建议disabled或局部文字说明。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/shared-conversation.html",
      "ui-assistant-elements/src3/components/demo/elements/shared-conversation.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/shared-conversation.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:subagent-list",
    "recommendation": "retain",
    "layer": "component",
    "reason": "脚本驱动多Agent工作进度，不启动Agent。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "脚本驱动多Agent工作进度，不启动Agent。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/subagent-list.html",
      "ui-assistant-elements/src3/components/demo/elements/subagent-list.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/subagent-list.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:task-card",
    "recommendation": "retain",
    "layer": "component",
    "reason": "任务详情展开与脚本状态，不启动真实任务。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "任务详情展开与脚本状态，不启动真实任务。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/task-card.html",
      "ui-assistant-elements/src3/components/demo/elements/task-card.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/task-card.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:stopped-run",
    "recommendation": "retain",
    "layer": "experiment",
    "reason": "title与description准确称中断态，未承诺继续执行，host亦披露按钮无绑定。保留组件；Grok blank仍需真实延迟后复验，但不能仅初始空判故障。",
    "scopeLabel": "中断输出状态组件",
    "deliveredScope": "title与description准确称中断态，未承诺继续执行，host亦披露按钮无绑定。保留组件；Grok blank仍需真实延迟后复验，但不能仅初始空判故障。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/stopped-run.html",
      "ui-assistant-elements/src3/components/demo/elements/stopped-run.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/stopped-run.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:context-breakdown",
    "recommendation": "retain",
    "layer": "component",
    "reason": "脚本驱动上下文分项及余量，不读取真实token使用量。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "脚本驱动上下文分项及余量，不读取真实token使用量。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/context-breakdown.html",
      "ui-assistant-elements/src3/components/demo/elements/context-breakdown.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/context-breakdown.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:confidence-marker",
    "recommendation": "retain",
    "layer": "component",
    "reason": "焦点/悬停显示结论依据，置信度是fixture而非自动判断。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "焦点/悬停显示结论依据，置信度是fixture而非自动判断。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/confidence-marker.html",
      "ui-assistant-elements/src3/components/demo/elements/confidence-marker.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/confidence-marker.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:research-report",
    "recommendation": "retain",
    "layer": "experiment",
    "reason": "实际title是研究报告生成态，非完整报告；第四节固定writing符合展示进行中状态。保留原状态设计，补可见“最后一节故意停在生成态”即可，不把无第四正文称坏报告。",
    "scopeLabel": "研究报告生成中状态组件",
    "deliveredScope": "实际title是研究报告生成态，非完整报告；第四节固定writing符合展示进行中状态。保留原状态设计，补可见“最后一节故意停在生成态”即可，不把无第四正文称坏报告。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/research-report.html",
      "ui-assistant-elements/src3/components/demo/elements/research-report.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/research-report.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:spec-sheet",
    "recommendation": "retain",
    "layer": "component",
    "reason": "逐行显示原版规格fixture，模型名称、参数、日期和价格不保证存在或准确。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "逐行显示原版规格fixture，模型名称、参数、日期和价格不保证存在或准确。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/spec-sheet.html",
      "ui-assistant-elements/src3/components/demo/elements/spec-sheet.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/spec-sheet.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:timeline",
    "recommendation": "retain",
    "layer": "component",
    "reason": "脚本驱动过去/现在/未来事件，不查询真实工作记录。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "脚本驱动过去/现在/未来事件，不查询真实工作记录。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/timeline.html",
      "ui-assistant-elements/src3/components/demo/elements/timeline.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/timeline.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "promptkit:chain-of-thought",
    "recommendation": "retain",
    "layer": "component",
    "reason": "上游固定示例内容；非模型真实推理。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "上游固定示例内容；非模型真实推理。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/chain-of-thought/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/chain-of-thought/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/chain-of-thought.tsx",
      "ui-exodus-next/preview/src/entry-chain-of-thought.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "promptkit:steps",
    "recommendation": "retain",
    "layer": "component",
    "reason": "上游固定步骤；折叠可用，不执行仓库扫描。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "上游固定步骤；折叠可用，不执行仓库扫描。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/steps/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/steps/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/steps.tsx",
      "ui-exodus-next/preview/src/entry-steps.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "promptkit:response-stream",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地文字播放；不是远程模型响应。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地文字播放；不是远程模型响应。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/response-stream/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/response-stream/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/response-stream.tsx",
      "ui-exodus-next/preview/src/entry-response-stream.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "promptkit:jsx-preview",
    "recommendation": "retain",
    "layer": "experiment",
    "reason": "原parser实际响应本地markup，静态/inert限制ADAPTATION已明确，不要求执行JS。修description旧视频样例叙述为当前宿主Exodus示例；文案陈旧不自动降级有效组件。",
    "scopeLabel": "静态白名单JSX预览组件",
    "deliveredScope": "原parser实际响应本地markup，静态/inert限制ADAPTATION已明确，不要求执行JS。修description旧视频样例叙述为当前宿主Exodus示例；文案陈旧不自动降级有效组件。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/jsx-preview/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/jsx-preview/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/jsx-preview.tsx",
      "ui-exodus-next/preview/src/entry-jsx-preview.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "promptkit:composer",
    "recommendation": "retain",
    "layer": "component",
    "reason": "真实本地files数组/移除/文本输入，发送2秒后清空，loading disabled避免伪Stop。原功能边界已披露，不因无上传服务降级；不可叫完整聊天应用。",
    "scopeLabel": "本地附件输入组件",
    "deliveredScope": "真实本地files数组/移除/文本输入，发送2秒后清空，loading disabled避免伪Stop。原功能边界已披露，不因无上传服务降级；不可叫完整聊天应用。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/composer/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/composer/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/prompt-input.tsx",
      "ui-exodus-next/preview/src/entry-composer.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "promptkit:loader",
    "recommendation": "retain",
    "layer": "component",
    "reason": "12 种动画归为一个族，非 12 个组件。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "12 种动画归为一个族，非 12 个组件。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/loader/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/loader/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/loader.tsx",
      "ui-exodus-next/preview/src/entry-loader.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "promptkit:thinking-bar",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原组件，本地启动/停止和展开回调，不调用模型。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原组件，本地启动/停止和展开回调，不调用模型。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/thinking-bar/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/thinking-bar/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/thinking-bar.tsx",
      "ui-exodus-next/preview/src/entry-thinking-bar.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "promptkit:system-message",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原组件，本地展开政策/隐藏警告，无外部动作。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原组件，本地展开政策/隐藏警告，无外部动作。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/system-message/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/system-message/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/system-message.tsx",
      "ui-exodus-next/preview/src/entry-system-message.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "promptkit:feedback-bar",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原组件，本地投票/关闭/重置，不提交反馈。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原组件，本地投票/关闭/重置，不提交反馈。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/feedback-bar/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/feedback-bar/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/feedback-bar.tsx",
      "ui-exodus-next/preview/src/entry-feedback-bar.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "promptkit:source",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原组件；远程 favicon 替换为原创内联文档 SVG；悬浮内容是本地 fixture。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原组件；远程 favicon 替换为原创内联文档 SVG；悬浮内容是本地 fixture。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/source/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/source/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/source.tsx",
      "ui-exodus-next/preview/src/entry-source.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:chart",
    "recommendation": "retain",
    "layer": "component",
    "reason": "真实SVG面积图，原版固定数列逐点显示；不取实时数据。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "真实SVG面积图，原版固定数列逐点显示；不取实时数据。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/chart.html",
      "ui-assistant-elements/src4/components/demo/elements/chart.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/chart.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:diagram",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版SVG架构图，缩放/重置/放大至160%，不申请浏览器全屏。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版SVG架构图，缩放/重置/放大至160%，不申请浏览器全屏。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/diagram.html",
      "ui-assistant-elements/src4/components/demo/elements/diagram.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/diagram.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:math-block",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版分数、上下标与逐步公式推导富显示，不执行数学求解。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版分数、上下标与逐步公式推导富显示，不执行数学求解。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/math-block.html",
      "ui-assistant-elements/src4/components/demo/elements/math-block.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/math-block.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:web-preview",
    "recommendation": "review",
    "layer": "experiment",
    "reason": "历史观察待复验，非当前故障复现：保留review仅因Grok匹配资源下持续Loading的真实观察待解释，不因无真实网站或禁用外开。源码1500ms应显示child不是复验结果；真实显示后即可retain容器组件。",
    "scopeLabel": "浏览器容器与本地child展示",
    "deliveredScope": "保留review仅因Grok匹配资源下持续Loading的真实观察待解释，不因无真实网站或禁用外开。源码1500ms应显示child不是复验结果；真实显示后即可retain容器组件。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/web-preview.html",
      "ui-assistant-elements/src4/components/demo/elements/web-preview.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/web-preview.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read",
    "historicalCapture": {
      "record": "ui-runtime-health-integration/reports/thumbnail-capture/records/assistant-elements--web-preview.json",
      "observedAt": null,
      "observationDateStatus": "原记录未提供采集日期，不以文件mtime或当前审计日期代填",
      "baseline": "77ada4cd095d383cf1e9c774f7cc1518da9b1b55",
      "renderState": "partial_content | 整 iframe contain；presentation=partial；awaiting_user_review；interaction not_tested；Preview pane remains at “Loading preview”; no external page opened.",
      "interactionAcceptance": "not_tested",
      "resourceHashesMatchCurrent": true,
      "resourceCount": 3,
      "currentNativeReproduction": false,
      "currentDOMExecution": false
    }
  },
  {
    "id": "assistant-elements:map-answer",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版SVG示意路线与地点选择，不是真实地图、定位或导航服务。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版SVG示意路线与地点选择，不是真实地图、定位或导航服务。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/map-answer.html",
      "ui-assistant-elements/src4/components/demo/elements/map-answer.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/map-answer.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:code-runner",
    "recommendation": "retain",
    "layer": "experiment",
    "reason": "实际title代码运行回执，description与host清楚预定义输出/不执行代码，原输出及状态UI有用，撤回按无执行器给review的建议。",
    "scopeLabel": "预录代码输出与运行状态组件",
    "deliveredScope": "实际title代码运行回执，description与host清楚预定义输出/不执行代码，原输出及状态UI有用，撤回按无执行器给review的建议。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/code-runner.html",
      "ui-assistant-elements/src4/components/demo/elements/code-runner.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/code-runner.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:computer-use",
    "recommendation": "retain",
    "layer": "experiment",
    "reason": "description及host明确示意屏幕与脚本轨迹，非实际电脑操作；保留原可视反馈实验，不要求接屏幕服务。",
    "scopeLabel": "脚本操作轨迹状态实验",
    "deliveredScope": "description及host明确示意屏幕与脚本轨迹，非实际电脑操作；保留原可视反馈实验，不要求接屏幕服务。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/computer-use.html",
      "ui-assistant-elements/src4/components/demo/elements/computer-use.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/computer-use.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:cost-meter",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版静态成本分项和占比；模型名称、token量和成本均为示例。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版静态成本分项和占比；模型名称、token量和成本均为示例。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/cost-meter.html",
      "ui-assistant-elements/src4/components/demo/elements/cost-meter.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/cost-meter.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:flow-graph",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版SVG节点连线和状态推进，不执行工作流。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版SVG节点连线和状态推进，不执行工作流。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/flow-graph.html",
      "ui-assistant-elements/src4/components/demo/elements/flow-graph.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/flow-graph.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:score-breakdown",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版加权评分与维度明细逐步展示，评分为预置示例非真实评估。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版加权评分与维度明细逐步展示，评分为预置示例非真实评估。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/score-breakdown.html",
      "ui-assistant-elements/src4/components/demo/elements/score-breakdown.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/score-breakdown.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:trace-waterfall",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版层级trace跨度、时长及状态逐步展示，不采集运行数据。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版层级trace跨度、时长及状态逐步展示，不采集运行数据。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/trace-waterfall.html",
      "ui-assistant-elements/src4/components/demo/elements/trace-waterfall.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/trace-waterfall.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:web-search",
    "recommendation": "retain",
    "layer": "component",
    "reason": "1800/500/500/500后最终3结果且searching=false。历史中间帧需重看最终态，不因未远程搜索降级。",
    "scopeLabel": "搜索结果流状态组件",
    "deliveredScope": "1800/500/500/500后最终3结果且searching=false。历史中间帧需重看最终态，不因未远程搜索降级。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/web-search.html",
      "ui-assistant-elements/src4/components/demo/elements/web-search.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/web-search.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "fancy:elastic-line",
    "recommendation": "review",
    "layer": "experiment",
    "reason": "历史观察待复验，非当前故障复现：原SVG二次曲线与pathLength动画存在，useDimensions依赖首次几何及resize；匹配资源的Grok只见大字未见线，需真实几何/线段复验，尚未证明根因。",
    "scopeLabel": "弹性曲线排版实验",
    "deliveredScope": "原SVG二次曲线与pathLength动画存在，useDimensions依赖首次几何及resize；匹配资源的Grok只见大字未见线，需真实几何/线段复验，尚未证明根因。",
    "evidence": [
      "/tmp/ui-fancy-adapt/src/fancy/components/physics/elastic-line.tsx",
      "/tmp/ui-fancy-adapt/src/hooks/use-dimensions.ts"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read",
    "historicalCapture": {
      "record": "ui-runtime-health-integration/reports/thumbnail-capture/records/fancy--elastic-line.json",
      "observedAt": null,
      "observationDateStatus": "原记录未提供采集日期，不以文件mtime或当前审计日期代填",
      "baseline": "77ada4cd095d383cf1e9c774f7cc1518da9b1b55",
      "renderState": "partial_content | 整 iframe contain；presentation=partial；awaiting_user_review；interaction not_tested；Expected elastic-line interaction is not visible; iframe shows only generic Fancy Components header/text.",
      "interactionAcceptance": "not_tested",
      "resourceHashesMatchCurrent": true,
      "resourceCount": 3,
      "currentNativeReproduction": false,
      "currentDOMExecution": false
    }
  },
  {
    "id": "fancy:css-box-carousel",
    "recommendation": "retain",
    "layer": "experiment",
    "reason": "原CSSBox六面本来就是文字而非填充盒体；保留3D排版/拖动与模式切换，不将无实体背景误判缺画面。",
    "scopeLabel": "CSS三维文字面与轮播实验",
    "deliveredScope": "原CSSBox六面本来就是文字而非填充盒体；保留3D排版/拖动与模式切换，不将无实体背景误判缺画面。",
    "evidence": [
      "/tmp/ui-fancy-adapt/src/fancy/examples/blocks/css-box-demo.tsx",
      "/tmp/ui-fancy-adapt/src/fancy/components/blocks/css-box.tsx"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "fancy:media-between-text",
    "recommendation": "retain",
    "layer": "component",
    "reason": "媒体默认宽度0，hover后展开30/100px；初始截帧无媒体是预期。原创本地SVG替代已披露，触屏可达性未实测。",
    "scopeLabel": "文字间悬停媒体展开",
    "deliveredScope": "媒体默认宽度0，hover后展开30/100px；初始截帧无媒体是预期。原创本地SVG替代已披露，触屏可达性未实测。",
    "evidence": [
      "/tmp/ui-fancy-adapt/src/fancy/components/blocks/media-between-text.tsx"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "cult:floating-panel",
    "recommendation": "retain",
    "layer": "component",
    "reason": "Add Note/Choose Color原触发器控制面板；初始关闭不等于加载失败，原提交只示例回调，不称笔记保存服务。",
    "scopeLabel": "浮动输入与选择面板",
    "deliveredScope": "Add Note/Choose Color原触发器控制面板；初始关闭不等于加载失败，原提交只示例回调，不称笔记保存服务。",
    "evidence": [
      "/tmp/ui-cult-adapt/src2/registry/default/example/floating-panel-demo.tsx"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "cult:side-panel",
    "recommendation": "retain",
    "layer": "component",
    "reason": "真实受控打开/关闭与Escape、焦点返回；原创文字children替代官方视频已披露，保留侧面板非视频页面。",
    "scopeLabel": "受控侧面板",
    "deliveredScope": "真实受控打开/关闭与Escape、焦点返回；原创文字children替代官方视频已披露，保留侧面板非视频页面。",
    "evidence": [
      "ui-cult-sidepanel-adapt/src/main.tsx",
      "ui-cult-sidepanel-adapt/src/ui/side-panel.tsx"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "cult:toolbar-expandable",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原可展开工具栏/步骤与字段保留，Initialize/Save无部署handler；保留面板组件，不称实际部署流程，建议无动作按钮就近提示。",
    "scopeLabel": "可展开操作面板",
    "deliveredScope": "原可展开工具栏/步骤与字段保留，Initialize/Save无部署handler；保留面板组件，不称实际部署流程，建议无动作按钮就近提示。",
    "evidence": [
      "/tmp/ui-cult-adapt/src3/registry/default/example/toolbar-expandable-demo.tsx"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "cult:marketing-hero-analytics",
    "recommendation": "review",
    "layer": "component",
    "reason": "历史观察待复验，非当前故障复现：原数据生成SVG折线和60ms可见状态确实存在；Grok只见网格/部分图形尚未解释，需复验布局/opacity，不据静态源码宣称已修。",
    "scopeLabel": "数据折线营销首屏区块",
    "deliveredScope": "原数据生成SVG折线和60ms可见状态确实存在；Grok只见网格/部分图形尚未解释，需复验布局/opacity，不据静态源码宣称已修。",
    "evidence": [
      "/tmp/ui-cult-adapt/src/registry/default/ui/marketing-hero-analytics.tsx"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read",
    "historicalCapture": {
      "record": "ui-runtime-health-integration/reports/thumbnail-capture/records/cult--marketing-hero-analytics.json",
      "observedAt": null,
      "observationDateStatus": "原记录未提供采集日期，不以文件mtime或当前审计日期代填",
      "baseline": "77ada4cd095d383cf1e9c774f7cc1518da9b1b55",
      "renderState": "partial_content | 整 iframe contain；presentation=partial；awaiting_user_review；interaction not_tested；Chart area appears as grid with hero text; analytics graphic is not visibly complete.",
      "interactionAcceptance": "not_tested",
      "resourceHashesMatchCurrent": true,
      "resourceCount": 3,
      "currentNativeReproduction": false,
      "currentDOMExecution": false
    }
  },
  {
    "id": "spring:notification-hub",
    "recommendation": "retain",
    "layer": "component",
    "reason": "初始空通知为原交互起点，手动新增、3秒寿命与移除是真状态；最多6活动消息，离场可短暂额外DOM，不是系统通知服务。",
    "scopeLabel": "手动通知过渡组件",
    "deliveredScope": "初始空通知为原交互起点，手动新增、3秒寿命与移除是真状态；最多6活动消息，离场可短暂额外DOM，不是系统通知服务。",
    "evidence": [
      "ui-spring-notification-local/App.tsx",
      "ui-spring-notification-local/main.tsx"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "blode:lighting",
    "recommendation": "retain",
    "layer": "experiment",
    "reason": "原窗口/指针与阴影公式保留，原创CSS天空替视频已明示；浅色/低对比不能直接判空白，保留材质实验。",
    "scopeLabel": "窗口光影材质实验",
    "deliveredScope": "原窗口/指针与阴影公式保留，原创CSS天空替视频已明示；浅色/低对比不能直接判空白，保留材质实验。",
    "evidence": [
      "ui-blode-lighting/build/Lighting.tsx",
      "ui-blode-lighting/build/art.ts"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "blode:markers",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原120px滚动揭示与<=820px章节刻度隐藏；680宽iframe/页面顶部无刻度是规则，不是加载失败。",
    "scopeLabel": "滚动阅读进度刻度",
    "deliveredScope": "原120px滚动揭示与<=820px章节刻度隐藏；680宽iframe/页面顶部无刻度是规则，不是加载失败。",
    "evidence": [
      "ui-blode-markers/build/Markers.tsx",
      "ui-blode-markers/build/markers.module.css"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "uiverse:book-material",
    "recommendation": "retain",
    "layer": "experiment",
    "reason": "原书本侧视容器高度13px、页2px，宿主默认暂停；薄条是原等待动画侧视范围，不是书籍阅读器缺页。",
    "scopeLabel": "侧视翻页等待动画",
    "deliveredScope": "原书本侧视容器高度13px、页2px，宿主默认暂停；薄条是原等待动画侧视范围，不是书籍阅读器缺页。",
    "evidence": [
      "ui-uiverse-adapt/delivery/original-book.html",
      "ui-uiverse-adapt/delivery/runtime.js"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "aicanvas:peel-corner-reveal",
    "recommendation": "review",
    "layer": "component",
    "reason": "历史观察待复验，非当前故障复现：原isOpen/hover弹簧与揭角几何保留；Grok匹配资源明确partial_interaction_failed未成功揭开，需实际输入/几何复验。虚构WiFi/QR非真实凭证。",
    "scopeLabel": "卷角揭示交互",
    "deliveredScope": "原isOpen/hover弹簧与揭角几何保留；Grok匹配资源明确partial_interaction_failed未成功揭开，需实际输入/几何复验。虚构WiFi/QR非真实凭证。",
    "evidence": [
      "ui-aicanvas-next/build/peel-corner-reveal-component.tsx"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read",
    "historicalCapture": {
      "record": "ui-runtime-health-integration/reports/thumbnail-capture/records/aicanvas--peel-corner-reveal.json",
      "observedAt": null,
      "observationDateStatus": "原记录未提供采集日期，不以文件mtime或当前审计日期代填",
      "baseline": "77ada4cd095d383cf1e9c774f7cc1518da9b1b55",
      "renderState": "partial_interaction_failed | 仅初始卷角代表态；不声称揭开动作成功",
      "interactionAcceptance": "not_tested",
      "resourceHashesMatchCurrent": true,
      "resourceCount": 3,
      "currentNativeReproduction": false,
      "currentDOMExecution": false
    }
  },
  {
    "id": "kibo:gantt",
    "recommendation": "retain",
    "layer": "component",
    "reason": "handleMoveFeature更新真实本地start/end，onMove已连接；固定合成项目、无逻辑按钮已移除或禁用，不称项目后端。",
    "scopeLabel": "本地甘特时间移动组件",
    "deliveredScope": "handleMoveFeature更新真实本地start/end，onMove已连接；固定合成项目、无逻辑按钮已移除或禁用，不称项目后端。",
    "evidence": [
      "ui-kibo-adapt/src/demos/gantt.tsx",
      "ui-kibo-adapt/src/packages/gantt/index.tsx"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "smoothui:image-generation-panel",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原任务卡/提示输入保留，宿主真实本地队列/失败/Retry状态；四幅预置SVG且无模型已明示，保留任务反馈组件而非生成服务。",
    "scopeLabel": "预置图像任务状态面板",
    "deliveredScope": "原任务卡/提示输入保留，宿主真实本地队列/失败/Retry状态；四幅预置SVG且无模型已明示，保留任务反馈组件而非生成服务。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/smooth-image-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "astryx:table-inbox",
    "recommendation": "retain",
    "layer": "page",
    "reason": "原多层收件箱模板与本地选择保留；历史两张模板图CSP失败但有fallback且主要结构完整，单列媒体修复不把整页判空白。",
    "scopeLabel": "本地收件箱页面模板",
    "deliveredScope": "原多层收件箱模板与本地选择保留；历史两张模板图CSP失败但有fallback且主要结构完整，单列媒体修复不把整页判空白。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-next-01/table-inbox/page.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-next-01/table-inbox/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "ai-elements:chain-of-thought",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "研究工作流步骤（原组件参考）",
    "reason": "原折叠步骤/状态组件；fixture明确不是私有思维，无模型推理实现。",
    "deliveredScope": "点击标题折叠再展开步骤；图标/引用标签仍可读。显示的是演示流程摘要，不是模型私有思维。",
    "evidence": [
      "batches/ai-elements-01/chain-of-thought.tsx",
      "batches/ai-elements-01/source.zip!/src/demos/chain-of-thought.tsx",
      "batches/ai-elements-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:confirmation",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "人工审批决策卡（原组件参考）",
    "reason": "Approve/Reject/Reset只写decision；完成提示明确local preview，没有文件操作。",
    "deliveredScope": "点Approve或Reject后对应状态出现、操作按钮消失；Reset恢复并可选另一决定。仅本地状态，不操作文件。",
    "evidence": [
      "batches/ai-elements-01/confirmation.tsx",
      "batches/ai-elements-01/source.zip!/src/demos/confirmation.tsx",
      "batches/ai-elements-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:plan",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent执行计划（原组件参考）",
    "reason": "原完整计划正文保留；footer本地built开关明确Simulate，不执行Solid迁移。",
    "deliveredScope": "展开/收起计划；点击Simulate plan approval在本地完成/重置文字之间切换。不真正构建项目。",
    "evidence": [
      "batches/ai-elements-01/plan.tsx",
      "batches/ai-elements-01/source.zip!/src/demos/plan.tsx",
      "batches/ai-elements-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:queue",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "待处理任务队列（原组件参考）",
    "reason": "原消息+todo队列，删除为filter；Send now仅console.log和删除。目录已声明不发送；按钮语义仍易误读，建议后续改Simulate send而非加服务。",
    "deliveredScope": "展开队列；移除或Send now减少本地列表数量，Todo可删除；不发送真实消息。",
    "evidence": [
      "batches/ai-elements-01/queue.tsx",
      "batches/ai-elements-01/source.zip!/src/demos/queue.tsx",
      "batches/ai-elements-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:file-tree",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent项目文件树（原组件参考）",
    "reason": "原目录展开与selectedPath；不是文件管理器，无读写。",
    "deliveredScope": "展开hooks/lib目录、选择不同文件，选择样式跟随；无文件读写。",
    "evidence": [
      "batches/ai-elements-01/file-tree.tsx",
      "batches/ai-elements-01/source.zip!/src/demos/file-tree.tsx",
      "batches/ai-elements-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:terminal",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "流式运行终端（原组件参考）",
    "reason": "原ANSI显示/clear/逐10字节20ms流；固定编译输出，不是shell。原复制guard+catch防假Copied，缺少失败回显可优化。",
    "deliveredScope": "挂载后ANSI文字逐步流出；clear清空且停止流式；复制权限受iframe限制，不要求真实shell。",
    "evidence": [
      "batches/ai-elements-01/terminal.tsx",
      "batches/ai-elements-01/source.zip!/src/demos/terminal.tsx",
      "batches/ai-elements-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:agent",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent配置与工具清单（原组件参考）",
    "reason": "原Agent配置/三个Zod工具schema展开；工具不执行，模型名为样例标签。",
    "deliveredScope": "展开web_search/read_url/summarize工具查看真实参数Schema；代码块应有本地Shiki语法高亮。配置展示不连接模型。",
    "evidence": [
      "batches/ai-elements-02/agent.tsx",
      "batches/ai-elements-02/source.zip!/src/demos/agent.tsx",
      "batches/ai-elements-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:tool",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "工具调用输入与输出（原组件参考）",
    "reason": "Tool输入/输出原组件；done本地切换且按钮写Simulate，未伪装SQL/模型执行。",
    "deliveredScope": "展开输入；Simulate tool result切换为完成并显示输出，Reset可重复。纯本地状态，不执行查询。",
    "evidence": [
      "batches/ai-elements-02/tool.tsx",
      "batches/ai-elements-02/source.zip!/src/demos/tool.tsx",
      "batches/ai-elements-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:task",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "项目任务检查轨迹（原组件参考）",
    "reason": "原折叠任务文件列表，扫描52/2files为静态标签，无真实扫描。",
    "deliveredScope": "点击Found project files收起/展开文件检查列表；代码文件标记可见。",
    "evidence": [
      "batches/ai-elements-02/task.tsx",
      "batches/ai-elements-02/source.zip!/src/demos/task.tsx",
      "batches/ai-elements-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:sources",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "检索证据来源列表（原组件参考）",
    "reason": "原三引用折叠列表，每Source onClick.preventDefault明确不跳转；可参考引用布局。",
    "deliveredScope": "点击来源计数折叠/展开3条引用。链接仅展示标签，预览拦截跳转。",
    "evidence": [
      "batches/ai-elements-02/sources.tsx",
      "batches/ai-elements-02/source.zip!/src/demos/sources.tsx",
      "batches/ai-elements-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:inline-citation",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "行内引用与来源轮播（原组件参考）",
    "reason": "原HoverCard/Embla六来源轮播，来源文本为样例而非核实研究；demo父级阻止a导航，React portal冒泡路径需原生复验，不误判链接点击失效为核心坏。",
    "deliveredScope": "hover或键盘聚焦引用徽标弹出来源卡；点击下一条改变轮播索引，前后可重复。",
    "evidence": [
      "batches/ai-elements-02/inline-citation.tsx",
      "batches/ai-elements-02/source.zip!/src/demos/inline-citation.tsx",
      "batches/ai-elements-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:checkpoint",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "工作区检查点恢复（原组件参考）",
    "reason": "原Checkpoint触发器+宿主revision1/3摘要；不是文件历史恢复，预览明确No real workspace modified。",
    "deliveredScope": "点Restore切到revision1并改变摘要，Reapply回到revision3；仅本地演示状态。",
    "evidence": [
      "batches/ai-elements-02/checkpoint.tsx",
      "batches/ai-elements-02/source.zip!/src/demos/checkpoint.tsx",
      "batches/ai-elements-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:question",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent澄清问题与多选（原组件参考）",
    "reason": "原多选/文字输入与QuestionResponse；本地summary+Ask again重置，不建立项目/支付服务。",
    "deliveredScope": "选择多个项目、输入补充说明、Answer显示所选文本；Ask again回到问题。提交仅本地状态。",
    "evidence": [
      "batches/ai-elements-03/question.tsx",
      "batches/ai-elements-03/source.zip!/src/demos/question.tsx",
      "batches/ai-elements-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:test-results",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent测试结果面板（原组件参考）",
    "reason": "原suite折叠/错误/进度；summary总15与展开列出的8个样本不同，是固定演示摘要，非测试执行器/当前测试通过证据。",
    "deliveredScope": "切换Authentication/User API/Database测试组，查看失败错误与进度分段；数据为官方模拟，不执行测试。",
    "evidence": [
      "batches/ai-elements-03/test-results.tsx",
      "batches/ai-elements-03/source.zip!/src/demos/test-results.tsx",
      "batches/ai-elements-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:schema-display",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "API Schema参数浏览器（原组件参考）",
    "reason": "原request/response嵌套schema阅读，不POST。/api路径为静态展示。",
    "deliveredScope": "展开request metadata及response author嵌套字段；必填标识/类型可见，不发送API请求。",
    "evidence": [
      "batches/ai-elements-03/schema-display.tsx",
      "batches/ai-elements-03/source.zip!/src/demos/schema-display.tsx",
      "batches/ai-elements-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:model-selector",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "模型选择与搜索器（原组件参考）",
    "reason": "原Dialog+搜索命令列表选择setSelectedModel并关闭；logo换几何色块已披露，只有选项参考不连接模型。",
    "deliveredScope": "打开模型弹窗、输入搜索词、选择模型后关闭并更新触发按钮；Escape关闭。品牌logo用本地几何标记，无远程图片。",
    "evidence": [
      "batches/ai-elements-03/model-selector.tsx",
      "batches/ai-elements-03/source.zip!/src/demos/model-selector.tsx",
      "batches/ai-elements-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:context",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "上下文Token预算（原组件参考）",
    "reason": "原Context hover内容；固定40000/128000 tokens和modelId，不读取真实账单。",
    "deliveredScope": "hover或聚焦Context百分比，显示输入/输出Token明细和容量百分比；固定模拟用量，不读取真实账户。",
    "evidence": [
      "batches/ai-elements-03/context.tsx",
      "batches/ai-elements-03/source.zip!/src/demos/context.tsx",
      "batches/ai-elements-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:attachments",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent附件预览与移除（原组件参考）",
    "reason": "原grid4附件删除，2张本地原创SVG、PDF/MP4仅文件图标且URL空；不能当PDF/video播放器，现范围为附件展示删除。",
    "deliveredScope": "hover附件显示移除按钮，点击后对应本地条目消失；图像为本地自绘SVG，不上传文件。",
    "evidence": [
      "batches/ai-elements-03/attachments.tsx",
      "batches/ai-elements-03/source.zip!/src/demos/attachments.tsx",
      "batches/ai-elements-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:commit",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent代码变更提交卡（原组件参考）",
    "reason": "原文件增删统计/折叠，hash为样例非真实Git；复制guard/try-catch不假成功，但无onError回显。",
    "deliveredScope": "点击提交头展开/收起文件变更，显示增删统计。仅模拟commit，不访问Git仓库；复制受iframe权限限制。",
    "evidence": [
      "batches/ai-elements-04/commit.tsx",
      "batches/ai-elements-04/source.zip!/src/demos/commit.tsx",
      "batches/ai-elements-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:package-info",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "依赖升级提案（原组件参考）",
    "reason": "原三类依赖变化卡，本地待审按钮，不安装。非完整依赖管理应用。",
    "deliveredScope": "展示版本变更与依赖；Mark proposal在本地标记为待审并可重置，不安装任何软件。",
    "evidence": [
      "batches/ai-elements-04/package-info.tsx",
      "batches/ai-elements-04/source.zip!/src/demos/package-info.tsx",
      "batches/ai-elements-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:artifact",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "可切换源码的生成产物（原组件参考）",
    "reason": "原Artifact容器+本地version/source/result切换；结果是宿主固定简报，不运行生成代码，明确no generated API response。",
    "deliveredScope": "点击Toggle artifact view切换源码/可视结果；Simulate revision递增本地版本并同步源码，不运行生成代码或API。",
    "evidence": [
      "batches/ai-elements-04/artifact.tsx",
      "batches/ai-elements-04/source.zip!/src/demos/artifact.tsx",
      "batches/ai-elements-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:sandbox",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "工具执行沙箱结果（本地状态实验）",
    "reason": "原Code/Output tabs与四state本地切换；固定Python示例配JavaScript错误栈，不能当真实运行结果。只保留多状态UI实验。",
    "deliveredScope": "切换Code/Output；选择output-error显示错误栈、output-available显示示例结果；仅本地状态，不执行Python。",
    "evidence": [
      "batches/ai-elements-04/sandbox.tsx",
      "batches/ai-elements-04/source.zip!/src/demos/sandbox.tsx",
      "batches/ai-elements-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:stack-trace",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "异常堆栈定位器（原组件参考）",
    "reason": "原堆栈解析/展开，点击frame写宿主location；不打开IDE。copy已guard+catch但无失败回显。",
    "deliveredScope": "展开/折叠堆栈；点击应用文件路径顶部显示所选文件行列。不打开IDE、不读取真实文件。",
    "evidence": [
      "batches/ai-elements-04/stack-trace.tsx",
      "batches/ai-elements-04/source.zip!/src/demos/stack-trace.tsx",
      "batches/ai-elements-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:environment-variables",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "环境变量脱敏浏览（原组件参考）",
    "reason": "原隐藏/显示+固定占位API_KEY，无真实秘密；copy guard/try-catch防假成功，权限拒绝没有可见错误可优化。",
    "deliveredScope": "切换显示/隐藏变量值；示例API_KEY为占位文本，不读取用户凭据。复制按钮仅在浏览器允许时可用。",
    "evidence": [
      "batches/ai-elements-04/environment-variables.tsx",
      "batches/ai-elements-04/source.zip!/src/demos/environment-variables.tsx",
      "batches/ai-elements-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:prompt-input",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent任务输入框（原组件参考）",
    "reason": "原输入组件+本地回执和research开关；未挂文件上传UI，不应据原primitive未用fetch死路径判当前请求风险。",
    "deliveredScope": "输入内容后Enter或提交按钮把文字写到下方本地回执并清空输入；Research mode切换本地开关。不调用API、不启用截图或文件上传。",
    "evidence": [
      "batches/ai-elements-05/prompt-input.tsx",
      "batches/ai-elements-05/source.zip!/src/demos/prompt-input.tsx",
      "batches/ai-elements-05/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:conversation",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "自动跟随的会话时间线（原组件参考）",
    "reason": "原Conversation滚动容器+宿主交替8消息/Add/Clear；不是实际AI聊天，样本标fixture。",
    "deliveredScope": "Add追加样本消息并自动滚到底部；向上滚后出现Scroll to latest；Clear清空后显示空态，再Add可恢复。",
    "evidence": [
      "batches/ai-elements-05/conversation.tsx",
      "batches/ai-elements-05/source.zip!/src/demos/conversation.tsx",
      "batches/ai-elements-05/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:warp",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "光束透视空间（原组件参考）",
    "reason": "原WarpBackground透视CSS+宿主原创卡片文案，不是原完整营销网站。",
    "deliveredScope": "彩色光束穿过透视网格，衬托中央内容卡片。",
    "evidence": [
      "featured/warp.tsx",
      "featured/featured-source.zip!/build/src/vault/main.tsx",
      "featured/featured-source.zip!/build/src/vault/main.tsx"
    ]
  },
  {
    "id": "magicui:orbit",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "双层轨道环绕（原组件参考）",
    "reason": "原OrbitingCircles双环+宿主字符图标与V核心，图标不是品牌原件；保留轨道机制。",
    "deliveredScope": "内外轨道以不同方向和速度持续环绕。",
    "evidence": [
      "featured/orbit.tsx",
      "featured/featured-source.zip!/build/src/vault/main.tsx",
      "featured/featured-source.zip!/build/src/vault/main.tsx"
    ]
  },
  {
    "id": "magicui:neon-gradient-card",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "霓虹渐变边缘卡片（原组件参考）",
    "reason": "原渐变边框卡+标题，resize测量；不提供导航或业务操作。",
    "deliveredScope": "检查两个背景动画节点computed animationName=background-position-spin，间隔1秒background-position变化。",
    "evidence": [
      "batches/magicui-01/neon-gradient-card.tsx",
      "batches/magicui-01/source.zip!/src/demos/neon-gradient-card.tsx",
      "batches/magicui-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:animated-beam",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "流动光束连接图（原组件参考）",
    "reason": "原六路SVG渐变连接+七节点；品牌图标用NodeIcon几何标记替换，非真实平台连接。",
    "deliveredScope": "至少6条SVG路径可见；间隔1秒渐变坐标变化；缩放窗口后曲线重新贴合节点。",
    "evidence": [
      "batches/magicui-01/animated-beam.tsx",
      "batches/magicui-01/source.zip!/src/demos/animated-beam.tsx",
      "batches/magicui-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:glyph-matrix",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "字符矩阵画布（原组件参考）",
    "reason": "原2DCanvas字符阵列；probe/getContext为核心路径，无原生像素本轮不判成功或失败。",
    "deliveredScope": "canvas存在且尺寸非零；间隔1秒截图字符分布变化，鼠标/窗口变化不报错。",
    "evidence": [
      "batches/magicui-01/glyph-matrix.tsx",
      "batches/magicui-01/source.zip!/src/demos/glyph-matrix.tsx",
      "batches/magicui-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:floating-3d-particles",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "漂浮立体粒子场（原组件参考）",
    "reason": "原2DCanvas伪3D粒子，不需WebGL；Get Started是无handler装饰按钮，保背景场景不称落地流程。",
    "deliveredScope": "canvas非空；连续截图粒子位置变化，前景按钮可聚焦。",
    "evidence": [
      "batches/magicui-01/floating-3d-particles.tsx",
      "batches/magicui-01/source.zip!/src/demos/floating-3d-particles.tsx",
      "batches/magicui-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:text-3d-flip",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "立体逐字翻转（原组件参考）",
    "reason": "原分字hover翻面，鼠标事件与spring；是文字动效而非整页。",
    "deliveredScope": "鼠标移入文字，各字出现3D翻面；移出恢复；computed transform非identity。",
    "evidence": [
      "batches/magicui-02/text-3d-flip.tsx",
      "batches/magicui-02/source.zip!/src/demos/text-3d-flip.tsx",
      "batches/magicui-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:morphing-text",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "液态文字变形（原组件参考）",
    "reason": "原RAF双span模糊融合+固定9词；无输入业务，保留动效组件。",
    "deliveredScope": "间隔2秒可见文字变化；两个span的blur/opacity随帧变化。",
    "evidence": [
      "batches/magicui-02/morphing-text.tsx",
      "batches/magicui-02/source.zip!/src/demos/morphing-text.tsx",
      "batches/magicui-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:terminal",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "逐行生成终端（本地状态实验）",
    "reason": "原固定shadcn安装日志逐字/分段动画；Success只是演示文本，不执行安装。",
    "deliveredScope": "打开后命令逐字增加，随后出现多行检查结果；重载可从头播放。",
    "evidence": [
      "batches/magicui-02/terminal.tsx",
      "batches/magicui-02/source.zip!/src/demos/terminal.tsx",
      "batches/magicui-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:border-beam",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "环绕边缘光束卡片（原组件参考）",
    "reason": "原BorderBeam放在静态Login卡；Register/Login无handler且在form外。不能当登录表单流程，保持边框效果参考。",
    "deliveredScope": "computed offset-distance或transform随帧变化；email/password可输入，按钮仅演示不提交。",
    "evidence": [
      "batches/magicui-02/border-beam.tsx",
      "batches/magicui-02/source.zip!/src/demos/border-beam.tsx",
      "batches/magicui-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:sparkles-text",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "星芒闪烁标题（原组件参考）",
    "reason": "原100ms更新星芒参数的文字效果；未测真实像素/动画节奏。",
    "deliveredScope": "多个星芒SVG可见；连续截图位置/opacity/scale变化。",
    "evidence": [
      "batches/magicui-02/sparkles-text.tsx",
      "batches/magicui-02/source.zip!/src/demos/sparkles-text.tsx",
      "batches/magicui-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:kinetic-text",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "逐字响应弹性标题（原组件参考）",
    "reason": "原Nostalgia字重/间距hover效果；真实用途是排版组件。",
    "deliveredScope": "鼠标移入单个字母，对比font-weight、padding-inline与-webkit-text-stroke-width；移出恢复。",
    "evidence": [
      "batches/magicui-03/kinetic-text.tsx",
      "batches/magicui-03/source.zip!/src/demos/kinetic-text.tsx",
      "batches/magicui-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:aurora-text",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "极光流色标题（原组件参考）",
    "reason": "原渐变背景文字，单个h1；不是完整hero页面。",
    "deliveredScope": "实际承载animate-aurora的span computed animationName=aurora；间隔1秒background-position和transform变化。",
    "evidence": [
      "batches/magicui-03/aurora-text.tsx",
      "batches/magicui-03/source.zip!/src/demos/aurora-text.tsx",
      "batches/magicui-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:meteors",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "斜向流星背景（原组件参考）",
    "reason": "原30随机延时流星+标题容器，非动态内容流。",
    "deliveredScope": "等待首轮随机delay后观察30个meteor节点；computed animationName=meteor，间隔1秒transform/opacity变化。",
    "evidence": [
      "batches/magicui-03/meteors.tsx",
      "batches/magicui-03/source.zip!/src/demos/meteors.tsx",
      "batches/magicui-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:line-shadow-text",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "流动线纹阴影字（原组件参考）",
    "reason": "原data-text与伪元素阴影动画；去主题依赖固定black已由demo体现。",
    "deliveredScope": "检查data-text节点::after computed animationName=line-shadow，15s周期，间隔1秒background-position变化。",
    "evidence": [
      "batches/magicui-03/line-shadow-text.tsx",
      "batches/magicui-03/source.zip!/src/demos/line-shadow-text.tsx",
      "batches/magicui-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:interactive-grid-pattern",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "指针感应斜网格（原组件参考）",
    "reason": "原SVG格子hover setHoveredSquare，离开清空；不是自动随机栅格。",
    "deliveredScope": "鼠标移入多个SVG rect，观察目标rect fill/opacity或class变化，离开后恢复。非自动播放。",
    "evidence": [
      "batches/magicui-03/interactive-grid-pattern.tsx",
      "batches/magicui-03/source.zip!/src/demos/interactive-grid-pattern.tsx",
      "batches/magicui-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:flickering-grid",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "闪烁像素网格（原组件参考）",
    "reason": "原2DCanvas方格随机透明度；getContext必要，不能用canvas节点存在当视觉证明。",
    "deliveredScope": "canvas宽高非零，间隔1秒截图像素透明度分布变化。2D canvas，不需WebGL。",
    "evidence": [
      "batches/magicui-03/flickering-grid.tsx",
      "batches/magicui-03/source.zip!/src/demos/flickering-grid.tsx",
      "batches/magicui-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:retro-grid",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "复古透视地网（原组件参考）",
    "reason": "原WebGL渲染与CSS fallback真实存在，含contextlost/restored监听；不能只看WebGL缺失一律判空白。",
    "deliveredScope": "优先WebGL画布；若环境不支持，原组件CSS fallback仍用retro-grid-fallback-scroll动画。检查canvas像素或data-retro-grid-scroll节点transform两帧变化；明确记录走哪条路径。",
    "evidence": [
      "batches/magicui-04/retro-grid.tsx",
      "batches/magicui-04/source.zip!/src/demos/retro-grid.tsx",
      "batches/magicui-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:animated-list",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "逐条通知堆叠（原组件参考）",
    "reason": "原逐项AnimatedList，4通知复制10组共40仅演示，不是40独立来源/业务消息。",
    "deliveredScope": "打开/进入视野后等待3秒，列表可见条目数量增加且新卡opacity/transform有入场过渡。",
    "evidence": [
      "batches/magicui-04/animated-list.tsx",
      "batches/magicui-04/source.zip!/src/demos/animated-list.tsx",
      "batches/magicui-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:particles",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "指针牵引粒子（原组件参考）",
    "reason": "原2DCanvas100粒子与鼠标跟随，context资源/像素未原生复测，不按DOM宣称绘制成功。",
    "deliveredScope": "canvas尺寸非零；间隔1秒像素变化，再移动指针观察粒子位置响应。2D canvas，不需WebGL。",
    "evidence": [
      "batches/magicui-04/particles.tsx",
      "batches/magicui-04/source.zip!/src/demos/particles.tsx",
      "batches/magicui-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:hyper-text",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "解码翻字符标题（原组件参考）",
    "reason": "原hover随机字母并恢复，单句文字效果。",
    "deliveredScope": "hover Hover Me! 文本，短时间textContent出现随机字母并恢复；再次hover能重播。",
    "evidence": [
      "batches/magicui-04/hyper-text.tsx",
      "batches/magicui-04/source.zip!/src/demos/hyper-text.tsx",
      "batches/magicui-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:spinning-text",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "环形旋转文字（原组件参考）",
    "reason": "原环形字母持续旋转，固定文案，不是导航菜单。",
    "deliveredScope": "环形字母可见，外层motion节点computed transform隔1秒不同；文字布局不挤成直线。",
    "evidence": [
      "batches/magicui-04/spinning-text.tsx",
      "batches/magicui-04/source.zip!/src/demos/spinning-text.tsx",
      "batches/magicui-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:light-rays",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "柔光放射背景（原组件参考）",
    "reason": "原Motion光线+静态标题段落，无操作承诺；参考材质背景组件。",
    "deliveredScope": "等待首轮延迟后，检查多条motion光线的transform/opacity两时点变化。",
    "evidence": [
      "batches/magicui-05/light-rays.tsx",
      "batches/magicui-05/source.zip!/src/demos/light-rays.tsx",
      "batches/magicui-05/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:scroll-based-velocity",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "滚动速度文字带（原组件参考）",
    "reason": "原两行相反方向文字，useScroll速度反馈；预览增加滚动高度，iframe滚动几何本轮未原生复验。",
    "deliveredScope": "在独立预览或详情iframe内部滚动；观察两行translateX持续变化，快速滚动后速度短暂增大。预览适配增加可滚动高度。",
    "evidence": [
      "batches/magicui-05/scroll-based-velocity.tsx",
      "batches/magicui-05/source.zip!/src/demos/scroll-based-velocity.tsx",
      "batches/magicui-05/source.zip!/src/main.tsx"
    ]
  }
];
