class Body {

  /**
   * constructor()
   * @description constructs the body
   * @param mass the mass of the body
   * @param position the position of the body
   * @param velocity the velocity of the body
   */
   constructor(mass, position, velocity) {
     this._mass = mass
     this._radius = mass
     this._velocity = velocity
     this._position = position
   }

   /**
    * show()
    * @description shows the body
    */
   show() {
     noStroke();
     fill(163, 162, 0);
     ellipse(this._position.x, this._position.y, this._radius, this._radius)
   }

   /**
    * update()
    * @description updates the body
    */
   update(otherBodies) {
     this._position.x += this._velocity.x;
     this._position.y += this._velocity.y;
   }

   /**
    * applyForce()
    * @description applies a force to the body
    */
   applyForce(force) {
     this._velocity.x += force.x / this._mass
     this._velocity.y += force.y / this._mass
   }

   /**
    * attract()
    * @description attracts two bodies towards each other using
    *  newtons law of gravitation
    */
   attract(child) {
     let radius = dist(this._position.x, this._position.y, child._position.x, child._position.y)
     let force = this._position.copy().sub(child._position)
     force.setMag( (Body.G * this._mass * child._mass) / (radius * radius))
     child.applyForce(force);
   }






}
