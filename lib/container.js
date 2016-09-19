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

  draw(isFighting){
    if (isFighting) {
      this.drawFightingScene();
    } else {
      this.ctx.strokeStyle = "white";
      this.ctx.lineWidth = 1;
      if (this.selected === true) {
        this.ctx.strokeStyle = "#31CBE3";
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

        }
      } else {
        this.ctx.beginPath();
        this.ctx.rect(1250, 200, 600, 500);
        this.ctx.stroke();
        this.ctx.closePath();
        for (let index = 0; index < this.characters.length ; index++) {
          if (index > 9) {
            break;
          }
          this.characters[index].xPos = 1260 + index * 115;
          this.characters[index].yPos = 210;
          if (index > 4) {
            this.characters[index].xPos = 1260 + (index % 5) * 115;
            this.characters[index].yPos = 210 + 200;
          }
          this.characters[index].index = index;
          this.characters[index].drawInContainer(this);

        }
      }
    }

  }
  drawFightingScene(){
    if (this.containerNumber === 1) {
      this.characters.forEach( (character, index) => {
        character.xPos = 800 - index * 110;
        character.yPos = 300;
        character.drawFightingStance(this);
      });
    } else {
      this.characters.forEach( (character, index) => {
        character.xPos = 1000 + index * 110;
        character.yPos = 300;
        character.drawFightingStance(this);
      });
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

  clearFirstContainer(){
    this.ctx.clearRect(145, 195, 610, 510);
  }

  clearSecondContainer(){
    this.ctx.clearRect(1240, 195, 620, 510);
  }

  clearCharacters(){
    const charactersLength = this.characters.length;
    this.characters.splice(0, charactersLength);
  }

}

export default Container;
