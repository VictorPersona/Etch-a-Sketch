let board = document.querySelector(".board");
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

function createGrid(numGrid) {
  board.innerHTML = ""; // clear the board before adding new squares
  board.style.gridTemplateColumns = `repeat(${numGrid}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${numGrid}, 1fr)`;
  for (let i = 0; i < numGrid * numGrid; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.backgroundColor = "white";
    square.style.border = "1px solid black";
    square.style.boxSizing = "border-box";
    board.appendChild(square);
    hoverColor(square);
  }
}

let squares = document.querySelectorAll(".square");

function hoverColor(square) {
  square.addEventListener("mouseover", function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
}

function reload(square) {
  square.removeEventListener("mouseover", hoverColor);
  square.style.backgroundColor = "white";
}

function reloadButton() {
  squares.forEach((square) => {
    reload(square);
  });
}

let reButton = document.querySelector("#reload-button");

reButton.addEventListener("click", reloadButton);

let gridButton = document.querySelector("#create-grid-button");

gridButton.addEventListener("click", function () {
  let numGrid = document.querySelector("#grid-size").value;
  createGrid(numGrid);
});

createGrid(16)