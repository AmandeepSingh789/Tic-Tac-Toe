const x_Class = 'x';
const circle_Class='circle';
const cellElements = document.querySelectorAll('[data-cell')

let xTurn 
cellElements.forEach(cell =>{
    cell.addEventListener('click',handleClick,{once:true})
})

function handleClick(e){
   const cell = e.target
   const currentClass = xTurn? x_Class:circle_Class;
   placeMark(cell,currentClass);
   swapTurns();
}

function placeMark(cell,currentClass){
    cell.classList.add(currentClass)
}
function swapTurns(){
    xTurn= !xTurn;
}