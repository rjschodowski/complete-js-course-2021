'use strict';


//Destructuring Objects

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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
};
  restaurant.orderDelivery({
    time: '22:30',
    address: '123 Sesame Drive',
    mainIndex: 2,
    starterIndex: 2,
  });


//This is an example of how you destructure an object. Note that the order of properties turned to variables does not matter.
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

//Destructuring an object can be very useful, especially when working with API data.

//Example of assigning properties new names:

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

//Example of setting default value if we get code from somewhere else that isn't coded in for us already.

const { menu = [], starterMenu: starters = [] } = restaurant
console.log(menu, starters); //Menu is set to a default so it can be filled in with data later. Starters retrieves the data that is already coded within the object.


//Mutating variables while destructuring objects

let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

({a, b} = obj);
console.log(a, b);  //Here we mutated a from 111 to 23, and b from 999 to 7


//Nested objects

// const { fri } = openingHours;
// console.log(fri);   //We are retrieving information (Friday's opening hours), which is nested withint openingHours. 
//OpeningHours is also nested in the restaurant parent object. 

//Now let's try to extract Friday's open and close properties:

// const { fri: { open, close } } = openingHours;
// console.log(open, close);

//If you wanted to reassign values to these properties, you could do this (as an example):

const { fri: { open: o, close: c } } = openingHours;
console.log(open, close);

/*So many times in JavaScript,

we have functions with a lot of parameters.

But then it can be hard to know the order of parameters

for someone that is using this function.

And so instead of defining the parameters manually,

we can just pass an object into the function as an argument,

and the function will then immediately destructure

that object.*/

//Example (orderDelivery function. See above for the inserted function code)...

