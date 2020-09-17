
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,side1,side2,side3;
var ground1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
   paper=new Paper(50,10);
   ground1=new ground(400,610,800,20)
  side1=new Bin(600,590,100,15);
  side2=new Bin(550,560,15,80);
  side3=new Bin(650,560,15,80);
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  jump();
  drawSprites();
  ground1.display();
  side1.display();
  side2.display();
  side3.display();
  paper.display();
}

function jump(){
  
  if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }	
 
}


