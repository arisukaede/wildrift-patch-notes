# Rift / Notes

Pembaca patch notes Wild Rift berbahasa Indonesia, statis dan siap GitHub Pages. Buka `index.html` langsung di browser; tidak memerlukan npm, backend, atau API key.

## Cakupan konten

- **7.3b:** perubahan balance champion, item, rune, jungle, dan AAA ARAM dari artikel resmi Riot; 30 kartu, termasuk perbaikan bug.
- **7.3a:** seluruh entri perubahan balance champion, item, gameplay, dan AAA ARAM pada artikel resmi; 33 kartu, 69 rincian stat/mekanik/catatan.
- **7.2e:** perubahan champion, item, serta augment dan perbaikan AAA ARAM.
- **7.2d:** perubahan champion, rekomendasi loadout, item, dan AAA ARAM.
- **7.3:** masih ringkasan pilihan, belum rincian penuh patch besar. Status ini terlihat ketika patch dipilih.

Penjelasan diringkas dalam Bahasa Indonesia, nama skill tetap mengikuti game. Angka berasal dari URL resmi Wild Rift pada masing-masing patch, bukan Data Dragon. Angka dengan `/` mengikuti urutan level dari sumber. Rumus panjang dipertahankan. Perubahan mekanik tanpa nilai pembanding disajikan sebagai catatan, tidak diberi angka sebelum yang dibuat-buat. Data tidak otomatis diperbarui.

Label kartu adalah penilaian editorial. Perubahan campuran menggunakan `Adjustment`, sekalipun tujuan keseluruhannya buff/nerf. Kartu pertama terbuka secara default; tombol buka semua menampilkan seluruh rincian. Pencarian mencakup nama skill, label stat, nilai, dan catatan. Filter kategori dan jenis bisa digabung. Jumlah di header menghitung rincian dan kartu, bukan seluruh roster game.

Catatan sumber 7.3a: salah ketik `0.01%a Ability Power` pada Yuumi ditampilkan sebagai `0.01% AP` dengan catatan eksplisit. Judul `Fiddlestick` dinormalisasi menjadi nama champion `Fiddlesticks`. Augment menggunakan judul `Neverending Encore` dari bagian rincian artikel.

## Hosting di GitHub Pages

1. Buat repository publik, misalnya `wildrift-notes`.
2. Upload isi folder ini ke root: `index.html`, `style.css`, `app.js`, `data.js`, **`assets.js`**, seluruh folder **`assets/`**, dan `.nojekyll`.
3. Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
4. Setelah deployment selesai, buka URL yang ditampilkan GitHub, umumnya `https://USERNAME.github.io/wildrift-notes/`.

Panduan: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

Path aset relatif mendukung subfolder GitHub Pages. Google Fonts opsional dan memiliki fallback sistem. Situs belum dipublikasikan oleh proses pembuatan lokal.

## Mengedit patch

`data.js` berisi `window.PATCHES`, terbaru di awal. Contoh struktur:

```js
{
  id: 'VERSI', date: 'YYYY-MM-DD', title: 'Judul', description: 'Pengantar',
  url: 'URL artikel resmi Wild Rift',
  coverage: 'Jelaskan cakupan yang benar-benar sudah diverifikasi', complete: false,
  changes: [{
    name: 'Nama champion atau item', category: 'Champion', kind: 'Buff',
    summary: 'Penjelasan pendek.',
    rows: [
      { section: 'Nama skill', label: 'Cooldown', before: '12 detik', after: '10 detik' },
      { section: 'Aturan baru', text: 'Penjelasan perubahan mekanik.' }
    ]
  }]
}
```

Kategori: `Champion`, `Item`, `Rune`, `Gameplay`, `Mode`, `Lainnya`. Jenis: `Buff`, `Nerf`, `Adjustment`, `Baru`. Nama kartu harus unik dalam satu patch. Jangan menghapus unit, syarat, rasio, atau perubahan yang berlawanan arah demi membuat ringkasan lebih pendek. Perbarui tanggal pemeriksaan dan jumlah arsip di `index.html` saat menambah patch. Tautan patch bisa dibagikan, misalnya `index.html#patch=7.3b`.

