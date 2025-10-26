let t = 0; // time

function setup() {
  createCanvas(500,500);
  noStroke();
}

function draw() {
  background(10,12,20); //dark bg

// orbit maths (around 250,250 for now) 
let angle = t;
let x = 250 + cos(angle) * 120;
let y =250 + sin(angle) * 120;

fill(120, 255, 180); // green-ish
ellipse(x, y, 40, 49);

t += 0.02; //animation speed

}
  
