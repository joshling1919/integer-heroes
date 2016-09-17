//
//
// class Submit {
//   constructor(ctx, isSubmitted) {
//     this.ctx = ctx;
//     this.isSubmitted = isSubmitted;
//     this.xPos = 900;
//     this.yPos = 160;
//     this.width = 100;
//     this.height = 25;
//     this.bindHoverHandler();
//   }
//
//   bindHoverHandler(){
//     document.addEventListener('mouseover', function(){
//       debugger;
//     });
//   }
//
//   draw(){
//     if (this.isSubmitted) {
//       this.ctx.clearRect(this.xPos, this.yPos, this.width, this.height);
//     } else {
//       this.ctx.lineWidth = 2;
//       this.ctx.strokeStyle = "white";
//       this.ctx.rect(850, 160, 180, 75);
//       this.ctx.stroke();
//       this.ctx.font = "40px Georgia";
//       this.ctx.fillStyle = "white";
//       this.ctx.fillText("Submit", 875, 210);
//     }
//   }
// }
//
// export default Submit;
