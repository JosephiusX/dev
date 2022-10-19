'use strict'; // must be the very first line to work

// let hadDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// s2 l16 Codeing Challenge /////////////////////////////////////////////////////////////////////
// s2 l16 Codeing Challenge /////////////////////////////////////////////////////////////////////
// s2 l16 Codeing Challenge /////////////////////////////////////////////////////////////////////
/*
//  My attempt
const mark = { 
    mass: 78,
    height: 1.69
}
const john = { 
    mass: 92,
    height: 1.95
}


function bmi(mass, height) {
    return mass / (height ** 2) 
    const markHeigherBmi = true;
}

function checkHighest(){
    if (markBmi > johnBni){
        const markHigher = true;
    }
}

const markBmi = bmi(mark.mass,mark.height)
const johnBmi = bmi(john.mass,john.height)
// const josephBmi = bmi(joseph.weight,joseph.height)
console.log(`Mark's BMI is ${markBmi}, Johns BMI is ${johnBmi}`);

 // 2nd attempt
 const massMark = 78;
 const heightMark = 1.69;
 const markBmi = massMark / heightMark ** 2;
 console.log(markBmi);

 const massJohn = 92;
 const heightJohn = 1.95;
 const johnBmi = massJohn / heightJohn ** 2;
 console.log(johnBmi);

 let markHigherBMI = markBmi > johnBmi; 
 */

//  section2 l19 Codeing challange //////////////////////////////////////////////////////////////////
//  section2 l19 Codeing challange //////////////////////////////////////////////////////////////////
//  section2 l19 Codeing challange //////////////////////////////////////////////////////////////////
/*
// my attenpt success
const massMark = 78;
const heightMark = 1.69;
const markBmi = massMark / heightMark ** 2;
console.log(markBmi);

const massJohn = 92;
const heightJohn = 1.95;
const johnBmi = massJohn / heightJohn ** 2;
console.log(johnBmi);

let markHigherBMI = markBmi > johnBmi; 

function isHigher(mark, john) {
    if(mark > john){
        console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})`);
    } else {
        console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBnmi})`);
    }
}

console.log(isHigher(markBmi, johnBmi));

// walkthrough- he didnt use a function at all
const massMark = 78;
const heightMark = 1.69;
const markBmi = massMark / heightMark ** 2;
console.log(markBmi);

const massJohn = 92;
const heightJohn = 1.95;
const johnBmi = massJohn / heightJohn ** 2;
console.log(johnBmi);

let markHigherBMI = markBmi > johnBmi; 


    if(markBmi > johnBmi){
        console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})`);
    } else {
        console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBnmi})`);
    }
 */

// s3 l33.Functions /////////////////////////////////////////////////////////////////////////
// s3 l33.Functions /////////////////////////////////////////////////////////////////////////
// s3 l33.Functions /////////////////////////////////////////////////////////////////////////
/*
function logger(){
    console.log('My name is Jonas');
}

// calling, running, envoking
logger();
logger();
logger();

// function fruitProcessor(apples, oranges){
//     return `Juice with ${apples} apples and ${oranges} oranges.`;
// }

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice; // same as above except the code is saved in a variable and that variable is returned
}

//console.log(fruitProcessor(5,0)); // same thing as below without saving it to a variable
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice) // 'Juice with 5 apples and 0 oranges'

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice); //'Juice with 5 apples and 0 oranges'

const num = Number('23'); // Number() , built in function that turns the string 23 into a number
*/
// l34.Declarations vs.Expression ////////////////////////////////////////////////////////////
// l34.Declarations vs.Expression ////////////////////////////////////////////////////////////
// l34.Declarations vs.Expression ////////////////////////////////////////////////////////////
/*
// function calcAge1(birthYear){
//     const age = 2037 - birthYear;
//     return age;
// }


// Function Declaration - can call before defined in the code
const age1 = calcAge1(1991);// Argument = place holder, Peramiter = value I place in
//^ placing the function envocation above the function works out fine
function calcAge1(birthYear){
    return 2037 - birthYear; // same as above without passing code into a variable
}


// Function Expression
// a fnction among other things is a value therefor it can be stored in a variable
const calcAge2 = function (birthYear){
    return 2050 - birthYear;
}

const age2 = calcAge2(1991); // with the expression you can not call the function before it is defined

console.log(`Age at 2037  ${age1}, age at 2050 ${age2}`); // logs them both
*/

