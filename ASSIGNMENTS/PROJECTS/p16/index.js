const navBtn = document.querySelectorAll(".nav");
const modal = document.querySelector("nav");

navBtn.forEach((btn) => {
  btn.addEventListener("click", toggleBtn);
});

function toggleBtn() {
  modal.classList.toggle("show");
}
// navOpenBtn.addEventListener("click", () => {
//   modal.classList.add("show");
// });
// navCloseBtn.addEventListener("click", () => {
//   modal.classList.remove("show");
// });
