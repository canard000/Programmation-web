var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");



//Object Brick
function Brick(x,y,status){
  this.x=x;
  this.y=y;
  this.status=status;
  this.colision=function(){
    if(this.status == 1) {
      if(x > this.x && x < this.x+brickWidth && (y-ballRadius) > this.y && (y-ballRadius) < this.y+brickHeight) {
        dy = -dy;
        b.status = 0;
        itcolor=(itcolor+1)%6;
        score++;
        if(score == brickRowCount*brickColumnCount) {
                     alert("YOU WIN, CONGRATULATIONS!\n SCORE:    "+score);
                     document.location.reload();
                     clearInterval(interval);
                 }
      }
    }
  }
  this.draw=function(){
    if(this.status == 1){
      ctx.beginPath();
      ctx.strokeStyle="black";
      ctx.lineWidth="2";
      ctx.rect(this.x, this.y, brickWidth, brickHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }
  }

}

//Object paddle
function Paddle(paddleHeight, paddleWidth,paddleX){
  this.paddleHeight=paddleHeight;
  this.paddleWidth=paddleWidth;
  this.draw=function(){
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
}

//Object Ball
function Ball(x,y,ballRadius){
  this.x=x;
  this.y=y;
  this.ballRadius=ballRadius;
  this.draw=function(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = colors[itcolor];
    ctx.fill();
    ctx.closePath();
  }
}
