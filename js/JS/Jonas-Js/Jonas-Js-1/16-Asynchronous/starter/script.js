'use strict';

//////////// 243. Asynchronous JavaScript, AJAX and APIs//////////////
//////////// 243. Asynchronous JavaScript, AJAX and APIs//////////////
//////////// 243. Asynchronous JavaScript, AJAX and APIs//////////////
/*

// regular synchronous code
//synchrinous code runs line by line one after the other
// each line of code waits for the prrevious line to finish execution
const p = document.querySelector('.p');
p.textContent = 'My name is Jonas!';
alert('Text set !'); // this alert blocks code execution (cant move to next line untill we click ok)
p.style.color = 'red';

// asynchronous example
const p = document.querySelector('.p');
setTimeout(function () { // this part is asynchronous it is passed off to be watched by the browser while the next line is completed.
  p.textContent = 'My name is Jonas';
}, 5000);// it is passed off to be watched by the browser while the next line is completed.
p.style.color = 'red';
// after the timeout the browser then hands the task back onto the callstack


// another example
const img = document.querySelector('.dog');
img.src = 'dog.jpg'; // async, nonblocking, setting the souce attribute of an image is loading it in the background while the rest of the code can keep running
img.addEventListener('load', function () { // callback runs after image loads (not async)
  img.classList.add('fadeIn');
});
p.style.width = '300px';
// event listeners as well as callbacks alone does not make code asynchronous

// AJAX - Asynchronous Javascript And XML Allows us to communicate with remote web servers in an asynchronous way. 
// with AJAX calls, we can request data from web servers dynamically.
// when communicating with the server It is usually an api within the server that our code is working with called an api
// API-Application Programming Interface: Piece of software that can be used by another piece of software. in order to allow applications to talk to each other.
// basically software that other software can interact with
// there are many types of api: DOM API, Geolocation API, Own Class API ...
// Online API(web) - Application running on a server, that recieves requests for data, and sends data back as response
// we can build our own web API's (requires back-end development, e.g with node.js) or use 3rd-party APIs (Theres is an API for everything)
*/

////////////////// 244. Our First AJAX Call: XMLHttpRequest ////////////////////////
////////////////// 244. Our First AJAX Call: XMLHttpRequest ////////////////////////
////////////////// 244. Our First AJAX Call: XMLHttpRequest ////////////////////////
/*

// the API we are going to use is on githubs public api page
// its called REST Countries
// we should choose api's with a status of CORS (Cross Origin Resource Sharing) set to yes or to unknown, without which we can not access a 3rd party apy from our own code

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//ajax calls used to be handled with events and callback functions
const getCountryData = function(country) { // take everything we did and places it into a function with country as a peramiter
  const request = new XMLHttpRequest();// first ajax call, it is async(non blocking)
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`); //  GET is the type of request, next peramiter is the url to witch we make the call(api)
  // data = request.send(); // this dosent work because the result is not ready yet, Instead we do the load event listener below
  request.send(); // send off the request
  console.log(request.responseText); // a string of JSON text
  
    request.addEventListener('load', function() { // when request (load event) is fired we handle that data
      const [data] = JSON.parse(this.responseText); // JSON.parse turns the JSON text into an abject, set it to destructured data to get just the portugal object
      console.log(data);
  
      // here we build the heml architecture and fill in data.methods instead of manual content
      const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
      `;
      countriesContainer.insertAdjacentHTML('beforeend', html); // inserting html we just created to div .countries
      countriesContainer.style.opacity = 1; // setting the opacity back to one
    });
};

getCountryData('portugal'); // if I reload the code a couple times the order will change when rendered
getCountryData('usa'); // this is an example of the asynchronous (nonblocking) nature of this kind of request
getCountryData('germany'); // 3 ajax calls firing at the same time. first one renders first
*/

///////////245. [OPTIONAL] How the Web Works: Requests and Responses ///////////
///////////245. [OPTIONAL] How the Web Works: Requests and Responses ///////////
///////////245. [OPTIONAL] How the Web Works: Requests and Responses ///////////
/*

DNS - Domain Name Service - special kind of server 'like phonebooks of the internet'
step 1. browser makes a request to a dns which will match the web address of the url to to the servers real IP address(all happens through inet provider)
the domain is not the real address

*/


