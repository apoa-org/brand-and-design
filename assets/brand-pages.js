(() => {
  const root=document.documentElement;
  const buttons=document.querySelectorAll('[data-font]');
  const saved=Number(sessionStorage.getItem('apoa-brand-reader-step')||0);
  function apply(step) {
    const n=Math.max(-2,Math.min(4,step));
    root.style.setProperty('--reader-size',(16+n*2)+'px');
    sessionStorage.setItem('apoa-brand-reader-step',String(n));
  }
  apply(saved);
  buttons.forEach(btn=>btn.addEventListener('click',()=>apply(btn.dataset.font==='0'?0:Number(sessionStorage.getItem('apoa-brand-reader-step')||0)+Number(btn.dataset.font))));
  document.querySelectorAll('[data-copy-color]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const hex=btn.dataset.copyColor;
      if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(hex).then(()=>{btn.textContent='已复制 ✓';setTimeout(()=>{btn.textContent='复制色值'},1300);}).catch(()=>{btn.textContent=hex;});}
      else{btn.textContent=hex;}
    });
  });
})();