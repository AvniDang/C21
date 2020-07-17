var Rect1, movingRect;

function setup() {
  createCanvas(1200,800);
   Rect1 = createSprite(400,100,50,80);
   Rect1.shapeColor = "green";
   Rect1.debug = true;

movingRect = createSprite(400,800,80,30);
movingRect.shapeColor = "green";
movingRect.debug = true;

Rect1.velocityY = 5;
movingRect.velocityY = -5;

}

function draw() {
  background(0,0,0);  
bounceOff(movingRect, Rect1);
  drawSprites();
}