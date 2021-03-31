'use strict';

//Now we want to change the background color to green when you win the game and the number's box width. 

const secretNumber = Math.trunc(Math.random() * 20) + 1; 
let score = 20;  
document.querySelector('.number').textContent = secretNumber; 

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


//When there is no input    
    if (!guess) {
        document.querySelector('.message').textContent = 'Feed me number or perish!';

//When player wins
    } else if (guess === secretNumber) {
         document.querySelector('.message').textContent = 'You guessed, you wizard, you!';
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
