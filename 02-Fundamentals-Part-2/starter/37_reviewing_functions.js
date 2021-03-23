'use strict';

//the return statement will return code and immediately exit the function.

// -1 or 9999 are standard numbers to indicate a non numerical value.

// Let's use an if/else statement to see if R.J. and Babe Ruth are ready to retire.


const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} already retired.`);
    }
    return -1;
}

console.log(yearsUntilRetirement(1981, 'R.J.'));
console.log(yearsUntilRetirement(1895, 'Babe Ruth'));

