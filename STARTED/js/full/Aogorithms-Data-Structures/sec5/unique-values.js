// Implement a function called countUniqueValues, which accepts a sorted array
// and counts the unique values in the array.
// There can be negative numbers in the array
// but it will always be sorted

function countUniqueValues(arr) {
	if (arr.length === 0) return 0
	var i = 0
	for (var j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++
			arr[i] = arr[j]
		}
		console.log(i, j)
	}
	return i + 1
}

countUniqueValues([1, 2])
// countUniqueValues([1, 1, 1, 1, 1, 1, 3])
// countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7])

// countUniqueValues([1, 1, 1, 1, 1, 1, 2]); // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
