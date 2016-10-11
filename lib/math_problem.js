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
    this.drawHorizontalArrows(section);
  }

  drawHorizontalArrows(section){
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 6;
    this.ctx.beginPath();
    if (section === 1) {
      this.ctx.moveTo(870, 120);
      this.ctx.lineTo(770, 200);
      this.ctx.stroke();
      this.ctx.moveTo(770, 200);
      this.ctx.lineTo(790, 160);
      this.ctx.stroke();
      this.ctx.moveTo(770, 200);
      this.ctx.lineTo(810, 195);
      this.ctx.stroke();
    } else if (section === 2) {
      this.ctx.moveTo(1075, 120);
      this.ctx.lineTo(1230, 190);
      this.ctx.stroke();
      this.ctx.moveTo(1230, 190);
      this.ctx.lineTo(1210, 150);
      this.ctx.stroke();
      this.ctx.moveTo(1230, 190);
      this.ctx.lineTo(1190, 195);
      this.ctx.stroke();
    }
    this.ctx.closePath();
  }

  drawVertical(section) {
    this.clearHorizontal();
    this.num1.draw(1020, 70, "white", "100", "Georgia", 3);
    this.operator.draw(910, 180, "white", "100", "Georgia", 3);
    this.num2.draw(1020, 180, "white", "100", "Georgia", 3);
    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 3;
    this.ctx.moveTo(860, 220);
    this.ctx.lineTo(1130, 220);
    this.ctx.stroke();
    this.drawAnimatedNumbers(section);
    this.drawVerticalArrows(section);
  }

  drawVerticalArrows(section){
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 6;
    this.ctx.beginPath();
    if (section === 1) {
      this.ctx.moveTo(940, 80);
      this.ctx.lineTo(770, 180);
      this.ctx.stroke();
      this.ctx.moveTo(770, 180);
      this.ctx.lineTo(795, 145);
      this.ctx.stroke();
      this.ctx.moveTo(770, 180);
      this.ctx.lineTo(800, 190);
      this.ctx.stroke();
    } else if (section === 2) {
      this.ctx.moveTo(1085, 150);
      this.ctx.lineTo(1230, 190);
      this.ctx.stroke();
      this.ctx.moveTo(1230, 190);
      this.ctx.lineTo(1210, 150);
      this.ctx.stroke();
      this.ctx.moveTo(1230, 190);
      this.ctx.lineTo(1190, 195);
      this.ctx.stroke();
    }
    this.ctx.closePath();
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
    this.ctx.clearRect(765, 20, 480, 400);
  }
}

export default MathProblem;
