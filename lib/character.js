import Ironman from './ironman_character';

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
    const iron = Ironman;
    const rect = event.currentTarget.getBoundingClientRect();
    const cursorX = this.getCursorXPos(event, rect);
    const cursorY = this.getCursorYPos(event, rect);
    if (cursorX > this.xPos &&
        cursorX < this.xPos + this.width &&
        cursorY > this.yPos &&
        cursorY < this.yPos + this.height ) {
          if (this.container1 || this.container2) {
            console.log("in the zone!!");
            const newCharacter = this.newCharacter();
            if (this.container1.selected) {
              //clear the space of the original container1 (OR NOT)
              // this.ctx.clearRect(150, 200, 600, 500);
              this.container1.addCharacter(newCharacter);
              //redraw it
              this.container1.draw();
            } else if (this.container2.selected) {
              this.container2.addCharacter(newCharacter);
            }
          }
          //when I click on the "original" character,
          //I want a copy of him to appear in the highlighted box.
          //later, if the student clicks on the box, he should be able to
          //be erased. //the container should be an array of characters

    }
  }

  newCharacter() {
    let newCharacter;
    if (this.constructor.name === "Ironman") {
      newCharacter = new Ironman();
    }
    return newCharacter;
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
