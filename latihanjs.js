var age = 50;
var name = 'whitnu Nastain';
let date = 20;
const color = 'red';

if (age <= 20 && age >= 10) {
  console.log(`Hallo ${name}`);
} else {
  console.log(`bukan ${name}`);
}

switch (color) {
  case 'red':
    console.log('bukan budjang');
    break;

  case 'green':
    console.log(`Hallo ${name}`);
    break;

  default:
    console.log('bukan siapa siapa');
    break;
}
