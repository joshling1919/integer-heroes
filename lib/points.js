import Integer from './integer';

class Points {
  constructor(points, ctx){
    this.ctx = ctx;
    this.points = points;
  }

  draw(){
    this.ctx.fillStyle = "white";
    this.ctx.font = "40px Georgia";
    this.ctx.fillText("Points:", 1750, 950);
    const points = new Integer(this.points, this.ctx);
    points.draw(1835, 950);
  }
}


export default Points;
