
function gameBoard(){
    const board = [ , , , , , , , , ];
    return {board};
}
const gBoard = gameBoard();

function player(name){
    return {name};
}
const player1 = player("Amritesh");
const player2 = player("Computer");

function control(){
    let currentPlayer = "Amritesh";
    const boardObj = gameBoard();
    const players = [player("Amritesh"),player("Computer")];

    function changePlayer(){
        currentPlayer = currentPlayer === "Amritesh"? "Computer" : "Amritesh";
    }

    function move(){
        
    }
}
const controller = control();