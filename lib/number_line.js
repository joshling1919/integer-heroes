import Integer from './integer';

class NumberLine {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
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
    if (window.animIsComplete) {
      if (this.incrementer > -2930) {
        if (secondNum === undefined || secondNum > 0) {
          window.animIsComplete = false;
          this.selected += 1;
          this.animate(this.ctx, -1);
          return false;
        }
      }
    }
  }

  handleLeft(secondNum){
    if (window.animIsComplete) {
      if (this.incrementer < -30) {
        if (secondNum === undefined || secondNum < 0) {
          window.animIsComplete = false;
          this.selected -= 1;
          this.animate(this.ctx, 1);
          return false;
        }
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
    this.ctx.drawImage(window.imageObj['right_arrow'], 1050, 880, 200, 100);
    this.ctx.drawImage(window.imageObj['left_arrow'], 700, 880, 200, 100);
    this.bindArrowClickListener(secondNum);
    this.active = true;
  }

  end(){
    this.unbindKeyHandlers();
    this.ctx.clearRect(0, 870, 1500, 130);
    this.active = false;
    this.canvas.removeEventListener('click', this.boundedHandleClicks);
  }

  bindArrowClickListener (secondNum){
    this.secondNum = secondNum;
    this.boundedHandleClicks = this.handleArrowClicks.bind(this);
    this.canvas.addEventListener('click', this.boundedHandleClicks);
  }

  handleArrowClicks(event){
    const rect = event.currentTarget.getBoundingClientRect();
    const cursorX = this.getCursorXPos(event, rect);
    const cursorY = this.getCursorYPos(event, rect);
    if (cursorX > 1050 &&
        cursorX < 1250 &&
        cursorY > 880 &&
        cursorY < 980) {
          this.handleRight(this.secondNum);
        }
    else if (cursorX > 700 &&
             cursorX < 900 &&
             cursorY > 880 &&
             cursorY < 980) {
          this.handleLeft(this.secondNum);
    }
  }

  getCursorXPos(event, rect) {
    const x = (event.clientX - rect.left) / (rect.right - rect.left) * event.currentTarget.width;
    return x;
  }

  getCursorYPos(event, rect) {
    const y = (event.clientY - rect.top) / (rect.bottom - rect.top) * event.currentTarget.height;
    return y;
  }

  animate(ctx, sign){
      const requestID = window.requestAnimFrame(this.animate.bind(this, ctx, sign));
      if (this.frameCount === 5) {
        this.frameCount = 0;
        window.cancelAnimationFrame(requestID);
        window.animIsComplete = true;
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
