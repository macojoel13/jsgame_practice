import GameObject from "./GameObject.js"

export default class sphere extends GameObject{
  constructor(x, y, width, height, color, speed){
    super(x,y,width,height);
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
    var ctx = canvas.getContext('2d');
    var R = 15;
    ctx.beginPath();
    ctx.arc(this.x, this.y, R, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();
  }

}