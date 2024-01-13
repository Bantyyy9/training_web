// console.log("from index.js");

// SINGLE LINE COMMENTS
/* 
MULTILINE COMMENTS
*/

//*****************BASIC CONSTRUCT
//* BASIC DATA TYPES
// -Number, String, Boolean, Null, Undefined, Symbol
// --> Number  7 6 -6 10 10e4
// -->  String "7" 'the string' `2+2`
//--> Boolean -> true | false
//* VARIABLE
// const let

//variable declaration
// modifier  VARIABLE_NAME;
// let myName;
// let age;
// let scores;
// let school;

// console.log(myName);
//assignment of a variable
// myName = "Banty";
// console.log(myName);

// myName = "Rasta";
// console.log(myName);

//initialization of constant variable
// const score = 45;
// console.log(score);
// score = 12;

//* OPERATORS
//arithmetic + - / * ** %
//assignment/compound assignment = / += -= *= **=
// let a = 1;
// let b = 5;

// b = b + a;
// b = a + b;

// b += a;
// console.log(b);

//relational
//  greater than >
//  greater than or equal to >=
//  less than <     <=
//  equal to    ==    ===
//  not equal to !=    !==

//fasely-> "" 0 false null undefined
//conditional
// cond ? yes : no;
// const age = 110;
// const message = age >= 18 ? "yes, you can vote" : "Sorry, try again next year";
// console.log(message);

//logic
// or ||         and &&       not !

// LEFT || RIGHT
// true    -       LEFT
// false -         RIGHT

// LEFT && RIGHT
// true                  RIGHT
// false                 LEFT

//* COMPLEX TYPE(object)
//Array
// const scores2 = [];
// const scores3 = new Array();
// const scores4 = Array();

// const scores5 = [67, 89, 45, 20, 353];
// const scores33 = new Array(667, 45, 35);
// const scores42 = Array(67, "age", "score");
// console.log(scores42.length);

// const scores = [67, 98, 25, 45, 61, 98];
//index -> counting starts from 0
//array[index]
// const _3rdVal = 2;
// console.log(scores[3], scores[_3rdVal]);

//array[index] = newValue

// console.log(scores);

// scores[0] = 89;

// console.log(scores);

// scores.push("Hello");
// scores.unshift("Yes");

// console.log(scores);

// scores.pop();
// scores.pop();
// scores.pop();
// scores.pop();
// scores.pop();

// console.log(scores);

//CUSTOM OBJECTS
// const student = {
//     properName: propertyValue,
//     pN2: pV2,
//     pN3: pV3,
// };
// const student2 = Object();
// const student3 = new Object();
// console.log(student, student2, student3);

// const student = {
//   name: "Rasta Xarm",
//   courses: ["MAT", "CSC", "STA"],
//   level: 500,
//   "school name": "Unilorin",
//   address: {
//     school: "uknown",
//     home: "tanke",
//   },
//   addCourse: function () {
//     console.log("Adding course...");
//   },
//   changeName(name) {
//     console.log("changing name....", name);
//   },
//   updateLevel: () => {
//     console.log("updating the level..");
//   },
// };

// const k = "courses";

// // console.log(student);

// //dot notation
// console.log(student.name);

// //array notation
// console.log(student[k]);
// console.log(student["name"]);

// student.name = "Banty";
// student.courses.push("PHY");

// console.log(student.address.home);

// console.log(student.name);
// student.addCourse();
// student.changeName("Banty");

//* FUNCTIONS

//function definition
//simple functions
// function functionName() {
//   console.log("Calling functionName function...");
// }
// const functionNameArrow = () => {};
// const func = function _func() {};
// const func2 = function () {};

//parameterized functions
// function add(a, b) {
//   console.log(`${a} - ${b} = ${a - b}`);
// }

// const add = (a, b) => a * b;

// function add2(a, b) {
//   console.log("before return");
//   return a ** b;
//   console.log("after return");
// }

// const result = add2(25, 2);
// console.log(result);