// l34.Arrow Functions ///////////////////////////////////////////////////////////////////////
// l34.Arrow Functions ///////////////////////////////////////////////////////////////////////
// l34.Arrow Functions ///////////////////////////////////////////////////////////////////////
/*
// Function Expression
// const calcAge2 = function (birthYear){
    //     return 2050 - birthYear;
    // }
    
    // Arrow function saved to a variable
    const calcAge3 = birthYear => 2030 - birthYear;
    const age3 = calcAge3(1991);
    console.log(age3);
    
    const yearsUntilRetirement = (birthYear, firstName) => {
        const age = 2037 - birthYear;
        const retirement = 65 - age;
        return `${firstName} retires in ${retirement} years`;
    }
    
    console.log(yearsUntilRetirement(1991, "Joseph"));
console.log(yearsUntilRetirement(1980, "Bob"));

// arrow functions don't get a this keyword
*/

// l36 Functions Calling Other Functions ////////////////////////////////////////////////
// l36 Functions Calling Other Functions ////////////////////////////////////////////////
// l36 Functions Calling Other Functions ////////////////////////////////////////////////
/*

const cutPieces = function (fruit) {// by making this function a viriable I am able to use it in the function below
    return fruit * 4;
}


const fruitProcessor = function (apples, oranges){ // Arguments
    
    const applePieces = cutPieces(apples); // returns apples times 4
    const orangePieces = cutPieces(oranges);// returns oranges times 4
    
    const juice = `Juice with ${applePieces} pieces of an apple and ${orangePieces} pieces of an orange.`
    return juice; 
}

console.log(fruitProcessor(2,3));// Peramiters
*/

// l37  Reviewing Functions  ////////////////////////////////////////////////////////////////////
// l37  Reviewing Functions  ////////////////////////////////////////////////////////////////////
// l37  Reviewing Functions  ////////////////////////////////////////////////////////////////////
/*

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear); 
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);// will be ignored if after the return
        return retirement;
    } else {
        console.log(`${firstName} has already retired`); // will be ignored if after the return
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'joseph'));
console.log(yearsUntilRetirement(1950, 'bob')); 
*/



// l38 Coding challenge #1 ////////////////////////////////////////////////////////////////////////////////////
// l38 Coding challenge #1 ////////////////////////////////////////////////////////////////////////////////////
// l38 Coding challenge #1 ////////////////////////////////////////////////////////////////////////////////////
/*
const calcAverage = (a,b,c) => (a+b+c) / 3;

// test 1
let avgDolphins = calcAverage(44,23,71);
let avgKoalas = calcAverage(65,54,49); //no team wins
console.log(avgDolphins, avgKoalas);

function checkWinner(teamA, teamB){
    if (teamA >= 2 * teamB){
        console.log("Dolphins Win!");
    } else if (teamB >= 2 * teamA){
        console.log("Koalas Win!");
    } else {
        console.log("no winner");
    }
}

checkWinner(avgDolphins, avgKoalas); // Dolphins win

checkWinner( 575, 111) // Dolphins win 

// test 2
avgDolphins = calcAverage(85,54,41); // i can only change thease variables because because they are let and not const
avgKoalas = calcAverage(23,34,27); //Dolphins win
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);
 */

// l39.Introduction to Arrays ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// l39.Introduction to Arrays ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// l39.Introduction to Arrays ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// Array - literal syntax- most common
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// Another way - less common usage
const year = new Array( 1991, 1984, 2008, 2020);
console.log(year);

console.log(friends[0]); // first index of array friends
console.log(friends[2]); // third index

console.log(friends.length);
console.log(friends[friends.length -1]); // dynamically selects the last item in an array

friends[2] = 'Jay'; // this works I can change the value of a const array 
console.log(friends);
// friends = ['Bob', 'Alice']// this dosent work however i cant change the whole array

const firstName = 'Jonas';
const jonas = ['Jonas', 'Schnedtmann', 2037 - 1991, 'teacher', friends]; // friends is an array placed inside another array
console.log(jonas);

// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

// can not call operations on arrays

// we can place function calls into an array , they will produce a value
const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length - 1])]
console.log(ages);
*/

// l40. Basic Array Operations(Methids)  ////////////////////////////////////////////////////////////////////////////
// l40. Basic Array Operations(Methids)  ////////////////////////////////////////////////////////////////////////////
// l40. Basic Array Operations(Methids)  ////////////////////////////////////////////////////////////////////////////
/*
// Methods
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); //adds to end of array
console.log(friends);
console.log(newLength); // returns value of 4 (Lingth)

friends.unshift('John'); // adds to begenning of array
console.log(friends);

friends.pop(); // removes element from the end
const popped = friends.pop();
console.log(friends);
console.log(popped); // returns last name to be popped

const shifted = friends.shift(); // removes first element
console.log(friends);
console.log(shifted); // removes most recently shifted array item

console.log(friends.indexOf('Steven')); // tells me the index that steven is located
console.log(friends.indexOf('bob'));// bob is not in the array so -1 is returned

friends.push(23);
console.log(friends.includes('Steven')); // true because steven is in the array
console.log(friends.includes('bob'));// returns false because the array does not include bob
console.log(friends.includes('23')); // false because includes is looking for strict equality , ===
console.log(friends.includes(23)); // true

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
 */

