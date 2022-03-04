class Wall {
  constructor(x, y, w, h) {
    this.w = w;
    this.h = h;
    // crwatw body 
    this.body = Bodies.rectangle(x, y, w, h, {isStatic: true});
    // add the body to the world
    Composite.add(engine.world, this.body);
  }
  draw() {
    // get the body's position
    let pos = this.body.position;
    // set x and y to center of body
    rectMode(CENTER);
    // set color to fill the body
    fill(255);
    // draw the body
    rect(pos.x, pos.y, this.w, this.h);
  }
}
