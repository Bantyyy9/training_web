const todoForm = document.querySelector("form");
const newTodosHolder = document.querySelector(".todos.new");
const completedTodosHolder = document.querySelector(".todos.completed");
const clearButtons = document.querySelector(".buttons");
const clearNew = document.querySelector(".clear-new");
const clearCompleted = document.querySelector(".clear-completed");
const clearAll = document.querySelector(".clear-all");
//state variables
let todos = []; //in-memory storage

//UI updaters
const updateTodosUI = () => {
  newTodosHolder.innerHTML = "";
  completedTodosHolder.innerHTML = "";
  todos.forEach((todo) => {
    const todoWrapper = document.createElement("div");
    todoWrapper.classList.add("todo");

    const todoText = document.createElement("p");
    todoText.innerHTML = todo.text;

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const markBtn = document.createElement("button");
    markBtn.innerHTML = "&check;";
    markBtn.addEventListener("click", () => {
      if (todo.completed) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
      // todo.completed = !todo.completed;
      // console.log(todo);
      updateTodosUI();
      localStorage.setItem("todos", JSON.stringify(todos));
    });

    const delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", () => {
      todos = todos.filter((t) => t.id !== todo.id);
      updateTodosUI();
      localStorage.setItem("todos", JSON.stringify(todos));
    });

    actions.append(markBtn, delBtn);
    todoWrapper.append(todoText, actions);
    if (todo.completed) {
      completedTodosHolder.appendChild(todoWrapper);
    } else {
      newTodosHolder.appendChild(todoWrapper);
    }
  });
};
//util functions
const addNewTodo = (e) => {
  todoForm.classList.remove("error");
  e.preventDefault();
  const inputVal = e.target[0].value.trim();
  if (inputVal.length === 0) {
    todoForm.classList.add("error");
  } else {
    const newItem = {
      text: inputVal,
      completed: false,
      id: Date.now().toString(16),
    };
    console.log(newItem);
    todos.push(newItem);
    e.target[0].value = "";
    updateTodosUI();
    localStorage.setItem("todos", JSON.stringify(todos));
  }
};

// Clear Button
clearNew.addEventListener("click", delNew);
function delNew() {
  todos = todos.filter((todo) => todo.completed);
  updateTodosUI();
  localStorage.setItem("todos", JSON.stringify(todos));
}
clearCompleted.addEventListener("click", delCom);
function delCom() {
  todos = todos.filter((todo) => !todo.completed);
  updateTodosUI();
  localStorage.setItem("todos", JSON.stringify(todos));
}
clearAll.addEventListener("click", delAll);
function delAll() {
  todos = [];
  updateTodosUI();
  localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener("DOMContentLoaded", () => {
  const local = localStorage.getItem("todos");
  if (local) {
    todos = JSON.parse(local);
    updateTodosUI();
  }
});

todoForm.addEventListener("submit", addNewTodo);

//clear new
//clear completed
//clear all
