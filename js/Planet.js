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
     for (let i = 0; i < moonCount; i++) {
       // moon position
       let r = random(this._radius, this._radius + 10)
       let theta = random(TWO_PI)
       let moonPosition = createVector(r * cos(theta), r * sin(theta))


       // moon velocity
       let moonVelocity = this.position.copy()
       moonVelocity.rotate(HALF_PI) // rotate the position vector 90 deg
       moonVelocity.setMag( sqrt( Universe.gravitationalConstant * this._mass / moonPosition.mag() ) )

       let newMoon = new Moon(random(4, 6), moonPosition.add(this._position), moonVelocity)
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

     for (let i = 0; i < this._moons.length; i++) {
       this._moons[i].show()
     }

     stroke("black")
     strokeWeight(2)
     this._path.push(this._position.copy())
     if(this._path.length > 1) {
       for (let i = 1; i < this._path.length; i++) {
         line(this._path[i].x, this._path[i].y, this._path[i-1].x, this._path[i-1].y)
       }
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
