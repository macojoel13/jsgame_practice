
function start() { //Starts a Basic Black Canvas to have something as reference
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.fillStyle='black';
    context.fillRect(0,0,500,500);    
    
}