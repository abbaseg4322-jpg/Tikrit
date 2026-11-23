const $=s=>document.querySelector(s),D=d=>d.replaceAll('-','/');
const logo='logo.jpg';
$('#nav').innerHTML='<a href="#">الرئيسية</a>'+CATS.map((c,i)=>`<a href="#c${i}">${c}</a>`).join('');
$('#brk').innerHTML=[...BREAKING,...BREAKING].map(t=>`<span>${t}</span>`).join('');
const card=a=>`<a class="card" href="#a${a.id}"><div class="thumb ph"><img src="${logo}" alt=""></div><div class="cbody"><span class="tag">${CATS[a.cat]}</span><h3>${a.title}</h3><time>${D(a.date)}</time></div></a>`;
function route(){const h=location.hash,m=$('#main');scrollTo(0,0);document.body.classList.remove('nav-open');
 if(h[1]==='a'){const a=ARTS.find(x=>x.id==h.slice(2));if(a)return m.innerHTML=`<article class="article"><span class="tag">${CATS[a.cat]}</span><h1>${a.title}</h1><p class="meta">${D(a.date)}</p><p class="lead">${a.summary}</p><div class="body">${a.body.replaceAll('\n','<br>')}</div></article>`}
 if(h[1]==='c'){const i=+h.slice(2);const r=ARTS.filter(x=>x.cat===i);return m.innerHTML=`<h1 class="sec big">${CATS[i]}</h1><div class="grid">${r.map(card).join('')||'<p class="empty">لا توجد مواد بعد.</p>'}</div>`}
 const f=ARTS[1],rest=[...ARTS].sort((a,b)=>b.date<a.date?-1:1).filter(x=>x!==f).slice(0,8);
 m.innerHTML=`<section class="hero"><a href="#a${f.id}" class="hero-card"><img src="${logo}" style="object-fit:contain;padding:30px" alt=""><div class="hero-txt"><span class="tag">${CATS[f.cat]}</span><h1>${f.title}</h1><p>${f.summary}</p></div></a></section><h2 class="sec">أحدث الأخبار</h2><div class="grid">${rest.map(card).join('')}</div>`+
 CATS.map((c,i)=>{const r=ARTS.filter(x=>x.cat===i);return r.length?`<h2 class="sec"><a href="#c${i}">${c}</a></h2><div class="grid">${r.slice(0,4).map(card).join('')}</div>`:''}).join('')}
addEventListener('hashchange',route);route();
