const body = document.querySelector("body");

const IMG_NUMBER = 9;


function handleImageLoad(event) {
  event.target.classList.remove("invisible");
  event.target.classList.add("bgImage");
}


function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("invisible");
  //image.classList.add("bgImage");
  body.prepend(image);
  image.addEventListener("load", handleImageLoad);

}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
