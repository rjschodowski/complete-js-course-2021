'use strict'

//MAPS

//datastructure to map values to keys. So, just like an object data is stored in key value pairs in maps.

//Now, the big difference between objects and maps is that in maps, the keys can have any type and this can be huge.

//In objects keys are only strings, but in maps, they can be any type of key, even objects, arrays, or other maps.

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

const rest = new Map();
rest.set('name', 'Clasico Italiano');
rest.set(1, 'Bari, Italia')
console.log(rest.set(2, 'Rivisondoli, Italia'));

//We can chain things together by calling the set method. For example:

  rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open!')
  .set(false, 'We are closed!');

  console.log(rest.get('name'));
  console.log(rest.get(true));

  const time = 21;
  console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //this returns a true boolean value, and
  //since it is true and above true is set to 'We are open!', the console will print 'We are open!' Pretty clever.

  //To check if a map has a certain key

console.log(rest.has('categories')); //console reads true, so the map contains 'categories'
rest.delete(2);
console.log(rest); //here we deleted location #2 (the Rivisondoli location)

console.log(rest.size) //this gives you the number of items (which is 7 for this map)

rest.clear(); //to remove all elements from the map

console.log(rest);


rest.set([1, 2], 'test');
console.log(rest);
console.log(rest.size);

rest.set(document.querySelector('h1'), 'heading');
console.log(rest);

