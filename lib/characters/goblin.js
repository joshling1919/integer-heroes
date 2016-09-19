import Character from '../character';
import { GOBLIN0, GOBLIN6 } from '../json/goblinJSON';

class Goblin extends Character {
  constructor(value, ctx, xPos, yPos, container1, container2){
    super(...[xPos, yPos, container1, container2]);
    this.ctx = ctx;
    this.image = new Image();
    this.width = 105;
    this.height = 185;
    this.value = value;
  }



  draw() {
    const goblin6 = GOBLIN6.frame;
    this.image.onload = () => {
      this.ctx.drawImage(this.image,
        goblin6.x,
        goblin6.y,
        goblin6.w,
        goblin6.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    };
    this.image.src = "./lib/images/goblin_left.png";
  }

  drawInContainer(container) {
    if (container.containerNumber === 1) {
      const goblin0 = GOBLIN0.frame;
      this.image.onload = () => {
        this.ctx.drawImage(this.image,
          goblin0.x,
          goblin0.y,
          goblin0.w,
          goblin0.h,
          this.xPos,
          this.yPos,
          this.width,
          this.height
        );
      };
      this.image.src = "./lib/images/goblin_right.png";
    } else {
      this.draw();
    }
  }

}

export default Goblin;
