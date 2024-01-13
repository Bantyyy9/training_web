const display = document.querySelector(".display h1");
const btns = document.querySelectorAll(".btns button");
const notif = document.querySelector(".notification");

notif.firstElementChild.addEventListener("click", () => {
  notif.classList.remove("show");
});
let isResult = false;
btns.forEach(addEvent);

function addEvent(btn) {
  btn.addEventListener("click", calc);
}
function calc(e) {
  const el = e.target;
  const val = el.dataset.op || el.innerHTML;

  console.log(el, val);

  if (val === "C") {
    display.innerHTML = "0.0";
  } else if (val === "=") {
    try {
      display.innerHTML = eval(display.innerHTML).toFixed(1);
      // isResult = true;
    } catch (error) {
      display.innerHTML = "Math Error";
      notif.classList.add("show");
      setTimeout(() => {
        notif.classList.remove("show");
      }, 5000);
    }
  } else {
    if (
      display.innerHTML === "0.0" ||
      display.innerHTML === "Math Error" ||
      isResult
    ) {
      display.innerHTML = val;
      isResult = false;
    } else {
      if (display.innerHTML.length === 12) {
        alert("Sorry");
      } else {
        display.innerHTML += val;
      }
    }
  }
}

// btns.forEach((btn)=>{
//     btn.addEventListener("click", (e)=>{
//         console.log(e);
//     })
// })

// console.log("before");
// setTimeout(() => {
//   console.log("after");
// }, 5000);

// setInterval(() => {
//   console.log("after--->");
// }, 2000);
