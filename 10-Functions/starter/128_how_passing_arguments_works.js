'use strict';

//Functions - How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const joe = {
    name: 'Joe Shmo',
    passport: 5465465135551
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;

    if(passenger.passport === 5465465135551) {
        alert('Check in successful.')
    } else alert('Wrong passport!')
};  

checkIn(flight, joe);
console.log(flight);
console.log(joe);