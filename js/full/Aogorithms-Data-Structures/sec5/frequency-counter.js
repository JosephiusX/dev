// Write a function called same, which accepts two arrays.
// the function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.

// A NAIVE SOLUTION

function same(arr1, arr2) {
  // if the arrays are not the same length
  if (arr1.length !== arr2.length) {
    return false; // end and return false
  } // otherwise
  // loop over the first array
  for (let i = 0; i < arr1.length; i++) {
    // iderate through array1
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // git the index of array 2 that is equal to 2x that index in array one
    if (correctIndex === -1) {
      // -1 meaning false, theres not a number in index 2 that equals index 1 squared
      return false; // end and return false
    } // otherwise
    console.log(arr2);
    arr2.splice(correctIndex, 1); // if there is a number in array one that is in array 2 squared we splice it out of array 2
  }
  return true;
}

const ex1 = same([1, 2, 3], [4, 1, 9]); // true
const ex2 = same([1, 2, 3], [1, 9]); // false
const ex3 = same([1, 2, 1], [4, 4, 1]); // false (must be same frequency)
const ex4 = same([1, 2, 1], [4, 4, 1]);

// console.log(ex1);

// A better for the big O complexity

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}; // create empty obj
  let frequencyCounter2 = {}; // " "
  for (let val of arr1) {
    // loop over every value in array1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; // add 1 to frequency counter or initalise it to one
  }
  for (let val of arr2) {
    // same loop for array 2
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1; // for the value if no current value set to 0, then add 1
  }
  for (let key in frequencyCounter1) {
    // for each in
    if (!(key ** 2 in frequencyCounter2)) {
      // if theres not a key in array1 that is squared in array 2
      return false; // end and return false
    } // otherwise
    console.log(frequencyCounter1); // { '1': 1, '2': 2, '3': 1 }
    console.log(frequencyCounter2); // { '1': 1, '4': 2, '9': 1 }
    return true;
  }
}

const ex5 = same2([1, 2, 3, 2], [9, 1, 4, 4]);

console.log(ex5);
