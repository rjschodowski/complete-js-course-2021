//Spread operator

//The spread operator is used to expand an array into all its elements. Basically, unpacking an array's elements at once.

const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];
console.log(newArr);

/*we can use the spread operator whenever we would otherwise write multiple values separated by commas.*/

//Here an example of using the spread operator with the restaurant object we've been working with:

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
  }
};

//Here we are adding an item to the main menu:

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

//By using a spread operator, we are writing a new array by adding another element to the current array


//IMPORTANT TO REMEMBER
/* Now you might have noticed that the spread operator is actually a bit similar to destructuring, because it also helps us
get elements out of arrays.

Now, the big difference is that the spread operator takes all the elements from the array and it also doesn't create new
variables.

As a consequence, we can only use it in places where we would otherwise write values separated by commas.*/



//Copy array

const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 or more arrays together

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);  


//The spread operator works on iterables are arrays, strings, maps, sets, but NOT objects.

//Let's try it on a string:

const str = 'Roberto';
const letters = [...str, ' ', 'S.'];
console.log(letters);

//IMPORTANT TO REMEMBER: we can only use the spread operator when building an array, or when we pass values into a function.


//Let's now write our own function that accepts multiple arguments and then use the spread operator to actually pass those
//arguments.


//Real-world example

// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Let\'s make pasta! Ingredient 2?'), prompt('Let\'s make pasta! Ingredient 3?')];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);  //This is so much easier than calling it like restaurant.orderPasta(ingredient[0], etc)


//Objects

const newRestaurant = {founded: 1998, ...restaurant, founder: 'Gio Farina'};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Bambini';
console.log(restaurant.name);
console.log(restaurantCopy.name); //This shows we can make a copy of an object and even change property values.



