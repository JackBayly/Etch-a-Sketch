//Makes work on mobile
const touch = (e) => {
  e.preventDefault();
  let location = e.changedTouches[0];
  let target = document.elementFromPoint(
    location.clientX,
    location.clientY
  );
  target.style.backgroundColor = "green";

  document.body.style.backgroundColor = "white";
};

let container = document.getElementById("container");

function createGrids(gridSquared) {
  let gridHeight = document.getElementById("container").clientHeight;
  let gridWidth = document.getElementById("container").clientWidth;
  if(screen.width<701){
    gridHeight=250;
    gridWidth=250;
  }
  let numberOfGrids = gridSquared * gridSquared;
  for (let i = 0; i < numberOfGrids; i++) {
    let grids = document.createElement("div");
    grids.style.height = gridHeight / gridSquared + "px";
    grids.style.width = gridWidth / gridSquared + "px";
    grids.style.background = "white";
    grids.classList.add("gridClass");
    grids.addEventListener("mouseover", function x() {
      grids.style.background = "green"
    })

    grids.addEventListener('touchmove', touch);
    grids.addEventListener('touchstart', touch);

    container.appendChild(grids);
  }
}
createGrids(10);
//Takes value from input and calls createGrids function
let gridAmount = document.getElementById("makeGrid").value;
function makeGrid() {

  let gridAmount = document.getElementById("makeGrid").value;
  if (gridAmount > 100) {
    alert("Please input a number less than 100")
    return
  } else if (gridAmount < 1) {
    alert("Please input a number greater than 0")
  } else
    createGrids(gridAmount);
}
//Submit button
let submitGrid = document.getElementById("submit");
submitGrid.addEventListener("click", clearGrids);
submitGrid.addEventListener("click", makeGrid);

//Clear button
let clear = document.getElementById("clear");
clear.addEventListener("click", clearGrids);

function clearGrids() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

