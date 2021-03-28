    'use strict';

//functions can be placed inside objects

// const rj = {
//     firstName: 'R.J.',
//     lastName: 'Schodowski',
//     birthYear: 1981,
//     job: 'web developer',
//     friends: ['Huri', 'David', 'Dan'],
//     hasDriversLicense: true,

//     calcAge: function(birthYear) {    //Any function attached to an object is called a METHOD, like in this example
//         return 2021 - birthYear;
//     }
// };

//If you think of functions as simply values, then you'll notice that a METHOD is a property of an object.
    //For example, in the OBJECT rj, we have a Boolean value (hasDriversLicense), an array 
    //value (friends), some string values (ie: job), and a function value (calcAge).

//How to access the calcAge value in the rj object:

// console.log(rj.calcAge(1981));  // <---- adding 1981 as a parameter is less than ideal since it's already a property of the rj object.
//Here's a better way of doing it with a JS keyword 'this'

// calcAge: function () {
//     return 2021 - this.birthYear;
//     }
// };
// console.log(rj.calcAge());

//If you need to access the age in more than one place of your hypothetical application, rather than doing this:

// console.log(rj.calcAge());
// console.log(rj.calcAge());
// console.log(rj.calcAge());

//You can instead calculate the age once, store it in the object, and then retrieve the age as a property from the object
//whenever you need it. Here's how:
const rj = {
    firstName: 'R.J.',
    lastName: 'Schodowski',
    birthYear: 1981,
    job: 'web developer',
    friends: ['Huri', 'David', 'Dan'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2021 - this.birthYear;   //<--- Using this.age is adding age as a property to the object. It is like in the previous example when you added rj.location = 'Michigan';
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge} year-old ${job}.`
    }
};

console.log(rj.calcAge());
//Now we can just retrieve the age property we already calculated before.
console.log(rj.getSummary);
