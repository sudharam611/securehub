const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const navLink = document.querySelectorAll("#navLink");
const icon = document.querySelector(".fa-solid");
const userTexts = document.getElementsByClassName("user-text");
const userPics = document.getElementsByClassName("user-pic");
const toggleBtn = document.getElementById("toggleBtn");
const cardFronts = document.querySelectorAll("#card-front");
const cardBacks = document.querySelectorAll("#card-back");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  icon.classList.toggle("fa-xmark");
});

navLink.forEach((nav) => {
  nav.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    icon.classList.toggle("fa-xmark");
  });
});

function showReview() {
  for (let userPic of userPics) {
    userPic.classList.remove("active-user");
  }
  for (let userText of userTexts) {
    userText.classList.remove("active-text");
  }
  let selected = Array.from(userPics).indexOf(event.target);
  console.log(userPics);
  console.log(selected);
  userPics[selected].classList.add("active-user");
  userTexts[selected].classList.add("active-text");
}

function showBackCard() {
  cardFronts.forEach((cardFront) => {
    cardFront.classList.toggle("-rotate-y-180");
  });
  cardBacks.forEach((cardBack) => {
    cardBack.classList.toggle("rotate-y-180");
  });
}
