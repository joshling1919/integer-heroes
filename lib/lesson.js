import NumberLine from './number_line';


class Lesson {
  constructor(ctx) {
    this.numberLine = new NumberLine(ctx);
  }

  start(){
    this.numberLine.start();
    
  }


}


export default Lesson;
