// the first useful ones
// starts by picking second element in the array
// compare second element with the one before it 
// swap if nessessary
// continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side)to place element in correct place.

const insertionSort = (arr) => {
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
            console.log(arr)
        }
        arr[j+1] = currentVal;
        console.log(arr)
    }
    return arr;
}

insertionSort([2,1,9,76,4])

// O of N squared

// because we keep one side sorted and insert things in the appropriate place ,
// does work well in a situation where data is streaming and i need to insert it at a moments notice