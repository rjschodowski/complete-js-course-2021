'use strict';

const rj = {
    firstName: 'R.J.',
    lastName: 'Schodowski',
    age: 39,
    friends: ['Huri', 'David', 'Dan']
};
console.log(rj);

//The first way of getting a property: DOT NOTATION

//So, to access my last name, do this:

console.log(rj.lastName);

//The second way is: BRACKETS NOTATION

console.log(rj['lastName']);    /*

We can actually put any expression that we'd like, so we don't have to explicitly write the string here,

but instead we can compute it from some operation because remember that an operation is basically an expression.

So something that produces a value and so we can put that here, inside the brackets.

*/
/*

imagine that we had a variable in which we store the repeating part in first name and last name (ie: name).
So we have name here in both. Let's store just that inside of a variable.
*/
const nameKey = 'Name';  //Now we can use that variable to get both the first and the last name.
console.log(rj['first' + nameKey]);
console.log(rj['last' + nameKey]);

/*

So what will happen here is that as JavaScript sees this line of code, it will start by executing this plus operation

and it will create a string first name. And then it will go to the rj object and retrieve that property. And the same

will happen for the last name here and the second line of code. And that's how we get R.J. and Schodowski.

*/



//When do we use DOT NOTATION and when do we use BRACKET NOTATION?

/*

When we need to first compute the property name, like we did here with the first and last name, then we have to use the

bracket notation. In any other case, just use the dot notation.

*/


//Another example of needing to use BRACKET NOTATION

/*

Let's say that we don't know yet which property we want to show, and instead we get this information from some
user interface. For that we can use the prompt function.
*/

const interestedIn = prompt('What do you want to know about R.J.? Choose between firstName, lastName, age, and friends');
console.log(interestedIn);  //the prompt shows up, and when typing in one of these options, it renders the option name,
//such as firstName, age, etc.

//To get the prompt to return an actual value from the object, we need to use BRACKET NOTATION. (Dot notation won't work).

/*If we try dot notation (jonas.interestedIn), undefined is what we get because we are trying to access a property on an
object that does not exist. So rj does not have a property called 'interestedIn', right? Therefore the result of trying
to access 'interested in' on rj is undefined. */

/*
what we need to do here is instead of the dot notation, use the brackets notation, because then we can put any expression
here, which in this case will be interestedIn. JavaScript will now come here and replace 'interestedIn' with the actual
value of the variable. That's the one that will be looked up on the rj object.
*/

console.log(rj[interestedIn]);
