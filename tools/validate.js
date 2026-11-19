// Pemeriksa format bank soal. Jalankan dari folder repo:  node tools/validate.js
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const FILES = {TWK: "twk.json", TIU: "tiu.json", TKP: "tkp.json"};
const L = ["A","B","C","D","E"];
let bad = 0, total = 0; const ids = new Set();
for (const sub of Object.keys(FILES)) {
  let arr;
  try { arr = JSON.parse(fs.readFileSync(path.join(root, FILES[sub]), "utf8")); }
  catch (e) { console.log("GAGAL baca " + FILES[sub] + ": " + e.message); process.exit(1); }
  arr.forEach((q, i) => {
    const w = [], at = FILES[sub] + " #" + (i+1) + (q && q.id ? " (" + q.id + ")" : "");
    total++;
    if (!q.id) w.push("id kosong"); else if (ids.has(q.id)) w.push("id ganda"); else ids.add(q.id);
    if (q.sub !== sub) w.push("sub harus " + sub);
    if (!q.topic) w.push("topic kosong");
    if (!q.q) w.push("q kosong");
    if (!Array.isArray(q.o) || q.o.length !== 5) w.push("o harus 5 opsi");
    if (sub === "TKP") { if (!Array.isArray(q.s) || q.s.slice().sort().join("") !== "12345") w.push("s harus permutasi 1-5"); }
    else if (L.indexOf(q.k) < 0) w.push("k harus A-E");
    if (q.opt && (!Array.isArray(q.opt) || q.opt.length !== 5)) w.push("opt harus 5 alasan");
    if (!q.core || !q.kon || !q.fast || !q.mn || !q.trap) w.push("peringatan: pembahasan belum lengkap (core, kon, fast, mn, trap)");
    if (w.length) { bad++; console.log(at + ": " + w.join("; ")); }
  });
}
console.log(total + " soal diperiksa, " + bad + " bermasalah.");
process.exit(bad ? 1 : 0);
