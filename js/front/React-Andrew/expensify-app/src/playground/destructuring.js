// // object destructureing
// const person = {
// 	name: 'Andrew',
// 	age: 31,
// 	location: {
// 		city: 'Philadelphia',
// 		temp: 92,
// 	},
// };

// // console.log(`${person.name} is ${person.age}.`);

// // lets say we want to use variables for name and age

// // before destructureing
// // const name = person.name;
// // const age = person.age;

// // destructureing
// // setting default name incase person dosent have one
// // renameing name as well
// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// // selecting location within person
// // renanme variable after restructure
// const {city, temp: temprature} = person.location;
// console.log(`its ${temprature} in ${city}`);

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin',
// 	},
// };

// const {publisher: publisherName = 'self-published'} = book

// console.log(publisherName)

// Array destructureing

const address = ['1299 s juniper street', 'Philadelphia', 'cali', '19147'];
// removing the state nanme and leaving a space to see that our default is working

// Normally to access from a string we ..
console.log(`You are in ${address[1]} ${address[2]}`);
// or we can create a const for every single item(also not super ideal)

// Destructureing
// the names in array after const corrilate to the respective indicies of array referred to after =
// const [street, city, state, zip] = address;

// examle just useing city and state
// removed zip and state but kept ","s so the city and state have same index values as corispondant indicies in original arrays
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`);
// with arrays there is no nameing syntax as with objects because the names dont correspond to anything as its the index position that is corolated
// we can setup defaults though

// CHALLANGE- grab first and third array items useing array destructureing
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drink, , price] = item;              

console.log(`A medium ${drink} costs ${price}`);
