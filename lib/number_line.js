

class NumberLine {
  constructor(ctx) {
    this.lowerBound = -15;
    this.ctx = ctx;
    this.incrementer = 50;
  }

  bindKeyHandlers() {
    let numberLine = this;
    key("left", () => {
      this.incrementer -= 5;
      numberLine.animate(this.ctx, -1);
    });

    key("right", () => {
      this.incrementer += 5;
      numberLine.animate(this.ctx, 1);
    });

  }

  start() {
    this.bindKeyHandlers();
    this.draw(this.ctx);
  }

  animate(ctx, sign){
    const requestID = window.requestAnimFrame(this.animate.bind(this, ctx, sign));
    if (this.incrementer % 150 === 0 || Math.abs(this.incrementer) > 1100 ) {
      window.cancelAnimationFrame(requestID);
    } else {
      this.ctx.clearRect(0, 0, 2000, 1000);
      this.incrementer += (sign * 5);
      this.draw(this.ctx);
    }
  }


  draw(ctx) {
    ctx.strokeStyle = "#31CBE3";
    ctx.lineWidth = 3.0;
    ctx.beginPath();
    ctx.moveTo(0, 800);
    ctx.lineTo(2000,800);
    ctx.stroke();

    for(let i = 0 ; i < 31; i++) {
      ctx.beginPath();
      const xCoord =  this.incrementer + 17 + i * 100;
      const yCoord = 800;
      const radius = 5;
      ctx.arc(xCoord, yCoord, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'white';
      ctx.fill();
    }

    const labels = [];
    for (let i = -15; i < 16 ; i++) {
      labels.push(i);
    }

    ctx.fillStyle = "#31CBE3";
    ctx.font="40px Georgia";

    for(let i = 0 ; i < 31; i++) {
      ctx.fillText(labels[i], this.incrementer + i * 100, 775);
    }
  }
}



export default NumberLine;
