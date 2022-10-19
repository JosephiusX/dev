'use strict';

//////////////// 103.Destructuring Arrays //////////////////////
//////////////// 103.Destructuring Arrays //////////////////////
//////////////// 103.Destructuring Arrays //////////////////////
/*

*/

// Destructuring - to break a complex data down into a smaller data structure like a variable
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// how we do it without destructuring
const arr = [2,3,4]; // start with simple array
const a = arr [0]; // assign each of the indicies to a variable
const b = arr [1];
const c = arr [2];
console.log(a, b, c) // 2 3 4

// Destructuring
const[x, y, z] = arr; // brackets on the left side of the equation means destructuring. not an array
console.log(x, y, z); // 2 3 4
console.log(arr) // original array is not destructured only the copy is

const [first, second] = restaurant.categories; // destructures first and second items in array categories located in object restaurant
console.log(first, second); // Italian Pizzeria

// const [first, , second] = restaurant.categories;  // leaving a space after first and before second skipps the second element and destructures the third item as second
// console.log(first, second); // Italian Vegetarian

let [main, , secondary] = restaurant.categories; 
console.log(main, secondary); // Italian Vegetarian

// complicated way of switching up the order
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // Vegetarian Italian

// a much more simple way

[main, secondary] = [secondary, main]
console.log(main, secondary); // Vegetarian Italian

// Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [ i, ,j] = nested;
// console.log(i, j); // 2 [5, 6]
const [i, , [j , k]] = nested; // destructuring an array within an array
console.log(i, j, k); // 2 5 6 

// Default values
const [p = 1, q = 1, r = 1] = [8 ,9];  // im setting the default value in case there is no number
console.log(p, q, r);

