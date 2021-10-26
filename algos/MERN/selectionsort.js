function selectionsort(arr){
    //loop through array, find the largest value and the index its in,
    // then put it in the correct place
    //hint: might need a nested for loop

    //Two for loops running through the length of the array
    for(let i = 0; i < arr.length; i++) {

       let largeindex = 0;
      // let largenum = arr[0];

        // Run the j in front of the i
        for(let j = 1; j < (arr.length - i); j++) {

            // checking if j is < then i
            // put the greater value to the right and put the less value to the left
            if(arr[j] > arr[largeindex]) {
               largenum = arr[j] // value changes when it's find the big value
               largeindex = j
            }
        }
        let temp = arr[largeindex]; // swap the value
        arr[largeindex] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log(arr)

}
selectionsort([6,4,5,2,9,3,8])
