import Character from '../character';
import { IRONMAN0, IRONMAN8 } from '../json/ironmanJSON';

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
    const iron0 = IRONMAN0.frame;
    this.image.onload = () => {
      this.ctx.drawImage(this.image,
        iron0.x,
        iron0.y,
        iron0.w,
        iron0.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    };
    this.image.src = "./lib/images/ironman_right.png";
  }

  drawInContainer(container){
    if (container.containerNumber === 1) {
      this.draw();
    } else {
      const iron8 = IRONMAN8.frame;
      this.image.onload = () => {
        this.ctx.drawImage(this.image,
          iron8.x,
          iron8.y,
          iron8.w,
          iron8.h,
          this.xPos,
          this.yPos,
          this.width,
          this.height
        );
      };
      this.image.src = "./lib/images/ironman_left.png";
    }
  }

}

export default Ironman;
