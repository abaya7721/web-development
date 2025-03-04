
function flip_coin() {
    let coinSide = Math.floor(Math.random() * 2) + 1;
    return coinSide;
}

const headsBtn = document.getElementById('headsBtn');
headsBtn.addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = 'You guessed heads...';
    document.querySelector('.container').appendChild(newParagraph);

    const outcome = document.createElement('p');
    let coin = flip_coin();
    if (coin === 1){

        outcome.innerHTML = 'The coin comes up heads. You guessed correct';

    }
    else{
            outcome.innerHTML = 'The coin comes up tails. You guessed wrong';
    }
    document.querySelector('.container').appendChild(outcome);
});

const tailsBtn = document.getElementById('tailsBtn');
tailsBtn.addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = 'You guessed tails...';
    document.querySelector('.container').appendChild(newParagraph);

    const outcome = document.createElement('p');
    let coin = flip_coin();
        if (coin === 1){
            outcome.innerHTML = 'The coin comes up tails. You guessed correct';
        }
        else{
             outcome.innerHTML = 'The coin comes up heads. You guessed wrong';
        }
    document.querySelector('.container').appendChild(outcome);
});

