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
                             "./lib/images/instructions1.png",
                             "./lib/images/instructions2.png",
                             "./lib/images/instructions3.png",
                             "./lib/images/instructions4.png",
                             "./lib/images/instructions5.png",
                             "./lib/images/right_arrow.png",
                             "./lib/images/left_arrow.png");
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
    handleModal();
    handleSlides();
    const lesson = new Lesson(ctx);
    lesson.start();

  }
};

const handleSlides = () => {
  let slideIndex = 1;
  showSlides(slideIndex);
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  document.getElementById("pic1").setAttribute('src', imageArray[13]);
  document.getElementById("pic2").setAttribute('src', imageArray[14]);
  document.getElementById("pic3").setAttribute('src', imageArray[15]);
  document.getElementById("pic4").setAttribute('src', imageArray[16]);
  document.getElementById("pic5").setAttribute('src', imageArray[17]);

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
  const canvas = document.getElementById('canvas');
  const instructions = document.getElementById('instructions');
  const firstButton = document.getElementById('first-button');
  const secondButton = document.getElementById('second-button');
  btn.onclick = () => {
      modal.style.display = "block";
      canvas.style.opacity = 0.3;
      instructions.style.opacity = 0.3;
      btn.style.opacity = 0.1;
      firstButton.style.opacity= 0.1;
      secondButton.style.opacity = 0.1;
  };

  span.onclick = () => {
      modal.style.display = "none";
      canvas.style.opacity = 1;
      instructions.style.opacity = 1;
      btn.style.opacity = 1;
      firstButton.style.opacity = 1;
      secondButton.style.opacity = 1;
  };

  window.onclick = event => {
      if (event.target == modal) {
          modal.style.display = "none";
          canvas.style.opacity = 1;
          instructions.style.opacity = 1;
          btn.style.opacity = 1;
          firstButton.style.opacity = 1;
          secondButton.style.opacity = 1;
      }
  };
};

document.addEventListener("DOMContentLoaded", (event) => {
  preloadImages(event);

});

export default imageObjArray;
