//classes and inheritance concepts.


import {Login, User} from "./interface";
// import * as UserLogin from "./interface";
//whwn we use the above syntax for "import" then we use as "alias" of the method .... 
// we have to use UserLogin.User, UserLogin.Login() like this..... this is called alias.

class Employee implements Login{
    #id  : number //use "!" when constructor is not used to define the class variables(default constructor only)
    //instead of "#" if we use "private" keyword then we need not modify it inside the class.
    name: string
    address: string

    constructor (id:number, name:string, address:string){
        this.address = address; //when we do this "!" is not required
        this.name = name
        this.#id = id;
    }

    getName():string{
        return "I am " + this.name;
    }

    getAddress():string{
        return `${this.name} stays at ${this.address}`;
    }

    static getCount():number{
        return 50;
    }

    get empId():number{
        return this.#id;
    }

    set empId(a:number){ ///doesn't returns anything so "void" type
        this.#id = a;
    }

    Login(): User{
        return {id: 1, name: "John", age: 18, email: "john@gmail.com"};
    }
}

let john = new Employee(1,"John","UK"); //possible only if a parameteresd constructor is defined for it.
// john.id =1;
// john.name="John"
// john.address="UK"
console.log(john);//here you might think of "john" as an object of the class 
// let employee = new employee(); class cannot be the object of itself so not possible
//above line gives error of ===>"Duplicate Identifier", we cannot use the name of the constructor itself to initalize the variables 
console.log(john.getName());
let addr : string = john.getAddress();
console.log(addr);//return the return from the function

class Manager extends Employee {
    constructor(id: number, name:string, address:string){
        super(id, name, address);
    }

    // getAddress():string{
    //     return `${this.name} is staying at ${this.address}`;
    // }
    //the above method "overrides" the super class method of the same name
    //but when commented out ................ this class runs the method from the super class.
}

let mike = new Manager(100, "Mike", "America");
console.log(mike.getAddress());
Employee.getCount();//to get the static members

let a = john.empId;
a = 101;
john.empId = a;
console.log(john.empId);
//NOTE: while using get and set methods outside the class use it without "()"


