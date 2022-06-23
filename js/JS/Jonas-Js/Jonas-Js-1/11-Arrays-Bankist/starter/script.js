'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'; // if mov value is greater than 0 then 'deposit' else 'withdraw'

    const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
      <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html); // inserting html above

  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)                 // filter for greater than 0
    .reduce((acc, mov) => acc + mov, 0);    // accumulating filtered movements
  labelSumIn.textContent = `${incomes}€`;   // changes html text content

  const out = acc.movements
    .filter(mov => mov < 0)                       // filter for less than 0
    .reduce((acc, mov) => acc + mov, 0);          // add filtered numbers together
  labelSumOut.textContent = `${Math.abs(out)}€`;  // change text content to absolute value of out

  const interest = acc.movements
    .filter(mov => mov > 0)                 // filter for movements greater than 0
    .map(deposit => (deposit * acc.intrestRate) / 100)  // calculate new array intrest values
    .filter((int, i, arr) => {             // filter
      // console.log(arr);                     // log array 
      return int >= 1                        // filter for greater or equal to 1
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};


const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
// console.log(accounts); // to see how its working

const updateUI = function (acc) {
  displayMovements(acc.movements);     // Display movements
  calcDisplayBalance(currentAccount);  // Display balance
  calcDisplaySummary(currentAccount);  // Display summary
}

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) { // add the e for event event
  e.preventDefault();      //Prevent form from submitting

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Didplay UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
      }`
    containerApp.style.opacity = 100;

    // clear input fields 
    inputLoginUsername.value = inputLoginPin.value = ''; // sets user and pin to nothing
    inputLoginPin.blur();

    updateUI(currentAccount)// Update UI
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';


  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount)
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount)
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();


  if (
    inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


/////////////////////////////////////////////////
/*
let arr = ['a', 'b' ,'c', 'd', 'e'];

//SLICE - makes copy of array
console.log(arr.slice(2)); // (3) ["c", "d", "e"]
console.log(arr.slice(2,4)); // (2) ["c", "d"] , end peramiter is not included in the output
console.log(arr.slice(-2)); // (2) ["d", "e"] , last 2 elements of array
console.log(arr.slice(-1)); // (2) ["e"] , last element of array
console.log(arr.slice(1, -2)); //["b", "c"] , starts with index one and cuts off the last 2
console.log(arr.slice()); // (5) ["a", "b", "c", "d", "e"]
console.log([...arr]);

//SPLICE - removes from array
// console.log(arr.splice(2));
arr.splice(-1); // -1 refers to the start index
console.log(arr); // (4) ["a", "b", "c", "d"]
arr.splice(1,2); // 2 refers to the elements to be deleted
console.log(arr); // (2) ["a", "d"]

// Reverse
arr = ['a', 'b' ,'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // (5) ["f", "g", "h", "i", "j"]
console.log(arr2); // as we can see the original array has been mutated

// CONCAT - adds arrays together as does the spread(...) operator
const letters = arr.concat(arr2) // (10) ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
console.log(letters);
console.log([...arr, ...arr2]); // (10) ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

// JOIN
console.log(letters.join(' - ')) // a - b - c - d - e - f - g - h - i - j



// forOf
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} you deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`) //  im assuming Math.abs takes away the minus symbol
  }
}

// forEach - can not use break statement with forEach
console.log('----------- FOREACH -------------')
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} you deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`) //  im assuming Math.abs takes away the minus symbol
  }
});

// MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});


// SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR',]);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map) {
  console.log(`${value}: ${value}`)
});

*/


//////////////////////////// Coding Challenge #1 //////////////////////////////
//////////////////////////// Coding Challenge #1 //////////////////////////////
//////////////////////////// Coding Challenge #1 //////////////////////////////

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉


TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

const checkDogs = function(dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1); // ometting the first one
  dogsJuliaCorrected.splice(-2) // ometting the last 2
  console.log(dogsJuliaCorrected); // [5, 2]
  // console.log(dogsJulia.slice(1, 3))  // slice method gets same result with one line
  const dogs = dogsJuliaCorrected.concat(dogsKate); // add array dogsJulia to dogsKate set = to dogs
  console.log(dogs);
  // "Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy🐶"
  dogs.forEach(function(dog, i) {
    if(dog >= 3){
      console.log(` Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};
// checkDogs([3,5,2,12,7], [4, 1, 15, 8, 3])
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])
*/

