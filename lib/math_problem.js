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
    this.operator.draw(985, 120, "white", "100", "Georgia", 3);
    this.num2.draw(1080, 120, "white", "100", "Georgia", 3);
    this.drawBoxForHorizontal(section);
    this.drawAnimatedNumbers(section);
    this.equalSign.draw(1190, 130, "white", "100", "Georgia", 3);
    this.drawHorizontalArrows(section);
  }

  drawBoxForHorizontal(section) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = "white";
    if (section === 1) {
      this.ctx.rect(810, 25, 130, 150);
      this.ctx.stroke();
    } else if (section === 2) {
      this.ctx.rect(1020, 25, 130, 140);
      this.ctx.stroke();
    }
  }

  drawHorizontalArrows(section){
    this.ctx.strokeStyle = "#31CBE3";
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
    this.num1.draw(1015, 95, "white", "100", "Georgia", 3);
    this.operator.draw(910, 215, "white", "100", "Georgia", 3);
    this.num2.draw(1015, 215, "white", "100", "Georgia", 3);
    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 3;
    this.ctx.moveTo(860, 268);
    this.ctx.lineTo(1130, 268);
    this.ctx.stroke();
    this.drawBoxForVertical(section);
    this.drawAnimatedNumbers(section);
    this.drawVerticalArrows(section);
  }

  drawBoxForVertical(section) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = "white";
    if (section === 1) {
      this.ctx.rect(955, 5, 130, 130);
      this.ctx.stroke();
    } else if (section === 2) {
      this.ctx.rect(955, 125, 130, 130);
      this.ctx.stroke();
    }
  }

  drawVerticalArrows(section){
    this.ctx.strokeStyle = "#31CBE3";
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
      this.ctx.moveTo(1100, 180);
      this.ctx.lineTo(1230, 190);
      this.ctx.stroke();
      this.ctx.moveTo(1230, 190);
      this.ctx.lineTo(1190, 170);
      this.ctx.stroke();
      this.ctx.moveTo(1230, 190);
      this.ctx.lineTo(1185, 205);
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
    this.ctx.clearRect(765, 0, 480, 420);
  }
}

export default MathProblem;
