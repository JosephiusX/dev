'use strict';


///////////////// default Parameters ///////////////////////
///////////////// default Parameters ///////////////////////
///////////////// default Parameters ///////////////////////
/*

const bookings = [];

// peramiters are specified in order , for dynamic use numPassengers must come befor price to work
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){
    // ES5 - a better way above
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', 1000) // cannot skip numPassenger and go to price. peramiters are order sensitive
createBooking('LH123', undefined, 1000) // work around to above
*/

////////////////// How passing arguments works /////////////////////////////////
////////////////// How passing arguments works /////////////////////////////////
////////////////// How passing arguments works /////////////////////////////////
/*

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 247349479284
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 247349479284) {
        alert('Checkd in')
    } else {
        alert('Wrong passport!')
    }
}

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000000000000);
}

newPassport(jonas);
checkIn(flight, jonas);
*/

///////////////////// First class and higher order functions ///////////////////////
///////////////////// First class and higher order functions ///////////////////////
///////////////////// First class and higher order functions ///////////////////////
/*
// Javascript treats functions as first-class citizens
// This means that functions are simply values
//  Functions are just another 'type' of object
*/

////////////////////// Functions Accepting Callback Functions ///////////////////////
////////////////////// Functions Accepting Callback Functions ///////////////////////
////////////////////// Functions Accepting Callback Functions ///////////////////////
/*

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase(); // / /g, regExpression that selects all of an occorance 
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return[first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn.name}`);
}

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

const high5 = function(){
    console.log('✋')
}

//  JS uses callbacks all the time - allow us to break up our code into riusable parts - also allow us to create abstraction
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

///////////////////// Functions Returning Functions /////////////////////////////
///////////////////// Functions Returning Functions /////////////////////////////
///////////////////// Functions Returning Functions /////////////////////////////
/*

const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hay');
greeterHey('Jonas'); // Hay Steeven
greeterHey('Steven'); // Hay Steven

greet('Hello')('Jonas');

// same as above in arrow form witg new variable assignment
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hello')('Jonas') // Hello Jonas
*/

//////////////////// The Call And Apply Methods /////////////////////////////////
//////////////////// The Call And Apply Methods /////////////////////////////////
//////////////////// The Call And Apply Methods /////////////////////////////////
/*

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) { // new method syntax  instead of   book: function() {}
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa)

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};


// storing the method above in a external function
const book = lufthansa.book;

// Call Method  allowes use of this keyword used 
// book(23, 'Sarah Williams'); // dosent work bacause the method that this is taken from useses the this kayword which refers to an object it isint in in this case
book.call(lufthansa, 23, 'Sarah Williams') // solution , call makes it so the this keyword points to lufthasa in this case

book.call(eurowings, 23, 'Sarah Williams'); // lets us manually set the this kayword to eurowings object
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper')
console.log(lufthansa)

const swiss = {
    name: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 583, 'Mary Cooper');

// Apply : same as call except dosent 
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
// not really used in modern Javasript because theres a better way
// call + spread operator
book.call(swiss, ...flightData)
*/

//////////////////////////////// The bind Method /////////////////////////////////////////
//////////////////////////////// The bind Method /////////////////////////////////////////
//////////////////////////////// The bind Method /////////////////////////////////////////
/*

//using code above 
// Bind method  - like call but returns a new function where the this keyword is found

const bookEW = book.bind(eurowings);// instead of calling the book function a new funtion is being called in which this will always be set to eurowings
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
bookLH(23, 'Steven Williams');
bookLX(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes)
};
// lufthansa.buyPlane();

// below i am binding the this keyword to lufthansa
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, .23);
// addVat = value => value + value * .23;

console.log(addVAT(100));
console.log(addVAT(23));

// Exercize
const addTaxRate = function (rate) {
    return function(value) {
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(.23)
console.log(addVAT(100));
console.log(addVAT(23));

*/

//////////////////////// codeing challange # 1 //////////////////////////////////
//////////////////////// codeing challange # 1 //////////////////////////////////
//////////////////////// codeing challange # 1 //////////////////////////////////
/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        // Get Answer
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`
        )
        );

        // Register
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

        this.displayResults()
        this.displayResults('string')
    },
    displayResults(type = 'array'){
        if(type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            // Poll results are 13, 2, 4, 1
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
};
// poll.registerNewAnswer();

document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5,2,3]}, 'string');
poll.displayResults.call({ answers: [1,5,3,9,6,1]}, 'string');


*/

//////////////////////// Immidetly invoked function expressions ////////////////////////////////////////// 
//////////////////////// Immidetly invoked function expressions ////////////////////////////////////////// 
//////////////////////// Immidetly invoked function expressions //////////////////////////////////////////
/*

// creating a function that is immidetly invoked and can not be run again
(function() {
    console.log('This will never run again');
    const isPrivate = 23;
})();

// console.log(isPrivate); // is not accessed

// notice as above it is wrapped in perenthes and then called
(() => console.log('This will also never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}
// console.log(isPrivate); // also cannot be accessed from outside the scope
console.log(notPrivate);
*/

///////////////////////////////////////////// Closures /////////////////////////////////////////////////////////////
///////////////////////////////////////////// Closures /////////////////////////////////////////////////////////////
///////////////////////////////////////////// Closures /////////////////////////////////////////////////////////////
/*
// closures automatically happen in certen situations it is up to us to recegonise said situations

const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

let f; // this f variable is created in the global scope

const g = function () {
    const a = 23;
    f = function () { // as we assigned it a function here 
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
}

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3; // this perGroup is used first because it is within the scope of the function

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    },wait * 1000); // this will be delayed by 1 second * wait value

    console.log(`Will start boarding in ${wait} seconds`); // this will be called immedietly upon the function being called
};

const perGroup = 1000;
boardPassengers(180, 3);
*/

/////////////////////////////////// Codeing Challange #2 //////////////////////////////////////////
/////////////////////////////////// Codeing Challange #2 //////////////////////////////////////////
/////////////////////////////////// Codeing Challange #2 //////////////////////////////////////////
/*
(function (){
    const header = document.querySelector('h1');
    header.style.color = 'red'; // this part is called immidietly

    document.querySelector('body').addEventListener('click', function() {
        header.style.color = 'blue'; // this segment is a callback. it is waiting for a click to be triggered
    })
})();
*/ 


