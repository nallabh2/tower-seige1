//IT SAID THAT WORLD WAS NOT DEFINED SO I DID IT WITHOUT MATTER.JS

var stone;
var sling;


function setup() {
  createCanvas(800,400);
stone = new Stone(300,200,50,50);
sling = new Sling(stone,300,200);
wall = new Stone(600,150,20,100)

}

function draw() {

  background(255,255,255);  
  stone.display();
  sling.display();
  wall.display();
 line(stone.x,stone.y,300,200)
 if(stone.y>300){
   stone.velocityX=0;
   stone.velocityY=0;
 }
 if(touched(stone,wall)){
  wall.velocityX=stone.velocityX/2;
  wall.velocityY=stone.velocityY/2;
  stone.velocityX*=-0.5;
 }
}
function mouseDragged(){


stone.x=mouseX
stone.y=mouseY;
console.log('touched')

}
var htmlBody=document.getElementById("body");
htmlBody.onmouseup=function(){
  stone.velocityX=20;
  stone.gravity=true;
  console.log("released");
}
