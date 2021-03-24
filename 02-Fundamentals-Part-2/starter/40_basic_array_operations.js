'use strict';

//BASIC ARRAY OPERATIONS (METHODS)


//.push adds element to the end of an array
const friends = ['Joe', 'Jim', 'Jed'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

//.unshift adds element to the beginning of an array

friends.unshift('John');
console.log(friends);

// .pop removes last array element

const popped = friends.pop();
console.log(popped);
console.log(friends);

// .shift removes first array element

friends.shift();
console.log(friends);

//Index of - to find index location in an array

console.log(friends.indexOf('Jim'));

//Includes method (more useful and an ES6 method) states true or false if element is within array

console.log(friends.includes('Jim'));

if (friends.includes('Jim')) {
	console.log('You have a friend named Jim, yo.');
}