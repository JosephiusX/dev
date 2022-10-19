// PURE RECURSION (not helper)

// take in array
const collectOddValues = (arr) => {
	let newArr = [] // initalize newArr array
	// if arr length is 0
	if (arr.length === 0) {
		return newArr // end exe, return new array
	} // otherwise
	// if remainder of first index of array devided by 2 is not 0 (is odd)
	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]) // push value of that index to newArr
	}
	// sets newArr to equal newArr concatinated the next iteration in which the array has its first index deleted
	newArr = newArr.concat(collectOddValues(arr.slice(1)))
	// this places the function on the stack as many times there are numbers to be checked
	// only when the last function has been added to the stack can they concat the values in reverse order of how they were placed concatinating the values into one array
	return newArr
}

const ex = collectOddValues([1, 2, 3, 4, 5])

console.log(ex)
