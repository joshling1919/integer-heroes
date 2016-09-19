

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

}

export default Character;
