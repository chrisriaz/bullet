function setup() {
  createCanvas(1600,400);

thickness=random(22,83)
speed=random(223,321)
weight=random(30,52)

bullet=createSprite(50,200,50,50);

wall=createSprite(1200,200,60,height/2)



}

var wall, thickness;

var bullet, speed, weight;



function draw() {
  background(0,0,0);  
  drawSprites();

   wall.shapeColor = 80,80,80;

  bullet.velocityX = speed;

  
if(hasCollided(bullet, wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if (damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }


if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}
}
}

function hasCollided(Lbullet, Lwall)
{
  bulletRightEdge = bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
   return true
  } 
  return false

}