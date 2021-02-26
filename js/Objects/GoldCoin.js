import GameObject from "./GameObject.js"
import Animation from "../Resources/Animation.js"

export default class goldcoin extends GameObject{
    constructor (x,y,width,height,) {
       super(x,y,width,height);
       let images = []

        let myImage = new Image();
        myImage.src = 'images/goldcoin/coin_gold-0-0.png';
        images.push(myImage);

        myImage = new Image();
        myImage.src = 'images/goldcoin/coin_gold-1-0.png';
        images.push(myImage); 

        myImage = new Image();
        myImage.src = 'images/goldcoin/coin_gold-2-0.png';        images.push(myImage);

        myImage = new Image();
        myImage.src = 'images/goldcoin/coin_gold-3-0.png';        images.push(myImage);

        myImage = new Image();
        myImage.src = 'images/goldcoin/coin_gold-4-0.png';        images.push(myImage);

        myImage = new Image();
        myImage.src = 'images/goldcoin/coin_gold-5-0.png';        images.push(myImage);

        myImage = new Image();
        myImage.src = 'images/goldcoin/coin_gold-6-0.png';        images.push(myImage);

        myImage = new Image();
        myImage.src = 'images/goldcoin/coin_gold-7-0.png';        images.push(myImage);

       this.animation = new Animation(this, images,40,true);
    }

    tick(){
    super.tick();
    this.gravity();
    }

    redraw (canvas, context) {
        this.animation.redraw(canvas, context);
    }

}
