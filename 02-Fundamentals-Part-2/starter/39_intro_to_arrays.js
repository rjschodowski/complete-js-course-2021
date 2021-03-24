'use strict';

//ARRAYS INTRO

//Arrays are important DATA STRUCTURES, along with OBJECTS.

const friend1 = 'Joe';
const friend2 = 'Jim';
const friend3 = 'Jed';

//Two ways you can turn the friend names into an array:

// const friends = ['Joe', 'Jim', 'Jed'];

//or

const friends = new Array('Joe', 'Jim', 'Jed'); 

console.log(friends);
console.log(friends[1]);
console.log(friends.length)
console.log(friends[friends.length -1]);

friends[2] = 'Jay';
console.log(friends);

//Notice that the const variable 'friends' was able to be changed. Isn't that contradictory?
//Only primitive values are unchangeable, and arrays are not primitive, so they can be changed, therefore, we are able to change the friends array to different names.
//However, the entire array cannot be mutated, such as friends = ['Bob', 'Babe', 'Silas']

const firstName = 'R.J.';
const futureRj = [firstName, 'Schodowski', 2089 - 1981, 'junior developer', friends];

console.log(futureRj);

//Exercise

const calcAge = function (birthYear) {
	return 2089 - birthYear;
}

const years = [1981, 1990, 1967, 2002, 2011, 2020];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);   //this is to say, 2089 - 2020 = 69....you get the 2020 value from the years.length - 1 part
console.log(age3);