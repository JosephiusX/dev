/////////////////////////////// # 28 Ternaty Operator (conditional ///////////////
/////////////////////////////// # 28 Ternaty Operator (conditional ///////////////
/////////////////////////////// # 28 Ternaty Operator (conditional ///////////////

const age = 29;
// if age is greater or equal to 18 log I like to drink wine else log I like to drink water
// condetion   ? = if  : = else
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

// with if statement

let drink2;
if(age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

// with a turnary operator I can have a conditional in a template literal
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