///////////////////// 246.Welcome to Callback Hell///////////////////////
///////////////////// 246.Welcome to Callback Hell///////////////////////
///////////////////// 246.Welcome to Callback Hell///////////////////////
/*
const renderCountry = function(data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function(country) {
  
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  
  request.addEventListener('load', function() { // this callback functuin containes a callback function 
    const [data] = JSON.parse(this.responseText);
    console.log(data);  

       // Render country
    renderCountry(data);

        // Get neibour country
    const [neighbour] = data.borders;

    if(!neighbour) return;

        // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)

*/

//////////////////////// 247.Promises and the Fetch API /////////////////////////////
//////////////////////// 247.Promises and the Fetch API /////////////////////////////
//////////////////////// 247.Promises and the Fetch API /////////////////////////////
/*
// Promise : an object that is used as a placeholder for the future result of an asynchronous operation
// or A container for an asynchronously delivered value
// or A container for a future value

*/
  
  ////////////////////////////// 248. Consuming Promises /////////////////////////////////
  ////////////////////////////// 248. Consuming Promises /////////////////////////////////
////////////////////////////// 248. Consuming Promises /////////////////////////////////
/*
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

// the old way example from above
// const getCountryData = function(country) { 
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//   .then(function (response) { // calling the fetch function like this will immidietly return a promise that will start out pending until it is setteled in either a filled or a rejected state
//    // to handle the this fufilled state we use the .then method that is available on all promises, into the then method we want to pass a callback function that we want to be exicuted as soon as the promise is  filled with an argument that is the resulting value of fufilled promise
//     console.log(response); // logs the response object
//     return response.json(); // json method is available on all the response objects comming from the fetch function , reads the data and creates a new promise
//   }) // .then on the new promise created
//   .then(function (data) {
//     console.log(data);
//     renderCountry(data[0]);
//   });
// };

// same as above with arrow
const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`) // this fetches something and immidietly returns a promise
    .then(response => response.json()) // we get a response which we transform to json which also returns a promise
    .then(data => renderCountry(data[0])); // we use .then again on the promise created by previous .then,  we take the that data and render the country to the DOM
};

getCountryData('portugal');
*/

/////////////////////////////////  249. Chaining Promises ////////////////////////////////
/////////////////////////////////  249. Chaining Promises ////////////////////////////////
/////////////////////////////////  249. Chaining Promises ////////////////////////////////
/*

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

// here we demonstrate a flat chain of functions that is a more elegant solution than 'callback hell'
const getCountryData = function (country) {

  // Country 1 first AJAX call
  fetch(`http://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => { 
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if(!neighbour) return; // if there is no neighbour, return immidietly

      //Country 2 second AJAX call
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`) // second AJAX call needs to take place in this .then handler 
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};

getCountryData('portugal');
*/


//////////////////////////  250. Handling Rejected Promises /////////////////////////////////
//////////////////////////  250. Handling Rejected Promises /////////////////////////////////
//////////////////////////  250. Handling Rejected Promises /////////////////////////////////
/*

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    // countriesContainer.style.opacity = 1;
};

// a promise in which an error happens is rejected

const renderError = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
}

const getCountryData = function (country) {

  // Country 1
  fetch(`http://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => { 
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if(!neighbour) return;

      //Country 2
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => { // catching our first error
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again! `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    })   
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

getCountryData('jdfsdhfosid');
*/

/////////////////  251. Throwing Errors Manually /////////////////////
/////////////////  251. Throwing Errors Manually /////////////////////
/////////////////  251. Throwing Errors Manually /////////////////////
/*
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

const renderError = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
}



////////////////////////////

const getJSON = function(url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => { if (!response.ok)
  throw new Error(`${err} (${response.status})`);

  return response.json();
  });
}; 

// const getCountryData = function (country) {

//   // Country 1
//   fetch(`http://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if(!response.ok)
//         throw new Error(`Country not found (${response.status})`)// create a new error using a constructor function , we pass contents of error method, then we use throw which will immidietly terfminate the current function

//       return response.json()
//     })
//     .then(data => { 
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'dspapdof';

//       if(!neighbour) return;

//       //Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
//     })
//     .then(response =>  {
//       if(!response.ok)
//         throw new Error(`Country not found (${response.status})`); // create a new error using a constructor function , we pass contents of error method, then we use throw which will immidietly terfminate the current function
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again! `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     })   
// };

///////////////// a better version of above

const getCountryData = function (country) {
  // Country 1
  getJSON(`http://restcountries.eu/rest/v2/name/${country}`, 'Country not found')

    .then(data => { 
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if(!neighbour) throw new Error('No neighbour found');

      //Country 2
      return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`, 'Country not found');
    })
   
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again! `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    })   
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

// getCountryData('jdfsdhfosid');
*/

