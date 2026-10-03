// Statistik dari patch notes Wild Rift; gambar diatur terpisah.
window.PATCHES = [
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
