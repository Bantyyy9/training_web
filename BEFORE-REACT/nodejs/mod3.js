// const scores = [56, 89, 45, 67, 84, 12, 22];

// // const f1 = scores[0];
// // const f2 = scores[1];
// // const f3 = scores[2];

// //destructuring Array
// const [f1, f2, f3, ...restA] = scores;

// //... [rest operator, spread operator]

// console.log({ f1, f2, f3, restA });

// const student = {
//   name: "Rasta",
//   school: "testing",
//   level: 800,
//   address: "home",
//   walk() {
//     console.log("walking");
//   },
// };

// // const name = student.name;
// // const school = student.school;
// // const level = student.level;

// const { school, name, ...restO } = student;

// console.log({ name, school, restO });

// const scores = [6, 5, 9, 32];
// const all = [67, 89, 22, ...scores];

// console.log(scores);
// console.log(all);

// const myO = {};

// myO.key = "value";

// console.log(myO);

// import path from "path";
// import fs from "fs";
// import os from "os";

// console.log(path);

// console.log(fs);

// console.log;

//npm -> node package manager (default)
//yarn
//pnpm

//install external
// npm install package1 package2 package3
// npm i package1 pkg2 pkg3 pkgN

// -g  --global -> global
//npm install -g yarn

//-D  --save-dev

//--save -S

const x = require("./mod4");

console.log(x);
