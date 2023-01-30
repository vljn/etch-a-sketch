function fillBoard(board, numberOfSquares) {
  board.textContent = "";
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
  const squares = document.querySelectorAll(".square");

  squares.forEach((sqr) => sqr.addEventListener("mouseenter", colorSquare));

  sliderH.innerText = `Size: ${numberOfSquares} x ${numberOfSquares}`;
}

function colorSquare() {
  this.style.backgroundColor = "#000";
}

function changeInput(e) {
  const squares = document.querySelectorAll(".square");
  if (e.target.id === "click") {
    squares.forEach((sqr) => sqr.addEventListener("click", colorSquare));
    squares.forEach((sqr) => sqr.removeEventListener("mouseenter", colorSquare));
  } else {
    squares.forEach((sqr) => sqr.addEventListener("mouseenter", colorSquare));
    squares.forEach((sqr) => sqr.removeEventListener("click", colorSquare));
  }
}

function fillBoardFromInput(e) {
  fillBoard(board, e.target.value);
}

const board = document.querySelector("#board");
const slider = document.querySelector("#slider");
const sliderH = document.querySelector("#slider-area h3");
const radios = document.querySelectorAll(".radio-btn");
const reset = document.querySelector("#reset");
fillBoard(board, 16);
slider.addEventListener("input", fillBoardFromInput);
radios.forEach((btn) => btn.addEventListener("input", changeInput));
reset.addEventListener("click", () => {
  fillBoard(board, slider.value);
});
