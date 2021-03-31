'use strict';

/*Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem) */

let secretNumber = Math.trunc(Math.random() * 20) + 1; 
let score = 20;  

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


//When there is no input    
    if (!guess) {
        document.querySelector('.message').textContent = 'Feed me number or perish!';

//When player wins
    } else if (guess === secretNumber) {
         document.querySelector('.message').textContent = 'You guessed, you wizard, you!';
         document.querySelector('.number').textContent = secretNumber; 
         document.querySelector('body').style.backgroundColor = '#60b347';
         document.querySelector('.number').style.width = '30rem';

//When guess is too high    
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Your number is too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game..wah wah wah!';
            document.querySelector('.score').textContent = 0;
        }
    } 
    
//When guess is too low    
    else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Your number is too low!';
    score--;
    document.querySelector('.score').textContent = score;
    } 
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...'; //here we reset the initial message
    document.querySelector('.score').textContent = score; //here we reset the score
    document.querySelector('.number').textContent = '?'; //here we reset the guessed number
    document.querySelector('.guess').value = ''; //here we reset the inputted number to a blank input section
    //Next we restore the background color and number box size
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});
