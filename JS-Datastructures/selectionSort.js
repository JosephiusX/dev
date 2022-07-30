// SELECTION SORT
// Similar to bubble sort,
// instead of first placing large values into sorted position, 
// it places small values into sorted position

// selecting the smallest and placeing it at the beginning



// with console.logs to see whats happening 

// const selectionSort = (arr) => {
    //     for(let i = 0; i < arr.length; i++) {
        //         let lowest = i;
//         for(var j = i+1; j < arr.length; j++){
//             if (arr[j] < arr[lowest]) {
//                 lowest = j;
//             }
//         }
//         console.log("*******************************")
//         console.log(arr);
//         console.log("Swapping To:");
//         let temp = arr[i]
//         arr[i] = arr[lowest];
//         arr[lowest] = temp;
//         console.log(arr);
//         console.log("*******************************")
//     }
//     return arr;
// }

// const selectionSort = (arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         let lowest = i;
//         for(let j = i+1; j < arr.length; j++){
//             if (arr[j] < arr[lowest]) {
//                 lowest = j;
//             }
//         }
//         if(i !== lowest) {
//             console.log(i, lowest);
//             let temp = arr[i]
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//         }
 
//     }
//     console.log(arr)    
//     return arr;
// }
// selectionSort([0,2,34,22,10,19,17]);



// ES2015 VERSION
const selectionSort = (arr) => {
    const swap = (arr, idx1, idx2) =>
      ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  
    for (let i = 0; i < arr.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[lowest] > arr[j]) {
          lowest = j;
        }
      }
      if (i !== lowest) swap(arr, i, lowest);
    }
  
    return arr;
  }
  
  selectionSort([0,2,34,22,10,19,17]);

//   Time complexity - O of N squared
//  not terribly efficient
// better than bubble if i want to minimize swaps made
