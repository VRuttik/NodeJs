// index.js
const {add, sub, mult, name} = require("./oper.js");

console.log(add(5, 5));
console.log(sub(10, 5));
console.log(mult(10, 5));
console.log(name);


// oper.js

const add = (a, b) => {
return a + b;
}

const sub = (a, b) => {
return a - b;
}

const mult = (a, b) => {
    return a * b;
}

const name = "Vruttik";


/*
module.exports.add = add;
module.exports.sub = sub;
module.exports.mult = mult;
*/

module.exports = {add, sub, mult, name};