///////////////////// 252.Coding Challenge #1////////////////////
///////////////////// 252.Coding Challenge #1////////////////////
///////////////////// 252.Coding Challenge #1////////////////////

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀

const whereAmI = function(lat, lng) { // function takes in lat and lng 
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`) // uses API to reverse geo locate
  .then(res => {
    if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`); // throwing error
    return res.json();// returning to manually handle error
  }) 
  .then(data => {
    console.log(data);
    console.log(`You are in ${data.city}, ${data.country}`);

    return fetch(`http://restcountries.eu/rest/v2/name/${data.country}`);
  })
  .then(res =>  {
    if(!res.ok)
      throw new Error(`Country not found (${res.status})`);
        
      return res.json();
  })
  .then(data => renderCountry(data[0]))
  .catch(err => console.error(`${err.message} 💥`));
};     
whereAmI(52.508, 13.381); // You are in Mumbai, India
whereAmI(19.037, 72.873); // You are in Berlin, Germany
whereAmI(-33.933, 18.474); // You are in Cape Town, South Africa
*/

/////////////  253. Asynchronous Behind the Scenes: The Event Loop //////////////
/////////////  253. Asynchronous Behind the Scenes: The Event Loop //////////////
/////////////  253. Asynchronous Behind the Scenes: The Event Loop //////////////
/*
        JS Runtime In The Browser
JS Runtime - that inclueds all the things needed to run JS code
The heart of every JS RUNTIME is the engine where code is exicuted(Callstack) and objects are stored(Heap) in memory
JS has only one thread of exicution and con only do one thing at a time
WEB APIs - APIs provided to the engine but are not currently a part of JS itself(DOM, timers, Fetch API, Geolocation API ...)
CALLBACK QUEUE - Data structure that holds all the ready to be exicuted callback functions that are attached to some event that has occured   
EVENT LOOP - Sends callbacks from queue to call stack

??? If theres only one thread of exicution in the engine then how can asynchronous code be exicuted in a non blocking way ?????????????

Asynchronous tasks are run in the web APIs environment of the browser

if image below was loading in a synchronous way, it would be doing so in the callstack, blocking the execution of the rest of the code
*/
// el = document.querySelectir('img'); // select img element
// el.src = 'dog.jpg'; // set the source to dog.jpg, which will start to load this img asynchronously in the browser
// el.addEventListener('load', () => { // load event listener
//   el.classList.add('fadeIn'); // listener callback function
// });

// fetch('https://someurl.com/api') // Make AJAX call using the ferch api (asynchronous)
//   .then(res => console.log(res)); // ues .then method on the promise returned by the fetch function
/*
lets say the image has finished loading and therefor the load event is emitted on that image.
Next the callback for the event is put in the callback queue(ordered list of all the callbacks that are inline to be executed ) 
so if I set a timer for 5 seconds(callback) and there are other callbacks waiting in the callstack it will be placed in the back of the line
the timer deffinetly wont start before 5 seconds but it but it may take longer to be executed dependeng on where it is in line 
callback queue also contains callbacks from DOM events like clicks or key presses ...  
DOM Events are not really Asynchronoys behavior but they still use the callback queue to run their attached callbacks

    EVENT lOOP - looks into the callstack and determines weather it is empty or not(except global context), then if stack is indeed empty then it will take the first callback from the callback queue and put it on the callstack to be executd
    (event loop tick)
    Event Loop has the task of doing coordination between the callstack and the callbacks in the callback queue 
    JS language its self has no sense of time because everything that is asynchronous does not happen in the engine
     Runtime manages all async behavior, and event loop decides which code will be handled next.
     but the engine itsself simply runs the code it is given

     callbacks of promises have a special queue for themselves
     instead it is moved to the MICROTASK QUEUE which has priority over the callback queue
     MICROTASK QUEUE can escentially starve the callback queue(usually not a problem)
*/

/////////////////////  254. The Event Loop in Practice /////////////////////////
/////////////////////  254. The Event Loop in Practice /////////////////////////
/////////////////////  254. The Event Loop in Practice /////////////////////////
/*


console.log('Test start'); // 1 
setTimeout(() => console.log('0 sec timer'), 0); // 5 Timeout callback prioritized to be executed after the microtask
Promise.resolve('Resolved promise 1').then(res => console.log(res)); // 3 MicroTask queue resolved before callback queue

Promise.resolve('Resolved promise 2').then(res => { // 4
  for (let i = 0; i < 1000000000; i++) { // simulates that this microtask is taking a long time

  }
  console.log(res);
});

console.log('Test end'); // 2
*/

