
import Character from './character';
// import { GOBLIN6 } from './json/goblinJSON';

class Goblin extends Character {

  constructor(xPos, yPos, container1, container2) {
    super(xPos, yPos, container1, container2);
  }
  // constructor(value, ctx, xPos, yPos, container1, container2){
  //   super(...[xPos, yPos, container1, container2]);
  //   this.ctx = ctx;
  //   this.image = new Image();
  //   this.width = 105;
  //   this.height = 185;
  //   this.value = value;
  // }



  // draw() {
  //   const iron = GOBLIN6.frame;
  //   this.image.onload = () => {
  //     this.ctx.drawImage(this.image,
  //       iron.x,
  //       iron.y,
  //       iron.w,
  //       iron.h,
  //       this.xPos,
  //       this.yPos,
  //       this.width,
  //       this.height
  //     );
  //   };
  //   this.image.src = "./lib/images/goblin_left.png";
  // }

}

export default Goblin;
