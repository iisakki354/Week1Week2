const numbers = [];
for (i = 1; i <= 5; i++) {
  let number = parseInt(prompt('Enter Number'));
  numbers.push(number);
}
console.log('Numbers: ', numbers);
document.getElementById('Numbers.Array').textContent =
  'Numbers: (' + numbers + ' )';

let Searchnumber = parseInt(prompt('Enter a Number to Search'));
let foundnumber = numbers.includes(Searchnumber)
  ? `Number ${Searchnumber} is found in the array.`
  : `Number ${Searchnumber} is not found in the array.`;
document.getElementById('search.result').textContent = foundnumber;
numbers.pop();
document.getElementById('updated.numbers').textContent =
  'updated numbers: ' + numbers;
numbers.sort((a, b) => a - b);
document.getElementById('sort.Numbers').textContent = 'sort Numbers' + numbers;
