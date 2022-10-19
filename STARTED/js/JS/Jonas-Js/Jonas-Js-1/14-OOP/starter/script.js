'use strict';

//////////////////////////// 205 constructor functions and the new Operator //////////////////////
//////////////////////////// 205 constructor functions and the new Operator //////////////////////
//////////////////////////// 205 constructor functions and the new Operator //////////////////////
/*

*/
const Person = function (firstName, birthYear) {
  // Instances prioperties
  this.firstName = firstName;
  this.birthyear = birthYear;

  // // never create method inside constructor function
  // this.calcAge = function() {
  //     console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991); // creates a new person with firstname of Jonas and birthyear of 1991 and and assigned it to a jonas object
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

// const jay = 'Jay';
// console.log(jay instanceof Person); // false because constructor function not used

console.log(jonas instanceof Person); // true

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};

Person.hey();

///////////////////////////////////// 206 Prototypes ////////////////////////////////////////
/*
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// prototype of linked objects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);
console.log(jonas.species, matilda.species); // Homo Sapiens Homo Sapiens

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false

console.log(jonas.__proto__); // prototype of jonas
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__); // prototype of the prototype
console.log(jonas.__proto__.__proto__.__proto__); // prototype of the prototype of the prototype

console.dir(Person.prototype.constructor);

const arr = [2, 6, 6, 5, 6, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto); // the proto is basically the array methods built into arrays

// create a new proto
Array.prototype.unique = function() { // creates new array method but thats not nessessarilly good practice
    return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

///////////// 209 codeing challange ///////////////////////////////////////////////////////////
///////////// 209 codeing challange ///////////////////////////////////////////////////////////
///////////// 209 codeing challange ///////////////////////////////////////////////////////////
/*

const Car = function(make, speed){
    this.make = make; // set male to make we recieve
    this.speed = speed; // set speed to speed we recieve 
};

// my wack at it
// Car.prototype.accelerate = function() {
    //     return this.speed + 10;
    // }

    
    // Car.prototype.break = function() {
        //     return this.speed - 5;
// }

// const vehicle = new Car('BMW', 120 )
// console.log(vehicle);
// console.log(vehicle.accelerate());
// console.log(vehicle.break());

// const vehicle2 = new Car('Mercedes', 95)
// console.log(vehicle2);
// console.log(vehicle2.accelerate());
// console.log(vehicle2.break());

// his solution 

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h `);
};

Car.prototype.break = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h `);
};

const bmw = new Car('BMW', 120 )
const mercades = new Car('Mercedes', 95)

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.break();
*/

//////////////////////////////////// 210 ES6 Classes /////////////////////////////////
//////////////////////////////////// 210 ES6 Classes /////////////////////////////////
//////////////////////////////////// 210 ES6 Classes /////////////////////////////////
/*


// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    
    // Instance methods
    // adding a method to the prototype
    calcAge() { 
        console.log(2037 - this.birthYear);
    }
    
    greet() {
        console.log(`Hey ${this.firstName}`)
    }
    
    get age() { // get works like any other method 
        return 2037 - this.birthYear;
    }
    
    // Set a property that already exists
    set fullName(name) {
        console.log(name);
        if(name.includes('')) this._fulName = name;
        else alert(`${name} is not a full name!`);
    }
    
    get fullName() {
        return this._fullName;
    }
    
    // Static method
    static hey() {
        console.log('Hey there 👋');
        console.log(this);
    }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica); 
jessica.calcAge(); // 41
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function() { // prototype methods can still be added this way as well in es6 classes
//     console.log(`Hey ${this.firstName}`);
// }

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 2. Classes are exicuted in strict mode

// 211. Setters and Getters ////////////////////////////////////////////////////////////

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();


const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],
    
    get latest() {
        return this.movements.slice(-1).pop();
    },
    
    set latest(mov) {
        this.movements.push(mov)
    }
};

console.log(account.latest);

account.latest = 50;

console.log(account.movements);


////////////////////////// 213. Object.create /////////////////////////////////////////
////////////////////////// 213. Object.create /////////////////////////////////////////
////////////////////////// 213. Object.create /////////////////////////////////////////
/*

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

///////////////////////////////// Coding Challenge #2 ////////////////////////////////////
///////////////////////////////// Coding Challenge #2 ////////////////////////////////////
///////////////////////////////// Coding Challenge #2 ////////////////////////////////////

/* 

1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀


// es6 example
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    
    // Instance methods
    // adding a method to the prototype
    calcAge() { 
        console.log(2037 - this.birthYear);
    }
    
    greet() {
        console.log(`Hey ${this.firstName}`)
    }
    
    get age() { // get works like any other method 
        return 2037 - this.birthYear;
    }
}


/////////////// challange

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed}km/h `);
    }
    
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed}km/h `);
    }
    
    get SpeedUS() {
        return this.speed / 1.6;
    }
    
    set SpeedUS(speed) { // peramiter is setting a value in the object
        this.speed = speed * 1.6;
    }
}

const ford = new CarCl('Ford', 120);
console.log(ford.SpeedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

*/

