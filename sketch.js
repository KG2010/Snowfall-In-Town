const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var guy, guyImage;
var bg;
var snowflake1, snowflake2;


function preload(){
  bg = loadImage("snow2.jpg");
  guyImage = loadImage("guy.png");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,height,800,20);

  guy = createSprite(75, 350, 50, 50);
  guy.addImage(guyImage);
  guy.scale = 0.2;

  snowflake1 = new snow(700,50,70,70);
  snowflake2 = new snow(500,50,70,70);
  snowflake3 = new snow(300,50,70,70);
  snowflake4 = new snow(100,50,70,70);
}

function draw() {
  background(bg);
  Engine.update(engine);


  drawSprites();

  snowflake1.display();
  snowflake2.display();
  snowflake3.display();
  snowflake4.display();
}

function reSnow(){
  if(snowflake1.isTouching(ground)){
    snowflake1.X = 700;
    snowflake1.Y = 50;
  }

  if(snowflake2.isTouching(ground)){
    snowflake2.X = 500;
    snowflake2.Y = 50;
  }
  
  if(snowflake3.isTouching(ground)){
    snowflake3.X = 300;
    snowflake3.Y = 50;
  }
  
  if(snowflake4.isTouching(ground)){
    snowflake4.X = 100;
    snowflake4.Y = 50;
  }

}