////////////////////// 255. Building a Simple Promise //////////////////////////
////////////////////// 255. Building a Simple Promise //////////////////////////
////////////////////// 255. Building a Simple Promise //////////////////////////
/*


// a PROMISE is a constructor function
const lotteryPromise = new Promise(function(resolve, reject) { // it takes in a function as a single argument called the executer
  
  console.log('lottery draw is happening');
  setTimeout(function() {
    if(Math.random() >= 0.5) {
      resolve('You Win 💰')
    } else {
      reject(new Error('You lost your money 💩'));
    }
  },2000)

});

// Consume the promise
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function(seconds) {
  return new Promise(function(resolve){
    setTimeout(resolve, seconds = 1000);
  });
};


wait().then(() => {
  console.log('1 second passed');
  return wait(1);
})
wait().then(() => {
  console.log('2 second passed');
  return wait(1);
})
wait().then(() => {
  console.log('3 second passed');
  return wait(1);
})
.then(() => console.log('4 second passed'));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)

Promise.resolve('abc') // .resolve() is static method on the promise constructor
.then(x => console.log(x)); 

Promise.reject('Problem').catch(x => console.error(x));
*/

////////////////// 256. Promisifying the Geolocation API /////////////////////
////////////////// 256. Promisifying the Geolocation API /////////////////////
////////////////// 256. Promisifying the Geolocation API /////////////////////
/*


// navigator.geolocation.getCurrentPosition( // accepts 2 callbacks
//   position => console.log(position), // success callback 
//   err => console.error(err) // error callback
// ); // this task is offloaded to the web api environment of the browser
// then it moves on to the next line
// console.log('yo yo yo'); // thus this is logged first while the first one resolves

const getPosition = function() {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition( // accepts 2 callbacks
    //   position => resolve(position), // success callback 
    //   err => console.reject(err) // error callback
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPosition().then(pos => console.log(pos));

// function from challange above
const whereAmI = function() { 
  getPosition()
  .then(pos => {
    const {latitude: lat, longitude: lng} = pos.coords;

    return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
  })
  .then(res => {
    if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
    return res.json();
  }) 
  .then(data => {
    console.log(data);
    console.log(`You are in ${data.city}, ${data.country}`);

    return fetch(`http://restcountries.eu/rest/v2/name/${data.country}`);
  })
  .then(res =>  {
    if(!res.ok) throw new Error(`Country not found (${res.status})`);
        
      return res.json();
  })
  .then(data => renderCountry(data[0]))
  .catch(err => console.error(`${err.message} 💥`));
};     

btn.addEventListener('click', whereAmI);
*/

////////////////////////// 257. Coding Challenge #2 /////////////////////////////
////////////////////////// 257. Coding Challenge #2 /////////////////////////////
////////////////////////// 257. Coding Challenge #2 /////////////////////////////
/*
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀


const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath) {
  return new Promise(function(resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function() {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function() {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg; // setting img as global variable

createImage('img/img-1.jpg')
  .then(img => {
     currentImg = img; // currentImg from global = to img in this function
     console.log('Image 1 loaded');
     return wait(2) // wait 2 seconds
    })
    .then(() => { // then complete function below
      currentImg.style.display = 'none'; // remove display property
      return createImage('img/img-2.jpg');
    })
    .then(img => {
      currentImg = img; // currentImg from global = to img in this function again
      console.log('Image 2 loaded');
      return wait(2); // wait 2 seconds again
    })
    .then(() => {
      currentImg.style.display = 'none'; // remove display property again
    })
    .catch(err => console.error(err));
*/

//////////  258. Consuming Promises with Async/Await ////////////
//////////  258. Consuming Promises with Async/Await ////////////
//////////  258. Consuming Promises with Async/Await ////////////
/*

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

// creating promises is the same
const getPosition = function() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function(country) { // ASYNC FUNCTION - keeps running in the background while preforming the code inside it.
  // Geolocation 
  const pos = await getPosition(); 
  const {latitude: lat, longitude: lng } = pos.coords; // decpnstructing lattitude and lomgitude, from pos.coords and assigning them to lat and lng
  
  // reverse geocoding
  const resGeo  = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json(); // await the value and save it to a variable when its ready
  console.log(dataGeo);
  
  // await is simply another way of using promises
  const res = await fetch(`http://restcountries.eu/rest/v2/name/${dataGeo.country}`); // await stopps the code execution until fetch promise is fufilled howeveer it does so without blocking the callstack
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
};
whereAmI();
console.log('FIRST');
*/


