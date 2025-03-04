

// Generating random number 1-50 and checking if it is even or odd
let val = Math.floor(Math.random() * 50) + 1;

if (val % 2 === 0) {
    console.log(`${val} is even.`);
}
else if (val % 2 !== 0) {
    console.log(`${val} is odd`);4

}


// Switch which chooses cases based on the value entered into the alert box
let day = prompt("Enter a number between 0 and 6:")
let dayNumber = parseInt(day);

switch (dayNumber) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Error: Please enter a number between 0 and 6.");
}

// Random value generated and printed until a value of 6 is acquired
let dice = 0;
while(dice != 6) {
    dice = Math.floor(Math.random() * 6) + 1;
    console.log(`You roll the die, it's a ${dice}`);
}

// Enter a number and log displays each number while counting down by 1
let startingNumber = prompt("Enter a number:");
for(let i = 0; i <= startingNumber; startingNumber--) {
    console.log(startingNumber);
}

