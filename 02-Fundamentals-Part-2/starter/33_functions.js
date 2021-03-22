'use strict';

//Functions - pieces of code that can be reused

/* function logger() {
                        //<-----This space in between the {} is called a function buddy
                console.log('My name is R.J.');
}    

logger()       <------doing this is referred to invoking, calling, or running the function.


Functions can give and receive data, like a machine.


Parameters are like variables that are specific only to its function
*/

// function fruitProcessor(apples, oranges) {    //apples and oranges are the parameters in this example
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// //Now let's call this function 

// fruitProcessor(5, 0);  //<----these actual values (5 and 0) of the parameters are called ARGUMENTS.

//The result in the console is 5 0.


/*

but now you might wonder what about the juice that just produced here?

Where is it?

Well, the juice was returned from this function. So basically that means that the result

of running this function here is the juice that we just returned.

Basically, once this function has been executed this code here is then replaced

by the result of the function and in this case that's gonna be the juice string

that we produced.

So if we want to use that value that was returned we need to store it in a variable

*/


//If you want to run the function and have "juice" executed, create a variable containing the fruitProcessor variable.

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

/*

First, we create the function. (In this instance we want the function to print the string "Juice with X apples and
X oranges.")

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}


Second we give the functions parameters arguments (5, 0) and then call it: 

fruitProcessor(5, 0);  (This gives us 5 0 in the console)

Third, we turn the fruitProcessor function with its parameters into a value and assign it a variable (called appleJuice)

Fourth, we call the appleJuice variable to the console to print the whole juice template literal.

Here's how it looks all together:

*/

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

//I noticed 5 0 was printed from line 82 (when not commented out), the console.log(apples, oranges) call,
//and Juice with 5 apples and 
//0 oranges. printed from line 88's console.log call.

//I also just learned that before storing fruitprocessor in a variable, the variable juice was in fact returned; it just 
//didn't show in the console yet because in order to use that value that was returned, it needs to be stored in a 
//variable.


//Now let's try with new parameters:

const appleOrangeJuice = fruitProcessor(4, 6);
console.log(appleOrangeJuice);

//And we get: Juice with 4 apples and 6 oranges.

//Cool!


