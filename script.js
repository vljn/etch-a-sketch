function fillBoard(board, numberOfSquares) {
  for (let i = 0; i < numberOfSquares; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < numberOfSquares; j++) {
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
fillBoard(board, 24);
const squares = document.querySelectorAll(".square");
squares.forEach((sqr) => sqr.addEventListener("mouseenter", colorSquare));
