// Writing Factorial Iteratively

// take in uumber
const factorial = (num) => {
	let total = 1 // init total at 1
	// starting index value number, while i is greater then 0, decrement 1
	for (let i = num; i > 1; i--) {
		total *= i // multiply total the increment value
	}
	return total
}

const ex = factorial(4)

// console.log(ex)

// Writing Factorial recursively

const recursiveFactorial = (num) => {
	if (num === 1) return 1
	return num * recursiveFactorial(num - 1)
}

const ex2 = recursiveFactorial(9)

console.log(ex2)
