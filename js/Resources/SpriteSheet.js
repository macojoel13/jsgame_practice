//Loads all images
export default class SpriteSheet
{
  constructor(){
    this.spriteSheet = new Image();
    this.spriteSheet.src = 'images/test.png';
    this.images = new Array();
    console.log(this.images.length);
  }

  redraw(){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.putImageData(this.images[0], 10, 10);
  }
}