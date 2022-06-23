'use strict';

'use strict';

// console.log(document.querySelector('.message').textContent); 
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.message').textContent = 'yo';
// const x = function () {
//     console.log(23);
// }

let message = document.querySelector('.message');
let body = document.querySelector('body');
let scoreMsg = document.querySelector('.score');
let secNum = document.querySelector('.number');
// let msgText = message.textContent;
// let bkg = body.style.backgroundColor;


let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value); // here the querry selector is selection the value of .guess
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        message.textContent = 'no number';

        // When player wins
    } else if (guess === number) {
        message.content = 'Correct Number';
        secNum.textContent = number;
        body.style.backgroundColor = '#60b347'; // in the dom the property name is written in camel case when there is more than one word
        secNum.style.width = '30rem' // must always pass styles in a string with the dom

        // high score
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // when guess is too high
    } else if (guess > number) {
        if (score > 1) { // if statement within an if statement
            message.textContent = 'Too high';
            decrement();
        } else {
            lost();
        }

        // when guess is too low
    } else if (guess < number) {
        if (score > 1) { // if statement within an if statement
            message.textContent = 'Too Low';
            decrement();
        } else {
            lost();
        }
    }
});

function decrement() {
    score--;
    scoreMsg.textContent = score;
}

function lost() {
    msgText = 'You lost the game!';
    scoreMsg.textContent = 0;
}

// first attempt
const resetBtn = document.querySelector('.again');
resetBtn.addEventListener('click', function () {
    score = 20; //change score 
    number = Math.trunc(Math.random() * 20) + 1; // redo the random number
    message.textContent = 'Start guessing...'; // resets the message
    scoreMsg.textContent = score; // change sore text content
    body.style.backgroundColor = '#222'; // resets the background color
    secNum.style.width = '30rem' // resets the width
    secNum.textContent = '?'; // change the text content of number
    document.querySelector('.guess').value = ''; // sets guess value to empty
});

// able to solve the problem simply by resetting the page
// const resetBtn = document.querySelector('.again');
// resetBtn.addEventListener('click', function (){
//        window.location.reload();
//     });




