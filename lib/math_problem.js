import Integer from './integer';

class MathProblem {
  constructor(ctx, value1, value2){
    this.ctx = ctx;
    this.num1 = new Integer(value1, ctx);
    this.operator = new Integer("+", ctx);
    this.num2 = new Integer(value2, ctx);
    this.equalSign = new Integer("=", ctx);
  }


  drawHorizontal(section) {
    this.num1.draw(870, 120, "white", "100", "Georgia", 3);
    if (section === 1) {
      this.num1.shrinkAndGrow();
    }
    this.operator.draw(960, 120, "white", "100", "Georgia", 3);
    this.num2.draw(1065, 120, "white", "100", "Georgia", 3);
    if (section === 2) {
      this.num2.shrinkAndGrow();
    }
    this.equalSign.draw(1165, 130, "white", "100", "Georgia", 3);
  }

  drawVertical() {
    this.num1.draw(1100, 80, "white", "100", "Georgia", 3);
    this.operator.draw(910, 180, "white", "100", "Georgia", 3);
    this.num2.draw(1100, 180, "white", "100", "Georgia", 3);
    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.moveTo(860, 220);
    this.ctx.lineTo(1130, 220);
    this.ctx.stroke();
  }
}

export default MathProblem;
