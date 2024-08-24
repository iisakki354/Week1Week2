'use strict';
const numbers = [];

while (true) {
  let input = prompt("Enter a number (or 'done' to finish)");
  if (input.toLowerCase() === 'done') {
    break;
  }
  let number = parseInt(input, 10);
  if (!isNaN(number)) {
    numbers.push(number);
  }
}

let evenNumbers = [];
for (let num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

if (evenNumbers.length > 0) {
  document.getElementById('even-numbers').textContent =
    'Even Numbers: ' + evenNumbers.join(', ');
} else {
  document.getElementById('even-numbers').textContent = 'Even Numbers: None';
}

document.getElementById('end-message').textContent = 'End of the program';
