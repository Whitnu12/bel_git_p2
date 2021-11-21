var date = 10;
var color = 'red';
var name = 'whitnu nastain';
var lokasi = 'simpang siur';

if (date <= 5 && 'simpang siur') {
  var color = 'green';
  console.log('lokasi sekarang');
}
if (date >= 5 && 'simpang siur') {
  var color = 'red';
  console.log('lokasi kemarin');
} else {
  console.log('salah lokasi');
}

switch (color) {
  case 'green':
    console.log(`${name} kemarin lewat sini`);
    break;
  case 'red':
    console.log(`${name} kemarin tidak lewat sini`);
    break;
  default:
    console.log(`${name} tidak Pernah lewat sini`);
    break;
}
