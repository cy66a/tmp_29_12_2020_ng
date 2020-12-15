const field = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

let str = '';

field.forEach((row, x) => {
  str += '<div class="field__row">';
  row.forEach((cell, y) => {
    str += '<div class="field__cell" data-x="' + y + '" data-y="' + x + '">' + cell + '</div>';
  });
  str += '</div>';
});

let wrapper = document.querySelector('.wrapper');
wrapper.innerHTML = str;
wrapper.addEventListener('click', (event) => {
  let element = event.target;
  let isCellClick = element.classList.contains('field__cell');
  if (!isCellClick) {
    return;
  }
  console.log('x:' + element.dataset.x + ', y: ' + element.dataset.y)
  setCell();
})


function setCell(y, x, value) {
  field[x][y] = value;

}

setCell(0, 0, 'Ноль');


// console.log(field);