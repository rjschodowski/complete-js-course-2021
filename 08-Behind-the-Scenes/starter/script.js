'use strict'

//Practicing Primitives and Objects


//Primitives example
let lastName = 'Schodowski';
let oldLastName = lastName;
lastName = 'Buell';
console.log(lastName, oldLastName);

//Object example/Reference types
const nicole = {
	firstName: 'Nicole',
	lastName: 'Schodowski',
	age: 36,
};

const marriedNicole = nicole;
marriedNicole.lastName = 'Buell';

console.log('Before marriage:', nicole);
console.log('After marriage:', marriedNicole);  //the result is that both nicole and marriedNicole's last names are both Buell.

/*
What'd this happen? This happened because

when we attempted to copy the original Nicole object,

it did in fact not create a new object in the heap.

So, this one again, is not a new object in the heap.

It's simply just another variable in the stack,

which holds the reference to the original object.

So, both of these two variables simply point

to exactly the same memory address in the heap.

And that's because in the stack,

they both hold the same memory address reference.
*/

/*VERY IMPORTANT: We cannot change a CONST variable's value in the stack, but we can if the variable is a LET.
Completely changing the object, or rather, assigning a new object to it, is completely different than simply changing a 
property*/



//How to actually copy and object and change one without changing the original one


//Copying objects

const nicole2 = {
	firstName: 'Nicole',
	lastName: 'Schodowski',
	age: 36,
};

const nicoleCopy = Object.assign({}, nicole2);
nicoleCopy.lastName = 'Buell';

console.log('Before marriage:', nicole2);
console.log('After marriage:', nicoleCopy); //And it worked! Keep in mind this only copies on the first level and it does not
//work for any object inside of the original object.


