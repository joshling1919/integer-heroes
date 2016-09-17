
class Container {
  constructor(ctx, selected, containerNumber){
    this.selected = selected;
    this.containerNumber = containerNumber;
    this.ctx = ctx;
  }

  draw(){
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 1;
    if (this.selected === true) {
      this.ctx.lineWidth = 6;
    }
    if (this.containerNumber === 1) {
      this.ctx.rect(150, 180, 600, 500);
      this.ctx.stroke();
    } else {
      this.ctx.rect(1250, 180, 600, 500);
      this.ctx.stroke();
    }
  }
}

export default Container;