//  l41 Codeing Challange #2 /////////////////////////////////////////////////////////////////
//  l41 Codeing Challange #2 /////////////////////////////////////////////////////////////////
//  l41 Codeing Challange #2 /////////////////////////////////////////////////////////////////
/*
// first attempt

function calcTip(bill){
    if(bill >= 50 && bill <= 300){
       return bill * .15;
    } else{
        return bill * .2
    }
}

console.log(calcTip(125));
console.log(calcTip(555));
console.log(calcTip(44));

const bills = [125, 555, 44];

const tips = [18.75, 111, 8.8];

//  Walkthrough
 const calcTip = function (bill) {
     return bill >= 50 && bill <= 300 ? bill * 0.15:
     bill * .2;
 }

 const bills = [125, 555, 44];
 const tips = [ calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2]) ];
 console.log(bills, tips);
 const totals  = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2],] // this is how i can add 2 diffrent arrays together

 console.log(bills, tips, totals);
 */

//  l42. Intro to Objects///////////////////////////////////////////////////////////
//  l42. Intro to Objects///////////////////////////////////////////////////////////
//  l42. Intro to Objects///////////////////////////////////////////////////////////
/*

//  object literal
//  order is irrelivant
 const jonas = {
     firstName: 'Jonas',
     lastName: 'Schmedtmann',
     age: 2037 - 1991,
     job: 'teacher',
     friends: ['Mitchael', 'Peter', 'Steven']
 }
 */

//  l43.Dot vs Bracket notation /////////////////////////////////////////////////////////////////////
//  l43.Dot vs Bracket notation /////////////////////////////////////////////////////////////////////
//  l43.Dot vs Bracket notation /////////////////////////////////////////////////////////////////////
/*

 //  object literal
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Mitchael', 'Peter', 'Steven']
}
console.log(jonas);
console.log(jonas.lastName); // Dot Notation
console.log(jonas['lastName']);// Bracket Notation

const nameKey = 'Name';
console.log(jonas['first' + nameKey]); // logs the first name i can do expressions witg bracket notation
console.log(jonas['last' + nameKey]); // logs the last name

//console.log(jonas.'last' + nameKey); // not a thing with dot notation

// prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// console.log(jonas.interestedIn); // wont work because of dot notation 

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
console.log(jonas[interestedIn]); // works witg bracket notation

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman'
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.j`);
 */

//  Object Methods ////////////////////////////////////////////////////////////////////
//  Object Methods ////////////////////////////////////////////////////////////////////
//  'this' keyword intro ////////////////////////////////////////////////////////////////////
/*

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Mitchael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // Method - any function that is attached to an abject
    // calcAge: function(birthYear) { // same as the function below without the const and witg a : instead
    //     return 2037 - birthYear;
    // }

// "this keyword or "this" variable is basically equal to the object on which the method is called. in other words  it is = to object calling the method
//     calcAge: function() {
//         console.log(this); // this logs the full jonas object, thats because it is being called in a method within thge jonas object
//         return 2037 - this.birthYear;// here 'this' allows me to 
//     }
// };

// Challange
// My Attempt - not successful
    calcAge: function() {
        this.age = 2037 - this.birthYear; // creates a new property 'age' with a value of 2037 -this.birthyear.
        return this.age;//
    },

    // getSummary: function(){
    //     console.log(`${this.firstName} is a ${this.age}-year old teacher, and he has ${x} driver's license `);
    //     if(hasDriversLicense = true){
    //         return x ='a'
    //     }else{
    //         return x = 'no'
    //     }
    // }

// Walkthrough
getSummary: function() {
    return `${this.first} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license. `
    }
  };

console.log(jonas.calcAge()); // accessing an objects method

console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());

// console.log(jonas['calcAge'](1991)); // same action with bracket notation
// ctrl + d adds cursor at the next occurance
 */

