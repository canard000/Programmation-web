var intervalID;
var canvas;
var context;
var x=0;
var y=0;

function modif(){
console.log(y);
	if(y>20){ //Départ après 2 secondes
		
		canvas = document.getElementById("canvas"); 
		context = canvas.getContext("2d");
		context.fillStyle="red";
		context.clearRect(0,0, 500, 100); 
		context.fillRect(10+x,10,50,50);
		x+=10;
	}
	else{
		y++;
	}
}

function startCompteur(){
intervalID=setInterval(modif,100);
}

function stopCompteur(){
x=0;
y=0;
clearInterval(intervalID);
}


