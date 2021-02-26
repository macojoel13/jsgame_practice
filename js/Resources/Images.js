//Loads all images
export default class Images
{
  
  constructor(){
    this.myImage = new Image();
    this.myImage.src = 'images/test.png';
  }

  redraw(){
    // var canvas = document.getElementById('canvas');
    // var context = canvas.getContext('2d');
    // context.drawImage(this.myImage, 0,0,100,100);
  }
}