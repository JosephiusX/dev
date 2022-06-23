// accept an array and a value
// loop through array and check if the current array element is equal to the value
// If it is, return the index at which the element is found
// if the value is never found, return -1

// failed - close tho I overcomplicated the last part
// const linearSearch = (arr, val) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (val === arr[i]) {
// 			return arr[i]
// 		}
// 	}
// }

//  Course solution
const linearSearch = (arr, val) => {
	for (let i = 0; i < arr.length; i++) {
		if (val === arr[i]) return i
	}
	return -1
}

const search = linearSearch([34, 56, 1, 2], 33)

console.log(search)
