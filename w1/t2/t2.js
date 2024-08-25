'use strict';
let point1 = prompt(
  'Enter the coordinates (x1, y1) separated by a space:'
);
let coordinates1 = point1.split(' ');
let x1 = parseFloat(coordinates1[0]);
let y1 = parseFloat(coordinates1[1]);

let point2 = prompt(
  'Enter the coordinates (x2, y2) separated by a space:'
);
let coordinates2 = point2.split(' ');
let x2 = parseFloat(coordinates2[0]);
let y2 = parseFloat(coordinates2[1]);
let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

document.querySelector('#target').innerHTML =
  'The distance is:' + distance;
