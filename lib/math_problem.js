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
    this.clearHorizontal();
    this.num1.draw(870, 120, "white", "100", "Georgia", 3);
    this.operator.draw(960, 120, "white", "100", "Georgia", 3);
    this.num2.draw(1065, 120, "white", "100", "Georgia", 3);
    this.drawAnimatedNumbers(section);
    this.equalSign.draw(1165, 130, "white", "100", "Georgia", 3);
  }

  drawVertical(section) {
    this.num1.draw(1020, 70, "white", "100", "Georgia", 3);
    this.operator.draw(910, 180, "white", "100", "Georgia", 3);
    this.num2.draw(1020, 180, "white", "100", "Georgia", 3);
    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.moveTo(860, 220);
    this.ctx.lineTo(1130, 220);
    this.ctx.stroke();
    this.drawAnimatedNumbers(section);
  }

  drawAnimatedNumbers(section){
    if (section === 1) {
      this.num1.shrinkAndGrow();
    } else if (section === 2) {
      this.num1.stopAnimation();
      this.num2.shrinkAndGrow();
    } else {
      this.num2.stopAnimation();
    }
  }

  clearHorizontal(){
    this.ctx.clearRect(800, 20, 445, 200);
  }
}

export default MathProblem;
