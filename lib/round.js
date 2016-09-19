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
    this.instructions = document.getElementById('instructions');
    this.instructions.style.background = "#575757";
    this.instructions.innerHTML = "Choose the correct number of characters to represent the first number";
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
    this.changeInstructionsColor();
    if (this.container1.selected) {
      this.checkAnswer(this.container1);
    } else if (this.container2.selected) {
      this.checkAnswer(this.container2);
    } else if (this.numberLine.active) {
      this.checkNumberLine();
    }
  }

  changeInstructionsColor(){
    let newColor, fontColor;
    if (this.instructions.style.background === "rgb(87, 87, 87)") {
      newColor = "black";
      fontColor = "white";
    } else {
      newColor = "#575757";
      fontColor = "white";
    }
    this.instructions.style.background = newColor;
    this.instructions.style.color = fontColor;
  }

  checkNumberLine(){
    if (this.container1.value === this.numberLine.selected) {
      this.points.value += 5;
      this.instructions.innerHTML = "Nice job!";
    } else {
      this.points.value -= 5;
      this.instructions.innerHTML = "Hm, not quite, try again! Move the number line to represent the first number.";
    }
    this.changePoints();
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
    if (correct) {
      this.points.value += 5;
      this.secondStage();
    } else {
      this.points.value -= 5;
      this.instructions.innerHTML = "Hm, not quite! Remember, positive = superheroes; negative = villain.";
    }
    this.changePoints();
  }

  changePoints(){
    this.ctx.clearRect(1650, 900, 400, 100);
    this.points.draw();
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
    this.firstStage();

  }

  firstStage(){
    this.container1.draw();
    this.container2.draw();
    this.mathProblem.drawHorizontal(1);
  }

  secondStage(){
    this.instructions.innerHTML = "Nice job! Now, use the arrow keys to move the numberline to represent the first number, and then press 'Submit'!";
    this.container1.selected = false;
    this.numberLine.start();
  }


}


export default Round;
