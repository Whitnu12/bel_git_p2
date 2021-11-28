var a = 200;
var nama = 'whitnu nastain';
var b = 10;
var c = 400;
var warna = '';
let baru = 0;

if (a < b) {
  hasil = a - 5;
  warna = 'merah';
  console.log(hasil, warna);
} else if (b < c) {
  hasil = b - a;
  warna = 'kuning';
  console.log(hasil, warna);
} else {
  hasil = c - a + b;
  warna = 'hijau';
  console.log(hasil, warna);
}

while (baru <= 2) {
  console.log(baru);
  baru += 1;
}

for (let nilai_baru = 1; nilai_baru < 5; nilai_baru++) {
  console.log(`${nama} ganteng`);
}
