// ANAGRAMS - a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
// Given two strings, write a function to determine if the second string is an anagram of the first.

// 2 strings as input
// turn string into array of letters
// compare the arrays of letters to see if the leters are the same in the same quantity

// my sofar unsucessful attempt
// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let frequencyCounter1 = {}; // create empty obj
//   let frequencyCounter2 = {}; // " "
//   for (let val of str1) {
//     // loop over every value in strings
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; // add 1 to frequency counter or initalise it to one
//   }
//   for (let val of str2) {
//     // same loop for string 2
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1; // for the value if no current value set to 0, then add 1
//   }
//   for (let key in frequencyCounter1) {
//     // for each in
//     if (!(key ** 2 in frequencyCounter2)) {
//       // if theres not a key in array1 that is squared in string 2
//       return false; // end and return false
//     } // otherwise
//     console.log(frequencyCounter1); // { '1': 1, '2': 2, '3': 1 }
//     console.log(frequencyCounter2); // { '1': 1, '4': 2, '9': 1 }
//     return true;
//   }
// }

// const test = isAnagram("jon", "noj");
// console.log(test);

// Class solution

function validAnagram(first, second) {
  if (first.length !== second.length) {
    // if strings arent same length
    return false; // stop and return false
  } // otherwise
  const lookup = {}; // initalize lookup object

  // loop through the first array starting the index at 0,
  for (let i = 0; i < first.length; i++) {
    let letter = first[i]; // setting key for the index to the letter in first array
    // can't find letter or letter is zero then it's not an anagram
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1); // either set value of key to the last falue stored plus one, or if no value set key equal to ome
  }

  console.log(lookup, "first string");

  // loop through second array
  for (let i = 0; i < second.length; i++) {
    let letter = second[i]; // setting key for the index to the letter in second array
    // can't find ketter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      // if fa;se
      return false; // stop and return false
    } else {
      lookup[letter] -= 1; // decrement
    }
  }
  console.log(lookup, "second string");
  return true; // end and return trie
}

// console.log(validAnagram("first", "second")); // false
console.log(validAnagram("jon", "noj")); // true
