var intervalID;
var canvas;
var context;
var x1=0;
var x2=0;
var x3=0;
var y=0; //Attend 4 s avant début
var z1=0; //Envoie carre toute les 1 s
var z2=0;
var z3=0;

function modif(){
	if(y===40){
		canvas = document.getElementById("canvas"); 
		context = canvas.getContext("2d");
		context.fillStyle="red";
		if(z2!=10){z2++;}
		if(z3!=20){z3++;}
		if(z1===0){
			context.clearRect(x1,10, 50, 50);
			context.fillRect(10+x1,10,50,50);
			x1+=10;
		}
		if(z2===10){
			
			context.clearRect(x2,10, 50, 50);
			context.fillRect(10+x2,10,50,50);
			x2+=10;
		}
		if(z3===20){
			context.clearRect(x3,10,50,50);
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
z1=0;
z2=0;
z3=0;
clearInterval(intervalID);
}


