import NumberLine from './number_line';
import MathProblem from './math_problem';
import Container from './container';
class Round {
  constructor(ctx) {
    this.ctx = ctx;
    this.numberLine = new NumberLine(ctx);
    this.mathProblem = new MathProblem(ctx, 4, -5);
    this.container1 = new Container(ctx, true, 1);
    this.container2 = new Container(ctx, false, 2);
    this.stage = 1;
  }

  start(){
    //first stage
    //drawHorizontal(1)
    //what is the condition to end the first stage?
    //when the correct amount of sprites have been clicked to represent
    //the first number
    //something to make things a little bit more clear could be to put sections
    //underneath the numbers
    //during this first stage, i can make the characters float up and down
    if (this.stage === 1) {
      this.container1.draw();
      this.container2.draw();
      this.mathProblem.drawHorizontal(1);

    }
    this.numberLine.start();

  }


}


export default Round;
