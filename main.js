let color = 'black';
let click = false;
document.addEventListener('DOMContentLoaded', function () {
  createBoard(16);
  document.querySelector('body').addEventListener('click', function (e) {
    if (e.target.tagName != 'BUTTON') {
      click = !click;
      let draw = document.querySelector('#draw');
      if (click) {
        draw.innerHTML = 'Now you can draw';
      } else {
        draw.innerHTML = 'You are not allowed to draw';
      }
    }
  });
  let btn_popup = document.querySelector('#pop-up');
  btn_popup.addEventListener('click', function () {
    let size = boardSize();
    createBoard(size);
  });
});
function createBoard(size) {
  let board = document.querySelector('.board');
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, fr)`;

  let numDiv = size * size;
  for (let i = 0; i < numDiv; i++) {
    let div = document.createElement('div');
    div.addEventListener('mouseover', colorDiv);
    board.insertAdjacentElement('beforeend', div);
  }
}
function boardSize() {
  let input = prompt('what will be the size of the board');
  let message = document.querySelector('#message');
  if (input == '') {
    message.innerHTML = 'Please provide a number';
  } else if (input < 1 || input > 100) {
    message.innerHTML = 'Please provide a number between 1 and 100';
  } else {
    message.innerHTML = 'Now you can play';
    return input;
  }
}
function colorDiv() {
  if (click) {
    if (color == 'random') {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (color == 'white') {
      this.style.backgroundColor = 'white';
    } else {
      this.style.backgroundColor = 'black';
    }
  }
}
function setColor(colorChoice) {
  color = colorChoice;
}
// function whiteBtn() {
//   div.addEventListener('mouseover', function () {
//     div.style.backgroundColor = 'white';
//   });
// }
function resetBoard() {
  let divs = document.querySelectorAll('div');
  divs.forEach((div) => (div.style.backgroundColor = 'white'));
}
