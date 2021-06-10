class Moon extends Body {

  /**
   * constructor()
   * @description constructs the body
   * @param mass the mass of the body
   * @param position the position of the body
   * @param velocity the velocity of the body
   */
   constructor(mass, position, velocity) {
     super(mass, position, velocity)
   }

   /**
    * show()
    * @description shows the body
    */
   show() {
     noStroke();
     fill(163, 162, 0);
     ellipse(this._position.x, this._position.y, this._radius, this._radius)


     stroke("black")
     strokeWeight(1)
     this._path.push(this._position.copy())
     if(this._path.length > 1) {
       for (let i = 1; i < this._path.length; i++) {
         line(this._path[i].x, this._path[i].y, this._path[i-1].x, this._path[i-1].y)
       }
     }
   }

   /**
    * update()
    * @description updates the body
    */
   update() {
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
     force.setMag( (Universe.gravitationalConstant * this._mass * child._mass) / (radius * radius))
     child.applyForce(force);
   }



}
