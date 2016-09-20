import Ironman from './characters/ironman';
import Goblin from './characters/goblin';

class Container {
  constructor(value, ctx, selected, containerNumber){
    this.selected = selected;
    this.containerNumber = containerNumber;
    this.ctx = ctx;
    this.characters = [];
    this.value = value;
    this.frameCount = 0;
    this.indexOfCharacterToSend = 0;
  }

  draw(isLiningUp, isFighting){
    if (isLiningUp) {
      this.drawLiningUpScene(isFighting);
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
  drawLiningUpScene(isFighting){
    if (this.containerNumber === 1) {
      this.characters.forEach( (character, index) => {
        character.xPos = 750 - index * 105;
        character.yPos = 300;
        if (isFighting) {
          character.drawFightingStance(this);
        } else {
          character.drawInContainer(this);
        }
      });
    } else {
      this.characters.forEach( (character, index) => {
        character.xPos = 1150 + index * 105;
        character.yPos = 450;
        if (isFighting) {
          character.yPos = 300;
        }
        if (isFighting) {
          character.drawFightingStance(this);
        } else {
          character.drawInContainer(this);
        }
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

  animateFight(){
    const requestID = window.requestAnimFrame(this.animateFight.bind(this));
    if (this.containerNumber === 1) {
      if (this.frameCount === 10) {
        this.frameCount = 0;
        window.cancelAnimationFrame(requestID);
      } else {
        this.frameCount += 1;
        this.ctx.clearRect(0, 300, 810, 200);
        this.characters.forEach((character, index) => {
          character.xPos = character.xPos + 10;
          character.drawFightingStance(this);
        });
        if (this.frameCount === 3) {
          this.animateMiddle();
        }
      }
    } else if (this.containerNumber === 2) {
      if (this.frameCount === 10) {
        this.frameCount = 0;
        window.cancelAnimationFrame(requestID);
      } else {
        this.frameCount += 1;
        this.ctx.clearRect(1050, 300, 1000, 200);
        this.characters.forEach((character, index) => {
          character.xPos = character.xPos - 10;
          character.drawFightingStance(this);
        });
        if (this.frameCount === 3) {
          this.animateMiddle();
        }
      }
    }
  }

  animateMiddle(){
    const firstCharacter = this.characters.splice(0, 1)[0];
    firstCharacter.animateFight(this);
  }

  animateJoin(firstNumIsEmpty){
    const requestID = window.requestAnimFrame(this.animateJoin.bind(this));
    if (this.frameCount === 10) {
      this.frameCount = 0;
      this.indexOfCharacterToSend++;
      window.cancelAnimationFrame(requestID);
    } else {
      this.frameCount += 1;
      if (firstNumIsEmpty) {
        // this.ctx.clearRect(800, 300, 1500, 200);
        console.log('do nothing');
      } else {
        this.ctx.clearRect(800, 450, 1500, 200);
      }
      this.characters.forEach((character, index) => {
        if (index === this.indexOfCharacterToSend) {
          character.index = index;
          this.sendToOtherTeam(character);
        } else if(!character.sent) {
          character.xPos = character.xPos - 10;
          character.drawInContainer(this);
        }
      });
    }
  }

  sendToOtherTeam(character) {
    if (!character.sent) {
      character.joinOtherTeam(this);
    }
    character.sent = true;
  }



}

export default Container;
