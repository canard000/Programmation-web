var intervalID;
var canvas;
var context;
var x1=0;
var x2=0;
var x3=0;
var y=0; //Attend 4 s avant début
var z=0; //Envoie carre toute les 1 s

function modif(){
	if(y===40){
		console.log(z);
		if(z<20) { z++;}
		if(z>=0){
			canvas = document.getElementById("canvas"); 
			context = canvas.getContext("2d");
			context.fillStyle="red";
			context.clearRect(0,0, 500, 100); 
			context.fillRect(10+x1,10,50,50);
			x1+=10;
		}
		if(z>=10){
			canvas = document.getElementById("canvas"); 
			context = canvas.getContext("2d");
			context.fillStyle="red";
			context.clearRect(0,0, 500, 100); 
			context.fillRect(10+x2,10,50,50);
			x2+=10;
		}
		if(z>=20){
			canvas = document.getElementById("canvas"); 
			context = canvas.getContext("2d");
			context.fillStyle="red";
			context.clearRect(0,0, 500, 100); 
			context.fillRect(10+x3,10,50,50);
			x3+=10;
		}
		
		
		
		
	}
	else{
		y++;
	}
}

function startCompteur(){
intervalID=setInterval(modif,100);
}

function stopCompteur(){
x1=0;
x2=0;
x3=0;
y=0;
z=0;
clearInterval(intervalID);
}


