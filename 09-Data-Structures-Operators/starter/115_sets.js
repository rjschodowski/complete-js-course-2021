'use strict'

//SETS

//sets are collections of unique values.

//Below, let's create a new 'order' set...

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
    [weekdays[6]]: {
      open: 0,
      close: 24,
    }
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

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(orderSet); //All duplicates are gone in the console. Only pasta, pizza, and risotto show.

//Arrays and strings are iterables

//You can pass in a new set:
console.log(new Set('Roberto')); //each letter is its own string

//How to get the size of a set:

console.log(orderSet.size);

//How to check if something is in a set:
console.log(orderSet.has('Pizza')); //console states 'true', so we know it is there.

//How to add to a set:
console.log(orderSet.add('garlic bread'));
console.log(orderSet.add('garlic bread'));

//How to delete from a set:
console.log(orderSet.delete('garlic bread'));
// orderSet.clear(); //this deletes everything from the set.
console.log(orderSet);

//The main use of sets is to remove duplicate values

//How to retrieve data from a set

//example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
