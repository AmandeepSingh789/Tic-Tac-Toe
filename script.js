const x_Class = 'x';
const circle_Class='circle';
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board');
const WINNING_COMBINATIONS=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const winningMessage = document.querySelector('[data-winning-message-text]');
const  winningMessageElement = document.getElementById('winningMessage');
const restartBtn = document.getElementById('restartButton');
let xTurn 

startGame()

restartBtn.addEventListener('click',startGame)
function startGame(){
    xTurn=true;
    cellElements.forEach(cell =>{
        cell.classList.remove(x_Class)
        cell.classList.remove(circle_Class)
        cell.removeEventListener('click',handleClick)
        cell.addEventListener('click',handleClick,{once:true})
    })

    setBoardHoverClass();
    winningMessageElement.classList.remove('show');
}

function handleClick(e){
   const cell = e.target
   const currentClass = xTurn? x_Class:circle_Class;
   placeMark(cell,currentClass);

   if(checkWin(currentClass)){
    endGame(false)
    console.log('wins')
   }

   else if (isDraw()) {
       endGame(true)
   }

   else{
    swapTurns();
    setBoardHoverClass();
}
   
}

function endGame(draw){
    if (draw){
        winningMessage.innerText='Draw!'
    }
    else{
        winningMessage.innerText = `${xTurn ? "Player 1": "Player 2"} Wins!`
    }
    winningMessageElement.classList.add('show');
}

function isDraw(){
    return [...cellElements].every(cell =>{
        return cell.classList.contains(x_Class) ||
        cell.classList.contains(circle_Class)
    })
}


function placeMark(cell,currentClass){
    cell.classList.add(currentClass)
}

function swapTurns(){
    xTurn= !xTurn;
}

function setBoardHoverClass(){

    board.classList.remove(x_Class);
    board.classList.remove(circle_Class);
    if(xTurn){
        board.classList.add(x_Class);
    }
    else{
        board.classList.add(circle_Class);
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
      return combination.every(index => {
        return cellElements[index].classList.contains(currentClass)
      })
    })
  }