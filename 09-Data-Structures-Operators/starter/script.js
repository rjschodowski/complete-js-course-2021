'use strict';

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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];

  },

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
};

//How to destructure an array into three variables at the same time:

// const arr = [2, 3, 4];

// const [x, y, z] = arr;  //though the [x,y,z] looks like an array, it isn't; it's just destructuring and assigning variables to each number

// console.log(x, y, z);

//So, to destructure 'categories' in the 'restaurant' object, we'll do this:

// const [first, second] = restaurant.categories;
// console.log(first, second); //Italian and Pizzeria appear in the console.

// const [third, fourth] = restaurant.categories;
// console.log(third, fourth); //This still prints Italian and Pizzeria, which is not what I want. How do I get 3rd and 4th then?

// const [ , , third, fourth] = restaurant.categories;
// console.log(third, fourth); //Voila! Just add a space for the item in the array you want to skip.

//If I want the first and third items in this array, I'd do this:

// const [first, , third] = restaurant.categories;
// console.log(first, third); //Boom! Just add in a space and that's it!



//Switching variables

//Let's say you want to switch your menu categories because the owner wants to rearrange and print new menus. Instead of 
//Italian being the first category and Vegetarian being the second (since we just made it second), the owner wants Vegetarian
//to be first and Italian second. Let's make the switch with destructuring:

let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];

console.log(main, secondary);  //Boom! We made the switch


//Receiving two return values from a function

const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);


//Nested Destructuring

//Let's say we want to destructure an array that has another array inside it. Here we go:

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested
console.log(i, j, k);


//Default values

const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r); //we don't have a number assigned to r, so since the default value is 1, r = 1.

