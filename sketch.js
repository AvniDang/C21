var gameObject1, movingRect;

function setup() {
  createCanvas(1200,800);
gameObject1 = createSprite(100,100,50,50);
gameObject1.shapeColor = "green";
gameObject2 = createSprite(250,100,50,50);
gameObject2.shapeColor = "green";
gameObject3 = createSprite(400,100,50,50);
gameObject3.shapeColor = "green";
gameObject4 = createSprite(550,100,50,50);
gameObject4.shapeColor = "green";


movingRect = createSprite(400,200,80,30);
movingRect.shapeColor = "green";


  
}

function draw() {
  background(0,0,0);  
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;


if(isTouching(movingRect, gameObject3) ){
movingRect.shapeColor = "red";
gameObject3.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  gameObject3.shapeColor = "green";
}

  drawSprites();
}