////////////// 259. Error Handling With try...catch /////////////////
////////////// 259. Error Handling With try...catch /////////////////
////////////// 259. Error Handling With try...catch /////////////////


/*

// example
// this produces an error because the const x can not be reassigned
try{ // javascript will try to run the code in the try block
  let y = 1;
  const x =2;
  x = 3;
} catch (err) { // this catch block will have access to whatever error occured in the try block
  alert(err.message);
} // so basically instead of the error showing up in the console we can do other things with it shuch as an alert and it wont show up in the console anymore


const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(
    +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  };
  
  // with async await we cant use the catch method that we used before because we cant really attach it anywhere
  // thus we use try catch
  // try catch has been around for a while and is not directly related to async await but can be used for it
  
  
  const getPosition = function() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  
  const whereAmI = async function(country) { // ASYNC FUNCTION - keeps running in the background while preforming the code inside it.
    try { // javascript will try to execute this code within this try block
      // Geolocation 
      const pos = await getPosition();
      const {latitude: lat, longitude: lng } = pos.coords; // decpnstructing lattitude and lomgitude, from pos.coords and assigning them to lat and lng
      
      // reverse geocoding
      const resGeo  = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
      if(!resGeo.ok) throw new Error('Problem getting location data ');
      
      const dataGeo = await resGeo.json();
    console.log(dataGeo);

  const res = await fetch(
    `http://restcountries.eu/rest/v2/name/${dataGeo.country}`
    ); // await stopps the code execution until fetch promise is fufilled
    if(!resGeo.ok) throw new Error('Problem getting country');
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
} catch (err) {
  console.error(`${err} 💥`);
  renderError(`💥 ${err.message}`);
  }
};
whereAmI();
whereAmI();
whereAmI();
console.log('FIRST');
*/


//////////// 260. Returning Values from Async Functions ///////////////////
//////////// 260. Returning Values from Async Functions ///////////////////
//////////// 260. Returning Values from Async Functions ///////////////////
/*

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(
    +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  };

const getPosition = function() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function(country) { // ASYNC FUNCTION - keeps running in the background while preforming the code inside it.
try {
  // Geolocation 
 const pos = await getPosition();
 const {latitude: lat, longitude: lng } = pos.coords; // decpnstructing lattitude and lomgitude, from pos.coords and assigning them to lat and lng
 
  // reverse geocoding
 const resGeo  = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
 if(!resGeo.ok) throw new Error('Problem getting location data ');
 const dataGeo = await resGeo.json();

 // Country data
 const res = await fetch(
 `http://restcountries.eu/rest/v2/name/${dataGeo.country}`
 ); // await stopps the code execution until fetch promise is fufilled
 if(!resGeo.ok) throw new Error('Problem getting country');
  const data = await res.json();
  renderCountry(data[0]);

  return `You are in ${dataGeo.city}, ${dataGeo.country}`;
} catch (err) {
  console.error(`${err} 💥`);
  renderError(`💥 ${err.message}`);

  // Reject promise rturnd from async function
  throw err;
}
};

console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
// .then(city => console.log(`2: ${city}`))
// .catch(err => console.error(`2: ${err.message} 💥`))
// .finally(() => console.log('3: Finished getting location'));

(async function() {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`)
  } catch(err) {
    console.error(`2: ${err.message} 💥`)
  }
  console.log('3: Finished getting location')
})();
*/

