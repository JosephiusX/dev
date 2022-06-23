'use strict';

// selecting elements
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');// getElementById is faster especially in bulk
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

let diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

let scores, currentScore, activePlayer, playing;  // defining multiple empty variables




const init = function() {
    scores = [0, 0];
    currentScore = 0; 
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init(); // runs the function upon page load


const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; // turnary : if active player is 0 then set to 1 else set to 0
    player0El.classList.toggle('player--active');
    player0El.classList.toggle('player--active');
}

// EventListeners

// rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) { // playing is a boolean because its value has already been set to true above
        // 1. generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1 // trunc is sorta like Math.floor(), we want this variable local so it will be reset whenever the function is called
        console.log(dice);

        // 2. display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // 3. Check for rolled 1, if true, switch to next player
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice; // = currentScore = currentScore + dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore; // identifies current players  dynamically
            // current0El.textContent = currentScore;  // only selects for 
        } else {
            // if true, switch to next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        console.log(scores[activePlayer]); // for debugging  gives conformation tgat our function

        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;  // = scores[1] = scores[1] + currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 100) {
            // Finish the game
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // Switch to the next player 
            switchPlayer();
        }
    }
});

// btnNew.addEventListener('click', function(){
//     playing = true;
//     score0El = 0;
//     score1El = 0;
//     currentScore = 0;
//     current0El.textContent = 0;
//     current1El.textContent = 0;
//     player0El.textContent = 0;
//     player1El.textContent = 0;
// })

btnNew.addEventListener('click', init);






