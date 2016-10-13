import NumberLine from './number_line';
import MathProblem from './math_problem';
import Container from './container';

import Ironman from './characters/ironman';
import Goblin from './characters/goblin';
import Thor from './characters/thor';
import Juggernaut from './characters/juggernaut';
import Hulk from './characters/hulk';
import Loki from './characters/loki';

class Round {
  constructor(ctx, points) {
    this.ctx = ctx;
    this.points = points;
    this.roundNum = 0;
    this.firstButton = document.getElementById('first-button');
    this.secondButton = document.getElementById('second-button');
    this.startRound();
  }

  startRound(){
    this.roundNum += 1;
    document.removeEventListener('keydown', this.handleEnter.bind(this));
    this.ctx.clearRect(0, 0, 2000, 1000);
    const canvas = document.getElementById('canvas');
    this.numberLine = new NumberLine(this.ctx, canvas);
    this.numberLine.draw(this.ctx);
    this.points.draw();
    this.firstNum = this.getRandomInt();
    this.secondNum = this.getRandomInt();
    if (Math.random() < 0.8 ) {
      while (this.firstNum > 0 && this.secondNum > 0) {
        this.firstNum = this.getRandomInt();
        this.secondNum = this.getRandomInt();
      }
    }
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
    this.hulkStart = new Hulk(1, this.ctx, 300, 25,
      this.container1, this.container2);
      this.hulkStart.draw();
    this.lokiStart = new Loki(-1, this.ctx, 1600, 0,
      this.container1, this.container2);
      this.lokiStart.draw();
    this.instructions = document.getElementById('instructions');
    this.firstButton.innerHTML = 'Submit';
    this.firstButton.style.background = "white";
    this.firstButton.style.color = "#575757";
    this.secondButton.innerHTML = 'Clear';
    this.secondButton.style.display = "inline-block";
    const directions = document.getElementById('modal-button');
    directions.style.display = "inline-block";
    this.instructions.style.background = "#31CBE3";
    this.instructions.style.color = "black";
    this.instructions.innerHTML = "Click on the superheroes or villains and choose the correct amount to represent the FIRST number";
    this.stage = 1;
    this.ironmanStart.bindClickListener();
    this.goblinStart.bindClickListener();
    this.thorStart.bindClickListener();
    this.juggernautStart.bindClickListener();
    this.hulkStart.bindClickListener();
    this.lokiStart.bindClickListener();
    this.handleButtons();
    key.unbind('left');
    key.unbind('right');
    this.start();
  }


