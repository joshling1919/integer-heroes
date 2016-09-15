import Integer from './integer';

class MathProblem {
  constructor(ctx){
    this.ctx = ctx;
    this.num1 = new Integer(5, ctx);
    this.num2 = new Integer(-4, ctx);
  }


  draw() {
    this.num1.draw(875, 120);
    this.ctx.fillText("+", 980, 120);
    this.num2.draw(1120, 120);

  }
}

export default MathProblem;