//////////////////215. Inheritance Between "Classes": Constructor Functions //////////////
//////////////////215. Inheritance Between "Classes": Constructor Functions //////////////
//////////////////215. Inheritance Between "Classes": Constructor Functions //////////////
/*

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
// mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

////////////////////////////////// Coding Challenge #3 /////////////////////////////////
////////////////////////////////// Coding Challenge #3 /////////////////////////////////
////////////////////////////////// Coding Challenge #3 /////////////////////////////////

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀

//////// his exanple
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(
        `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
        );
    };
    
    const tesla = new EV('Tesla', 120, 23);
    tesla.chargeBattery(90);
    console.log(tesla);
    tesla.brake();
    tesla.accelerate();
    
    ///// follow along
 
    const Car = function(make, speed){
        this.make = make; // set male to make we recieve
        this.speed = speed; // set speed to speed we recieve 
    };
 
    Car.prototype.accelerate = function () {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed}km/h `);
     };
     
     Car.prototype.brake = function () {
         this.speed -= 5;
         console.log(`${this.make} is going at ${this.speed}km/h `);
     };
     
     const EV = function(make, speed, charge) {
         Car.call(this, make, speed)
         this.charge = charge;
     };
     
     //Link the prototypes
     EV.prototype = Object.create(Car.prototype);
     
     EV.prototype.chargeBattery = function (chargeTo) {
         this.charge = chargeTo;
     };
     
     EV.prototype.accelerate = function () {
         this.speed += 20;
         this.charge--;
         console.log(`${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}`);
     };
     
     const tesla = new EV('Tesla', 120, 23);
     tesla.chargeBattery(90);
     console.log(tesla);
     tesla.brake();
     tesla.accelerate();
     
    */

///////////// 217. Inheritance Between "Classes": ES6 Classes ///////////////////////
///////////// 217. Inheritance Between "Classes": ES6 Classes ///////////////////////
///////////// 217. Inheritance Between "Classes": ES6 Classes ///////////////////////

/*
    
    
       class PersonCl {
        constructor(fullName, birthYear) {
            this.fullName = fullName;
            this.birthYear = birthYear;
        }
        
        // Instance methods
        // adding a method to the prototype
        calcAge() { 
            console.log(2037 - this.birthYear);
        }
        
        greet() {
            console.log(`Hey ${this.firstName}`)
        }
        
        get age() { // get works like any other method 
            return 2037 - this.birthYear;
        }
        
        // Set a property that already exists
        set fullName(name) {
            console.log(name);
            if(name.includes('')) this._fulName = name;
            else alert(`${name} is not a full name!`);
        }
        
        get fullName() {
            return this._fullName;
        }
        
        // Static method
        static hey() {
            console.log('Hey there 👋');
            console.log(this);
        }
    }
    
    class StudentCl extends PersonCl {
        constructor(fullName, birthYear, course) {
            // always needs to happen first!
            super(fullName, birthYear);
            this.course = course;
        }
    
        introduce() {
            console.log(`My name is ${this.fullName} and I study ${this.course}`);
        }
    
        calcAge() {
            console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`);
        }
    }
    
    const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
    martha.introduce();
    martha.calcAge();
    */

