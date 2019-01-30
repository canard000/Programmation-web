var intervalID;


function modif(x){
if (x>0){
document.write(x);
}
}

function startCompteur(){
var i=10;
intervalID=setInterval(modif(i),1000);
i--;
}

function stopCompteur(){
clearInterval(intervalID);
}


