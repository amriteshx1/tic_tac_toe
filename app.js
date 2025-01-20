let box = document.querySelectorAll(".square");
let resetBtn = document.getElementById("reset");

const winningCase = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


function player(sign){
    return {sign};
}
const player1 = player("X");
const player2 = player("O");

function control(){
    let currentPlayer = "X";

    function gameBoard(){
        const board = [ , , , , , , , , ];
        
        function pushValue(i,value){
            board[i]= value;
        }

        function returnBoard(){
            return board;
        }

        return {pushValue,returnBoard};
    }
    const gBoard = gameBoard();

    function changePlayer(){
        currentPlayer = currentPlayer === "X"? "O" : "X";
        console.log(`Its ${currentPlayer}'s turn!`);
    }

    function checkWinner(){
        const b = gBoard.returnBoard();
        const winner =  winningCase.some((each1) => {
            return each1.every((index) => b[index] === currentPlayer);
        });

        if(winner){
            console.log("wiiiiiiiiiiiiiiiner!");
            box.forEach(b => b.disabled = true);
            return true;
        }else{
            return false;
        }
    }

    box.forEach((boxS,index) => {
        boxS.addEventListener('click',() =>{
            if (boxS.disabled) return;

            let i = index;


            if(currentPlayer == "X"){
                boxS.textContent = "X";
                gBoard.pushValue(i,"X");
                checkWinner();
                changePlayer();
            }else{
                boxS.textContent = "O";
                gBoard.pushValue(i,"O");
                checkWinner();
                changePlayer();
            }
            boxS.disabled = true;
            
        })

    })

    
}
const controller = control();

