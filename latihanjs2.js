var a = 200;
var b = 10;
var c = 400;
var warna = '';

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

switch (warna) {
  case 'merah': {
    console.log('whitnu nastain');
  }
  case 'kuning': {
    console.log('nastain');
  }
  case 'hijau': {
    console.log('whitnu');
  }
}
