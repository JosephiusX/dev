'use strict';

// SCOPING IN PRACTICE //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SCOPING IN PRACTICE //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SCOPING IN PRACTICE //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function calcAge(birthYear) {
    const age =  2037 - birthYear; // age is only avalible in the calc age scope
   
function printAge(){
    let output = `${firstName} you are ${age}, born in ${birthYear}`
    console.log(output);

    if(birthYear >= 1981 && birthYear <= 1996) {
        var millenial = true; // var is function scoped not block scoped
        // Creating New variable with same name as outer scope's variable
        const firstName = 'Steven'; // in this case even though first name is defined globally above it is being called within the block therefor js chooses the variable in the block because it comes first 
        
        output = 'NEW OUTPUT!'//Reassigning outer scope's variable

        const str =`Oh, and your a millenial, ${firstName}`;
        console.log(str);
        console.log(millenial);

        function add(a,b) {
            return a + b;
        }

    }
    // console.log(str); // error str cannot be accessed outside of the if block
    console.log(millenial);// with var the variable can be accessed outside of the bkock // old syntax
    // console.log(add(2,3));// can not be accessed ourside of the block but only for strict mode, works fine with strict mode turned off
    console.log(output);
}
    printAge();
     
    return age;
}

const firstName = 'jonas'; 
calcAge(1991);
// console.log(age); // age is not defined because it is only avalible within the calc age function
// printAge(); // also not defined 
 */

// HOISTING AND TDZ PRACTICE //////////////////////////////////////////////////////////////////////////
// HOISTING AND TDZ PRACTICE //////////////////////////////////////////////////////////////////////////
// HOISTING AND TDZ PRACTICE //////////////////////////////////////////////////////////////////////////
/*

// TDZ is defined by the begenning of the current scopt to where the variable is defined

//  what if we try to access variables before initalization 
console.log(me); // undefined, with var values are hoisted but to undefined
// console.log(job); // cannot access job before init ,it is in tempral dead zone,
// console.log(year); // also within the TDZ

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//  Functions
console.log(addDecl(2, 3)); // this works fine because it is a function declaration
// console.log(addExpr(2, 3)); // cannot acces addExpr before initilization because it is a function Expression
// console.log(addArrow(2, 3)); // 

function addDecl(a, b) {
    return a + b;
};

const addExpr = function (a,b) { // function expression is treated as a const variable because it is
    return a + b;
}

var addArrow = (a, b) => a + b; // dosent work. fuck if i know why

// Example
console.log(undefined);
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(){
    console.log('All products deleted!');
}

var x = 1; // var creates properties on the window object
let y = 2; // does not create propertie on window object
const z = 3;// does not create propertie on window object

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
 */

//  The this Keyword practice /////////////////////////////////////////////////////////////////
//  The this Keyword practice /////////////////////////////////////////////////////////////////
//  The this Keyword practice /////////////////////////////////////////////////////////////////
/*
// what this keyword is
// THIS KEYWORD/VARIABLE: special varianble that is created for every exicution context(every function). Takes the value of (points to) the 'owner' of the function in which the this keyword is used
// this is NOT static. it depends on how the function is called, and its value is only assigned when the function is actually called 
// method- this = <object that is calling the method>
const jonas ={
name: 'Jonas',
year: 1989,
calcAge: function() {
return 2037 - this.year //= jonas.year, here the this keyword refers to the object it is being called in. 
}

// SIMPLE FUNCTION CALL - this = undefined in strict mode, otherwise window (in the browser)
// ARROW FUNCTIONS  - this = <this of surrounding function(lexical this)>
// EVENT LISTENER - this = <DOM element that the handler is attached to> 

// what this keyword is not 
// this Keyword does NOT  point to the function itself, 
// does NOT point to the variable environment of the function   

console.log(this); // window object

const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this); // this = undefined due to strict mode
}
calcAge(1991);

// this with arrow function instead
const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); // here this is a window object becuse arrow functions do not have a this keyword so it uses the value of its parent which in this case is the window
}
calcAgeArrow(1980);

// this with a finction expression
const jonas = {
    year: 1991,
    calcAge: function(){
        console.log(this); // this = the jonas object
        console.log(2037 - this.year);
    },
};
jonas.calcAge()

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge; // method borrowing - uses the method from matilda to jonas
matilda.calcAge() // 30 - even though 'this' was originally called in the jonas object it is being borrowed by the matilda object therefore in this case this refers to matilda

const f = jonas.calcAge; 
f(); // undefined - error cannot read property 'year' of undefined
*/

// Regular functions vs Arrow functions ///////////////////////////////////////////////////////////////////////////////////////
// Regular functions vs Arrow functions ///////////////////////////////////////////////////////////////////////////////////////
// Regular functions vs Arrow functions ///////////////////////////////////////////////////////////////////////////////////////
/*

var firstName = 'Matilda';

const jonas = { // thease brackets represent a object literal. not a code block
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        // console.log(this);
        console.log(2037 - this.year);

        // solution 1
        // const self = this; // since this variable is set outside of the function within the object it refers to the object
        // const isMillenial = function () {
        //     console.log(this);
        //     // console.log(this.year >= 1981 && this.year <= 1996); // this in a regular fuinction is undefined, this function is written as if it werent a part of object
        //     console.log(self.year >= 1981 && self.year <= 1996); // the work around here is to define a variable called self and assign it a value of this. then use that variable in its place

        // solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },

    greet: () => {
        console.log(this); // within an arrow function the keyword this refers to the window
        console.log(`Hey ${this.firstName}`); // in this case matilda is a global variable firstName. if there wasent a global variable in this case 'this' would be undefined because it is an arrow function
    }, // moral of the story. never use an arrow function as a method
};
jonas.greet();
jonas.calcAge();

// Arguments keyword
const addExpr = function (a,b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
   return a + b;
} 
addArrow(2, 5, 8); // arguments not defined because it is taking place in an arrow function
*/

// Primitives vs. Objects (Primitive vs. Reference Types) //////////////////////////////////////////////////////////
// Primitives vs. Objects (Primitive vs. Reference Types) //////////////////////////////////////////////////////////
// Primitives vs. Objects (Primitive vs. Reference Types) //////////////////////////////////////////////////////////
/*
// exanple
let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);

// Practice

// Primitive types
let lastName = 'Wiliams';
let oldLastName = ' lastName';
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica; // another variable in the stack that holds the reffrence to the original object
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
// marriedJessica = {}; // not alloed because it is a constant

// Copying objects
const jessica2 ={
    firstName: 'Jessica', 
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica);
console.log('After marriage:', jessicaCopy);
*/






