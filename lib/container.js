
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
      this.ctx.rect(150, 200, 600, 500);
      this.ctx.stroke();
      this.characters.forEach((character, index) => {
        if (index > 9) {
          return;
        }
        character.xPos = 160 + index * 120;
        character.yPos = 210;
        if (index > 4) {
          character.xPos = 160 + (index % 5) * 120;
          character.yPos = 210 + 200;
        }
        character.ctx = this.ctx;
        character.index = index;
        character.draw();
        console.log("draw the character!");
      });
    } else {
      this.ctx.rect(1250, 200, 600, 500);
      this.ctx.stroke();
    }


  }

  addCharacter(character) {
    this.characters.push(character);
  }
}

export default Container;
