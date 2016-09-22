import Character from '../character';
import { THOR0, THOR1, THOR2, THOR3, THOR4,
         THOR5, THOR6, THOR7, THOR8, THOR9
       } from '../json/thorJSON';



class Thor extends Character {
  constructor(value, ctx, xPos, yPos, container1, container2){
    super(...[xPos, yPos, container1, container2]);
    this.ctx = ctx;
    this.imageRight = window.imageObjArray[5];
    this.imageLeft = window.imageObjArray[6];
    this.width = 105;
    this.height = 185;
    this.value = value;
  }



  draw() {
    const thor0 = THOR0.frame;
    this.ctx.drawImage(this.imageRight,
      thor0.x,
      thor0.y,
      thor0.w,
      thor0.h,
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
      const thor5 = THOR5.frame;
      this.ctx.drawImage(this.imageLeft,
        thor5.x,
        thor5.y,
        thor5.w,
        thor5.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

  drawFightingStance(container) {
    if (container.containerNumber === 1) {
      const thor1 = THOR1.frame;
      this.ctx.drawImage(this.imageRight,
        thor1.x,
        thor1.y,
        thor1.w,
        thor1.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
    else {
      const thor6 = THOR6.frame;
      this.ctx.drawImage(this.imageLeft,
        thor6.x,
        thor6.y,
        thor6.w,
        thor6.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }


  drawFirstFightingPose(container){
    if (container.containerNumber === 1) {
      const thor2 = THOR2.frame;
      this.ctx.drawImage(this.imageRight,
        thor2.x,
        thor2.y,
        thor2.w,
        thor2.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    } else {
      const thor7 = THOR7.frame;
      this.ctx.drawImage(this.imageLeft,
        thor7.x,
        thor7.y,
        thor7.w,
        thor7.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

  drawSecondFightingPose(container){
    if (container.containerNumber === 1) {
      const thor3 = THOR3.frame;
      this.ctx.drawImage(this.imageRight,
        thor3.x,
        thor3.y,
        thor3.w,
        thor3.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    } else {
      const thor8 = THOR8.frame;
      this.ctx.drawImage(this.imageLeft,
        thor8.x,
        thor8.y,
        thor8.w,
        thor8.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

  drawThirdFightingPose(container){
    if (container.containerNumber === 1) {
      const thor4 = THOR4.frame;
      this.ctx.drawImage(this.imageRight,
        thor4.x,
        thor4.y,
        thor4.w,
        thor4.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    } else {
      const thor9 = THOR9.frame;
      this.ctx.drawImage(this.imageLeft,
        thor9.x,
        thor9.y,
        thor9.w,
        thor9.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

}

export default Thor;