////////////////////////////////// 147 The Map Method //////////////////////////////////////////
////////////////////////////////// 147 The Map Method //////////////////////////////////////////
////////////////////////////////// 147 The Map Method //////////////////////////////////////////
/*




const eurToUsd = 1.1;

// Map Method - Better for functional programing
// const movementsUSD = movements.map(function (mov) { // for each mov in movements
//   return mov * eurToUsd; // multiply by eurToUsd, add to new array
// });

// Arrow functiin Version - remove function keyword , add arrow, remove un needed perenthesies, remove brackets, remove return keyword
const movementsUSD = movements.map(mov =>  mov * eurToUsd );

console.log(movements);
console.log(movementsUSD);

// same thing with for of loop
const movementsUSDfor = []; // in this case we had to make an empty array
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd); // and push the results into it
console.log(movementsUSDfor);

    // more Map work
const movementsDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1} you deposited ${mov}`; // i can have 2 return statements as long as only one is returned
  } else {
    return `Movement ${i + 1} You withdrew ${Math.abs(mov)}`
  }
});
console.log(movementsDescriptions);


   // more Map work like above with turnaty operator instead of if statement
const movementsDescriptionsArrow = movements.map((mov, i) => `Movement ${i + 1} You ${mov > 0 ?  'deposited' : 'withdrew'} ${Math.abs(mov)}` );

console.log(movementsDescriptionsArrow);
*/

//////////////////////////////////// Filter Method ////////////////////////////
//////////////////////////////////// Filter Method ////////////////////////////
//////////////////////////////////// Filter Method ////////////////////////////

/*


// filter Method , arrow
const deposits = movements.filter(mov => mov > 0); // if true the mov is returned

console.log(movements);
console.log(deposits);

// For Of example of same
const depositsFor = []; // create a array for movs greater than 0
for(const mov of movements) if (mov > 0) depositsFor.push(mov)
console.log(depositsFor);

// withdraws Filter Method , arrow
const withdraws = movements.filter(mov => mov < 0);
console.log(withdraws);

// withdraws For Of Example
const withdrawsFor = []; // creating array
for(const mov of movements) if (mov < 0) withdrawsFor.push(mov); // pushing ones that are true
console.log(withdrawsFor);

*/

///////////////////////////////// Reduce Method /////////////////////////////
///////////////////////////////// Reduce Method /////////////////////////////
///////////////////////////////// Reduce Method /////////////////////////////
/*



console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function(acc, cur, i, arr) {
  //   console.log(`Iteration ${i}: ${acc}`)
//   return acc + cur; // accumulator + current
// }, 0); // 0 is the initial value
// console.log(balance); // 3849

// arrow version
const balanceArrow = movements.reduce((acc, cur, i) =>  acc + cur, 0);
console.log(balanceArrow); // 3849


// with for loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2); // same

// Maximum value Reduce
const max = movements.reduce((acc, mov) => {
  if (acc > mov)return acc;
  else
  return mov;
}, movements[0])

console.log(max); // 3000 , max movement

*/



//////////////////////////// Coding Challenge #2 ////////////////////////////
//////////////////////////// Coding Challenge #2 ////////////////////////////
//////////////////////////// Coding Challenge #2 ////////////////////////////

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

const calcAverageHumanAge = function(ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  console.log(humanAges);
  const adults = humanAges.filter(age => age >= 18)
  console.log(humanAges);
  console.log(adults);
  
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  
  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
*/



///////////////////////// The Majic of Chaining Methods ///////////////////////////////////
///////////////////////// The Majic of Chaining Methods ///////////////////////////////////
///////////////////////// The Majic of Chaining Methods ///////////////////////////////////
/*



const eurToUsd = 1.1;
console.log(movements);

// PIPELINE
const totalDepositsUSD = movements
.filter(mov => mov > 0) // filter movements greater than 0
.map((mov, i, arr) => {
  // console.log(arr);
  return mov * eurToUsd
})
// .map(mov => mov * eurToUsd) // change filtered from euro to usd
.reduce((acc, mov) => acc + mov, 0) // add those together
console.log(totalDepositsUSD);
*/


///////////////////////////// Coding Challenge #2/////////////////////////////////////////
///////////////////////////// Coding Challenge #2/////////////////////////////////////////
///////////////////////////// Coding Challenge #2/////////////////////////////////////////


/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀


const calcAverageHumanAge2 = function(ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  console.log(humanAges);
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);
  
  const average = adults.reduce((acc, age, i, age) => acc + age  / arr.length, 0);
  
  
  return average;
};

