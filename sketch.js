var iss1,sc,sc1,sc2,sc3,sc4
var iss, spacecraft,hadDocked

function preload(){
iss1=loadImage("Docking-undocking/iss.png")
sc=loadImage("Docking-undocking/spacebg.jpg")
sc1=loadImage("Docking-undocking/spacecraft1.png")
sc2=loadImage("Docking-undocking/spacecraft2.png")
sc3=loadImage("Docking-undocking/spacecraft3.png")
sc4=loadImage("Docking-undocking/spacecraft4.png")

}






function setup() {
  createCanvas(1200,600);
  iss=createSprite(600,310,50,50)
  iss.addImage(iss1)
  iss.scale=1
  spacecraft=createSprite(600,500,50,50)
  spacecraft.addImage(sc1)
  spacecraft.scale=0.3
}

function draw() {
  background(sc);
  if(keyDown("UP_ARROW")){
    spacecraft.y=spacecraft.y-1
  }
  
  if(keyDown("DOWN_ARROW")){
    spacecraft.X=spacecraft.X+1
    spacecraft.addImage(sc2)
  }
if(!hasDocked){
spacecraft.x=spacecraft.x+random(-1,1)

if(keyDown("RIGHT_ARROW")){
  spacecraft.X=spacecraft.X+1
  spacecraft.addImage(sc2)
}



if(keyDown("LEFT_ARROW")){
  spacecraft.X=spacecraft.X+1
  spacecraft.addImage(sc2)
}

if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){ hasDocked = true;}




}

  drawSprites();
}
