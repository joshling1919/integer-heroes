import NumberLine from './number_line';
import MathProblem from './math_problem';
import Container from './container';

import Ironman from './ironman_character';

class Round {
  constructor(ctx) {
    this.ctx = ctx;
    this.numberLine = new NumberLine(ctx);
    this.numberLine.start();
    this.mathProblem = new MathProblem(ctx, 4, -5);
    this.container1 = new Container(ctx, true, 1);
    this.container2 = new Container(ctx, false, 2);
    this.ironmanStart = new Ironman(ctx, 0, 0,
      this.container1, this.container2);
    this.ironmanStart.draw();
    this.instructions = "Choose the correct number of characters to represent the first number";
    this.stage = 1;
    this.ironmanStart.bindClickListener();
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
    this.firstStage();


  }

  firstStage(){
    let instructions = document.getElementById('instructions');
    instructions.innerHTML = this.instructions;
    this.container1.draw();
    this.container2.draw();
    this.mathProblem.drawHorizontal(1);
  }


}


export default Round;
