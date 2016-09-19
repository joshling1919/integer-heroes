import Character from '../character';
import { IRONMAN0, IRONMAN1, IRONMAN6, IRONMAN11 } from '../json/ironmanJSON';



class Ironman extends Character {
  constructor(value, ctx, xPos, yPos, container1, container2){
    super(...[xPos, yPos, container1, container2]);
    this.ctx = ctx;
    this.imageRight = window.imageObjArray[0];
    this.imageLeft = window.imageObjArray[1];
    this.width = 105;
    this.height = 185;
    this.value = value;
  }



  draw() {
    const iron0 = IRONMAN0.frame;
    // this.image.src = "./lib/images/ironman_right.png";
    // this.image.onload = () => {
      this.ctx.drawImage(this.imageRight,
        iron0.x,
        iron0.y,
        iron0.w,
        iron0.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    // };
  }

  drawInContainer(container){
    if (container.containerNumber === 1) {
      this.draw();
    } else {
      const iron11 = IRONMAN11.frame;
      // this.image.onload = () => {
        this.ctx.drawImage(this.imageLeft,
          iron11.x,
          iron11.y,
          iron11.w,
          iron11.h,
          this.xPos,
          this.yPos,
          this.width,
          this.height
        );
      // };
      // this.image.src = "./lib/images/ironman_left.png";
    }
  }

  drawFightingStance(container) {
    if (container.containerNumber === 1) {
      const iron1 = IRONMAN1.frame;
      this.ctx.drawImage(this.imageRight,
        iron1.x,
        iron1.y,
        iron1.w,
        iron1.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
    else {
      const iron6 = IRONMAN6.frame;
      // this.image.onload = () => {
        this.ctx.drawImage(this.imageLeft,
          iron6.x,
          iron6.y,
          iron6.w,
          iron6.h,
          this.xPos,
          this.yPos,
          this.width,
          this.height
        );
      // };
      // this.image.src = "./lib/images/ironman_left.png";
    }
  }

}

export default Ironman;
