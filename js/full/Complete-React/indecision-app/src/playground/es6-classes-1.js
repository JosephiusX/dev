class Person {
    constructor(name= 'Anonymus', age= 0) { // argument default values
       this.name = name;
       this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name} and I am ${this.age} old`;
    }
    getDescription() {
        return `${this.name} is ${this.age} old`
    }
}

class Student extends Person { 
    constructor(name, age, major) {
        super(name, age); // taking this.name and this.age from person constructor above
        this.major = major;
    }
    hasMajor() {
        return !!this.major; // this checkst to see if there is a major. ! = not !! = not not
    } // without the !! it will be undefined. with this we get a true or false instead
    getDescription() { // overide the parent getDescription function
        let description = super.getDescription()

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Travler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    // hasLocation () {
    //     return !!this.homeLocation; 
    // }
    getGreeting () {
        let greeting = super.getGreeting();
        
        if(this.homeLocation) {
            greeting += `I am visiting from ${this.homeLocation}`
        }

        return greeting;
    }
}

const me = new Travler('Andrew Mead', 26, 'philidelphia');
console.log(me.getGreeting());

const other = new Travler();
console.log(other.getGreeting());



