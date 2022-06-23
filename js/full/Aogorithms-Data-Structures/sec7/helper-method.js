// Helper method recursion

// function taking in array
const collectOddValues = (arr) => {
	let result = [] // init result as empty array

	// recursive function
	const helper = (helperInput) => {
		if (helperInput.length === 0) {
			return // end exe if helperInput length is 0
		} // otherwise
		// if first input of helperInput devided by 2 does not have a remainder of 0 ( is odd)
		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]) // push index onto result array
		} // then
		helper(helperInput.slice(1)) // remove first Input from array (shrinking array till empty)
	}
	helper(arr) // Starts the handler function, adding function to stack for each loop
	return result
}

const ex = collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])

console.log(ex)
