class Player {
  constructor(x, y, w, h) {
    this.w = w;
    this.h = h;
    // create body 
    this.body = Bodies.rectangle(x, y, w, h);
    // add body to world
    Composite.add(engine.world, this.body);
  }
  jump() {
    // set velocity to up 
    Body.setVelocity(this.body, {x: 0, y: -7})
  }
  offscreen() {
    let pos = this.body.position;
    if(pos.x < 0-this.w || pos.y > height+this.h || pos.x > width+this.w) {
      return true;
    }
  }
  reset() {
    Body.setPosition(this.body, {x: width/2, y: height/2});
  }
  draw() {
    // get the body's position
    let pos = this.body.position;
    // get the body's angle
    let angle = this.body.angle;

    push(); // start new drawing state
    // set x and y to center of body
    rectMode(CENTER);
    // set color body to white
    fill(255);
    // translate to the body's position and rotate it
    translate(pos.x, pos.y);
    rotate(angle);
    // draw the body
    rect(0, 0, this.w, this.h);
    pop(); // end drawing state
  }
}
