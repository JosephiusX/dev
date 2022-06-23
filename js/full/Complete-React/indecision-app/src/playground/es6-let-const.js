var nameVar = 'Andrew';
var nameVar = 'Mike'; // with var we can re assign a variable with the same name, this can cause problems
console.log('nameVar', nameVar); 

let nameLet = 'Jen';
nameLet = 'Julie'; // can not redefine but can re assign
console.log('nameLet',nameLet);

const nameConst = 'Frank';
// const nameConst = 'Gunther' //err can not reassign or redefine
console.log('nameConst', nameConst )

// Block scoping
// const and let are block scoped
// var is not

var fullName = 'Jen Mead';


if (fullName) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName); // this one works if first name is var but not if it is const or let