//////////// 218. Inheritance Between "Classes": Object.create ////////////////////
//////////// 218. Inheritance Between "Classes": Object.create ////////////////////
//////////// 218. Inheritance Between "Classes": Object.create ////////////////////
/*
    
    const PersonProto = {
        calcAge() {
            console.log(2037 - this.birthYear);
        },
 
        init(firstName, birthYear) {
            this.firstName = firstName;
            this.birthYear = birthYear;
        },
    };
 
    const steven = Object.create(PersonProto);
 
    const StudentProto = Object.create(PersonProto);
    StudentProto.init = function(firstName, birthYear, course) {
        PersonProto.init.call(this)
    };
 
    StudentProto.introduce = function () {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
 
    const jay = Object.create(StudentProto);
    jay.init('Jay', 2010, 'Computer Science');
    jay.introduce();
    jay.calcAge();
    */

//////////////////////

//////////////////// 219. Another Class Example ///////////////////////////////////////
//////////////////// 219. Another Class Example ///////////////////////////////////////
//////////////////// 219. Another Class Example ///////////////////////////////////////
/*

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public interface 
    deposit(val) {
        this.movements.push(val)
    }

    withdraw(val) {
        this.deposit(-val)
    }

    approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if(this.approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111, );

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);


console.log(acc1);
console.log(acc1.pin); // good to be aware that this is avaiable outside the class

*/

////////////////// 220. Encapsulation: Protected Properties and Methods ///////////////////
////////////////// 220. Encapsulation: Protected Properties and Methods ///////////////////
////////////////// 220. Encapsulation: Protected Properties and Methods ///////////////////
// prevent code from outside the class from manipulating data inside the class

/*


class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this._pin = pin; // _pin is encapsulated
        this._movements = [];// protected property // _movements is encapsulated
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public interface 
    getMovements() {
        return this._movements // _movements encapsulated
    }

    deposit(val) {
        this._movements.push(val) // " "
    }

    withdraw(val) {
        this.deposit(-val)
    }

    _approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if(this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111, );

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin); // good to be aware that this is avaiable outside the class
*/

////////////////// 221. Encapsulation: Private Class Fields and Methods ///////////////////
////////////////// 221. Encapsulation: Private Class Fields and Methods ///////////////////
////////////////// 221. Encapsulation: Private Class Fields and Methods ///////////////////

/*


// Public fields
// Private fields
// Public method
// Private method
// theres also the static varsion


class Account {
   // Public fields
   locale = navigator.language;
   
   // 2) Private fields
   #movements = []; // # makes a field private
   #pin; // to make pin private set it to nothing

   constructor(owner, currency, pin) {
       // this.owner = owner;
       // this.currency = currency;
       this.#pin = pin;
       // this._movements = [];// protected property
       // this.locale = navigator.language;

       console.log(`Thanks for opening an account, ${owner}`);
   }

   // Public interface - public methods
   getMovements() {
       return this.#movements
   }

   deposit(val) {
       this.#movements.push(val)
   }

   withdraw(val) {
       this.deposit(-val)
   }

   
   requestLoan(val) {
       if(this._approveLoan(val)) {
           this.deposit(val);
           console.log(`Loan approved`);
       }
   }
   
   //static method
   static helper() {
       console.log('Helper');
   }

   // 4) Private methods - not supported by any browsers yet
   // #approveLoan(val) {
   //     return true;
   // }

   _approveLoan(val) {
       return true;
   }
   
}

const acc1 = new Account('Jonas', 'EUR', 1111, );

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000); 
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1);

// console.log(acc1.#movements); // error - Private field must be declaired in an enclosing class
// console.log(acc1.#pin); // same as above - Protcted

Account.helper()
*/

