import Character from '../character';
import { JUGGERNAUT0, JUGGERNAUT1, JUGGERNAUT2, JUGGERNAUT3, JUGGERNAUT4,
         JUGGERNAUT5, JUGGERNAUT6, JUGGERNAUT7, JUGGERNAUT8, JUGGERNAUT9
       } from '../json/juggernautJSON';



class Juggernaut extends Character {
  constructor(value, ctx, xPos, yPos, container1, container2){
    super(...[xPos, yPos, container1, container2]);
    this.ctx = ctx;
    this.imageRight = window.imageObj['juggernaut_right'];
    this.imageLeft = window.imageObj['juggernaut_left'];
    this.width = 105;
    this.height = 185;
    this.value = value;
  }



  draw() {
    const juggernaut5 = JUGGERNAUT5.frame;
    this.ctx.drawImage(this.imageLeft,
      juggernaut5.x,
      juggernaut5.y,
      juggernaut5.w,
      juggernaut5.h,
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
      const juggernaut0 = JUGGERNAUT0.frame;
      this.ctx.drawImage(this.imageRight,
        juggernaut0.x,
        juggernaut0.y,
        juggernaut0.w,
        juggernaut0.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

  drawFightingStance(container) {
    if (container.containerNumber === 1) {
      const juggernaut1 = JUGGERNAUT1.frame;
      this.ctx.drawImage(this.imageRight,
        juggernaut1.x,
        juggernaut1.y,
        juggernaut1.w,
        juggernaut1.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
    else {
      const juggernaut6 = JUGGERNAUT6.frame;
      this.ctx.drawImage(this.imageLeft,
        juggernaut6.x,
        juggernaut6.y,
        juggernaut6.w,
        juggernaut6.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }


  drawFirstFightingPose(container){
    if (container.containerNumber === 1) {
      const juggernaut2 = JUGGERNAUT2.frame;
      this.ctx.drawImage(this.imageRight,
        juggernaut2.x,
        juggernaut2.y,
        juggernaut2.w,
        juggernaut2.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    } else {
      const juggernaut7 = JUGGERNAUT7.frame;
      this.ctx.drawImage(this.imageLeft,
        juggernaut7.x,
        juggernaut7.y,
        juggernaut7.w,
        juggernaut7.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

  drawSecondFightingPose(container){
    if (container.containerNumber === 1) {
      const juggernaut3 = JUGGERNAUT3.frame;
      this.ctx.drawImage(this.imageRight,
        juggernaut3.x,
        juggernaut3.y,
        juggernaut3.w,
        juggernaut3.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    } else {
      const juggernaut8 = JUGGERNAUT8.frame;
      this.ctx.drawImage(this.imageLeft,
        juggernaut8.x,
        juggernaut8.y,
        juggernaut8.w,
        juggernaut8.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

  drawThirdFightingPose(container){
    if (container.containerNumber === 1) {
      const juggernaut4 = JUGGERNAUT4.frame;
      this.ctx.drawImage(this.imageRight,
        juggernaut4.x,
        juggernaut4.y,
        juggernaut4.w,
        juggernaut4.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    } else {
      const juggernaut9 = JUGGERNAUT9.frame;
      this.ctx.drawImage(this.imageLeft,
        juggernaut9.x,
        juggernaut9.y,
        juggernaut9.w,
        juggernaut9.h,
        this.xPos,
        this.yPos,
        this.width,
        this.height
      );
    }
  }

}

export default Juggernaut;
