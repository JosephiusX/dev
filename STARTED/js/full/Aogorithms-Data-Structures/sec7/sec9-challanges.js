// #10
// #10
// #10

//  Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()
// - do not worry about negative bases and exponent

// FAILED
// function power(base, exponent) {
// 	const total = 0
// 	for (let e = exponent; e > 0; e--) {
// 		total = base * base
// 	}
// 	return total
// }

// FAILED
// const power = (base, exponent) => {
// 	total = 0
// 	while (exponent > 0) {
// 		total += base * base
// 	}
// 	return total
// }

// FAILED
// const power = (base, exponent) => {
// 	if (exponent <= 0) {
// 		return base
// 	} // otherwise
// 	while (exponent > 0) {
// 		total = total + power(base, exponent - 1)
// 	}
// }

// FAILED - works but not at all recursive
// const power = (base, exponent) => {
// 	let result = 0

// 	const helper = (helperInput) => {
// 		if (helperInput <= 0) {
// 			return // exit if exponent is less than or equal to 0
// 		} // otherwise  if exponent is greater than 0
// 		if (helperInput > 0) {
// 			result = result + base * base
// 		}
// 		helper(helperInput - 1)
// 	}
// 	helper(exponent)
// 	if (result <= 0) {
// 		return result + 1
// 	}
// 	return result
// }

// COURSE SOLUTION:
// const power = (base, exponent) => {
// 	if (exponent === 0) return 1
// 	return base * power(base, exponent - 1)
// }

// const ex = power(2, 4) // 16/
// const ex2 = power(2, 0) // 1
// const ex3 = power(2, 2) // 4

// // console.log(ex2)

// console.log(Math.pow(2, 0))

// # 11
// # 11
// # 11

// write a function fractorial which accepts a number and returns the factorial of that number.
//  A factoral is the product of an integer and all the integers below it; e.g., factorial four(4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0! is always 1)

// planning
// - take in number value and multiply it by its self - 1
// - add that value to todal
// - repeat until zero

// MY SOLUTION !
// const factorial = (num) => {
// 	// if number is 1 or less , return 1
// 	if (num <= 1) {
// 		return 1
// 	}
// 	// if number is greater than 1
// 	if (num > 1) {
// 		// set num equal to num * the function run again -1
// 		num = num * factorial(num - 1)
// 	} // results in a nested stack of functions that resolves when base case is met
// 	return num
// }

// MY SOLUTION REFACTOR:
// const factorial = (num) => {
// 	if (num <= 1) return 1
// 	if (num > 1) num = num * factorial(num - 1)
// 	return num
// }

// COURSE SOLUTION:
// function factorial(x){
//    if (x < 0 ) return 0;
//    if (x <= 1 ) return 1;
//    return x * factorial(x-1);
// }

// const ex = factorial(1) // 1
// const ex2 = factorial(2) // 2
// const ex3 = factorial(4) // 24
// const ex4 = factorial(7) // 5040

// console.log(ex4)

// # 12
// # 12
// # 12

// Write a function called productOfArray
// take in an array of numbers
// return product of them all

// PRODUCT OF ARRAY SOLUTION (couese)
function productOfArray(arr) {
	if (arr.length === 0) {
		return 1
	}
	return arr[0] * productOfArray(arr.slice(1))
}

// // wasent far from the
// const productOfArray = (arr) => {
// 	// if array length is greater than 0 end execution else
// 	if (!arr.length > 0) return
// 	product = arr * arr[0] * productOfArray(arr.slice(1))
// 	return product
// }

// const productOfArray = (arr) => { // was able to add array values but not sum
// 	total = 0
// 	const helper = (helperInput) => {
// 		if (helperInput.length === 0) {
// 			return
// 		}
// 		if (helperInput.length > 0) {
// 			total += total * helperInput[0]
// 		}
// 		helper(helperInput.slice(1))
// 	}
// 	helper(arr)
// 	return total
// }

// const productOfArray = (arr) => {
// 	const total = 0
// 	for (let i = 0; i < arr.length; i++) {
// 		total = total + productOfArray(arr.slice(1))
// 	}
// 	return total
// }

// const productOfArray = (arr) => {
// 	// const product = 0
// 	if (arr.length > 0) {
// 		const product = product + arr[0] * productOfArray(arr.slice(1))
// 	}
// 	return product
// 	// productOfArray(arr)
// }

// const ex = productOfArray([1, 2, 3]) // 6
// const ex2 = productOfArray([1, 2, 3, 10]) // 60

// console.log(ex2)

// 13
// 13
// 13

// Recursive range
// write a functuin cakked recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

// const recursiveRange = (n) => {}

// const recursiveRange = (n) => {
// 	if (n < 2) return 1
// 	return n + recursiveRange(n - 1)
// }

// console.log(recursiveRange(6))

// 15
// 15
// 15

// reverse - write a function called reverse which accepts a string and returns a new string in reverse

// const reverse = (str) => {
// 	if (str.length === 0) return
// 	return str[0] + reverse(str.slice(1))
// } // returns string

// const reverse = (str) => {
// 	if (str.length === 0) return
// 	return str[str.length] + reverse(str.slice(str.length))
// }

// const reverse = (str) => {
// 	let length = str.length
// 	if (length === 0) return
// 	return str[length] + reverse(str.slice(length - 1))
// }

// course Solution
// function reverse(str) {
// 	if (str.length <= 1) return str // not sure why string is returned
// 	return reverse(str.slice(1)) + str[0]
// }

// console.log(reverse('joseph'))

// // console.log('r' + 't')
// const string = 'string'
// // const other = 'other'
// // console.log(other + string) // otherstring
// // console.log('string'.slice(-1)) // g
// // console.log('string'.slice(2)) // ring
// console.log('string'.slice(1)) // tring
// console.log('string'[3]) // i
// console.log('string'.length) // 6
// console.log(string.slice(string.length - 1)) // nothing at all

// // console.log(string.length) // 6
// // // console.log(string[-1]) // undefined
// // console.log(string[1]) //  t
// // // console.log(string.pop()) // erreo string.pop is not a function

// 16
// 16
// 16

// const isPalindrome = (str) => {
// 	const original = str
// 	console.log(original)
// 	if (str.length <= 1) return str // not sure why string is returned
// 	const reverse = isPalindrome(str.slice(1)) + str[0]
// 	if (original === reverse) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// const isPalindrome = (str) => {
// 	const beginning = str
// 	function reverse(str) {
// 		if (str.length <= 1) return str // not sure why string is returned
// 		let changed = reverse(str.slice(1)) + str[0]
// 		return changed
// 	}
// 	if (beginning === changed) {
// 		return true
// 	}
// }

const isPalindrome = (str) => {
	const reverse = (str) => {
		if (str.length <= 1) return str // not sure why string is returned
		return reverse(str.slice(1)) + str[0]
	}
	const string = str
	if (str.length < 1) return str // not sure why string is returned
	let reversed = reverse(str.slice(1)) + str[0]
	if (reversed === string) return true
	else return false
}

console.log(isPalindrome('vy'))
