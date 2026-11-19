# Panduan bank soal

Soal disimpan di tiga file: `twk.json`, `tiu.json`, `tkp.json`. Setiap file berisi daftar soal. Halaman `index.html` memuat file-file ini saat dibuka, jadi menambah soal tidak perlu mengubah kode.

## Format satu soal

TWK dan TIU (kunci huruf):

```json
{
 "id": "tiu-010",
 "sub": "TIU",
 "topic": "Numerik: persentase",
 "status": "draf",
 "source": "orisinal",
 "fam": "H",
 "q": "Teks soal...",
 "o": ["opsi A", "opsi B", "opsi C", "opsi D", "opsi E"],
 "k": "B",
 "core": "Yang ditanya: ...",
 "kon": ["poin konsep 1", "poin konsep 2"],
 "opt": ["alasan A", "alasan B", "alasan C", "alasan D", "alasan E"],
 "fast": ["langkah cepat 1", "langkah cepat 2", "langkah cepat 3"],
 "mn": "Jembatan keledai",
 "trap": "Jebakan yang umum"
}
```

TKP memakai `s` (skor tiap opsi, permutasi 1 sampai 5) sebagai ganti `k`, misalnya `"s": [3,5,1,2,4]`.

## Aturan field

- `id`: unik di seluruh bank, mis. `twk-009`.
- `sub`: harus sama dengan nama file (TWK, TIU, atau TKP).
- `topic`: `Sub-materi: rincian`. Bagian sebelum titik dua dipakai untuk peta kelemahan dan urutan "fokus kelemahan".
- `status`: `draf` (belum diverifikasi) atau `terverifikasi`. Jangan ubah ke `terverifikasi` sebelum faktanya dicocokkan ke sumber resmi.
- `fam`: jenis jebakan (F, R, I, B, H, L, K). Opsional.
- `diag`: nomor urut 1 sampai 25 hanya untuk 25 soal paket diagnostik. Jangan dipakai untuk soal baru.
- `core`, `kon`, `opt`, `fast`, `mn`, `trap`: pembahasan. Opsional untuk tampil, tetapi sebaiknya selalu diisi.

## Memeriksa sebelum mengunggah

```
node tools/validate.js
```
