// Statistik dari patch notes Wild Rift; gambar diatur terpisah.
window.PATCHES = [
  
{
  "id": "7.3d",
  "date": "2026-10-28",
  "title": "Balance baru untuk Rift.",
  "description": "Shyvana, Akali, Lee Sin, dan champion lainnya mendapat penyesuaian. Item, Baron, turret, dan AAA ARAM juga diperbarui.",
  "url": "https://wildrift.leagueoflegends.com/en-us/news/game-updates/wild-rift-patch-notes-7-3d/",
  "coverage": "Perubahan champion, item, gameplay, augment AAA ARAM, dan update skin K/DA Ahri dari artikel resmi. Penjelasan diringkas dalam Bahasa Indonesia.",
  "complete": true,
  "changes": [
    {
      "name": "Shyvana",
      "category": "Champion",
      "kind": "Adjustment",
      "summary": "Stat pertumbuhan dan cooldown skill diperbaiki untuk memperkuat early game. Sebagai kompensasi, beberapa efek dan omnivamp bentuk naga dikurangi.",
      "rows": [
        {"section":"Stat dasar","label":"Health per level","before":"120","after":"130"},
        {"section":"Stat dasar","label":"Health Regen per level","before":"9","after":"12"},
        {"section":"Stat dasar","label":"Attack Speed per level","before":"0.012","after":"0.024"},
        {"section":"Twin Bite","label":"Cooldown","before":"8.5/7.5/6.5/5.5 detik","after":"7/6.5/6/5.5 detik"},
        {"section":"Burnout","label":"Cooldown","before":"13/12/11/10 detik","after":"12/11/10/9 detik"},
        {"section":"Burnout","label":"Bonus Movement Speed Wings of the Cloud","before":"25%","after":"15%"},
        {"section":"Flame Breath","label":"Cooldown","before":"11/10/9/8 detik","after":"10/9/8/7 detik"},
        {"section":"Flame Breath","text":"Rasio damage bentuk manusia: 30% AD + 40% AP menjadi 50% AD + 80% AP."},
        {"section":"Flame Breath","text":"Rasio damage ledakan Dragon Form: 50% AD + 70% AP menjadi 100% AD + 100% AP."},
        {"section":"Flame Breath","label":"Rasio AD scorched earth Dragon Form","before":"10%","after":"15%"},
        {"section":"Dragon's Descent","label":"Omnivamp Life of the Ocean","before":"20%","after":"10%"}
      ]
    },
    {
      "name": "Camille",
      "category": "Champion",
      "kind": "Buff",
      "summary": "Pertumbuhan attack speed ditingkatkan untuk membuat combo lebih lancar.",
      "rows": [
        {"section":"Stat dasar","label":"Attack Speed per level","before":"0.016","after":"0.028"}
      ]
    },
    {
      "name": "Malphite",
      "category": "Champion",
      "kind": "Nerf",
      "summary": "Shield, damage dasar serangan pertama W, dan scaling armor W dikurangi.",
      "rows": [
        {"section":"Granite Shield","label":"Rasio health maksimum","before":"11%","after":"10%"},
        {"section":"Thunderclap","label":"Damage dasar serangan pertama","before":"40/60/80/100","after":"30/45/60/75"},
        {"section":"Thunderclap","label":"Rasio armor serangan pertama","before":"30%","after":"20%"}
      ]
    },
    {
      "name": "Ekko",
      "category": "Champion",
      "kind": "Nerf",
      "summary": "Damage pasif dan Q terhadap monster jungle dikurangi untuk menekan kecepatan snowball.",
      "rows": [
        {"section":"Z-Drive Resonance","label":"Modifier damage terhadap monster","before":"120%","after":"110%"},
        {"section":"Timewinder","label":"Modifier damage terhadap monster","before":"115%","after":"100%"}
      ]
    },
    {
      "name": "Lee Sin",
      "category": "Champion",
      "kind": "Buff",
      "summary": "Pertumbuhan attack speed dan damage dasar ultimate ditingkatkan.",
      "rows": [
        {"section":"Stat dasar","label":"Attack Speed per level","before":"0.02","after":"0.04"},
        {"section":"Dragon's Rage","label":"Damage dasar","before":"125/350/575","after":"150/375/600"}
      ]
    },
    {
      "name": "Akali",
      "category": "Champion",
      "kind": "Buff",
      "summary": "Armor dasar dan pertumbuhan attack speed ditingkatkan untuk memperkuat laning dan kelancaran combo.",
      "rows": [
        {"section":"Stat dasar","label":"Attack Speed per level","before":"0.02","after":"0.04"},
        {"section":"Stat dasar","label":"Armor","before":"34","after":"37"}
      ]
    },
    {
      "name": "Nasus",
      "category": "Champion",
      "kind": "Adjustment",
      "summary": "AD dasar dan pertahanan ultimate meningkat, tetapi damage Spirit Fire dikurangi untuk menekan waveclear Mid Lane.",
      "rows": [
        {"section":"Stat dasar","label":"Attack Damage","before":"58","after":"62"},
        {"section":"Spirit Fire","label":"Damage dasar","before":"55/110/165/220","after":"50/90/130/170"},
        {"section":"Fury of the Sands","label":"Armor dan Magic Resistance","before":"40/50/60","after":"40/55/70"}
      ]
    },
    {
      "name": "Samira",
      "category": "Champion",
      "kind": "Nerf",
      "summary": "Sebagian peningkatan rasio AD dari patch sebelumnya dikurangi.",
      "rows": [
        {"section":"Flair","label":"Rasio AD","before":"125%","after":"115%"},
        {"section":"Inferno Trigger","label":"Rasio AD per tembakan","before":"50%","after":"45%"}
      ]
    },
    {
      "name": "Ashe",
      "category": "Champion",
      "kind": "Nerf",
      "summary": "Bonus damage basic attack dari Frost Shot dikurangi untuk menekan dominasi Dragon Lane.",
      "rows": [
        {"section":"Frost Shot","label":"Bonus damage basic attack berdasarkan stat critical","before":"0–130%","after":"0–123.5%"}
      ]
    },
    {
      "name": "Miss Fortune",
      "category": "Champion",
      "kind": "Buff",
      "summary": "Love Tap dan damage critical ultimate ditingkatkan untuk memperbaiki performanya setelah perubahan item marksman.",
      "rows": [
        {"section":"Love Tap","label":"Bonus Attack Damage Multiplier","before":"40%","after":"50%"},
        {"section":"Bullet Time","label":"Critical Strike Damage berdasarkan stat critical","before":"130%–139%","after":"135%–145.5%"}
      ]
    },
    {
      "name": "Singed",
      "category": "Champion",
      "kind": "Nerf",
      "summary": "Health, movement speed, dan cooldown skill dikurangi performanya untuk menekan kekuatan laning serta teamfight.",
      "rows": [
        {"section":"Stat dasar","label":"Health","before":"690","after":"660"},
        {"section":"Stat dasar","label":"Movement Speed","before":"355","after":"350"},
        {"section":"Mega Adhesive","label":"Cooldown","before":"11 detik","after":"14/13/12/11 detik"},
        {"section":"Fling","label":"Cooldown","before":"12 detik","after":"13 detik"}
      ]
    },
    {
      "name": "Fiendhunter Bolts",
      "category": "Item",
      "kind": "Buff",
      "summary": "Critical damage normal dan true damage Opening Barrage ditingkatkan.",
      "rows": [
        {"section":"Opening Barrage","label":"Normal Critical Strike Damage","before":"80%","after":"85%"},
        {"section":"Opening Barrage","label":"True Damage","before":"15%","after":"17.5%"}
      ]
    },
    {
      "name": "Divine Sunderer",
      "category": "Item",
      "kind": "Buff",
      "summary": "Harga diturunkan agar power spike lebih cepat tercapai.",
      "rows": [
        {"section":"Stat dasar","label":"Harga (gold)","before":"3400","after":"3300"}
      ]
    },
    {
      "name": "Essence Reaver",
      "category": "Item",
      "kind": "Buff",
      "summary": "Attack Damage ditingkatkan untuk membantu item lebih kompetitif.",
      "rows": [
        {"section":"Stat dasar","label":"Attack Damage","before":"50","after":"55"}
      ]
    },
    {
      "name": "Whispering Circlet",
      "category": "Item",
      "kind": "Nerf",
      "summary": "Healing dan Shield Power dasar dikurangi.",
      "rows": [
        {"section":"Stat dasar","label":"Heal and Shield Power","before":"8%","after":"6%"}
      ]
    },
    {
      "name": "Diadem of Songs",
      "category": "Item",
      "kind": "Nerf",
      "summary": "Healing dan Shield Power dasar dikurangi.",
      "rows": [
        {"section":"Stat dasar","label":"Heal and Shield Power","before":"8%","after":"6%"}
      ]
    },
    {
      "name": "Stormrazor",
      "category": "Item",
      "kind": "Nerf",
      "summary": "Damage dan movement speed Bolt dikurangi untuk mengurangi kemampuan kiting marksman.",
      "rows": [
        {"section":"Bolt","label":"Damage","before":"120","after":"100"},
        {"section":"Bolt","label":"Movement Speed","before":"45%","after":"35%"}
      ]
    },
    {
      "name": "Baron Nashor",
      "category": "Gameplay",
      "kind": "Buff",
      "summary": "Hand of Baron memperkuat kemampuan minion untuk melakukan push dengan mengurangi damage yang mereka terima.",
      "rows": [
        {"section":"Hand of Baron","label":"Damage reduction minion melee/caster terhadap champion","before":"50–70%","after":"55–75%"},
        {"section":"Hand of Baron","label":"Damage reduction cannon/siege minion terhadap champion","before":"30%","after":"35%"},
        {"section":"Hand of Baron","label":"Damage reduction minion melee terhadap minion lain","before":"80%","after":"90%"},
        {"section":"Hand of Baron","label":"Damage reduction minion lain terhadap minion lain (kecuali Super Minion)","before":"20%","after":"25%"},
        {"section":"Hand of Baron","label":"Damage reduction minion terhadap turret (kecuali Super Minion)","before":"25%","after":"30%"}
      ]
    },
    {
      "name": "Minion Push Advantage",
      "category": "Gameplay",
      "kind": "Buff",
      "summary": "Damage reduction minion ketika tim unggul ditingkatkan agar keunggulan tim lebih mudah dikonversi menjadi push.",
      "rows": [
        {"section":"Minion","text":"Damage reduction terhadap minion ditingkatkan. Artikel tidak mencantumkan angka baru secara eksplisit."}
      ]
    },
    {
      "name": "Turret",
      "category": "Gameplay",
      "kind": "Adjustment",
      "summary": "Scaling damage turret dari serangan beruntun dikurangi agar dive early game lebih memungkinkan.",
      "rows": [
        {"section":"Serangan beruntun","label":"Damage multiplier","before":"100%/150%/215%/300%","after":"100%/150%/210%/270%"}
      ]
    },
    {
      "name": "Violet Toxin",
      "category": "Mode",
      "kind": "Nerf",
      "summary": "AAA ARAM · Damage on-hit dikurangi.",
      "rows": [
        {"section":"Augment","label":"On-hit Damage","before":"40–80 + 40% bonus AD + 10% AP","after":"20–40 + 40% bonus AD + 10% AP"}
      ]
    },
    {
      "name": "Chromacrash Series",
      "category": "Mode",
      "kind": "Nerf",
      "summary": "AAA ARAM · Damage per detik dikurangi.",
      "rows": [
        {"section":"Augment","label":"Damage per detik","before":"10–20 + 30% bonus AD + 15% AP","after":"5–12 + 30% bonus AD + 10% AP"}
      ]
    },
    {
      "name": "Rhythm Hunter",
      "category": "Mode",
      "kind": "Nerf",
      "summary": "AAA ARAM · Steelbuff yang diperoleh per stack dikurangi.",
      "rows": [
        {"section":"Augment","label":"Steelbuff per stack","before":"8","after":"6"}
      ]
    },
    {
      "name": "Red-Blue Remix",
      "category": "Mode",
      "kind": "Adjustment",
      "summary": "AAA ARAM · Batas stack maksimum per menit meningkat.",
      "rows": [
        {"section":"Augment","label":"Stack maksimum per menit","before":"60","after":"75"}
      ]
    },
    {
      "name": "Transmissible Agents",
      "category": "Mode",
      "kind": "Nerf",
      "summary": "AAA ARAM · Healing dan shielding yang ditransmisikan dikurangi.",
      "rows": [
        {"section":"Augment","label":"Transmissible Healing and Shielding","before":"50%","after":"40%"}
      ]
    },
    {
      "name": "Crimson Burst",
      "category": "Mode",
      "kind": "Buff",
      "summary": "AAA ARAM · Cooldown lebih singkat sehingga augment bisa dipicu lebih sering.",
      "rows": [
        {"section":"Augment","label":"Cooldown","before":"5 detik","after":"4 detik"}
      ]
    },
    {
      "name": "K/DA Ahri Skin Updates",
      "category": "Lainnya",
      "kind": "Adjustment",
      "summary": "Update visual untuk K/DA Lumen Ahri, K/DA Lollipop Ahri, dan K/DA Gilded Ahri berdasarkan feedback pemain.",
      "rows": [
        {"section":"Visual","text":"Penyesuaian fitur wajah, gestur, dan bayangan pada splash art serta turntable ketiga skin."}
      ]
    }
  ]
},
  {
    "id": "7.3b",
    "date": "2026-10-14",
    "title": "Balance baru untuk Rift.",
    "description": "Champion, item, rune, jungle, dan AAA ARAM mendapat penyesuaian di patch 7.3b.",
    "url": "https://wildrift.leagueoflegends.com/en-us/news/game-updates/wild-rift-patch-notes-7-3b/",
    "coverage": "Seluruh perubahan gameplay dari artikel resmi: champion, item, rune, jungle, dan AAA ARAM. Penjelasan diringkas dalam Bahasa Indonesia.",
    "complete": true,
    "changes": [
      {"name":"Volibear","category":"Champion","kind":"Buff","summary":"Scaling AD pada W meningkat dan heal W empowered lebih besar ketika health Volibear menipis.","rows":[
        {"section":"Frenzied Maul","label":"Rasio Attack Damage","before":"100%","after":"110%"},
        {"section":"Frenzied Maul","label":"Rasio Attack Damage empowered","before":"160%","after":"176%"},
        {"section":"Frenzied Maul","label":"Heal empowered berdasarkan missing health","before":"5/6/7/8%","after":"5/8/11/14%"}
      ]},
      {"name":"Jhin","category":"Champion","kind":"Buff","summary":"Critical damage naik dan bonus damage pada target dengan health rendah mencapai nilai maksimum lebih cepat.","rows":[
        {"section":"Whisper","label":"Standard Critical Strike Damage","before":"80%","after":"85%"},
        {"section":"Whisper","label":"Damage berdasarkan missing health","before":"11%–25% (maks. level 15)","after":"11.5%–25% (maks. level 10)"}
      ]},
      {"name":"Tryndamere","category":"Champion","kind":"Buff","summary":"Critical chance dari Fury dibuat tetap dan E mendapat damage dasar serta scaling bonus AD lebih tinggi.","rows":[
        {"section":"Battle Fury","label":"Critical Strike Chance per Fury","before":"0.3%–0.5% (berdasarkan level)","after":"0.5%"},
        {"section":"Spinning Slash","label":"Damage","before":"80/120/160/200 + 100% bonus AD + 80% AP","after":"80/130/180/230 + 110% bonus AD + 80% AP"}
      ]},
      {"name":"Hwei","category":"Champion","kind":"Nerf","summary":"Damage pasif, shield, damage W, serta jangkauan dan damage E dikurangi untuk membuka lebih banyak ruang melawan Hwei.","rows":[
        {"section":"Signature of the Visionary","label":"Damage (berdasarkan level)","before":"40–285 + 30% AP","after":"30–280 + 25% AP"},
        {"section":"Subject: Serenity — Pool of Reflection","label":"Shield awal","before":"60/80/100/120 + 35% AP","after":"50/70/90/110 + 30% AP"},
        {"section":"Subject: Serenity — Pool of Reflection","label":"Shield maksimum","before":"108/128/148/168 + 71% AP","after":"98/118/138/158 + 60% AP"},
        {"section":"Subject: Serenity — Stirring Lights","label":"Bonus damage dasar","before":"30/40/50/60","after":"20/30/40/50"},
        {"section":"Subject: Torment — Crushing Maw","label":"Jangkauan cast","before":"7.5","after":"7"},
        {"section":"Subject: Torment — Crushing Maw","label":"Damage","before":"70/120/170/220 + 70% AP","after":"60/110/160/210 + 60% AP"},
        {"section":"Subject: Torment — Crushing Maw","text":"Hitbox rahang dioptimalkan oleh Riot."}
      ]},
      {"name":"Nocturne","category":"Champion","kind":"Nerf","summary":"Durability awal, damage Q, dan frekuensi ultimate diturunkan untuk mengurangi clear jungle dan potensi pick-off.","rows":[
        {"section":"Stat dasar","label":"Health per level","before":"134","after":"128"},
        {"section":"Duskbringer","label":"Attack Damage","before":"20/30/40/50","after":"10/25/40/55"},
        {"section":"Duskbringer","label":"Damage dasar","before":"70/125/180/235","after":"60/115/170/225"},
        {"section":"Paranoia","label":"Cooldown","before":"110/90/70 detik","after":"120/100/80 detik"}
      ]},
      {"name":"Yunara","category":"Champion","kind":"Nerf","summary":"Damage pasif dan aktif Q berkurang; cooldown ultimate lebih panjang pada level awal dan menengah.","rows":[
        {"section":"Cultivation of Spirit","label":"Damage pasif","before":"10/15/20/25","after":"5/10/15/20"},
        {"section":"Cultivation of Spirit","label":"Damage aktif","before":"10/15/20/25","after":"5/10/15/20"},
        {"section":"Transcend One's Self","label":"Cooldown","before":"70/60/50 detik","after":"70/65/60 detik"}
      ]},
      {"name":"Senna","category":"Champion","kind":"Nerf","summary":"Scaling critical, AD dari Black Mist, dan damage dasar Q diturunkan untuk menekan kekuatannya.","rows":[
        {"section":"Absolution","label":"Standard Critical Strike Damage","before":"90%","after":"80%"},
        {"section":"Absolution","label":"Attack Damage per Black Mist stack","before":"1.25","after":"0.9"},
        {"section":"Piercing Darkness","label":"Damage dasar","before":"50/80/110/140","after":"30/60/90/120"}
      ]},
      {"name":"Yasuo","category":"Champion","kind":"Buff","summary":"Critical damage dan shield pasif pada level tinggi meningkat agar Yasuo lebih kuat di pertarungan menengah hingga akhir.","rows":[
        {"section":"Way of the Wanderer","label":"Standard Critical Strike Damage","before":"90%","after":"95%"},
        {"section":"Way of the Wanderer","label":"Nilai shield (berdasarkan level)","before":"77–529","after":"77–630"}
      ]},
      {"name":"Youmuu's Ghostblade","category":"Item","kind":"Buff","summary":"Harga lebih murah, membantu assassin mencapai power spike lebih cepat.","rows":[{"section":"Stat dasar","label":"Harga (gold)","before":"3000","after":"2900"}]},
      {"name":"Locket of the Iron Solari","category":"Item","kind":"Buff","summary":"Lebih murah dan memberi lebih banyak health untuk mendukung tank support.","rows":[
        {"section":"Stat dasar","label":"Harga (gold)","before":"2600","after":"2500"},
        {"section":"Stat dasar","label":"Health","before":"200","after":"300"}
      ]},
      {"name":"Thornmail","category":"Item","kind":"Nerf","summary":"Harga naik untuk memperlambat akses tank ke armor dan Grievous Wounds.","rows":[{"section":"Stat dasar","label":"Harga (gold)","before":"2700","after":"2850"}]},
      {"name":"Warmog's Armor","category":"Item","kind":"Nerf","summary":"Ambang pasif Warmog's Heart naik agar item ini kurang menarik bagi enchanter dan tetap relevan untuk tank.","rows":[{"section":"Warmog's Heart","label":"Ambang aktivasi","before":"900","after":"1250"}]},
      {"name":"Statikk Shiv","category":"Item","kind":"Buff","summary":"Harga turun dan serangan memberi lebih banyak Energized stack.","rows":[
        {"section":"Stat dasar","label":"Harga (gold)","before":"3000","after":"2900"},
        {"section":"Energized","label":"Stack tambahan per serangan","before":"5","after":"7"}
      ]},
      {"name":"Yun Tal Wildarrows","category":"Item","kind":"Buff","summary":"Harga turun agar pengguna item ini bisa mencapai power spike lebih cepat.","rows":[{"section":"Stat dasar","label":"Harga (gold)","before":"3100","after":"3000"}]},
      {"name":"Electrocute","category":"Rune","kind":"Buff","summary":"Damage awal naik, sementara damage maksimum dan scaling tetap sama.","rows":[{"section":"Rune","label":"Damage (berdasarkan level)","before":"40–210 + 10% bonus AD + 5% AP","after":"60–210 + 10% bonus AD + 5% AP"}]},
      {"name":"Cheap Shot","category":"Rune","kind":"Buff","summary":"Cooldown lebih singkat sehingga rune dapat aktif lebih sering.","rows":[{"section":"Rune","label":"Cooldown","before":"7 detik","after":"5 detik"}]},
      {"name":"Grasp of the Undying","category":"Rune","kind":"Nerf","summary":"Damage laning dan pertumbuhan health dikurangi agar tidak terlalu unggul dibanding Conqueror.","rows":[
        {"section":"Rune","label":"Damage","before":"3.3% health maksimum","after":"3% health maksimum"},
        {"section":"Rune","label":"Pertumbuhan health maksimum","before":"10","after":"8"}
      ]},
      {"name":"Aery","category":"Rune","kind":"Nerf","summary":"Shield late game dikurangi setelah item support baru membuatnya lebih mudah dipicu.","rows":[{"section":"Rune","label":"Nilai shield (berdasarkan level)","before":"25–120 + 10% bonus AD + 5% AP","after":"20–100 + 10% bonus AD + 5% AP"}]},
      {"name":"Crimson Raptor","category":"Gameplay","kind":"Nerf","summary":"Raptor besar lebih sulit dibersihkan pada mid hingga late game.","rows":[
        {"section":"Jungle monster","label":"Health dasar","before":"1000","after":"1100"},
        {"section":"Jungle monster","label":"Health per level","before":"110","after":"125"}
      ]},
      {"name":"Raptor","category":"Gameplay","kind":"Nerf","summary":"Raptor kecil juga mendapat tambahan health untuk memperlambat clear camp.","rows":[
        {"section":"Jungle monster","label":"Health dasar","before":"500","after":"550"},
        {"section":"Jungle monster","label":"Health per level","before":"55","after":"65"}
      ]},
      {"name":"Soothing Slipstream","category":"Mode","kind":"Nerf","summary":"AAA ARAM · Efek heal diturunkan.","rows":[{"section":"Augment","label":"Healing effects","before":"1.5% health maksimum","after":"1% health maksimum"}]},
      {"name":"Rock Solid","category":"Mode","kind":"Nerf","summary":"AAA ARAM · Pengurangan damage berkurang di seluruh level.","rows":[{"section":"Augment","label":"Damage reduction (berdasarkan level)","before":"3.75–14.25","after":"3.5–10.5"}]},
      {"name":"Poro Head","category":"Mode","kind":"Nerf","summary":"AAA ARAM · Ketahanan dan pengurangan true damage berkurang.","rows":[
        {"section":"Augment","label":"Damage reduction (berdasarkan level)","before":"3–15","after":"3–12"},
        {"section":"Augment","label":"Reduced true damage","before":"50%","after":"40%"}
      ]},
      {"name":"Origin: Lethal Tempo","category":"Mode","kind":"Nerf","summary":"AAA ARAM · Attack speed per stack dan bonus range maksimal diturunkan.","rows":[
        {"section":"Augment","label":"Attack speed per stack","before":"9%","after":"6%"},
        {"section":"Augment","label":"Attack range pada stack maksimum","before":"50","after":"25"}
      ]},
      {"name":"Eureka","category":"Mode","kind":"Nerf","summary":"AAA ARAM · Konversi bonus AD dan AP menjadi Ability Haste berkurang.","rows":[{"section":"Augment","label":"Ability Haste","before":"25% bonus AD + 12% AP","after":"20% bonus AD + 10% AP"}]},
      {"name":"Upgrade Sword of Blossoming Dawn","category":"Mode","kind":"Buff","summary":"AAA ARAM · Damage serangan dasar yang dikonversi menjadi heal meningkat.","rows":[{"section":"Augment","label":"Rasio konversi reduced basic Attack Damage ke healing","before":"100%","after":"300%"}]},
      {"name":"Bigger and Bigger","category":"Mode","kind":"Buff","summary":"AAA ARAM · Kontribusi takedown memberi lebih banyak health.","rows":[{"section":"Augment","label":"Bonus health per partisipasi takedown","before":"15","after":"30"}]},
      {"name":"Goliath","category":"Mode","kind":"Buff","summary":"AAA ARAM · Bonus health meningkat.","rows":[{"section":"Augment","label":"Bonus health didapat","before":"20%","after":"30%"}]},
      {"name":"Fast and Furious","category":"Mode","kind":"Buff","summary":"AAA ARAM · Critical strike memberi movement speed dan attack speed lebih besar.","rows":[{"section":"Augment","label":"Movement speed dan attack speed dari critical strike","before":"15%","after":"25%"}]},
      {"name":"Bug fixes & lainnya","category":"Lainnya","kind":"Adjustment","summary":"Perbaikan yang disebutkan dalam patch 7.3b.","rows":[
        {"section":"Yun Tal Wildarrows","text":"Memperbaiki efek attack speed yang kadang aktif secara tidak benar."},
        {"section":"Yordle Snap Trap","text":"Memperbaiki bug saat aktivasi yang mengurangi armor dan magic resist."},
        {"section":"Deskripsi dan jangkauan","text":"Memperbaiki deskripsi ability (1) Smolder serta cast range ability (1) Veigar."},
        {"section":"Guild Leaderboard","text":"Perhitungan poin kini memakai nilai pukul 23:55 setiap Minggu, lalu leaderboard diperbarui pukul 00:00."}
      ]}
    ]
  },
  {
    "id": "7.3a",
    "date": "2026-09-29",
    "title": "Buff, nerf, dan penyesuaian terbaru.",
    "description": "Seluruh perubahan balance 7.3a dalam satu tempat. Baca per skill, bandingkan angka, lalu kembali ke Rift.",
    "url": "https://wildrift.leagueoflegends.com/en-us/news/game-updates/wild-rift-patch-notes-7-3a/",
    "changes": [
      {
        "name": "Hwei",
        "category": "Champion",
        "kind": "Nerf",
        "summary": "Damage pasif, dua varian Q, dan ledakan ultimate disesuaikan. Scaling AP yang lebih rendah mengurangi kekuatan kombo Hwei.",
        "rows": [
          {
            "section": "Signature of the Visionary",
            "label": "Damage (berdasarkan level)",
            "before": "33–333 + 33% AP",
            "after": "40–285 + 30% AP"
          },
          {
            "section": "Subject: Disaster — Devastating Fire",
            "label": "Damage",
            "before": "50/90/130/170 + 75% AP + 4%/5%/6%/7% health maksimum",
            "after": "50/85/120/155 + 70% AP + 4%/5%/6%/7% health maksimum"
          },
          {
            "section": "Subject: Disaster — Severing Bolt",
            "label": "Rasio damage berdasarkan health yang hilang",
            "before": "150%/200%/250%/300%",
            "after": "100%/150%/200%/250%"
          },
          {
            "section": "Spiraling Despair",
            "label": "Damage ledakan",
            "before": "250/350/450 + 75% AP",
            "after": "200/300/400 + 70% AP"
          }
        ]
      },
      {
        "name": "Samira",
        "category": "Champion",
        "kind": "Buff",
        "summary": "Pertumbuhan pertahanan meningkat. Pasif melee, Flair, dan ultimate juga mendapat tambahan damage untuk pertarungan jarak dekat.",
        "rows": [
          {
            "section": "Stat dasar",
            "label": "Health per level",
            "before": "128",
            "after": "136"
          },
          {
            "section": "Stat dasar",
            "label": "Armor per level",
            "before": "5",
            "after": "5.5"
          },
          {
            "section": "Stat dasar",
            "label": "Magic resist per level",
            "before": "1.4",
            "after": "2"
          },
          {
            "section": "Daredevil Impulse",
            "label": "Rasio AD minimum damage melee (berdasarkan level)",
            "before": "3.5%–10.5%",
            "after": "5.8%–17%"
          },
          {
            "section": "Daredevil Impulse",
            "label": "Rasio AD maksimum damage melee (berdasarkan level)",
            "before": "7%–21%",
            "after": "11.6%–34%"
          },
          {
            "section": "Flair",
            "label": "Rasio AD",
            "before": "110%",
            "after": "125%"
          },
          {
            "section": "Inferno Trigger",
            "label": "Rasio AD per tembakan",
            "before": "40%",
            "after": "50%"
          }
        ]
      },
      {
        "name": "Rammus",
        "category": "Champion",
        "kind": "Nerf",
        "summary": "Armor awal dan bonus armor W pada level awal turun. Pertahanan awal melemah, sementara rasio W level maksimum tetap sama.",
        "rows": [
          {
            "section": "Stat dasar",
            "label": "Armor",
            "before": "45",
            "after": "40"
          },
          {
            "section": "Defensive Ball Curl",
            "label": "Rasio armor",
            "before": "45%/50%/55%/60%",
            "after": "30%/40%/50%/60%"
          }
        ]
      },
      {
        "name": "Malphite",
        "category": "Champion",
        "kind": "Nerf",
        "summary": "Scaling armor pada W dan E berkurang. Cooldown ultimate bertambah 10 detik di semua level.",
        "rows": [
          {
            "section": "Thunderclap",
            "label": "Rasio armor untuk damage",
            "before": "20%",
            "after": "15%"
          },
          {
            "section": "Ground Slam",
            "label": "Rasio armor untuk damage",
            "before": "45%",
            "after": "40%"
          },
          {
            "section": "Unstoppable Force",
            "label": "Cooldown",
            "before": "75/70/65 detik",
            "after": "85/80/75 detik"
          }
        ]
      },
      {
        "name": "Tristana",
        "category": "Champion",
        "kind": "Adjustment",
        "summary": "Rocket Jump lebih cepat tersedia dan ledakan E diperkuat. Bonus attack speed Q naik di awal, tetapi sedikit turun pada level maksimum.",
        "rows": [
          {
            "section": "Rapid Fire",
            "label": "Attack speed",
            "before": "50/75/100/125%",
            "after": "60/80/100/120%"
          },
          {
            "section": "Rocket Jump",
            "label": "Cooldown",
            "before": "22/20/18/16 detik",
            "after": "20/18/16/14 detik"
          },
          {
            "section": "Explosive Charge",
            "label": "Damage ledakan",
            "before": "(80/100/120/140 + 100% bonus AD + 50% AP) × (1 + Critical Rate × 40% + (Crit Damage − 2) × 40% × Critical Rate)",
            "after": "(80/110/140/170 + 120% bonus AD + 50% AP) × (1 + Critical Rate × 50% + (Crit Damage − 2) × 50% × Critical Rate)"
          }
        ]
      },
      {
        "name": "Draven",
        "category": "Champion",
        "kind": "Buff",
        "summary": "Rasio bonus AD pada kapak dan ultimate naik. Blood Rush juga memberi lebih banyak attack speed.",
        "rows": [
          {
            "section": "Spinning Axe",
            "label": "Rasio bonus AD",
            "before": "80/90/100/110%",
            "after": "90/100/110/120%"
          },
          {
            "section": "Blood Rush",
            "label": "Attack speed",
            "before": "20/25/30/35%",
            "after": "25/30/35/40%"
          },
          {
            "section": "Whirling Death",
            "label": "Rasio bonus AD",
            "before": "130%",
            "after": "150%"
          }
        ]
      },
      {
        "name": "Caitlyn",
        "category": "Champion",
        "kind": "Nerf",
        "summary": "Pertumbuhan attack speed dan damage Headshot pada level akhir turun, mengurangi kekuatan serangan beruntunnya.",
        "rows": [
          {
            "section": "Stat dasar",
            "label": "Attack speed per level",
            "before": "0.04",
            "after": "0.025"
          },
          {
            "section": "Headshot",
            "label": "Damage (berdasarkan level)",
            "before": "60%–100%",
            "after": "60%–90%"
          }
        ]
      },
      {
        "name": "Senna",
        "category": "Champion",
        "kind": "Adjustment",
        "summary": "Stat attack speed disusun ulang. Bonus attack speed memberi manfaat lebih kecil, termasuk untuk mempercepat persiapan serangan.",
        "rows": [
          {
            "section": "Stat dasar",
            "label": "Rasio attack speed",
            "before": "0.4",
            "after": "0.3"
          },
          {
            "section": "Stat dasar",
            "label": "Attack speed dasar",
            "before": "0.4",
            "after": "0.3"
          },
          {
            "section": "Stat dasar",
            "label": "Bonus attack speed dasar",
            "before": "0.6",
            "after": "1.1"
          },
          {
            "section": "Stat dasar",
            "label": "Attack speed per level",
            "before": "0.05",
            "after": "0.025"
          },
          {
            "section": "Serangan dasar",
            "text": "Bonus attack speed kini lebih sedikit memperpendek windup (persiapan serangan dasar)."
          }
        ]
      },
      {
        "name": "Syndra",
        "category": "Champion",
        "kind": "Nerf",
        "summary": "Upgrade pasif membutuhkan lebih banyak stack. Scaling AP W turun dan efek slow menjadi tetap di semua level.",
        "rows": [
          {
            "section": "Transcendent",
            "label": "Ambang upgrade",
            "before": "40/60/80/100/120",
            "after": "50/75/100/125/150"
          },
          {
            "section": "Force of Will",
            "label": "Rasio AP",
            "before": "60%",
            "after": "50%"
          },
          {
            "section": "Force of Will",
            "label": "Slow",
            "before": "20%/25%/30%/35%",
            "after": "25%"
          }
        ]
      },
      {
        "name": "Swain",
        "category": "Champion",
        "kind": "Adjustment",
        "summary": "Pemulihan dasar pasif naik, tetapi scaling AP-nya turun. Damage berulang Nevermove mendapat scaling AP lebih tinggi.",
        "rows": [
          {
            "section": "Ravenous Flock",
            "label": "Health dipulihkan (berdasarkan level)",
            "before": "3%–4.5% + 0.5% AP",
            "after": "4.5%–6% + 0.2% AP"
          },
          {
            "section": "Nevermove",
            "label": "Rasio AP damage berulang",
            "before": "25%",
            "after": "40%"
          }
        ]
      },
      {
        "name": "Yuumi",
        "category": "Champion",
        "kind": "Nerf",
        "summary": "Bonus kekuatan heal dan shield dari You and Me! diturunkan, baik nilai dasarnya maupun scaling AP.",
        "rows": [
          {
            "section": "You and Me!",
            "label": "Healing & Shield Power",
            "before": "8%/9%/10%/11% + 0.02% AP",
            "after": "6%/7%/8%/9% + 0.01% AP"
          },
          {
            "section": "Catatan sumber",
            "text": "Artikel mencetak “0.01%a Ability Power”. Huruf “a” tampak sebagai salah ketik; angka 0.01% dipertahankan."
          }
        ]
      },
      {
        "name": "Viego",
        "category": "Champion",
        "kind": "Buff",
        "summary": "Damage pasif Q dan scaling critical diperkuat. Heartbreaker juga mendapat lebih banyak manfaat dari stat critical.",
        "rows": [
          {
            "section": "Blade of the Ruined King",
            "label": "Damage pasif",
            "before": "2%/3%/4%/5%",
            "after": "3%/4%/5%/6%"
          },
          {
            "section": "Blade of the Ruined King",
            "label": "Rasio crit damage",
            "before": "80%",
            "after": "85%"
          },
          {
            "section": "Heartbreaker",
            "label": "Rasio stat critical",
            "before": "50%",
            "after": "70%"
          }
        ]
      },
      {
        "name": "Yun Tal Wildarrows",
        "category": "Item",
        "kind": "Adjustment",
        "summary": "Attack speed dasar dan bonus Flurry naik. Sebagai gantinya, cooldown Flurry bertambah 5 detik.",
        "rows": [
          {
            "section": "Stat dasar",
            "label": "Attack speed",
            "before": "25%",
            "after": "35%"
          },
          {
            "section": "Flurry",
            "label": "Attack speed",
            "before": "25%",
            "after": "35%"
          },
          {
            "section": "Flurry",
            "label": "Cooldown",
            "before": "20 detik",
            "after": "25 detik"
          }
        ]
      },
      {
        "name": "Whispering Circlet",
        "category": "Item",
        "kind": "Nerf",
        "summary": "Bonus kekuatan heal dan shield dari Harmony berkurang setengah.",
        "rows": [
          {
            "section": "Harmony",
            "label": "Healing & Shield Power",
            "before": "0.5%",
            "after": "0.25%"
          }
        ]
      },
      {
        "name": "Diadem of Songs",
        "category": "Item",
        "kind": "Nerf",
        "summary": "Bonus kekuatan heal dan shield dari Harmony berkurang setengah.",
        "rows": [
          {
            "section": "Harmony",
            "label": "Healing & Shield Power",
            "before": "0.5%",
            "after": "0.25%"
          }
        ]
      },
      {
        "name": "Death's Dance",
        "category": "Item",
        "kind": "Nerf",
        "summary": "Harga bertambah 100 gold. Perubahan ini membuat item lebih mahal tanpa mengubah efeknya pada patch ini.",
        "rows": [
          {
            "section": "Stat dasar",
            "label": "Harga (gold)",
            "before": "3200",
            "after": "3300"
          }
        ]
      },
      {
        "name": "Smite",
        "category": "Gameplay",
        "kind": "Nerf",
        "summary": "Damage bakar per detik terhadap monster jungle turun di seluruh rentang level yang dicantumkan.",
        "rows": [
          {
            "section": "Monster jungle",
            "label": "Damage per detik (berdasarkan level)",
            "before": "30–198",
            "after": "22–162"
          }
        ]
      },
      {
        "name": "Nexus",
        "category": "Gameplay",
        "kind": "Adjustment",
        "summary": "Health maksimum turun dari 5.500 menjadi 4.000, sehingga lebih mudah dihancurkan.",
        "rows": [
          {
            "section": "Stat dasar",
            "label": "Health maksimum",
            "before": "5500",
            "after": "4000"
          }
        ]
      },
      {
        "name": "Turret Plating",
        "category": "Gameplay",
        "kind": "Adjustment",
        "summary": "Setelah satu plate hancur, turret mendapat lebih sedikit bonus pertahanan dengan durasi lebih singkat.",
        "rows": [
          {
            "section": "Setelah plate hancur",
            "label": "Armor dan magic resist",
            "before": "30",
            "after": "20"
          },
          {
            "section": "Setelah plate hancur",
            "label": "Durasi bonus pertahanan",
            "before": "20 detik",
            "after": "10 detik"
          }
        ]
      },
      {
        "name": "Rhythm Hunter",
        "category": "Mode",
        "kind": "Adjustment",
        "summary": "AAA ARAM · Jarak pemicu dan stack berubah.",
        "rows": [
          {
            "section": "Rhythm Hunter",
            "label": "Jarak pemicu",
            "before": "7",
            "after": "11"
          },
          {
            "section": "Rhythm Hunter",
            "label": "Pengali Steelbuff per stack",
            "before": "12",
            "after": "8"
          },
          {
            "section": "Visual",
            "text": "Efek visual pemicu diperjelas."
          }
        ]
      },
      {
        "name": "Neverending Encore",
        "category": "Mode",
        "kind": "Adjustment",
        "summary": "AAA ARAM · Kompensasi stack saat diperoleh terlambat.",
        "rows": [
          {
            "section": "Efek baru",
            "text": "Jika diperoleh pada ronde kelima atau setelahnya, langsung mendapat 180 stack, setara 6 reroll."
          }
        ]
      },
      {
        "name": "Galestrike",
        "category": "Mode",
        "kind": "Buff",
        "summary": "AAA ARAM · Jangkauan naik.",
        "rows": [
          {
            "section": "Augment",
            "label": "Attack range",
            "before": "8",
            "after": "9"
          }
        ]
      },
      {
        "name": "Cycle of Life",
        "category": "Mode",
        "kind": "Buff",
        "summary": "AAA ARAM · Shield meningkat.",
        "rows": [
          {
            "section": "Augment",
            "label": "Rasio shield diperoleh",
            "before": "150%",
            "after": "200%"
          }
        ]
      },
      {
        "name": "Ethereal Weapon",
        "category": "Mode",
        "kind": "Nerf",
        "summary": "AAA ARAM · Pemicu dibatasi.",
        "rows": [
          {
            "section": "Aturan baru",
            "text": "Setiap ability memiliki cooldown 1 detik untuk target yang sama."
          }
        ]
      },
      {
        "name": "Duet",
        "category": "Mode",
        "kind": "Buff",
        "summary": "AAA ARAM · Bisa memicu lebih sering.",
        "rows": [
          {
            "section": "Augment",
            "label": "Cooldown per target",
            "before": "5 detik",
            "after": "2 detik"
          }
        ]
      },
      {
        "name": "Metal Crown",
        "category": "Mode",
        "kind": "Nerf",
        "summary": "AAA ARAM · Bonus stat berkurang.",
        "rows": [
          {
            "section": "Setelah memakai ultimate",
            "label": "AD / AP / armor / magic resist",
            "before": "35 / 70 / 50 / 50",
            "after": "30 / 60 / 40 / 40"
          }
        ]
      },
      {
        "name": "Hextech Shrapnel",
        "category": "Mode",
        "kind": "Buff",
        "summary": "AAA ARAM · Amplifikasi naik.",
        "rows": [
          {
            "section": "Augment",
            "label": "Amplifikasi jenis damage lainnya",
            "before": "20%",
            "after": "30%"
          }
        ]
      },
      {
        "name": "Darkin Beacon",
        "category": "Mode",
        "kind": "Adjustment",
        "summary": "AAA ARAM · Dasar pencatatan berubah.",
        "rows": [
          {
            "section": "Augment",
            "label": "Damage yang dicatat",
            "before": "Sesudah mitigasi",
            "after": "Sebelum mitigasi"
          }
        ]
      },
      {
        "name": "Stack One Up",
        "category": "Mode",
        "kind": "Buff",
        "summary": "AAA ARAM · Stack lebih kuat.",
        "rows": [
          {
            "section": "Augment",
            "label": "Tambahan damage per stack",
            "before": "8",
            "after": "12"
          },
          {
            "section": "Cooldown",
            "text": "Ability Haste kini memengaruhi cooldown bonus damage. Perolehan stack tidak memiliki cooldown."
          }
        ]
      },
      {
        "name": "Accelerating Sorcery",
        "category": "Mode",
        "kind": "Nerf",
        "summary": "AAA ARAM · Batas stack turun.",
        "rows": [
          {
            "section": "Augment",
            "label": "Stack maksimum",
            "before": "100",
            "after": "66"
          }
        ]
      },
      {
        "name": "Pinnacle of Perfection",
        "category": "Mode",
        "kind": "Adjustment",
        "summary": "AAA ARAM · Konversi critical diubah.",
        "rows": [
          {
            "section": "Augment",
            "label": "Batas Critical Rate",
            "before": "50%",
            "after": "44.44%"
          },
          {
            "section": "Augment",
            "label": "Rasio konversi Critical Rate berlebih",
            "before": "150%",
            "after": "444%"
          },
          {
            "section": "Augment",
            "label": "Batas konversi maksimum",
            "before": "305%",
            "after": "400%"
          },
          {
            "section": "Dampak",
            "text": "Batas crit damage bisa dicapai tanpa Infinity Edge."
          }
        ]
      },
      {
        "name": "Fiddlesticks",
        "category": "Mode",
        "kind": "Buff",
        "summary": "AAA ARAM · Menerima lebih sedikit damage.",
        "rows": [
          {
            "section": "Modifier mode",
            "label": "Damage diterima",
            "before": "90%",
            "after": "85%"
          }
        ]
      },
      {
        "name": "Nasus",
        "category": "Mode",
        "kind": "Buff",
        "summary": "AAA ARAM · Menerima lebih sedikit damage.",
        "rows": [
          {
            "section": "Modifier mode",
            "label": "Damage diterima",
            "before": "100%",
            "after": "90%"
          }
        ]
      }
    ],
    "coverage": "Seluruh perubahan balance dari artikel resmi, dengan penjelasan singkat dalam Bahasa Indonesia.",
    "complete": true
  },
  {
    "id": "7.3",
    "date": "2026-09-21",
    "title": "Hwei hadir. Rift memasuki babak baru.",
    "description": "Hwei hadir, sistem marksman dirombak, dan Ranked memasuki musim baru.",
    "url": "https://wildrift.leagueoflegends.com/en-us/news/game-updates/wild-rift-patch-notes-7-3/",
    "changes": [
      {
        "name": "Hwei",
        "category": "Champion",
        "kind": "Baru",
        "summary": "Sang pelukis bergabung dengan roster Wild Rift.",
        "rows": [
          {
            "section": "",
            "label": "Champion baru",
            "before": "—",
            "after": "Hwei"
          }
        ]
      },
      {
        "name": "Critical Strike",
        "category": "Gameplay",
        "kind": "Buff",
        "summary": "Serangan kritis dasar menjadi lebih kuat.",
        "rows": [
          {
            "section": "",
            "label": "Damage kritis dasar",
            "before": "175%",
            "after": "200%"
          }
        ]
      },
      {
        "name": "Ranked S23",
        "category": "Gameplay",
        "kind": "Baru",
        "summary": "Musim dimulai 23 September 2026, 03:00 UTC.",
        "rows": [
          {
            "section": "",
            "label": "Ban per tim · Platinum–Diamond",
            "before": "3",
            "after": "5"
          }
        ]
      },
      {
        "name": "Super Minion",
        "category": "Gameplay",
        "kind": "Buff",
        "summary": "Health dasar meningkat untuk membantu tekanan lane.",
        "rows": [
          {
            "section": "",
            "label": "Health dasar",
            "before": "800",
            "after": "1100"
          }
        ]
      },
      {
        "name": "Wild Pass",
        "category": "Lainnya",
        "kind": "Adjustment",
        "summary": "Skin Wild Pass tersedia lebih awal bagi pembeli Advanced Pass atau lebih tinggi.",
        "rows": [
          {
            "section": "",
            "label": "Level membuka skin setelah update",
            "before": "—",
            "after": "1"
          }
        ]
      }
    ],
    "coverage": "Arsip ini memuat perubahan pilihan. Baca sumber resmi untuk keseluruhan patch."
  },
  {
    "id": "7.2e",
    "date": "2026-09-09",
    "title": "Perubahan untuk jungle dan support.",
    "description": "Vi dan Swain disesuaikan, sementara pertahanan Janna mendapat peningkatan.",
    "url": "https://wildrift.leagueoflegends.com/en-us/news/game-updates/wild-rift-patch-notes-72e/",
    "changes": [
      {
        "name": "Vi",
        "category": "Champion",
        "kind": "Nerf",
        "summary": "Damage Q turun dan ultimate lebih lama tersedia.",
        "rows": [
          {
            "section": "Vault Breaker",
            "label": "Rasio bonus AD minimum",
            "before": "80%",
            "after": "60%"
          },
          {
            "section": "Vault Breaker",
            "label": "Rasio bonus AD maksimum",
            "before": "160%",
            "after": "120%"
          },
          {
            "section": "Cease and Desist",
            "label": "Cooldown",
            "before": "60/55/50 detik",
            "after": "80/70/60 detik"
          }
        ]
      },
      {
        "name": "Janna",
        "category": "Champion",
        "kind": "Buff",
        "summary": "Shield diperkuat.",
        "rows": [
          {
            "section": "Eye of the Storm",
            "label": "Shield",
            "before": "65/90/115/140 + 45% AP",
            "after": "80/120/160/200 + 50% AP"
          }
        ]
      },
      {
        "name": "Swain",
        "category": "Champion",
        "kind": "Adjustment",
        "summary": "Damage dan heal ultimate berubah.",
        "rows": [
          {
            "section": "Demonic Ascension",
            "label": "Damage per detik",
            "before": "10/25/40 + 15% AP",
            "after": "15/25/35 + 6% AP"
          },
          {
            "section": "Demonic Ascension",
            "label": "Heal per detik",
            "before": "20/30/40 + 20% AP",
            "after": "15/30/45 + 10% AP"
          }
        ]
      },
      {
        "name": "Nautilus",
        "category": "Champion",
        "kind": "Buff",
        "summary": "Shield lebih tebal.",
        "rows": [
          {
            "section": "Titan's Wrath",
            "label": "Shield",
            "before": "65/75/85/95 + 9/10/11/12% health maksimum",
            "after": "70/80/90/100 + 11/12/13/14% health maksimum"
          }
        ]
      },
      {
        "name": "Malphite",
        "category": "Champion",
        "kind": "Buff",
        "summary": "Armor, slow, dan damage meningkat.",
        "rows": [
          {
            "section": "Stat dasar",
            "label": "Armor per level",
            "before": "4.3",
            "after": "5"
          },
          {
            "section": "Seismic Shard",
            "label": "Slow",
            "before": "15/20/25/30%",
            "after": "20/25/30/35%"
          },
          {
            "section": "Thunderclap",
            "label": "Damage dasar serangan beruntun",
            "before": "10/20/30/40",
            "after": "20/30/40/50"
          }
        ]
      },
      {
        "name": "Seeker's Armguard",
        "category": "Item",
        "kind": "Nerf",
        "summary": "Stasis lebih jarang tersedia.",
        "rows": [
          {
            "section": "Stasis",
            "label": "Cooldown",
            "before": "120 detik",
            "after": "150 detik"
          }
        ]
      },
      {
        "name": "Verdant Barrier",
        "category": "Item",
        "kind": "Nerf",
        "summary": "Pasif lebih lama pulih.",
        "rows": [
          {
            "section": "Annul",
            "label": "Cooldown pasif",
            "before": "50 detik",
            "after": "65 detik"
          }
        ]
      },
      {
        "name": "Eclipse",
        "category": "Item",
        "kind": "Buff",
        "summary": "Harga turun dan shield melee naik.",
        "rows": [
          {
            "section": "Stat dasar",
            "label": "Harga (gold)",
            "before": "3000",
            "after": "2900"
          },
          {
            "section": "Ever Rising Moon",
            "label": "Shield melee",
            "before": "140 + 35% bonus AD",
            "after": "150 + 40% bonus AD"
          }
        ]
      },
      {
        "name": "Unending Despair",
        "category": "Item",
        "kind": "Adjustment",
        "summary": "Health dan haste naik; resist turun.",
        "rows": [
          {
            "section": "Stat dasar",
            "label": "Health",
            "before": "200",
            "after": "300"
          },
          {
            "section": "Stat dasar",
            "label": "Armor",
            "before": "45",
            "after": "40"
          },
          {
            "section": "Stat dasar",
            "label": "Magic resist",
            "before": "45",
            "after": "40"
          },
          {
            "section": "Stat baru",
            "text": "Ability Haste: 10."
          },
          {
            "section": "Build",
            "label": "Resep (gold)",
            "before": "Chain Vest (900) + Negatron Cloak (900) + Ruby Crystal (500) + 700",
            "after": "Chain Vest (900) + Negatron Cloak (900) + Kindlegem (1000) + 200"
          }
        ]
      },
      {
        "name": "AAA ARAM",
        "category": "Mode",
        "kind": "Adjustment",
        "summary": "Augment baru dan perbaikan interaksi.",
        "rows": [
          {
            "section": "Augment baru",
            "text": "Blood Price ditambahkan. Pyke tidak bisa memilihnya karena konflik mekanik."
          },
          {
            "section": "Perbaikan",
            "text": "Jumlah Anvil dari upgrade Anvil Specialist diperbaiki."
          }
        ]
      }
    ],
    "coverage": "Seluruh perubahan balance dari artikel resmi, dengan penjelasan singkat dalam Bahasa Indonesia.",
    "complete": true
  },
  {
    "id": "7.2d",
    "date": "2026-08-26",
    "title": "Penyesuaian champion dan pilihan build.",
    "description": "Sorotan perubahan item dan rotasi konten AAA ARAM.",
    "url": "https://wildrift.leagueoflegends.com/en-us/news/game-updates/wild-rift-patch-notes-7-2d/",
    "changes": [
      {
        "name": "Syndra",
        "category": "Champion",
        "kind": "Buff",
        "summary": "Skill lebih kuat dan lebih sering tersedia.",
        "rows": [
          {
            "section": "Dark Sphere",
            "label": "Damage dasar",
            "before": "70/115/160/205",
            "after": "80/130/180/230"
          },
          {
            "section": "Force of Will",
            "label": "Rasio AP",
            "before": "45%",
            "after": "60%"
          },
          {
            "section": "Scatter the Weak",
            "label": "Cooldown",
            "before": "17 detik",
            "after": "15 detik"
          },
          {
            "section": "Scatter the Weak",
            "label": "Rasio AP",
            "before": "35%",
            "after": "50%"
          }
        ]
      },
      {
        "name": "Yuumi",
        "category": "Champion",
        "kind": "Adjustment",
        "summary": "Cooldown turun; shield berubah per level.",
        "rows": [
          {
            "section": "You and Me!",
            "label": "Cooldown",
            "before": "10/5/0 detik",
            "after": "8/4/0 detik"
          },
          {
            "section": "You and Me!",
            "label": "Healing & Shield Power dari pasif",
            "before": "6/7/8/9%",
            "after": "8/9/10/11%"
          },
          {
            "section": "Zoomies",
            "label": "Cooldown",
            "before": "10 detik",
            "after": "9 detik"
          },
          {
            "section": "Zoomies",
            "label": "Shield",
            "before": "85/110/135/160 + 30% AP",
            "after": "80/110/140/170 + 40% AP"
          }
        ]
      },
      {
        "name": "Vladimir",
        "category": "Champion",
        "kind": "Buff",
        "summary": "Konversi stat dan damage meningkat.",
        "rows": [
          {
            "section": "Crimson Pact",
            "label": "Konversi bonus health ke AP",
            "before": "4.5%",
            "after": "5%"
          },
          {
            "section": "Crimson Pact",
            "label": "Konversi AP ke health",
            "before": "140%",
            "after": "150%"
          },
          {
            "section": "Transfusion",
            "label": "Rasio bonus damage Crimson Rush",
            "before": "75%",
            "after": "85%"
          },
          {
            "section": "Tides of Blood",
            "label": "Damage minimum",
            "before": "20/40/60/80 + 35% AP + 2.5% health maksimum",
            "after": "30/50/70/90 + 35% AP + 3% health maksimum"
          }
        ]
      },
      {
        "name": "Veigar",
        "category": "Champion",
        "kind": "Buff",
        "summary": "Lebih mudah menjangkau target.",
        "rows": [
          {
            "section": "Baleful Strike",
            "label": "Jangkauan",
            "before": "7.75",
            "after": "9"
          }
        ]
      },
      {
        "name": "Pantheon",
        "category": "Champion",
        "kind": "Nerf",
        "summary": "Target harus memiliki health lebih rendah untuk critical.",
        "rows": [
          {
            "section": "Comet Spear",
            "label": "Ambang health untuk critical",
            "before": "35%",
            "after": "25%"
          }
        ]
      },
      {
        "name": "Mordekaiser",
        "category": "Champion",
        "kind": "Buff",
        "summary": "Penetrasi naik dan cooldown turun.",
        "rows": [
          {
            "section": "Darkness Rise",
            "label": "Magic penetration",
            "before": "1/3/5/7%",
            "after": "3/6/9/12%"
          },
          {
            "section": "Death's Grasp",
            "label": "Cooldown",
            "before": "17.5/15/12.5/10 detik",
            "after": "15/13/11/9 detik"
          }
        ]
      },
      {
        "name": "Twisted Fate",
        "category": "Champion",
        "kind": "Nerf",
        "summary": "Scaling AP berkurang.",
        "rows": [
          {
            "section": "Stacked Deck",
            "label": "Rasio AP",
            "before": "45%",
            "after": "35%"
          }
        ]
      },
      {
        "name": "Fiora",
        "category": "Champion",
        "kind": "Buff",
        "summary": "Damage pasif naik.",
        "rows": [
          {
            "section": "Duelist's Dance",
            "label": "Damage",
            "before": "3.5% + 0.05% bonus AD",
            "after": "4% + 0.055% bonus AD"
          }
        ]
      },
      {
        "name": "Gwen",
        "category": "Champion",
        "kind": "Nerf",
        "summary": "Damage skill dan modifier monster berkurang.",
        "rows": [
          {
            "section": "Snip Snip!",
            "label": "Rasio AP per hit",
            "before": "7%",
            "after": "6%"
          },
          {
            "section": "Snip Snip!",
            "label": "Rasio AP hit terakhir",
            "before": "35%",
            "after": "30%"
          },
          {
            "section": "Snip Snip!",
            "label": "Modifier damage monster jungle",
            "before": "105%",
            "after": "100%"
          }
        ]
      },
      {
        "name": "Yone",
        "category": "Champion",
        "kind": "Nerf",
        "summary": "Armor awal turun.",
        "rows": [
          {
            "section": "Stat dasar",
            "label": "Armor",
            "before": "43",
            "after": "37"
          }
        ]
      },
      {
        "name": "Renekton",
        "category": "Champion",
        "kind": "Adjustment",
        "summary": "Scaling naik; damage dasar bergeser ke level lanjut.",
        "rows": [
          {
            "section": "Cull the Meek",
            "label": "Rasio bonus AD damage normal",
            "before": "90%",
            "after": "100%"
          },
          {
            "section": "Ruthless Predator",
            "label": "Damage dasar",
            "before": "24/48/72/96",
            "after": "20/60/100/140"
          },
          {
            "section": "Ruthless Predator",
            "label": "Damage dasar Reign of Anger",
            "before": "36/72/108/144",
            "after": "30/90/150/210"
          }
        ]
      },
      {
        "name": "Caitlyn",
        "category": "Champion",
        "kind": "Buff",
        "summary": "Pasif diperkuat dan trap lebih cepat pulih.",
        "rows": [
          {
            "section": "Headshot",
            "label": "Damage",
            "before": "50%–100% (berdasarkan level) AD + 125 × Critical Rate",
            "after": "60%–110% (berdasarkan level) AD + 200 × Critical Rate"
          },
          {
            "section": "Yordle Snap Trap",
            "label": "Waktu isi charge",
            "before": "27/22/17/12 detik",
            "after": "25/20/15/10 detik"
          }
        ]
      },
      {
        "name": "Thresh",
        "category": "Champion",
        "kind": "Nerf",
        "summary": "Pengembalian cooldown berkurang.",
        "rows": [
          {
            "section": "Death Sentence",
            "label": "Pengurangan cooldown saat mengenai target",
            "before": "3 detik",
            "after": "2 detik"
          }
        ]
      },
      {
        "name": "Akali",
        "category": "Champion",
        "kind": "Adjustment",
        "summary": "Rekomendasi build diperbarui.",
        "rows": [
          {
            "section": "Loadout — Build 2",
            "text": "Stormsurge, Infinity Orb, Rabadon's Deathcap, Void Staff, Zhonya's Hourglass, Spellslinger's Shoes."
          }
        ]
      },
      {
        "name": "Vladimir — Loadout",
        "category": "Lainnya",
        "kind": "Adjustment",
        "summary": "Rekomendasi build diperbarui.",
        "rows": [
          {
            "section": "Build 1",
            "text": "Hextech Rocketbelt, Riftmaker, Rabadon's Deathcap, Cryptbloom, Infinity Orb, Crimson Lucidity."
          },
          {
            "section": "Build 2",
            "text": "Hextech Rocketbelt, Stormsurge, Rabadon's Deathcap, Void Staff, Infinity Orb, Spellslinger's Shoes."
          },
          {
            "section": "Build 3",
            "text": "Cosmic Drive, Riftmaker, Rabadon's Deathcap, Void Staff, Zhonya's Hourglass, Spellslinger's Shoes."
          }
        ]
      },
      {
        "name": "Lee Sin",
        "category": "Champion",
        "kind": "Adjustment",
        "summary": "Rekomendasi build dan rune diperbarui.",
        "rows": [
          {
            "section": "Loadout — Build 1",
            "text": "Trinity Force, Eclipse, Black Cleaver, Guardian Angel, Death's Dance, Armored Advance."
          },
          {
            "section": "Loadout — Build 2",
            "text": "Youmuu's Ghostblade, Trinity Force, Serpent's Fang, Serylda's Grudge, Guardian Angel, Immortal Treads."
          },
          {
            "section": "Loadout — Rune 3",
            "text": "Battle Zeal, Cut Down, Legend: Alacrity, Overgrowth."
          }
        ]
      },
      {
        "name": "Edge of Night",
        "category": "Item",
        "kind": "Buff",
        "summary": "Penetrasi armor naik.",
        "rows": [
          {
            "section": "Stat dasar",
            "label": "Armor penetration",
            "before": "8",
            "after": "12"
          }
        ]
      },
      {
        "name": "Stormsurge",
        "category": "Item",
        "kind": "Buff",
        "summary": "Lebih murah.",
        "rows": [
          {
            "section": "Stat dasar",
            "label": "Harga (gold)",
            "before": "2900",
            "after": "2800"
          }
        ]
      },
      {
        "name": "AAA ARAM",
        "category": "Mode",
        "kind": "Adjustment",
        "summary": "Rotasi augment dan fitur baru.",
        "rows": [
          {
            "section": "27 Agustus",
            "text": "Augment seri Nostalgia dihapus."
          },
          {
            "section": "28 Agustus",
            "text": "Ultimate Spellbook dan easter egg Windborne Spirit Sword tersedia."
          },
          {
            "section": "Augment baru",
            "text": "Poro King's Leap, Poro Blaster, Poro Head, Final City Transit, Spin Me Right Round, Mana Enchantment, Upgrade Sword of Blossoming Dawn, Empowered By The Faithful, Zealot, Double Tap. Efek lengkap dirujuk ke Augment Archive dalam game oleh artikel resmi."
          }
        ]
      }
    ],
    "coverage": "Seluruh perubahan balance dari artikel resmi, dengan penjelasan singkat dalam Bahasa Indonesia.",
    "complete": true
  }
];
