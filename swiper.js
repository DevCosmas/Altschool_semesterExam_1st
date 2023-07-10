const hamburgerIcon = document.querySelector(".hamburger");
const hamburgerCut = document.querySelector(".gone");
const menu = document.querySelector(".ul-abs");
hamburgerIcon.addEventListener("click", function () {
  menu.style.display = "block";
  hamburgerIcon.style.display = "none";
  hamburgerCut.style.display = "block";
});
hamburgerCut.addEventListener("click", function () {
  hamburgerCut.style.display = "none";
  menu.style.display = "none";
  hamburgerIcon.style.display = "block";
});
