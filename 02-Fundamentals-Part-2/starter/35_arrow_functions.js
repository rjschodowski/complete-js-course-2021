'use strict';
//Let's compare from the previous lesson to see what an arrow function is.

//FUNCTION EXPRESSION

// const calcAge2 = function (birthYear) {
//     return 2021 - birthYear;
// }
//ARROW FUNCTIONS

birthYear => 2021 - birthYear; //We need to save this in a variable, so let's do that:

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1985);
console.log(age3);

// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement(1991));

//let's try now with 2 parameters: birthYear, firstName

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2046 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Ronjit'));
console.log(yearsUntilRetirement(1981, 'Ooday'));


//Difference between regular functions and arrow functions:

//Arrow functions do NOT get the 'this' keyword