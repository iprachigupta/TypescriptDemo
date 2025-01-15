"use strict";
class employee {
}
// employee.id(1);
//property "id" doesn't exists on typeof employee
let john = new employee();
john.id = 1;
john.name = "John";
john.address = "UK";
console.log(john);
