'use strict';

function sortArray(numbers, order) {
  let sortedArray = numbers.slice();
  if (order === 'asc') {
    sortedArray.sort(function (a, b) {
      return a - b;
    });
  } else if (order === 'desc') {
    sortedArray.sort(function (a, b) {
      return b - a;
    });
  } else {
    console.warn('Invalid order parameter! Returning the original array.');
    return numbers;
  }
  return sortedArray;
}
const numbers = [5, 2, 8, 1, 9];
console.log(sortArray(numbers, 'asc'));
console.log(sortArray(numbers, 'desc'));
document.querySelector('#asc').innerHTML = sortArray(numbers, 'asc');
document.querySelector('#desc').innerHTML = sortArray(numbers, 'desc');
