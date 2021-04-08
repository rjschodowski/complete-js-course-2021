//REST PATTERN AND PARAMETERS




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

//Whereas spread operator takes values out of arrays, rest patterns uses the same syntax, but packs elements INTO an array.



//DESTRUCTURING

//Rest operator arrays example

const arr = [1, 2, ...[3, 4]]; //SPREAD operator because on right side of the =

const [a, b, ...others] = [1, 2, 3, 4, 5]; //REST operator because it is on the left side of the =
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(pizza, risotto, otherFood);


//The REST element must be the last element in the destructuring assignment...otherwise, how would JavaScript know until
//when it should collect the rest of the array?


//Rest operator objects example

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);



//FUNCTIONS  (rest parameters)

//Let's start with a simple 'add' function

// const add = function(...numbers) {
//   console.log(numbers);
// }

// add(2, 3);
// add(5, 3, 7, 2);
// add(5, 4, 3, 7, 8, 9, 4, 1, 2, 1, 9, 7);  //each of these parameters are placed into arrays using REST operator with parameters

//Now let's complete the function and add up these numbers

const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
}

add(2, 3);
add(5, 3, 7, 2);
add(5, 4, 3, 7, 8, 9, 4, 1, 2, 1, 9, 7);

const x = [23, 5, 7];
add(...x);

//Rest operator example with ordering pizza
restaurant.orderPizza('mushrooms', 'pepperoni', 'onions', 'extra cheese', 'spinach');



/*IN SUMMARY


So the spread operator is used

where we would otherwise write values, separated by a comma.

On the other hand the rest pattern is basically used

where we would otherwise write variable names

separated by commas.

So, again the rest pattern can be used

where we would write variable names, separated by commas

and not values separated by commas.*/

