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
    this.container1 = new Container(firstNum, ctx, true, 1);
    this.container2 = new Container(secondNum, ctx, false, 2);
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
    this.handleButtons();
  }

  handleButtons(){
    const clear = document.getElementById('clear');
    clear.addEventListener('click', this.clearCharacters.bind(this));
    const submit = document.getElementById('submit');
    submit.addEventListener('click', this.submitAnswer.bind(this));
  }



  clearCharacters() {
    if (this.container1.selected) {
      const charactersLength = this.container1.characters.length;
      this.container1.characters.splice(0, charactersLength);
      this.ctx.clearRect(152, 202, 596, 496);
    } else if (this.container2.selected) {
      const charactersLength = this.container2.characters.length;
      this.container2.characters.splice(0, charactersLength);
      this.ctx.clearRect(1252, 202, 596, 496);
    }
  }

  submitAnswer(){
    if (this.container1.selected) {
      this.checkAnswer(this.container1);
    } else if (this.container2.selected) {
      this.checkAnswer(this.container2);
    }
  }

  checkAnswer(container) {
    let sameSign = true;
    let sum = 0;
    container.characters.forEach( (character, index) => {
      if (index === 0) {
        sum += character.value;
        return;
      }
      if (character.value !== container.characters[index - 1].value) {
        sameSign = false;
      }
      sum += character.value;
    } );
    const correct = (sameSign && sum === container.value);
    // this.ctx.clearRect(1750, 950, 200, 100);
    this.ctx.clearRect(1650, 900, 400, 100);
    const instructions = document.getElementById('instructions');
    if (correct) {
      this.points.value += 5;
      this.points.draw();
      this.secondStage();
      //trigger transition to the next stage
      //that means freezing the clicklisteners on characters
      //turning on the numberline, while changing the directions
    } else {
      this.points.value -= 5;
      this.clearCharacters();
      instructions.innerHTML = "Hm, not quite! Remember, positive = superheroes; negative = villain.";
      this.points.draw();
    }
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

  secondStage(){
    let instructions = document.getElementById('instructions');
    instructions.innerHTML = "Nice job! Now, move the numberline to the correctly represent the first number!";
    this.container1.selected = false;
  }


}


export default Round;
