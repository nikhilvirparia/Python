
// GIVEN AN ARRAY, RETURN ARRAY WITHOUT DUPLICATES
// [1,2,1,3,4,2] => [1,2,3,4]

// CHALLENGE RETURN THE SAME ARRAY

function removeDupe(arr) {

    //remove Dupe with for loops
    // Creating empty array variable
    var newArr = [];

    // First for loop to keep track of i
    for(var i = 0; i < arr.length; i++) {

        // Second for loop to keep track of j compare to i
        for (var j = i + 1; j < arr.length; j++) {


            // Need to compare i and j ot see if they match
            // If they match the for loop will continue and push in the new array
            if (arr[i] == arr[j]) {
               // console.log(newArr.push(arr[j]))
                arr.splice(j,1)

                }
            }

            // Remove the duplicate if it exists
        }
        return arr
    }

console.log(removeDupe([1, 3, 3, 4, 2]));