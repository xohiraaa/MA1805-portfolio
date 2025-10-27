function setup() {
  createCanvas(400, 400);
  background(10,15,20)
  fill(0,255,150);
  ellipse(200,200,100,100);
}

function draw() {
  background(10,15,20);
  fill(0,255,150);
  ellipse(150+ random(-3, 3), 180 + random(-3,3),60,60);
  ellipse(250 + random(-3,3), 180 + random(-3,3),80,80);
  ellipse(200 + random(-3,3), 240 + random(-3,3),80,80);
  
}