var ball,imgpaddle;

function preload() {
  /* preload your images here of the ball and the paddle */
  ball2 = loadImage("ball.png");
  paddle2 = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  paddle = createSprite(385,200,10,20);
  ball = createSprite(200,200,10,10);
  /* assign the images to the sprites */
  paddle.addImage(paddle2);
  ball.addImage(ball2);
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;
  ball.bounceOff(paddle);
  
}

function draw() {
  background(2300);
  /* create Edge Sprites here */
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  edges=createEdgeSprites();
  
  /* Allow the ball to bounceoff from the paddle */
  
  if(ball.bounceOff(paddle)){
    randomVelocity();
  }
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  /* Prevent the paddle from going out of the edges */ 
  paddle.collide(edges);
  
  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y - 5;
     /* what should happen when you press the UP Arrow Key */
  }
  if(paddle.collide(edges[0])){
  paddle.y = 200;
  }
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y + 5;
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  ball.velocityY = random(-10,10);
  ball.velocityX = -10;
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

