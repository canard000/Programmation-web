var intervalID;
var canvas;
var context;
var x=0;

function modif(){

canvas = document.getElementById("canvas"); 
context = canvas.getContext("2d");
context.fillStyle="red";
context.clearRect(0,0, 500, 100); //Clear le canvas à chaque déplacement
context.fillRect(10+x,10,50,50); //Déplace le rectangle vers la droite de 10 pixel
x+=10;


}

function startCompteur(){
intervalID=setInterval(modif,100);
}

function stopCompteur(){
x=0;
clearInterval(intervalID);
}