//////////////// 261. Running Promises in Parallel ////////////////////
//////////////// 261. Running Promises in Parallel ////////////////////
//////////////// 261. Running Promises in Parallel ////////////////////
/*

const getJSON = function(url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => { if (!response.ok)
  throw new Error(`${err} (${response.status})`);

  return response.json();
  });
}; 

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(
    +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  };

  const get3Countries = async function(c1, c2, c3) {
    try { // always use try catch with an async function
      // const [data1] = await getJSON(`http://restcountries.eu/rest/v2/name/${c1}`); // await the result and save it to variable data1 when it is fufilled
      // const [data2] = await getJSON(`http://restcountries.eu/rest/v2/name/${c2}`); // destructure the data([data2]) because it is an abject ??
      // const [data3] = await getJSON(`http://restcountries.eu/rest/v2/name/${c3}`); // thease are still running one after another even though it says async
      // console.log([data1.capital, data2.capital, data3.capital]);

      const data = await Promise.all([ // this is how you load them all at once and save them to a variable
        getJSON(`http://restcountries.eu/rest/v2/name/${c1}`),
        getJSON(`http://restcountries.eu/rest/v2/name/${c2}`),
        getJSON(`http://restcountries.eu/rest/v2/name/${c3}`)
      ]) // this will return a new promise that runs all of thease promises at the same time
      console.log(data.map(d  => d[0].capital));
    } catch(err) {
      console.log(err);
    }
  };
  get3Countries('portugal', 'canada', 'tanzania'); // Array(3) [ "Lisbon", "Ottawa", "Dodoma" ]

  // whenever I have a situation where I need to do several async operations at the same time, and operations that dont depen on one another  then I Should ALWAYS run them in parllel
*/

///// 262. Other Promise Combinators: race, allSettled and any ///////
///// 262. Other Promise Combinators: race, allSettled and any ///////
///// 262. Other Promise Combinators: race, allSettled and any ///////
/*


const getJSON = function(url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => { if (!response.ok)
  throw new Error(`${err} (${response.status})`);

  return response.json();
  });
}; 

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(
    +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  };

//Promise.rece - takes multiple inputs and only returns the one that loads first
(async function() {
  const res = await Promise.race([
    getJSON(`http://restcountries.eu/rest/v2/name/italy`),
    getJSON(`http://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`http://restcountries.eu/rest/v2/name/mexico`),
]);
console.log(res[0]); // the result will very between the 3 url's depending on which one loads first
})(); 

const timeout = function(sec) {
  return new Promise(function(_, reject) {
    setTimeout(function() {
      reject(new Error ('Request took too long!'))
    }, sec * 1000)
  });
};

Promise.race([
  getJSON(`http://restcountries.eu/rest/v2/name/tanzania`),
  timeout(5)
]).then(res => console.log(res[0]))
.catch(err => console.log(err));

// Promise.allSettled
  Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Primise.resolve('Another success'),
  ])
    .then(res => console.log(res))
    .catch(err => console.log(err));
 
 
  Promise.all([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Primise.resolve('Another success'),
  ])
    .then(res => console.log(res))
    .catch(err => console.log(err));
    
    // Promise.any (ES 2021)
    Promise.any([
      Promise.resolve('Success'),
      Promise.reject('ERROR'),
      Primise.resolve('Another success'),
    ])
      .then(res => console.log(res))
      .catch(err => console.log(err));
*/

/////////////////////// Coding Challenge #3////////////////////////
/////////////////////// Coding Challenge #3////////////////////////
/////////////////////// Coding Challenge #3////////////////////////

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath) {
  return new Promise(function(resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function() {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function() {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg; // setting img as global variable

// // we are going to recreate this with async await
// createImage('img/img-1.jpg')
//   .then(img => {
//      currentImg = img; // currentImg from global = to img in this function
//      console.log('Image 1 loaded');
//      return wait(2) // wait 2 seconds
//     })
//     .then(() => { // then complete function below
//       currentImg.style.display = 'none'; // remove display property
//       return createImage('img/img-2.jpg');
//     })
//     .then(img => {
//       currentImg = img; // currentImg from global = to img in this function again
//       console.log('Image 2 loaded');
//       return wait(2); // wait 2 seconds again
//     })
//     .then(() => {
//       currentImg.style.display = 'none'; // remove display property again
//     })
//     .catch(err => console.error(err));

           // part 1
const loadNPause = async function() {
  try {
   // Load image 1
  let img = await createImage('img/img-1.jpg');
  console.log('Image 1 loaded');
  await wait(2);
  img.style.display = 'none';

   // Load image 2
  img = await createImage('img/img-2.jpg');
  console.log('Image 2 loaded');
   await wait(2);
   img.style.display = 'none';

  } catch {
   console.error(err);
  }
 }
//  loadNPause();

        // part 2 
const loadAll = async function(imgArr) {
  try{
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgEl = await Promise.all(imgs);
    console.log();
    imgEl.forEach(img => img.classList.add('parallel'));

  } catch (err) {
    console.log(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);