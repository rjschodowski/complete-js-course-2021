'use strict'

//Data Structures Summary: Which One Should I Use? Pros and Cons of Each 4 Data Structure


//Sources of data come from:
  //From the program itself: data written directly into the source code 
  //From the UI: data input from the user
  //From external sources: data fetched from web APIs

//We use data structures to store this data



//How do we decide between which data structure to use?



/*Ask yourself: Do we just need a simple list of values? If so, then we're gonna use an array or a set.

But on the other hand if we need key value pairs, then we need an object or a map. 

The big difference here is that with a key value pair

we have a way of describing the values, so by using the key.

On the other hand, in a list like an array or a set,

we simply have the values without any description.*/


//Arrays vs. Sets

/* You should use arrays whenever you need to store values

in order and when these values might contain duplicates.

Also you should always use arrays

when you need to manipulate data

because there are a ton of useful array methods. 


Sets should only be used when you are working with unique values.

You can also use sets in situations

when high performance is really important

because operations like searching for an item

or deleting an item from a set can be

up to 10 times faster in sets than in arrays.


One great use case for sets is to remove duplicate values from an array.

Sets are really not meant to replace arrays

but rather to compliment them

whenever we are dealing with unique values.
*/


//Objects vs. Maps


/*Maps are way better suited for simple key value stores because they offer better performance.

Also map keys can have any data type and they're also easy to iterate and it's easy to compute the size of a map.


The biggest advantage of objects

is probably how easy it is to write them and to access data

by simply using the dot or the brackets operator.

Also most developers are already super used to objects.

And so they simply keep using them

for simple key value stores.



As a conclusion, you should use maps

when you simply need to map keys to values

and also when you need keys that are not strings.


If you need functions as values

then you should absolutely use an object for that.

So in objects, these functions are then called methods

and you can use the this keyword to access properties

of the same object, which is impossible in maps.

Also, when working with JSON data,

you will probably be using objects for that as well

unless you then want to convert the objects to maps.
 */

