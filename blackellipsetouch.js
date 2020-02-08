let r,c;

function setup() {
  createCanvas(400, 400);
  let r = 100;

}

function draw() {
  r = mouseX;

  //noStroke();
 fill(0);
   
 // let c=  (random(13,69,91),random(13,69,91),random(13,69,91));
  
  for (let t = 0; t < 360; t=t+2) {
    d = radians(t);
    let x = height / 1 + r * sin(d) + random(0,19);
    let y = height / 1 + r* cos(d) + random(0,19);
  ellipse(x, y,random(0,10),random(0,10));
ellipse(x, y,random(13,69,91),random(1,0));
      if(mouseX==200)
  {
    background();
  


}
  }

}
  
  
  
  
  


