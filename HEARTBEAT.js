let x0;
let step;
 
function setup() {
  createCanvas(400, 400);
  x0 = 0
 
  step=5;
 
}
 
function draw() {
  //background(255,10);
 
  let y =random (-step,+step);
 x0++;
 
  line(x0, 2*height/3, x0, 2*height/3+y*10);
}

