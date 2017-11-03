import Character from '../character';
import { LOKI0, LOKI1, LOKI2, LOKI3, LOKI4,
         LOKI5, LOKI6, LOKI7, LOKI8, LOKI9
       } from '../json/lokiJSON';



class Loki extends Character {
  constructor(value, ctx, xPos, yPos, container1, container2){
    super(...[xPos, yPos, container1, container2]);
    this.ctx = ctx;
    this.imageRight = window.imageObj['loki_right'];
    this.imageLeft = window.imageObj['loki_left'];
    this.width = 105;
    this.height = 185;
    this.value = value;
  }



  draw() {
    const loki5 = LOKI5.frame;
    this.ctx.drawImage(this.imageLeft,
      loki5.x,
      loki5.y,
      loki5.w,
      loki5.h,
      this.xPos,
      this.yPos,
      this.width,
      this.height
    );
  }

  drawInContainer(container){
    if (container.containerNumber === 2) {
      this.draw();
    } else {
      const loki0 = LOKI0.frame;
      this.ctx.drawImage(this.imageRight,
        loki0.x,
        loki0.y,
        loki0.w,
        loki0.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

  drawFightingStance(container) {
    if (container.containerNumber === 1) {
      const loki1 = LOKI1.frame;
      this.ctx.drawImage(this.imageRight,
        loki1.x,
        loki1.y,
        loki1.w,
        loki1.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
    else {
      const loki6 = LOKI6.frame;
      this.ctx.drawImage(this.imageLeft,
        loki6.x,
        loki6.y,
        loki6.w,
        loki6.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }


  drawFirstFightingPose(container){
    if (container.containerNumber === 1) {
      const loki2 = LOKI2.frame;
      this.ctx.drawImage(this.imageRight,
        loki2.x,
        loki2.y,
        loki2.w,
        loki2.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    } else {
      const loki7 = LOKI7.frame;
      this.ctx.drawImage(this.imageLeft,
        loki7.x,
        loki7.y,
        loki7.w,
        loki7.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

  drawSecondFightingPose(container){
    if (container.containerNumber === 1) {
      const loki3 = LOKI3.frame;
      this.ctx.drawImage(this.imageRight,
        loki3.x,
        loki3.y,
        loki3.w,
        loki3.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    } else {
      const loki8 = LOKI8.frame;
      this.ctx.drawImage(this.imageLeft,
        loki8.x,
        loki8.y,
        loki8.w,
        loki8.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

  drawThirdFightingPose(container){
    if (container.containerNumber === 1) {
      const loki4 = LOKI4.frame;
      this.ctx.drawImage(this.imageRight,
        loki4.x,
        loki4.y,
        loki4.w,
        loki4.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    } else {
      const loki9 = LOKI9.frame;
      this.ctx.drawImage(this.imageLeft,
        loki9.x,
        loki9.y,
        loki9.w,
        loki9.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

}

export default Loki;
