

class Integer {
  constructor(value, ctx){
    this.value = value;
    this.ctx = ctx;
    this.grow = false;
  }


  draw(xPos, yPos, color, size, font, dimension) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.size = size;
    font = font || "Georgia";
    color = color || "white";
    size = size || "40";
    this.ctx.font = `${size}px ${font}`;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = "center";

    if (dimension === 3) {
      this.drawTextInCanvas(this.ctx, this.value , xPos, yPos, 6, color);
    } else {
      this.ctx.fillText(this.value, xPos, yPos);
    }

  }

    shrinkAndGrow(){
      this.requestID = window.requestAnimFrame(this.shrinkAndGrow.bind(this, this.ctx));
        let size = parseInt(this.size);

        if (size === 120) {
          this.grow = false;
        } else if (size === 90 ) {
          this.grow = true;
        }
        if (this.grow) {
          size ++;
        } else {
          size --;
        }
        this.ctx.clearRect(this.xPos - 55 , this.yPos - 88, 110, 110);
        this.draw(this.xPos, this.yPos, "white", size);
    }

    stopAnimation(){
      window.cancelAnimationFrame(this.requestID);
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
