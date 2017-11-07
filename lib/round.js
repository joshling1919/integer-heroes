import NumberLine from './number_line';
import MathProblem from './math_problem';
import Container from './container';
import Buttons from './buttons';
import { getCursorXPos, getCursorYPos } from './util/click_util';

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
    this.buttons = new Buttons(
      this.ctx, 
      this.submitAnswer.bind(this), 
      this.clearCharacters.bind(this)
    );

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
    document.onkeydown = this.handleEnter.bind(this);
  }

  handleEnter(event){
    if (event.keyCode === 13) {
      event.stopPropagation();
      this.submitAnswer(event);
    }
  }


  clearCharacters() {
    if (this.container1.selected) {
      this.container1.clearCharacters();
      this.ctx.clearRect(152, 202, 596, 496);
    } else if (this.container2.selected) {
      this.container2.clearCharacters();
      this.ctx.clearRect(1252, 202, 596, 496);
      this.secondContainerHelpText();
    } else {
      this.checkForFighting();
    }
  }

  submitAnswer(){
    console.log(this);
    if (this.container1.selected) {
      this.checkAnswer(this.container1, event);
    } else if (this.container2.selected) {
      this.checkAnswer(this.container2, event);
    } else if (this.numberLine.active) {
      this.checkNumberLine();
    } else {
      this.checkForJoining();
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
    if (correct) {
      this.points.value += 5;
      if (this.container1.selected) {
        this.secondStage();
      } else if (this.container2.selected) {
        this.fourthStage();
      }
    } else {
      this.points.value -= 5;
      this.clearCharacters();
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
    setTimeout(() => {
      if (firstContainerCount !== Math.abs(this.firstNum)) {
        this.automate(firstContainerCount, characters);
      } else {
        this.submitAnswer();
      }
    }, 700);
  }

  secondStage(){
    this.container1.selected = false;
    this.container1.clearFirstContainer();
    this.container1.draw();
    this.numberLine.drawCenterBox(this.ctx);
    this.numberLine.active = true;
    this.automateNumberLine();
  }

  automateNumberLine() {
    let move;
    if (this.firstNum < 0) {
      move = this.numberLine.handleLeft.bind(this.numberLine);
    } else {
      move = this.numberLine.handleRight.bind(this.numberLine);
    }

    this.moveNumberLine(move, 0);
  }

  moveNumberLine(move, i) {
    setTimeout(() => {
      move();
      i += 1;
      if (Math.abs(this.firstNum) !== i) {
        this.moveNumberLine(move, i);
      } else {
        setTimeout(() => {
          this.submitAnswer();
        }, 900);
      }
    }, 700);
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
    this.secondContainerHelpText();

    this.buttons.activate('Submit', 'Clear');
  }

  secondContainerHelpText() {
    setTimeout(() => {
      this.ctx.font = "50px Georgia";
      this.ctx.fillText("Click on the correct", 1520, 260);
      this.ctx.fillText("correct amount of", 1500, 320);
      this.ctx.fillText("superheroes or villains", 1550, 380);
      this.ctx.fillText(`to represent ${this.secondNum}!`, 1480, 440);
      this.ctx.fillStyle = "green";
      this.ctx.fillText("Hero = Positive 1", 1500, 520);
      this.ctx.fillStyle = "red";
      this.ctx.fillText("Villain = Negative 1", 1520, 580);
    }, 700);
  }

  fourthStage(){
    this.container2.selected = false;
    this.container2.clearSecondContainer();
    this.container2.draw();
    if (this.roundNum % 2 === 1) {
      this.mathProblem.drawHorizontal();
    } else {
      this.mathProblem.drawVertical();
    }
    this.buttons.deactivate();

    setTimeout(() => {
      this.buttons.activate('Combine', 'Fight');
    }, 800)
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
    const cursorX = getCursorXPos(event, rect);
    const cursorY = getCursorYPos(event, rect);
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
  }

  closeOutRound(){
    key.unbind("right");
    key.unbind("left");
    const canvas = document.getElementById('canvas');
    canvas.removeEventListener('click', this.boundedHandleClicks);

    document.onkeydown = null;
    this.numberLine.end();
  }

  wrongDirection(){
    this.points.value -= 5;
    this.changePoints();
  }


}


export default Round;
