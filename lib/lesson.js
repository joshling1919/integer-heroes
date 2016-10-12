import Points from './points';
import Round from './round';

class Lesson {
  constructor(ctx){
    this.ctx = ctx;
    this.points = new Points(0, ctx);
  }

  start(){
      const round = new Round(this.ctx, this.points);
  }


}


export default Lesson;
