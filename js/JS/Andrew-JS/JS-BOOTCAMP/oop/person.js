const Person = function (firstName, lastName, age) { // the uppercase Person is to let me know its a constructor. it is not required by the language to work, its just a convention
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person ('Joseph', 'Mead', 27) // new operator generates a new empty object , gives us access to the object in constructor function using this keyword
console.log(me)

const person2 = new Person('Clancy', 'Turner', 51)
console.log(person2)