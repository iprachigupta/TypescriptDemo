"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user1 = { id: 1, name: "John", age: 18, email: "john@gmail.com" };
// user1.name;
// user1.email; // when we want to use it anywhere 
// we can also destructure it ==>
let { name, email } = user1;
console.log(name, email);
//this is called destructuring, it can be done even at the time of declaration of user1, then we need not use user1
//you can rename it also while destructuring. 
let { name: username, email: userEmail } = user1;
console.log(`${username}'s email is ${userEmail}`);
let emp1 = { id: 2, name: "Ron", email: "ron234@gmai.com", salary: 20000 };
//object destructuring
let [usr1, usr2, ...restusers] = [
    { id: 1, name: "John", age: 18, email: "john@gmail.com" },
    { id: 2, name: "John1", email: "john@gmail.com" },
    { id: 3, name: "John3", email: "john@gmail.com" },
    { id: 4, name: "John4", email: "john@gmail.com" },
    { id: 5, name: "John4", email: "john@gmail.com" },
    { id: 6, name: "John5", email: "john@gmail.com" },
    { id: 7, name: "John2", email: "john@gmail.com" },
];
console.log(usr1);
console.log(usr2);
console.log(restusers);
let result = restusers.filter(user => user.id > 3);
console.log(result);
