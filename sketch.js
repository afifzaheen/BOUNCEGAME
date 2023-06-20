var box1,box2,box3;
var wall1,wall3;
var playerscore=0,compscore=0;
var ball,player,computer;




function preload(){
  
  ball = loadImage("leoo.png");
  computer = loadImage("leoo1.png");
  player = loadImage("leoo2.png");
  hit = loadSound("hit.mp3");
  
  
}

function setup() {
  createCanvas(400, 400);
  
  box1 = createSprite(200,200,20,20);
  box1.addImage(ball);
  box1.scale=0.1;
  box2 = createSprite(15,180,15,70);
   box2.addImage(computer);
  box2.scale=0.2;
  box3 = createSprite(385,180,15,70);
   box3.addImage(player);
  box3.scale=0.3;
  wall1 = createSprite(200,2,400,5);

  wall3 = createSprite(200,398,400,5);
  box1.velocityX=2;
  box1.velocityY=3;
  
}

function draw() {
   background("white");
  fill("red");
  text("Playerscore:  "+playerscore,300,50);
    text("Compscore:  "+compscore,300,70);
   text("My GAME",150,300);
  box3.y = mouseY;
   box2.y = box1.y;

  createEdgeSprites();
  
    if(box1.isTouching(box3))
{
    hit.play();
    playerscore=playerscore+1;
    
    
    
}
  if(box1.isTouching(box2)){
    
    hit.play();
    compscore=compscore+1;
  }
  
  box1.bounceOff(box3);
  box1.bounceOff(wall1);
 
  box1.bounceOff(box2);
  box1.bounceOff(wall3);
  
  if(box1.x >400 ||box1.x<0)
  {
    box1.x = 200;
  }
  

  
  drawSprites();
}