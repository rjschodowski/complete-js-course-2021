'use strict'


//LOOPING OBJECTS

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

//Object.keys - Looping over property names aka 'keys'. 

//Here we are going to use the for/of loop to loop over the weekdays array


//PROPERTY NAMES

const properties = Object.keys(openingHours);
console.log(properties); //Here we get an array of the days of the week, which are the property names

//So now we can compute how many days the restaurant is open:

let openStr = `We are open ${properties.length} days a week! `;
for(const day of properties) {
  openStr += `${day}, `;
}
  console.log(openStr);


  //PROPERTY VALUES

  const values = Object.values(openingHours)
  console.log(values); //We get the values of open/close hours for each of the seven days of the week.


  //PROPERTY ENTRIES (to get values and names, or rather, the entire objects)

const entries = Object.entries(openingHours);
console.log(entries);

for(const [key, { open, close }] of entries) { //here we destructure to get the data we want from the properties turned variables
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}
