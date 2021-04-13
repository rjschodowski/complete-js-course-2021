'use strict'

//Working with Strings Pt. 3


//Split method
//The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and
//returns the array.

console.log('a+very+nice+day'.split('+')); //returns (4) ["a", "very", "nice", "day"]
console.log('R.J. Schodowski'.split(' ')); //returns (2) ["R.J.", "Schodowski"]

const [firstName, lastName] = 'R.J. Schodowski'.split(' '); //firstName becomes variable that has R.J., and lastName that has Schodowski

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); //the JOIN method joins each string array item into one combined string with ' ' in between words in this case.

console.log(newName);

const capitalizeName = function(name) {
    const names = name.split(' ');
    const namesUpper = [];

    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        //another way you can do this:
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
console.log(namesUpper.join(' '));
    
};

capitalizeName('jessica ann smith davis');
capitalizeName('ooday schodowski');


//Padding a String
//The padStart() method pads the current string with another string (multiple times, if needed) until the resulting
//string reaches the given length. The padding is applied from the start of the current string.

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); //returns                  +++++++++++Go to gate 23!
console.log('rj'.padStart(25, '+')); //returns                     +++++++++++++++++++++++rj
console.log('abcdefghijklmnopqrstuv'.padStart(25, '+')); //returns +++abcdefghijklmnopqrstuv

//All are 25 spaces in length, and whatever space is left over after the initial string, the + is added until it reaches
//25 spaces in these examples.

//Now for padEnd()....
console.log(message.padStart(25, '+').padEnd(35, '+')); //returns +++++++++++Go to gate 23!++++++++++.
//Now there are 35 total spaces, and to make 35 total, 10 + signs are added to the end of the 
//'+++++++++++Go to gate 23! string.


//Real-World Example: Masking credit card numbers and only displaying the last 4 digits

const maskCreditCard = function (number) {
    const str = number + ''; //this line of code converts the credit card numbers to strings
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};

console.log(maskCreditCard(84756783));
console.log(maskCreditCard(84756794858475453));
console.log(maskCreditCard(74100085599744610));


//Repeat Method - repeats the same string x amount of times

const message2 = 'Severe weather...All departures delayed...';
console.log(message2.repeat(4)); //returns Severe weather...All departures delayed...Severe weather...All departures delayed...Severe weather...All departures delayed...Severe weather...All departures delayed...


//Another real world example

const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${':)'.repeat(n)}`);
};

planesInLine(2);
planesInLine(10);
planesInLine(4);
//returns There are 2 planes in line :):)
// There are 10 planes in line :):):):):):):):):):)
// There are 4 planes in line :):):):)






