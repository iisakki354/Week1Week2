let Natural_number = parseFloat(prompt('Enter a positive interger: '));
let sum = 0;
for (let i = 1; i <= Natural_number; i++) {
  sum += i;
}
document.querySelector('#target').innerHTML =
  'The sum' +
  Natural_number +
  'is:' +
  sum;
