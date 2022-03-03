// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Composite = Matter.Composite;

var engine, runner;

var player;

var wallTop, wallBottom, pipeTop, pipeBottom;

// set speed of game ans space of pipes
var speed = 3;
    space = 100;

var pipes = [];

function setup() {
  createCanvas(displayWidth, displayHeight/1.3);
  // create an engine
  engine = Engine.create();

  player = new Player(width/2, height/2, 40, 40);
  wallTop = new Wall(width/2, 0, width, 20);
  wallBottom = new Wall(width/2, height, width, 20);
  pipes.push(pipeTop = new Pipe(width, 10, 50, random(0, height-100)));
  // create runner
  runner = Runner.create();
  // run the engine
  Runner.run(runner, engine);
}

function mouseClicked() {
  player.jump()
}

function draw() {
  background(50);
  wallTop.draw();
  wallBottom.draw();
  player.draw();
  if(player.offscreen()) {
    player.reset();
  }
  if(frameCount % 120 == 0) {
    pipes.push(new Pipe(width, 10, 50, random(0, height-100)));
  }
  for(var i = 0; i < pipes.length; i++) {
    pipes[i].draw();
    pipes[i].update();
    if(pipes[i].offscreen()) {
      //r remove the pipe from world
      pipes[i].remove();
      // remove the pipe from the array
      pipes.splice(i, 1);
    }
  }
}
