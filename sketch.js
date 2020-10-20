
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}




function setup() {
  createCanvas(400,400)
  // creating monkey
  monkey= createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
 //creating ground
  ground= createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  FoodGroup= new Group();
  obstacleGroup = new Group();
  score=0;
 
}


function draw() {
  background("white");
  
  
 var  SurvivalTime = 0;
  
  
  stroke("black");
  textSize(20);
  fill("black");
  score=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+score,100,50);
  if (keyDown("space")){
    
    monkey.velocityY=-12;
    
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if (FoodGroup.isTouching(monkey)){
    
    FoodGroup.destroyEach();
  }
  monkey.collide(ground);
  
  if(obstacleGroup.isTouching(monkey)){
    
    
  }
  food();
  obstacles();
    drawSprites();
}

function food(){
  
  if(frameCount%80===0){
    banana=createSprite(400,340);
    banana.y =Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4
    banana.lifetime=100;
    
    FoodGroup.add(banana);
  }
  
  
}

function obstacles(){
  
   if (frameCount % 300 === 0){
   var obstacle = createSprite(400,330);
   obstacle.velocityX = -4;
     obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
     obstacle.lifetime=100;
     
     
   }
  
}


