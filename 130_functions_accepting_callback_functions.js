'use strict'

//SUPER IMPORTANT LESSON - ONE OF THE MOST IMPORTANT IN ENTIRE COURSE!

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//Higher Order Function

const transformer = function(str, fn) {
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript rocks dude!', upperFirstWord);

// oneWord and upperFirstWord are the callback functions in this example

const greeting = function (){
    console.log('Hey you!');
    alert('Hey you!');
}

document.body.addEventListener('click', greeting);  //greeting is the callback function in this example

//Call back functions are used all the time in JS.

//They allow up to create reusable pieces of code, rather than jumbling all of
//it into one big piece

//Call backs allow for us to create abstraction.