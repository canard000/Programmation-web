var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x=canvas.width/2;

var ballRadius = 10;
var paddleX=canvas.width/2;
var paddleWidth = 100;
var paddleHeight = 10;
var y=canvas.height-100;
var brickColumnCount = 6;
var brickRowCount = 5;
var bricks = [];
var brickWidth = 75;
var brickHeight = 20;
var dy=5;
var dx=5;
var rightPressed = false;
var leftPressed = false;
var colors=["#0095DD","#993300","#ff6600","#00cc00","#00ffff","#cc0099"];
var itcolor=0;
var brickOffsetLeft = 30;
var score = 0;
var lives=3;
var animFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            null;
            function keyDownHandler(e) {
                if(e.key == "Right" || e.key == "ArrowRight") {
                    rightPressed = true;
                }
                else if(e.key == "Left" || e.key == "ArrowLeft") {
                    leftPressed = true;
                }
            }

            function keyUpHandler(e) {
                if(e.key == "Right" || e.key == "ArrowRight") {
                    rightPressed = false;
                }
                else if(e.key == "Left" || e.key == "ArrowLeft") {
                    leftPressed = false;
                }
            }

            /*function mouseMoveHandler(e) { //Déplacement avec la souris
                var relativeX = e.clientX - canvas.offsetLeft;
                if(relativeX > 0 && relativeX < canvas.width) {
                    paddleX = relativeX - paddleWidth/2;
                }
            }*/

function init(){
  for(var c=0; c<brickColumnCount; c++) {
      bricks[c] = [];
      for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1};
      }
}
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
//document.addEventListener("mousemove", mouseMoveHandler, false);
animFrame( recursiveAnim );
}

function mainloop(){
  clearGame();
  updateGame();
  drawGame();
}

function recursiveAnim () {
    "use strict";
    mainloop();
    animFrame( recursiveAnim );
}


function clearGame(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

function updateGame(){
  updatePaddle();
  collisionDetection();
  updateBall();
}

function drawGame() {
  drawPaddle();
  drawBall();
  drawBricks();
  collisionDetection();
  drawScore();
  drawLives();
}
function updateBall(){
  if(y + dy < ballRadius) {
      dy = -dy;
  } else if(y + dy > canvas.height-ballRadius) {
      if(x > paddleX && x < paddleX + paddleWidth) {
          dy = -dy;
      }
      else {
        lives--;
        if(lives==0){
          alert("GAME OVER \n Score:"+score);
          document.location.reload();
        }
        else{
          x=canvas.width/2;
          y=canvas.height-paddleHeight;
          paddleX=canvas.width/2;
          dx=5;
          dy=-5;

        }

      }
  }
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
      dx = -dx;
   }
    x += dx;
    y += dy;
}

function updatePaddle(){
  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
  }
  else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
 }
}

  function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = colors[itcolor];
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
          if(bricks[c][r].status == 1){
            var brickX = c*brickWidth+brickOffsetLeft;
            var brickY = r*brickHeight;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.strokeStyle="black";
            ctx.lineWidth="2";
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
          }

        }
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 500, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, 500, 40);
}



function collisionDetection() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
      if(b.status == 1) {
        if(x > b.x && x < b.x+brickWidth && (y-ballRadius) > b.y && (y-ballRadius) < b.y+brickHeight) {
          dy = -dy;
          b.status = 0;
          itcolor=(itcolor+1)%6;
          score++;
          if(score == brickRowCount*brickColumnCount) {
                       alert("YOU WIN, CONGRATULATIONS!\n SCORE:    "+score);
                       document.location.reload();
                   }
        }
      }
    }
  }
}

window.addEventListener("load", init, false);
