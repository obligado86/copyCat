const slides = document.querySelectorAll(".slides");


slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

let curSlide = 0;
let maxSlide = slides.length - 1;

//next slider button function
const nextSlide = document.querySelector(".button-next");

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// prev slider button function
const prevSlide = document.querySelector(".button-prev");

prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
