// sample custom modules

/* 
// 1. way of exporting modules

const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

module.exports = { add, subtract, multiply, divide}
 */


// 2. way of exporting
exports.add = (a,b) => a+b;
exports.subtract = (a,b) => a-b;
exports.multiply = (a,b) => a*b;
exports.divide = (a,b) => a/b; 
