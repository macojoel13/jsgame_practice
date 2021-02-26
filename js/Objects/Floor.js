import GameObject from "./GameObject.js"

export default class Floor extends GameObject{
  constructor(x, y, width, height){
    super(x,y,width,height);
  }

  collision(object){
    //y AXIS BOUND
    if(object.y+object.height > this.y && object.y+object.height < this.y+this.height){
      //X AXIS BOUND
      if(object.x+object.width > this.x && object.x+object.width < this.x+this.width){
        //Collision happened
        object.y = this.y - object.height;
        object.ySpeed = 0;
        //object.ySpeed = -1;//Bounce Effect
      }
    }
  }
  
  redraw(canvas, ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}