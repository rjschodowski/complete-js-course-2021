// //10. Values and Variables


// /*let js = 'amazing';
// console.log(40 + 50);

// let firstName = "R.J.";
// console.log(firstName);

// let country = "USA";
// let continent = "North America";
// let population = "331.42 million";

// console.log(country);
// console.log(continent);
// console.log(population);
// */


// 12. Data Types


// // 7 Primitive Data Types
// //Numbers, strings, booleans, (these are the three most important), undefined (empty value),null (empty value), symbol, and BigInt


// let javascriptIsFun = (true);
// // console.log(javascriptIsFun);
// // console.log(typeof true);
// // console.log(typeof 23);
// // console.log(typeof javascriptIsFun);
// // console.log(typeof 'whoa man');

// javascriptIsFun = "'Yes!!!!!'"

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1999;

// console.log(typeof year);

// console.log(typeof null);


// 13. let, const, and var

//let can be reassigned different values eg:

// let age = 99. You can change that to age = 2, or any other age.

//const variables cannot be changed eg: birthYear = 1981;
	//const variables are immutable and cannot be empty, eg: const job; no se puede hacer eso!

	//Rule of thumb: use const by default unless you are certain the variable's value will have to change at some point


// 14. Basic Operators


/*Operators - definition

An operator allows us to transform values

or combine multiple values

and do all kinds of work with values.

There are many categories of operators

like mathematical operators, comparison operators

logical operators, assignment operators, and many more. 

*/


// //Mathematical Operations
// const now = 2055;
// const ageRJ = now - 1981;
// const ageAddye = now - 2011;
// console.log(ageAddye, ageRJ);

// console.log(ageRJ * 2, ageAddye / 10);

// //Common Operators

// // Common operators: +, -, *, **, =, +=, -=, ++, --, *=, etc

// //Comparison Operators

// // <, >, >=, <=

// console.log(ageRJ >= ageAddye);

// console.log(now - 1981 > now - 2011);


//15. Operator Precedence


// const now = 2055;
// const ageRJ = now - 1981;
// const ageAddye = now - 2011;

// console.log(now - 1981 > now - 2011);

//Operator precedence table below at this link:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// let x, y;
// x = y = 25-10-5;
// console.log(x, y);

// const averageAge = (ageRJ + ageAddye) / 2;
// console.log(ageRJ, ageAddye, averageAge);

/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.


*/

// const bmiMark = (100 / 1.65 ** 2);
// console.log(bmiMark);

// const bmiJohn = (80 / 1.5 ** 2);
// console.log(bmiJohn);

// const markHigherBMI = (bmiMark > bmiJohn);
// console.log(markHigherBMI);


//17. Strings and Template Literals

// const name = 'R.J.';
// const job = 'web dever';
// const birthYear = 1981;
// const year = 2021;

// const rj = 'Hey, I am' + ' ' + name + ',' + ' a' + ' ' + job + ' and I am' + ' ' + (year - birthYear) + ' years old.'
// console.log(rj);

// //template literal version (much easier!)

// const rjNew = `I'm ${name}, a ${job} and I am ${(year - birthYear)} years old!`;
// console.log(rjNew);

// // Backticks (``) can be used for regular strings. eg: `Just another string on a sun shiny day.`

// // Multiple Line Strings. Just hit enter, no need to do it the old way with \n\

// console.log(`This is a
// 	multiple
// 	line string, and look
// 	how
// 	easy it 
// 	is to make!`)

/* 
This is actually going to be immensely useful

later when we start building HTML from JavaScript.

So by then we will be able to use these backticks

to create multiline HTML elements

to insert them onto a page, dynamically.
*/


//18. Taking Decisions: if/else statements

// const age = 11;

// if(age >= 16) {
// 	console.log('Ricky is old enough to drive!')
// } else {
// 	const yearsLeft = 16 - age;
// 	console.log(`Ricky is too young. Wait another ${yearsLeft} years more.`);
// }

// const birthYear = 2002;
// let century;

// if (birthYear <=1999) {
// 	century = 20;
// } else century = 21;
// console.log(century);


// 19. Code Challenge 2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/

const bmiMark = (100 / 1.65 ** 2);
const bmiJohn = (80 / 1.5 ** 2);
const markHigherBMI = (bmiMark > bmiJohn);

if (bmiMark > bmiJohn) {
	console.log(`Mark's BMI is higher than John's!`);
} else {
	console.log(`John's BMI is higher than Mark's!`);
};

