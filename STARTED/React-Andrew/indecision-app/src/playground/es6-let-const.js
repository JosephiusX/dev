var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// const nameConst = 'Guther'; // results in error because a const can not be redefined
console.log('nameConst', nameConst);

// Block level scoping - bound to the blocl that its in { }

const fullName = 'Jen Mead';
let firstName;

if (fullName) {
	firstName = fullName.split('')[0];
	console.log(firstName);
}

console.log(firstName);
