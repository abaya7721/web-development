

function greetUser(name) {
    console.log("Hello,",name);
}
greetUser("Bond");
greetUser("Roger");

function squareNumber(number) {
    return console.log(Math.pow(number, 2));
}

squareNumber(4);
let fourSquared = squareNumber(4);
let sevenSquared = squareNumber(7);

function addNumbers(x, y) {
    return console.log(x+y);
}

addNumbers(10, 5);
addNumbers(3, 8);

let colors = ["red", "blue", "green", "yellow", "purple", "orange"];

function getRandomColor() {

    let randomPicker = Math.floor(Math.random() * colors.length) + 1;

    return colors[randomPicker - 1];
}

console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());


let fortunes = [
 "You will have a great day!",
 "A surprise is waiting for you.",
 "Something exciting is coming soon.",
 "Be cautious with your decisions today.",
 "Happiness is around the corner."
];

function tellFortune() {

    let randomPicker = Math.floor(Math.random() * fortunes.length) + 1;

    return console.log("Your fortune is.", fortunes[randomPicker - 1]);
    }

tellFortune();
tellFortune();
tellFortune();