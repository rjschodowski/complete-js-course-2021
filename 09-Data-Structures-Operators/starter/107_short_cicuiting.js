'use strict'

//SHORT CICUITING

//the || and && uses ANY data type, return ANY data type, and does short-cicuiting



console.log('-------------------OR OPERATOR-----------------------------')


console.log(3 || 'R.J.'); //returns 3 in the console. (|| doesn't always have to be a true/false boolean)

/*So in this example for short circuiting,

in the case of the || operator,

short circuiting means that if the first value

is a truthy value,

it will immediately return that first value.

So that's exactly what we see here

with the three which is a truthy value. The other operand will not even be evaluated. This is

what is referred to as SHORT CICUITING*/

console.log('' || 'R.J.');  //answer: R.J.
console.log(true || 0); //answer: true
console.log(undefined || null); //answer: null, even though undefined and null are both falsy.

//Another example:

console.log(undefined || 0 || '' || 'Hola' || 23 || null); //Hola returns because it's the first truthy value


//Restaurant example//

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}. Watch for the flashy schoolbus!`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your tasty pasta with ${ing1}, ${ing2}, and ${ing3}.`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {        //Rest operator example here for ordering pizza
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

//Let's say that there might be a property on the restaurant object with the number of guests, but we don't know if it exists.
//We want to basically define a variable based on this number of guests. And we want to set a default value if this doesn't
//exist. Like this:

restaurant.numGuests = 54;
const guests1 = restaurant.numGuests ? restaurant.numGuests: 10;
// console.log(guests1); //Console prints 10, the default value, since numGuests wasn't it the restaurant object and is therefore
//undefined.

//Here's a simpler way of doing it:
const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
//As above, since numGuests is undefined, 10 is the selected default value

//But let's say we do add a numeric value to numGuests, like 54. We'll add this above the const guests1 line.
//Which value will be first to be truthy?

console.log(guests1, guests2); //The answer is 54, because now that it is defined, it is the first truthy value. Note that
//if numGuests = 0, it will not work because 0 is falsy.

console.log('-------------------AND OPERATOR-----------------------------')


//When it comes to short circuit evaluation, the AND operator works in the exact opposite way of the OR operator.

//the AND operator short circuits, when the first value is falsy.

console.log(0 && 'R.J.'); //0 prints to console since it's the first falsy value.

//When both values are truthy, it means that the evaluation continues and then simply the last value is returned.

console.log(7 && true);

/*The AND operator is only true

if all the operands are true.

And so, if the first one here is false,

then it means that the entire result of the AND operation

will already be false anyway.

And so there is no need to even look

at any of the other operands.*/

console.log('Hello'&& 89 && null && 'R.J.'); //null returns to the console here. Why?

/* Null is a falsy value

and therefore evaluation no longer needs to continue

because at this point, the whole result

of the end operation is gonna be false anyway.

And then as a result,

this is then simply the value that's gonna be returned

and it's short circuits the rest of the evaluation.*/


//Now for a practical example 

if (restaurant.orderPizza) {
  restaurant.orderPizza('extra cheese', 'onions');
};  //Here we are checking to see if orderPizza exists. 

//Here we are doing the same thing, but with the && operator instead

restaurant.orderPizza && restaurant.orderPizza('extra cheese', 'onions');


