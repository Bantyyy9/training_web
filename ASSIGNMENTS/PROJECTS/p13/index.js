const display = document.querySelector(".display h1");
const btns = document.querySelectorAll(".btns button");
const notif = document.querySelector(".notification");

notif.firstElementChild.addEventListener("click", () => {
  notif.classList.remove("show");
});
let result = false;
btns.forEach(addEvent);

function addEvent(btn) {
  btn.addEventListener("click", calc);
}
function calc(e) {
  const el = e.target;
  const val = el.dataset.op || el.innerHTML;
  console.log(el, val);

  if (val === "=") {
    try {
      display.innerHTML = eval(display.innerHTML).toFixed(2);
      result = true;
    } catch (error) {
      display.innerHTML = "Math Error";
      notif.classList.add("show");
      setTimeout(() => {
        notif.classList.remove("show");
      }, 3000);
    }
  } else {
    if (
      display.innerHTML === "0" ||
      display.innerHTML === "Math Error" ||
      result
    ) {
      display.innerHTML = val;
      result = false;
    } else {
      if (display.innerHTML.length === 12) {
        alert("Sorry");
      } else {
        display.innerHTML += val;
      }
    }
  }
}
