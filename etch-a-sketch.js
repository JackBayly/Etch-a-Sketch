const container = document.getElementById("container");

//Makes Grid
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
  
   /* cell.addEventListener("mouseover", function( event ) {
       
        event.target.style.backgroundColor = "black";},); 
        



    container.appendChild(cell).className = "grid-item";
   */ 
  //}
  cell.addEventListener("touchstart", function( event ) {
       
  event.target.style.backgroundColor = "black";},);
    container.appendChild(cell).className = "grid-item";
  }
}







//Adjust grid cell numbers button
let gridNums= document.getElementById("input").value;

if (gridNums<=100) {

let h= document.getElementById("btninput");
h.addEventListener("click",
    makeRows(gridNums,gridNums),
 );
}
 function refreshPage(){
  window.location.reload();
} 


// Clear Button
let btn =document.getElementById("btn");
let grid= document.querySelectorAll(".grid-item");
function style (){for (i = 0; i < (gridNums*gridNums); i++) {
  grid[i].style.backgroundColor = "white";
}};
let k= btn.addEventListener("click", style)



