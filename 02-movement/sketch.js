let t = 0; // time

function setup() {
  createCanvas(500,500);
  noStroke();
}

function draw() {
  background(10,12,20);
 push();
  translate(width / 2, height / 2); 

let angle = t;
let x = cos(angle) * 120;
let y = sin(angle) * 120;

fill(120, 255, 180); // green-ish
ellipse(x, y, 40, 49);
pop();

t += 0.02; //animation speed

}
