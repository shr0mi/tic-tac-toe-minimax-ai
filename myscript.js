//The main game board array.
let board = [
[0, 0, 0],
[0, 0, 0],
[0, 0, 0]
];

//Counts the number of steps
step = 0;

//The winner. 1 means cross and -1 means golla
let winner = null

//Row-Column Input
let row = null;
let column = null;

//The best move for AI
let bestMove = [];

//Button Click fires this function
function buttonToImageSwap(row, column) {
	if(winner == null){
		document.getElementById('button' + 'Row' + row + 'Col' + column).remove();
  		
  		document.getElementById('cross' + 'Row' + row + 'Col' + column).style.display="block";
  		board[row][column] = 1;
  		
  		checkRow(board);
  		checkColumn(board);
  		checkCorners(board);
  		checkDraw(board);
  		checkWinner();

  		//If winner is null, let ai play
  		if(winner == null){
  			aiMove();
  		}
  		
  		
	}
}

//Checks Row
function checkRow(checkBoard){
	for(let i=0; i<3; i++){
		if (checkBoard[i][0] == checkBoard[i][1] && checkBoard[i][1] == checkBoard[i][2] && checkBoard[i][2] == 1) {
			winner = 1;
		}
		else if (checkBoard[i][0] == checkBoard[i][1] && checkBoard[i][1] == checkBoard[i][2] && checkBoard[i][2] == -1) {
			winner = -1;
		}
	}
}

//Check Column
function checkColumn(checkBoard){
	for(let i=0; i<3; i++){
		if (checkBoard[0][i] == checkBoard[1][i] && checkBoard[1][i] == checkBoard[2][i] && checkBoard[2][i] == 1) {
			winner = 1;
		}
		else if (checkBoard[0][i] == checkBoard[1][i] && checkBoard[1][i] == checkBoard[2][i] && checkBoard[2][i] == -1) {
			winner = -1;
		}
	}
}

//Check Corners
function checkCorners(checkBoard){
	
	if (checkBoard[0][0] == checkBoard[1][1] && checkBoard[1][1] == checkBoard[2][2] && checkBoard[2][2] != 0) {
		winner = checkBoard[0][0];
	}
	else if (checkBoard[2][0] == checkBoard[1][1] && checkBoard[1][1] == checkBoard[0][2] && checkBoard[0][2] != 0) {
		winner = checkBoard[2][0];
	}

}

//Check Draw
function checkDraw(checkBoard){
	if(winner == null){
		let movesAvailable = [];

	//Check What moves are available
	for(let i=0; i<3; i++){
		for(let j=0; j<3; j++){
			if(checkBoard[i][j] == 0){
				movesAvailable.push([i, j]);
			}
		}
	}

	//Draw Check
	if(movesAvailable.length == 0){
		winner = 0;
	}
	}
	

}

//Check Winner
function checkWinner(){
	if(winner != null){
		if(winner == 1){
			document.getElementById('result').innerHTML = "Cross Wins!";
		}
		else if(winner == -1){
			document.getElementById('result').innerHTML = "Golla Wins!";
		}
		else{
			document.getElementById('result').innerHTML = "Draw!";
		}
	}
}



//AI Plays (Randomly)
function aiMove(){

	
	findBestMove();
	


  	document.getElementById('button' + 'Row' + bestMove[0] + 'Col' + bestMove[1]).remove();
  	document.getElementById('golla' + 'Row' + bestMove[0] + 'Col' + bestMove[1]).style.display="block";
  	board[bestMove[0]][bestMove[1]] = -1;
	
  	
  	checkRow(board);
  	checkColumn(board);
  	checkCorners(board);
  	checkDraw(board);
  	checkWinner();
}
  	
  	






//Find best move
function findBestMove(){
	let bestScore = -Infinity;
	let tempMove;
	for(let i=0; i<3; i++){
		for(let j=0; j<3; j++){
			if(board[i][j] == 0){
				board[i][j] = -1;
				let score = minimax(board, false);
				board[i][j] = 0;
				if(score > bestScore){
					bestScore = score;
					tempMove = [i, j];
				}
			}
		}
	}
	bestMove = tempMove;

}

function minimax(testBoard, isMaximizer){
	
	//console.log(testBoard.toString());
	
	
	checkDraw(testBoard);
	checkRow(testBoard);
  	checkColumn(testBoard);
  	checkCorners(testBoard);
  	if(winner != null){
  		let result;
  		if(winner == 1){
  			result = -1;
  		}
  		else if(winner == -1){
  			result = 1;
  		}
  		else{
  			result = 0;
  		}
  		winner = null;
  		return result;
  	}
  	
  	if(isMaximizer){
  		let bestScore = -Infinity;
		for(let i=0; i<3; i++){
			for(let j=0; j<3; j++){
				if(testBoard[i][j] == 0){
					testBoard[i][j] = -1;
					let score = minimax(testBoard, false);
					testBoard[i][j] = 0;
					bestScore = Math.max(bestScore, score);
				}
			}
		}
		return bestScore;
  	}
  	else{
  		let bestScore = Infinity;
		for(let i=0; i<3; i++){
			for(let j=0; j<3; j++){
				if(testBoard[i][j] == 0){
					testBoard[i][j] = 1;
					let score = minimax(testBoard, true);
					testBoard[i][j] = 0;
					bestScore = Math.min(bestScore, score);
				}
			}
		}
		return bestScore;
  	}
  		
  	

}