//callin a function
// functionName();
// functionName();
// functionName();
// functionName();
// functionName();
// functionName();
// functionName();
// add(45, -20);
// add(10, 2);
// add(35, 120);
// add(0, 1);
// add(true, true);

//* CONSTROL STRUCTURE

// conditonal/branching
// if(condition){
//     statements
// }

// if(condition){
//    true statements
// }else{
//     false statements
// }
// const age = 211;

// if (age >= 18) {
//   console.log("Yes you can vote");
// }

// if (age >= 18 && age <= 35) {
//   console.log("yes, you can still work");
// } else {
//   console.log("Sorry, you're too young or old to work");
// }

// if(cond1){
//     st1
// }else if(cond2){
//     st2
// }else if(cond3){
//     st3
// }else{

// }

// const age = "ME";
// switch (age) {
//   case 3:
//     //  st1;
//     console.log("yes it's 3");
//     break;

//   case "me":
//     // st2
//     console.log("age is me");
//     break;

//   case 4:
//     console.log("it is 4");
//     break;
//   case 2:
//     console.log("Yesssss, correct 2");
//     break;

//   default:
//     console.log("Default action like else in if statement");
// }

//looping
//while
//for  / for in   / for of

// while(condition){
//     statement
// }

// let x = 0;
// while (x < 23) {
//   console.log(x++);
// }

// for(initializer;condition;increment){
//     statment
// }
// for (let x = 2; x < 20; x += 2) {
//   console.log(x);
// }

// const student = {
//   name: "Rasta",
//   school: "UNknown",
//   house: "Tanke",
// };

// for (const key in student) {
//   console.log(`${key}, ${student[key]}`);
//   console.log(key + ", " + student[key]);
// }
// console.log(Object.entries(student));

// const ages = [65, 78, 22, 12, 89, 90, 34, 30, 21];

// for (const val of Object.values(student)) {
//   console.log(val);
// }

// //* OOP
// class StudentBlueprint {
//   name = "default";
//   school = "unknown";
//   house = "unknown";
//   constructor(name) {
//     this.name = name;
//     console.log("creating..... " + name);
//   }
//   apply() {
//     console.log(this);
//   }
// }

// //instantiate/create an object
// const st1 = new StudentBlueprint("RastaXarm");

// // console.log(st1.name);

// // st1.name = "Rasta";
// // console.log(st1.name);

// const st2 = new StudentBlueprint("Banty");
// // console.log(st1.name, st2.name);

// // st1.apply();
// // st2.apply();

// function a() {
//   console.log(this);
// }

// // a();

// const aa = {
//   name: "rata",
//   a() {
//     // console.log(this);
//     console.log("aaaaaaa");
//     this.b();
//   },
//   b: () => {
//     console.log(this);
//   },
// };

// aa.a();

// aa.b();

// const x = new Date("2u013-06-20");
// console.log(x.getFullYear());

// console.log(new Date().;

//******************DOM (DOCUMENT OBJECT MODEL)
//select object/element
// console.log(document.body);
// console.log(document.links);
// console.log(document.head);

//old ways of selecting elements
//by id -> single
// const heading = document.getElementById("sd");
// console.log(heading);

//by class -> multiple
// const wrappers = document.getElementsByClassName("wrapper");
// console.log(wrappers);

//by tag name -> multiple
// const inputs = document.getElementsByTagName("input");
// console.log(inputs);

//css selector -> single
// const input = document.querySelector("input");
// console.log(input);
// //css selector -> multiple
// const inputs = document.querySelectorAll("input");
// console.log(inputs);

//replacing the text
// const h1 = document.querySelector("#sd");
// console.log(h1);
// h1.innerHTML += "<br/> testing tag      from js";

// const wrapper = document.querySelector(".wrapper");
// console.log(wrapper.innerHTML);

//create an element from JS
// const span = document.createElement("span");
// span.innerHTML = "Testing creating of an element from js";
// const wrapper = document.querySelector(".wrapper");

//appending child
// wrapper.appendChild(span);

