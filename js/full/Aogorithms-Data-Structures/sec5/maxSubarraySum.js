/* 
write a function called maxSubarraySum which accepts an array of integers and a number called num.
The function should calculate the maximum sum of n consecutive elemets in the array.
*/

// Niave solution
// const maxSubarraySum = (arr, num) => {
// 	// num is the lingth
// 	// if number is greater then array length
// 	if (num > arr.length) {
// 		return null // end and return null
// 	} // otherwise
// 	var max = -Infinity // lowest negative number
// 	// from 0 iterate +1 until at array length minus the number argument
// 	for (let i = 0; i < arr.length - num + 1; i++) {
// 		temp = 0
// 		// from 0 , if j is less than mumber argument, iterate +1
// 		for (let j = 0; j < num; j++) {
// 			temp += arr[i + j] // a way of summing the 3 numbers between i and j
// 		}
// 		if (temp > max) {
// 			max = temp // update max if the temp is larger
// 		}
// 		console.log(temp, max)
// 	}
// 	return max
// }

// Refactor
const maxSubarraySum = (arr, num) => {
	let maxSum = 0
	let tempSum = 0
	if (arr.length < num) return null // catch if array length is less than num
	// from 0, if index is less than number, iterate +1
	for (let i = 0; i < num; i++) {
		maxSum += arr[i] // add each index value to maxSum value
	}
	tempSum = maxSum // set temp sum to value of maxSum
	// from number. if index is less than array length, index +1
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i] // subtract the first number we added, and add the number after the last we added
		maxSum = Math.max(maxSum, tempSum) // which is bigger
	}
	return maxSum
} // this way we loop over the array only once

const ex1 = maxSubarraySum([1, 2, 5, 8, 1, 5], 2) // 10
const ex2 = maxSubarraySum([1, 2, 5, 8, 1, 5], 4) // 19
const ex3 = maxSubarraySum([4, 2, 1, 6], 1) // 6
const ex4 = maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
const ex5 = maxSubarraySum([], 4) // null

console.log(ex1)
