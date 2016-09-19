import Lesson from './lesson';

document.addEventListener('DOMContentLoaded', preloadImages, true);

let loadedImages = 0;
const imageArray = new Array("./lib/images/ironman_right", "./lib/images/ironman_left");

const preloadImages = (event) => {
  for (let i = 0; i < imageArray.length; i++) {
    let tempImage = new Image();
    tempImage.addEventListener('load', trackProgress, true);
    tempImage.src = imageArray[i];
  }
};

const trackProgress = () => {
  loadedImages ++;
  if (loadedImages === imageArray.length) {
    console.log('images are loaded!');
  }
};

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

  const lesson = new Lesson(ctx);
  lesson.start();



});
