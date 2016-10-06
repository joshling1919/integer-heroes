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
                             "./lib/images/loki_left.png");
let imageObjArray = [];

const preloadImages = (event) => {
  for (let i = 0; i < imageArray.length; i++) {
    let tempImage = new Image();
    tempImage.addEventListener('load', trackProgress, true);
    tempImage.src = imageArray[i];
    imageObjArray.push(tempImage);
  }
};

const trackProgress = () => {
  loadedImages ++;
  if (loadedImages === imageArray.length) {
    console.log('images are loaded!');
    window.imageObjArray = imageObjArray;
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

  }
};

const handleSlides = () => {
  let slideIndex = 1;
  showSlides(slideIndex);

  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  prevButton.onclick = () => {
    showSlides(slideIndex -= 1);
  };

  nextButton.onclick = () => {
    showSlides(slideIndex += 1);
  };

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }


  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (let index = 0; index < dots.length; index++) {
      dots[index].onclick = currentSlide.bind(null, index + 1);
    }

    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
};


const handleModal = () => {
  const modal = document.getElementById('modal');
  const btn = document.getElementById("modal-button");
  const span = document.getElementsByClassName("close")[0];

  btn.onclick = () => {
      modal.style.display = "block";
  };

  span.onclick = () => {
      modal.style.display = "none";
  };

  window.onclick = event => {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };
};

document.addEventListener("DOMContentLoaded", (event) => {
  handleModal();
  handleSlides();
  preloadImages(event);

});

export default imageObjArray;
