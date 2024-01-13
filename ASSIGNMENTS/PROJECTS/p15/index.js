const formHolder = document.querySelector("form");
const todoHolder = document.querySelector(".todos");

let todos = [];
let state = "all";

function addCheck(todo) {
  todo.completed = !todo.completed;
  localStorage.setItem("todos", JSON.stringify(todos));
  updateUI();
}

const filterTodos = (todo, index, todos) => {
  if (state === "all") {
    return true;
  } else if (state === "active" && !todo.completed) {
    return true;
  } else if (state === "completed" && todo.completed) {
    return true;
  } else {
    return false;
  }
};

const updateUI = () => {
  todoHolder.innerHTML = "";
  todos.filter(filterTodos).forEach((todo) => {
    const todoWrapper = document.createElement("div");
    todoWrapper.classList.add("todo");
    todoWrapper.addEventListener("click", () => {
      addCheck(todo);
    });
    if (todo.completed) {
      todoWrapper.classList.add("active");
    } else {
      todoWrapper.classList.remove("active");
    }

    const circleButton = document.createElement("div");
    circleButton.classList.add("img");

    const circleButtonImg = document.createElement("img");
    circleButtonImg.src = "./images/icon-check.svg";
    circleButton.appendChild(circleButtonImg);

    const todoText = document.createElement("p");
    todoText.innerHTML = todo.text;

    const delBtn = document.createElement("button");
    const delBtnImg = document.createElement("img");
    delBtnImg.src = "./images/icon-cross.svg";
    delBtn.appendChild(delBtnImg);
    delBtn.addEventListener("click", () => {
      todos = todos.filter((t) => t.id !== todo.id);
      localStorage.setItem("todos", JSON.stringify(todos));
      updateUI();
    });

    todoWrapper.append(circleButton, todoText, delBtn);
    todoHolder.append(todoWrapper);
  });
};

const allBtn = document.querySelector(".all");
allBtn.addEventListener("click", allTodo);
function allTodo() {
  state = "all";
  updateUI();
}
const activeBtn = document.querySelector(".active");
activeBtn.addEventListener("click", activeTodo);
function activeTodo() {
  state = "active";
  updateUI();
}
const completeBtn = document.querySelector(".completed");
completeBtn.addEventListener("click", completedTodo);
function completedTodo() {
  state = "completed";
  updateUI();
}

const addTodo = (e) => {
  e.preventDefault();
  const inputVal = e.target[0].value.trim();
  if (inputVal.length === 0) {
    window.alert("Please type something");
  } else {
    const newTodo = {
      text: inputVal,
      completed: false,
      id: Date.now().toString(16),
    };
    todos.push(newTodo);
    e.target[0].value = "";
    console.log(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    updateUI();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const local = localStorage.getItem("todos");
  if (local) {
    todos = JSON.parse(local);
    updateUI();
  }
});

formHolder.addEventListener("submit", addTodo);
