'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function(date, locale) {
  const calcDaysPassed = (date1, date2) => 
  Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if(daysPassed === 0) return 'Today';
  if(daysPassed === 1) return 'Yesterday';
  if(daysPassed <= 7) return `${daysPassed} days ago`;

    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date)
};

const formatCur = function(value, local, currency) {
  return new Intl.NumberFormat(local, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  
  const movs = sort 
  ? acc.movements.slice().sort((a, b) => a - b) 
  : acc.movements;
  
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.local);
    
    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div> 
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const formattedMov = 


  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
  
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);
  
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);


  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
  
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

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function() {
  const tick = function() {
    const min = String(Math.trunc(time / 60)).padStart(2, 0); 
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    
    // When 0 seconds, stop timer and log out user
    if(time === 0) {
      clearInterval(timer); 
      labelWelcome.textContent ='Log in to get started'
      containerApp.style.opacity = 0;
    }
    // decrease 1s(decrement)
    time-- // time = time -1
  }
  //  Set time to 5 minutes
  let time = 300;
  // Call the timer every second
  tick()
  const timer = setInterval(tick , 1000);
  return timer;
};
///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// // FAKE BEING LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount)
// containerApp.style.opacity = 100;



btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);
    
    if (currentAccount?.pin === +inputLoginPin.value) {
      // Display UI and message
      labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    
    // Create current date and time
    const now = new Date();
    // Experimenting API
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric', // can also be set to  - 'long' , '2-digit'
      year: 'numeric', // can also be set to  '2-digit'
      // weekday: 'long'
    };
    // const locale = navigator.language; // checks the browser language
    // console.log(locale)
    
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
    
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
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

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value); // rounding loan ammount to floor

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function() { // Add movement
    currentAccount.movements.push(amount);

    // Add Loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset Timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }, 2500)
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
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
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


/////////////////////////// CONVERTING AND CHECKING NUMBERS /////////////////////////////////
/////////////////////////// CONVERTING AND CHECKING NUMBERS /////////////////////////////////
/////////////////////////// CONVERTING AND CHECKING NUMBERS /////////////////////////////////
/*


console.log(23 === 23.0);

// Base 10 - 0 to 9. 1/10 = 0.1   3/10 = 3.3333333...
// Binary base 2 - 0 1
console.log(0.1 + .2);
console.log(0.1 + 0.2 === 0.3);

console.log(Number('23')); // 23 converts to number
console.log(+'23'); // 23 also converts from string number

// Parsing
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e23',10 )); // Nan

console.log(Number.parseInt('  2.5rem')); // 2
console.log(Number.parseFloat('   2.5rem')); // 2.5

// console.log(parseFloat(' 2.5rem '));

console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+ '20x')); // true
console.log(Number.isNaN(23 / 0)); // false , deviding by 0 gets infintiy

console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+ '20x')); // false
console.log(Number.isFinite(23 / 0)); // false because deviding by 0

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false
*/


//////////////////////// 167 Math and Rounding ////////////////////////////////
//////////////////////// 167 Math and Rounding ////////////////////////////////
//////////////////////// 167 Math and Rounding ////////////////////////////////
/*

console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2 , cubic root

console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23, does type cohersion
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN, does not parse

console.log(Math.min(5, 18, 23, 11, 2)); // 2
console.log(Math.min(5, 18, 23, 11, '2')); // 2 type cohersion
console.log(Math.min(5, 18, 23, 11, '2px')); // NaN does not parse

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.floor(Math.random() * 6) + 1); // whole random number between 1 and 6

const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1)
// console.log(randomInt(10, 20));

// Rounding integers

console.log(Math.round(23.3)); // 23, rounds to nearest intiger
console.log(Math.round(23.9)); // 24, rounds to nearest intiger

console.log(Math.ceil(23.3)); // 24, Rounds up 
console.log(Math.ceil(23.9)); // 24, Rounds up either way

console.log(Math.floor(23.3)); // 23 , always rounds down
console.log(Math.floor(23.3)); // 23 "  "

console.log(Math.trunc(-23.3)); // -23 
console.log(Math.floor(-23.3)); // -24 floor works better for positive and negative numbers

// Rounding decimals
console.log((2.7).toFixed(0)); // returns string 3
console.log((2.7).toFixed(3)); // returns string 2.700
console.log((2.345).toFixed(2)); // returns string 2.35
console.log(+(2.345).toFixed(2)); // returns number 2.35

*/

//////////////////////// 168 The Remainder Operator //////////////////////////////////////
//////////////////////// 168 The Remainder Operator //////////////////////////////////////
//////////////////////// 168 The Remainder Operator //////////////////////////////////////
/*

console.log(5 % 2); // 1 , remainder
console.log(5 / 2); // 2.5

console.log(8 % 3); // 2, remainder 
console.log(8 / 3); // 2.6666666666666665

console.log(7 % 2); // 0
console.log(7 / 2); // remainder 3

const isEven = n => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(514)); // true

labelBalance.addEventListener('click', function() {
[...document.querySelectorAll('.movements__row')].forEach(function(row, i) {
  // 0, 2, 4, 6
  if (i % 2 === 0) row.style.backgroundColor = 'orangered';
  // 0, 3, 6, 9
  if(i % 3 === 0) row.style.backgroundColor = 'blue';
})
})

*/

//////////////////// 169 Working with Bigint /////////////////////////////
//////////////////// 169 Working with Bigint /////////////////////////////
//////////////////// 169 Working with Bigint /////////////////////////////
/*


console.log(2 ** 53 - 1); // 9007199254740991 Max safe number
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// normal js cant handle numbers larger than the one above without errpr
// numbers larger cant be saved
console.log(2 ** 53 + 1); // all unsafe numbers
console.log(2 ** 53 + 2); // all unsafe numbers
console.log(2 ** 53 + 3); // all unsafe numbers
console.log(2 ** 53 + 4); // all unsafe numbers

// console.log(82409572048348204875034875028475308470294872); // 8.24095720483482e+43
console.log(82409572048348204875034875028475308470294872n); // the n transforms it into the big intiger
console.log(BigInt(824095720483)); // not quite as accurate , best with smaller intigers

console.log(10000n + 10000n); // works
console.log(747474747474747747474744477777777777777777777777777447n * 100000000000000000000n); // works
// console.log(Math.sqrt(16n)); // dosent work

const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));

// exceptions
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n) // bigint
console.log(20n == '20') // true

console.log(huge + ' is REALLY big!!!');

// Divisions 
console.log(10n / 3n); // 3n
console.log(11n / 3n); // 3n
console.log(10 / 3); // 3.33333333333335
*/

///////////////////////// 170 Creating Dates /////////////////////////////////
///////////////////////// 170 Creating Dates /////////////////////////////////
///////////////////////// 170 Creating Dates /////////////////////////////////
/*


// Create a date
const now = new Date(); // the date
console.log(now);

console.log(new Date('Jan 22 2021 17:47:04'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5)); // year, month(0 index based), day, hour, min, second
console.log(new Date(2037, 10, 31)); // not 31 days in november , corrects to - Tue Dec 01 2037 00:00:00 GMT-0800 (Pacific Standard Time)

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // calculating a timestamp

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future); // Thu Nov 19 2037 15:23:00 GMT-0800 (Pacific Standard Time)
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); //19
console.log(future.getDay()); // 4
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0
console.log(future.toISOString()); // ISO format- 2037-11-19T23:23:00.000Z
console.log(future.getTime()); // timestamp - 2142285780000

console.log(new Date(2142285780000)); // Thu Nov 19 2037 15:23:00 GMT-0800 (Pacific Standard Time)

console.log(Date.now()); //1611368992837, this moment
console.log(new Date(1611368992837)); // Fri Jan 22 2021 18:29:52 GMT-0800 (Pacific Standard Time)

future.setFullYear(2040);
console.log(future);
*/

////////////////////////// 172 Operations with dates //////////////////////
////////////////////////// 172 Operations with dates //////////////////////
////////////////////////// 172 Operations with dates //////////////////////
/*

const future = new Date(2037, 10, 19, 15, 23);
// console.log(Number(future)); // 2142285780000 , timestamp
console.log(+(future)); // " "

// // Non arrow example
// const daysPassed = function (date2, date1) {
//   return date2 - date1;
// }
// console.log(daysPassed(9, 3));

const calcDaysPassed = (date1, date2) => Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));// devided by 1000 ms, 60 s, 60 m, 24hours

const days1 = calcDaysPassed(new Date(2037, 3, 4), 
new Date(2037, 3, 14, 10, 8));

console.log(days1); // 10

*/
 
////////////////////// 174  Internationalizing Numbers (Intl) ////////////////////////////
////////////////////// 174  Internationalizing Numbers (Intl) ////////////////////////////
////////////////////// 174  Internationalizing Numbers (Intl) ////////////////////////////

/*


const num = 3884764.23;

const options = {
  style: 'currency', // can also be - unit, percent(unit is ignored)
  unit: 'celsius',
  // unit: 'mile-per-hour',
  currency: 'EUR',
  // useGrouping: false
}

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num)); // US:  3,884,764.23
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num)); // Germany:  3.884.764,23
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num)); // ٣٬٨٨٤٬٧٦٤٫٢٣
console.log('navigator.language', new Intl.NumberFormat(navigator.language, options).format(num)); // navigator.language 3,884,764.23

*/

///////////////////////// 175 SetTimeout and setInterval //////////////////////////////////
///////////////////////// 175 SetTimeout and setInterval //////////////////////////////////
///////////////////////// 175 SetTimeout and setInterval //////////////////////////////////
/*


// setTimeout
const ingredients = ['olives', 'spinach']
const pizzaTimer = setTimeout(
(ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`)
,3000,
...ingredients
);
console.log('waiting...');

if(ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
setInterval(function(){
  const now = new Date();
  console.log(now);
}, 1000);

*/