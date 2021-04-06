'use strict';

// console.log(me); //var was hoisted, but to undefined
// console.log(job); //error-cannot be accessed before initialization
// console.log(year); //error-cannot be accessed before initialization

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

//Functions

// console.log(addDecl(2, 3)); //able to call it before it was defined in the code.
// console.log(addExpr(2, 3)); //Error-cannot access before initialization
// console.log(addArrow(2, 3)); //Error-cannot access before initialization

// function addDecl(a, b) {
// 	return a + b;
// }

// const addExpr = function (a, b) {
// 	return a + b;
// }

// const addArrow = (a, b) => a + b;


//Example

if (!numProducts) deleteShoppingCart;

var numProducts = 10; //numProducts here is 'undefined' due to hoisting

function deleteShoppingCart() {
	console.log('All items are deleted!');
} 

//Var variables are properties of the 'window' object, but not const or let. Var variables will create a property
//on the global window object.
//And that can have some implications in some cases.

var x = 1;
let y = 2;
const z = 3;

console.log(window.x); //True
console.log(window.y); //False
console.log(window.z);  //False