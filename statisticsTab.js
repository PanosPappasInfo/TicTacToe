//Statistic variables
var totalGames = 0;
var wins1 = 0;
var wins2 = 0;

//functions
const loadStatistics = () => {
	
	totalGames = localStorage.getItem("totalGames");
	wins1 = localStorage.getItem("wins1");
	wins2 = localStorage.getItem("wins2");
	if(totalGames){
		document.getElementById("games").innerHTML = totalGames;
	}
	if(localStorage.getItem("name1")){
		document.getElementById("name1").innerHTML = localStorage.getItem("name1");
	}
	if(wins1){
		document.getElementById("wins1").innerHTML = wins1;
	}
	if(localStorage.getItem("name2")){
		document.getElementById("name2").innerHTML = localStorage.getItem("name2");
	}
	if(wins2){
		document.getElementById("wins2").innerHTML = wins2;
	}

};