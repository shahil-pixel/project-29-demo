const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,stand;
var block8,block9,block10,block11,block12,block13,block14,block15
,block16;

function preload(){


}


function setup() {
   createCanvas(800,400);

   engine = Engine.create();
   world = engine.world;
  
  //level two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);

  //level 3
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);

  //top
  block16 = new Box(390,155,30,40);



  ground = new Ground(400,200,50,50);
  stand = new Ground(200,400,50,50);
}

function draw() {
  background(255,255,255);  
  ground.display();
  stand.display();
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  
  drawSprites();
}