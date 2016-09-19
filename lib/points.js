import Integer from './integer';

class Points {
  constructor(value, ctx){
    this.ctx = ctx;
    this.value = value;
  }

  draw(){
    this.ctx.fillStyle = "white";
    this.ctx.font = "70px Georgia";
    this.ctx.fillText("Points:", 1740, 950);
    const points = new Integer(this.value, this.ctx);
    points.draw(1900, 950, "white", 70);
  }
}


export default Points;
