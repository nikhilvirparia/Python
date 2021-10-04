var big = [
    [67,34,45,56],
    [98,87,76,65],
    [56,67,78,89],
    [54,43,32,21]
];

var small = [
    [67,78],
    [43,32]
];

var anotherSmall = [
    [67,7],
    [43,32]
];


function matrixSearch (larger, smaller) {
    // Insert Code Here

    //Height of the Outer array
    for (i = 0; i < larger.length; i++){
        // Row of the inner array
        for (j = 0; j < larger[i].length; j++){
            // If will compare small[0][0] to the larger[i][j]
            console.log("Is smaller[0][0] = to larger[i][j] - " + smaller[0][0] + "," + larger[i][j])
            if(smaller[0][0] === larger[i][j]) {
                console.log("Found a match")
                // Variables checking if they match
                var matching = true
                // for loop to move forward in the small height
                for(sh = 0; sh < smaller.length; sh++){
                    // for loop to move forward in the small row
                    for(sr = 0; sr < smaller.length; sr++) {
                        // if will compare small[sh][sr] to the larger[i][j]
                       // console.log(larger[i + sh][j + sr])
                        console.log("Is smaller[sh][sr] !== to larger[i + sh][j + sr] - " + smaller[sh][sr] + "," + larger[i + sh][j + sr])
                        if(smaller[sh][sr] !== larger[i + sh][j + sr]) {

                            matching = false

                        }
                    }

                }

                // if matching equal true then it will return true
                if(matching === true) {
                    return true
                }
            }

        }
    }
    // if it does not match return false
    return false
}

console.log(matrixSearch(big,small));