// const input = document.querySelector("input");
//remove a child
// wrapper.removeChild(input);

//insert inside
// wrapper.insertBefore(span, document.querySelector(".wrapper label"));

//insert outside
// wrapper.insertAdjacentElement("afterend", span);

//TRANSVERSING THE DOM
// const p = document.querySelector("p");
// //children
// // console.log(p.children);
// //firstElementChild
// // console.log(p.firstElementChild);
// //lastElementChild
// // console.log(p.lastElementChild);

// //Sibling
// console.log(p.previousElementSibling);
// console.log(p.nextElementSibling);

// //parent node
// console.log(p.parentElement.parentElement);

//STYLE, ATTRIBUTES & CLASSLIST
// const wrapper = document.querySelector(".wrapper");

//style
// wrapper.style.backgroundColor = "orange";
// wrapper.style.padding = "10px 25px";
// wrapper.style.padding = "1rem"
// console.log(getComputedStyle(wrapper).padding);

//read, delete, create, update your attributes
//CRUD
// console.log(wrapper.hasAttribute("class"));
// console.log(wrapper.getAttribute("name"));
// wrapper.setAttribute("data-banty", "fromjs");
// wrapper.removeAttribute("id");
// console.log(wrapper.getAttribute("name"));
// console.log(wrapper.getAttribute("data-full-name"));
// console.log(wrapper.dataset.fullName);

//working with element classes
// console.log(wrapper.getAttribute("class"));
// wrapper.classList.add("connect");
// console.log(wrapper.classList.contain("show"));
// wrapper.classList.remove("show", "connect");
// wrapper.classList.replace("show", "notshow");
// wrapper.classList.toggle("showx");
// console.log(wrapper.getAttribute("class"));
// wrapper_test
// wrapperTest
// WrapperTest

// function add(...x) {
//   console.log(x);
// }
// add("add", "connect", "show");

//EVENTS
//add event -> html, onEVENT, addEventListener
// const input = document.querySelector("input");

// function logM() {
//   console.log("You just clicked on me!!!");
// }
// // input.onclick = logM;
// // input.onclick = function myF() {
// //   console.log("from arrow on the line");
// // };

// input.addEventListener("click", logM);
// input.addEventListener("click", (e) => {
//   console.log(e);
//   console.log("from Inside addEventListener");
// });

// const p = document.querySelector("p");

// p.addEventListener("click", (e) => {
//   //target
//   //currentTaget
//   console.log(e);
//   //   e.stopPropagation();
//   console.log("transfer 500");
//   console.log(e.target, e.currentTarget);
// });

// p.firstElementChild.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log(e.target, e.currentTarget);
//   console.log("Tranfer 200");
// });

// p.parentElement.addEventListener(
//   "click",
//   (e) => {
//     console.log(e.target, e.currentTarget);
//     console.log("Transfer 10,000");
//   }
//   //   {
//   //     capture: true,
//   //   }
// );

// p.lastElementChild.addEventListener("click", (e) => {
//   e.preventDefault();
//   e.stopPropagation();
// });

// p.nextElementSibling.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(e);
//   console.log(e.target[4].value);
// });

//Handling the Errors

// const form = document.querySelector("form.x");

// if (form) {
//   form.addEventListener("submit", (e) => {
//     console.log(e.target);
//   });
// }

//falsy 0 false null undefined =>false

// try {
//     ///////statements that can cause an error
//     // 1..
//     // 2..
//     // 3 stop loading
// } catch (err) {
//     //statement to excecute when there is an error
// }finally{
//     //statment to execute whether there is an error or not
// }

// try {
//   form.addEventListener("submit", (e) => {
//     console.log(e.target);
//   });
// } catch (err) {
//   //   console.log(err.message);
// }

// const err = new Error("My Error")

// class ApiError extends Error {
//   constructor(message, type = "NOT_FOUND") {
//     super(message);
//     this.type = type;
//   }
// }

// const m = new ApiError("testing");

// console.log(m);
// console.log(m.type);

// console.log(new Error("tseting").type);
