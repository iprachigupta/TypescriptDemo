class employee{
    id  ! : number //use "!" when constructor is not used to define the class variables
    name!: string
    address!: string


}
// employee.id(1);
//property "id" doesn't exists on typeof employee
let john = new employee();
john.id =1;
john.name="John"
john.address="UK"
console.log(john);