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
    this.num1.draw(840, 120, "white", "100", "Georgia", 3);
    if (section === 1) {
      this.num1.shrinkAndGrow();
    }
    this.operator.draw(930, 120, "white", "100", "Georgia", 3);
    this.num2.draw(1035, 120, "white", "100", "Georgia", 3);
    if (section === 2) {
      this.num2.shrinkAndGrow();
    }
    this.equalSign.draw(1135, 130, "white", "100", "Georgia", 3);
  }

  drawVertical() {
    this.num1.draw(980, 80, "white", "100", "Georgia", 3);
    this.operator.draw(880, 180, "white", "100", "Georgia", 3);
    this.num2.draw(980, 180, "white", "100", "Georgia", 3);
    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.moveTo(830, 220);
    this.ctx.lineTo(1100, 220);
    this.ctx.stroke();
  }
}

export default MathProblem;
