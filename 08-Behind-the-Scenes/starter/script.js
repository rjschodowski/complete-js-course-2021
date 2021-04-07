// const rj = {
// 	firstName: 'R.J.',
// 	year: 1981,
// 	calcAge: function () {
// 		// console.log(this);
// 		console.log(2037 - this.year);
// 	},
// 	greet: () => console.log(`Hey ${this.firstName}!`)  //Arrow functions do not have their own 'this' keyword, hence the 'undefined' return in the console.

// };
// rj.greet();  // rj is an object, and it is global. Therefore, 'this' right now is global, and this.firstName doesn't exist, hence the 'undefined' return.

//You should never EVER use an arrow function as a method.



//Another pitfall is when we have a function inside a method:

const rj = {
	firstName: 'R.J.',
	year: 1981,
	calcAge: function () {
		// console.log(this);
		console.log(2037 - this.year);

//Solution 1

// const self = this;  //self or that
// const isMillenial = function () {
// 	console.log(self.year >= 1981 && self.year <= 1996);
// };

//Solution 2
//The arrow function uses the 'this' keyword from its parent scope (its parent is calcAge, and calcAge's parent scope is Jonas).
//So in this case, the 'this' keyword is Jonas.
//Bottom line: An arrow function inherits the 'this' keyword from the parent scope.

//!!**&**This is a very useful case of when to use an arrow function**&**!!

const isMillenial =  () => {
	console.log(this);
	console.log(this.year >= 1981 && this.year <= 1996);
};

isMillenial();

	},
greet: () => console.log(`Hey ${this.firstName}!`)  //Arrow functions do not have their own 'this' keyword, hence the 'undefined' return in the console.

};
rj.greet();
rj.calcAge();

/*
 Functions also get access to an arguments keyword. So not just the this keyword, but also an arguments keyword.
Now, just like the this keyword, the arguments keyword is only available in regular functions.
*/

//Arguments keyword

const addExpr = function (a, b) {
	console.log(arguments);
	return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12); //This is totally legal to do

const addArrow = (a, b) => {
console.log(arguments);
return a + b;

addArrow(2,5,8,12); //This won't work because the 'arguments' keyword only exists in regular functions, not arrow functions.