function bubblesort(arr){

    //Two for loops running through the length of the array
    for(i = 0; i < arr.length; i++) {
        // Run the j in front of the i
        for(j = 0; j < (arr.length - i - 1); j++) {
            // compare the i > j and swap the value
            if(arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr)
}

bubblesort([6,4,5,2,9,3,8]) //output: [2,3,4,5,6,8,9]