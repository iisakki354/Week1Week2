let a = parseFloat(prompt('Enter the length of side a: '));
let b = parseFloat(prompt('Enter the length of side b: '));
let c = parseFloat(prompt('Enter the length of side c: '));

let result;
if (a === b && b === c) {
  result = 'the triangle is equilateral';
} else if (a === b || b === c || a === c) {
  result = ' the triangle is isosceles';
} else {
  result = 'the triangle is scalene';
}
document.querySelector('#target').innerHTML = result;
