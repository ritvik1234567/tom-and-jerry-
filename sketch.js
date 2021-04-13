var  canvas ,bg 
var cat,catImage1 ,catImage2,catImage4 ;
var m1 , m2 
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")   
    catImage1=loadAnimation("images/cat1.png")
    catImage2=loadAnimation("images/cat2.png","images/cat3.png")
    catImage4=loadAnimation("images/cat4.png")
    m1=loadAnimation("images/mouse1.png")
    m2=loadAnimation("images/mouse2.png","images/mouse3.png")
    m3=loadAnimation("images/mouse4.png") 
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600)
    cat.addAnimation("sleep",catImage1)
    cat.scale=0.2
    m=createSprite(200,600)
    m.addAnimation("stand",m1)
    m.scale=0.1  
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-m.x<(cat.width-m.width)/2){
    cat.velocityX=0
    cat.addAnimation("catmove",catImage4)
    cat.x=300
    cat.scale=0.2
    cat.chageAnimation("catmove")
    m.addAnimation("mI",m3)
    m.scale=0.15
    m.changeAnimation("mI")
}
    drawSprites();

}   


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode===LEFT_ARROW){
        cat.velocityX=-5
        cat.addAnimation("run",catImage2)
        cat.changeAnimation("run")
        m.addAnimation("stand",m2)
        m.frameDelay=25
        m.changeAnimation("stand")
    }

}
