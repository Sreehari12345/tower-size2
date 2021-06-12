const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
const Constraint = Matter.Constraint
var engine,world
var polygonimg
function preload(){
  polygonimg = loadImage("polygon.png")
}
function setup() {
  createCanvas(1200,400);
engine = Engine.create()
world = engine.world
ground1 = new Ground(600, height, 1200, 20)
platform = new Ground(600, 320, 300, 20)
platform2 = new Ground(900, 180, 190, 20)
block1 = new Box(850,150,30,30);
block2 = new Box(880,150,30,30)
block3 = new Box(910,150,30,30)
block4 = new Box(940,150,30,30)
block5 = new Box(970,150,30,30)
block6 = new Box(960,120,30,30)
block7 = new Box(930,120,30,30)
block8 = new Box(900,120,30,30)
block9 = new Box(870,120,30,30)
block10 = new Box(900,90,30,30)
block11 = new Box(930,90,30,30)
block12 = new Box(910,60,30,30)
block13 = new Box(660,290,30,30)
block14 = new Box(690,290,30,30)
block15 = new Box(720,290,30,30)
block16 = new Box(630,290,30,30)
block17 = new Box(600,290,30,30)
block18 = new Box(570,290,30,30)
block19 = new Box(540,290,30,30)
block20 = new Box(510,290,30,30)
block21 = new Box(480,290,30,30)
block22 = new Box(510,260,30,30)
block23 = new Box(540,260,30,30)
block24 = new Box(570,260,30,30)
block25 = new Box(600,260,30,30)
block26 = new Box(630,260,30,30)
block27 = new Box(660,260,30,30)
block28 = new Box(690,260,30,30)
block29 = new Box(540,230,30,30)
block30 = new Box(570,230,30,30)
block31 = new Box(600,230,30,30)
block32 = new Box(630,230,30,30)
block33 = new Box(660,230,30,30)
block34 = new Box(570,200,30,30)
block35 = new Box(600,200,30,30)
block36 = new Box(630,200,30,30)
block37 = new Box(600,170,30,30)
polygon = Bodies.circle(50,200,20)
World.add(world,polygon)
slingshot = new SlingShot(this.polygon,{x:200,y:200})


}

function draw() {
  background("blue"); 
  Engine.update(engine)
  ground1.display()
  platform.display()
  platform2.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
  block24.display()
  block25.display()
  block26.display()
  block27.display()
  block28.display()
  block29.display()
  block30.display()
  block31.display()
  block32.display()
  block33.display()
  block34.display()
  block35.display()
  block36.display()
  block37.display()
  imageMode(CENTER)
  image(polygonimg,polygon.position.x,polygon.position.y,40,40)
  slingshot.display()
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})

}
function mouseReleased(){
  slingshot.fly()
}
function keyPressed(){
  if (keyCode===32){slingshot.attach(this.polygon)}
  
}