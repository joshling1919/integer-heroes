import Lesson from './lesson';
import MathProblem from './math_problem';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.width = 2000;
  canvas.height = 1000;
  var ctx = canvas.getContext("2d");

  window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
  })();

  const lesson = new Lesson(ctx);
  lesson.start();

  const mathProblem = new MathProblem(ctx);
  mathProblem.drawVertical();

});
