function setup() //function has braceket

 {

 createCanvas(400, 400);

  rectMode(CENTER);

 

  fill(100,100);

  drawSq(width/2,height/2,width);

}

 

function drawSq(posX,posY,side){

 

 

 

 

 

 

  if(side>=3) {

  ellipse(posX,posY,side,side);

drawSq(posX-side/3,posY-side/3,side/3);

drawSq(posX+side/3,posY-side/3,side/3);

drawSq(posX+side/3,posY+side/3,side/3);

  drawSq(posX-side/3,posY+side/2,side/3);

   drawSq(posX,posY-side/2,side/3);

    drawSq(posX-side/2,posY,side/3);

    drawSq(posX+side/2,posY,side/3);

    drawSq(posX,posY+side/2,side/3);

}

}

 

