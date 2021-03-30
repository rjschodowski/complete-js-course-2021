'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number, dude!!!;'
console.log(document.querySelector('.message').textContent = 'Correct number, dude!!!');

//Let's manipulate the number and score classes now:

document.querySelector('.number').textContent = 777;
document.querySelector('.score').textContent = 5994321;

//Now let's manipulate the input field (class is guess)
    //.value is used to access and manipulate input fields

document.querySelector('.guess').value = 999;
console.log(document.querySelector('.guess').value);