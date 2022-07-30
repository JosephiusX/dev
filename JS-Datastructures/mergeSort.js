// Merge function from earlier
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort

// PSUDO
// -Break up the array into halves until I have arrays that are empty or have one element
// - Once we have smaller sorted arrays, merge those arrays with other sorted arrays until we are back at the full length of the array
// - Once the array has been merged back toget

const mergeSort = arr => {
    if(arr.length <= 1) return arr; // base case for recursive function
    let mid = Math.floor(arr.length/2); // splits array
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([10,24,76,73])
