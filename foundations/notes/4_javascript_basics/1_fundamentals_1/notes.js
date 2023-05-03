
// console.log() is the command to print something to the developer console in your browser. 
console.log("Hello Again.")

// To create a variable in JavaScript, use the "let" keyword:
let message;
message = 'Hello!'
alert(message)


// Or
let message1 = 'Hello!'; // define the variable and assign the value
alert(message1); // Hello!


// Several variables
let user = 'John',
    age = 25,
    greetings = 'Hello';

/*
The var keyword is almost the same as let. It also declares a variable, 
but in a slightly different, “old-school” way.
*/
var myVar = "Hi, there!"


// VARIABLE ONLY ONCE CAN BE DECLARED
let random_name = "This";
// Uncommenting the string below would lead to an error
// let random_name = "That"; // SyntaxError: 'message' has already been declared

/*
That's the first difference with python. 
But change the value(not declaring) I can do as many times as I want
*/
let box;
box = 'Hello!';
box = 'World!'; // value changed
alert(box);



// NAMING
/*
The name must contain only letters, digits, or the symbols "$" and "_".
The first character must not be a digit.
Both of the variables below have valid names
*/
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"


// An assignment without "use strict"
/*
Normally, we need to define a variable before using it. 
But in the old times, it was technically possible 
to create a variable by a mere assignment of the value without using let. 
This still works now if we don’t put use strict in our scripts to maintain 
compatibility with old scripts.
*/

// note: no "use strict" in this example
num = 5; // the variable "num" is created if it didn't exist
alert(num); // 5

// This is a bad practice and would cause an error in strict mode:
"use strict";
num = 5; // error: num is not defined



// CONSTANTS 

// To declare a constant (unchanging) variable, use const instead of let:
const pieceOfCruelCrap = "russia"
// The constants cannot be reassigned, the string below will cause an error.
pieceOfCruelCrap = "Again, russia"

/* 
There is a widespread practice to use constants as aliases for 
difficult-to-remember values that are known prior to execution.

Such constants are named using capital letters and underscores.

So capital-named constants are only used as aliases for “hard-coded” values.
*/
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

/*

*/


// A reminder about naming: 
// https://javascript.info/variables#name-things-right
