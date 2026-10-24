const L=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}},$=s=>document.querySelector(s);
let D=L('emk',[{id:1,b:'Merkezde 3+1 geniş daire',y:'Satılık',c:'Aydın',o:'3+1',q:140,f:3200000},{id:2,b:'Öğrenciye yakın 1+1',y:'Kiralık',c:'Aydın',o:'1+1',q:55,f:12000},{id:3,b:'Bahçeli müstakil ev',y:'Satılık',c:'Denizli',o:'4+1',q:210,f:5400000},{id:4,b:'Deniz manzaralı 2+1',y:'Kiralık',c:'İzmir',o:'2+1',q:95,f:28000}]);
const sv=()=>{try{localStorage.setItem('emk',JSON.stringify(D))}catch(e){}},e=s=>String(s).replace(/</g,'&lt;');
function R(){const t=$('#t').value,s=$('#s').value.toLowerCase(),m=+$('#m').value||1e12;
$('#g').innerHTML=D.filter(x=>(!t||x.y==t)&&x.c.toLowerCase().includes(s)&&x.f<=m).map(x=>`<div class="c"><div class="h ${x.y[0]}">${x.y.toUpperCase()} · ${e(x.c)}</div><div class="i"><h3>${e(x.b)}</h3>${e(x.o)} · ${x.q} m²<div class="p">${x.f.toLocaleString('tr-TR')} ₺${x.y=='Kiralık'?' /ay':''}</div><a onclick="del(${x.id})">İlanı kaldır</a></div></div>`).join('')||'<p>İlan bulunamadı.</p>'}
function add(){const b=$('#b').value.trim(),c=$('#c').value.trim(),f=+$('#f').value;if(!b||!c||!f)return alert('Başlık, şehir ve fiyat gerekli');
D.push({id:Date.now(),b,y:$('#y').value,c,o:$('#o').value||'-',q:+$('#q').value||0,f});['b','c','o','q','f'].forEach(i=>$('#'+i).value='');sv();R()}
function del(i){D=D.filter(x=>x.id!=i);sv();R()}
R();