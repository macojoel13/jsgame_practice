import cube from '../Objects/cube.js'
import sphere from '../Objects/sphere.js'

let cube1 = new cube('cube',0,0,20,20,"black", Math.random());
let sphere1 = new sphere ('sphere',30, 30, 10, 10, 'blue', Math.random());

function update(progress) {
  cube1.run();
  sphere1.run();
}

function draw() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  //Clear previous frame from canvas
  context.clearRect(0,0,canvas.width, canvas.height);
  // Draw all the component
  cube1.redraw();
  sphere1.redraw();
}

function loop(timestamp) {
  var progress = timestamp - lastRender

  update(progress)
  draw()

  lastRender = timestamp
  window.requestAnimationFrame(loop)
}
var lastRender = 0
window.requestAnimationFrame(loop)

