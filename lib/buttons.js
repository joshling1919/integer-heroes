import { getCursorXPos, getCursorYPos } from './util/click_util';

export default class Buttons {
  constructor(ctx, submitAnswer, clearCharacters) {
    this.ctx = ctx;
    this.submitAnswer = submitAnswer;
    this.clearCharacters = clearCharacters;

    this.canvas = document.getElementById('canvas');
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  activate(firstButtonText, secondButtonText) {
    this.draw(firstButtonText, secondButtonText);
    this.canvas.addEventListener('click', this.handleButtonClick);
  }

  handleButtonClick(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const cursorX = getCursorXPos(event, rect);
    const cursorY = getCursorYPos(event, rect);
    if (cursorX > 860 &&
      cursorX < 1135 &&
      cursorY > 250 &&
      cursorY < 350) {
      this.submit();
    }
    else if (cursorX > 860 &&
      cursorX < 1135 &&
      cursorY > 430 &&
      cursorY < 530) {
      this.clear();
    }
  }

  submit() {
    this.submitAnswer();
  }

  clear() {
    this.clearCharacters();
  }

  draw(firstButtonText, secondButtonText) {
    this.ctx.fillStyle = '#d3d3d3';
    this.ctx.fillRect(860, 250, 275, 100);
    this.ctx.fillStyle = 'black';
    this.ctx.shadowBlur = 0;
    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 0;
    this.ctx.font = '50px Georgia';
    this.ctx.fillText(firstButtonText, 1000, 320);

    this.ctx.fillStyle = '#8A2E33';
    this.ctx.fillRect(860, 430, 275, 100);
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(secondButtonText, 1000, 500);
  }

  deactivate() {
    this.ctx.clearRect(860, 250, 275, 280);
    this.canvas.removeEventListener('click', this.handleButtonClick);
  }

}