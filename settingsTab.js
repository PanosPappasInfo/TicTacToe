//Settings variables
var name1 = localStorage.getItem("name1") ? localStorage.getItem("name1") : "Player1";
var name2 = localStorage.getItem("name2") ? localStorage.getItem("name2") : "Player2";
var tabs = document.querySelectorAll('a');
var resetScores = document.querySelector('.cell.Reset');

//functions
const init = () => {
	
	if(localStorage.getItem("name1")){
		document.getElementById("name1").value = localStorage.getItem("name1");
	}
	if(localStorage.getItem("name2")){
		document.getElementById("name2").value = localStorage.getItem("name2");
	}
	
};

const updateNames = () => {
	
	if(document.getElementById("name1").value){
		localStorage.setItem("name1", document.getElementById("name1").value);
	}else{
		localStorage.removeItem("name1");
	}
	if(document.getElementById("name2").value){
		localStorage.setItem("name2", document.getElementById("name2").value);
	}else{
		localStorage.removeItem("name2");
	}
	
};

const reset = () => {

	localStorage.removeItem("totalGames");
	localStorage.removeItem("wins1");
	localStorage.removeItem("wins2");
	
};

//EventListeners
for(const tab of tabs) {
	
	tab.addEventListener('click', updateNames);
	
}

resetScores.addEventListener('click', reset);