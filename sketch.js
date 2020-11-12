// Name Spacing 
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, engine, object;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var object_options = {
    isStatic: true
  }
  object = Bodies.rectangle(200, 370, 400, 30, object_options);
  World.add(world, object);
  
  console.log(object);
  console.log(object.position.x);
  var ball_options = {
    restitution: 0.8
  }
  ball = Bodies.circle(200, 50, 30, ball_options);
  World.add(world, ball);
  
}

function draw() {
  background("black"); 
  Engine.update(engine);
  rectMode(CENTER)
  // rect(200,200,50,50)
   rect(object.position.x, object.position.y, 400,30)
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30)
}