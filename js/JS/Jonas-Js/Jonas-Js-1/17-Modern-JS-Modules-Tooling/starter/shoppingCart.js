///////////////// 269.Exporting and importing modules ////////////////////////
///////////////// 269.Exporting and importing modules ////////////////////////
///////////////// 269.Exporting and importing modules ////////////////////////
/*
*/
// Exporting module
// modules automatically use strict
console.log("Exporting module"); // this code is executed before the Importing module

const shippingCost = 10; // thease are only avalable in this file

const cart = [];

export const addToCart = function (product, quantity) 
{ // this can be used outside this file because its being imported
    cart.push({ product, quantity});
    console.log(`${quantity} ${product} added to cart`);
}

// if(true){ // here the function won't be exported because its not in the top level code
//     export const addToCart = function (product, quantity) {
//         cart.push({ product, quantity});
//         console.log(`${quantity} ${product} added to`);
//     }
// }

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, // exporting multiple variables at the same time
         totalQuantity as tq}; // changing the name to be used in the file like on the import

// when we only want to export one thing
export default function (product, quantity) { // exporting the value itself instead of the variable
    cart.push({ product, quantity});
    console.log(`${quantity} ${product} added to cart`);
}
