
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	 ball1 = new Ball(200,450,30);
	 trashcan1 = new Block(500,430,10,50);
	 trashcan2 = new Block(575,470,150,10);
	 trashcan3 = new Block(650,430,10,50);
	 ground = new Block(400,500,800,10);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  trashcan1.display();
  trashcan2.display();
  trashcan3.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 38) {

	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
  
	}
}


