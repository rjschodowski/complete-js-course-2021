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

// const bmiMark = (100 / 1.65 ** 2);
// const bmiJohn = (80 / 1.5 ** 2);
// const markHigherBMI = (bmiMark > bmiJohn);

// if (bmiMark > bmiJohn) {
// 	console.log(`Mark's BMI is higher than John's!`);
// } else {
// 	console.log(`John's BMI is higher than Mark's!`);
// };


//20. Type Conversion and Coercion

/*

TYPE CONVERSION

So type conversion is when we manually

convert from one type to another.

On the other hand type coercion is when JavaScript

automatically converts types behind the scenes for us.
*/

// Converting strings to numbers

// const inputYear = '1991';
// console.log(Number(inputYear)); //this displays 1991 as an actual number, not a string
// console.log(Number(inputYear) + 18);

// //Converting numbers to strings

// console.log(String(23));


//TYPE COERCION

/*
So basically type coercion happens

whenever an operator is dealing

with two values that have different types.

So in that case,

JavaScript will then, behind the scenes,

convert one of the values to match the other value
*/

// console.log('I am ' + 23 + ' years old.')  //Type coercion automatically converts 23 from a number to a string in this instance.
// console.log('23' - '10' - 3); //The 23 and 10 strings were converted to numbers to give the result of 10. This is an instance of type coercion doing the opposite of the previous example.
// console.log('23' * '2'); //The strings here are converted to numbers since this is the only logical way the mulitiplication sign can be executed. (Same applies for division too.)
// console.log('23' > '18'); //Another instance of strings being converted to numbers to execute this boolean.

//only the addition sign can convert a number to a string, as in the first example above.


//21. TRUTHY AND FALSY

/*
FALSY values are values that are not exactly false,

but will become false when we try to convert them

into a boolean.

And in JavaScript, there are only five falsy values.



So, five falsy values and they are zero, the empty string,

undefined, null, and not a number, and that's it.


All of these five values will be converted

to false when we attempt to convert them to a boolean.
*/

//TRUTHY VALUES= values that will be converted to true.

	/*
	Any number that is not zero or any string that is not

	an empty string will be converted to true

	when we attempt to convert them to a boolean is TRUTHY.
	*/

// console.log(Boolean(0));  //this is falsy
// console.log(Boolean(undefined));
// console.log(Boolean('RJ'));
// console.log(Boolean({}));  //(empty objects are truthy, but empty strings ('') are falsy)

// const money = 0;
// if (money) {
// 	console.log("Don't spend it all!");
// } else {
// 	console.log('Get a job man!');
// } // Remember, 0 is considered FALSY, so JS did not execute the if statement. 


//23. EQUALITY OPERATORS

// const age = 18;
// if (age === 18) console.log('You just became an adult dude.') //=== is strict equality operator b/c it doesn't perform type coercion and only returns to when both values are exactly the same.

// == is loose equality operator, and it does perform type coercion

//Eg: console.log('18' == 18); will return value TRUE b/c it converts the string to a number, but using === returns FALSE because it is strict and does not perform type coercion.


//RULE OF THUMB - For clean code, avoid the == (loose eq. operators) as much as possible to avoid bugs in your code.
//Actually, pretend == doesn't even exist. It's better to do type coercion manually if it is needed than rely on the weirdness of ==.

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);

// if (favorite === 18) {
// 	alert('18 is a great number!')
// } else {
// 	alert('Your taste in numbers is foul!')
// };


//ELSE IF CONDITIONALS

// if (favorite === 18) {
// 	alert('18 is a great number!')
// } else if(favorite === 7) {
// 	alert('7 is also pretty cool!')
// }
// else {
// 	alert('Your taste in numbers is foul!')
// };


// //DIFFERENT OPERATOR


// if (favorite!== 18) alert('What is wrong with 18??');


//23. BOOLEAN LOGIC

//24. LOGICAL OPERATORS

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);  //this is the AND operator (&&)

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense || hasGoodVision);  //this is the OR operator (||)

// console.log(!hasGoodVision);  // the "!" is the NOT operator

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (shouldDrive) {
// // 	console.log("She's good to drive!")
// // } else {
// // 	console.log("Someone needs to driver her home.")
// // }

// const isTired = false;

// if (hasGoodVision && hasDriversLicense && !isTired) {
// 	console.log("She's good to drive!")
// } else {
// 	console.log("Someone needs to driver her home.")
// }


// 25. CODING CHALLENGE #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// const scoreAverageDolphins = ((96 + 108 + 89) / 3);
// const scoreAverageKoalas = ((88 + 91 + 110) / 3);

// if (scoreAverageDolphins > scoreAverageKoalas) {
// 	console.log('Dolphins win!')
// } else if (scoreAverageDolphins === scoreAverageKoalas) {
// 	console.log("It's a tie, folks!")
// }
// else {
// 	console.log('Koalas win!')
// }


// 26. THE SWITCH STATEMENT

/*

Let's learn about the switch statement,

which is an alternative way

of writing a complicated if/else statement,

when all we want to do is to compare one value

to multiple different options*/


// const day = 'Sunday'

// switch(day) {     // day === 'Monday'
// 	case 'Monday':
// 		console.log('Plan your weekly schedule.');
// 		console.log('Go to Costco to buy food.');
// 		break;
// 	case 'Tuesday':
// 		console.log('Go to Meijer to buy other food.');
// 		break;
// 	case 'Wednesday':
// 	case 'Thursday': 
// 		console.log('Work extremely hard on JavaScript course.');
// 		break;
// 	case 'Friday':
// 	case 'Saturday':
// 		console.log('Work even harder on this course.');
// 		break;
// 	case 'Sunday':
// 		console.log('Rest. Simply rest.');
// 		break;
// 	default:
// 		console.log('Not a valid day.');
// }


//27. STATEMENTS AND EXPRESSIONS


/*
EXPRESSION - So essentially, an expression is a piece of code

that produces a value. 

		Eg: 3 + 4, true && false &&!false, 1981

Expressions produce values,

and that statements are like full sentences

that translate our actions.


STATEMENT - The statement is like a bigger piece of code

that is executed

and which does not produce a value on itself.

		Eg: if (11 > 2) {
			const str = '11 is greater than 2';  <--- this doesn't produce a value; this is a statement.
		}

*/


//28. THE CONDITIONAL (TERNARY)  OPERATOR

//Similar to if/else, but written instead all in one line of code.

// const age = 40;
// age >= 18 ? console.log('I am over 18.') :
// console.log('I am still a minor.');

//A CONDITIONAL is an OPERATOR, which always produces a value; therefore it is also an EXPRESSION.

/*
So what this means is that if we have a value,

we can then assign that value to a variable.

So with this we can make the ternary operator really useful

to basically conditionally declare variables.
*/

// const age = 23;
// const drink = age >= 21 ? 'wine' : 'Koolaid';
// console.log(drink); //This conditional checks for age to see if person can drink alcohol or not.

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'Koolaid'}`);


//29. CODING CHALLENGE #4


/*Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/

const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${ bill + tip}`);


// 30. JAVASCRIPT RELEASES: ES5, ES6, and ESNEXT

/* transpiling back to ES5

is only necessary after your app is developed

and you want to ship it to your users.
*/

//ES6 Compatibility Table: https://kangax.github.io/compat-table/es6/



