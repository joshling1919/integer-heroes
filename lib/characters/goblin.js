import Character from '../character';
import { GOBLIN0, GOBLIN1, GOBLIN2, GOBLIN3,
  GOBLIN4, GOBLIN6, GOBLIN7, GOBLIN8, GOBLIN9, GOBLIN10
 } from '../json/goblinJSON';

class Goblin extends Character {
  constructor(value, ctx, xPos, yPos, container1, container2){
    super(...[xPos, yPos, container1, container2]);
    this.ctx = ctx;
    this.imageRight = window.imageObj['goblin_right'];
    this.imageLeft = window.imageObj['goblin_left'];
    this.width = 105;
    this.height = 185;
    this.value = value;
  }



  draw() {
    const goblin6 = GOBLIN6.frame;
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
  }

  drawInContainer(container) {
    if (container.containerNumber === 1) {
      const goblin0 = GOBLIN0.frame;
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
    } else {
      this.draw();
    }
  }

  drawFightingStance(container) {
    if (container.containerNumber === 1) {
      const goblin1 = GOBLIN1.frame;
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
    } else {
      const goblin7 = GOBLIN7.frame;
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
    }
  }


  drawFirstFightingPose(container){
    if (container.containerNumber === 1) {
      const goblin2 = GOBLIN2.frame;
      this.ctx.drawImage(this.imageRight,
        goblin2.x,
        goblin2.y,
        goblin2.w,
        goblin2.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    } else {
      const goblin8 = GOBLIN8.frame;
      this.ctx.drawImage(this.imageLeft,
        goblin8.x,
        goblin8.y,
        goblin8.w,
        goblin8.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

  drawSecondFightingPose(container){
    if (container.containerNumber === 1) {
      const goblin3 = GOBLIN3.frame;
      this.ctx.drawImage(this.imageRight,
        goblin3.x,
        goblin3.y,
        goblin3.w,
        goblin3.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    } else {
      const goblin9 = GOBLIN9.frame;
      this.ctx.drawImage(this.imageLeft,
        goblin9.x,
        goblin9.y,
        goblin9.w,
        goblin9.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

  drawThirdFightingPose(container){
    if (container.containerNumber === 1) {
      const goblin4 = GOBLIN4.frame;
      this.ctx.drawImage(this.imageRight,
        goblin4.x,
        goblin4.y,
        goblin4.w,
        goblin4.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    } else {
      const goblin10 = GOBLIN10.frame;
      this.ctx.drawImage(this.imageLeft,
        goblin10.x,
        goblin10.y,
        goblin10.w,
        goblin10.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

}

export default Goblin;
