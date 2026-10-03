"""Download version-pinned Data Dragon icons. Never imports gameplay statistics."""
import concurrent.futures as cf
import json, subprocess
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
VERSION='16.19.1'
BASE=f'https://ddragon.leagueoflegends.com/cdn/{VERSION}'
CACHE=ROOT/'assets/catalog'; CACHE.mkdir(parents=True,exist_ok=True)
def fetch(url,path):
 path.parent.mkdir(parents=True,exist_ok=True)
 if not path.exists():
  temp=path.with_suffix(path.suffix+'.part')
  subprocess.run(['curl','-fLsS','--retry','3','--max-time','45',url,'-o',str(temp)],check=True)
  temp.replace(path)
 return path
def data(name):
 p=fetch(f'{BASE}/data/en_US/{name}.json',CACHE/(name+'.json'))
 return json.loads(p.read_text())
champions=data('champion')['data']
with cf.ThreadPoolExecutor(max_workers=8) as pool:
 details=list(pool.map(lambda k:data('champion/'+k)['data'][k],champions))
items=data('item')['data']; summoners=data('summoner')['data']; profiles=data('profileicon')['data']; runes=data('runesReforged')
jobs={}; names={}; skills={}; catalog=[]; seen=set()
def add(category,key,name,url,file):
 jobs[file]=url
 token=(category,str(key),file)
 if token not in seen:
  catalog.append({'category':category,'id':str(key),'name':name,'file':file,'source':url});seen.add(token)
 return file
def img(category,key,name,image,remote):
 return add(category,key,name,f'{BASE}/img/{remote}/{image}',f'assets/{category}/{image}')
for c in details:
 names[c['name']]=img('champions',c['id'],c['name'],c['image']['full'],'champion')
 entries={}
 p=c['passive'];entries[p['name']]=img('passive',c['id'],p['name'],p['image']['full'],'passive')
 for spell in c['spells']:
  entries[spell['name']]=img('spells',spell['id'],spell['name'],spell['image']['full'],'spell')
 skills[c['name']]=entries
# Prefer the standard item ID where mode-specific names collide.
for key,item in sorted(items.items(),key=lambda kv:int(kv[0]),reverse=True):
 names[item['name']]=img('items',key,item['name'],item['image']['full'],'item')
for key,spell in summoners.items():
 names[spell['name']]=img('summoner',key,spell['name'],spell['image']['full'],'spell')
for key,p in profiles.items():img('profileicon',key,'Profile '+key,p['image']['full'],'profileicon')
for tree in runes:
 for r in [tree]+[r for slot in tree['slots'] for r in slot['runes']]:
  names[r['name']]=add('runes',r['id'],r['name'],'https://ddragon.leagueoflegends.com/cdn/img/'+r['icon'],'assets/runes/'+Path(r['icon']).name)
# Sprite sheets referenced by every downloaded icon catalog.
for obj in list(champions.values())+list(items.values())+list(summoners.values())+list(profiles.values())+[x for c in details for x in [c['passive']]+c['spells']]:
 sprite=obj.get('image',{}).get('sprite')
 if sprite:add('sprite',sprite,sprite,f'{BASE}/img/sprite/{sprite}','assets/sprite/'+sprite)
print('Catalog:',len(details),'champions;',len(jobs),'unique icon/sprite files',flush=True)
def download(pair):
 file,url=pair;p=fetch(url,ROOT/file);b=p.read_bytes()
 if not b.startswith(b'\x89PNG\r\n\x1a\n'):raise ValueError('Not PNG: '+file)
 return file
with cf.ThreadPoolExecutor(max_workers=12) as pool:
 for i,_ in enumerate(pool.map(download,jobs.items()),1):
  if i%250==0:print('Downloaded/verified',i,'/',len(jobs),flush=True)
# Keep explicit mappings chosen for existing cards.
previous=json.loads((ROOT/'assets/manifest.json').read_text())
for name,a in previous.get('assets',{}).items():names[name]=a['file']
manifest={'provider':'Riot Data Dragon — image assets only','version':VERSION,'files':catalog,'uniqueFiles':len(jobs),'bytes':sum((ROOT/f).stat().st_size for f in jobs)}
(ROOT/'assets/library.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
(ROOT/'assets.js').write_text('window.ASSETS = '+json.dumps(names,ensure_ascii=False,indent=2)+';\nwindow.SKILL_ASSETS = '+json.dumps(skills,ensure_ascii=False,indent=2)+';\n')
(ROOT/'assets/library.js').write_text('window.ICON_LIBRARY = '+json.dumps(manifest,ensure_ascii=False)+';\n')
print('DONE',manifest['uniqueFiles'],'files;',round(manifest['bytes']/1024/1024,1),'MiB',flush=True)
