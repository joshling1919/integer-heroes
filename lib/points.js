import Integer from './integer';

class Points {
  constructor(value, ctx){
    this.ctx = ctx;
    this.value = value;
  }

  draw(){
    this.ctx.fillStyle = "white";
    this.ctx.font = "40px Georgia";
    this.ctx.fillText("Points:", 1800, 950);
    const points = new Integer(this.value, this.ctx);
    points.draw(1900, 950);
  }
}


export default Points;
