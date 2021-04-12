'use strict'

//Working with Strings Pt. 2


//Changing the casing of a string

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());


//Fix capitalization in a name

const passenger = 'ROberT';
const passengerLower = passenger.toLowerCase();  //To fix this we first make the name all lowercase
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1); //Then we take the first letter
//and make it upper case 'R' and add to it the rest of the name 'obert'.
console.log(passengerCorrect); //Boom!


//Comparing Emails

const email = 'hello@rj.robot.com';
const loginEmail = '  Hello@rj.roBot.com';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); //Fixed!

//Here's an even better way to do that in one line of code:

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);


//Replacing parts of strings

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');

console.log(priceUS);


const announcement = 'All passengers come to door 23. Door 23!';
console.log(announcement.replace('door', 'gate'));

//For now we'll use a regular expression so that all instances of 'door' will convert to 'gate'
//Soon replaceAll will be a method we can use to do the same thing, but as of 4/12/21 it doesn't work yet.

console.log(announcement.replace(/door/g, 'gate'));


//Booleans
const plane = 'A320neo';
console.log(plane.includes('A320'));  //true
console.log(plane.includes('Boeing'));  //we see this is false, since Boeing is not in the plane name.

console.log(plane.startsWith('Air')); //returns false because the string doesn't start with 'Air'

if(plane.startsWith('A') && plane.endsWith('neo')) {
  console.log('Part of the NEO family.');
}


//Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed to board this plane.');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I got a laptop, Food, and Pocket Knife.');
checkBaggage('Socks and a camera.');
checkBaggage('Snacks and a gun.');


