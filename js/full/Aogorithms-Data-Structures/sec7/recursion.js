//  Our first recursive function

const countDown = (num) => {
	if (num <= 0) {
		// if number is less or equal to 0
		console.log('All done!') // log this
		return // end execution
	} // otherwise
	console.log(num) // log the number
	num-- // decrement the number
	countDown(num) // run again
} // repeats until num is less than 1

// const ex1 = countDown(7)

// Our second recursive function

// take in num
const sumRange = (num) => {
	if (num === 1) return 1 // if num equals 1 , retrun one , end exe(base case)
	return num + sumRange(num - 1) // add number to the output of sumRange run again with minus 1 (recursive call)
} // each time the function is called for each number the function before it has to wait for its completion to get the value.
// in this way the value is calculated only after the last function is run

const ex3 = sumRange(3) // 6
const ex2 = sumRange(9) // 45, the higher the number the more times the function gets called

console.log(ex3)
