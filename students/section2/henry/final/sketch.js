var canvas;
var img1;
var img2;
var x;
var z=0;

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
}

function draw() {
  background(255);
  
  z += 0.01;
  x += 0.01;
  a = map(noise(z),0,1,0,width);
  b = map(noise(z+10),0,1,0,width);
  c = map(noise(x),0,1,0,width);
  d = map(noise(x),0,1,0,width);
    image(img1,a,b,200,300)
    image(img2,b,a,200,300)
  
  
}

function mousePressed(){
  fill(random(255),random(255),random(255),random(200,255)),
  textSize(16),
  textStyle(BOLD),
  text("NO SEARCH",touchX-45,touchY+6);
}