## Gambar dan atribusi

Portrait champion, skill, dan seluruh ikon katalog yang disebutkan di bawah disimpan lokal. `assets.js` memetakan nama ke gambar. `assets/manifest.json` mencatat versi dan URL sumber. Data Dragon 16.19.1 hanya digunakan untuk **gambar LoL PC**, bukan angka, deskripsi, resep, atau efek item. Ikon bernama sama dipakai sebagai ilustrasi dan dapat berbeda dari artwork Wild Rift. Tidak memakai ikon PC sebagai bukti bahwa efeknya sama. Mode/augment tanpa gambar terverifikasi memakai ikon kategori buatan lokal. Gambar gagal dimuat kembali ke ikon kategori.

Saat menambah aset: unduh gambar, validasi PNG, tambahkan URL sumber ke manifest dan path relatif ke `assets.js`. Sertakan semua gambar dalam ZIP. Jangan menaruh API key di frontend.

Aset © Riot Games. Dokumentasi: https://developer.riotgames.com/docs/lol#data-dragon . Kebijakan: https://www.riotgames.com/en/legal . Rift / Notes is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games and all associated properties are trademarks or registered trademarks of Riot Games, Inc.

## Palet

Biru muda `#8FC7FF`, navy `#0B1224`, hero `#193E70`; tema terang `#245CB2`. Palet sementara, bukan palet resmi Arisu Kaede. Referensi final ditunda sesuai permintaan pengguna.

## Validasi pembaruan rincian

Sintaks app/data/assets lulus Node. Pada pembaruan rincian sebelumnya, sebanyak 14 pemeriksaan browser masing-masing lulus pada desktop dan layout mobile: jumlah kartu, rincian Hwei, pencarian nama skill item, pemuatan gambar, fallback gambar rusak, filter gabungan kosong, buka/tutup semua, pergantian tiga arsip, pemuatan 39 aset lokal saat itu, overflow horizontal, dan pergantian tema. Screenshot desktop dan item pada layout mobile diperiksa. Ini validasi lokal, bukan deployment Pages.

## Pustaka ikon lengkap (Data Dragon 16.19.1)

Buka `asset-library.html` untuk mencari gambar berdasarkan nama, ID, atau kategori. Katalog mencakup semua entri champion, skill aktif/pasif, item, summoner spell, rune, profile icon, dan sprite sheet yang direferensikan katalog versi ini. `assets/library.json` mencatat URL sumber setiap entri, ukuran total, dan jumlah file unik; `assets/library.js` adalah data galeri yang hanya dimuat halaman pustaka. File tidak diunduh browser sekaligus: galeri menampilkan 72 entri per halaman, gambar memakai lazy loading.

`assets.js` sekarang menyediakan `ASSETS` (nama ke gambar) dan `SKILL_ASSETS` (champion → nama skill → gambar). Nama skill dicocokkan tanpa membedakan kapitalisasi/apostrof. Dua varian Subject: Disaster Hwei menggunakan gambar Q induk yang disediakan katalog, bukan mengklaim punya artwork varian tersendiri. Hover ikon menjelaskan hal ini.

Entitas khusus Wild Rift/augment yang tidak ada dalam katalog mendapat ikon kategori buatan lokal di `assets/ui/`. Ikon ini bukan artwork resmi augment. Statistik dasar dan catatan menggunakan ikon bagian. Tidak ada gambar champion/item acak untuk menggantikan entitas yang tidak tersedia. Fallback gambar gagal dimuat juga menggunakan ikon kategori.

Unduhan pertama mencakup seluruh katalog versi tersebut. Sinkronisasi dapat diulang dari root proyek dengan `python3 wildrift-patch-notes/scripts/sync-assets.py` (Python 3 dan curl, internet diperlukan). Script membatasi unduhan paralel, mencoba ulang kegagalan, dan melewati file yang sudah ada. Versi dikunci di script agar arsip visual konsisten. Cache katalog mentah `assets/catalog/` berisi metadata LoL PC untuk menemukan nama/file gambar; **tidak dimuat reader dan tidak digunakan sebagai statistik Wild Rift**. `data.js` tetap independen.

