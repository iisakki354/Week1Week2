let positive_number = parseInt(prompt('Enter positive number'));

let table = document.querySelector('#target');

for (let i = 1; i <= positive_number; i++) {
  let row = document.createElement('tr');
  for (let j = 1; j <= positive_number; j++) {
    let product = i * j;
    let cell = document.createElement('td');
    cell.innerText = product;
    row.appendChild(cell);
  }
  table.appendChild(row);
}
