

class Integer {
  constructor(value, ctx){
    this.value = value;
    this.ctx = ctx;
  }


  draw(xPos, yPos, color, size, font, dimension) {
    this.ctx.font = `${size}px ${font}`;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = "center";

    if (dimension === 3) {
      this.drawTextInCanvas(this.ctx, this.value , xPos, yPos, 6, color);
    } else {
      this.ctx.fillText(this.value, xPos, yPos);
    }

  }

    drawTextInCanvas(ctx, text, width, height, depth, color) {
      let count;
      for (count = 0; count < depth; count++) {
        ctx.fillText(text, width - count, height - count);
      }
      ctx.fillStyle = `${color}`;
      ctx.shadowColor = "black";
      ctx.shadowBlur = 8;
      ctx.shadowOffsetX = depth + 3;
      ctx.shadowOffsetY = depth + 3;
      ctx.fillText(text, width - count, height- count);
    }
}


export default Integer;
