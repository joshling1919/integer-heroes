import Lesson from './lesson';


let loadedImages = 0;
const imageArray = new Array("./lib/images/ironman_right.png",
                             "./lib/images/ironman_left.png",
                             "./lib/images/goblin_right.png",
                             "./lib/images/goblin_left.png",
                             "./lib/images/explosion.png",
                             "./lib/images/thor_right.png",
                             "./lib/images/thor_left.png",
                             "./lib/images/juggernaut_right.png",
                             "./lib/images/juggernaut_left.png",
                             "./lib/images/hulk_right.png",
                             "./lib/images/hulk_left.png",
                             "./lib/images/loki_right.png",
                             "./lib/images/loki_left.png",
                             "./lib/images/right_arrow.png",
                             "./lib/images/left_arrow.png");
let imageObj = {};

const preloadImages = (event) => {
  for (let i = 0; i < imageArray.length; i++) {
    let tempImage = new Image();
    let imagePath = imageArray[i];
    tempImage.addEventListener('load', trackProgress, true);
    tempImage.src = imagePath;
    let imageName = imagePath.substring(13, imagePath.length - 4);
    imageObj[imageName] = tempImage;
  }
};

const trackProgress = () => {
  loadedImages ++;
  if (loadedImages === imageArray.length) {
    window.imageObj = imageObj;
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
    window.animIsComplete = true;
    window.overallAnimIsComplete = true;
    const lesson = new Lesson(ctx);
    lesson.start();
  }
};

document.addEventListener("DOMContentLoaded", (event) => {
  preloadImages(event);

});
