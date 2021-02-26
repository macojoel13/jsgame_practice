import Cube from '../Objects/Cube.js'
import Sphere from '../Objects/Sphere.js'
import GameObject from '../Objects/GameObject.js'
import Images from '../Resources/Images.js'
import Floor from '../Objects/Floor.js'
import GoldCoin from '../Objects/GoldCoin.js'
import SpriteSheet from '../Resources/SpriteSheet.js'
import Mouse from '../Resources/Mouse.js'

let gameObjects = [];
let floors = []
let images = new Images();
// let spriteSheet = new SpriteSheet();

gameObjects.push(new Cube(0,0,20,20,"black", Math.random()));
gameObjects.push(new Sphere (30, 30, 10, 10, 'blue', Math.random()));
gameObjects.push(new Sphere (30, 30, 20, 20, 'green', Math.random()));
gameObjects.push(new GoldCoin(10,10,40,40));

floors.push(new Floor(0,100,100,10));
floors.push(new Floor(100,130,100,10));
floors.push(new Floor(180,180,100,10));

function update(progress) {
  for(var i = 0; i < gameObjects.length; i++){
    gameObjects[i].tick();
    for(var x = 0; x < floors.length; x++){
    floors[x].collision(gameObjects[i]);
    }
  }
}

function draw() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  //Clear previous frame from canvas
  context.clearRect(0,0,canvas.width, canvas.height);
  // Draw all the component
  for(var i = 0; i < gameObjects.length; i++){
    gameObjects[i].redraw(canvas, context);
  }
  for(var i = 0; i < floors.length; i++){
    floors[i].redraw(canvas, context);
  }
  // spriteSheet.redraw();
  images.redraw();
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

