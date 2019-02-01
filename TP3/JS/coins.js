var x=0;
var mainloop = function() {
  var canvas=document.getElementById('canvas')
  var ctx = canvas.getContext('2d');
ctx.clearRect(0,0, 1000, 100)
  ctx.drawImage(document.getElementById('coins'),
                x, 0, 100, 100, 0, 0, 100, 100);
                x=(x+100)%1000;
};

var animFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    null ;

var recursiveAnim = function() {
mainloop();
animFrame( recursiveAnim );
};
