var cam;
var mic;
var a=0;
var threshold=0.8
function setup() {
  createCanvas(500,500);
  background(45);
  rectMode(CENTER);
  mic = new p5.AudioIn();
  cam = createCapture(VIDEO);
  mic.start();
  cam.size(500,375);
  cam.hide();
  console.log("NOTHING TO SEE HERE");
}

function draw() {
  scale(1.33);
  translate(width/3,height/2);
  scale(-1,1);
  var camPixels = cam.loadPixels();
  var vol = mic.getLevel();
  var volAmp = vol*100;

  image(cam,-width/2,-height/2);
  var amount=random(10,15+a);
if(frameCount>120) {
  if(volAmp>threshold) {
      a+=1
      if(a>=80){a=80};
      push();
      tint(random(255),random(255),random(255));
      translate(random(40+volAmp*5+a/2),random(40+volAmp*5+a/2));
      scale(random(1+volAmp/10,1+volAmp/10+a/20));
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
  rect(x-width/2,y-height/2,300+volAmp*2+a/10,5+volAmp*2+a/10);
  blendMode(DIFFERENCE);
  rect(0,-250,0,250);
  }
}
else{blendMode(BLEND);}

if(a>20) {
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
