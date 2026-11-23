// شاشة الدخول: مرة لكل زيارة (جلسة المتصفح)، لا تتكرر عند التنقل
(()=>{const el=document.getElementById('intro');if(!el||sessionStorage.getItem('introSeen'))return;
const W=['أهلاً بك في فضاء الإعلام والإبداع.','مرحباً بك في الجريدة الإلكترونية لكلية الإعلام.','من هنا تبدأ الحكاية، ومن هنا يصنع الإعلام أثره.','أهلاً بك في نافذة كلية الإعلام على العالم.','جامعة تكريت ترحب بك في فضائها الإعلامي.','حيث تلتقي المعرفة بالإعلام والإبداع.'];
const h=new Date().getHours();document.getElementById('greet').textContent=h<12?'صباح الخير':h<18?'طاب يومك':'مساء الخير';
document.getElementById('welcome').textContent=W[Math.floor(Math.random()*W.length)];
el.hidden=false;document.body.style.overflow='hidden';
const c=document.getElementById('introParticles'),x=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;
const P=Array.from({length:70},()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*2+.5,v:Math.random()*.6+.2}));let run=true;
(function f(){if(!run)return;x.clearRect(0,0,c.width,c.height);for(const p of P){p.y-=p.v;if(p.y<0)p.y=c.height;x.fillStyle='rgba(240,207,110,.7)';x.shadowColor='#f0cf6e';x.shadowBlur=10;x.beginPath();x.arc(p.x,p.y,p.r,0,6.3);x.fill()}requestAnimationFrame(f)})();
let done=false;const end=()=>{if(done)return;done=true;sessionStorage.setItem('introSeen','1');el.classList.add('out');document.body.style.overflow='';setTimeout(()=>{run=false;el.hidden=true},1000)};
document.getElementById('skip').onclick=end;setTimeout(end,7500)})();
