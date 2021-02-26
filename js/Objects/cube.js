import GameObject from "./GameObject.js"

export default class cube extends GameObject{
  constructor(x, y, width, height, color, speed){
    super(x,y,width,height);
    this.color = color;
    this.ySpeed = speed;
    this.xSpeed = speed;
  }
  tick(){
    this.x += this.xSpeed;
    if(this.x > canvas.width){
      this.x = 0-this.width;
    }
    this.gravity();
  }

  redraw(canvas, ctx){
   ctx.fillStyle = this.color;
   ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}