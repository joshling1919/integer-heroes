
class Container {
  constructor(ctx, selected, containerNumber){
    this.selected = selected;
    this.containerNumber = containerNumber;
    this.ctx = ctx;
    this.characters = [];
  }

  draw(){
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 1;
    if (this.selected === true) {
      this.ctx.lineWidth = 6;
    }
    if (this.containerNumber === 1) {
      this.ctx.beginPath();
      this.ctx.rect(150, 200, 600, 500);
      this.ctx.stroke();
      this.ctx.closePath();
      for (let index = 0; index < this.characters.length ; index++) {
        if (index > 9) {
          break;
        }
        this.characters[index].xPos = 160 + index * 120;
        this.characters[index].yPos = 210;
        if (index > 4) {
          this.characters[index].xPos = 160 + (index % 5) * 120;
          this.characters[index].yPos = 210 + 200;
        }
        this.characters[index].index = index;
        this.characters[index].draw();
        console.log("draw the character!");

      }
    } else {
      this.ctx.beginPath();
      this.ctx.rect(1250, 200, 600, 500);
      this.ctx.stroke();
      this.ctx.closePath();
    }


  }

  addCharacter(character) {
    this.characters.push(character);
  }

  deleteCharacter(characterIndex) {
    this.characters.splice(characterIndex, 1);
  }
}

export default Container;
