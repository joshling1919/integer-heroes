import NumberLine from './number_line';
import MathProblem from './math_problem';
import Container from './container';

import Ironman from './characters/ironman';
import Goblin from './characters/goblin';
import Thor from './characters/thor';
import Juggernaut from './characters/juggernaut';

class Round {
  constructor(ctx, points) {
    this.ctx = ctx;
    this.points = points;
    this.startRound();
  }

  startRound(){
    document.removeEventListener('keydown', this.handleEnter.bind(this));
    this.ctx.clearRect(0, 0, 2000, 1000);
    this.numberLine = new NumberLine(this.ctx);
    this.numberLine.draw(this.ctx);
    this.points.draw();
    //potentially turning off positive plus positive:
    // while ((firstNum >= 0 && secondNum >= 0) || firstNum === undefined) {
    // }
    this.firstNum = this.getRandomInt();
    this.secondNum = this.getRandomInt();
    this.mathProblem = new MathProblem(this.ctx, this.firstNum, this.secondNum);
    this.container1 = new Container(this.firstNum, this.ctx, true, 1);
    this.container2 = new Container(this.secondNum, this.ctx, false, 2);
    this.ironmanStart = new Ironman(1, this.ctx, 0, 0,
      this.container1, this.container2);
    this.ironmanStart.draw();
    this.goblinStart = new Goblin(-1, this.ctx, 1895, 0,
      this.container1, this.container2);
    this.goblinStart.draw();
    this.thorStart = new Thor(1, this.ctx, 150, 0,
      this.container1, this.container2);
    this.thorStart.draw();
    this.juggernautStart = new Juggernaut(-1, this.ctx, 1750, 0,
      this.container1, this.container2);
    this.juggernautStart.draw();
    this.instructions = document.getElementById('instructions');
    this.firstButton = document.getElementById('first-button');
    this.secondButton = document.getElementById('second-button');
    this.firstButton.innerHTML = 'Submit';
    this.secondButton.innerHTML = 'Clear';
    this.instructions.style.background = "#575757";
    this.instructions.innerHTML = "Click on the superheroes or villains and choose the correct amount to represent the first number";
    this.stage = 1;
    this.ironmanStart.bindClickListener();
    this.goblinStart.bindClickListener();
    this.thorStart.bindClickListener();
    this.juggernautStart.bindClickListener();
    this.handleButtons();
    key.unbind('left');
    key.unbind('right');
    this.start();
  }


  handleButtons(){
    // this.secondButton.addEventListener('click', this.clearCharacters.bind(this));
    this.secondButton.onclick = this.clearCharacters.bind(this);
    document.onkeydown = this.handleEnter.bind(this);
    // this.firstButton.addEventListener('click', this.submitAnswer.bind(this));
    this.firstButton.onclick = this.submitAnswer.bind(this);
  }

  handleEnter(event){
    if (event.keyCode === 13) {
      event.stopPropagation();
      this.submitAnswer(event);
    }
  }


  clearCharacters(event) {
    event.stopPropagation();
    if (this.secondButton.innerHTML === "FIGHT") {
      this.checkForFighting();
    } else {
      if (this.container1.selected) {
        this.container1.clearCharacters();
        this.ctx.clearRect(152, 202, 596, 496);
      } else if (this.container2.selected) {
        this.container2.clearCharacters();
        this.ctx.clearRect(1252, 202, 596, 496);
      }
    }
  }

  submitAnswer(event){
    event.stopPropagation();
    if (this.firstButton.innerHTML === 'JOIN FORCES') {
      this.checkForJoining();
    } else {
      if (this.container1.selected) {
        this.checkAnswer(this.container1, event);
      } else if (this.container2.selected) {
        this.checkAnswer(this.container2, event);
      } else if (this.numberLine.active) {
        this.checkNumberLine();
      }
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
      this.thirdStage();
    } else {
      this.points.value -= 5;
      this.instructions.innerHTML = "Hm, not quite, try again! Move the number line to represent the first number.";
      this.wrongAnswerColors();
    }
    this.changePoints();
  }

