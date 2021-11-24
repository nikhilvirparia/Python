function bookIndex(arr) {
    let str = "";

    for(let i = 0; i < arr.length; i++) {
        // if the next element in line is equal
        if(arr[i + 1] === arr[i] + 1) {
            // starting point is equal to current Location
            let start = arr[i];

            // The goal is to find end of our consecutive number for example, [3,5] [9-10]
            while(arr[i + 1] === arr[i] + 1) {
                i++;
            }

            // Exit the while loop once the end points is found
            let end = arr[i];

            // concatenate into the final string after creating the portion of the string
            str += start + "-" + end;
        }

        else {
            str += arr[i];
        }

        // if we past the first index, add a comma while within the loop
        if(i < arr.length && i !== arr.length - 1) {
            str += ", ";
        }
    }

    return str;
}

console.log(bookIndex([1, 3, 4, 5, 7, 9, 10, 12]))