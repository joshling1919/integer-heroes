

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
    this.getCursorPosition(event);
    // if (event.clientX - rect.left > this.xPos &&
    //     event.clientX - rect.left < this.xPos + this.width &&
    //     event.offsetY > this.yPos &&
    //     event.offsetY < this.yPos + this.height ) {
    //      debugger;
    // }
  }

  getCursorPosition(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    // const x = event.clientX - rect.left;
    // const y = event.clientY - rect.top;
    const x = event.offsetX;
    const y = event.offsetY;
    console.log("x: " + x + "y: " + y);
  }


}

export default Character;
