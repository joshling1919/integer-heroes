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
    this.firstButton.innerHTML = 'Submit';
    this.firstButton.style.background = "white";
    this.firstButton.style.color = "#575757";
    this.secondButton.innerHTML = 'Clear';
    this.secondButton.style.display = "inline-block";
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

    let firstContainerCount = 0;
    let characters; 
    if (this.firstNum > 0) {
      characters = [new Ironman(), new Thor(), new Hulk()];
    } else {
      characters = [new Loki(), new Juggernaut(), new Goblin()];
    }
    setTimeout(() => {
      this.automate(firstContainerCount, characters);
    }, 1200);
  }

  automate(firstContainerCount, characters) {
    const rand = Math.floor((Math.random() * 3));
    this.container1.clearFirstContainer();
    this.container1.addCharacter(characters[rand]);
    this.container1.draw();
    firstContainerCount++;
    console.log(firstContainerCount);
    setTimeout(() => {
      if (firstContainerCount !== Math.abs(this.firstNum)) {
        this.automate(firstContainerCount, characters);
      }
    }, 800);
  }

  secondStage(){
    this.container1.selected = false;
    this.container1.clearFirstContainer();
    this.container1.draw();
    this.numberLine.start();
  }

  thirdStage(){
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

  checkForFighting(){
    if (this.firstNum * this.secondNum < 0) {
      this.points.value += 5;
      this.fightingStage();
    } else {
      this.points.value -= 5;
    }
    this.changePoints();
  }

  checkForJoining(){
    if (this.firstNum * this.secondNum > 0) {
      this.points.value += 5;
      this.joiningStage();
    } else {
      this.points.value -= 5;
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
    this.ctx.drawImage(window.imageObj['right_arrow'], 1050, 880, 200, 100);
    this.ctx.drawImage(window.imageObj['left_arrow'], 700, 880, 200, 100);
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
    this.ctx.clearRect(0,0, 650, 250);
    this.ctx.clearRect(1400, 0, 650, 250);
    this.firstButton.innerHTML = "New Round!";
    this.firstButton.style.background = "green";
    this.firstButton.style.color = "white";
  }

  closeOutRound(){
    key.unbind("right");
    key.unbind("left");
    const canvas = document.getElementById('canvas');
    canvas.removeEventListener('click', this.boundedHandleClicks);
    this.firstButton.onclick = this.startRound.bind(this);
    this.secondButton.style.display = "none";
    this.secondButton.onclick = null;
    document.onkeydown = null;
    this.numberLine.end();
  }

  wrongDirection(){
    this.points.value -= 5;
    this.changePoints();
  }


}


export default Round;
