/*
Day 2 – JavaScript Operators & Conditional Statements

In this practice session, I learned and implemented core JavaScript operators 
and decision-making concepts.

Operators:
- Arithmetic operators are used to perform basic mathematical calculations 
  such as addition, subtraction, multiplication, division, modulus, and exponentiation.
- Assignment operators help in updating variable values using shorthand notation.
- Comparison operators are used to compare values and return boolean results.
- Logical operators allow combining multiple conditions and evaluating expressions.

Conditional Statements:
- Conditional statements control the flow of execution based on conditions.
- The if statement executes code when a condition is true.
- if–else allows alternative execution when a condition is false.
- else if is used to check multiple conditions sequentially.
- The ternary operator provides a short and concise way to write simple conditions.

This file contains examples and practice problems to strengthen logical thinking
and conditional decision-making in JavaScript.
*/

// Start

// This is known as the comment in javascript
/* Welcome to the second 
day in javascript practice */
console.log("Welcome !") // Welcome JS !

// Operators in JS
// 1 ) Arithmetic Operators
let a = 6;
let b = 5;
console.log("a + b = " , a + b);
console.log("a - b = " , a - b);
console.log("a * b = " , a * b);
console.log("a / b = " , a / b);
console.log("a % b = " , a % b);
console.log("a ** b = " , a ** b);

//Increment
console.log("a++ = " , a++); // Post Increment
console.log(a);

console.log("++b = ", ++b); // Pre Increment

// Decrement
let c = 9;
let d = 2;
console.log("c-- = " , c--); // Post Decrement
console.log(c);

console.log("--d = ", --d); // Pre Decrement

//2) Assignment Operators
// += , -= , *= , /= , %= , **=

let e = 8;
let e1 = 2;
let e3 = 3;
let e4 = 4;
let e5 = 5;
let e6 = 7;
console.log("e += 5" , e += 5);
console.log("e1 -= 5" , e1 -= 5);
console.log("e3 *= 5" , e3 *= 5);
console.log("e4 /= 5" , e4 /= 5);
console.log("e5 %= 5" , e5 %= 5);
console.log("e6 **= 5" , e6 **= 5);

//3) Comparision Operators
// == , != , ===, !==
let s = 7;
let p = 4; 
let q = "7"; //string -> num
console.log("s == p =" , s == p);
console.log("s != p =" , s != p);
console.log("s == q =" , s == q);// true
console.log("s === q =" , s === q); // false
console.log("s !== q=", s !== q);

// 4) Logical Operators 
// && , || , !
let z = 82;
let j = 23;
console.log(" z >= j && z === j) =", z >= j && z === j);
console.log("z <= j || z !== j) =", z <= j || z !== j);
console.log("!(z <= j) = ", !(z <= j));

// Conditional Statement
// 1) If Statement

let car = "Celerio";
if(car == "Celerio")
{
    console.log("This is My Car");
}

// 2 ) If Else Statement
 
let num = 9;
if(num %2 == 0)
{
    console.log("Even Number");
}
else {
    console.log("Odd Number");
}

// 3) Else If Statement

let cgpa = 9.5;
if(cgpa <= 8.4)
{
    console.log("Average");
}
else if (cgpa >= 9.0)
{
    console.log("Ohh Awesome");
}
else {
    console.log("Bad");
}

// 4 ) Ternary Operator 
let age = 20;
let result = age >=18 ? "It is Valid" : "It is Not Valid";
console.log(result);

// Practice Question 1
//Q1. Get user to input a number using prompt("Enter a number:"). Check is the number is multiple of 5 or not.
let number = prompt("Enter a number");
if(number % 5 == 0)
{
    console.log(number , "is the multiple of 5");
}
else {
    console.log(number , "is not the multiple of 5");
}

//Q2. Write a code which can give grades to students according to their scores.
let score = prompt("Enter the score (0-100)");
let grade ;

if(score >= 80 && score <= 100)
{
    grade = "A";
}
if(score >= 70 && score <= 79)
{
    grade = "B";
}
if(score >= 60 && score <= 69)
{
    grade = "C";
}
if(score >= 50 && score <= 59)
{
    grade = "D";
}
else if(score >= 0 && score <= 49)
{
    grade = "E";
}

console.log("So The Grade is :" , grade);
