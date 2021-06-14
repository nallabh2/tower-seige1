class Stone{
constructor(x,y,w,h){

this.x=x;
this.y=y;
this.width=w;
this.height=h;
this.velocityX=0;
this.velocityY=0;
this.gravity=false;
}

display(){

fill('grey');
rect(this.x,this.y,this.width,this.height);

this.x+=this.velocityX;
this.y+=this.velocityY;

if(this.gravity==true){
    this.velocityY+=0.2;
}
}


}