//////////////////// destructuring objects ////////////////////////////////////
//////////////////// destructuring objects ////////////////////////////////////
//////////////////// destructuring objects ////////////////////////////////////
// i got lost in this lesson
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 2,
    time = '20:20',
    address,
  }) {
    console.log(`order recieved ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.og(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
},

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};


restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});


const { name, openingHours, categories } = restaurant; // creates 3 new variables based on key value pairs in object restaurant
console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags); // giving the key values new variable names

//default values
const { menu = [], starterMenu: starters = [] } = restaurant; // setting menu to an empty array incase it dosent exist. otherwise it would reade as undefined same with starter menu although it does exist 
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);  // mutated variables a, b to the values in obj with the keys a and b
console.log(a, b) // 23 7

// nested objects destructuring
// const {fri: {open, close} } = openingHours;
// console.log(open, close); // 11 23

//same as above but assigned to diffrent variables
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c); // 11 23
*/



////////////////// The Spread Operator(...) ////////////////////////////
////////////////// The Spread Operator(...) ////////////////////////////
////////////////// The Spread Operator(...) ////////////////////////////
/*
// use object from destructuring objects lesson


// spread operator practice
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr] // seme result as above elequently with es6 spread operator
console.log(newArr);

console.log(...newArr); // this takes the numbers out of the array

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // from object above
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const meNu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(meNu);

// spread operator works on all iterables
// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'] // destructured the letters out of the name Jonas
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`); // string template literal does not accept multiple values seporated by a comma

// real world example
// const ingredients = [
  //   prompt("Let's make pasta! Ingredient 1?"),
  //   prompt("Let's make pasta! Ingredient 2?"),
  //   prompt("Let's make pasta! Ingredient 3")
  // ];
  // console.log(ingredients);
  
  // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // the old way
  // restaurant.orderPasta(...ingredients)
  
  // Objects 
  const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guuiseppe' } // copies old object to new variable while also adding new key value pairs
  console.log(newRestaurant);
  
  const restaurantCopy = { ...restaurant };
  restaurantCopy.name = 'Ristorante Roma';
  console.log(restaurantCopy.name);
  console.log(restaurant.name);
*/

//////////////////////// Rest Pattern and Parameters /////////////////////////////////////
//////////////////////// Rest Pattern and Parameters /////////////////////////////////////
//////////////////////// Rest Pattern and Parameters /////////////////////////////////////
/*
// Destructuring
// SPREAD, because its on right side of =
const arr = [1,2, ...[3,4]];
// REST , because it is on the left side of the =
const [a, b, ...others] = [1,2,3,4,5]; // removing a and b from array and returning whats left
console.log(a,b,others);
 
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood) 
 
// Objects
const {sat, ...weekdays } = restaurant.openingHours; // removing sat from obj and copying the rest
console.log(weekdays);
 
// 2) Functions
const add = function(...numbers){ // here it is placing the numbers inside arrays
 let sum = 0;
 for (let i = 0; i < numbers.length; i++) sum += numbers[i];
 console.log(sum);
}
add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);
 
const x = [23, 5, 7];
add(...x);
 
restaurant.orderPizza('mushrooms', 'onion', 'olives' , 'spinach');
restaurant.orderPizza('mushrooms');
*/


//////////////////// Short Circuting ( && and ||) ////////////////////////////////
//////////////////// Short Circuting ( && and ||) ////////////////////////////////
//////////////////// Short Circuting ( && and ||) ////////////////////////////////
/*

// still using resteraunt obj

console.log('------- Or ---------');

// Use any data type, return any data type, short-circuting. 
console.log(3 || 'Jonas'); // 3 , if the first operand is a truthey value it will not look at the next value
console.log('' || 'Jonas'); // 'Jonas'
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // hello, because it is the first truthy value in this chain of 4

restaurant.numGuests = 0; // 0 is falsy so the logs will default to 10
// restaurant.numGuests = 23; // in this case the log world read 23 because the value is set
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; 
console.log(guests1); // 10, while restaurant.numbers value isint set

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----- AND -------');
console.log(0 && 'Jonas'); //  0, works opposite from or operator
console.log(7 && 'Jonas'); // 'Jonas',  if the first value is truthy it continues and the last value is returned in this case

console.log('Hello' && 23 && null && 'Jonas'); // null, because it is the first falsy statement therefor it is returned

// Practical example
if(restaurant.orderPizza){
 restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


//////////////////////// Nullish Coalescing Operator (??) //////////////////////////////////
//////////////////////// Nullish Coalescing Operator (??) //////////////////////////////////
//////////////////////// Nullish Coalescing Operator (??) //////////////////////////////////
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10, because 0 is a falsy value so it goes on to the next

// Nulish: null and undefined (Not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10; // it is as if 0 or '' are not falsy values
console.log(guestCorrect); // 0
*/

///////////////////////////// Codeing Challange #1 //////////////////////////////////
///////////////////////////// Codeing Challange #1 //////////////////////////////////
///////////////////////////// Codeing Challange #1 //////////////////////////////////
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. 
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers)

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// 5.
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2)

// 6.
const printGoals = function(...players) {
  console.log(players);
  console.log(`${players.length}`);
}

printGoals('Davies', 'Muller', 'Lewadowski', 'Kimmich');

printGoals('Davies', 'Muller');
printGoals(game.score);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');

team1 > team2 && console.log('Team 1 is more likely to win');
*/

//////////////////////// The For Of Loop /////////////////////////////////////
//////////////////////// The For Of Loop /////////////////////////////////////
//////////////////////// The For Of Loop /////////////////////////////////////
/*

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) 
console.log(item)

for (const [i, el] of menu.entries()){
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);
*/