// s3. Codeing Challange #3 ////////////////////////////////////////////////////////////////////////////////
// s3. Codeing Challange #3 ////////////////////////////////////////////////////////////////////////////////
// s3. Codeing Challange #3 ////////////////////////////////////////////////////////////////////////////////
/*
// my attempt- i think i aced it
const mark = { 
    firstName: 'Mark',
    lastName:'Miller',
    mass: 78,
    height: 1.69,
    calcBmi: function(){
    return this.mass / (this.height ** 2)
    }
}

const john = { 
    firstName: "John",
    lastName:'Smith',
    mass: 92,
    height: 1.95,
    calcBmi: function(){
    return this.mass / (this.height ** 2);
 }
}

if(mark.calcBmi > john.calcBmi) {
    console.log(`${mark.firstName} weighs ${mark.mass} kg and is ${mark.height} m tall`);
} else{
    console.log(`${john.firstName} weighs ${john.mass} kg and is ${john.height} m tall`);
}

// Walkthrough
const mark = { 
    firstName: 'Mark',
    lastName:'Miller',
    mass: 78,
    height: 1.69,
    calcBmi: function(){
    this.bmi = this.mass / (this.height ** 2); // instead of returning the calculation I create a new bmi property using 'this' keyword
    return this.bmi;
    }
}

const john = { 
    firstName: "John",
    lastName:'Smith',
    mass: 92,
    height: 1.95,
    calcBmi: function(){
    this.bmi = this.mass / (this.height ** 2); // same as with mark
    return this.bmi;
    }
}

if(mark.calcBmi > john.calcBmi) {
    console.log(`${mark.firstName} weighs ${mark.mass} kg and is ${mark.height} m tall`);
} else{
    console.log(`${john.firstName} weighs ${john.mass} kg and is ${john.height} m tall`);
}
*/

// l.46 Iteration: The for Loop //////////////////////////////////////////////////////////////////////////////////////
// l.46 Iteration: The for Loop //////////////////////////////////////////////////////////////////////////////////////
// l.46 Iteration: The for Loop //////////////////////////////////////////////////////////////////////////////////////
/*

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');
// console.log('Lifting weights repetition 11'); // lobor intensive

// for loop keeps running while condition is true
for(let rep = 1; rep <= 11; rep++){
    console.log(`Lifting weights repetition ${rep}`);
}
*/

// l.47 Looping Arrays, Breaking and Continuing ///////////////////////////////////////////
// l.47 Looping Arrays, Breaking and Continuing ///////////////////////////////////////////
// l.47 Looping Arrays, Breaking and Continuing ///////////////////////////////////////////
/*

// for loops are good for looping through arrays

const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher',
    ['Michael', 'Peter', 'Steven', true]

];
const types = [];

    for (let i = 0; i < jonas.length; i++) {
        console.log(jonas[i], typeof jonas[i]);// reading from jonas array

        // ways to fill arrays
        // types[i] = typeof jonas[i] // basically transcribes values of array jonas to array types
        // or
        types.push(typeof jonas[i]); // works best with push not unshift
        
    }

    console.log(types);

    const years = [1991, 2007, 1969, 2020]
    const ages = [];

    for(let i = 0; i < years.length; i++){
        ages.push(2037 - years[i]);
    }
    console.log(ages);

// Continue and Break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] !== 'string') continue; // if its not a string   continue

    console.log(jonas[i], typeof jonas[i]);
}


console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] === 'number') break; // after a number is found the loop is terminated

    console.log(jonas[i], typeof jonas[i]);
}
*/

// l48 Looking Backwards and loops ////////////////////////////////////////////////////////////
// l48 Looking Backwards and loops ////////////////////////////////////////////////////////////
// l48 Looking Backwards and loops ////////////////////////////////////////////////////////////
/*

const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher',
    ['Michael', 'Peter', 'Steven',]]

for(let i = jonas.length - 1; i >= 0; i--) {
    console.log(i,jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++){
    console.log(`------------ Starting exercise ${exercise} ---------------`);

    for(let rep = 1; rep <= 5; rep++){ // loop within a loop !!!!
        console.log(`Lifting weight repetition ${rep}`);
    }
}
*/

// l49 The while Loop ///////////////////////////////////////////////////////////////////////////
// l49 The while Loop ///////////////////////////////////////////////////////////////////////////
// l49 The while Loop ///////////////////////////////////////////////////////////////////////////
/*

// // // for loop example
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// while loops - more versitail- dosent require a counter. it just needs the condetion to be true
let rep = 1;
while (rep <= 10){ // runs while this condetion is true
    // console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6){ // meaning the loop will continue while the number isint 6
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('Loop is over');
}// runs a random number until the 6 is reached then the loop ends
*/

// l50 Codeing Challenge # 4 ////////////////////////////////////////////////////////
// l50 Codeing Challenge # 4 ////////////////////////////////////////////////////////
// l50 Codeing Challenge # 4 ////////////////////////////////////////////////////////
/*

// my attempt at an attempt
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals[];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15:
    bill * .2;
}const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

/*

// walkthrough
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15:
    bill * .2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]) // creats a new tip value each iteration
    tips.push(tip); // push value of tip to array tips
    totals.push(tip + bills[i]) // adds value of tip and bill
}
console.log(bills, tips, totals);

const calcAverage = function(arr){
    let sum = 0;
    for(let i =0; i < arr.length; i++) {
    // sum = sum + arr[i]; 
       sum += arr[i]; 
    }
    return sum / arr.length;
}
calcAverage([2,3,7]);
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/ 