/////////////////////////////////// Chaning Methods /////////////////////////////////////////////
/////////////////////////////////// Chaning Methods /////////////////////////////////////////////
/////////////////////////////////// Chaning Methods /////////////////////////////////////////////
/*

class Account {
    locale = navigator.language;
    
    #movements = [];
    #pin; 
 
    constructor(owner, currency, pin) {
        // this.owner = owner;
        // this.currency = currency;
        this.#pin = pin;
        // this._movements = [];// protected property
        // this.locale = navigator.language;
 
        console.log(`Thanks for opening an account, ${owner}`);
    }
 
   
    getMovements() {
        return this.#movements
    }
 
    deposit(val) {
        this.#movements.push(val)
        return this; // this makes it possible to chain methods
    }
    
    withdraw(val) {
        this.deposit(-val)
        return this; // this makes it possible to chain methods
    }
    
    
    requestLoan(val) {
        if(this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
            return this; // this makes it possible to chain methods
        }
    }
    
    //static method
    static helper() {
        console.log('Helper');
    }
 
 
    _approveLoan(val) {
        return true;
    }
    
 }
 
 const acc1 = new Account('Jonas', 'EUR', 1111, );
 
 acc1.deposit(250);
 acc1.withdraw(140);
 acc1.requestLoan(1000);
 acc1._approveLoan(1000); 
 console.log(acc1.getMovements());
 Account.helper()
 
 console.log(acc1);
 console.log(acc1);
 
 // Chaining
 acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
 console.log(acc1.getMovements());
*/

/////////////////////////////////////// Coding Challenge #4 /////////////////////////////////
/////////////////////////////////////// Coding Challenge #4 /////////////////////////////////
/////////////////////////////////////// Coding Challenge #4 /////////////////////////////////

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀



const Car = function(make, speed){
        this.make = make; // set male to make we recieve
        this.speed = speed; // set speed to speed we recieve 
    };
 
    Car.prototype.accelerate = function () {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed}km/h `);
     };
     
     Car.prototype.brake = function () {
         this.speed -= 5;
         console.log(`${this.make} is going at ${this.speed}km/h `);
     };
     
     const EV = function(make, speed, charge) {
         Car.call(this, make, speed)
         this.charge = charge;
     };
     
     //Link the prototypes
     EV.prototype = Object.create(Car.prototype);
     
     EV.prototype.chargeBattery = function (chargeTo) {
         this.charge = chargeTo;
     };
     
     EV.prototype.accelerate = function () {
         this.speed += 20;
         this.charge--;
         console.log(`${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}`);
     };
     
     const tesla = new EV('Tesla', 120, 23);
     tesla.chargeBattery(90);
     console.log(tesla);
     tesla.brake();
     tesla.accelerate();
     
     // walkthrough
     
     class CarCl {
       constructor(make, speed) {
         this.make = make;
         this.speed = speed;
       }
     
       accelerate() {
         this.speed += 10;
         console.log(`${this.make} is going at ${this.speed}km/h `);
       }
     
       brake() {
         this.speed -= 5;
         console.log(`${this.make} is going at ${this.speed}km/h `);
         return this; // implimenting ability to chain
       }
     
       get SpeedUS() {
         return this.speed / 1.6;
       }
     
       set SpeedUS(speed) {
         // peramiter is setting a value in the object
         this.speed = speed * 1.6;
       }
     }
     
     class EVCL extends CarCl {
       // makes EVCL a part of CarCl
       #charge; // making charge Private
     
       constructor(make, speed, charge) {
         super(make, speed); // call super instead of the car and remove the this keyword
         this.#charge = charge; // making charge private
       }
     
       chargeBattery(chargeTo) {
         this.#charge = chargeTo; // making charge private
         return this; // implimenting ability to chain
       }
     
       accelerate = function () {
         this.speed += 20;
         this.#charge--; // making charge private
         console.log(
           `${this.make} is going at ${this.speed} km/h, with a charge of ${
             this.#charge
           }`
         );
         return this;
       };
     }
     
     const rivian = new EVCL('Rivian', 120, 23);
     console.log(rivian);
     // console.log(rivian.#charge); // success - Private field #charge must be declared in an enclosing class
     rivian.accelerate().accelerate().accelerate().brake().chargeBattery(50); // now they can chain properly
     
     console.log(rivian.speedUS); // chile also inherits setters and getters
*/
