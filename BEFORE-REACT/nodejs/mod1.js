// console.log(__dirname);
// console.log(module);
// console.log(require);
// console.log(__filename);
// console.log(exports);

// ((__dirname,require, module)=>{})()

//modules ->  user-defined, built-in, external

//CommonJs(default)
//import[default, named]
// const { students, age } = require("./mod2");

// console.log(students, age);

// const x = require("./mod2");

// console.log(x);

//export [default, named]

//ES Modules
//import
//default
// import DEFAULT_NAME from "./mod2.js"

//named
// import {named_mod_func} from "./mod2.js"

//both
// import DEFAULT_NAME, {named_mod_func} from "./mod2.js"

//export
import x from "./mod2.js";

console.log(x);
