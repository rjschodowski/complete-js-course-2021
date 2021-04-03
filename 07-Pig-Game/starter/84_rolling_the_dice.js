//Create and follow a flowchart to help break down a large problem into smaller problems.
//Follow the flowchart to help guide you step by step in building your project.
//Notice how in this project we first identified our selected elements we'll click on,
//then we set the score to 0, and are now working on programming the dice roll functionality,
//display the dice, check for a rolled 1, etc. This is following the flowchart.

'use strict';

//Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Rolling dice functionality

btnRoll.addEventListener('click', function () {
    //1. Generate dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. Check for dice rolling 1    

    if(dice !== 1) {
//Add dice to current score
        currentScore += dice;
        current0El.textContent = currentScore;  //Change later
    } else {
//switch to next player

    }
});


