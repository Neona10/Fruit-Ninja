/*
  Hey, and Welcome to the Bona-fide FruitNinja game!
  Its really easy. Just cut the fruits, and don't touch the   aliens- ahem, bacteria.
  Here's a hint:
  * Oranges and Pears give you one point.
  * Apples give you two points.
  * Finally, the super-fast Bananas give you a wholesome three!
Hope you enjoy (^w^)
*/
var PLAY = 1, END = 0, gameState = 1;
var Knife, KnifeImg;
var bad, badImg, badA, bad1Img, BaddiesGroup; 
var orange, orangeImg, apple, appleImg, pear, pearImg;
var banana, bananaImg;
var FruitiesGroup;
var score;
var fin, finImg;

function preload(){
  
 KnifeImg = loadImage("sword.png");
  
 badImg = loadImage("alien1.png");
 badAImg = loadImage("alien2.png");
  
 orangeImg = loadImage("fruit1.png"); 
 appleImg = loadImage("fruit2.png"); 
 pearImg = loadImage("fruit3.png");
 bananaImg = loadImage("fruit4.png"); 
  
 finImg = loadImage("gameover.png");
}

function setup() {
  createCanvas(400, 400);
  //KNIFE:
  Knife = createSprite(200, 200, 20, 20);
  Knife.addImage(KnifeImg);
  Knife.scale = 0.5;
  
  //TO KICK A FALLEN ONE (;_;):
  fin = createSprite(200, 200, 20, 20);
  fin.addImage(finImg);
  fin.scale = 1.8;
  
  //GROUPS:
  //Baddies. Ugh. How unoriginal...('-_-)
  BaddiesGroup = new Group();
  FruitiesGroup = new Group();
  
  OrangeGroup = new Group();
  AppleGroup = new Group();
  PearGroup = new Group();
  BananaGroup = new Group();
  
  //SCORE:
  score = 0;
}

function draw(){
  
  background("lavender");
  
  fill(120, 50, 210);
  text("SCORE: "+ score, 300, 30)

//GAME STATES (Da-dum!):
  if (gameState === PLAY) {
    fin.visible = false;
    
    Knife.x = mouseX;
    Knife.y = mouseY;
    
    BaddiesGroup.setLifetimeEach = (100);
    FruitiesGroup.setLifetimeEach = (100);
    
    spawnBaddies();
    spawnFruits();
    
  }

  if (gameState === END) {
    fin.visible = true;
    
    Knife.x = 210;
    Knife.y = 100;
    
    BaddiesGroup.setLifetimeEach = (-1);
    FruitiesGroup.setLifetimeEach = (-1);
    
    BaddiesGroup.setVelocityXEach = (0);
    FruitiesGroup.setVelocityXEach = (0);
    OrangeGroup.setVelocityXEach = (0);
    AppleGroup.setVelocityXEach = (0);
    PearGroup.setVelocityXEach = (0);
    BananaGroup.setVelocityXEach = (0);
  }
 //END OF GAME STATES (^^)
  
 //THE REAL THING (O_O'):
  //How losing the game works:
   if (Knife.isTouching(BaddiesGroup)) {
     gameState = END;
   }
  
 //How scoring works: 
  if (Knife.isTouching(OrangeGroup)) {
    score = score +1;
    
    OrangeGroup.destroyEach();
  }

  if (Knife.isTouching(PearGroup)) {
    score = score +1;
    
    PearGroup.destroyEach();
  }
  
  if (Knife.isTouching(AppleGroup)) {
    score = score +2;
    
    AppleGroup.destroyEach();
  }
  
  if (Knife.isTouching(BananaGroup)) {
    score = score +3;
    
    BananaGroup.destroyEach();
  }
 //End of 'How scoring works'.  
  
drawSprites();
}

function spawnBaddies() {
  if (frameCount % 110 === 0){  
   bad = createSprite(390, 30, 20, 20);
   bad.y = Math.round(random(30, 400));
   bad.addImage(badImg);
   bad.velocityX = -9;
   BaddiesGroup.add(bad); 
  } 
  
  if (frameCount % 260 === 0) {
   badA = createSprite(390, 100, 20, 20);
   badA.addImage(badAImg);
   badA.y = Math.round(random(30,400));
   badA.velocityX = -4;
   BaddiesGroup.add(badA); 
  }
}

function spawnFruits() {
  if (frameCount % 60 === 0) {
    orange = createSprite(390, 200, 20, 20);
    orange.addImage(orangeImg);
    orange.scale = 0.15;
    orange.y = Math.round(random(30, 400));
    orange.velocityX = -3;
    
    OrangeGroup.add(orange);
    FruitiesGroup.add(orange);
  }
  
  if (frameCount % 50 === 0) {
    apple = createSprite(390, 200, 20, 20);
    apple.addImage(appleImg);
    apple.scale = 0.15;
    apple.y = Math.round(random(30, 400));
    apple.velocityX = -8;
    
    AppleGroup.add(apple);
    FruitiesGroup.add(apple);
  }
  
  if (frameCount % 70 === 0) {
    pear = createSprite(390, 400, 20, 20);
    pear.addImage(pearImg);
    pear.scale = 0.13;
    pear.y = Math.round(random(30, 200));
    pear.velocityX = -5;
    
    PearGroup.add(pear);
    FruitiesGroup.add(pear);
  }
  
  if (frameCount % 60 === 0) {
    banana = createSprite(390, 200, 20, 20);
    banana.addImage(bananaImg);
    banana.scale = 0.1;
    banana.y = Math.round(random(30, 400));
    banana.velocityX = -11;
    
    BananaGroup.add(banana);
    FruitiesGroup.add(banana);
  }
  
}