  handleButtons(){
    this.secondButton.onclick = this.clearCharacters.bind(this);
    document.onkeydown = this.handleEnter.bind(this);
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


  checkNumberLine(){
    if (this.container1.value === this.numberLine.selected) {
      this.points.value += 5;
      this.thirdStage();
    } else {
      this.points.value -= 5;
      this.instructions.innerHTML = "Hm, not quite, try again! Move the number line to represent the FIRST number. <button id='understood'>Got it!</button>";
      this.understoodButton("Now, use the arrow keys to move the numberline to represent the FIRST number, and then press 'Submit'!");
      this.wrongAnswerColors();
    }
    this.changePoints();
  }

  understoodButton(text) {
    const understood = document.getElementById('understood');
    understood.onclick= () => {
      this.instructions.innerHTML = text;
      this.instructions.style.color = "black";
      this.instructions.style.background = "#31CBE3";
    };
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
      this.instructions.innerHTML = "Hm, not quite! Remember, each hero represents +1; each villain represents -1! <button id='understood'>Got it!</button>";
      if (this.container1.selected) {
        this.understoodButton("Click on the superheroes or villains and choose the correct amount to represent the FIRST number");
      } else if (this.container2.selected) {
        this.understoodButton("Click on the superheroes or villains and choose the correct amount to represent the SECOND number");
      }
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
    if (this.roundNum % 2 === 1) {
      this.mathProblem.drawHorizontal(1);
    } else {
      this.mathProblem.drawVertical(1);
    }
  }

  secondStage(){
    this.congratulate();
    this.displayInstructions("Now, use the arrow keys to move the numberline to represent the FIRST number, and then press 'Submit'!");
    this.container1.selected = false;
    this.container1.clearFirstContainer();
    this.container1.draw();
    this.numberLine.start();
  }

  thirdStage(){
    this.congratulate();
    this.displayInstructions("Next, choose the correct characters to represent the SECOND number!");
    if (this.roundNum % 2 === 1) {
      this.mathProblem.drawHorizontal(2);
    } else {
      this.mathProblem.drawVertical(2);
    }
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
    if (this.roundNum % 2 === 1) {
      this.mathProblem.drawHorizontal();
    } else {
      this.mathProblem.drawVertical();
    }
  }

  displayInstructions(instructions){
    let round = this;
    this.firstButton.style.display = "none";
    this.secondButton.style.display = "none";
    document.onkeydown = null;
    window.setTimeout( () => {
      round.instructions.innerHTML = instructions;
      round.instructions.style.background = "#31CBE3";
      round.instructions.style.color = "black";
      round.firstButton.style.display = "inline-block";
      round.secondButton.style.display = "inline-block";
      document.onkeydown = this.handleEnter.bind(this);
    }, 1200);
  }

  checkForFighting(){
    if (this.firstNum * this.secondNum < 0) {
      this.congratulate();
      this.instructions.innerHTML = "Now, move on the number line to represent ADDING the second number!";
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
      this.instructions.innerHTML = "Now, use the arrow keys to move on the number line to represent adding the SECOND number!";
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
    this.isFighting = isFighting;
    const canvas = document.getElementById('canvas');
    this.boundedHandleClicks = this.handleArrowClicks.bind(this);
    canvas.addEventListener('click', this.boundedHandleClicks);
    key("right", this.handleRight.bind(this));
    key("left", this.handleLeft.bind(this));
  }

  handleArrowClicks(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const cursorX = this.getCursorXPos(event, rect);
    const cursorY = this.getCursorYPos(event, rect);
    if (cursorX > 1050 &&
        cursorX < 1250 &&
        cursorY > 880 &&
        cursorY < 980) {
          this.handleRight();
        }
    else if (cursorX > 700 &&
             cursorX < 900 &&
             cursorY > 880 &&
             cursorY < 980) {
          this.handleLeft();
    }
  }

  getCursorXPos(event, rect) {
    const x = (event.clientX - rect.left) / (rect.right - rect.left) * event.currentTarget.width;
    return x;
  }

  getCursorYPos(event, rect) {
    const y = (event.clientY - rect.top) / (rect.bottom - rect.top) * event.currentTarget.height;
    return y;
  }

  handleRight(){
    if (window.overallAnimIsComplete) {
      this.numberLine.handleRight(this.secondNum);
      if (this.secondNum < 0) {
        this.wrongDirection();
      } else {
        window.overallAnimIsComplete = false;
        if (this.container1.characters.length === 0) {
          const firstNumIsEmpty = true;
          this.container2.animateJoin(firstNumIsEmpty);
        } else {
          if (this.isFighting) {
            this.container1.animateFight();
            this.container2.animateFight();
          } else {
            this.container2.animateJoin();
          }
        }
      }
      this.checkForEnd();
    }
  }

  handleLeft(){
    if (window.overallAnimIsComplete) {
      this.numberLine.handleLeft(this.secondNum);
      if (this.secondNum > 0) {
        this.wrongDirection();
      } else {
        window.overallAnimIsComplete = false;
        if (this.container1.characters.length === 0) {
          const firstNumIsEmpty = true;
          this.container2.animateJoin(firstNumIsEmpty);
        } else {
          if (this.isFighting) {
            this.container1.animateFight();
            this.container2.animateFight();
          } else {
            this.container2.animateJoin();
          }
        }
      }
      this.checkForEnd();
    }
  }

  checkForEnd(){
    if (this.container1.value + this.container2.value === this.numberLine.selected) {
      this.conclusion();
      this.closeOutRound();
    }
  }

  conclusion(){
    this.instructions.style.background = "#31CBE3";
    this.instructions.style.color = "black";
    this.ctx.clearRect(0,0, 650, 250);
    this.ctx.clearRect(1400, 0, 650, 250);
    this.firstButton.innerHTML = "New Round!";
    this.firstButton.style.background = "green";
    this.firstButton.style.color = "white";
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
      this.instructions.innerHTML = `Nice! Since there ${verb} ${absLeftOver} ${characterType} at the end, the final answer is ${leftOver}! (Press 'New Round'!)`;
    } else {
      this.instructions.innerHTML = "Nice! Since there are no superheroes or villains left, the final answer is 0! (Press 'New Round'!)";
    }
  }

  closeOutRound(){
    key.unbind("right");
    key.unbind("left");
    const canvas = document.getElementById('canvas');
    canvas.removeEventListener('click', this.boundedHandleClicks);
    this.firstButton.onclick = this.startRound.bind(this);
    this.secondButton.style.display = "none";
    const directions = document.getElementById('modal-button');
    directions.style.display = "none";
    this.secondButton.onclick = null;
    document.onkeydown = null;
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
    this.wrongAnswerColors();
  }

  wrongAnswerColors(){
    this.instructions.style.background = "white";
    const round = this;
    window.setTimeout(() => {
      round.instructions.style.background = "red";
      round.instructions.style.color = "white";
    }, 100);
  }

  congratulate(){
    const randomInt = Math.round(Math.random() * (4 - 0));
    const arrayOfCompliments = ["You're a rockstar!", "Way to go!",
    "You got it!", "Sweet!!", "Awesome!"];
    this.instructions.innerHTML= arrayOfCompliments[randomInt];
    this.instructions.style.background = "green";
    this.instructions.style.color = "white";
  }


}


export default Round;
