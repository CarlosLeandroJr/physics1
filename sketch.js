const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button;
var button1;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  button = createImg("up.png");
  button.position(20,30);
  button.size(50,50);
  button.mouseClicked(vForse);
  button1 = createImg("right.png");
  button1.position(330,30);
  button1.size(50,50);
  button1.mouseClicked(hForse);

  ground = new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

   var ball_options = {
   restitution: 0.95
  }

  ball = Bodies.circle(200,200,20,ball_options); 

  World.add(world,ball);

  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x, ball.position.y, 20);
  Engine.update(engine);
}

function vForse() {
Matter.Body.applyForce (ball, {x:0, y:0}, {x:0, y: -0.05});

}

function hForse() {
 
Matter.Body.applyForce (ball, {x:0, y:0}, {x:0.05, y: 0});
}
