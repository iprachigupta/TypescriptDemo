"use strict";
//classes and inheritance concepts.
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
// import * as UserLogin from "./interface";
//whwn we use the above syntax for "import" then we use as "alias" of the method .... 
// we have to use UserLogin.User, UserLogin.Login() like this..... this is called alias.
class Employee {
    constructor(id, name, address) {
        _Employee_id.set(this, void 0); //use "!" when constructor is not used to define the class variables(default constructor only)
        this.address = address; //when we do this "!" is not required
        this.name = name;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    getName() {
        return "I am " + this.name;
    }
    getAddress() {
        return `${this.name} stays at ${this.address}`;
    }
    static getCount() {
        return 50;
    }
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(a) {
        __classPrivateFieldSet(this, _Employee_id, a, "f");
    }
    Login() {
        return { id: 1, name: "John", age: 18, email: "john@gmail.com" };
    }
}
_Employee_id = new WeakMap();
let john = new Employee(1, "John", "UK"); //possible only if a parameteresd constructor is defined for it.
// john.id =1;
// john.name="John"
// john.address="UK"
console.log(john); //here you might think of "john" as an object of the class 
// let employee = new employee(); class cannot be the object of itself so not possible
//above line gives error of ===>"Duplicate Identifier", we cannot use the name of the constructor itself to initalize the variables 
console.log(john.getName());
let addr = john.getAddress();
console.log(addr); //return the return from the function
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let mike = new Manager(100, "Mike", "America");
console.log(mike.getAddress());
Employee.getCount(); //to get the static members
let a = john.empId;
a = 101;
john.empId = a;
console.log(john.empId);
//NOTE: while using get and set methods outside the class use it without "()"
