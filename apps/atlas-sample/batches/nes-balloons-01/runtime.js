(()=>{'use strict';let stopped=false;const dark=document.getElementById('dark'),direction=document.getElementById('direction'),stage=document.getElementById('stage');const boolean=()=>dark.checked;const select=()=>direction.value;const classNames=(...args)=>args.flatMap(x=>typeof x==='string'?[x]:Object.keys(x).filter(k=>x[k])).filter(Boolean).join(' ');



const originalTemplate = () => {
  const isDark = boolean('is-dark', false);
  const balloonDirection = select('Direction', {
    default: '',
    'from-left': 'from-left',
    'from-right': 'from-right',
  }, '');

  const balloonClasses = classNames(
    'nes-balloon',
    balloonDirection,
    {
      'is-dark': isDark,
    },
  );

  return `
    <div class="${balloonClasses}">
      <p>Hello NES.css</p>
    </div>
  `;
};

function render(){if(stopped)return;try{stage.innerHTML=originalTemplate();stage.classList.toggle('is-dark-host',dark.checked)}catch(e){close();stage.textContent='气泡演示无法显示，请重新打开。';stage.setAttribute('role','alert')}}
function close(){if(stopped)return;stopped=true;dark.removeEventListener('change',render);direction.removeEventListener('change',render);window.removeEventListener('pagehide',close);window.removeEventListener('atlas:dispose',close);dark.disabled=true;direction.disabled=true;}
if(!dark||!direction||!stage){const p=document.createElement('p');p.textContent='气泡演示缺少容器';p.setAttribute('role','alert');document.body.append(p);return}dark.addEventListener('change',render);direction.addEventListener('change',render);window.addEventListener('pagehide',close);window.addEventListener('atlas:dispose',close);render();})();
