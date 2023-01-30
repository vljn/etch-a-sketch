function fillBoard(board) {
  for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 16; j++) {
      let square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
    board.appendChild(row);
  }
}

function colorSquare() {
  this.style.backgroundColor = "#000";
}

const board = document.querySelector("#board");
fillBoard(board);
const squares = document.querySelectorAll(".square");
squares.forEach((sqr) => sqr.addEventListener("mouseenter", colorSquare));
