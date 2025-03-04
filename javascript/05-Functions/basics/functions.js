function greeting() {
    console.log("Hello!")
}

greeting();

// javascript function can have default parameter value
function name_greeting(name = "Anonymous") {
    console.log("Hello, ", name + "!");
}

name_greeting("Ben");
name_greeting();

function average() { // for every function there is an argument array
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum/arguments.length;
}

console.log(average(1,2,3,4,5));

function log_roll(die) {
    console.log("The number that was rolled was" , die);
}


// get_input(prompt) get input from user and validates that it is a valid number
function get_input(prompt) {
    let valid_input = false;
    let num_rolls, input;

    while(!valid_input) {
        input = window.prompt(prompt);

        num_rolls = Number(input);

        if(num_rolls != NaN && num_rolls > 0) {
            valid_input = true;
        }
    }

    return num_rolls;

}

function roll(max = 6) {
    return Math.floor(Math.random() * max) + 1;
}


// initialize_rolls() initialize data roll storage array
function initialize_rolls(die = 6) {
    let rolls = [];

    for (let i = 0; i < (die * 2 + 1); i++) {
        rolls.push(0);
    }

    return rolls;
}

// roll_dice() rolls an individual die
// setting parameter to value
function roll_dice(num_rolls, die_size = 6) {
    let rolls = initialize_rolls(die_size);

    let die1, die2, roll;

    for (let i = 0; i < num_rolls; i++) {
        die1 = this.roll(die_size);
        die2 = this.roll(die_size);
        roll = die1 + die2;
        rolls[roll]++;
    }

    return rolls;
}

roll_dice(get_input("How many dice rolls?"));

// roll_results()

function roll_results(num_rolls, rolls) {
    console.log(`We rolled the dice ${num_rolls} times...`);
    for(let i = 0; i < rolls.length; i++) {
        let count = rolls[i];
        let num = i;
        let pct = Math.round(count / num_rolls * 100);

        console.log(`${num} was rolled ${count} times (${pct}%)`)
    }
}

let num_rolls = get_input("How many dice rolls?");
let rolls = roll_dice(num_rolls);

roll_results(num_rolls, rolls);


