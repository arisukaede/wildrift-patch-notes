(() => {
 'use strict';
 const patches = window.PATCHES;
 const $ = id => document.getElementById(id);
 const escape = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const date = value => new Intl.DateTimeFormat('id-ID', {day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(new Date(value+'T00:00:00Z'));
 const icons = {Buff:'↑',Nerf:'↓',Adjustment:'↔',Baru:'+'};
 const categories = ['Semua','Champion','Item','Rune','Gameplay','Mode','Lainnya'];
 let patch = patches[0], category = 'Semua', expanded = false;
 const openCards = new Set();
 const genericIcons = {Champion:'champion',Item:'item',Rune:'notes',Gameplay:'gameplay',Mode:'mode',Lainnya:'notes'};
 const assetAliases = {Aery:'Summon Aery'};
 const normalize = value => value.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]/g, '');
 function imageTag(file, fallback, className = '') {
  return `<img class="${className}" src="${escape(file)}" data-fallback="${escape(fallback)}" alt="" width="43" height="43" loading="lazy" decoding="async">`;
 }
 function avatar(change) {
  const fallback = `assets/ui/${genericIcons[change.category] || 'notes'}.svg`;
  const name = change.name.replace(' — Loadout','');
  const file = window.ASSETS?.[assetAliases[name] || name] || fallback;
  const label = file === fallback ? 'Ikon kategori; bukan artwork resmi entitas ini' : 'Ilustrasi aset LoL PC';
  return `<span class="avatar" title="${label}" aria-hidden="true">${imageTag(file,fallback)}</span>`;
 }
 $('changes').addEventListener('error', event => {
  const img=event.target;
  if (!(img instanceof HTMLImageElement)) return;
  if(img.dataset.fallback && img.getAttribute('src') !== img.dataset.fallback) img.src=img.dataset.fallback;
  else img.remove();
 }, true);
 function sectionIcon(change, section) {
  const entries=window.SKILL_ASSETS?.[change.name] || {};
  // Hwei's spell variants share their parent spell icon in Data Dragon.
  const parent = /^Subject: (Disaster|Serenity|Torment) —/.test(section) ? section.split(' — ')[0] : section;
  const match=Object.keys(entries).find(name=>normalize(name)===normalize(parent));
  const fallback='assets/ui/'+(/stat|serangan|modifier/i.test(section)?'stats':'notes')+'.svg';
  const file=match?entries[match]:(['Item','Rune'].includes(change.category)?window.ASSETS?.[assetAliases[change.name] || change.name]:null)||fallback;
  const title=match?(parent!==section?`Ikon ${parent}; varian tidak disediakan katalog`:'Ikon skill LoL PC'):'Ikon item atau kategori bagian';
  return `<span class="section-icon" title="${title}" aria-hidden="true">${imageTag(file,fallback)}</span>`;
 }
 function details(change) {
  let previous = null;
  return change.rows.map(row => {
   const heading = row.section && row.section !== previous ? `<h3 class="ability-heading">${sectionIcon(change,row.section)}<span>${escape(row.section)}</span></h3>` : '';
   previous = row.section;
   return heading + (row.text ? `<p class="mechanic-note">${escape(row.text)}</p>` : `<div class="stat-row"><div class="metric">${escape(row.label)}</div><div class="comparison"><div><small>SEBELUM</small><span>${escape(row.before)}</span></div><span aria-hidden="true">→</span><div><small>SESUDAH</small><span class="after">${escape(row.after)}</span></div></div></div>`);
  }).join('');
 }
 function syncExpandLabel() {
  const cards = [...$('changes').querySelectorAll('details')];
  expanded = cards.length > 0 && cards.every(c => c.open);
  $('expand').textContent = expanded ? 'Ringkas tampilan' : 'Lihat semua perubahan';
  $('expand').disabled = !cards.length;
 }
 function renderCards() {
  const query = $('search').value.trim().toLocaleLowerCase('id');
  const kind = $('kind').value;
  const visible = patch.changes.filter(c => (category === 'Semua' || c.category === category) && (kind === 'all' || c.kind === kind) && [c.name,c.category,c.kind,c.summary,...c.rows.flatMap(r=>Object.values(r))].join(' ').toLocaleLowerCase('id').includes(query));
  $('result-count').textContent = `${visible.length} dari ${patch.changes.length} entri · ${visible.reduce((n,c)=>n+c.rows.length,0)} perubahan`;
  $('changes').innerHTML = visible.length ? visible.map(c => `<details class="change" data-key="${escape(c.name)}" ${openCards.has(c.name) ? 'open' : ''}><summary>${avatar(c)}<span class="card-title"><strong>${escape(c.name)}</strong><small>${escape(c.category)} · ${c.rows.length} perubahan</small></span><span class="badge ${c.kind.toLowerCase()}">${icons[c.kind]} ${escape(c.kind)}</span><span class="chevron" aria-hidden="true">⌄</span></summary><div class="detail"><p class="card-summary">${escape(c.summary)}</p>${details(c)}<a class="card-source" href="${escape(patch.url)}" target="_blank" rel="noopener noreferrer">Rujukan: Wild Rift ${escape(patch.id)} ↗</a></div></details>`).join('') : '<div class="empty"><strong>Tidak ada perubahan yang cocok.</strong><p>Coba nama lain atau reset filter untuk melihat semua perubahan.</p></div>';
  $('changes').querySelectorAll('details').forEach(d => d.addEventListener('toggle',()=>{
   if (!d.isConnected) return;
   if(d.open)openCards.add(d.dataset.key);else openCards.delete(d.dataset.key);
   syncExpandLabel();
  }));
  $('categories').innerHTML = categories.filter(c => c === 'Semua' || patch.changes.some(x => x.category === c)).map(c => `<button type="button" data-category="${c}" aria-pressed="${category===c}">${c}</button>`).join('');
  syncExpandLabel();
 }
 function reset() { category='Semua'; $('search').value=''; $('kind').value='all'; renderCards(); }
 function renderPatch() {
  const id = new URLSearchParams(location.hash.slice(1)).get('patch');
  patch = patches.find(p => p.id===id) || patches[0];
  openCards.clear();
  // Show the first card's full breakdown immediately.
  if(patch.changes.length)openCards.add(patch.changes[0].name);
  $('archive').innerHTML = patches.map((p,i) => `<button class="patch-button" data-patch="${p.id}" aria-current="${patch===p}"><strong>${p.id}</strong><span><small>${date(p.date)}</small></span>${i===0?'<span class="mini">TERBARU<br>DI ARSIP</span>':''}</button>`).join('');
  $('patch-meta').textContent=`PATCH ${patch.id} / ${date(patch.date).toUpperCase()}`;
  $('hero-title').textContent=patch.title; $('description').textContent=patch.description;
  $('hero-number').textContent=patch.id; $('official').href=patch.url;
  $('coverage').textContent=patch.coverage;
  document.title=`Patch ${patch.id} — Rift / Notes`;
  $('overview').innerHTML=[['Perubahan',patch.changes.reduce((n,c)=>n+c.rows.length,0),''],['Buff',patch.changes.filter(c=>c.kind==='Buff').length,'buff'],['Nerf',patch.changes.filter(c=>c.kind==='Nerf').length,'nerf'],['Penyesuaian / baru',patch.changes.filter(c=>!['Buff','Nerf'].includes(c.kind)).length,'adjustment']].map(([name,count,cls])=>`<div class="stat"><strong class="${cls}">${String(count).padStart(2,'0')}</strong><span>${name}</span></div>`).join('');
  reset();
 }
 $('archive').addEventListener('click',e=>{const b=e.target.closest('[data-patch]');if(b)location.hash='patch='+b.dataset.patch;});
 $('categories').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(b){category=b.dataset.category;renderCards();$('categories').querySelector(`[data-category="${category}"]`).focus();}});
 $('search').addEventListener('input',renderCards); $('kind').addEventListener('change',renderCards); $('reset').addEventListener('click',reset);
 $('expand').addEventListener('click',()=>{
  const value=!expanded;
  $('changes').querySelectorAll('details').forEach(d=>{d.open=value;if(value)openCards.add(d.dataset.key);else openCards.delete(d.dataset.key);});
  syncExpandLabel();
 });
 function setTheme(value){document.documentElement.dataset.theme=value;$('theme').setAttribute('aria-label',`Ganti ke tema ${value==='light'?'gelap':'terang'}`);}
 try {setTheme(localStorage.getItem('rift-theme')==='light'?'light':'dark');}catch{setTheme('dark');}
 $('theme').addEventListener('click',()=>{const value=document.documentElement.dataset.theme==='light'?'dark':'light';setTheme(value);try{localStorage.setItem('rift-theme',value);}catch{}});
 document.addEventListener('keydown',e=>{if(e.key==='/'&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!document.activeElement.isContentEditable){e.preventDefault();$('search').focus();}});
 window.addEventListener('hashchange',renderPatch);renderPatch();
})();
