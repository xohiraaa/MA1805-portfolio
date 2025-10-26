let t = 0; // 

function setup() {
  createCanvas(500,500);
  noStroke(); 
colorMode (HSB, 360, 100, 100, 100);
}

function draw() {
  background(10,12,20);
 push();
  translate(width / 2, height / 2); 
  for (let i = 0; i < 8; i++) {
    let angle = t + i * TWO_PI / 8;
    let x = cos(angle) * 120;
    let y = sin(angle) * 120;
    fill((t * 50 + i * 40) % 360, 70, 90);
    ellipse( x, y, 24);
  }
pop();

t += 0.02; //animation speed

}