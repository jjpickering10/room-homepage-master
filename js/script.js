const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");

const imagesSlide = Array.from(document.querySelectorAll(".bg-image"));
const infoSlide = Array.from(document.querySelectorAll(".info"));

console.log(imagesSlide);

let slideNumber = 0;
let currentSlide;
let currentInfo;

nextButton.addEventListener("click", nextSlide);
previousButton.addEventListener("click", previousSlide);

function nextSlide() {
  currentSlide = imagesSlide[slideNumber];
  currentInfo = infoSlide[slideNumber];
  console.log(currentSlide);
  if (slideNumber === imagesSlide.length - 1) {
    slideNumber = -1;
  }
  currentSlide.classList.toggle("hide");
  currentInfo.classList.toggle("hide");
  imagesSlide[slideNumber + 1].classList.toggle("hide");
  infoSlide[slideNumber + 1].classList.toggle("hide");
  slideNumber++;
  console.log(slideNumber);
}

function previousSlide() {
  currentSlide = imagesSlide[slideNumber];
  currentInfo = infoSlide[slideNumber];
  console.log(currentSlide);
  if (slideNumber < 1) {
    slideNumber = imagesSlide.length;
  }
  currentSlide.classList.toggle("hide");
  currentInfo.classList.toggle("hide");
  imagesSlide[slideNumber - 1].classList.toggle("hide");
  infoSlide[slideNumber - 1].classList.toggle("hide");
  slideNumber--;
  console.log(slideNumber);
}
