
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,engine,world;
function setup() {
	createCanvas(1100, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	boxSide1=new Dustbin(800,height-50,300,20);
	
	boxSide2=new Dustbin(960,height-100,20,120);
	 
	boxSide3=new Dustbin(640,height-100,20,120);

	ball=new Ball(50,500,10);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
 background("black");

 fill("yellow");
 rectMode(CENTER); 
rect(ground.position.x,ground.position.y,1080,20)
  
  ball.display();
  
 
 boxSide1.display() ;
 boxSide2.display() ;
 boxSide3.display() ;
  
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	console.log(ball);
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})

	}

}

