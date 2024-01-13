/** UI Selectors */
const levelHolder = document.querySelector(".level");
const boxHolder = document.querySelector("main");
const newColorBtn = document.querySelector("nav .container button");
const generatorColorHolder = document.querySelector(".generated-color");
const gameStateHolder = document.querySelector(".counter");
const gameMessagesHolder = document.querySelector(".message");

/**Game Variables */
let level = "easy";
let computerGuess = "";
let gameState = {
  userScore: 0,
  counter: 1,
};
const gameMessages = {
  win: "Congratulations!!💃🕺 You win🎉✨🎈",
  loss: "Hahahahah!!😂🤣 You loss, try again",
  info: "Checking.........Please wait ⏳",
};

/** Logic */
function saveGameState() {
  localStorage.setItem("gameState", JSON.stringify(gameState));
}
function loadLocalGameState() {
  window.addEventListener("DOMContentLoaded", () => {
    const localState = localStorage.getItem("gameState");
    if (localState) {
      gameState = JSON.parse(localState);
      updateGameStateUI();
    }
  });
}
function increaseCounter() {
  gameState.counter += 1;
  saveGameState();
}
function increaseUserScore() {
  gameState.userScore += 1;
  saveGameState();
}
function generateRandomNumer(end = 256) {
  return Math.floor(Math.random() * end);
}
function addEventToLevelButon(e) {
  const l = e.target.innerHTML;
  level = l.toLowerCase();
  updateLevelUI();
  generateBox();
}
function addEvenToBoxButton(e) {
  e.target.classList.add("clicked");
  updateMessageUI("info");
  setTimeout(() => {
    processResult(getComputedStyle(e.target).backgroundColor);
  }, 1000);
}
function processResult(userPick) {
  const equal = computerGuess === userPick;

  if (equal) {
    increaseUserScore();
    updateMessageUI("win");
  } else {
    updateMessageUI("loss");
  }
  increaseCounter();
  updateGameStateUI();
  generateBox();
}

/** UI */
// state -> win loss info
function updateMessageUI(state) {
  gameMessagesHolder.innerHTML = gameMessages[state];
  gameMessagesHolder.classList.remove("info", "win", "loss");
  gameMessagesHolder.classList.add(state);
  gameMessagesHolder.classList.add("show");
}
function updateGameStateUI() {
  gameStateHolder.innerHTML = `${gameState.userScore}/${gameState.counter}`;
}
function updateLevelUI() {
  levelHolder.firstElementChild.classList.remove("active");
  levelHolder.lastElementChild.classList.remove("active");

  if (level === "easy") {
    levelHolder.firstElementChild.classList.add("active");
  } else if (level === "hard") {
    levelHolder.lastElementChild.classList.add("active");
  }
}
function generateBox() {
  boxHolder.innerHTML = "";
  const length = level === "easy" ? 6 : 12;

  const computerIndex = generateRandomNumer(length);

  for (let i = 0; i < length; i++) {
    //generate the 3 cololor number
    const n1 = generateRandomNumer();
    const n2 = generateRandomNumer();
    const n3 = generateRandomNumer();

    //generate the button element
    let el = document.createElement("button");
    //attach the generated color to the element
    const color = `rgb(${n1}, ${n2}, ${n3})`;
    if (i === computerIndex) {
      computerGuess = color;
      generatorColorHolder.firstElementChild.innerHTML = n1;
      generatorColorHolder.children[1].innerHTML = n2;
      generatorColorHolder.lastElementChild.innerHTML = n3;
    }
    el.style.backgroundColor = color;

    //add event to the ele
    el.addEventListener("click", addEvenToBoxButton);

    //append to the box Holder
    boxHolder.append(el);
  }
}

function start() {
  updateLevelUI();
  updateGameStateUI();
  levelHolder.firstElementChild.addEventListener("click", addEventToLevelButon);
  levelHolder.lastElementChild.addEventListener("click", addEventToLevelButon);
  newColorBtn.addEventListener("click", () => {
    generateBox();
    increaseCounter();
    updateGameStateUI();
  });
  generateBox();
  loadLocalGameState();
}

start();
