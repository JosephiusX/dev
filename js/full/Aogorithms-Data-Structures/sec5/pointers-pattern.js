//  EXAMPLE:
// write a function called sumZero which accepts a stored array of indegers.
//  The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

// Niave Solution, Time Complexity - 0(N)

// write function that takes in an array
function sumZero(arr) {
	// loop over array for as many times as the array is long
	for (let i = 0; i < arr.length; i++) {
		// for every loop above loop again to see if there is a number that added to index equals 0
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) {
				return [arr[i], arr[j]] // return indicies of both loops
			}
		}
	}
}

// REFACTOR
// function sumZero(arr) {
//   let left = 0; // left to 0
//   let right = arr.length - 1; // right to end of array
//   while (left < right) {
//     let sum = arr[left] + arr[right]; // we add left to right
//     // if the sum is 0 return the numbers, end execution
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//       // if the sum greater than 0
//     } else if (sum > 0) {
//       right--; // decrement right and go again
//     } else {
//       // otherwise decrement
//       left++; // left and go again
//     }
//   }
// }

const ex1 = sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]) // -3 ,3
const ex2 = sumZero([-4, -3, -2, -1, 0, 5, 10]) // undefined, no pair
console.log(ex2)
