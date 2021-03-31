'use strict';

//Let's start with the 'check' button and add an event listener

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess); //numbers entered into the guess input are strings, so they have to be converted using Number
    //Now let's add a message if you click guess with no number added to the input field
    if (!guess) {
        document.querySelector('.message').textContent = 'Feed me number or perish!'
    }
});