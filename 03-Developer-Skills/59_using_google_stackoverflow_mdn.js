'use strict';

/*
///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore sensor errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it */

//Now that we have our problem and we've asked some questions and broken it down into subproblems, let's create a function:

// const calcTempAmplitude = function(temps) {};


//first, let's work on #2. Since I don't know yet how to find max value in array, let's look it up on Google
//I'm going to type in search bar: 'javascript get max value in array'

/*Here's a solution found on StackOverflow:
let max = testArray[0];
for (let i = 1; i < testArrayLength; ++i) {
  if (testArray[i] > max) {
    max = testArray[i];
  }
}
I'm not going to copy and paste it, but use it to add to my function. Something like this:*/

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//     let min = temps[0];
//     let max = temps[0];

// for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if(typeof curTemp !== 'number') continue;
//     if(curTemp > max) max = curTemp;
//     if(curTemp < min) min = curTemp;
//     }
// console.log(max, min);
// return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);
/*
Here's what this function is doing:
So in the beginning, before we even start a loop, the max will be the first element of the array. So three, okay?

Then the loop starts at the first position. So that's three. Here then we ask is three greater than three? No, it's not.

So nothing happens then in the next iteration of the loop, we are at seven. So then the question is, is seven greater
than three which is the current maximum? And yes, it is. And so now max equals seven, okay?

Next iteration of the loop, which is four. And so the question is, is four greater than seven, which is the current maximum?
No, it's not. And so nothing happens and then we're done. And so the result in the end is that max is equal to seven.
*/

//Now we need to find the min value. It's the same way we calculated the max value. (See above for min variable and other added code.)

//Now we will tackle the 'ignore sensor errors'. We'll do this (see above for context):  if(typeof curTemp !== 'number') continue;

//Lastly, we'll subtract the max from the min to get the temp amplitude (see above) return max - min; get the result by doing console.log(amplitude);


//*****************************************************************

//Problem 2
//Function should now receive 2 arrays of temps

//Understanding the problem:
//We need to merge the two arrays

//Breaking up into subproblems:
//We must merge two arrays

/*
Code found from MDN that we'll borrow from to solve our problem:
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
*/
const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let min = temps[0];
    let max = temps[0];

for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if(typeof curTemp !== 'number') continue;
    if(curTemp > max) max = curTemp;
    if(curTemp < min) min = curTemp;
    }
console.log(max, min);
return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);


