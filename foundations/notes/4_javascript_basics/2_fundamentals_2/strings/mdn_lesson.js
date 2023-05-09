// Again, as always, most of the rules are pretty much the same as in python, 
// but there are slight syntax and behavioral distinctions.



// CONCATENATION

// As it's noted in the notes of the first lesson on JS, concatenation is possible by using "+"
// What's also called "concatenation" is including variables into a string(must be used this "`" symbol).
// It's called template literal:
let first_name = "Mr.";
let last_name = "Robot";
let greeting = `Hello, ${first_name} ${last_name}!`;
console.log(greeting); // "Hello, Mr. Robot!"
// Template literals also respect the line breaks.

// An example of concatenation for"./index.html" 
const button = document.getElementById("button-name");

function greet() {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener("click", greet);

// The "Number()" function converts anything passed to it into a number, if it can.
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum); // number



// AN IMPORTANT NOTE:
// https://stackoverflow.com/questions/65379554/why-does-my-variable-show-its-deprecated
