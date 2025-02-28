console.log("Hello, world!", "My name is");

let x= 10;

console.log(x);


/*
    Multi line
*/

let a = .5, b = 7, c = "some kind of string";
console.log(a,b,c);

let name = "BEN";
console.log(name);

var _name; // using var to instantiate variables can lead to scope issues



/* String functions*/
//let testString = "horse is saddle too small";  // can be declared with single or double quotes
//testString2 = 'testing """"""string';       // the escape character \ for escaping
//
//console.log(testString, testString.length);
//console.log(testString2);
//
//let position = 0;
//console.log("the character at position", position, "is", testString.charAt(position));
//
//console.log(testString.indexOf("e"));
//
//let horseIndex = testString.indexOf("horse");
//let animal = testString.substring(horseIndex, horseIndex + 5);
//
//console.log(horseIndex, animal);
//
//let animalSlice = testString.slice(horseIndex, 5);
//console.log(animalSlice);
//
//console.log("bbgjiii@gmail.com".toUpperCase());
//
//let testString3 = testString2.replaceAll('"', "exciting");
//console.log(testString3);
//


// Math in javascript
let number = 1.5;
console.log(Math.abs(x+4));
console.log(Math.pow(2,8));
console.log(124.43421.toFixed(2));

let power = Math.pow(2, 3); // 2^3 = 8
let sqrt = Math.sqrt(16); // Square root of 16 = 4
let mathExample = `Math.pow(2, 3): ${power} Math.sqrt(16): ${sqrt}`;
console.log(mathExample);

/*Rounding*/
console.log("A number between 0 and 5: ", (Math.random()*5).toFixed());
let randomNum = Math.floor(Math.random() * 10+1); // Random number between 1 and 10
let randomExample = `Random number between 1 and 10: ${randomNum}`;


// String exercise
let message = "Welcome to JavaScript!";

console.log("Length of message:", message.length);

console.log("First character:", message.charAt(0));
console.log("Last character:", message.charAt(message.length - 1));

console.log("Uppercase:", message.toUpperCase());
console.log("Lowercase:", message.toLowerCase());

console.log("Position of 'JavaScript':", message.indexOf("JavaScript"));

let extractedWord = message.substring(message.indexOf("JavaScript"), message.indexOf("JavaScript") + "JavaScript".length);
console.log("Extracted word:", extractedWord);

let replacedMessage = message.replace("JavaScript", "Coding");
console.log("Replaced message:", replacedMessage);


/*1. Generate and print a random number between 1 and 100.
2. Calculate and print:
○ The square root of 144.
○ 3 to the power of 4 using Math.pow().
○ The absolute value of -25.
3. Round the number 7.8 using:
○ Math.round()
○ Math.ceil()
○ Math.floor()
○ Math.trunc()
4. Calculate and print the cosine of 45 degrees (Hint: Use Math.cos() with
radians).*/

// Math exercise Math is an object
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number between 1 and 100:", randomNumber);

console.log("Square root of 144:", Math.sqrt(144));

console.log("3 to the power of 4:", Math.pow(3, 4));

console.log("Absolute value of -25:", Math.abs(-25));

console.log("Math.round(7.8):", Math.round(7.8));

console.log("Math.ceil(7.8):", Math.ceil(7.8));

console.log("Math.floor(7.8):", Math.floor(7.8));

console.log("Math.trunc(7.8):", Math.trunc(7.8));

let radians = 45 * (Math.PI / 180);
console.log("Cosine of 45 degrees:", Math.cos(radians));
