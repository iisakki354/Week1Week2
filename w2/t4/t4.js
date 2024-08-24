'use strict';

function sortArray(arr) {
  let sortedArray = arr.slice();
  sortedArray.sort(function (a, b) {
    return a - b;
  });
  return sortedArray;
}
let numbers = [42, 16, 23, 8, 15, 4];

console.log('original Array: ', numbers);
document.querySelector('#original').innerHTML = 'Original numbers: ' + numbers;

let sortednumbers = sortArray(numbers);
document.querySelector('#sorted').innerHTML =
  'Sorted numbers: ' + sortednumbers;
console.log('sorted Array: ', sortednumbers);
