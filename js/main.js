(function(){
var d=document,h=d.documentElement;h.classList.add('js');
var drawer=d.querySelector('.mob-drawer'),ov=d.querySelector('.mob-overlay'),btn=d.querySelector('.burger'),cl=d.querySelector('.mob-close');
function setOpen(o){if(!drawer)return;drawer.classList.toggle('open',o);ov.classList.toggle('open',o);h.classList.toggle('lock',o);btn.setAttribute('aria-expanded',o?'true':'false');drawer.setAttribute('aria-hidden',o?'false':'true');}
if(btn){btn.addEventListener('click',function(){setOpen(true)});cl.addEventListener('click',function(){setOpen(false)});ov.addEventListener('click',function(){setOpen(false)});d.addEventListener('keydown',function(e){if(e.key==='Escape')setOpen(false)});
window.addEventListener('resize',function(){if(window.innerWidth>768)setOpen(false)});}
d.querySelectorAll('.mob-acc').forEach(function(a){a.addEventListener('click',function(){var s=a.nextElementSibling,o=a.getAttribute('aria-expanded')==='true';a.setAttribute('aria-expanded',o?'false':'true');s.style.maxHeight=o?'0px':s.scrollHeight+'px';});});
d.querySelectorAll('.faq-q').forEach(function(q){q.addEventListener('click',function(){var a=q.nextElementSibling,o=q.getAttribute('aria-expanded')==='true';q.setAttribute('aria-expanded',o?'false':'true');a.style.maxHeight=o?'0px':a.scrollHeight+'px';});});
})();
