const answerGuess = document.querySelector("ul");
const buttonDiv = document.querySelector(".buttons");
const TOTAL_LINES = 9;
let currentFillIndex = -1;

function attachLetterToLine(e) {
  const letter = e.target.innerHTML;

  if (currentFillIndex === -1) {
    answerGuess.children[0].firstElementChild.innerHTML = letter;
    currentFillIndex++;
  } else if (currentFillIndex < TOTAL_LINES - 1) {
    currentFillIndex++;
    answerGuess.children[currentFillIndex].firstElementChild.innerHTML = letter;
  } else {
    alert("Exhuasted!!!");
  }
}

function generateLetters() {
  for (let i = 65; i <= 90; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    buttonDiv.appendChild(button);
    button.addEventListener("click", attachLetterToLine);
  }
}

function generateLines() {
  for (let i = 0; i < TOTAL_LINES; i++) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    answerGuess.appendChild(li);
  }
}

const initGame = () => {
  generateLetters();
  generateLines();
};

initGame();