///////////////////////// Enhansed object Literals ///////////////////////////////////////
///////////////////////// Enhansed object Literals ///////////////////////////////////////
///////////////////////// Enhansed object Literals ///////////////////////////////////////

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  // hours:hours, // old way
  openingHours, // es6 way to add one object to another

  // old way
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  // es6 way
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex = 2,
    time = '20:20',
    address,
  }) {
    console.log(`order recieved ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.og(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/*

console.log(restaurant.hours)
*/

//////////////////////////// Optiinal Chaining (.?) //////////////////////////
//////////////////////////// Optiinal Chaining (.?) //////////////////////////
//////////////////////////// Optiinal Chaining (.?) //////////////////////////
/*

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open)

  // With optional chaning
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days){
  const open = restaurant.openingHours[day]?.open || 'closed';
  console.log(`On ${day}, new open at ${open}`);
}

// Methods 
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');

console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

// Arrays
// const users = [{name: 'Jonas', email: 'hello@jonas.io'}];
const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');
*/

////////////////////////// Looping objects //////////////////////////////////////
////////////////////////// Looping objects //////////////////////////////////////
////////////////////////// Looping objects //////////////////////////////////////
/*

// Property Names
const properties = Object.keys(openingHours);
console.log(properties); // [thu, fri, sat]

let openStr = `We are open on ${properties.length} days:`

for(const day of Object.keys(openingHours)){ // looping through object keys of opening hours
  openStr += `${day}, `;
}

console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

//////////////////// code challange #2 //////////////////////////////////////////
//////////////////// code challange #2 //////////////////////////////////////////
//////////////////// code challange #2 //////////////////////////////////////////

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*

// 1.
for(const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2. 
const odds = Object.values(game.odds)
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average)

// 3.
for (const [team, odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/

/////////////////////////////// Sets /////////////////////////////////////////
/////////////////////////////// Sets /////////////////////////////////////////
/////////////////////////////// Sets /////////////////////////////////////////
/*
// SET: list of unique items (no duplicates)

// With arrauys
const ordersSet = new Set (['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet) // {'pasta', 'pizza', 'Risotto'}  , all duplicates are eleminated

// With strongs
console.log(new Set('jonas'))

console.log(ordersSet.size); // 3
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear(); // clears the order set
console.log(ordersSet);
console.log(ordersSet[2]); // Undefined , Sets are not ordered ny index like arraus

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
const staffUnique = [...new Set(staff)]; // turns the set into an array
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // 3, the set contains 3 unique array items

console.log(new Set('jonassChmedtmann').size) // 11 because the are 11 unique letters
*/

//////////////////////// Maps fundamentals /////////////////////////////////////
//////////////////////// Maps fundamentals /////////////////////////////////////
//////////////////////// Maps fundamentals /////////////////////////////////////
/*

// Map: Used to map values to keys

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set('1', 'Firenze, Italy');
console.log(rest.set('2', 'Classico, Portugal'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open')
.set('close', 23)
.set(true, 'We are open :D ')
.set(false, 'we are closed :( ');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get('1'));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);


const arr = [1,2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

// console.log(rest.get(1, 2)); // undefined
console.log(rest.get(arr));
*/

////////////////////////// Maps Iteration ////////////////////////////////////////////
////////////////////////// Maps Iteration ////////////////////////////////////////////
////////////////////////// Maps Iteration ////////////////////////////////////////////
/*

const question = new Map([
  ['question', 'What is the best programing langyage in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours))

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}
// const answer = Number(prompt('Your answer'))
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// convert map to array

console.log([...question]);
// console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());
*/

////////////////////////// Which data set to use //////////////////////////////////////
////////////////////////// Which data set to use //////////////////////////////////////
////////////////////////// Which data set to use //////////////////////////////////////
/*
*/

// Sources of data
// 1. from the program itself: data written directly in the source code
// 2. from the UI: Data input from the user or data written in the DOM
// 3. From eternal sources: Data fetched for example from web API 


// Arrays Vs Sets
//Arrays : Use when you need orderd list of values (may contain duplicates)
// Use when you need to manipulate data

// Sets : Use when you need to work with unique values
// use when high-preformance is really imporntant
// use to remove duplicates from arrays

// Objects Vs Maps
// Objects: more "traditional" key/value store('abused' objects)
// Easier to write and access values with . and []
// Use when you need to include functions ( methods)
// use when working with JSON (canconvert to map)

// Maps : Better performance
// Keys can have any data type 
// Easy to iterate 
// Easy to compte size
// use when you simply need to map key to values
// use when you need keys that are not strings


/////////////////////////////// Codeing Challange # 3 ////////////////////////////////
/////////////////////////////// Codeing Challange # 3 ////////////////////////////////
/////////////////////////////// Codeing Challange # 3 ////////////////////////////////

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())]
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(`An event happened, on average, every ${gameEvents.size / 90} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / 90} minutes`);

// 4.
for (const [min, event] of gameEvents){
  const half = min <= 45 ? 'First' : "SECOND";
  console.log(`[${half} [HALF] ${min}: ${event}`);
}
*/

////////////////////////// Working with strings - PART 1 /////////////////////////////////
////////////////////////// Working with strings - PART 1 /////////////////////////////////
////////////////////////// Working with strings - PART 1 /////////////////////////////////



/*
// thease methods always return a new string
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // B

console.log(airline.length); // 16
console.log('B737'.length); // 4 

console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('portugal')); // -1

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2)); // al
console.log(airline.slice(1,-1)); // AP Air Portuga

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat'); 
  else console.log('You got lucky');
  
}

checkMiddleSeat('118');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));
*/

////////////////////////// Strings pt 2 ////////////////////////////////////////
////////////////////////// Strings pt 2 ////////////////////////////////////////
////////////////////////// Strings pt 2 ////////////////////////////////////////
/*

const airline = 'TAP Air Portugal';

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

// Fix capitalization in name
const passenger = 'jOnAs'; // Jonas is intended
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = 'Hello@jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// same as above in one line
const normalizedEmail = loginEmail.toLowerCase().trim(); // string to lowercase, remove empty space
console.log(normalizedEmail) 
console.log(email === normalizedEmail)// true

// replacing
const priceGB = '288,97lb'
const priceUS = priceGB.replace('lb', '$').replace(',', '.');
console.log(priceUS);

const announcement = `All passengers come to boarding door 23. Boarding door 23!`

// console.log(announcement.replace('door', 'gate')) // only replaces first instance
console.log(announcement.replaceAll('door', 'gate')) // replaces all instances

// Booleans
const plane = 'A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Air')); // false
console.log(plane.startsWith('A3')); // true


if(plane.startsWith('A3') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARibus family')
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); // this helps to compare items
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are NOT allowed on board')
  } else {
    console.log('welcome aboard!')
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife'); // you are NOT allowed on board
checkBaggage('Socks and camera');// welcome aboard
checkBaggage('Got some snacks and a gun for protection') // you are NOT allowed on board
*/

///////////////////////////////// Working With Strinds pt-3 ///////////////////////////
///////////////////////////////// Working With Strinds pt-3 ///////////////////////////
///////////////////////////////// Working With Strinds pt-3 ///////////////////////////
/* 

//Split and join
console.log('a+very+nice+string'.split('+')); // ['a', 'very', 'nice', 'string']
console.log('Jonas Schmedtmann'.split(' ')); //  ['Jonas', 'Schmedtmann']

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');


const newName = ['Mr.', firstName, lastName.toUpperCase()].join('')
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1))
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())) // another way
  }
  console.log(namesUpper.join(' '))
}

capitalizeName('jessica ann smith davis')
capitalizeName('joseph granville')

//Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(9457820435));
console.log(maskCreditCard(94585904));
console.log(maskCreditCard(7820698049385395));

// Repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`)
}

planesInLine(5)
planesInLine(3)
planesInLine(13)
*/

//////////////////////// Codeing Challenge #4 /////////////////////////////
//////////////////////// Codeing Challenge #4 /////////////////////////////
//////////////////////// Codeing Challenge #4 /////////////////////////////
/*

Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function(){
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n') // reg expression \n means new line

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0], 
      second[0].toUpperCase()
      )}`;
    // console.log(output.padEnd(20, ' '))
    console.log(`${output.padEnd(20,)} ${'✅'.repeat(i + 1)}`); // same as above
  }
});



