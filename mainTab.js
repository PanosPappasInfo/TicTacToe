//HTML elements
const cells = document.querySelectorAll('.cell');

//Game variables
var gameIsLive = true;
var xIsNext = true;
var totalGames = localStorage.getItem("totalGames") ? localStorage.getItem("totalGames") : 0;
var wins1 = localStorage.getItem("wins1") ? localStorage.getItem("wins1") : 0;
var wins2 = localStorage.getItem("wins2") ? localStorage.getItem("wins2") : 0;

//functions
const switchTurn = () => {
	
	if(xIsNext) {
		document.getElementById("X").style.background = "DarkRed";
		document.getElementById("O").style.background = "DarkGray";
	}else {
		document.getElementById("O").style.background = "DarkRed";
		document.getElementById("X").style.background = "DarkGray";
	}
	
};

const updateScores = () => {
	
	if(localStorage.getItem("name1")){
		document.getElementById("P1").innerHTML = localStorage.getItem("name1");
	}
	if(wins1){
		document.getElementById("wins1").innerHTML = wins1;
	}
	if(localStorage.getItem("name2")){
		document.getElementById("P2").innerHTML = localStorage.getItem("name2");
	}
	if(wins2){
		document.getElementById("wins2").innerHTML = wins2;
	}
	switchTurn();

};

const winScreenOn = () => {
	
	document.getElementById("overlay").style.display = "block";

};

const winScreenOff = () => {

	document.getElementById("overlay").style.display = "none";

};

const restart = () => {

	for(const cell of cells){
		cell.classList.remove('x');
		cell.classList.remove('o');
		gameIsLive = true;
		xIsNext = true;
		switchTurn();
	}

};

const handleWin = (letter) => {

	gameIsLive = false;
	if(letter === 'x'){
		document.getElementById("text").innerHTML = "X Wins!";
		totalGames++;
		wins1++;
		localStorage.setItem("totalGames", totalGames);
		localStorage.setItem("wins1", wins1);
	} else {
		document.getElementById("text").innerHTML = "O Wins!";
		totalGames++;
		wins2++;
		localStorage.setItem("totalGames", totalGames);
		localStorage.setItem("wins2", wins2);
	}
	updateScores();
	winScreenOn();

};

const checkWin = () => {

	const topLeft = cells[0].classList[2];
	const topMiddle = cells[1].classList[2];
	const topRight = cells[2].classList[2];
	const middleLeft = cells[3].classList[2];
	const middleMiddle = cells[4].classList[2];
	const middleRight = cells[5].classList[2];
	const bottomLeft = cells[6].classList[2];
	const bottomMiddle = cells[7].classList[2];
	const bottomRight = cells[8].classList[2];
	
	if (topLeft && topLeft === topMiddle && topLeft === topRight) {
		handleWin(topLeft);
	} else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
		handleWin(middleLeft);
	} else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
		handleWin(bottomLeft);
	} else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
		handleWin(topLeft);
	} else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
		handleWin(topMiddle);
	} else if (topRight && topRight === middleRight && topRight === bottomRight) {
		handleWin(topRight);
	} else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
		handleWin(topLeft);
	} else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
		handleWin(topRight);
	} else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
		gameIsLive = false;
		document.getElementById("text").innerHTML = "Game is tied!";
		totalGames++;
		localStorage.setItem("totalGames", totalGames);
		winScreenOn();
	} else {
		xIsNext = !xIsNext;
		switchTurn();
	}

};

const handleCellClick = (e) => {

	const classList = e.target.classList;
	
	if (!gameIsLive || classList[2] === 'x' || classList[2] === 'o') {
		return;
	}
	if (xIsNext) {
		e.target.classList.add('x');
	} else {
		e.target.classList.add('o');
	}
	checkWin();

};

//Event Listeners
for(const cell of cells) {

	cell.addEventListener('click', handleCellClick);

}
