class Planet extends Body {

  /**
   * constructor()
   * @description constructs the body
   * @param mass the mass of the body
   * @param position the position of the body
   * @param velocity the velocity of the body
   */
   constructor(mass, position, velocity) {
     super(mass, position, velocity)
     this._moons = [];

     let moonCount = random(1, 3);
     for (var i = 0; i < moonCount; i++) {
       // moon position
       let r = random(this._radius, this._radius + 10)
       let theta = random(TWO_PI)
       let moonPosition = createVector(r * cos(theta), r * sin(theta))


       // moon velocity
       let moonVelocity = moonPosition.copy()
       moonVelocity.rotate(HALF_PI) // rotate the position vector 90 deg
       moonVelocity.setMag( sqrt(Body.G * this._mass / moonPosition.mag()) )


       var newMoon = new Moon(random(4, 6), moonPosition.add(this._position), moonVelocity)
       this._moons.push(newMoon)
     }
   }

   /**
    * show()
    * @description shows the body
    */
   show() {
     noStroke();
     fill(73, 98, 156);
     ellipse(this._position.x, this._position.y, this._radius, this._radius)

     for (var i = 0; i < this._moons.length; i++) {
       this._moons[i].show()
     }
   }

   /**
    * update()
    * @description update the planets
    */
   update() {
     super.update();

     for (var i = 0; i < this._moons.length; i++) {
       this._moons[i].update()
       this.attract(this._moons[i])
     }
   }


}
