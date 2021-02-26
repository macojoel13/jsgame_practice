export default class Mouse{
  constructor(){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    canvas.addEventListener('mousedown', e => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
    });

    //Returns 
    onClick(gameObject){

    }
  }
}