import Round from './round';
import Character from './character';
import Points from './points';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.width = 2000;
  canvas.height = 1000;
  const ctx = canvas.getContext("2d");

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

  const round = new Round(ctx);
  round.start();

  const character = new Character(ctx);
  character.draw();

  new Points(0, ctx).draw();


});
