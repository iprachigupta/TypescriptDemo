"use strict";
//Ways to write a function
//Type 1
function add(a, b, c) {
    return (c) ? a + b + c : a + b;
}
console.log(add(2, 5));
console.log("Optional Parameter:", add(10, 20, 30));
// if no type is written it considers it "void" 
//Type 2=>Arrow func.
const sub = (a, b, c = 10) => a - b - c;
console.log(sub(2, 5));
console.log("Required Parameter:", sub(10, 20, 30));
//Type 3
const mul = function (a, b) {
    return a * b;
};
console.log(mul(2, 5));
//rest parameters
function addition(a, b, ...c) {
    return a + b + c.reduce((acc, sum) => acc + sum);
}
const numb = [1, 2, 3, 4, 5, 6];
console.log(addition(2, 3, ...numb));
console.log(addition(1, 2, ...[12, 13, 12, 12, 33, 45, 66]));
console.log(addition(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//generic function
function getItems(items) {
    return new Array().concat(items);
}
let concatRes1 = getItems([1, 2, 3, 4, 5]); //we here infer the values.
let concatRes2 = getItems(['a', 'a', 'b', 'c', 'd']);
let concatRes3 = getItems(['a', 1, 'b', 2, 'd']);
let concatRes4 = getItems([1, 'a', 2, 'c', 4]);
console.log(concatRes1, concatRes2, concatRes3, concatRes4);
//"T" represents a generic i.e. any datatype ..... T type data
// new Array<T>() used to create a new Array that is empty by default
