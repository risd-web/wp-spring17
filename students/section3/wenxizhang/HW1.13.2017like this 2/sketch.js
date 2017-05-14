var xpos1;
var xpos2;
var xpos3;
var xpos4;
var thin = 8;
var thick = 36;

var diameter
var d1
var d2
var d3
var d4
var angle = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noCursor();
  diameter = height - 10 //random(10,200)
  xpos1 = width / 2;
  xpos2 = width / 2;
  xpos3 = width / 2;
  xpos4 = width / 2;
  d1 = height / 20
  d2 = height / 16
  d3 = height / 8
  d4 = height / 4
  angle = 0
}

function draw() {
  background(240, 248, 255, 20);

  var mx = mouseX * 0.4 - width / 5.0;

  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(xpos2, 300, height / 20, height / 20);
  fill(touchY / 100 * (frameCount % 6), random(150, 255), random(0, 170));
  ellipse(xpos1, touchY + random(30, 2), height / 16, height / 16);
  fill(90 + sin(frameCount / 50), 9 * sin(frameCount / 50), random(4, 10) * sin(frameCount / 50));
  ellipse(xpos4, height / 2, height / 8, height / 8);
  fill(touchX, touchY, random(255));
  ellipse(xpos3, height / 2, height / 4, height / 4);

  xpos1 += mx / 16;
  xpos2 += mx / 64;
  xpos3 -= mx / 16;
  xpos4 -= mx / 64;

  if (xpos1 < -thin) {
    xpos1 = width;
  }
  if (xpos1 > width) {
    xpos1 = -thin;
  }

  if (xpos2 < -thick) {
    xpos2 = width;
  }
  if (xpos2 > width) {
    xpos2 = -thick;
  }

  if (xpos3 < -thin) {
    xpos3 = width;
  }
  if (xpos3 > width) {
    xpos3 = -thin;
  }

  if (xpos4 < -thick) {
    xpos4 = width;
  }
  if (xpos4 > width) {
    xpos4 = -thick;
  }

  fill(random(199, 255), random(21, 192), random(133, 203))
  ellipse(touchX, touchY, 10, 10)

  if (mouseIsPressed) {

    // xpos1 = width / 2
    // xpos2 = width / 4 + width / 2
    // xpos3 = width / 6
    // xpos4 = width / 16 + width / 2

    var d1 = 10 + (sin(angle) * diameter / 2) + diameter / 2;
    var d2 = 10 + (sin(angle + PI / 2) * diameter / 2) + diameter / 2;
    var d3 = 10 + (sin(angle + PI) * diameter / 2) + diameter / 2;

    fill(255, 204, 0)
    ellipse(xpos1, height - 100, d1, d1);
    ellipse(xpos2, height - 800, d2, d2);
    ellipse(xpos3, height - 500, d3, d3);

    angle += 0.02;
  }
//   else{
    
//   var mx = mouseX * 0.4 - width / 5.0;

//   fill(random(0, 255), random(0, 255), random(0, 255));
//   ellipse(xpos2, 300, height / 20, height / 20);
//   fill(touchY / 100 * (frameCount % 6), random(150, 255), random(0, 170));
//   ellipse(xpos1, touchY + random(30, 2), height / 16, height / 16);
//   fill(90 + sin(frameCount / 50), 9 * sin(frameCount / 50), random(4, 10) * sin(frameCount / 50));
//   ellipse(xpos4, height / 2, height / 8, height / 8);
//   fill(touchX, touchY, random(255));
//   ellipse(xpos3, height / 2, height / 4, height / 4);

//   xpos1 += mx / 16;
//   xpos2 += mx / 64;
//   xpos3 -= mx / 16;
//   xpos4 -= mx / 64;

//   if (xpos1 < -thin) {
//     xpos1 = width;
//   }
//   if (xpos1 > width) {
//     xpos1 = -thin;
//   }

//   if (xpos2 < -thick) {
//     xpos2 = width;
//   }
//   if (xpos2 > width) {
//     xpos2 = -thick;
//   }

//   if (xpos3 < -thin) {
//     xpos3 = width;
//   }
//   if (xpos3 > width) {
//     xpos3 = -thin;
//   }

//   if (xpos4 < -thick) {
//     xpos4 = width;
//   }
//   if (xpos4 > width) {
//     xpos4 = -thick;
//   }

//   fill(random(199, 255), random(21, 192), random(133, 203))
//   ellipse(touchX, touchY, 10, 10)
//   }

}