const calcAverageHumanAge = ages => 
ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4))
.filter(age => age >= 18)
.reduce((acc, age, i, age) => acc + age  / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

//////////////////////// The Find Method ///////////////////////////////////
//////////////////////// The Find Method ///////////////////////////////////
//////////////////////// The Find Method ///////////////////////////////////
/*


const firstWithdrawl = movements.find(mov => mov < 0); // returns first mov that is les sthan 0

console.log(movements);
console.log(firstWithdrawl); // -400 returns first instance

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);



console.log(movements);

// Equality
console.log(movements.includes(-130));

// SOME:Condition
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0)); //false
console.log(account4.movements.every(mov => mov > 0)); //true

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.some(deposit));


const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // makes arr and array of arrays into a single array

const arrDeep = [[[1, 2, 3], [4, 5, 6]], 7, 8]; // array in array in array
console.log(arrDeep.flat(2)); // only goes one level deep when flattening an array unless i add number greater than 1 for the argument

const accountMovements = accounts.map(acc => acc.movements); // copies  movements from each account into their own arrays
console.log(accountMovements);
// const allMovements = accountMovements.flat(); // takes those arrays and places the values into one
// console.log(allMovements); 
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0); // adds movements together
// console.log(overalBalance); // 17840

// flat same as above more concice with chaining
const overalBalance = accounts
.map(acc => acc.movements)           // copies  movements from each account into their own arrays
.flat()                              // takes those arrays and places the values into one
.reduce((acc, mov) => acc + mov, 0); // adds movements together
console.log(overalBalance);            // 17840

// flatMap 
const overalBalance2 = accounts
.flatMap(acc => acc.movements) // flatMap only works 1 level deep                                        
.reduce((acc, mov) => acc + mov, 0); 
console.log(overalBalance2);            
*/

/////////////////////////// 160 Sorting Arrays /////////////////////////////////////////
/////////////////////////// 160 Sorting Arrays /////////////////////////////////////////
/////////////////////////// 160 Sorting Arrays /////////////////////////////////////////
/*





// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // Mutates original array to alphabetical order
console.log(owners);

// Numbers
console.log(movements);
// console.log(movements.sort()); //turns em int strings - the numbers are alphabetically ordered by the first digit not nrumaric value

// Ascending 
movements.sort((a, b) => {
  if (a > b) return 1; // return < 0, A, B (keep order)
  if (b > a) return -1; // return > 0, B, A (switch order)
});
console.log(movements);

// Descending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});

console.log(movements);

//  a better way Descending
movements.sort((a, b) => b - a);
console.log(movements);

//  a better way Asending
movements.sort((a, b) => a - b);
console.log(movements);

*/

/////////////////////// 161 more ways of creating and filling arrays /////////////////////
/////////////////////// 161 more ways of creating and filling arrays /////////////////////
/////////////////////// 161 more ways of creating and filling arrays /////////////////////

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5)); // dosent work
x.fill(1, 3, 5); // ?
x.fill(1); // array of 7 ones
console.log(x); 

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({length: 7}, () => 1); // array of seven 1's
console.log(y);

const z = Array.from({length: 7}, (_, i) => i + 1) // array from 1 - seven
console.log(z);


labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value')
  );
  
  console.log(movementsUI.map(el => Number(el.textContent.replace('€', '')))
  );
console.log(movementsUI);

});

///////////////////// Summary: Which array method to use /////////////////////////
///////////////////// Summary: Which array method to use /////////////////////////
///////////////////// Summary: Which array method to use /////////////////////////

                          //MUTATE ORIGINAL ARRAY
    // ADD TO ORIGINAL
.push() // end
.unshift() // start

    // REMOVE FROM ORIGINAL
.pop() // end
.shift() // start
.splice() // any

    // OTHERS
.reverse()
.sort()
.fill()

                          // A NEW ARRAY
    //COMPUTED FROM ORIGINAL:
.map()

    // FILTERED USIND CONDITION:
.filter()

    // Portion of original
.slice()

    // Adding opriginal to other
.concat()

    //flattening the original
.flat()
.flatMap()

                                  // ARRAY INDEX
  // BASED IB VALUE
.IndexOf()

  // BASED ON TEST CONDITION
.findIndex()
                                  // AN ARRAU ELEMENT
  // BASED ON TEST CONDITION:
.find()
                                  // KNOw IF ARRAY INCLUDES
  // BASED ON VALUE:
.includes()
  // BASED ON CONDITION
.some()
.every()
                                  // A NEW STRING
  // based on separator string
.john()







