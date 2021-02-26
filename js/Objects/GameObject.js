export default class GameObject{
  constructor(x, y, width, height){
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.xSpeed = 0;
    this.ySpeed = 0;
  }
  //This code runs 
  tick(){   
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  redraw(canvas, context){
  }
  
  gravity(){
    this.ySpeed += 0.1;
    this.y += this.ySpeed;
  }
}