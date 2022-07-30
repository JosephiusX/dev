// //  JAVASCRIPT DEFAULT SORTING METHODS
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// // expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// // expected output: Array [1, 100000, 21, 30, 4]

// //  Specified

// // sorts in ascending neumeric order
// const numberCompare = (n1, n2) => {
//     return n1 - n2; // if negative value n1 comes first otherwise n2
// }

// console.log([6, 4, 15, 10].sort(numberCompare));

// // descending order
// const reverse = (n1, n2) => {
//     return n2 - n1; // if negative value n1 comes first otherwise n2
// }

// console.log([6, 4, 15, 10].sort(reverse));

// // Compare by length
// const compareByLen = (str1, str2) => {
//     return str1.length - str2.length;
// }

// // sort by value
// const items = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Zeros', value: 37 }
//   ];
  
//   // sort by value
//   items.sort(function (a, b) {
//     return a.value - b.value;
//   });

//   // sort by name
// items.sort(function(a, b) {
//     const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
  
//     // names must be equal
//     return 0;
// });

// // ES5
// const swap = (arr, idx1, idx2) => {
//     let temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
// }

// // ES2015
// const swap1 = (arr, idx1, idx2) => {
//     [arr[idx],arr[idx2]] = [arr[idx2],arr[idx1]];
// }

// // not optomized
// // makes more more steps than nessessary for whats needed as we can see with the console.log()
// const bubbleSort = (arr) => {
//     for(var i = 0; i < arr.length; i++) {
//         for(var j = 0; j < arr.length; j++) {
//             console.log(arr, arr[j], arr[j + 1]);
//             if(arr[j] > arr[j+1]){
//                 // swap
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//         console.log("ONE PASS COMPFLETE!")
//     }
//     return arr;
// }

// // bubbleSort([8,1,2,3,4,5,6,7]);
// bubbleSort([37,45,29,8,12,88,-3]);


// 71. BUBBLESORT OPTOMIZATION 

// Optimized BubbleSort with noSwaps
const bubbleSort = (arr) => {
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
      noSwaps = true;
      for(var j = 0; j < i - 1; j++){
        console.log(arr,arr[j],arr[j+1]);
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwaps = false;         
        }
      }
      if(noSwaps) break;
    }
    return arr;
  }
  
  bubbleSort([8,1,2,3,4,5,6,7]);


  // what is the time complexity of bubble sort? 

  //  in general N squared because we have a nested loop
  //  we are roughly makeing N comparison for each item in that array (Comparing each number to each number in array)
  // However for somewhat presorted data we can use noSwaps verson for best case of O of N
  // maybe usefull for presorted data although there are better options later.


