const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var stand
var polygon

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   

	engine = Engine.create();
	world = engine.world;

	// Create the Bodies Here.
    ground = new Ground(600,600,1200,20);
    stand= new Ground(100,200,50,50);
    polygon= new sprite(100,200,50,50);

    // level 2
    block8= new Box(330,235,30,40);
    block9= new Box(360,235,30,40);
    block10= new Box(390,235,30,40);
    block11= new Box(420,235,30,40);
    block12= new Box(450,235,30,40);
    // level 3
    block13= new Box(360,195,30,40);
    block14=new Box(390,195,30,40);
    block15= new Box(420,195,30,40);
    // top
    block16= new Box(390,155,30,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  stand.display();
  polygon.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block9.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();



  drawSprites();
}