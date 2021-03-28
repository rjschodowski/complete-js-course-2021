'use strict';

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`FOR: Lifting weight repetition ${rep}!!`);
// }

//Here's how to do the above 'for' loop in WHILE loop form:

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weight repetition ${rep}!!`);
//     rep++;
// }

//WHILE loops don't require a counter (ie: let rep = 1) in all cases. Here's an example of a WHILE loop w/ no counter:
//ROLL DICE

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);  //dice rolls random #. We want to keep looping the roll til it gets a 6.

while (dice !== 6) {
    console.log(`You rolled a ${dice}.`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end dude!');
}

