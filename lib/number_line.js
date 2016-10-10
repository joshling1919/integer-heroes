import Integer from './integer';

class NumberLine {
  constructor(ctx) {
    this.ctx = ctx;
    this.incrementer = -1530;
    this.selected = 0;
    this.numMarkers = 50;
    this.frameCount = 0;
    this.active = false;
  }

  bindKeyHandlers(secondNum) {
    key("right", this.handleRight.bind(this, secondNum));
    key("left", this.handleLeft.bind(this, secondNum));
  }

  handleRight(secondNum){
    if (this.incrementer > -2930) {
      if (secondNum === undefined || secondNum > 0) {
        console.log(this.incrementer);
        this.selected += 1;
        this.animate(this.ctx, -1);
        return false;
      }
    }
  }

  handleLeft(secondNum){
    if (this.incrementer < -30) {
      if (secondNum === undefined || secondNum < 0) {
        console.log(this.incrementer);
        this.selected -= 1;
        this.animate(this.ctx, 1);
        return false;
      }
    }
  }


  unbindKeyHandlers(){
    key.unbind("right");
    key.unbind("left");
  }

  start(secondNum) {
    this.drawCenterBox(this.ctx);
    this.bindKeyHandlers(secondNum);
    this.active = true;
  }

  end(){
    this.unbindKeyHandlers();
    this.active = false;
  }

  animate(ctx, sign){
      const requestID = window.requestAnimFrame(this.animate.bind(this, ctx, sign));
      if (this.frameCount === 5) {
        this.frameCount = 0;
        window.cancelAnimationFrame(requestID);
      } else {
        this.frameCount += 1;
        this.ctx.clearRect(0, 720, 2000, 150);
        const speed = 20;
        this.incrementer += (sign * speed);
        this.draw(this.ctx);
        this.ctx.closePath();
      }
      this.drawCenterBox(this.ctx);
  }


  draw(ctx) {
    ctx.strokeStyle = "#31CBE3";
    ctx.lineWidth = 3.0;
    ctx.beginPath();
    ctx.moveTo(0, 800);
    ctx.lineTo(2000,800);
    ctx.stroke();
    ctx.closePath();

    this.drawNumberLineMarkers(ctx);
    this.drawLabels(ctx);
  }

  drawCenterBox(ctx){
    ctx.globalAlpha=0.18;
    ctx.fillRect(925,725,100,100);
    ctx.globalAlpha = 1;
  }

  drawNumberLineMarkers(ctx){
    for(let i = 0 ; i < this.numMarkers; i++) {
      ctx.beginPath();
      const xCoord =  this.incrementer + i * 100;
      const yCoord = 800;
      const radius = 5;
      ctx.arc(xCoord, yCoord, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.closePath();
    }
  }

  drawLabels(ctx) {
    const numberLineNumbers = [];
    for (let i = this.numMarkers - 75 ; i <= this.numMarkers - 25 ; i++) {
      numberLineNumbers.push(new Integer(i, ctx));
    }

    ctx.fillStyle = "#31CBE3";
    ctx.font="40px Georgia";

    for(let i = 0 ; i <= this.numMarkers; i++) {
      const number = numberLineNumbers[i];
      const xPos = this.incrementer + i * 100;
      const yPos = 775;
      let color = "#31CBE3";
      let size = "40";
      if (xPos > 875 && xPos < 975) {
        color = "white";
        size = "60";
      }
      const font = "Georgia";
      number.draw(xPos, yPos, color, size, font);
    }
  }

}



export default NumberLine;
