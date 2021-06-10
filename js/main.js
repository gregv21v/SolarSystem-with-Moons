let sun;
let settings;

/**
  setup
  @description where everything for processing is setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight)
  sun = new Sun(120, createVector(width/2, height/2), createVector(0, 0))
  gui = createGui("Settings");
  gui.addObject(Universe)
  //gui.addObject(sun)
  //console.log(Universe.gravitationalConstant);
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
