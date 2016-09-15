import Integer from './integer';

class MathProblem {
  constructor(ctx, value1, value2){
    this.ctx = ctx;
    this.num1 = new Integer(value1, ctx);
    this.operator = new Integer("+", ctx);
    this.num2 = new Integer(value2, ctx);
    this.equalSign = new Integer("=", ctx);
  }


  drawHorizontal() {
    this.num1.draw(840, 120, "white", "80", "Georgia");
    this.operator.draw(930, 120, "white", "80", "Georgia");
    this.num2.draw(1035, 120, "white", "80", "Georgia");
    this.equalSign.draw(1135, 130, "white", "80", "Georgia");
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
