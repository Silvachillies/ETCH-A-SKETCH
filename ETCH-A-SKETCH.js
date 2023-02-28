const container = document.querySelector(".container");
const black = document.querySelector("#black");
const resetbtn = document.querySelector("#reset");
let currentlyActive = false;
const gridDivs = document.querySelector("--grids");

const colourful = document.querySelector("#colourful");

//Function to create 16x16 grid that sits within Div Container

function createGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    let gridDivs = document.createElement("gridDivs");
    container.appendChild(gridDivs).className = "--grids";
  }
}
createGrid(16, 16);

//Function to draw in black on SketchPad.

//const gridDivs = document.querySelector("--grids");

function drawBlack() {
  container.addEventListener("mousemove", (e) => {
    e.target.style.backgroundColor = "black";
  });
}

//Function to draw in random Colors

function generaterandomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function drawColors() {
  container.addEventListener("mousemove", function (e) {
    gridDivs;
    e.target.style.backgroundColor = generaterandomColor();
  });
}

function erase() {
  container.addEventListener("mousemove", (e) => {
    gridDivs;
    e.target.style.backgroundColor = "white";
    return;
  });
}

function reset() {
  container;
  let squares = document.querySelectorAll("gridDivs");
  squares.forEach((gridDivs) => (gridDivs.style.backgroundColor = "white"));
}
