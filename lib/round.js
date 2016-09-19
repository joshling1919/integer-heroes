import NumberLine from './number_line';
import MathProblem from './math_problem';
import Container from './container';

import Ironman from './characters/ironman';
import Goblin from './characters/goblin';

class Round {
  constructor(ctx, points) {
    this.ctx = ctx;
    this.numberLine = new NumberLine(ctx);
    this.points = points;
    this.numberLine.draw(ctx);
    this.points.draw();
    let firstNum, secondNum;
    while ((firstNum >= 0 && secondNum >= 0) || firstNum === undefined) {
      firstNum = this.getRandomInt();
      secondNum = this.getRandomInt();
    }
    this.mathProblem = new MathProblem(ctx, firstNum, secondNum);
    this.container1 = new Container(this.points, firstNum, ctx, true, 1);
    this.container2 = new Container(this.points, secondNum, ctx, false, 2);
    this.ironmanStart = new Ironman(1, ctx, 0, 0,
      this.container1, this.container2);
    this.ironmanStart.draw();
    this.goblinStart = new Goblin(-1, ctx, 1895, 0,
      this.container1, this.container2);
    this.goblinStart.draw();
    this.instructions = "Choose the correct number of characters to represent the first number";
    this.stage = 1;
    //*note to self* multiple click listeners could cause potential problems
    this.ironmanStart.bindClickListener();
    this.goblinStart.bindClickListener();
  }

  getRandomInt(){
    const min = -8;
    const max = 8;
    let random = Math.round(Math.random() * (max - min) + min);
    while (random === 0) {
      random = Math.round(Math.random() * (max - min) + min);
    }
    return random;
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
    //right now, if the student presses submit, I need to be able to evaluate
    //whether it's the correct amount of superheroes or correct amount of villains.
    //If I use values, they could put superheroes and villains together.
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
