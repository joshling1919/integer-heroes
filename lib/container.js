import Ironman from './characters/ironman';
import Goblin from './characters/goblin';

class Container {
  constructor(value, ctx, selected, containerNumber){
    this.selected = selected;
    this.containerNumber = containerNumber;
    this.ctx = ctx;
    this.characters = [];
    this.value = value;
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
        this.characters[index].xPos = 160 + index * 115;
        this.characters[index].yPos = 210;
        if (index > 4) {
          this.characters[index].xPos = 160 + (index % 5) * 115;
          this.characters[index].yPos = 210 + 200;
        }
        this.characters[index].index = index;
        this.characters[index].drawInContainer(this);
        console.log("draw the character!");

      }
    } else {
      this.ctx.beginPath();
      this.ctx.rect(1250, 200, 600, 500);
      this.ctx.stroke();
      this.ctx.closePath();
    }

  }

  addCharacter(characterType) {
    const character = this.newCharacter(characterType);
    this.characters.push(character);
  }

  newCharacter(characterType) {
      let newCharacter;
      if (characterType.constructor.name === "Ironman") {
        newCharacter = new Ironman(1, this.ctx, undefined, undefined,
        this.container1, this.container2);
      } else if (characterType.constructor.name === "Goblin") {
        newCharacter = new Goblin(-1, this.ctx, undefined, undefined,
        this.container1, this.container2);
      }
      return newCharacter;
  }


}

export default Container;
