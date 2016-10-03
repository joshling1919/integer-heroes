import Character from '../character';
import { HULK0, HULK1, HULK2, HULK3, HULK4,
         HULK5, HULK6, HULK7, HULK8, HULK9
       } from '../json/hulkJSON';



class Hulk extends Character {
  constructor(value, ctx, xPos, yPos, container1, container2){
    super(...[xPos, yPos, container1, container2]);
    this.ctx = ctx;
    this.imageRight = window.imageObjArray[9];
    this.imageLeft = window.imageObjArray[10];
    this.width = 105;
    this.height = 170;
    this.value = value;
  }



  draw() {
    const hulk0 = HULK0.frame;
    this.ctx.drawImage(this.imageRight,
      hulk0.x,
      hulk0.y,
      hulk0.w,
      hulk0.h,
      this.xPos,
      this.yPos,
      this.width,
      this.height
    );
  }

  drawInContainer(container){
    if (container.containerNumber === 1) {
      this.draw();
    } else {
      const hulk5 = HULK5.frame;
      this.ctx.drawImage(this.imageLeft,
        hulk5.x,
        hulk5.y,
        hulk5.w,
        hulk5.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

  drawFightingStance(container) {
    if (container.containerNumber === 1) {
      const hulk1 = HULK1.frame;
      this.ctx.drawImage(this.imageRight,
        hulk1.x,
        hulk1.y,
        hulk1.w,
        hulk1.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
    else {
      const hulk6 = HULK6.frame;
      this.ctx.drawImage(this.imageLeft,
        hulk6.x,
        hulk6.y,
        hulk6.w,
        hulk6.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }


  drawFirstFightingPose(container){
    if (container.containerNumber === 1) {
      const hulk2 = HULK2.frame;
      this.ctx.drawImage(this.imageRight,
        hulk2.x,
        hulk2.y,
        hulk2.w,
        hulk2.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    } else {
      const hulk7 = HULK7.frame;
      this.ctx.drawImage(this.imageLeft,
        hulk7.x,
        hulk7.y,
        hulk7.w,
        hulk7.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

  drawSecondFightingPose(container){
    if (container.containerNumber === 1) {
      const hulk3 = HULK3.frame;
      this.ctx.drawImage(this.imageRight,
        hulk3.x,
        hulk3.y,
        hulk3.w,
        hulk3.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    } else {
      const hulk8 = HULK8.frame;
      this.ctx.drawImage(this.imageLeft,
        hulk8.x,
        hulk8.y,
        hulk8.w,
        hulk8.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

  drawThirdFightingPose(container){
    if (container.containerNumber === 1) {
      const hulk4 = HULK4.frame;
      this.ctx.drawImage(this.imageRight,
        hulk4.x,
        hulk4.y,
        hulk4.w,
        hulk4.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    } else {
      const hulk9 = HULK9.frame;
      this.ctx.drawImage(this.imageLeft,
        hulk9.x,
        hulk9.y,
        hulk9.w,
        hulk9.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

}

export default Hulk;
