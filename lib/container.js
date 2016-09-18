
class Container {
  constructor(points, value, ctx, selected, containerNumber){
    this.points = points;
    this.selected = selected;
    this.containerNumber = containerNumber;
    this.ctx = ctx;
    this.characters = [];
    if (this.selected) {
      this.handleButtons();
    }
    this.value = value;
  }

  handleButtons(){
    const clear = document.getElementById('clear');
    clear.addEventListener('click', this.clearCharacters.bind(this));
    const submit = document.getElementById('submit');
    submit.addEventListener('click', this.submitAnswer.bind(this));
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

  clearCharacters() {
    const charactersLength = this.characters.length;
    this.characters.splice(0, charactersLength);
    if (this.containerNumber === 1) {
      this.ctx.clearRect(152, 202, 596, 496);
    } else if (this.containerNumber === 2) {
      this.ctx.clearRect(1252, 202, 596, 496);
    }
  }

  submitAnswer(){
    let sameSign = true;
    let sum = 0;
    this.characters.forEach( (character, index) => {
      if (index === 0) {
        sum += character.value;
        return;
      }
      if (character.value !== this.characters[index - 1].value) {
        sameSign = false;
      }
      sum += character.value;
    } );
    const correct = (sameSign && sum === this.value);
    // this.ctx.clearRect(1750, 950, 200, 100);
    this.ctx.clearRect(1650, 900, 400, 100);
    const instructions = document.getElementById('instructions');
    if (correct) {
      this.points.value += 5;
      instructions.innerHTML = "Nice job!";
      this.points.draw();
    } else {
      this.points.value -= 5;
      instructions.innerHTML = "Hm, not quite! Remember, positive = superheroes; negative = villain.";
      this.points.draw();
    }
  }
}

export default Container;
