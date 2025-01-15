// let fname = "hello" -------------------------> not a good practice

// fname = 10; ------------------------->this shows error here, because we first assigned the variable 
// type String ,but we cannot change it later unlike javascript where it was allowed.


let fname : string;
fname = "Prachi"
let x = fname.charAt(0);
let y = fname.toUpperCase().includes("i");
let z = x.concat(".G");
let fullName: string
fullName = fname.concat("Gupta");
console.log(x,y,z);
console.log("Full Name:", fullName);


let num : number;
num = 25.5; //number can be any number - decimal, float, real, integer etc.
let dob = "19"
console.log("Date of birth: ", parseInt(dob));//JS function 
console.log(typeof(parseInt(dob)));
console.log(typeof(num.toString())); //TS function


let isValid : boolean;
isValid = false //by default
console.log(isValid) //gives error "undefined" because when TS is converted to JS, JS doesn't
//  knows about it so it given undefined.


let arr1 : string[]; //can declare array with the type.
let arr2 : Array<number> // generic declaration of the array.
let arr : []; //any ........ mean contains any(maybe int, string, boolean, array and mix of them also) datatype
arr1 = ["Prachi", "Mihir", "Sumit", "Rohit"]
arr2 = [10, 1, 2, 3, 4, 5, 10];
let res1 = arr2.filter((x)=> x>2); //filters out the expression data
let res2 = arr1.find((x)=> x === "Prachi");//find out the matched 
let res3 = arr2.reduce((acc,x)=> acc + x);//for calculation
console.log(res1);
console.log(res2);
console.log(res3);


enum Color{     //is a type of array whose index starts from 0.
    Red, Blue, Purple, Green, Yellow, Orange
}
let c: Color = Color.Purple; //selecting a color
//when we compile this code JS converts "enum" to an array of "var" which is visible during the production 
// we don't need to show this "enum" during production for security purposes so we use "enum"(s) as====>
const enum Colors{
    Red, Blue, Green, Purple, Yellow, Black, White, Grey,
}
let c1 : Colors = Colors.Blue;
// let c2 : Colors = Color.Blue; ---------------- this gives error due to different type of enum mentioned and using different enum



//tuples:: like arrays can be accessed and modified and operated but different when API calls during production
//func. to swap two numbers==>
function swap(num1: number, num2: number) : [number, number] {
    return [num2, num1];
}
let swapNos : [number, number] = swap(10,20);
// let swapNos : number[] = swap(10, 20);
// let swapNos : Array<number> = swap(10,20); 
//all the above three are valid assigns
console.log(swapNos);
console.log(swapNos[1]);
console.log(swapNos[0])



let dept; //this by default will be type "any" ----> gives undefined in accordance to JS
console.log(typeof(dept));
dept =  "it"
console.log(typeof(dept));
dept = 10;
console.log(typeof(dept));
// "noImplicitAny": true, ==> Enable error reporting for expressions and declarations with an implied `any` type
//use this less, actually avoid in the start


