'use strict';


//This first function is a machine that cuts fruit into multiple pieces

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples); 
    const orangePieces = cutFruitPieces(oranges);    
    console.log(apples, oranges);
    // const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
 }

 console.log(fruitProcessor(2,3));

 //To see how this function within a function works, check the saved screenshot 'called 36_function_inside_a_function_data_flow'

 //Now, to see how many total cut fruit pieces of apples and oranges, change the const juice variable's string like so:
 // const juice = `Juice with ${applesPieces} apple pieces and ${orangePieces} orange pieces.`;

 