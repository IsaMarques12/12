var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");

  boyImg = loadAnimation("Runner-1.png", "Runner-2.png")

  //loadAnimation (carregarAnimação) de corrida para o menino
 
}

function setup(){
  
  createCanvas(400,400);

 path = createSprite(200,0)
 path.addImage(pathImg)
 path.scale = 1.3;
 path.velocityY = 2

 boy = createSprite(200,360);
 boy.addAnimation("correndo", boyImg)
 boy.scale = 0.08;


leftBoundary=createSprite(0,0,40,800);

leftBoundary.visible = false;

rightBoundary=createSprite(400,0,40,800);

rightBoundary.visible = false; 
}

function draw() {
  background(0);
  
  // mover o menino com o mouse usando mouseX

  boy.x = mouseX



  
  
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)


  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
