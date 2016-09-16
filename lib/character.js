import { IRONMAN1 } from './json/ironman';

class Character {

  constructor(ctx){
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = "./lib/images/ironman.png";
  }

  draw() {
    const iron = IRONMAN1.frame;
    this.image.onload = () => {
      this.ctx.drawImage(this.image,
        iron.x,
        iron.y,
        iron.w,
        iron.h,
        0,
        0,
        iron.w/1.2,
        iron.h/1.2
      );
    };
  }
}

export default Character;
