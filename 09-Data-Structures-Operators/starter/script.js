'use strict'
//Optional Chaining - If a certain property in an object doesn't exist, UNDEFINED is returned
const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

const openingHours = {

  [weekdays[0]]: {
    open: 12,
    close: 22,
  },
  [weekdays[1]]: {
    open: 11,
    close: 23,
  },
  [weekdays[2]]: {
    open: 0,
    close: 24,
  },
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0,
      close: 24,
    },
  };

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6-enhanced object literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex, mainIndex, time, address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}. Watch for the flashy schoolbus!`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your tasty pasta with ${ing1}, ${ing2}, and ${ing3}.`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    return [this.main[mainIngredient], this.other[otherIngredients]];        
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

console.log(restaurant.openingHours.mon.open);



//OPTIONAL CHAINING

//We can check if a property exists before we call it.


console.log(restaurant.openingHours.mon?.open); /*Here we are checking to see if 'mon' exists. So only if Monday exists,

then this open property will be read from there. But if not, then immediately undefined will be returned.*/

//You can check for multiple instances of optional chaining. For example:

console.log(restaurant.openingHours?.mon?.open);
  

//Example


const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

/*what I want to do is to loop over this array and then log it to the console, whether the restaurant is open or closed

on each of the days. We'll use a for/of loop to loop through the values (days of the week) of an iterable object

(in this case, the 'days' array).*/

for(const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}.`);
}


//Optional Chaining for Calling Methods

//We can check if a method exists before we call it.

//Here let's check if the order method exists:

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.'); //Checking here to see if 'order' exists


//Optional Chaining for Calling Arrays

//We can check to see if an array is empty

const users = [{name: 'R.J.', email: 'rjschodowski@rjscodes.com', age: 40}];

console.log(users[0]?.name ?? 'User array empty.') //We're checking to see here if user [0] exists.


/* Get used to this optional chaining operator because we almost always use it together with the nullish coalescing 
operator */

