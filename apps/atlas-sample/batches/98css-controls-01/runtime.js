(()=>{'use strict';const owned=[];let stopped=false;function listen(el,type,fn){const wrapped=e=>{if(!stopped)fn(e)};el.addEventListener(type,wrapped);owned.push(()=>el.removeEventListener(type,wrapped));}function dispose(){if(stopped)return;stopped=true;owned.splice(0).forEach(f=>f());document.querySelectorAll('input,select,textarea,button').forEach(e=>e.disabled=true);document.querySelectorAll('a[href]').forEach(e=>e.removeAttribute('href'));}listen(window,'atlas:dispose',dispose);listen(window,'pagehide',dispose);try{
  document.querySelectorAll('table.interactive').forEach(element => {
    listen(element, 'click', (event) => {
      const highlightedClass = 'highlighted';
      const isRow = element => element.tagName === 'TR' && element.parentElement.tagName === 'TBODY';
      const newlySelectedRow = event.composedPath().find(isRow);
      if (!newlySelectedRow) return;
const previouslySelectedRow = Array.from(newlySelectedRow.parentElement.children).filter(isRow).find(element => element.classList.contains(highlightedClass));
      if(previouslySelectedRow){
        previouslySelectedRow.classList.toggle(highlightedClass);
      }

      if (newlySelectedRow) {
        newlySelectedRow.classList.toggle(highlightedClass);
      }
    })
  });
}catch(e){dispose();throw e;}})();