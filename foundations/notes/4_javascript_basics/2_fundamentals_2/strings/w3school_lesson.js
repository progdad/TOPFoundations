// Complete list on JS String methods and properties: https://www.w3schools.com/jsref/jsref_obj_string.asp



// ".length" property is pretty much the same as in python
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length); // 26



// Slicing strings:
    // slice(start, end)
    // substring(start, end)
    // substr(start, length)

let fruits = "Apple, Banana, Kiwi";
console.log(
    fruits.slice(3, 10), " | ",
    fruits.slice(7), " | ",
    fruits.slice(-12), " | ",
    fruits.slice(-13, -3)
); // "le, Ban  |  Banana, Kiwi  |  Banana, Kiwi  |   Banana, K"

// "substring()" is similar to "slice()".
// The difference is that start and end values less than 0 are treated as 0 in substring().

// "substr()" is similar to "slice()".
// The difference is that the second parameter specifies the length of the extracted part.
// If you omit the second parameter, "substr()" will slice out the rest of the string.



// "replace()" method

// The "replace()" method does not change the string it is called on.
// The "replace()" method returns a new string.
// The "replace()" method replaces only the first match.

// If you want to replace all matches, use a regular expression with the /g flag set.
let mcsVisit = "Please visit Microsoft and Microsoft!";
console.log(mcsVisit.replace(/Microsoft/g, "W3Schools")); // "Please visit W3Schools and W3Schools!"

// Note: Regular expressions are written without quotes.

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
let linuxGreetings = "Linux is the best! Ain't Linux the best?";
console.log(linuxGreetings.replace(/THE/ig, "ze")); // "Linux is ze best! Ain't Linux ze best?"



// "replaceAll()" method, the name says it all.

// The "replaceAll()" also allows to specify a regular expression instead of a string to be replaced.
// If the parameter is a regular expression, the global flag (g) must be set set, otherwise a "TypeError" is thrown.

// replaceAll() does not work in Internet Explorer.



// NOTE:
// All string methods return a new string. They don't modify the original string.
// Formally said:
// Strings are immutable: Strings cannot be changed, only replaced.



// The "trim()" method removes whitespace from both sides of a string. There are also "trimStart()" and "trimEnd()".



// JavaScript String Padding

// The "padStart()" method pads a string from the start.
// It pads a string with another string (multiple times) until the string reaches a given length.
// The "padEnd()", the name says what it does.

let godVar = "GOD";
console.log(
    godVar.padStart(4,"0"), " | ",
    godVar.padStart(10, "x66x"), " | ",
    godVar.padStart(3, "nuh"), " | ",
    godVar.padEnd(8, "01")
); // 0GOD  |  x66xx66GOD  |  GOD  |  GOD01010




// Extracting String Characters

// There are 3 methods for extracting string characters:
    
    // "charAt(index)" method returns the character at a specified index.
    
    // "charCodeAt(index)" returns the unicode of the character at a specified index in a string:
        // The method returns a UTF-16 code (an integer between 0 and 65535).

    // Property access "[ ]":
        // If no character is found, "[ ]" returns undefined, while "charAt()" returns an empty string.
        // Unlike in Python, 'str[0] = "X"' gives no error (but does not work!).



// "split()" just as in Python


