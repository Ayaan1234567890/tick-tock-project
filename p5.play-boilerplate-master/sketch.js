var hr,min,sec ;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);
  hr = hour();
  min = minute();
  sec = second();
  translate(200,200);
  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(hr % 12,0,12,0,360);
  
  push(); 
  rotate(secAngle)
  stroke(255,0,0);
  strokeWeight(7)
  line(0,0,60,0)
  pop();

  noFill(),
  stroke(255,255,255);
  strokeWeight(7)
  stroke(255,0,0);
  arc(0, 0, 300, 300, 0,secAngle);
  
  strokeWeight(7)
  stroke(0,255,0);
  arc(0, 0, 290, 290, 0,minAngle);
  
  strokeWeight(7)
  stroke(0,0,255);
  arc(0, 0, 280, 280, 0,hrAngle);
  
  push(); 
  rotate(minAngle)
  stroke(0,255,0);
  strokeWeight(7)
  line(0,0,60,0)
  pop();

  push(); 
  rotate(hrAngle)
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,60,0);
  pop();
  drawSprites();
}