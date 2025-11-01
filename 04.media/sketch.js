// Media: jungle amen-break cone pulse 
let bass;
let bassStart;

function preload() {
  //amen break
  bass = loadSound('244342__insidebeat__amen-break-slices-1.wav');
}

function setup() {
  createCanvas(400, 400);
  background(10, 12, 20);
  noStroke();
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(10, 12, 20);

  // only pulse after click 
  if (bass.isPlaying()) {
    let progress = (millis() - bassStart) / 1000; //  seconds
    let s = map(progress, 0, bass.duration(), 20, 200);
    fill(100 + sin(progress * 3) * 20, 80, 90); // jungle green
    ellipse(200, 200, s, s);
  } else {
    // waiting text 
    fill(255);
    textAlign(CENTER, CENTER);
    text('CLICK TO START JUNGLE', 200, 200);
  }
}

// Notion pattern: click to play + browser unblock
function mousePressed() {
  if (!bass.isPlaying()) {
    bass.play();
    bassStart = millis();
  }
}
