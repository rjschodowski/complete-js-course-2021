'use strict';

//One of the most used FOR LOOPS is to loop through ARRAYS.

const rj = [
    'R.J.',
    'Schodowski',
    2021 - 1981,
    'web developer',
    ['David', 'Huri', 'Dan'],
    true
];
const types = [];

for (let i = 0; i < rj.length; i++) {
    //reading from rj array
    console.log(rj[i], typeof rj[i]); 

    //filling the types array
    // types[i] = typeof rj[i];

    //Here is another cleaner way of doing it:
    types.push(typeof rj[i]);
}
// what I want to do now is to create a new array which will contain all the types for all these elements.

//To do this, we'll first add const types = []; right after the rj array (see above)

//Next, we'll add to the for loop after the initial console.log line(see above)

//Last, let's see if this newly filled array works.
console.log(types);

//***IMPORTANT*** Let's try a more practical example:

const years = [1991, 2007, 1969, 2020];
const ages = []; //this will contain the calculated ages in an array
for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}

console.log(ages);

//CONTINUE & BREAK statements

//CONTINUE
  //this is to exit current iteration of the loop and continue to the next one

//BREAK
 //this is used to completely terminate the loop

//Here's an example of CONTINUE with the previous rj loop
console.log('----ONLY STRINGS EXAMPLE----');

for (let i = 0; i < rj.length; i++) {
    if (typeof rj[i] !== 'string') continue;
    
    console.log(rj[i], typeof rj[i]);
}

console.log('----BREAK WITH NUMBER EXAMPLE----');

for (let i = 0; i < rj.length; i++) {
    if (typeof rj[i] === 'number') break;
    
    console.log(rj[i], typeof rj[i]);
}
//Notice in the console that once a number (in this case 40) is detected, nothing more is printed to the console.
//The loop is terminated completely.

