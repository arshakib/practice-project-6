// const element = document.querySelectorAll(".element")

// setInterval(() => {
//     let now = document.querySelector(".slide");
//     now.classList.remove(".slide");
//     now.nextElementSibling.classList.add(".slide");
// }, 2000);

const slideshowElements = document.querySelectorAll(".element");

let countElements = 1;

setInterval(() => {
  countElements++;
  let currentElement = document.querySelector(".slide");
  currentElement.classList.remove("slide");

  if (countElements > slideshowElements.length) {
    slideshowElements[0].classList.add("slide");
    countElements = 1;
  } else {
    currentElement.nextElementSibling.classList.add("slide");
  }
}, 3000);