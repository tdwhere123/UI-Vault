export function adaptCandidate(x) {
 const title=x.title||x.id, text=[title,x.description,x.source].join(' ');
 const category=x.category||(/agent|chat|对话|工具调用|收件箱|email|decision/i.test(text)?'Agent与对话':/table|dashboard|chart|状态|数据|日历/i.test(text)?'数据与状态':/navigation|menu|导航|看板/i.test(text)?'导航与组织':/hero|page|整站|首屏|营销|pricing/i.test(text)?'产品与营销':'展示与媒体');
 const dir=x.preview?.slice(0,x.preview.lastIndexOf('/'));
 return {...x,category,kind:x.kind||'待验收素材',format:x.format||'页面区块',featured:true,pending:true,
 description:x.description||'原始来源已收集，尚未完成视觉与交互验收。',
 keywords:[title,x.id,x.source,x.description,Array.isArray(x.keywords)?x.keywords.join(' '):x.keywords].join(' '),technology:[],styleTags:x.styleTags||[],interactionTags:x.interactionTags||[],purposeTags:x.purposeTags||[category],
 bundle:x.archive||'',code:x.code||'',dependencies:x.buildStatus||'依赖及构建状态见来源。',
 behavior:x.behavior||(x.preview?'本地预览已接入，尚未完成视觉复验。':'暂无本地预览；可查看原始来源。'),
 adaptation:(Array.isArray(x.gaps)?x.gaps:[]).join('；'),revision:x.revision||'详见固定来源链接',
 runtime:dir?{key:dir,css:dir+'/runtime.css',js:dir+'/runtime.js',cssHref:'runtime.css',scriptSrc:'runtime.js'}:null};
}
