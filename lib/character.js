import Explosion from './explosion';
import { getCursorXPos, getCursorYPos } from './util/click_util';

class Character {

  constructor(xPos, yPos, container1, container2){
    this.xPos = xPos;
    this.yPos = yPos;
    this.container1 = container1;
    this.container2 = container2;
  }

  bindClickListener (){
    const canvas = document.getElementById('canvas');
    canvas.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(event){
    const rect = event.currentTarget.getBoundingClientRect();
    const cursorX = getCursorXPos(event, rect);
    const cursorY = getCursorYPos(event, rect);
    if (cursorX > this.xPos &&
        cursorX < this.xPos + this.width &&
        cursorY > this.yPos &&
        cursorY < this.yPos + this.height ) {
          if (!this.index) {
            if (this.container1.selected) {
              this.container1.clearFirstContainer();
              this.container1.addCharacter(this);
              this.container1.draw();
            } else if (this.container2.selected) {
              this.container2.clearSecondContainer();
              this.container2.addCharacter(this);
              this.container2.draw();
            }
          }
    }
  }

  animateFight(container){
    const requestID = window.requestAnimFrame(this.animateFight.bind(this, container));
    if (container.containerNumber === 1) {
      if (this.xPos > 960) {
        window.cancelAnimationFrame(requestID);
        const explosion = new Explosion(this.ctx);
        explosion.animateExplosion();
      } else {
        this.ctx.clearRect(this.xPos - 10, this.yPos, this.width, this.height);
        if (this.xPos < 810) {
          this.drawFirstFightingPose(container);
        } else if (this.xPos < 840) {
          this.drawSecondFightingPose(container);
        } else if (this.xPos < 875) {
          this.drawThirdFightingPose(container);
        }
        this.xPos += 10;
      }
    } else {
      if (this.xPos < 940) {
        window.cancelAnimationFrame(requestID);
      } else {
        this.ctx.clearRect(this.xPos , this.yPos, this.width + 15, this.height);
        if (this.xPos > 1010) {
          this.drawFirstFightingPose(container);
        } else if (this.xPos > 990) {
          this.drawSecondFightingPose(container);
        } else if (this.xPos > 955) {
          this.drawThirdFightingPose(container);
        }
        this.xPos -= 10;
      }
    }
  }


  joinOtherTeam(container){
    const requestID = window.requestAnimFrame(this.joinOtherTeam.bind(this, container));
    const leftEdge = ((8 - container.characters.length) * 100) + 10;
    if (this.xPos <= leftEdge + this.index * 110) {
      window.cancelAnimationFrame(requestID);
    } else {
      this.ctx.clearRect(this.xPos, this.yPos, this.width, this.height);
      this.xPos -= 10;
      this.drawInContainer(container);
    }
  }

}

export default Character;
