(() => {
 const $=id=>document.getElementById(id), library=window.ICON_LIBRARY;
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let page=0;const size=72;
 const labels={champions:'Champion',items:'Item',spells:'Skill aktif',passive:'Skill pasif',summoner:'Summoner spell',runes:'Rune',profileicon:'Profile icon',sprite:'Sprite sheet'};
 $('library-info').textContent=`Data Dragon ${library.version} · ${library.uniqueFiles.toLocaleString('id-ID')} file unik · ${(library.bytes/1024/1024).toFixed(1)} MiB`;
 Object.entries(labels).forEach(([key,name])=>{const o=document.createElement('option');o.value=key;o.textContent=name;$('asset-category').append(o);});
 function render(){
  const q=$('asset-search').value.trim().toLowerCase(),cat=$('asset-category').value;
  const matches=library.files.filter(x=>(cat==='all'||x.category===cat)&&`${x.name} ${x.id}`.toLowerCase().includes(q));
  const pages=Math.max(1,Math.ceil(matches.length/size));page=Math.min(page,pages-1);
  $('asset-count').textContent=`${matches.length.toLocaleString('id-ID')} entri cocok; beberapa entri bisa memakai gambar yang sama.`;
  $('icon-grid').innerHTML=matches.slice(page*size,(page+1)*size).map(x=>`<article class="icon-tile"><a href="${esc(x.file)}" aria-label="Buka ikon ${esc(x.name)}"><img src="${esc(x.file)}" alt="" loading="lazy" width="64" height="64"></a><strong>${esc(x.name)}</strong><small>${esc(labels[x.category]||x.category)} · ${esc(x.id)}</small></article>`).join('')||'<p>Tidak ada ikon yang cocok.</p>';
  $('page-count').textContent=`${page+1} / ${pages}`;$('prev').disabled=page===0;$('next').disabled=page>=pages-1;
 }
 $('asset-search').addEventListener('input',()=>{page=0;render();});$('asset-category').addEventListener('change',()=>{page=0;render();});
 $('prev').onclick=()=>{page--;render();};$('next').onclick=()=>{page++;render();};render();
})();
