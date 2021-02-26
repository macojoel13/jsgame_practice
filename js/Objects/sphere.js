import GameObject from "./GameObject.js"

export default class sphere extends GameObject{
  constructor(x, y, width, height, color, speed){
    super(x,y,width,height);
    this.color = color;
    this.speed = speed;
  }
  
  tick(){
    this.x += this.speed;
    if(this.x > canvas.width){
      this.x = 0-this.width;
    }
    this.gravity();
  }

  redraw(canvas, ctx){
    var R = this.width/2;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.lineWidth = 3;
    // ctx.rect(this.x, this.y, this.width, this.height);
    ctx.arc((this.x+this.width/2), (this.y+this.height/2), R, 0, 2 * Math.PI, false);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.fill();
  }

}