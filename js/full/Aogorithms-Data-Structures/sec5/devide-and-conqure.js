// Giben a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passes to the function is located.
// If the value is not found, return -1

// Niave solution - linear search
// take on array and value
// const search = (arr, val) => {
// 	// from 0, if index is less than array length, incriment index by 1
// 	for (let i = 0; i < arr.length; i++) {
// 		// if array index equals value
// 		if (arr[i] === val) {
// 			return i // stop execution , render index
// 		} // otherwise
// 	}
// 	return -1 // if val not in array
// }

// Refactor - binary search

const search = (array, val) => {
	let min = 0
	let max = array.length - 1

	while (min <= max) {
		let middle = Math.floor((min + max) / 2)
		let currentElement = array[middle]

		if (array[middle] > val) {
			max = middle - 1
		} else if (array[middle] > val) {
			max = middle - 1
		} else {
			return middle
		}
	}
	return -1
}

const ex = search([1, 2, 3, 4, 5, 6], 4)
const ex2 = search([1, 2, 3, 4, 5, 6], 6)
const ex3 = search([1, 2, 3, 4, 5, 6], 11)

console.log(ex)
console.log(ex2)
console.log(ex3)
