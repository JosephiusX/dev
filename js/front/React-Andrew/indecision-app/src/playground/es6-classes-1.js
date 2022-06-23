class Person {
	// es6 allows defaults to be added to paramiters incase one is not given
	constructor(name = 'anonymus', age = 0) {
		this.name = name; // inside class methots 'this' refers to the class instance
		this.age = age;
	}

	// method to run when explicitly called
	getGreeting() {
		return `hello. I am ${this.name}!`;
	}

	getDescription() {
		return `${this.name} is ${this.age} old.`;
	}
}

class Student extends Person {
	// here we need name and age from Person as well as the major peramiter
	constructor(name, age, major) {
		super(name, age); // defines name and age from person because it is extended to student
		this.major = major; // we define this because its unique to person
	}

	hasMajor() {
		return !!this.major;
	}

	getDescription() {
		let description = super.getDescription();

		if (this.hasMajor()) {
			description += ` Their major is ${this.major}`;
		}
		return description;
	}
}

// MY SOLUTION - seems to work but seems i misunderstood the problem
// class Travler extends Person {
// 	constructor(name, age, location) {
// 		super(name, age);
// 		this.location = location;
// 	}

// 	homeLocation() {
// 		return this.location;
// 	}

// 	getGreeting() {
// 		return `Hi. I am ${this.name}. I'm visiting from ${this.homeLocation()}`;
// 	}
// }

// COURSE SOLUTION:
class Travler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}

	// overwrite parent method
	getGreeting() {
		// bring in parent method functionality back to be used along with new functionality
		let greeting = super.getGreeting();

		if (this.homeLocation) {
			greeting += ` I am visiting from ${this.homeLocation}.`;
		}

		return greeting;
	}
}

const me = new Student('Andrew Mead', 26, 'Computer Science');
console.log(me.getGreeting());

const other = new Student();
console.log(other.getGreeting());

const i = new Travler('Gramkracker', 33, 'Oakland');
console.log(i.getGreeting());

// const person = new Person(); // with this we can see that getDescription() works differently now when used Student as opposed to Person
// console.log(person.getDescription());

// Previous Lecture

// we can make as many instances of the class as we want by assigning them to new variables
// const me = new Person('Andrew Mead', 30);
// console.log(me.getGreeting()); // hello. I am Andrew Mead !
// console.log(me.getDescription(30)); // Andrew Mead is 30 old.

// const sister = new Person('Nicara', 36);
// console.log(sister.getGreeting()); // hello. I am Nicara !
// console.log(sister.getDescription()); // Nicara is 36 old.

// const noName = new Person(); // if we dont pass in a name the default that we specified above is used
// console.log(noName.getGreeting()); // Person {name: 'anonymus'}
// console.log(noName.getDescription()); // anonymus is 0 old.
