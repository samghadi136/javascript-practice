Day 3 – JavaScript Loops & Strings

This day focuses on practicing JavaScript loops and string concepts. It includes using different loops for iteration, solving basic logic problems, and working with strings, template literals, and common string methods. Simple user-input programs are also implemented to strengthen understanding.

// Start

// Day 3 Javascript ... !!
// For Loop
let i ;
for(i = 1 ; i <= 10;i++)
{
    console.log("i = ",i);
}

//2
let even ;
for(even = 2 ; even <= 20 ; even+=2)
{
    console.log("Even numbers = ",even);
}

//While Loop
let count = 1;
while(count <= 30)
{
    console.log("count = ",count);
    count++;
}

//2
let odd = 1;
while(odd <= 20)
{
    console.log("odd = ",odd);
    odd = odd + 2;
}

//Do While Loop
let m = 1 ;
do {
    console.log("m = ",m);
    m++;
}while(m <= 30);

//2
let fact = 1;
let p = 3;
do{
    console.log(p);
    fact = fact * p;
    p--;
}while(p > 0);
console.log("The fact is = ",fact);

// For Of Loop
let str = "Priya";
for(let s of str)
{
    console.log("Value = ",s);
}

//For in Loop
let info = {
    Name : "Samarth",
    age : 21,
    college : "Patkar",
};

console.log(info);
for(let key in info)
{
    console.log("Key = ",key , "Value = ",info[key]);
}

// Q1
// Print the even number from 1 to 100

let q = 0;
do {
    console.log("Q = ",q);
    q = q + 2;
}while(q <= 100);

//Q2Guess the Correct Number using Loop
let gameNum = 33;
let userInput = prompt("Guess The correct Number Broi!!");
while(gameNum != userInput)
{
    userInput = prompt("Not Correct Guess The Again.");
}

console.log("Congrats ! You Guess the right One.", gameNum);

// Strings in Js
let string = "Samarth";
console.log("String is = ",string);
console.log(string.length);
console.log(string[5]);

// Template Literals in JS
let object = {
    Name : "Cake",
    Price : 300,
    Color : "Black",
};
//Normal Way
console.log("The Name of the " , object.Name , "and the price is",object.Price, "Ruppes")

// Template Literal
console.log(`The Name of the ${object.Name} and the price is ${object.Price} Ruppes`);

//Adding the Expression
console.log(`The addition of 33 and 722 is : ${33 + 722}`);

// Escape Character
console.log("Samarth Learn\nJavascript");
console.log("Samarth Learn\t\tJavascript");

//String Methods in Js! String Are the immutable in JS!
// uppercase , lowercase , trim , slice , concatenate , replace , chartAt and many more...

let str1 = "Javascript";
console.log(str1);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

let str2 = "     Javascript     Day3 Here.";
console.log(str2.trim());

let str3 = "Samarth";
console.log(str3.slice(2,4));
console.log(str3.slice(3));

console.log(str3.concat(str1));

let str4 = "Samarth Learning Java";
console.log(str4.replace("Java" , "Javascriptttt"));

let str5 = "India";
console.log(str5.charAt(3));

//Q3. Prompt the user to enter their full name. Generate a username for them based on input. Start username with @,followed by their full name and ending with fullname length.

let fullName = prompt("Enter Your Full Name :");
let username = "@" + fullName + fullName.length;
console.log(username);
