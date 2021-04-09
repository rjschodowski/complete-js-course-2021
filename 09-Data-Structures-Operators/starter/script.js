'use strict'



console.log('----------------------The For-Of Loop--------------------------------------')


//See below past example for notes and examples

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




console.log('----------------------For-Of Loop Example--------------------------------------')


// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item); //item is just a chosen variable name. You could pick any name. See for yourself:

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const cibo of menu) console.log(cibo); //We get the same result, even naming the variable an Italian word :)

//NOTE THAT WE CAN STILL USE THE 'CONTINUE' and 'BREAK' KEYWORDS


//What if you want the current menu items and their current index location? We can do this:

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
for (const item of menu.entries()) {
  console.log(item);
  }

// console.log([...menu.entries()]);  //We do this here just to see what this actually is.
/*Here we see that it is basically an array,

which in each position contains a new array,

which contains the element,

and the element entity index number of that element

in the original array.*/

//If we wanted to print a nice menu, we could take advantage of this data.

//Here is a way to list it by using destructuring:

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//NOTE that i and el are variable names (short for item and element respectively).
//Also note that the + 1 is added to i so that in the menu list the first item will be numbered 1 instead of 0, as it is at position 0 in an array.



