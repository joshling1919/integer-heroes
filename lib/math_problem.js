import Integer from './integer';

class MathProblem {
  constructor(ctx){
    this.ctx = ctx;
    this.num1 = new Integer(5, ctx);
    this.operator = new Integer("+", ctx);
    this.num2 = new Integer(-4, ctx);
  }


  drawHorizontal() {
    this.num1.draw(875, 120, "white", "80", "Georgia");
    this.operator.draw(980, 120, "white", "80", "Georgia");
    this.num2.draw(1100, 120, "white", "80", "Georgia");

  }

  drawVertical() {
    this.num1.draw(980, 80, "white", "80", "Georgia");
    this.operator.draw(880, 180, "white", "80", "Georgia");
    this.num2.draw(980, 180, "white", "80", "Georgia");
    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.moveTo(830, 220);
    this.ctx.lineTo(1100, 220);
    this.ctx.stroke();
  }
}

export default MathProblem;
