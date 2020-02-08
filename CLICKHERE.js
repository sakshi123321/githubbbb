let btClick;
let slSize;

function setup() {
   //background(220);
  createCanvas(400, 400);
  btClick = createButton("saxyyyyyy");
  slSize= createSlider(5,45);
}

function draw() {
  //background(220,10);
 
  btClick.mouseClicked(clickFn);
  let tx=slSize.value();
  textSize(tx);
 
}

function clickFn()
{
text("you are sakasiiiii", random(0 ,width),random(0,height));
}
