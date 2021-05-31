var cat , catImg1, catImg2, catImg3;
var mouse , mouseImg1 ,mouseImg2 , mouseImg3 ;
var bgImg;

function preload() {
    //load the images here
    bgImg=loadImage("IMAGES/garden.png");
    mouseImg1=loadAnimation("IMAGES/mouse1.png");
    mouseImg2=loadAnimation("IMAGES/mouse2.png","IMAGES/mouse3.png");
    mouseImg3=loadAnimation("IMAGES/mouse4.png");
    catImg1=loadAnimation("IMAGES/cat1.png");
    catImg2=loadAnimation("IMAGES/cat2.png","IMAGES/cat3.png");
    catImg3=loadAnimation("IMAGES/cat4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,690);
    cat.addAnimation("cat",catImg1);
    //cat.changeAnimation("cat");
    cat.scale=0.2;

    mouse=createSprite(200,675);
    mouse.addAnimation("mouse",mouseImg1);
   // mouse.changeAnimation("mouse");
    mouse.scale=0.2;


}

function draw() {

    background(bgImg);
    drawSprites();
    //Write condition here to evalute if tom and jerry collide
    if((cat.x-mouse.x)<(cat.width/2)){
    cat.velocityX=0;
   // cat.x = 180 -2;
    mouse.addAnimation("mousecollided",mouseImg3);
    cat.addAnimation("catcollided",catImg3);
    cat.changeAnimation("catcollided");         
    mouse.changeAnimation("mousecollided");
    
    }
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left")){
     mouse.addAnimation("mouseteasing",mouseImg2);
     mouse.changeAnimation("mouseteasing");
     cat.addAnimation("catwalking",catImg2);
     cat.changeAnimation("catwalking");
     cat.velocityX=-3;
     
  }



}
