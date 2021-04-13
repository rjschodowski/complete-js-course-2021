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

//Is the same thing...

const flightNum = flight;
const passenger = joe;

/*

In summary, passing a primitive type (flightNum in this example) to a function is really just the same as creating a

copy outside of the function. So the value is simply copied.

On the other hand, when we pass an object to a function (passenger in this example), it is really just like copying an object.

So whatever we change in a copy will also happen in the original.

*/