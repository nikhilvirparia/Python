// Write a function that, given a sorted array and a value, determines whether the value is found within the array through recursively searching, and returns the index. Binary Search works by checking whether the value given is greater than or less than a midway point, which is why the given array must be sorted.

// Also, even though there's only an array and value given, you can add additional parameters to your function.


// val = 9
// arr = [1,2,3,5,7,9,10 ,11,13,14,15,56,78]

// [1,2,3,5,7,9,10      |        11,13,14,15,56,78] <----- 9 is less than halfway so now you can search the left side only
// [1,2,3,5,       |        7,9,10] <------  9 is greater than halfway so you can search the right side only
// [7,      |       9,10] <------ depending on where you split,9 is greater than halfway
// [9,     |      10] <------ whittle down to 1 or 2 items to check and solve!


function recursiveBinarySearch(arr, val, position, counter) {
    // your code here
        if(counter == 0)
            return false
        counter == -1 ? counter = Math.floor(arr.length/2) : counter = Math.floor(counter/2)
        if(arr[position+counter] == val)
            return position+counter
        else if (arr[position+counter] < val)
            return recursiveBinarySearch(arr, val, position + counter, counter)
        else
            return recursiveBinarySearch(arr, val, position , counter)
}

// console.log(recursiveBinarySearch2([1, 2, 4, 6, 9, 11], 4, 0, -1));
console.log(recursiveBinarySearch ([1, 2],-2, 0, -1));
console.log(recursiveBinarySearch ([1, 2], 4, 0, -1));
console.log(recursiveBinarySearch ([1, 2], 1, 0, -1));
console.log(recursiveBinarySearch ([1, 2, 2], 2, 0 ,-1));
console.log(recursiveBinarySearch ([],7, 0, -1));
console.log(recursiveBinarySearch ([1, 2, 2, 2, 2, 2, 2, 4, 5, 5, 5, 6, 6, 6], 2, 0, -1));
console.log(recursiveBinarySearch ([1, 1, 1, 1, 1],1, 0, -1));
console.log(recursiveBinarySearch ([1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9 ,10], 8, 0, -1));

// [1, 2],  -2
// [1, 2],  4
// [1, 2],  1
// [1,2,2], 2
// [], 7
// [1,2,2,2,2,2,2,4,5,5,5,5,6,6,6], 2
// [1, 1, 1, 1, 1], 1
// [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9, 10], 8

// make sure to test all given scenarios!

// extra challenge: don't use built-in functions, with the exception of rounding functions (Math.floor(), Math.ceil())
