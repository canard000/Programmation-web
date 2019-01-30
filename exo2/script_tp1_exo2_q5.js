var intervalID;
    var canvas;
    var context;
    var x1=0;
    var x2=0;
    var x3=0;
    var x4=0;
    var x5=0;
    var x6=0;
    var x7=0;
    var x8=0;
    var x9=0;
    var x10=0;
    var i=0;
    var tmp=0;

    function modif(){ //Je ne vois pas comment mettre moins de code.
        canvas = document.getElementById("canvas");
        context = canvas.getContext("2d");
        context.fillStyle="red";
        tmp++;
        if(tmp>=40){
            if(tmp%10===0 && i<10){
                console.log(i);
                i++;
                switch(i){
                    case 1: context.clearRect(x1,10, 50, 50);
                        context.fillRect(10+x1,10,50,50);
                        x1+=10;break;
                    case 2: context.clearRect(x2,10, 50, 50);
                        context.fillRect(10+x2,10,50,50);
                        x2+=10; break;
                    case 3: context.clearRect(x3,10, 50, 50);
                        context.fillRect(10+x3,10,50,50);
                        x3+=10; break;
                    case 4: context.clearRect(x4,10, 50, 50);
                        context.fillRect(10+x4,10,50,50);
                        x4+=10; break;
                    case 5: context.clearRect(x5,10, 50, 50);
                        context.fillRect(10+x5,10,50,50);
                        x5+=10; break;
                    case 6: context.clearRect(x6,10, 50, 50);
                        context.fillRect(10+x6,10,50,50);
                        x6+=10; break;
                    case 7: context.clearRect(x7,10, 50, 50);
                        context.fillRect(10+x7,10,50,50);
                        x7+=10; break;
                    case 8: context.clearRect(x8,10, 50, 50);
                        context.fillRect(10+x8,10,50,50);
                        x8+=10; break;
                    case 9: context.clearRect(x9,10, 50, 50);
                        context.fillRect(10+x9,10,50,50);
                        x9+=10; break;
                    case 10: context.clearRect(x10,10, 50, 50);
                        context.fillRect(10+x10,10,50,50);
                        x10+=10; break;
                }
                

            }
            if(i<=1){
                context.clearRect(x1,10, 50, 50);
                context.fillRect(10+x1,10,50,50);
                x1+=10;
            }
            else if(i<=2){
                context.clearRect(x1,10, 50, 50);
                context.fillRect(10+x1,10,50,50);
                x1+=10;
                context.clearRect(x2,10, 50, 50);
                context.fillRect(10+x2,10,50,50);
                x2+=10;
            }
            else if(i<=3){
                context.clearRect(x1,10, 50, 50);
                context.fillRect(10+x1,10,50,50);
                x1+=10;
                context.clearRect(x2,10, 50, 50);
                context.fillRect(10+x2,10,50,50);
                x2+=10;
                context.clearRect(x3,10, 50, 50);
                context.fillRect(10+x3,10,50,50);
                x3+=10;
            }
            else if(i<=4){
                context.clearRect(x1,10, 50, 50);
                context.fillRect(10+x1,10,50,50);
                x1+=10;
                context.clearRect(x2,10, 50, 50);
                context.fillRect(10+x2,10,50,50);
                x2+=10;
                context.clearRect(x3,10, 50, 50);
                context.fillRect(10+x3,10,50,50);
                x3+=10;
                context.clearRect(x4,10, 50, 50);
                context.fillRect(10+x4,10,50,50);
                x4+=10;
            }
            else if(i<=5){
                context.clearRect(x1,10, 50, 50);
                context.fillRect(10+x1,10,50,50);
                x1+=10;
                context.clearRect(x2,10, 50, 50);
                context.fillRect(10+x2,10,50,50);
                x2+=10;
                context.clearRect(x3,10, 50, 50);
                context.fillRect(10+x3,10,50,50);
                x3+=10;
                context.clearRect(x4,10, 50, 50);
                context.fillRect(10+x4,10,50,50);
                x4+=10;
                context.clearRect(x5,10, 50, 50);
                context.fillRect(10+x5,10,50,50);
                x5+=10;
            }
            else if(i<=6){
                context.clearRect(x1,10, 50, 50);
                context.fillRect(10+x1,10,50,50);
                x1+=10;
                context.clearRect(x2,10, 50, 50);
                context.fillRect(10+x2,10,50,50);
                x2+=10;
                context.clearRect(x3,10, 50, 50);
                context.fillRect(10+x3,10,50,50);
                x3+=10;
                context.clearRect(x4,10, 50, 50);
                context.fillRect(10+x4,10,50,50);
                x4+=10;
                context.clearRect(x5,10, 50, 50);
                context.fillRect(10+x5,10,50,50);
                x5+=10;
                context.clearRect(x6,10, 50, 50);
                context.fillRect(10+x6,10,50,50);
                x6+=10;
            }
            else if(i<=7){
                context.clearRect(x1,10, 50, 50);
                context.fillRect(10+x1,10,50,50);
                x1+=10;
                context.clearRect(x2,10, 50, 50);
                context.fillRect(10+x2,10,50,50);
                x2+=10;
                context.clearRect(x3,10, 50, 50);
                context.fillRect(10+x3,10,50,50);
                x3+=10;
                context.clearRect(x4,10, 50, 50);
                context.fillRect(10+x4,10,50,50);
                x4+=10;
                context.clearRect(x5,10, 50, 50);
                context.fillRect(10+x5,10,50,50);
                x5+=10;
                context.clearRect(x6,10, 50, 50);
                context.fillRect(10+x6,10,50,50);
                x6+=10;
                context.clearRect(x7,10, 50, 50);
                context.fillRect(10+x7,10,50,50);
                x7+=10;
            }
            else if(i<=8){
                context.clearRect(x1,10, 50, 50);
                context.fillRect(10+x1,10,50,50);
                x1+=10;
                context.clearRect(x2,10, 50, 50);
                context.fillRect(10+x2,10,50,50);
                x2+=10;
                context.clearRect(x3,10, 50, 50);
                context.fillRect(10+x3,10,50,50);
                x3+=10;
                context.clearRect(x4,10, 50, 50);
                context.fillRect(10+x4,10,50,50);
                x4+=10;
                context.clearRect(x5,10, 50, 50);
                context.fillRect(10+x5,10,50,50);
                x5+=10;
                context.clearRect(x6,10, 50, 50);
                context.fillRect(10+x6,10,50,50);
                x6+=10;
                context.clearRect(x7,10, 50, 50);
                context.fillRect(10+x7,10,50,50);
                x7+=10;
                context.clearRect(x8,10, 50, 50);
                context.fillRect(10+x8,10,50,50);
                x8+=10;
            }
            else if(i<=9){
                context.clearRect(x1,10, 50, 50);
                context.fillRect(10+x1,10,50,50);
                x1+=10;
                context.clearRect(x2,10, 50, 50);
                context.fillRect(10+x2,10,50,50);
                x2+=10;
                context.clearRect(x3,10, 50, 50);
                context.fillRect(10+x3,10,50,50);
                x3+=10;
                context.clearRect(x4,10, 50, 50);
                context.fillRect(10+x4,10,50,50);
                x4+=10;
                context.clearRect(x5,10, 50, 50);
                context.fillRect(10+x5,10,50,50);
                x5+=10;
                context.clearRect(x6,10, 50, 50);
                context.fillRect(10+x6,10,50,50);
                x6+=10;
                context.clearRect(x7,10, 50, 50);
                context.fillRect(10+x7,10,50,50);
                x7+=10;
                context.clearRect(x8,10, 50, 50);
                context.fillRect(10+x8,10,50,50);
                x8+=10;
                context.clearRect(x9,10, 50, 50);
                context.fillRect(10+x9,10,50,50);
                x9+=10;
            }
            else if(i<=10){
                context.clearRect(x1,10, 50, 50);
                context.fillRect(10+x1,10,50,50);
                x1+=10;
                context.clearRect(x2,10, 50, 50);
                context.fillRect(10+x2,10,50,50);
                x2+=10;
                context.clearRect(x3,10, 50, 50);
                context.fillRect(10+x3,10,50,50);
                x3+=10;
                context.clearRect(x4,10, 50, 50);
                context.fillRect(10+x4,10,50,50);
                x4+=10;
                context.clearRect(x5,10, 50, 50);
                context.fillRect(10+x5,10,50,50);
                x5+=10;
                context.clearRect(x6,10, 50, 50);
                context.fillRect(10+x6,10,50,50);
                x6+=10;
                context.clearRect(x7,10, 50, 50);
                context.fillRect(10+x7,10,50,50);
                x7+=10;
                context.clearRect(x8,10, 50, 50);
                context.fillRect(10+x8,10,50,50);
                x8+=10;
                context.clearRect(x9,10, 50, 50);
                context.fillRect(10+x9,10,50,50);
                x9+=10;
                context.clearRect(x10,10, 50, 50);
                context.fillRect(10+x10,10,50,50);
                x10+=10;
            }
        }

    }

    function startCompteur(){

        intervalID=setInterval(modif,100);

    }

    function stopCompteur(){
        x1=0;
        x2=0;
        x3=0;
        x4=0;
        x5=0;
        x6=0;
        x7=0;
        x8=0;
        x9=0;
        x10=0;
        i=0;
        clearInterval(intervalID);

    }
