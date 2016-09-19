import Character from '../character';
import { GOBLIN0, GOBLIN1, GOBLIN6, GOBLIN7 } from '../json/goblinJSON';

class Goblin extends Character {
  constructor(value, ctx, xPos, yPos, container1, container2){
    super(...[xPos, yPos, container1, container2]);
    this.ctx = ctx;
    this.imageRight = window.imageObjArray[2];
    this.imageLeft = window.imageObjArray[3];
    this.width = 105;
    this.height = 185;
    this.value = value;
  }



  draw() {
    const goblin6 = GOBLIN6.frame;
    // this.image.onload = () => {
      this.ctx.drawImage(this.imageLeft,
        goblin6.x,
        goblin6.y,
        goblin6.w,
        goblin6.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    // };
    // this.image.src = "./lib/images/goblin_left.png";
  }

  drawInContainer(container) {
    if (container.containerNumber === 1) {
      const goblin0 = GOBLIN0.frame;
      // this.image.onload = () => {
        this.ctx.drawImage(this.imageRight,
          goblin0.x,
          goblin0.y,
          goblin0.w,
          goblin0.h,
          this.xPos,
          this.yPos,
          this.width,
          this.height
        );
      // };
      // this.image.src = "./lib/images/goblin_right.png";
    } else {
      this.draw();
    }
  }

  drawFightingStance(container) {
    if (container.containerNumber === 1) {
      const goblin1 = GOBLIN1.frame;
      // this.image.onload = () => {
        this.ctx.drawImage(this.imageRight,
          goblin1.x,
          goblin1.y,
          goblin1.w,
          goblin1.h,
          this.xPos,
          this.yPos,
          this.width,
          this.height
        );
      // };
      // this.image.src = "./lib/images/goblin_right.png";
    } else {
      const goblin7 = GOBLIN7.frame;
      // this.image.onload = () => {
        this.ctx.drawImage(this.imageLeft,
          goblin7.x,
          goblin7.y,
          goblin7.w,
          goblin7.h,
          this.xPos,
          this.yPos,
          this.width,
          this.height
        );
      // };
      // this.image.src = "./lib/images/goblin_left.png";
    }
  }

}

export default Goblin;
