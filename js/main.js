let sun;
let destabilize = 0.2;

/**
  setup
  @description where everything for processing is setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight)
  sun = new Sun(120, createVector(width/2, height/2), createVector(0, 0))
}


/**
  draw
  @description where everything is drawn
*/
function draw() {
  background(180)
  sun.show()
  sun.update()
}