Ini semua ikon yang direferensikan katalog tersebut, bukan seluruh aset Riot/semua versi game. Splash art, loading-screen skin, video, dan aset Wild Rift eksklusif tidak termasuk kumpulan ikon. Champion atau item yang baru dirilis setelah versi ini tetap memerlukan pembaruan katalog. Ikon LoL PC dapat berbeda secara visual dari Wild Rift.

Untuk hosting, sertakan juga `asset-library.html`, `asset-library.js`, `assets/library.js` dan seluruh gambar. Aset tetap milik Riot Games; atribusi dan kebijakan pada bagian sebelumnya berlaku.

Paket ZIP penuh untuk arsip lokal. Untuk GitHub Pages, upload/commit folder hasil ekstraksi, bukan ZIP besar sebagai satu file. Profile icon adalah bagian terbesar pustaka dan tidak dimuat halaman patch reader.

### Hasil unduhan dan validasi

Versi 16.19.1: 173 portrait champion, 173 ikon pasif, 692 ikon skill aktif, 870 ikon item (termasuk varian mode), 34 summoner spell, 67 ikon rune/tree, 5.050 profile icon, dan 41 sprite sheet. Total 7.100 file unik, 606,1 MiB gambar.

Seluruh 7.100 PNG lulus pemeriksaan signature dan CRC. Browser memverifikasi pemuatan ikon pada empat patch, kelengkapan ikon kartu, fallback skill, pemetaan Q Hwei, dan layout mobile tanpa overflow. Galeri lulus pemeriksaan pencarian, filter 870 item, pagination 72 entri, hasil kosong, dan overflow. Screenshot reader desktop/mobile dan galeri diperiksa. ZIP diperiksa agar sesuai isi folder.

## Dekorasi Wild Rift

Banner menggunakan ilustrasi grup champion dari halaman resmi https://wildrift.leagueoflegends.com/id-id/game-overview/ . Header kartu diberi tekstur peta Rift dari halaman yang sama, dengan lapisan biru dan opacity rendah. Gambar hanya dekorasi CSS; teks patch tetap terpisah dan dapat dibaca jika gambar gagal dimuat. Tema terang dan mobile menggunakan opacity/lapisan tersendiri.

Dua file WebP lokal ada di `assets/decor/`. URL sumber dan versi optimasi CDN dicatat di `assets/decor/sources.json`; artwork © Riot Games dan mengikuti atribusi/kebijakan di atas. Ilustrasi grup bersifat dekorasi umum, bukan daftar champion yang berubah pada patch.

Dekorasi diperiksa melalui screenshot desktop gelap dan mobile terang. Kedua gambar berhasil dimuat, 33 kartu tetap dirender, dan tidak ada overflow horizontal pada viewport pengujian mobile.

## Logo dan gaya penulisan

Monogram W biru resmi Wild Rift dipakai sebagai aksen dekoratif di banner sesuai gambar referensi pengguna. Sumber PNG dicatat di `assets/decor/sources.json`. Proyek tetap tidak berafiliasi dengan Riot.

Referensi penyajian: https://www.wildriftfire.com/patch-notes dan https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-19-notes/ . Pola yang diadaptasi: nama champion → ringkasan perubahan spesifik → rincian per skill. Kalimat Indonesia ditulis sendiri berdasarkan angka Wild Rift; tidak menggunakan data balance LoL PC. Label statistik UI tidak lagi memakai istilah “kartu”; penjelasan hitungan tersedia pada Panduan membaca perubahan. Baris angka/mekanik dipastikan identik sebelum dan sesudah penyuntingan kalimat.

Logo dan copy baru diperiksa pada screenshot desktop/mobile; gambar logo dimuat, 33 entri tetap tampil, tidak ada label “kartu” di statistik, dan tidak ada overflow horizontal mobile.

## Mulai hosting dan pembaruan

Lihat [GUIDE-GITHUB.md](GUIDE-GITHUB.md) untuk langkah GitHub Pages dan alur update. Konten patch masih manual. Script `sync-assets.py` hanya mengunduh gambar, bukan mendeteksi atau menerjemahkan patch baru. GitHub Pages memperbarui website setelah perubahan di-push, tetapi tidak membuat konten patch sendiri.
