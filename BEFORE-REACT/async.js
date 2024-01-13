//async

// task1;
// task2;
// task3;

// task3;
// task1;
// task2;

// event loop

// console.log("Before");
// setTimeout(() => {
//   console.log("Me!!!!!!!!!!!!!!!!!");
// }, 1000);
// console.log("After");

// const a = (c) => {
//   setTimeout(() => {
//     c("5");
//   });
// };

// a((r) => {
//   console.log("The result is " + r);
// });

// callback hell

//promise
//state
// pending
// resolve
// reject

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const r = Math.random();
//     r > 0.2 ? resolve("the result==>" + r) : reject("Ops: received=>" + r);
//   }, 1000);
// });

// console.log(myPromise);

// console.log("Before---->");
// myPromise
//   .then((result) => {
//     console.log("Then");
//     console.log(result);
//   })
//   .catch((result) => {
//     console.log("Catch");
//     console.log(result);
//   })
//   .finally(() => {
//     console.log("Finally---->");
//   });
// console.log("After---->");

//async & await

// function normal() {
//   console.log("Normal");
// }

// normal();

// async function asyncFunction() {
//   console.log("AsyncFunction");
// }

//try-catch-finally

// async function run() {
//   console.log("Before---->");
//   try {
//     const result = await myPromise;
//     console.log(result);
//     console.log("Inside Try: No Error");
//   } catch (error) {
//     console.log("Inside Catch");
//     console.log(error);
//   } finally {
//     console.log("Inside Finally");
//   }
//   console.log("After---->");
// }

// run();

// console.log("Before Fetch");
// fetch("https://www.google.com/search?q=how+to+buy+phone")
//   .then((res) => {
//     console.log({ res });
//     return res.text();
//   })
//   .then((data) => {
//     console.log({ data });
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// console.log("After Fetch");
