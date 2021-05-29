var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 600);

	fairyVoice.play();

	
	fairy = createSprite(200, 420);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 );
	World.add(world, starBody);
	
	Engine.run(engine);



}


function draw() {
	background(bgImg);
	
	if(star.y > 470 && starBody.position.y > 470){
		Matter.Body.setStatic(starBody,true);
	
	Engine.update(engine)

}
 
 
 

if(star.y>470){
	star.velocityY=0
}

  drawSprites();

}

function keyPressed (){
if(keyCode===RIGHT_ARROW){
	fairy.x = fairy.x + 20;
}

if(keyCode===LEFT_ARROW){
	fairy.x = fairy.x - 20;
}

if(keyCode===DOWN_ARROW){
	fairy.y = fairy.y + 20;
}

if(keyCode===UP_ARROW){
	fairy.y = fairy.y - 20;
}

if(keyCode===DOWN_ARROW){
	Matter.Body.setStatic(starBody,false);
}

}



















