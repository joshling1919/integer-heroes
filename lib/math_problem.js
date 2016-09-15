import Integer from './integer';

class MathProblem {
  constructor(ctx){
    this.ctx = ctx;
    this.num1 = new Integer(5);
    this.num2 = new Integer(-4);
  }

  draw() {
    this.ctx.font = "80pt Georgia";
    this.ctx.fillStyle = "gray";
    this.ctx.textAlign = "center";
    const mathProblem = `${this.num1} + ${this.num2}`;
    this.drawTextInCanvas(this.ctx, mathProblem , 975, 175, 6);
  }

  drawTextInCanvas(ctx, text, width, height, depth) {
    let count;
    for (count = 0; count < depth; count++) {
      ctx.fillText(text, width - count, height - count);
    }
    ctx.fillStyle = "#FFB000";
    ctx.shadowColor = "black";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = depth + 2;
    ctx.shadowOffsetY = depth + 2;
    ctx.fillText(text, width - count, height- count);
  }
}

export default MathProblem;
