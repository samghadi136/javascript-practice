/*
Day 5 – JavaScript Functions & Array Methods

This session covers JavaScript functions, arrow functions, and the use of array
methods such as forEach, map, filter, and reduce to perform operations and solve
practical problems efficiently.
*/

//start
//Day 5 Javascript
// Array Functions -> 1)log() 2)toLowerCase() 3)push() -> Reduce Redundancy. fnx Params -> Like local variables -> block scope.

function firstFunction(){
    console.log("This is Javascript Day 5.")
}

firstFunction();

function twoFunction(msg,val){
    console.log(msg,val);
}

console.log("Samarth",722);

// Q1. Perform the Addition of the Two Numbers.

function addSum(first , last){
    console.log(first + last);
}

addSum(72,34);

//Arrow Functions in JS
const mulSum = ((val)=>{
    console.log(val * val);
})

mulSum(78);

//Q2. Create a function using the "function" keyword that takes String as an argument & returns the number of vowels in string.

function countVowel(string) {
    let count = 0;
    for(let ch of string)
    {
        if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u")
        {
            count++;
        }
    }

    return count;
}

console.log(countVowel("patkarvardecollege"));

//Q3. Create an arrow function to perform the same task.

const totalVowel = ((str)=> {
    let count = 0;
    for(let ch of str)
    {
        if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u")
        {
            count++;
        }
    }

    return count;
})

console.log(countVowel("samarthghadi"));

// Array Methos in JS !
//1) ForEach Array Method.

let count = [28,34,67,12];

let countArray = count.forEach((val)=> {
    console.log(val + val);
})

console.log(count);

let city = ["Mumbai","Goa","Chennai","Gujrat"];

let cities = city.forEach((cityy , idx , city)=>{
    console.log(cityy , idx , city);
})

//Q4. Calculate the square of the number using forEach Loop.
let num = [3,5,8,9,30];

let square = num.forEach((value)=> {
    console.log(value * value);
})

//2) map Method
let number = [56,23,98,32];

let mapArray = number.map((counter)=>{
    console.log(counter * 5);
})

//3) Filter Method

let numbers = [38,46,78,12];

let filterArray = numbers.filter((val)=> {
    console.log(val %2 === 0);
})

// Reduce Method
let total = [87,34,156,45];

let reduceArray = total.reduce((prev , next)=> {
    return prev + next;
})

console.log(reduceArray);

//Q5. We are given array of marks of students. Filter out of the marks of students that scored 90.

let score = [87,56,90,92,93,98,63,99];

let topper = score.filter((value)=>{
    return value > 90;
})

console.log(topper);

//Q6. Take a number n as input from user. Create an array of numbers from 1 to n.
//Use the reduce method of calculate sum of all numbers in the array.
//Use the reduce method of calculate product of all numbers in the array.

let n = prompt("Enter the Number");

let arrr = [];

for(let y = 1 ; y <= n ; y++)
{
    arrr[y-1] = y;
}

console.log(arrr);

// second subQuestion
let totalsum = arrr.reduce((first , last)=>{
    return first + last;
})

console.log(totalsum);

// third subQuestion
let productsum = arrr.reduce((first , last)=>{
    return first *  last;
})

console.log(productsum);
