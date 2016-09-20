

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

  //let's change things up and just have one clear all button.
  handleClick(event){
    const rect = event.currentTarget.getBoundingClientRect();
    const cursorX = this.getCursorXPos(event, rect);
    const cursorY = this.getCursorYPos(event, rect);
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

  getCursorXPos(event, rect) {
    const x = (event.clientX - rect.left) / (rect.right - rect.left) * event.currentTarget.width;
    return x;
  }

  getCursorYPos(event, rect) {
    const y = (event.clientY - rect.top) / (rect.bottom - rect.top) * event.currentTarget.height;
    return y;
  }

  animateFight(container){
    const requestID = window.requestAnimFrame(this.animateFight.bind(this, container));
    if (container.containerNumber === 1) {
      if (this.xPos > 960) {
        window.cancelAnimationFrame(requestID);
        this.ctx.clearRect(850, 300, 300, 200);

      } else {
        this.ctx.clearRect(this.xPos - 15, this.yPos, this.width + 30, this.height);
        if (this.xPos < 810) {
          this.drawFirstFightingPose(container);
          this.xPos +=10;
        } else if (this.xPos < 840) {
          this.drawSecondFightingPose(container);
          this.xPos += 10;
        } else if (this.xPos < 875) {
          this.drawThirdFightingPose(container);
          this.xPos += 10;
        }
      }
    } else {
      if (this.xPos < 940) {
        window.cancelAnimationFrame(requestID);
        this.ctx.clearRect(850, 300, 320, 200);

      } else {
        this.ctx.clearRect(this.xPos - 20, this.yPos, this.width + 30, this.height);
        if (this.xPos > 1010) {
          this.drawFirstFightingPose(container);
          this.xPos -=10;
        } else if (this.xPos > 990) {
          this.drawSecondFightingPose(container);
          this.xPos -= 10;
        } else if (this.xPos > 955) {
          this.drawThirdFightingPose(container);
          this.xPos -= 10;
        }
      }
    }
  }

  joinOtherTeam(container){
    const requestID = window.requestAnimFrame(this.joinOtherTeam.bind(this, container));
    const leftEdge = ((8 - container.characters.length) * 100) + 10;
    if (this.xPos <= leftEdge + this.index * 120) {
      window.cancelAnimationFrame(requestID);
    } else {
      this.ctx.clearRect(this.xPos - 10, this.yPos, this.width + 10, this.height);
      this.xPos -= 10;
      this.drawInContainer(container);
    }
  }

}

export default Character;
