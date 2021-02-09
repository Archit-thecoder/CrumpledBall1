const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ball,rect1,rect2,rect3,ground


function setup() {
  createCanvas(1200,400);
  engine = Engine.create()
  world = engine.world
  ball = new Paper()
  ground = new Block(600,390,1200,20)
  rect1 = new Block(1100,330,20,100)
  rect2 = new Block(990,370,200,20)
  rect3 = new Block(880,330,20,100)
}

function draw() {
  background(0);
  Engine.update(engine)  
 ball.display()
fill("brown")
ground.display()
fill("yellow")
rect1.display()
rect3.display()
rect2.display()
}
function keyPressed(){
  if(keyDown(UP_ARROW)){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:105,y:-65})
  }
}