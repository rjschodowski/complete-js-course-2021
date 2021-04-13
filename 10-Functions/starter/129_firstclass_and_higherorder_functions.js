'use strict';

//Functions - First-Class and Higher-Order Functions
/*

Let's now talk about

a fundamental property of the JavaScript language.

Which is the fact that it has first class functions.

This enables us to write higher order functions.

But what's that all about?

Well, let's see.

So, JavaScript is a language that has first class functions

which in technical terms

means that functions are so-called first citizens.

In practice, that means that functions

are simply treated as values.

And we already touched on that idea

a couple of times before,

but this is such an important feature of the language

that it's worth spending some more time talking about this.

Now, why does JavaScript work this way?

Well, it's simply because functions

are really just another type of objects in JavaScript.

And since objects are values,

functions are values too.

And since functions are values,

there is a bunch of interesting things

that we can do with them,

like storing them in variables or object properties.

And that, of course,

we already did a couple of times before.

So the function values here are marked in red,

and then you see, we create a function expression

in the first example and an object method

in the second example.

So the value in the red rectangle

is the function value itself,

that we can store wherever we like.

We can also pass functions as arguments to other functions.

And we actually already did that before

when adding event listeners or event handlers

to dumb objects.

So here we have the add event listener function

that you already know,

and we clearly passed the greet function

into the add event list note function

here as a value, right?

Now to make it even more interesting,

we can also return a function from another function.

That sounds kind of crazy,

but it can be very useful.

Finally, remember that functions are objects.

And many types of objects in JavaScript have methods, right?

Like array methods, for example.

And actually there are also function methods.

So methods that we can call on functions.

So again, that sounds a bit crazy, right?

But we will see how to use this to our advantage

throughout this section.

This bind method here is an example of that.

And again, we will learn about the bind method

as we go through the section.

All right.

Now the fact that JavaScript has first-class functions

makes it possible for us to use and write

higher order functions.

So a higher order function

is either a function that receives another function

as an argument,

or a function that returns a new function.

So let's check out both types here.

First, for functions that receive another function.

we have the same example as before.

So here, the add event listener function

is the higher order function.

And why?

Well, because it receives another function as an input.

In this case, the greet function.

And we usually say that the function that is passed in

is a callback function.

That's because the callback function will be called later

by the higher order function.

In this case,

add event listener will call the greet callback later

as soon as the click event happens.

It's like the greet function saying,

"Hey there, don't greet me yet,

but call me back once you're ready."

And this works, not only in the context

of the add event listener function,

but in many other use cases as well.

Okay, second,

we can also have functions that return another function.

So we have the higher order function here.

So basically this whole code block,

which clearly returns a new function,

which is this one.

And this style of functions

is also used a lot in JavaScript.

But it's also more advanced,

and I guess harder to understand.

I will show it to you in the next lecture,

but we will explore this deeper a bit later.

Now, just to finish,

there seems to be some confusion between

first-class functions and higher order functions.

Some people think that they are the same thing.

But actually they mean different things.

So, first class functions is just a feature

that a programming language either has or does not have.

All it means is that all functions are values.

That's it.

There are no first class functions in practice, okay?

It's just a concept.

There are however higher order functions in practice,

which are possible because the language supports

first class functions.

So it's a subtle difference,

but still worth noting if you want to be able to talk

like a true JavaScript master.

*/