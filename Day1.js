// Give alert Message in Javascript
alert("Welcome to Javascript");

// Printing the statement
console.log("Samarth Ghadi");
console.log("I Love Js!!");

//Variables in Javascript  [Variables are container for data].
// Three Keywords are use : 1) var 2) let 3) const
//Normal Declaration
Name = "Samarth";
console.log(Name);
age = 20;
console.log(age);
isTrue = true;
console.log(isTrue);
age$ = age + 5;
console.log(age$);

//Perfect Declaration
var age = 23; // variable can be re-declared & updated. A global scope variable.
var age = 35;
console.log(age);

let college = "Patkar"; // Variables cannot be re-declared but can be updated. A block scope variable.
console.log(college);

const PI = 3.14; // Variables cannot be re-declared & updated. A block scope variable.
console.log(PI);

// Block of let 
{
    let b;
    console.log(b);
}

//Block of const
{
    const cgpa = 23;
    console.log(cgpa);
}

//DataTypes in Js
//1)Number
let num = 55.99;
console.log(num);

//2)String
let string = "Samarth";
console.log(string);

//3) Boolean
let isPass = true;
console.log(isPass);

//4) Undefined
let z;
console.log(z);

//5) Null
let empty = null;
console.log(empty);

//6) BigInt
let x = BigInt(722);
console.log(x);

//7) Symbol
let y = Symbol("Patkar College");
console.log(y);

// Object -> It is collection of Values. It is key value pairs: {key:value}
let student = {
    fullName : "Samarth Ghadi",
    age : 20,
    hobbie : "Cricket",
    cgpa:8.4,
    isFail : false,
};

console.log(student);

console.log(student.hobbie); // This is first method.
console.log(student["hobbie"]); // This is second method.

student["age"] = student["age"] + 4;
console.log(student["age"]);

student["hobbie"] = "Coding";
console.log(student["hobbie"]);

//Practice Question
//Q1. Create a const object called "product" to store information.
const product = {
    Pname : "Parker",
    rating: 4,
    mrp : 285,
    offer : 5,
};

console.log(product);

//Q2. Create a const object called "profile" to store information.
const profile = {
    username : "samarthghadi",
    posts: 0,
    followers : 290,
    following : 300,
    isFollow : true,
    Name : "Samarth Ghadi",
    logo : "@samghadi",
    bio : "Just Stay Happy !",
};

console.log(profile);
console.log(typeof profile["bio"]);

// Practice Variable + DataType
// 1) Declare variables for:

// city (string)

// pincode (number)

// isStudent (boolean)

// Print their type using typeof

let city = "Kandivali";
let pincode = 400101;
let isStudent = true;

console.log(typeof city);
console.log(typeof pincode);
console.log(typeof isStudent);

// PRACTICE SET 2: Object Practice (IMPORTANT)

// Create an object mobile with:

// brand

// model

// price

// isAvailable

// Tasks:

// Print brand

// Increase price by 2000

// Change isAvailable to false

const mobile = {
    brand : "Realme",
    model : "13 Pro 5G",
    price : 24000,
    isAvailable : true,
}

console.log(mobile);
console.log(mobile["brand"]);

mobile["price"] = mobile["price"] + 2000;
console.log(mobile["price"]);

mobile["isAvailable"] = false;
console.log(mobile["isAvailable"]);

// PRACTICE SET 3: Nested Object (Little Advance)

// Create object college:

college = {
  name: "Patkar",
  location: "Goregaon",
  departments: {
    it: 120,
    cs: 100
  }
}

// Tasks:

// Print IT students

// Increase CS students by 20

console.log(college);
console.log(college.departments["it"]);

college.departments.cs = college.departments.cs + 20;
console.log(college.departments.cs);
