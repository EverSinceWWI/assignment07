var cam;
var mic;
var a=0;
function setup() {
  createCanvas(500,500);
  background(45);
  rectMode(CENTER);
  mic = new p5.AudioIn();
  cam = createCapture(VIDEO);
  mic.start();
  cam.size(500,375);
  cam.hide();
}

function draw() {
  a++
  scale(1.33);
  translate(width/3,height/2);
  scale(-1,1);
  var camPixels = cam.loadPixels();
  var vol = mic.getLevel();
  var volAmp = vol*100;
  console.log(volAmp);

  image(cam,-width/2,-height/2);
  var amount=10; //to increase
if(frameCount>120) {
  if(volAmp>0.25) {

      push();
      tint(random(255),random(255),random(255)); //to increase
      translate(random(40),random(40)) //to increase
      scale(random(1,1.2)); //to increase
        image(cam,-width/2,-height/2);
        pop();

  image(cam,-width/2,-height/2);
  for(var i=0;i<amount; i++) {
  var x=random(500);
  var y=random(500);
  var c=camPixels.get(x,y);
  fill(c);
  noStroke();
  tint(255,80);
  rect(x-width/2,y-height/2,300+volAmp*50,5+volAmp*2);
  blendMode(DIFFERENCE);
  rect(0,-250,0,250);
  }
}
else{blendMode(BLEND);}

if(volAmp>0.25) {
push();
blendMode(BLEND);
fill(18);
rect(-20,-72,260,50);
fill(245,245,245);
scale(-1,1);
textSize(42);
text('no one cares',-105,-60);
pop();
}
else{
push();
fill(18);
rect(-20,-72,150,50);
fill(245,245,245);
scale(-1,1);
textSize(42);
text('speak',-40,-60);
pop();
  }
}
}
