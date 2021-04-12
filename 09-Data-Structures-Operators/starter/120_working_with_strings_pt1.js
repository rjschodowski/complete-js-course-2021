'use strict'

//Working with Strings Pt. 1


const airline = 'TAP Air Portugal';
const plane = 'A320'; 

console.log(plane[0]);

//Strings also have methods. Here are some of them:

//Indexof

console.log(airline.indexOf('r')); //returns 6, because r is positioned in the sixth place

//To find the last occurrence of a letter in this case, use lastIndexOf:

console.log(airline.lastIndexOf('r')); //returns 10


//You can extract a part of a string using the slice method

console.log(airline.slice(4)); //returns Air Portugal since places 0-3 were deleted (TAP and ' ') and place 4
//(A from Air) is where the string begins.

//The new result is called a sub string, and it doesn't change the underlying original string, because it's not possible
//to mutate strings because they are primitives.

console.log(airline.slice(4, 7)); //Here we are setting a begin and end parameters for the string we are slicing.
//This returns 'Air' because we start at space 4, which is A from Air, and we end at space 7, which is the space right after
//the r from Air. So everything after Air is sliced off, just as everything before Air is also sliced off.


//Now let's try to extract the first word without hard coding the parameters

console.log(airline.slice(0, airline.indexOf(' '))); //returns TAP

//Now let's extract the last word

console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //returns the last word: Portugal


//You can also use negative values for slicing. The result will be that it will take off from the end of the string.
//Example:

console.log(airline.slice(-1)); //returns 'l' from Portugal...the last letter.
console.log(airline.slice(1, -1)); //returns AP Air Portuga...1 slices off T and -1 slices off l


const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E')
  console.log('You got the middle seat...meh!');
  else console.log('You got lucky!');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');


//If you wonder why these primitive strings have methods, it's because JS converts the strings to objects, which can 
//then execute methods. Then, when the method's operation is completed, JS converts it back to a string.







