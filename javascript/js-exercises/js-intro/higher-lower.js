
// generate random number 1 - 20
let randomNumber1N20 = Math.floor(Math.random() * 20) + 1;

// Creates a decimal by getting the absolute value difference between the guess value and random value
// Two decimal places used for easier comparison to percent values in progress bar
function calculateDecimal(guessValue, randomNumber1N20){
    const distance = Math.abs(guessValue - randomNumber1N20);
    const decimal = (distance / 20);
    console.log(decimal);
    return decimal.toFixed(2);
}

// Removes the progress bar bootstrap class that provides color before a new class is set
// New value is set in updateProgressBar function
function removeClassesByPattern(element, pattern) {
    const classes = element.className.split(' ');
    for (let i = 0; i < classes.length; i++) {
        if (classes[i].startsWith(pattern)) {
            element.classList.remove(classes[i]);
        }
    }
}

// Updates the color and width values of the progress after a new guess is made
// Based on the value parameter which uses the calculateDecimal function
function updateProgressBar(value) {

            const progressBar = document.getElementById('progressBar');
            let width, color;
            removeClassesByPattern(progressBar, 'bg-');
            switch (true) {

                case (value == 0):
                    width = "100%";
                    color = "bg-success";
                    break;
                case (value <= 0.25):
                    width = "75%";
                    color = "bg-info";
                    break;
                case (value <= 0.50):
                    width = "50%";
                    color = "bg-warning";
                    break;
                case (value <= 0.75):
                    width = "25%";
                    color = "bg-danger";
                    break;
                case (value <= 1):
                    width = "25%";
                    color = "bg-danger";
                    break;
                default:
                    width = "0%";
                    color = "";
                    break;
            }
            progressBar.style.width = width;
            progressBar.classList.add(color);
}

// Resets background to blank for the div containing the triangle images
function resetBackground() {
    document.getElementById('circleTop').style.backgroundImage = 'none';
    document.getElementById('circleBottom').style.backgroundImage = 'none';
}

// Conditional checks the guess value against the random value
// The text changes based on the position of the guess
// Progress bar updates at the end
// Triangle disappears after 3 seconds using the setTimeout javascript function and resetBackground function

function evaluateGuess(guessValue, randomNumber1N20) {
    let intGuessValue = parseInt(guessValue);
    document.querySelector('#resultsArea').style.fontSize = "40px";
    let timeOut;
    if (intGuessValue === randomNumber1N20) {
        document.querySelector('#resultsArea').style.fontSize = "50px";
        document.querySelector('#resultsArea').textContent = "You got it!";
        document.querySelector('#resultsArea').classList.add("bungee-tint");
        document.body.style.background = '#a3eba2';

        // generate random number 1 - 20
        let randomNumber1N20 = Math.floor(Math.random() * 20) + 1;
    }
    else if(intGuessValue < randomNumber1N20) {
        document.querySelector('#resultsArea').textContent = "The number is higher!";
        document.getElementById('circleTop').style.backgroundImage = `url('${"red-triangle.png"}')`;
        setTimeout(resetBackground, 3000);
    }
    else {
        document.querySelector('#resultsArea').textContent ="The number is lower!";
        document.getElementById('circleTop').style.backgroundImage = `url('${"blue-triangle.png"}')`;
        setTimeout(resetBackground, 3000);
    }
    updateProgressBar(calculateDecimal(guessValue, randomNumber1N20));
}

// The guess button element is provided an event listener for interactivity after clicking
// Retrieves the value in the text area and runs the evaluateGuess function
// Has conditionals for value checking with alert boxes showing the error
const guessBtn = document.getElementById('guessBtn');
guessBtn.addEventListener('click', function() {
    console.log(randomNumber1N20);

    let guessValue = document.getElementById('guessTextArea').value;
    if (guessValue > 20) {
        alert('Out of bounds.');
    }
    else if(!isNaN(guessValue) && guessValue > 0) {
        evaluateGuess(guessValue, randomNumber1N20);
    }
    else {
        alert('Try a valid value.');
    }
});