import Character from '../character';
import { IRONMAN0, IRONMAN1, IRONMAN2, IRONMAN4,
         IRONMAN5, IRONMAN6, IRONMAN7, IRONMAN9,
         IRONMAN10, IRONMAN11 } from '../json/ironmanJSON';



class Ironman extends Character {
  constructor(value, ctx, xPos, yPos, container1, container2){
    super(...[xPos, yPos, container1, container2]);
    this.ctx = ctx;
    this.imageRight = window.imageObj['ironman_right'];
    this.imageLeft = window.imageObj['ironman_left'];
    this.width = 105;
    this.height = 185;
    this.value = value;
  }



  draw() {
    const iron0 = IRONMAN0.frame;
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
  }

  drawInContainer(container){
    if (container.containerNumber === 1) {
      this.draw();
    } else {
      const iron11 = IRONMAN11.frame;
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
    }
  }


  drawFirstFightingPose(container){
    if (container.containerNumber === 1) {
      const iron2 = IRONMAN2.frame;
      this.ctx.drawImage(this.imageRight,
        iron2.x,
        iron2.y,
        iron2.w,
        iron2.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    } else {
      const iron7 = IRONMAN7.frame;
      this.ctx.drawImage(this.imageLeft,
        iron7.x,
        iron7.y,
        iron7.w,
        iron7.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

  drawSecondFightingPose(container){
    if (container.containerNumber === 1) {
      const iron4 = IRONMAN4.frame;
      this.ctx.drawImage(this.imageRight,
        iron4.x,
        iron4.y,
        iron4.w,
        iron4.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    } else {
      const iron9 = IRONMAN9.frame;
      this.ctx.drawImage(this.imageLeft,
        iron9.x,
        iron9.y,
        iron9.w,
        iron9.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

  drawThirdFightingPose(container){
    if (container.containerNumber === 1) {
      const iron5 = IRONMAN5.frame;
      this.ctx.drawImage(this.imageRight,
        iron5.x,
        iron5.y,
        iron5.w,
        iron5.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    } else {
      const iron10 = IRONMAN10.frame;
      this.ctx.drawImage(this.imageLeft,
        iron10.x,
        iron10.y,
        iron10.w,
        iron10.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

}

export default Ironman;
