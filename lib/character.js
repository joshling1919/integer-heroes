import { IRONMAN0 } from './json/ironman';

class Character {

  constructor(ctx){
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = "./lib/images/ironman.png";
  }

  draw() {
    const iron = IRONMAN0.frame;
    this.image.onload = () => {
      this.ctx.drawImage(this.image,
        iron.x,
        iron.y,
        iron.w,
        iron.h,
        0,
        0,
        iron.w/1.5,
        iron.h/1.5
      );
    };
  }
}

export default Character;
