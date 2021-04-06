'use strict';

//Note that real-life code shouldn't be this confusing; this is just an example to understand scoping

function calcAge(birthYear) {
	const age = 2037 - birthYear;
	

	function printAge() {
		let output = `${firstName}, You are ${age}, born in the year of ${birthYear}.`
		console.log(output);

		if (birthYear >= 1981 && birthYear <=1996) {
			//Creating new variable with same name as outer scope's variable
			const firstName = 'R.J.';
			//Reassigning outer scope's variable
			output = 'New output!!';
			const str = `Oh, and you're a millenial, ${firstName}.`;
			console.log(str);
		};
	}

	printAge();
	return age;
}

const firstName = 'Jonas';
calcAge(1991);