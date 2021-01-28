
var car 

var wall

var speed

var weight

function setup() {
  createCanvas(1600,400);
 car = createSprite(50, 200, 50, 50);
 wall = createSprite(1500, 200, 60, height/2);

speed = random(55,90)
weight = random(400, 1500)

car.velocityX = speed;

}

function draw() {
  background(255,255,255);  
  
  if(wall.x - car.x < (car.width + wall.width) /2 ){
    car.velocity.x = 0
    var insurancecost = 0.5 * weight * speed * speed / 22509
  
  console.log(insurancecost)
  
    if(insurancecost < 100 ){

       car.shapecolor =  color(255,0,0)  //"green"

   }

   if(insurancecost > 100 && insurancecost < 180){

    car.shapecolor = color(230,230,0)   //"yellow"

}

   if(insurancecost > 180 ){

  car.shapecolor = color(0,255,0)   //"red"

}



  }
  
  
  
  
  
  
  drawSprites();
}