'use strict'

//Nullish Coalescing Operator

//There is a problem with the number of guests if the number is zero. As shown below, when using the || shortcircuit, the
//result is 10 instead of 0. There is a solution to this type of problem below...


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

console.log('---------------HERE IS THE PROBLEM------------------------------');

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); //console prints 10 instead of 0.

 console.log('---------------HERE IS THE SOLUTION------------------------------');

 const guestCorrect = restaurant.numGuests ?? 10;
 console.log(guestCorrect);

/*So why does this work? It is because the nullish coalescing operator

works with the idea or with the concept

of nullish values instead of falsy values.

And nullish values are null and undefined.

That's it.*/

//NULLISH VALUES = null and undefined (NOT 0 or '')






