import GameObject from "./GameObject.js"

export default class cube extends GameObject{
  constructor(name,x, y, width, height, color, speed){
    super(name,x,y,width,height);
    this.color = color;
    this.speed = speed;
  }
  
  run(){
    this.x += this.speed;
    if(this.x > canvas.width){
      this.x = 0-this.width;
    }
  }

  redraw(){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

}