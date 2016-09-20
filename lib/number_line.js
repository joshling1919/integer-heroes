import Integer from './integer';

class NumberLine {
  constructor(ctx) {
    this.ctx = ctx;
    this.incrementer = -1530;
    this.selected = 0;
    this.numMarkers = 50;
    this.frameCount = 0;
  }

  bindKeyHandlers(secondNum) {
    let numberLine = this;
    // document.addEventListener("keyup", (event) => {
    //   if (event.keyCode === 37) {
    //     numberLine.selected -= 1;
    //     numberLine.animate(numberLine.ctx, 1);
    //   } else if (event.keyCode === 39) {
    //     numberLine.selected += 1;
    //     numberLine.animate(numberLine.ctx, -1);
    //   }
    // });
    key("right", () => {
      if (secondNum === undefined || secondNum > 0) {
        numberLine.selected += 1;
        numberLine.animate(numberLine.ctx, -1);
      }
    });

    key("left", () => {
      if (secondNum === undefined || secondNum < 0) {
        numberLine.selected -= 1;
        numberLine.animate(numberLine.ctx, 1);
      }
    });

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
      if (this.frameCount === 10) {
        this.frameCount = 0;
        window.cancelAnimationFrame(requestID);
      } else {
        this.frameCount += 1;
        this.ctx.clearRect(0, 720, 2000, 150);
        const speed = 10;
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
