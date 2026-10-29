(function(){
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var secs=[].slice.call(document.querySelectorAll('main section'));
  var cnt=document.getElementById('cnt'),bar=document.getElementById('bar');
  // aparición al hacer scroll
  var els=[].slice.call(document.querySelectorAll('.rv'));
  if('IntersectionObserver' in window&&!reduce){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);if(e.target.querySelector('[data-count]'))count(e.target.querySelector('[data-count]'));}});},{threshold:.15,rootMargin:'0px 0px -6% 0px'});
    els.forEach(function(el){io.observe(el);});
  } else els.forEach(function(el){el.classList.add('in');});
  function count(el){
    var end=+el.getAttribute('data-count'),t0=null;
    (function step(ts){if(t0===null)t0=ts;var p=Math.min(1,(ts-t0)/1400),e=1-Math.pow(1-p,3);
      el.textContent=Math.round(end*e).toLocaleString('en-US');if(p<1)requestAnimationFrame(step);})(performance.now());
  }
  // progreso y contador de secciones
  var tick=false;
  function upd(){
    tick=false;
    var h=document.documentElement.scrollHeight-innerHeight;
    bar.style.width=(h>0?Math.min(100,scrollY/h*100):0)+'%';
    var n=1,mid=innerHeight*.4;
    secs.forEach(function(s,i){if(s.getBoundingClientRect().top<mid)n=i+1;});
    cnt.textContent=n+' / '+secs.length;
  }
  addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd);}},{passive:true});
  addEventListener('resize',upd);upd();
  // calculadora
  var INV=12000,avg=document.getElementById('avg'),out=document.getElementById('avgOut'),cl=document.getElementById('clients'),pd=document.getElementById('perDay'),g=document.getElementById('dots'),cells=[];
  for(var i=0;i<60;i++){var c=document.createElement('span');g.appendChild(c);cells.push(c);}
  function calc(){
    var v=+avg.value,n=Math.ceil(INV/v);
    out.textContent='RD$'+v.toLocaleString('en-US');
    cl.textContent=n;
    pd.textContent=(Math.round(n/30*10)/10).toLocaleString('en-US',{maximumFractionDigits:1});
    cells.forEach(function(c,k){c.classList.toggle('l',k<n);});
  }
  avg.addEventListener('input',calc);calc();
})();
