const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine,world;
var sceneImg;
var sceneImg2;
var scene;
var apple;
var button,buttonImg;
var ground,invisibleGround;

var playerJunko1,playerJunko1Img;
var junko,junkoImg;
var cloudImg,cloud;
var gameState = 0;


function preload(){
    sceneImg = loadImage("images/scene.png");
    buttonImg=loadImage("images/playButton.png");
    sceneImg2 = loadImage("images/bg.jpg");
    
    junkoImg = loadImage("images/junko1.png");
    cloudImg = loadImage("images/cloud.png");

    playerJunko1Img = loadImage("images/girlSling.jpg");
}

function setup(){
   createCanvas(windowWidth,windowHeight);
   engine = Engine.create();
   world = engine.world;

  
   
   apple = new Apple(playerJunko1.x,playerJunko1.y,20,20);

   

   scene = createSprite(width/2,height/2);
   scene.addImage(sceneImg);

   button = createSprite(width-200,height-100);
   button.addImage(buttonImg);

   junko = createSprite(200,height-200);
   junko.addImage(junkoImg);

   cloud = createSprite(450,height/2-100);
   cloud.addImage(cloudImg);

   


}

function draw(){
  
  if(gameState===0){

  
    drawSprites();

   
 
  
   textSize(16);
   textFont("Georgia");
   fill("black")
   text("Hello my name is Junko.",350,height/2-150);
   fill("black")
   text("I am on a mission to climb Mt Everest.",320,height/2-120);
   fill("black")
   text("Help me complete my mission.Press ",320,height/2-90);
   fill("black")
   text("the Play button to start ",360,height/2-60);
   text(" the game ",390,height/2-30);
   
   
   
   if(mousePressedOver(button)){
     gameState=1;
   }
  
  }
   else if(gameState===1){

    drawSprites();

    background(sceneImg2);
    
   
    fill("brown")
    ground = createSprite(0,windowHeight,windowWidth,5);
  
    invisibleGround = createSprite(300,198,6000,5);
    invisibleGround.visible = false;  

    playerJunko1 = createSprite(200,height-200);
    playerJunko1.addImage(playerJunko1Img);
   
    apple.display();

 

   }
  

  
    
}
/*
function mouseDragged(){
   Matter.Body.setPosition(apple.body, {x: mouseX , y: mouseY});
 }
 
 
 function mouseReleased(){
   sling.fly();
 }
 
 function keyPressed(){
   if(keyCode===32){
     Matter.Body.setPosition(apple.body,{x:100,y:480});
     sling.attach(apple.body);
   }
 }
*/


