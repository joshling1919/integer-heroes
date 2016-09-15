import NumberLine from './number_line';
import MathProblem from './math_problem';


class Round {
  constructor(ctx) {
    this.numberLine = new NumberLine(ctx);
    this.mathProblem = new MathProblem(ctx, 4, -5);
  }

  start(){
    this.mathProblem.drawHorizontal();
    this.numberLine.start();

  }


}


export default Round;
