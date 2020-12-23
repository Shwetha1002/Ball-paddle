var ball1,img,paddle1, ball, paddle;
function preload() {
  ball1 = loadImage("ball.png")
  paddle1 = loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
    ball = createSprite (53,203,20,20)
    paddle = createSprite (353,221,20,20)
  ball.addImage(ball1)
  paddle.addImage(paddle1)
  
  ball.velocityX = 6;
 

}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  
  
paddle.bounceOff(edges);

  
if (ball.bounceOff(paddle) || ball.bounceOff(edges)) 
{ 
randomVelocity();
}
  
  

 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     paddle.velocityY = -4
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY = 4
  }
  drawSprites();
  
}

function randomVelocity()
{
ball.y = random(20,400)
}

