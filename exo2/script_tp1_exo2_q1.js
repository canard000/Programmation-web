var intervalID;
var x;

function modif(){
	if (x>=0){
		console.log(x); <!-- affichage dans la console
		x--;
	}
	else{
		stopCompteur();
	}
}

function startCompteur(){
x=10
intervalID=setInterval(modif,1000);
}

function stopCompteur(){
clearInterval(intervalID);
}


