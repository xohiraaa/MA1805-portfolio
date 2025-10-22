function setup() {
  createCanvas(400, 400);
  background(10,15,20)
  fill(0,255,150);
  ellipse(200,200,100,100);
}

function draw() {
  background(10,15,20);
  fill(0,255,150);
  ellipse(200+ random(-5, 5), 200 + random(-5,5),100,100)
}