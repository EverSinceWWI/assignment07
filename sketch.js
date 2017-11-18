var cam;
var a=0;
function setup() {
  createCanvas(500,500);
  background(45);
  rectMode(CENTER);
  cam = createCapture(VIDEO);
  cam.size(500,375);
  cam.hide();
}

function draw() {
  a++
  scale(1.33);
  translate(width/3,height/2);
  scale(-1,1);
  var camPixels = cam.loadPixels();
  if(mouseIsPressed==false) {
  image(cam,-width/2,-height/2);
}
  var amount=10; //to increase
  if(mouseIsPressed==true) {

      push();
      tint(random(255),random(255),random(255)); //to increase
      translate(random(50),random(50)) //to increase
      scale(random(1,1.2)); //to increase
        image(cam,-width/2,-height/2);
        pop();

  image(cam,-width/2,-height/2);
  for(var i=0;i<amount; i++) {
  var x=random(500);
  var y=random(500);
  var c=camPixels.get(x,y);
  push();
  fill(c);
  noStroke();
  tint(255,80);
  rect(x-width/2,y-height/2,300,5);
  blendMode(DIFFERENCE);
  rect(0,-250,0,250);
  }
}
}
