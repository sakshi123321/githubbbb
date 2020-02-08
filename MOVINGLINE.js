let p1;

function setup() {
  createCanvas(400, 400);
  p1 = new Particle();
  fill(115,105,34);
}

function draw() {
  background(56,49,18);
  p1.display();
  p1.update();
}
class Particle
{
  constructor()
  {
    this.posX = random(5, width);
    this.posY = random(0, height);
    this.velX = random();
    this.velY = random();
    this.accX = 0.5;
    this.accY = 0.5;
  }
  update() {
    this.posX  = this.posX + this.velX;
    this.posY += this.velY;
    if(this.posX > width || this.posX <0)
    {
      this.velX = -this.velX;
    }
   
    if(this.posY<0)
    {
      this.posY = height;
    }
    if (this.posY > height)
    {
      this.posY = 0;
    }  
    //this.velX += this.accX;
   this.velY += this.accY;
  }
   
  display()
  {
    textSize(93);
    text("DULL",this.posY, this.posX);
   fill(225,222,23)
   
   }
}