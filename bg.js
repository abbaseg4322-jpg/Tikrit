// خلفية حية: جسيمات ذهبية + دوائر هندسية + parallax خفيف
(()=>{const c=document.getElementById('bg'),x=c.getContext('2d');let W,H,mx=0,my=0;
const P=[];const rs=()=>{W=c.width=innerWidth;H=c.height=innerHeight};rs();addEventListener('resize',rs);
const n=innerWidth<700?30:70;for(let i=0;i<n;i++)P.push({x:Math.random(),y:Math.random(),r:Math.random()*1.8+.4,s:Math.random()*.0004+.0001,t:Math.random()*6.3,d:Math.random()*20+5});
addEventListener('mousemove',e=>{mx=e.clientX/W-.5;my=e.clientY/H-.5});
if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
(function f(t){x.clearRect(0,0,W,H);x.strokeStyle='rgba(201,162,75,.09)';x.lineWidth=1.2;
for(let i=1;i<=4;i++){x.beginPath();x.arc(W*.75-mx*30*i,H*.3-my*30*i,90*i+Math.sin(t/3000+i)*8,0,6.3);x.stroke()}
x.strokeStyle='rgba(74,120,220,.12)';for(let i=0;i<3;i++){x.beginPath();for(let k=0;k<=W;k+=20)x.lineTo(k,H*(.5+i*.2)+Math.sin(k/150+t/2500+i)*30);x.stroke()}
for(const p of P){p.y-=p.s;if(p.y<0)p.y=1;const a=.35+.35*Math.sin(t/900+p.t);
x.fillStyle=`rgba(240,207,110,${a})`;x.shadowColor='#f0cf6e';x.shadowBlur=8;x.beginPath();x.arc(p.x*W-mx*p.d,p.y*H-my*p.d,p.r,0,6.3);x.fill()}
x.shadowBlur=0;requestAnimationFrame(f)})(0)})();
