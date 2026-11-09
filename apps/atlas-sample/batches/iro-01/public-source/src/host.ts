import iro from './upstream/index';
import {demoOptions} from './demo-options';
const root=document.getElementById('app');
let picker:any=null,dead=false,failed=false,hidden=document.hidden;
let values=['#ff0000','#00ff00','#0000ff'];let active=0;
const abort=new AbortController();
const on=(t:any,type:string,fn:any)=>t.addEventListener(type,fn,{signal:abort.signal});
function stop(){if(picker){const old=picker;picker=null;old.destroy();}document.getElementById('demoWheel')?.replaceChildren();}
function failure(e?:any){if(dead||failed)return;failed=true;try{stop()}finally{abort.abort();const target=root||document.body;target?.replaceChildren();target?.setAttribute('role','alert');if(target)target.textContent='调色台已安全停止：本地渲染失败，没有尝试联网。';}}
function safe(fn:any){return (...args:any[])=>{if(dead||failed)return;try{fn(...args)}catch(e){failure(e)}}}
function sync(){if(!picker||hidden)return;values=picker.colors.map((x:any)=>x.hex8String);active=picker.color.index;
 const input=document.querySelector<HTMLInputElement>('#hex')!;input.value=picker.color.hex8String;
 document.querySelector('#value')!.textContent=picker.color.rgbaString;
 document.querySelector('#swatch')!.setAttribute('style','background:'+picker.color.rgbaString);
 document.querySelectorAll<HTMLButtonElement>('[data-color]').forEach((b,i)=>{b.setAttribute('aria-pressed',String(i===active));b.style.borderColor=values[i];b.textContent=`色柄 ${i+1} · ${values[i]}`});
}
function mount(){if(dead||failed||hidden)return;picker=new iro.ColorPicker('#demoWheel',{...demoOptions,colors:values,onFailure:failure} as any);picker.on(['color:change','color:setActive'],safe(sync));picker.setActiveColor(active);sync();document.querySelector('#state')!.textContent='本地多柄调色，未修改页面主题';}
try{
 if(!root)throw Error('missing root');
 root.innerHTML=`<header><p class="eyebrow">iro.js · 原版多柄调色台</p><h1>让颜色之间，产生关联。</h1><p>三个色柄共享原色轮、色域盒与通道滑杆。下方保留官方完整布局，方向不同的色轮同步响应；这里不是自动生成配色。</p></header><section class="controls" aria-label="颜色数值与键盘入口"><div class="handles">${values.map((_,i)=>`<button type="button" data-color="${i}">色柄 ${i+1}</button>`).join('')}</div><form id="edit"><label>当前色柄 HEX <input id="hex" maxlength="9" pattern="#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?" required aria-describedby="hint"></label><button>应用颜色</button><button type="button" id="reset">恢复初始颜色</button></form><p id="hint">输入 #RRGGBB 或 #RRGGBBAA。按钮与输入框支持键盘；原图形手势仍使用鼠标/触屏。</p><div class="readout"><i id="swatch" aria-hidden="true"></i><output id="value"></output></div><p id="state" role="status"></p></section><div id="demoWheel" aria-label="原版交互调色控件"></div><footer>iro.js 5.5.2 · MPL-2.0。原创文字和布局容器；原 SVG 色域、句柄与色彩运算保留。没有云端、剪贴板或保存操作。</footer>`;
 on(root,'click',safe((e:any)=>{const b=e.target.closest('[data-color]');if(b&&picker&&!hidden){picker.setActiveColor(Number(b.dataset.color));sync()}}));
 on(document.getElementById('edit'),'submit',safe((e:any)=>{e.preventDefault();if(!picker||hidden)return;const value=(document.getElementById('hex') as HTMLInputElement).value;if(!/^#[\da-f]{6}([\da-f]{2})?$/i.test(value)){document.querySelector('#state')!.textContent='请输入六位或八位 HEX 值。';return;}picker.color.hexString=value;sync()}));
 on(document.getElementById('reset'),'click',safe(()=>{if(!picker||hidden)return;picker.setColors(['#ff0000','#00ff00','#0000ff']);sync()}));
 on(document,'visibilitychange',safe(()=>{hidden=document.hidden;if(hidden){if(picker){values=picker.colors.map((c:any)=>c.hex8String);active=picker.color.index;}stop();document.querySelector('#state')!.textContent='页面隐藏：原控件已卸载，恢复可见后重建。';}else mount()}));
 const close=()=>{if(dead)return;dead=true;try{stop()}finally{abort.abort();root.replaceChildren();}};
 on(window,'pagehide',close);on(window,'atlas:dispose',close);
 if(hidden)document.querySelector('#state')!.textContent='页面隐藏：等待可见后创建控件。';else mount();
}catch(e){failure(e)}
