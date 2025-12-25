Day 4 focuses on understanding arrays in JavaScript as a collection of data stored in a linear structure. It includes creating arrays, accessing elements using indexes, updating values, and iterating through arrays using for and for…of loops. This session also covers important array methods such as push, pop, shift, unshift, slice, splice, concat, and toString. Practical problems like calculating average marks, applying discounts to item prices, and modifying company lists are implemented to strengthen array manipulation and problem-solving skills.

// Start

// Day 4 Js !
// Arrays in Javascript -> Collection of the items . Linear State. 
//It is Mutable.

let Names = ["Samarth","Ayush","Aryan","Shravan"];
console.log(Names);
//Type of Array
console.log(typeof(Names));
//Length of Array
console.log(Names.length);
//Index of Array
console.log(Names[0]);

//Changing the Value
Names[1] = "Prakash";
console.log(Names);

//Looping In the Array
//1 ) For Loop

let Animal = ["Dog","Cat","Tiger","Lion"];
for(let i = 0; i < Animal.length; i++)
{
    console.log(Animal[i]);
}

//2) For Of Loop

let fruits = ["Mango","Apple","Banana"];
for(let fal of fruits)
{
    console.log(fal);
    console.log(fal.toUpperCase());
}

//Practice Questions
//1 For a given array with marks of students -> [85,97,44,37,76,60]. Find the average marks of the entire class.
let marks = [85,97,44,37,76,60];
let sum = 0;
for(let val of marks)
{
    sum = sum + val;
}
let avg = sum / marks.length;
console.log(`The avg is : ${avg}`);

//2 For a given array with prices of 5 items -> [250,645,300,900,50]. All items have an offer of 10% OFF on item. Change the array to store final price after applying offer.
let items = [250,645,300,900,50];

for(let i = 0 ; i < items.length ; i++)
{
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
}
console.log(items);

// Array Methos in Js !
//1 ) Push
let brand = ["BMW","AUDI","MERCEDES"];
console.log(brand);
console.log(brand.push("SUZUKI","MG"));

//2) Pop
console.log(brand.pop());

//3) toString()
console.log(brand.toString());

let thalapathy = ["Ghilli","Sura","Sarkar","Dum2"];
console.log(thalapathy);
//Concatenation
console.log(thalapathy.concat(brand));

//Unshift
console.log(thalapathy.unshift("Bodyguard"));

//shift
console.log(brand.shift());

//Slice
console.log(thalapathy.slice(1,3));

//Splice
console.log(thalapathy.splice(1,1,"Villu"));

// Practice Q3
//Create an array to store companies ->"Blooming","Microsoft","Uber","Google","IBM","Netflix"

let company = ["Blooming","Microsoft","Uber","Google","IBM","Netflix"];
console.log(company);
//Remove the first company from the array
console.log(company.shift());

//Remove Uber & Add Ola in its place
console.log(company.splice(1,1,"Ola"));

//Add Amazon at the end
console.log(company.push("Amazon"));
