

class Integer {
  constructor(value, ctx, xPos, yPos){
    this.value = value;
    this.ctx = ctx;
    this.xPos = xPos;
    this.yPos = yPos;
  }


  draw() {
    this.ctx.font = "80pt Georgia";
    this.ctx.fillStyle = "gray";
    this.ctx.textAlign = "center";
    this.drawTextInCanvas(this.ctx, this.value , this.xPos, this.yPos, 6);
  }

  drawTextInCanvas(ctx, text, width, height, depth) {
    let count;
    for (count = 0; count < depth; count++) {
      ctx.fillText(text, width - count, height - count);
    }
    ctx.fillStyle = "white";
    ctx.shadowColor = "black";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = depth + 3;
    ctx.shadowOffsetY = depth + 3;
    ctx.fillText(text, width - count, height- count);
  }
}


export default Integer;
