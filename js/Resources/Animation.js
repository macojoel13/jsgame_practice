//Uses images to animate with them
export default class Animation{
  constructor(gameObject, images = [], speed, loop){
    this.gameObject = gameObject;
    this.images = images;
    this.speed = speed;
    this.loop = loop;
    this.counter = 0;
    this.index = 0;
  }
  //Runs at ??? frames
  redraw(canvas, context){
    if(this.counter > 100){
      this.index++;
      //End of animation
      if(this.index >= this.images.length){
        this.index = 0; //go back to first image
      }
      this.counter = 0; //Reset counter
    }
    //Draw the image
    if(this.images[this.index] != null){
    context.drawImage(this.images[this.index], 
    this.gameObject.x, this.gameObject.y ,
    this.gameObject.width, this.gameObject.height);
    }
    //increase counter
    this.counter+=this.speed;
  }
}