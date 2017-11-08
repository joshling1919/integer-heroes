import { getCursorXPos, getCursorYPos } from './util/click_util';

export default class Buttons {
  constructor(ctx, submitAnswer, clearCharacters, startRound) {
    this.ctx = ctx;
    this.submitAnswer = submitAnswer;
    this.clearCharacters = clearCharacters;
    this.startRound = startRound;
    this.numButtons = 0;
    this.canvas = document.getElementById('canvas');
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  activate(numButtons) {
    this.numButtons = numButtons;
    this.draw();
    this.canvas.addEventListener('click', this.handleButtonClick);
  }

  handleButtonClick(event) {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    const cursorX = getCursorXPos(event, rect);
    const cursorY = getCursorYPos(event, rect);
    if (this.numButtons === 2) {
      if (cursorX > 860 &&
          cursorX < 1135 &&
          cursorY > 350 &&
          cursorY < 450) {
        this.submit();
      }
      else if (cursorX > 860 &&
              cursorX < 1135 &&
              cursorY > 530 &&
              cursorY < 630) {
        this.clearCharacters();
      }
    } else if (this.numButtons === 1) {
      if (cursorX > 860 &&
          cursorX < 1135 &&
          cursorY > 880 &&
          cursorY < 980) {
        this.deactivate();
        this.startRound();
      }
    }
  }

  submit() {
    this.submitAnswer();
  }

  clear() {
    this.clearCharacters();
  }

  draw() {
    if (this.numButtons === 2) {
      this.ctx.fillStyle = '#d3d3d3';
      this.ctx.fillRect(860, 350, 275, 100);
      this.ctx.fillStyle = 'black';
      this.ctx.shadowBlur = 0;
      this.ctx.shadowOffsetX = 0;
      this.ctx.shadowOffsetY = 0;
      this.ctx.font = '50px Georgia';
      this.ctx.fillText('Submit', 1000, 420);
  
      this.ctx.fillStyle = '#8A2E33';
      this.ctx.fillRect(860, 530, 275, 100);
      this.ctx.fillStyle = 'black';
      this.ctx.fillText('Clear', 1000, 600);
    } else if (this.numButtons === 1) {
      this.ctx.fillStyle = '#F88033';
      this.ctx.fillRect(860, 880, 275, 100);
      this.ctx.fillStyle = 'white';
      this.ctx.shadowBlur = 0;
      this.ctx.shadowOffsetX = 0;
      this.ctx.shadowOffsetY = 0;
      this.ctx.fillText('Next Round', 1000, 940);
    }
  }

  deactivate() {
    this.ctx.clearRect(860, 350, 275, 280);
    this.canvas.removeEventListener('click', this.handleButtonClick);
  }

}