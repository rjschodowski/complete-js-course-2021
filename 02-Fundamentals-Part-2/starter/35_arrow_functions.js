'use strict';
//Let's compare from the previous lesson to see what an arrow function is.

//FUNCTION EXPRESSION

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}
//ARROW FUNCTIONS

birthYear => 2021 - birthYear; //We need to save this in a variable, so let's do that:

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1985);
console.log(age3);
