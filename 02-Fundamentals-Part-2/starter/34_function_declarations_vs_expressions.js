'use strict';

//FUNCTION DECLARATIONS

function calcAge1(birthYear) {
    return 2021 - birthYear;
}

//calcAge1(1985);

//I need to turn this into a new variable that I can call so then I'll get the new age value. So,

const age1 = calcAge1(1985);
//Now I'll print this to the console, so
console.log(age1);

//Dude, it worked! The console printed 36. So in other words, the calculation of Fulano X's age as of 2021 is 36, since
//he entered that he was born in 1985.


//FUNCTION EXPRESSIONS


// function (birthYear) {
//     return 2021 - birthYear;  //function expressions don't have a name followed by the word function
// }

//Now we have to store all that into a variable, and that variable will then be the function.

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

//We call this function the same way as in declaration functions

const age2 = calcAge2(1985);
console.log(age1, age2);


// You can call a function declaration before you define it. (You can't for a function expression, tho.)



