(()=>{'use strict';let dead=false;const listeners=[];const on=(target,type,fn)=>{const wrapped=e=>{if(!dead)try{fn(e)}catch{fail()}};target.addEventListener(type,wrapped);listeners.push([target,type,wrapped])};function dispose(){if(dead)return;dead=true;for(const[t,k,f]of listeners)t.removeEventListener(k,f);listeners.length=0;document.querySelector('main')?.replaceChildren()}function fail(){dispose();document.body.setAttribute('role','alert');document.body.textContent='Local original controls unavailable.'}
// Tabs
function tabHandler(e, tabButtons) {
  e.preventDefault();
  const tabContainer = e.target.parentElement.parentElement;
  const targetId = e.target.getAttribute("aria-controls");
  tabButtons.forEach((_tabButton) =>
    _tabButton.setAttribute("aria-selected", false)
  );
  e.target.setAttribute("aria-selected", true);
  e.target.focus();
  tabContainer
    .querySelectorAll("[role=tabpanel]")
    .forEach((tabPanel) => tabPanel.setAttribute("hidden", true));
  tabContainer
    .querySelector(`[role=tabpanel]#${targetId}`)
    .removeAttribute("hidden");
}


try{const main=document.querySelector('main');if(!main)throw Error('Missing showcase');document.querySelectorAll('[role=tablist]').forEach(tabList=>{const tabs=tabList.querySelectorAll('[role=tab]');for(const tab of tabs){on(tab,'mousedown',e=>{if(!tab.disabled)tabHandler(e,tabs)});on(tab,'focus',e=>{if(!tab.disabled)tabHandler(e,tabs)});}});on(document,'click',e=>{if(e.target.closest?.('a[href]'))e.preventDefault()});on(document,'submit',e=>e.preventDefault());on(document,'visibilitychange',()=>document.body.toggleAttribute('data-hidden',document.hidden));on(window,'pagehide',dispose);on(window,'atlas:dispose',dispose);on(window,'error',e=>{e.preventDefault();fail()});document.body.toggleAttribute('data-hidden',document.hidden);}catch{fail()}})();
