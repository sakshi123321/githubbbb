function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  fill(11,252,252);
  drawSq(width/2,height/2,width);
}
  function drawSq(posX,posY,side){
  if(side>=3){
triangle(posX,posY,side,side,67,84);
drawSq( posX-side/3,posY-side/3,side/3);
    drawSq( posX+side/3,posY+side/3,side/3);
    drawSq( posX-side/3,posY,side/3);
  drawSq( posX,posY-side/3,side/3);
    drawSq( posX-side/3,posY+side/3,side/3);
    drawSq( posX+side/3,posY-side/3,side/3);
    drawSq( posX+side/3,posY,side/3);
      drawSq( posX,posY+side/3,side/3);
   
}
  }

