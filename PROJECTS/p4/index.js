const nav = document.querySelector("nav");
const navCloseBtn = document.querySelector(".menu.close");
const navOpenBtn = document.querySelector(".menu.open");

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("show");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("show");
});
