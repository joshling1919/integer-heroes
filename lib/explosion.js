import { EXPLOSION0, EXPLOSION1, EXPLOSION2,
         EXPLOSION3, EXPLOSION4 } from './json/explosionJSON';

class Explosion {
  constructor(ctx){
    this.ctx = ctx;
    this.image = window.imageObj['explosion'];
    this.frame = 0;
    this.width = 100;
    this.height = 100;
    this.xPos = 940;
    this.yPos = 300;
  }

  animateExplosion(){
    const requestID = window.requestAnimFrame(this.animateExplosion.bind(this));
    if (this.frame === 50) {
      window.cancelAnimationFrame(requestID);
      this.ctx.clearRect(this.xPos, this.yPos, this.width, this.height);
      this.frame = 0;
    } else {
      this.ctx.clearRect(this.xPos, this.yPos, this.width, this.height);
      if (this.frame < 10) {
        this.drawFrame1();
      } else if (this.frame < 20) {
        this.drawFrame2();
      } else if (this.frame < 30) {
        this.drawFrame3();
      } else if (this.frame < 40) {
        this.drawFrame4();
      } else if (this.frame < 50) {
        this.drawFrame5();
      }
      this.frame +=1;

    }

  }

  drawFrame1(){
    const explosion0 = EXPLOSION0.frame;
    this.ctx.drawImage(this.image,
      explosion0.x,
      explosion0.y,
      explosion0.w,
      explosion0.h,
      this.xPos,
      this.yPos,
      this.width,
      this.height
    );
  }

  drawFrame2(){
    const explosion1 = EXPLOSION1.frame;
    this.ctx.drawImage(this.image,
      explosion1.x,
      explosion1.y,
      explosion1.w,
      explosion1.h,
      this.xPos,
      this.yPos,
      this.width,
      this.height
    );
  }

  drawFrame3(){
    const explosion2 = EXPLOSION2.frame;
    this.ctx.drawImage(this.image,
      explosion2.x,
      explosion2.y,
      explosion2.w,
      explosion2.h,
      this.xPos,
      this.yPos,
      this.width,
      this.height
    );
  }

  drawFrame4(){
    const explosion3 = EXPLOSION3.frame;
    this.ctx.drawImage(this.image,
      explosion3.x,
      explosion3.y,
      explosion3.w,
      explosion3.h,
      this.xPos,
      this.yPos,
      this.width,
      this.height
    );
  }

  drawFrame5(){
    const explosion4 = EXPLOSION4.frame;
    this.ctx.drawImage(this.image,
      explosion4.x,
      explosion4.y,
      explosion4.w,
      explosion4.h,
      this.xPos,
      this.yPos,
      this.width,
      this.height
    );
  }

}

export default Explosion;
