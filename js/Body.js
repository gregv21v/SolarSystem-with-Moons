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
     this._path = []
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
     force.setMag( (Universe.gravitationalConstant * this._mass * child._mass) / (radius * radius))
     child.applyForce(force);
   }


   /************************************************************************
                        Getters and Setters
   ************************************************************************/

   /**
    * get id()
    * @description gets the id of this body
    */
   get id() {
     return this._id;
   }

   /**
    * get position()
    * @description gets the position of this body
    */
   get position() {
     return this._position;
   }

   /**
    * set position()
    * @description sets the position of this body
    * @param value the vector value to set this position to
    */
   set position(value) {
     this._position = value
   }


   /**
    * get velocity()
    * @description gets the velocity of this body
    */
   get velocity() {
     return this._velocity;
   }

   /**
    * set velocity()
    * @description sets the velocity of this body
    * @param value the vector value to set this velocity to
    */
   set velocity(value) {
     this._velocity = value
   }

   /**
    * get acceleration()
    * @description gets the acceleration of this body
    */
   get acceleration() {
     return this._acceleration;
   }

   /**
    * set acceleration()
    * @description sets the acceleration of this body
    * @param value the vector value to set this acceleration to
    */
   set acceleration(value) {
     this._acceleration = value
   }

   /**
    * get mass()
    * @description gets the mass of this body
    */
   get mass() {
     return this._mass;
   }

   /**
    * set mass()
    * @description sets the mass of this body
    * @param value the vector value to set this mass to
    */
   set mass(value) {
     this._mass = value
   }

   /**
    * get radius()
    * @description gets the radius of this body
    */
   get radius() {
     return this._radius;
   }

   /**
    * set radius()
    * @description sets the radius of this body
    * @param value the vector value to set this radius to
    */
   set radius(value) {
     this._acceleration = value
   }



}
