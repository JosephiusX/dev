// arguments object - not bound with arrow functions

// with regular function
// const add = function (a, b) {
//     console.log(arguments) // this logs the arguments passed in
//     return a + b;
// };
// console.log(add(55, 1, 1001)); // arguments log all the args passed in here

    // with arrow function
// const add = (a, b) => {
//     // console.log(arguments) // arguments is not defined
//     return a + b;
// };
// console.log(add(55, 1)); // this dosent run either due to the error above
// // if i need to use arguments than stick with es5 functions


// ths keyword - not bound with arrow functions

    // with se5 function method
// const user = {
//  name: 'Joseph',
//  cities: ['Philidelphia', 'New York', 'Dublin'],
//  printPlacesLived : function () {

//     this.cities.forEach(function (city){ // this keyword works up here
//         console.log(this.name + 'has lived in ' + city); // its not working here
//     });
//  } 
// };
// user.printPlacesLived();

//     // es5 Work around for problem above
// const user = {
//  name: 'Joseph',
//  cities: ['Philidelphia', 'New York', 'Dublin'],
//  printPlacesLived : function () {
//      const that = this; // assign that the value of this

//     this.cities.forEach(function (city){ 
//         console.log(that.name + 'has lived in ' + city); // we use that here in place of this
//     });
//  } 
// };
// user.printPlacesLived();

//     // with es6 arrow functions - do not bind their "this" value
// const user = {
//  name: 'Joseph',
//  cities: ['Philidelphia', 'New York', 'Dublin'],
//  printPlacesLived() { // with a method we want 'this' keyword bound or it worn work properly, no arrow functions as methods, however this is a simplifyed method syntax
//         // no work around needed
//     this.cities.forEach((city) => { // with an arrow function the this keywork refers to the parent
//         console.log(this.name + 'has lived in ' + city); // we can use this here
//     });
//  } 
// };
// user.printPlacesLived();

    // forEach just allows us to do something with the item
    // exploring the map array method
const user = {
 name: 'Joseph',
 cities: ['Philidelphia', 'New York', 'Dublin'],
 printPlacesLived() { 
      return this.cities.map((city) => { // map can transform each item creates a new array
        return this.name + ' has lived in ' + city; // adds to each item in array
     });
 } 
};

console.log(user.printPlacesLived());

// challange area

const multiplier = {
    numbers: [2, 4, 6, 8],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => {
            return number * this.multiplyBy;
        })
    }
}

console.log(multiplier.multiply());