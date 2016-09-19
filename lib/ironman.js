import Character from './character';
import { IRONMAN0 } from './json/ironmanJSON';

class Ironman extends Character {
  constructor(value, ctx, xPos, yPos, container1, container2){
    super(...[xPos, yPos, container1, container2]);
    this.ctx = ctx;
    this.image = new Image();
    this.width = 105;
    this.height = 185;
    this.value = value;
  }



  draw() {
    const iron = IRONMAN0.frame;
    this.image.onload = () => {
      this.ctx.drawImage(this.image,
        iron.x,
        iron.y,
        iron.w,
        iron.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    };
    this.image.src = "./lib/images/ironman_right.png";
  }

}

export default Ironman;
