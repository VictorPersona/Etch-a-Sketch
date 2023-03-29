let board = document.querySelector(".board");
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

let numGrid = 16; // define numGrid outside the event listeners

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

let reButton = document.querySelector("#reload-button");

reButton.addEventListener("click", function() {
  createGrid(numGrid);
});

let gridButton = document.querySelector("#create-grid-button");

gridButton.addEventListener("click", function () {
  numGrid = document.querySelector("#grid-size").value; // assign the input value to numGrid
  createGrid(numGrid);
});

createGrid(numGrid);
