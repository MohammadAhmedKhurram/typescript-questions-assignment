// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array



// • Tests for equality and inequality with strings
let cow = 'Milk';

console.log("Is cow == 'Milk' I Predict True");
console.log(cow == "Milk");

console.log("Is cow !== 'Milk' I Predict False");
console.log(cow !== "Milk");



// • Tests using the lower case function
let userInput = 'HELLO WORLD';

console.log("Is userInput.toLowerCase() == 'hello world'? I predict False.");
console.log(userInput.toLowerCase() == 'HELLO WORLD');


let userName = 'Ali';

console.log("Is userName.toLowerCase() != 'ali'? I predict True.");
console.log(userName.toLowerCase() != 'ali');



// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number = 10;

console.log("Is number == 10? I predict True.");
console.log(number == 10);

console.log("Is number !== 20? I predict True.");
console.log(number !== 20);

console.log("Is number > 8? I predict True.");
console.log(number > 8);

console.log("Is number < 12? I predict True.");
console.log(number < 12);

console.log("Is number >= 15? I predict false.");
console.log(number >= 15);

console.log("Is number <= 10? I predict true.");
console.log(number <= 10);



// • Tests using "and" and "or" operators
let temperature = 25;
let weather = 'sunny';

console.log("Is temperature > 24 and weather == 'sunny'? I predict True.");
console.log(temperature > 24 && weather == 'sunny');
 

let isWeekend = true;
let hasHomework = false;

console.log("Is isWeekend == true or hasHomework == false? I predict True.");
console.log(isWeekend || hasHomework); 



// • Test whether an item is in a array
let fruits: string[] = ['Apple', 'Banana', 'Orange', 'Mango'];

console.log("Is 'Banana' in the fruits array? I predict True.");
console.log(fruits.includes('Banana')); 

console.log("Is 'Grapes' in the fruits array? I predict False.");
console.log(fruits.includes('Grapes')); 



// • Test whether an item is not in a array
let mixedArray: (string | number)[] = ['Hello', 42, 'World', 7];

console.log("Is 99 not in the mixed array? I predict True.");
console.log(!mixedArray.includes(99)); 

console.log("Is 'World' not in the mixed array? I predict False.");
console.log(!mixedArray.includes('World')); 