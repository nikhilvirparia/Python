// Binary Search

// Given a sorted array and a value, return whether
//  the array contains that value. Do not sequentially 
//  iterate the array. Instead 'divide and conquer'. 
//  Taking advantage of the fact that array is sorted. 


function binarySearch(arr, value){
    let midpoint = Math.floor(arr.length / 2)
    let midpointVal = arr[midpoint]

    // Run the first if statement the value in the left of the array
    // value is 2, 2 < 5 then slice in half then given the new midpoint

    while (value !== midpointVal) {
    if (value < midpointVal) {
        arr = arr.slice(0,midpoint)

    // else if run if the value is in the right of the array
    } else if (value > midpointVal) {
        arr = arr.slice(midpoint + 1)
    }
        midpoint = Math.floor(arr.length / 2)
        midpointVal = arr[midpoint]

        // Edge cases
        if(arr.length == 0) {
            return false
        }
    }
    return true
}

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,12,13], 10))    //TRUE
// console.log(binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16], 9 ))    //FALSE
// console.log(binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16], 16 ))    //TRUE
// console.log(binarySearch([0, 2, 4, 6, 8, 12, 14, 16], 8 ))    //TRUE
// console.log(binarySearch([8], 8 ))  // TRUE

// // console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 9));
// // ---> 1 2 3 4 5  |  6 7 8 9 10
// // ---> 6 7  |  8 9 10
// // ---> 8  [9]  10  (found)

function binarySearchRecursive(arr, target) {
    let midpoint = Math.floor(arr.length / 2)
    let midpointVal = arr[midpoint]

   //Edge case
    if (target === midpointVal) {
        return true;
    }

    if (target < midpointVal) {
        return binarySearchRecursive(arr.slice(0, midpoint), target)
    } else if (target > midpointVal) {
        return binarySearchRecursive(arr.slice(midpoint + 1), target)
    }

    return false;
}

// // console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 9));
// // ---> 1 2 3 4 5  |  6 7 8 9 10
// // ---> 6 7  |  8 9 10
// // ---> 8  [9]  10  (found)
//
console.log(binarySearchRecursive([1,2,3,4,5,6,7,8,9,10,12,13], 10))    //TRUE
console.log(binarySearchRecursive([0, 2, 4, 6, 8, 10, 12, 14, 16], 9 ))    //FALSE
console.log(binarySearchRecursive([0, 2, 4, 6, 8, 10, 12, 14, 16], 16 ))    //TRUE
console.log(binarySearchRecursive([0, 2, 4, 6, 8, 12, 14, 16], 8 ))    //TRUE
console.log(binarySearchRecursive([8], 8 ))  // TRUE