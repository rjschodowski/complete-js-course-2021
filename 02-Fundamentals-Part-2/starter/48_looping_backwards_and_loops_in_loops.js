'use strict';

//LOOPING BACKWARDS
const rj = [
    'R.J.',
    'Schodowski',
    2021 - 1981,
    'web developer',
    ['David', 'Huri', 'Dan']
];

//Let's loop this backwards

for (let i = rj.length - 1; i >= 0; i--) {
    console.log(i, rj[i]);
}


//LOOPS INSIDE LOOPS

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------STARTING EXERCISE ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}!!`);
    }
}