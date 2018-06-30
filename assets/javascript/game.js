var name = prompt ("player 1, enter your name."); 
var word = prompt("player 1, enter your word.");
var i;

function resetGame(){
    resetUI();
    gameAnswer = chooseWord();
    gameShownAnswer = blanksFromAnswer(gameAnswer);
    hangmanState = 0;
    drawWord(gameShownAnswer);
}
$(document).ready(resetGame);
function win () {alert('Yay! You Win!')
}; resetGame();
function lose () {alert('Ooof! You lose')
};resetGame();
function keypress(){
    var tempChar = $('#letterInput').val("");
}
if ()
