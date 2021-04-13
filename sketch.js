var ninja
var punchingBag, glove, obstacle,ninImg, beltImg;

var gameState = PLAY;
var PLAY = 1;
var END = 0;




var beltGroup, obstacleGroup;


function setup()
{
  createCanvas(1200,800);

  punchingBag = loadImage("sprites/punch-removebg-preview.png");
  glove = loadImage("sprites/glove-removebg-preview.png");
  ninImg = loadImage("sprites/ninja-removebg-preview.png");
  beltImg = loadImage("sprites/belt-removebg-preview.png");


  


ninja = createSprite(370,700,60,60);
ninja.addImage(ninImg);
ninja.scale = 0.5;


ground = createSprite(0,800,1200,10);
ground.visible = false;


bg=loadImage("sprites/karate.jpg");

beltGroup = new Group();
obstacleGroup = new Group();




}

  


function draw()
{

  background(bg);

  background.velocityX = -3;
  
  if(background.x<0)
  {
    background.x = background.width /2;
  }
  
  if (keyDown("UP")) 
    {
      ninja.velocityY = -12;
    }
    ninja.velocityY = ninja.velocityY +0.8;
  
    ninja.collide(ground);
  
    if (keyDown("DOWN")) 
    {
      ninja.scale = 0.3;
  
     }
     else
     {
       ninja.scale = 0.5;
     }
    
     if(beltGroup.isTouching(ninja))
     {
       beltGroup.destroy();
       stroke("white");
        textSize(50);
        fill("white");
        text("YOU WIN!",500,350);
        obstacleGroup.setVelocityXEach(0);
       beltGroup.setVelocityXEach(0);
       obstacleGroup.destroyEach();
        beltGroup.destroyEach();
       
     
     }
  
     if (obstacleGroup.isTouching(ninja))
     {
  
      
       gameState = END;
       
       
     }
  
  
  
    
  
  
   obstacles();

   belt();

   if(gameState === PLAY)
   {
    
  
   }
  

     else if (gameState === END)
    {
     obstacleGroup.setVelocityXEach(0);
     beltGroup.setVelocityXEach(0);
     obstacleGroup.destroyEach();
      beltGroup.destroyEach();
      stroke("white");
      textSize(50);
      fill("white");
      text("YOU LOSE!",500,350);
      

    }
  


    stroke("white");
      textSize(20);
      fill("white");
      text("* USE ARROW KEYS TO JUMP AND DUCK*",100,100);

   
  

    
  
    

    drawSprites();

    
}

  
function obstacles()
{
  if(World.frameCount%150 === 0)
  {
    obstacle = createSprite(1200,Math.round(random(400,650)), 50, 50);
    obstacle.scale = 0.3;
    obstacle.velocityX = -20;
    r = Math.round(random(1,2));

    if (r === 1)
    {
      obstacle.addImage(punchingBag);
    }

    else 
    {
      obstacle.addImage(glove);
    }
obstacleGroup.add(obstacle);
    
  }
}

function belt()
{
  if (World.frameCount%800 === 0)
  {
    belts = createSprite(1200,Math.round(random(100,700)),50,50);
    belts.velocityX = -25;
    belts.addImage(beltImg);
    belts.scale = 0.3;
    
    
    beltGroup.add(belts);
    
  }

  

  
}







