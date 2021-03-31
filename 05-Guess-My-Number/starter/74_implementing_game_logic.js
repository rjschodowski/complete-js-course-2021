'use strict';

//First we need to define our secret number

const secretNumber = Math.trunc(Math.random() * 20) + 1; //Math.trunc removes the decimal values. * 20 is added to generate number 1 - 19. The + 1 is added so it generates 1 - 20.
let score = 20;  //we use let here because when you guess wrong, this initial number will get lower.
document.querySelector('.number').textContent = secretNumber; //We can test by refreshing the browser, and random numbers 1-20 appear!

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess); //numbers entered into the guess input are strings, so they have to be converted using Number
    //Now let's add a message if you click guess with no number added to the input field
    if (!guess) {
        document.querySelector('.message').textContent = 'Feed me number or perish!';
    } else if (guess === secretNumber) {
         document.querySelector('.message').textContent = 'You guessed, you wizard, you!';
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Your number is too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game..wah wah wah!';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Your number is too low!';
    score--;
    document.querySelector('.score').textContent = score;
    } 
});

//Now let's ensure our score decreases when we guess wrong
    //To start, we'll create a score variable, which we'll place right under the const secretNumbers declaration