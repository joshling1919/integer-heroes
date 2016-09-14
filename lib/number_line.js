

class NumberLine {
  constructor(ctx) {
    this.lowerBound = -15;
    this.ctx = ctx;
  }

  // bindKeyHandlers() {
  //
  //   key("space", () => { ship.fireBullet() });
  // }

  start() {
    window.requestAnimFrame(this.animate.bind(this));
  }

  animate(ctx){
    this.ctx.clearRect(0, 0, 2000, 1000);
    this.draw(this.ctx);
    window.requestAnimFrame(this.animate.bind(this));
  }

  draw(ctx) {
    ctx.strokeStyle = "#31CBE3";
    ctx.lineWidth = 3.0;
    ctx.beginPath();
    ctx.moveTo(0, 800);
    ctx.lineTo(2000,800);
    ctx.stroke();

    const labels = [];
    for (let i = this.lowerBound; i < this.lowerBound + 30 ; i++) {
      labels.push(i);
    }

    ctx.fillStyle = "#31CBE3";
    ctx.font="40px Georgia";

    for(let i = 0 ; i < 20; i++) {
      ctx.fillText(labels[i], 50+ i*100, 775);
    }
    this.lowerBound++;
  }
}



export default NumberLine;
