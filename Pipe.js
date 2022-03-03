class Pipe {
  constructor(x, y, w, h) {
    this.w = w;
    this.h = h;
    this.x = x+w;
    this.y = h/2+y;
    this.speed = speed * -1;
    // create the top pipe
    this.bodyTop = Bodies.rectangle(this.x, this.y, w, h, {isStatic: true});
    // get y positiin of bottom pipe
    this.bottomY = this.h + space
    // get y position of ground
    this.ground = wallBottom.body.position.y - 10;
    // get height of bottom pipe
    this.bottomH = this.ground- this.bottomY;
    // get center y position of bottom pipe
    this.bottomCenterY = this.bottomY + this.bottomH/2;
    // create the bottom pipe
    this.bodyBottom = Bodies.rectangle(this.x, this.bottomCenterY, w, this.bottomH, {isStatic: true});
    // add the body to the world
    Composite.add(engine.world, [this.bodyTop, this.bodyBottom]);
  }
  remove() {
    // remove the body from the world
    Composite.remove(engine.world, [this.bodyTop, this.bodyBottom]);
  }
  offscreen() {
    if(this.bodyTop.position.x < 0-this.w) {
      return true;
    }
  }
  update() {
    // update the body's position
    Body.translate(this.bodyTop, {x: this.speed, y: 0})
    Body.translate(this.bodyBottom, {x: this.speed, y: 0})
  }
  draw() {
    // get the body's position
    let posTop = this.bodyTop.position;
    let posBottom = this.bodyBottom.position;
    // draw the pipe
    rectMode(CENTER);
    fill(255);
    rect(posTop.x, posTop.y, this.w, this.h);
    rect(posBottom.x, posBottom.y, this.w, this.bottomH);
  }
}
