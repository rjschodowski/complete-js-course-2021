'use strict';

// console.log(this); //Globally 'this' is a window object

const calcAge = function (birthYear) {
	console.log(2037 - birthYear);
	// console.log(this);
};

calcAge(1981);

//Arrow functions have no 'this' keyword, so in this case 'this' is global scope and returns the window object
const calcArrow = birthYear => {
	console.log(2037 - birthYear);
	// console.log(this);
}

const rj = {
	year: 1981,
	calcAge: function () {
		// console.log(this);
		console.log(2037 - this.year);
	},

};

rj.calcAge();

/*
Important information regarding 'this' for this example:



So I keep saying that the this keyword will point

to the object that is calling the method, right?

And that means that the this keyword will not simply point

at the object in which we wrote the method.

So here we wrote the calcAge method inside

of the 'rj' object.

And so we might think

that that is the reason why the this keyword points

to 'rj', but that is not true.

The reason that the this keyword will point

to 'rj' in this case is

because 'rj' was the object calling that method

and that's a subtle, but very important difference.
*/

const matilda = {
	year: 2017
};

matilda.calcAge = rj.calcAge;
matilda.calcAge();


//The 'this' keyword points to the object, which in this case is Matilda.

/*
So even though the method is written here inside of the rj object, the this keyword will still point to Matilda,
if it is Matilda, who calls the method.
*/