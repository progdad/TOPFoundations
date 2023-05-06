
// NUMBERS

let a0 = 3.14;    // A number with decimals
let b0 = 3;       // A number without decimals 

let c0 = 123e5;    // 12300000
let d0 = 123e-5;   // 0.00123 

// JavaScript Numbers are Always 64-bit Floating Point



// INTEGER PRECISION

// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
let e0 = 999999999999999;   // x will be 999999999999999
let f0 = 9999999999999999;  // y will be 10000000000000000 

// Floating point arithmetic is not always 100% accurate.
let g0 = 0.2 + 0.1; // 0.30000000000000004
// It will help to solve the problem
let h0 = (0.2 * 10 + 0.1 * 10) / 10; // 0.3



// ADDING NUMBERS AND STRINGS

// Adding two numbers will result, of course, to be a number. 
// Adding two strings will result as a concatenation.

// Adding a number and a string, or vice versa, will be a string concatenation:
let i0 = 10;
let j0 = "20";
let k0 = i0 + j0; // "1020"

// The result will be 1020, not 30:
let l0 = 10;
let m0 = 20;
let n0 = "The result is: " + l0 + m0; // The result is: 1020

// Same here:
let o0 = 10;
let p0 = 20;
let q0 = "30";
let r0 = o0 + p0 + q0; // 3030
// The JavaScript interpreter works from left to right.
// First 10 + 20 is added because o0 and p0 are both numbers.
// Then 30 + "30" is concatenated because r0 is a string.



// NUMERIC STRINGS

// JavaScript will try to convert strings to numbers in all numeric operations:
let s0 = "100";
let t0 = "10";
let u0 = s0 / t0; // 10

let v0 = "333";
let w0 = "33";
let x0 = v0 - w0; // 300

// But this will not work, because "+" results to concatenation with strings:
let y0 = "100"
let z0 = "10"
let result0 = y0 + z0 // "10010"



/// NaN - Not a Number

// NaN is a JavaScript reserved word indicating that a number is not a legal number.
// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
let a1 = 100 / "Apple"; // NaN

// You can use the global JavaScript function isNaN() to find out if a value is a not a number:
let b1 = 20 - "ten";
isNaN(b1); // true

// NaN with strings results as a concatenation:
let c1 = NaN;
let d1 = "5";
let e1 = c1 + d1; "NaN5"

// Because NaN is a number: "typeof NaN" returns "number":
typeof NaN; // number 



// INFINITY

// "Infinity" (or "-Infinity") is the value JavaScript will return if you calculate a number outside the largest possible number.
let myNumber = 2;
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
  // If we were to use console.log(), the last output string would be "Infinity"
}

// Division by 0 also generates Infinity:
let f1 =  2 / 0; // Infinity
let g1 = -2 / 0; // -Infinity

// Infinity also belongs to the type "number"
typeof Infinity; // number



// HEXADECIMAL

// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
 let h1 = 0xFF; 

// Never write a number with a leading zero (like 07).
// Some JavaScript versions interpret numbers as octal if they are written with a leading zero.

// By default, JavaScript displays numbers as base 10 decimals.
// But you can use the "toString()" method to output numbers from base 2 to base 36.
// Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
let i1 = 32;
i1.toString(36); // w
i1.toString(32); // 10
i1.toString(16); // 20
i1.toString(10); // 32
i1.toString(2); // 100000



// JS NUMBERS AS OBJECTS

// Here is the important part kicks in!

// In Python, everything is an object, they are just either mutable or immutable.
// Built-in data types are objects as well.

// Whereas in JS, there are primitive data types and objects.
// Primitive data types don't have any properties or methods, when they are called out, they are being "[un]boxed" with related to them Objects.
// Non-primitive data types are called objects.

// For 'number' primitive DT, there is an Object 'Number':
let j1 = 123;
let k1 = j1.toString() // "Number" Object wraps this primitive DT instance(j1 variable), calls its method "toString" and then returns the result, so it's not a method of the 'number' DT.
typeof k1; // string

// Some interesting cases
let l1 = 500;
let m1 = 500;
let n1 = "500";
let o1 = new Number(500);
let p1 = new Number(500);

// "==" compares only values of two variables, irrespectively to the data types.
// "===" besides values, compares also data types
l1 == m1; // true
l1 === m1; // true
l1 == n1; //true
l1 === n1; // false
l1 == o1; //true
l1 === p1; // false

// Comparing two JavaScript objects always returns false.
o1 == p1; // false
o1 === p1; // false

