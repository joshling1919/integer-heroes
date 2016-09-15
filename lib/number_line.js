import Integer from './integer';

class NumberLine {
  constructor(ctx) {
    this.ctx = ctx;
    this.incrementer = -1050;
    this.selected = 0;
  }

  bindKeyHandlers() {
    let numberLine = this;
    key("right", () => {
      this.incrementer -= 10;
      this.selected += 1;
      numberLine.animate(this.ctx, -1);
    });

    key("left", () => {
      this.incrementer += 10;
      this.selected -= 1;
      numberLine.animate(this.ctx, 1);
    });

  }

  start() {
    this.bindKeyHandlers();
    this.draw(this.ctx);
  }

  animate(ctx, sign){
    const requestID = window.requestAnimFrame(this.animate.bind(this, ctx, sign));
    if (this.incrementer % 150 === 0 ) {
      window.cancelAnimationFrame(requestID);
    } else {
      this.ctx.clearRect(0, 745, 2000, 100);
      const speed = 10;
      this.incrementer += (sign * speed);
      console.log(this.incrementer);
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

    for(let i = 0 ; i < 51; i++) {
      ctx.beginPath();
      const xCoord =  this.incrementer + 17 + i * 100;
      const yCoord = 800;
      const radius = 5;
      ctx.arc(xCoord, yCoord, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'white';
      ctx.fill();
    }

    const numberLineNumbers = [];
    for (let i = -25; i < 26 ; i++) {
      numberLineNumbers.push(new Integer(i, ctx));
    }

    ctx.fillStyle = "#31CBE3";
    ctx.font="40px Georgia";

    for(let i = 0 ; i < 51; i++) {
      const number = numberLineNumbers[i];
      const xPos = this.incrementer + i * 100;
      const yPos = 775;
      let color = "#31CBE3";
      if (this.selected === number.value) {
        console.log("made it in");
        color = "red";
      }
      const size = "40";
      const font = "Georgia";
      number.draw(xPos, yPos, color, size, font);
    }
  }
}



export default NumberLine;
