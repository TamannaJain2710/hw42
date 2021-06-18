var bg,sc,sc2,sc3,sc4,issImg;
var iss,spacecraft;
var hasDocked = false;

function preload(){
  bg = loadImage("img/spacebg.jpg");
  sc = loadImage("img/spacecraft1.png");
  sc2 = loadImage("img/spacecraft2.png");
  sc3 = loadImage("img/spacecraft3.png");
  sc4 = loadImage("img/spacecraft4.png");
  issImg = loadImage("img/iss.png")
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  spacecraft = createSprite(400, 300, 50, 50);
  spacecraft.addImage(sc)
  //spacecraft.x = random(200,600);
  spacecraft.scale= 0.25;
}

function draw() {
  background(bg);  
  if (!hasDocked){
  if(keyIsDown(RIGHT_ARROW)){
    spacecraft.x += 2;
    spacecraft.addImage(sc4)
  }else if(keyIsDown(LEFT_ARROW)){
    spacecraft.x -= 2;
    spacecraft.addImage(sc3)
  }

  if(keyIsDown(UP_ARROW)){
    spacecraft.y -= 2;
    spacecraft.addImage(sc2)
  }else if(keyIsDown(DOWN_ARROW)){
    spacecraft.y += 2;
    spacecraft.addImage(sc2)
  }
  }
  if(spacecraft.x >= 330 && spacecraft.x <= 340 && spacecraft.y >= 310 && spacecraft.y <= 320){
    hasDocked = true;
    //spacecraft.addImage(sc);
    stroke("white")
    fill("white")
    text("Docking Successful",400,350);
  }
  console.log(spacecraft.x,spacecraft.y);
  drawSprites();
}