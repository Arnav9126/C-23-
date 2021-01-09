//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;

var box1, box2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,380,400,30);

  box1 = new Box(100,100,50,50);
  box2 = new Box(120, 50, 50, 80);

}

function draw() {
  background(0, 141, 242);  

  Engine.update(engine);
  
  box1.display();
  box2.display();

  ground.display ();

}