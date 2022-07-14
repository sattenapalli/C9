var block
function setup() {
  createCanvas(400,400);
  block = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    block.position.x=block.position.x+5
  }
  if(keyIsDown(LEFT_ARROW)){
    block.position.x=block.position.x-5
  }
  drawSprites();

}





