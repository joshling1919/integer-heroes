

class Character {

  constructor(xPos, yPos){
    this.xPos = xPos;
    this.yPos = yPos;
  }

  bindClickListener (){
    const canvas = document.getElementById('canvas');
    canvas.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(event){
    const rect = event.currentTarget.getBoundingClientRect();
    const cursorX = this.getCursorXPos(event, rect);
    const cursorY = this.getCursorYPos(event, rect);
    if (cursorX > this.xPos &&
        cursorX < this.xPos + this.width &&
        cursorY > this.yPos &&
        cursorY < this.yPos + this.height ) {
          console.log("in the zone!!");
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
