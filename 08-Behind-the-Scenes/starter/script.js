'use strict'

//Primitives vs. Objects

let age = 39;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
	name: 'R.J.',
	age: '39'
};

/*
 Let's say that I have a friend who's also called R.J. Instead of creating a brand new object from scratch,
 I would just copy the me object.

So const Friend equals Me.
*/
const friend = me;
friend.age = 33; //He is 33, but I am 39

console.log('Friend:', friend);
console.log('Me', me);

//Now we both have the age of 33. This is a source of confusion and we'll find out why in this lesson.

/*
There are JS primitive data types (booleans, numbers, strings, null, undefined, bigInt, and symbol)
There are also JS objects, which includes everything else (object literals, arrays, functions, and many more).


When we're talking about memory and memory management,

it's usual to call primitives, primitive types

and objects reference types because of the different way

in which they are stored in memory.
*/

/*
The JavaScript engine has two components, the call stack,

where functions are executed and to heap where objects

are stored in memory.

And that's right, all of objects,

or in other words, reference types

will get stored right in the memory heap.

Primitive data types are stored in the call stack.

So the engine has two components, the call stack,

where functions are executed and to heap where objects

are stored in memory.

And that's right, all of objects,

or in other words, reference types

will get stored right in the memory heap.
*/
/*
Explanation as to why friend and me are both 33 instead of our respective ages, 33 and 39

So here comes the interesting part

because now we're actually gonna change a property

in the Friend object by setting friend.age to 27.

So what happens then is that the object

is found in the heap, and the 30 is changed to 27.

Great.

And by the way, even though we defined the Friend variable

as a constant, we can actually still manipulate the object

without problems.

And when we think about that, it makes sense

because we're actually not changing the value in memory

for the Friend identifier, it is still D30F.

So the reference to the object.

All we did was to change the value in the heap,

and that's not a problem.

So it's a misconception that all variables declared

with const are immutable.

In fact, that is only true for primitive values,

but not for reference values.

So keep that in mind, whenever you're working with const.

Anyway, as we lock the Friend variable to the console,

we get the age of 27, just as we said it before.

But then when we lock the Me object,

we get that weird behavior

that we could previously not explain and not understand.

But with everything that we learned in this lecture,

it actually now makes sense

that in the Me object, age is now also 27,

even though we never changed me.age directly.

And the reason for this, as we can see in this slide

is the fact that Me and Friend

actually point to the exact same object in the memory heap.

So whenever we change something in this object,

it will always be reflected in Friend and in Me.

So in both these objects.

So these are basically just two different identifiers

pointing to the exact same value.

And once again, that value is the memory address D30F

which points to the reference in the memory heap.

And one important implication of this

is that whenever you think that you're copying an object,

you're really just creating a new variable

that points to the exact same object.

And this has huge implications

for the way JavaScript works in practice.


*/
