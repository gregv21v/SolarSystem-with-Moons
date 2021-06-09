class Sun extends Body {

  /**
   * constructor()
   * @description constructs the body
   * @param mass the mass of the body
   * @param position the position of the body
   * @param velocity the velocity of the body
   */
   constructor(mass, position, velocity) {
     super(mass, position, velocity)
     this._planets = [];

     let planetCount = random(3, 5);
     for (var i = 0; i < planetCount; i++) {
       // planet position
       let r = random(this._radius, min(windowWidth/2, windowHeight/2))
       let theta = random(TWO_PI)
       let planetPosition = createVector(r * cos(theta), r * sin(theta))

       // planet velocity
       let planetVelocity = planetPosition.copy()
       planetVelocity.rotate(HALF_PI)
       planetVelocity.setMag( sqrt(Body.G * this._mass / planetPosition.mag()) )
       //planetVelocity.mult(random(1 - destabilize, 1 + destabilize))

       this._planets.push(
         new Planet(
           random(20, 50),
           planetPosition.add(this._position),
           planetVelocity
         ))
     }
   }

   /**
    * show()
    * @description shows the body
    */
   show() {
     noStroke();
     fill(120, 10, 21);
     ellipse(this._position.x, this._position.y, this._radius, this._radius)

     for (var i = 0; i < this._planets.length; i++) {
       this._planets[i].show()
     }
   }

   /**
    * update()
    * @description update the planets
    */
   update() {
     super.update();

     for (var i = 0; i < this._planets.length; i++) {
       this._planets[i].update()
       this.attract(this._planets[i])
     }
   }



}
