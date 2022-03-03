class Wall {
  constructor(x, y, w, h) {
    // crwatw body 
    this.body = Bodies.rectangle(x, y, w, h, {isStatic: true});
    // add the body to the world
    Composite.add(engine.world, this.body);
  }
  draw() {
    // get the body's position
    let pos = this.body.position;
    // get width and height of the body
    let w = this.body.bounds.max.x - this.body.bounds.min.x;
    let h = this.body.bounds.max.y - this.body.bounds.min.y;
    rectMode(CENTER);
    fill(255);
    rect(pos.x, pos.y, w, h);
  }
}
