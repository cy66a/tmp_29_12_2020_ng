const field = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]
let wrapper = document.querySelector('.wrapper');

function render () {
let str = '';
field.forEach((row, x) => {
  str += '<div class="field__row">';
  row.forEach((cell, y) => {
    str += '<div class="field__cell" data-x="' + y + '" data-y="' + x + '">' + cell + '</div>';
  });
  str += '</div>';
});
wrapper.innerHTML = str;
}

render();

wrapper.addEventListener('click', (event) => {
  let element = event.target;
  let isCellClick = element.classList.contains('field__cell');
  if (!isCellClick) {
    return;
  }
  // console.log('x:' + element.dataset.x + ', y: ' + element.dataset.y)
  setCell(element.dataset.y, element.dataset.x, 'value');
  console.log(field);
  render();
})


function setCell(y, x, value) {
  field[y][x] = value;
}



// console.log(field);