  checkAnswer(container, event) {
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
    if (correct) {
      this.points.value += 5;
      if (this.container1.selected) {
        this.secondStage();
      } else if (this.container2.selected) {
        this.fourthStage();
      }
    } else {
      this.points.value -= 5;
      this.clearCharacters(event);
      this.instructions.innerHTML = "Hm, not quite! Remember, positive = superheroes; negative = villain.";
      this.wrongAnswerColors();
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
    this.congratulate();
    this.displayInstructions("Now, use the arrow keys to move the numberline to represent the first number, and then press 'Submit'!");
    this.container1.selected = false;
    this.container1.clearFirstContainer();
    this.container1.draw();
    this.numberLine.start();
  }

  thirdStage(){
    this.congratulate();
    this.displayInstructions("Next, choose the correct characters to represent the second number!");
    this.mathProblem.drawHorizontal(2);
    this.numberLine.end();
    this.container2.selected = true;
    this.container2.draw();
  }

  fourthStage(){
    this.congratulate();
    this.displayInstructions("Will the two sides fight or join forces?");
    this.firstButton.innerHTML = "JOIN FORCES";
    this.secondButton.innerHTML = "FIGHT";
    this.container2.selected = false;
    this.container2.clearSecondContainer();
    this.container2.draw();
    this.mathProblem.drawHorizontal();
  }

  displayInstructions(instructions){
    let round = this;
    window.setTimeout( () => {
      round.instructions.innerHTML = instructions;
      round.instructions.style.background = "#575757";
    }, 1200);
  }

  checkForFighting(){
    if (this.firstNum * this.secondNum < 0) {
      this.congratulate();
      this.displayInstructions("Now, use the arrow keys to move on the number line to represent adding the second number!");
      this.points.value += 5;
      this.fightingStage();
    } else {
      this.points.value -= 5;
      this.instructions.innerHTML = "Try again! If the two number's signs are the same, they should join forces!";
      this.wrongAnswerColors();
    }
    this.changePoints();
  }

  checkForJoining(){
    if (this.firstNum * this.secondNum > 0) {
      this.congratulate();
      this.displayInstructions("Now, use the arrow keys to move on the number line to represent adding the second number!");
      this.points.value += 5;
      this.joiningStage();
    } else {
      this.points.value -= 5;
      this.instructions.innerHTML = "Try again! If the two number's signs are opposite, they should fight!";
      this.wrongAnswerColors();
    }
    this.changePoints();
  }

  fightingStage(){
    this.container1.clearFirstContainer();
    this.container2.clearSecondContainer();
    const isLiningUp = true;
    const isFighting = true;
    this.container1.draw(isLiningUp, isFighting);
    this.container2.draw(isLiningUp, isFighting);
    this.finalStage(isFighting);
  }

  finalStage(isFighting){
    this.numberLine.start(this.secondNum);
    this.handleKeys(isFighting);
  }

  joiningStage(){
    this.container1.clearFirstContainer();
    this.container2.clearSecondContainer();
    const isLiningUp = true;
    this.container1.draw(isLiningUp);
    this.container2.draw(isLiningUp);
    this.finalStage();
  }


  handleKeys(isFighting){
    let round = this;
    key("right", () => {
      if (round.secondNum < 0) {
        round.wrongDirection();
      } else {
        if (round.container1.characters.length === 0) {
          const firstNumIsEmpty = true;
          round.container2.animateJoin(firstNumIsEmpty);
        } else {
          if (isFighting) {
            round.container1.animateFight();
            round.container2.animateFight();
          } else {
            round.container2.animateJoin();
          }
        }

      }
      round.checkForEnd();
      return false;
    });

    key("left", () => {
      if (round.secondNum > 0) {
        round.wrongDirection();
      } else {
        if (round.container1.characters.length === 0) {
          const firstNumIsEmpty = true;
          round.container2.animateJoin(firstNumIsEmpty);
        } else {
          if (isFighting) {
            round.container1.animateFight();
            round.container2.animateFight();
          } else {
            round.container2.animateJoin();
          }
        }
      }
      round.checkForEnd();
      return false;
    });
  }

  checkForEnd(){
    if (this.container1.value + this.container2.value === this.numberLine.selected) {
      this.conclusion();
    }
  }

  conclusion(){

    // key.deleteScope('round');
    let leftOver = this.calculateLeftOver();
    let absLeftOver = Math.abs(leftOver);
    let characterType;
    let verb = "is";
    if (leftOver !== 0) {
      if (leftOver === -1) {
        characterType = "villain";
      } else if (leftOver === 1) {
        characterType = "superhero";
      } else if (leftOver < -1) {
        characterType = "villains";
        verb = "are";
      } else if (leftOver > 1) {
        characterType = "superheroes";
        verb = "are";
      }
      this.instructions.innerHTML = `Nice! Since there ${verb} ${absLeftOver} ${characterType} at the end, the final answer is ${leftOver}!`;
    } else {
      this.instructions.innerHTML = "Nice! Since there are no superheroes or villains left, the final answer is 0!";
    }
    this.ctx.clearRect(0,0, 650, 250);
    this.ctx.clearRect(1400, 0, 650, 250);
    const round = this;
    this.closeOutRound();
    window.setTimeout(() => {
      round.startRound();
    }, 4000);
  }

  closeOutRound(){
    key.unbind("right");
    key.unbind("left");
    // this.firstButton.removeEventListener('click', this.clearCharacters.bind(this));
    // this.secondButton.removeEventListener('click', this.submitAnswer.bind(this));
    this.firstButton.onclick = null;
    this.secondButton.onclick = null;
    document.onkeydown = null;
    const canvas = document.getElementById('canvas');
    canvas.removeEventListener('click', this.ironmanStart.handleClick.bind(this));
    canvas.removeEventListener('click', this.goblinStart.handleClick.bind(this));
    canvas.removeEventListener('click', this.thorStart.handleClick.bind(this));
    canvas.removeEventListener('click', this.juggernautStart.handleClick.bind(this));
    this.numberLine.end();
  }

  calculateLeftOver(){
    const container1Length = this.container1.characters.length;
    const container2Length = this.container2.characters.length;
    let container1Value, container2Value;
    if (container1Length === 0) {
      container1Value = 0;
    } else {
      container1Value = container1Length * this.container1.characters[0].value;
    }
    if (container2Length === 0) {
      container2Value = 0;
    } else {
      container2Value = container2Length * this.container2.characters[0].value;
    }
    return container1Value + container2Value;

  }

  wrongDirection(){
    this.points.value -= 5;
    this.changePoints();
    this.instructions.innerHTML = "Wrong direction! Adding a negative = move to the left! Adding a positive = move to the right!";
    this.changeInstructionsColor();
    this.wrongAnswerColors();
  }

  wrongAnswerColors(){
    this.instructions.style.background = "white";
    const round = this;
    window.setTimeout(() => {
      round.instructions.style.background = "red";
    }, 100);
  }

  congratulate(){
    const randomInt = Math.round(Math.random() * (4 - 0));
    const arrayOfCompliments = ["You're a rockstar!", "Way to go!",
    "You got it!", "Sweet!!", "Awesome!"];
    this.instructions.innerHTML= arrayOfCompliments[randomInt];
    this.instructions.style.background = "green";
  }


}


export default Round;
