'use strict';
const temp = prompt('enter temperature');

const farenheit = (temp * 9) / 5 + 32;

document.querySelector('#target').innerHTML = farenheit + 'farenheit ';
