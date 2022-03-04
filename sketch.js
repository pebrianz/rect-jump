// module aliases
var Engine = Matter.Engine,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Body = Matter.Body;


var engine, runner;

var player;

var wallTop, wallBottom, pipeTop, pipeBottom;

// set speed of game ans space of pipes
var speed = 3;
    space = 150;

var pipes = [];


function setup() {
  createCanvas(displayWidth, displayHeight/1.3);
  // create an engine
  engine = Engine.create();
  // set frameRate
  frameRate(60);
  // create player
  player = new Player(width/2, height/2, 40, 40);
  // create wallTop 
  wallTop = new Wall(width/2, 0, width, 20);
  // create wallBottom 
  wallBottom = new Wall(width/2, height, width, 20);
  // create pipes
  pipes.push(new Pipe(width, 10, 50, random(0, height-100)));
  // create runner
  runner = Runner.create();
  // run the engine
  Runner.run(runner, engine);
}

function mouseClicked() {
  player.jump();
}

function draw() {
  // set background color
  background(50);
  // draw player
  player.draw();
  // draw wallTop
  wallTop.draw();
  // draw wallBottom
  wallBottom.draw();
  // if player out of screen, reset player position
  if(player.offscreen()) {
    player.reset();
  }
  // if frameCount % 120 == 0, create new pipe
  if(frameCount % 120 == 0) {
    pipes.push(new Pipe(width, 10, 50, random(0, height-100)));
  }
  // draw pipes
  for(let i = 0; i < pipes.length; i++) {
    pipes[i].draw();
    // update the pipe position
    pipes[i].update();
    // if pipe out of screen, remove it
    if(pipes[i].offscreen()) {
      pipes[i].remove();
    }
  }
}
