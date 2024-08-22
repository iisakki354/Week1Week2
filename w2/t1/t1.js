const Fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

console.log('Fruits:', Fruits);
console.log('length of Fruits:', Fruits.length);
console.log('Element at Index 2:', Fruits[2]);
console.log('Last Element of Fruits:', Fruits[Fruits.length - 1]);

const Vegetables = [];
for (i = 1; i <= 3; i++) {
  let vegetable = prompt('Enter a vegetable');
  Vegetables.push(vegetable);
}
console.log('Vegetables:', Vegetables);
console.log('Length of Vegetables:', Vegetables.length);
/*Vegetables.push()*/
document.getElementById('fruits-display').textContent =
  'Fruits: (' + Fruits + ' )';

document.getElementById('fruits-length').textContent =
  'Length of Fruits: ' + Fruits.length;

document.getElementById('fruit-index-2').textContent =
  'Element at Index 2: ' + Fruits[2];

document.getElementById('last-fruit').textContent =
  'Last Element of Fruits: ' + Fruits[Fruits.length - 1];

document.getElementById('vegetables-display').textContent =
  'Vegetables: ( ' + Vegetables + ' )';

document.getElementById('vegetables-length').textContent =
  'Length of Vegetables: ' + Vegetables.length;
