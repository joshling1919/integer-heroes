import Character from './character';
import { IRONMAN0 } from './json/ironman';

class Ironman extends Character {
  constructor(ctx, xPos, yPos){
    super(...[xPos, yPos]);
    this.ctx = ctx;
    this.image = new Image();
    this.width = 105;
    this.height = 185;
    this.bindClickListener();
    this.image.src = "./lib/images/ironman_right.png";
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
  }

}

export default Ironman;
